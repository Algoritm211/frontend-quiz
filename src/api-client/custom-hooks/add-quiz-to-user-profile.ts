import { getGetUserProfileQueryKey, usePostAddQuizToUsersProfile } from '@/api-client';
import { useAuth } from '@/auth';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next-nprogress-bar';

export const useAddQuizToUserProfile = (quizId: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { loggedUserData } = useAuth();

  return usePostAddQuizToUsersProfile({
    mutation: {
      onSuccess: (updatedUserProfile) => {
        queryClient.setQueryData(
          getGetUserProfileQueryKey(loggedUserData?.telegramId as string),
          updatedUserProfile
        );
        void router.push(`/quiz/${quizId}/questions`);
      },
    },
  });
};
