import { useQuery } from '@tanstack/react-query'
import { getBooking } from '../../services/apiBookings'
import { useParams } from 'react-router-dom'

export default function useBooking() {
  const { bookingId } = useParams()
  const {
    data: booking,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  })

  return { isLoading, booking, error }
}
