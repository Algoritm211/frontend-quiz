import { getGetUserProfileQueryKey, usePostUsersUserIdAddQuizAnswer } from '@/api-client';
import { useAuth } from '@/auth';
import { useQueryClient } from '@tanstack/react-query';

import { EXPLANATION_BLOCK_ID } from '@/system/questionnaire/constants/questionnaire';

export const useAddQuizAnswer = () => {
  const queryClient = useQueryClient();
  const { loggedUserData } = useAuth();

  return usePostUsersUserIdAddQuizAnswer({
    mutation: {
      mutationKey: ['add-quiz-answer-to-user-profile'],
      onSuccess: (updatedUserProfile) => {
        queryClient.setQueryData(
          getGetUserProfileQueryKey(loggedUserData?.telegramId as string),
          updatedUserProfile
        );
        setTimeout(() => {
          const explanationScrollBlock = document?.getElementById(EXPLANATION_BLOCK_ID);
          explanationScrollBlock?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      },
    },
  });
};
