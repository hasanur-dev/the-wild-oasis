import { getCurrentUser } from '../../services/apiAuth'
import { useQuery } from '@tanstack/react-query'

export default function useUser() {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  })
  return { user, isLoading, isAuthenticated: user?.role === 'authenticated' }
}
