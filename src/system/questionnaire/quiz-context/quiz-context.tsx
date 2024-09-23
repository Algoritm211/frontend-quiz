'use client';

import { useGetQuestionsByQuizId } from '@/api-client';
import { useAddQuizAnswer } from '@/api-client/custom-hooks/add-quiz-answer';
import { useAuth } from '@/auth';
import { useParams } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

import { mapToExtendedQuestions } from '@/system/questionnaire/quiz-context/util/map-to-extended-questions';
import { ExtendedQuestion } from '@/system/questionnaire/types';

import { scrollToTop } from '@/shared/utils';

interface QuizContextType {
  currentQuestion: ExtendedQuestion | null;
  currentQuestionIndex: number;
  totalQuestions: number;
  isQuizCompleted: boolean;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  isQuestionsLoading: boolean;
  isSavingAnswer: boolean;
  setQuestions: (questions: ExtendedQuestion[]) => void;
  markQuestionAsAnswered: (questionId: string, optionId: string) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { id: quizId } = useParams<{ id: string }>();
  const { loggedUserData } = useAuth();
  const [questions, setQuestions] = useState<ExtendedQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const { data: fetchedQuestions, isLoading: isQuestionsLoading } = useGetQuestionsByQuizId(quizId);
  const { mutate: addQuizAnswer, isPending: isSavingAnswer } = useAddQuizAnswer();

  const usersCompletedQuestions =
    loggedUserData?.completedQuizzes.find((completedQuiz) => {
      return completedQuiz.quizId === quizId;
    })?.answers || [];

  const isQuizCompleted = usersCompletedQuestions?.length === fetchedQuestions?.length;

  useEffect(() => {
    if (fetchedQuestions) {
      setQuestions(mapToExtendedQuestions(fetchedQuestions, usersCompletedQuestions));
      setCurrentQuestionIndex(0);
    }
  }, [fetchedQuestions]);

  useEffect(() => {
    scrollToTop();
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (loggedUserData && fetchedQuestions) {
      setQuestions(mapToExtendedQuestions(fetchedQuestions, usersCompletedQuestions));
    }
  }, [loggedUserData]);

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const markQuestionAsAnswered = (questionId: string, optionId: string) => {
    addQuizAnswer({
      userId: loggedUserData?.telegramId as string,
      data: {
        quizId,
        questionId,
        usersAnswerId: optionId,
      },
    });
  };

  const currentQuestion = questions.length > 0 ? questions[currentQuestionIndex] : null;

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        currentQuestionIndex,
        isQuestionsLoading,
        isSavingAnswer,
        isQuizCompleted,
        totalQuestions: questions.length,
        goToNextQuestion,
        goToPreviousQuestion,
        setQuestions,
        markQuestionAsAnswered,
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
