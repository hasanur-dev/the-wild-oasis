import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createEditCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'
import { updateCurrentUser } from '../../services/apiAuth'

export default function useUpdateUser() {
  const queryClient = useQueryClient()

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('User account updated successfully')

      queryClient.invalidateQueries({
        queryKey: ['user'],
      })
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  return { updateUser, isUpdating }
}
