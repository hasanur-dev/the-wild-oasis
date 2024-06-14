import { useQuery } from '@tanstack/react-query'
import { getCabins } from '../../services/apiCabins'

export default function useCabins() {
  const {
    data: cabins,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  })

  return { isLoading, cabins, error }
}
