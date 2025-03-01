import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../../services/apiSettings'

export default function useSettings() {
  const {
    data: settings,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  })

  return { settings, isLoading, error }
}
