'use client';

import { useGetQuestionsByQuizId } from '@/api-client';
import { useParams } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

import { mapToExtendedQuestions } from '@/system/questionnaire/quiz-context/util/map-to-extended-questions';
import { ExtendedQuestion } from '@/system/questionnaire/types';

interface QuizContextType {
  currentQuestion: ExtendedQuestion | null;
  currentQuestionIndex: number;
  totalQuestions: number;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  setQuestions: (questions: ExtendedQuestion[]) => void;
  markQuestionAsAnswered: (questionId: string, optionId: string) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { id: quizId } = useParams<{ id: string }>();
  const [questions, setQuestions] = useState<ExtendedQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const { data: fetchedQuestions, isLoading, error } = useGetQuestionsByQuizId(quizId);

  useEffect(() => {
    if (fetchedQuestions) {
      setQuestions(mapToExtendedQuestions(fetchedQuestions));
      setCurrentQuestionIndex(0);
    }
  }, [fetchedQuestions]);

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const markQuestionAsAnswered = (questionId: string, optionId: string) => {
    setQuestions((prevQuestions) => {
      const newQuestions = prevQuestions.map((question) => {
        if (question._id === questionId) {
          return { ...question, isAnswered: true, selectedAnswerOptionId: optionId };
        }
        return question;
      });

      return newQuestions;
    });
  };

  const currentQuestion = questions.length > 0 ? questions[currentQuestionIndex] : null;

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        currentQuestionIndex,
        goToNextQuestion,
        goToPreviousQuestion,
        setQuestions,
        markQuestionAsAnswered,
        totalQuestions: questions.length,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
