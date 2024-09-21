import { getGetUserProfileQueryKey, usePostUsersUserIdAddQuizAnswer } from '@/api-client';
import { useAuth } from '@/auth';
import { useQueryClient } from '@tanstack/react-query';

export const useAddQuizAnswer = () => {
  const queryClient = useQueryClient();
  const { loggedUserData } = useAuth();

  return usePostUsersUserIdAddQuizAnswer({
    mutation: {
      onSuccess: (updatedUserProfile) => {
        queryClient.setQueryData(
          getGetUserProfileQueryKey(loggedUserData?.telegramId as string),
          updatedUserProfile
        );
      },
    },
  });
};
