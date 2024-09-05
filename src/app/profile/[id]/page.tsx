import { getGetUserProfileQueryKey, getUserProfile } from '@/api-client';
import { UserProfile } from '@/system';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export default async function MainPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getGetUserProfileQueryKey(params.id),
    queryFn: () => getUserProfile(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserProfile />
    </HydrationBoundary>
  );
}
