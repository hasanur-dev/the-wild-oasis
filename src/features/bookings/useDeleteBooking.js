import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export function useDeleteBooking() {
  const queryClient = useQueryClient()

  const { mutate: deleteBooking, isPending: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success(`Booking successfully deleted`)
      queryClient.invalidateQueries(['bookings'])
    },

    onError: (error) => {
      console.log(error)
      toast.error('There was an error while deleting booking')
    },
  })

  return { deleteBooking, isDeletingBooking }
}
