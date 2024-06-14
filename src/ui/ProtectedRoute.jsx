import React, { useEffect } from 'react'
import { getCurrentUser } from '../services/apiAuth'
import useUser from '../features/authentication/useUser'
import Spinner from './Spinner'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  // 1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser()
  //   console.log(user, isLoading)

  // 2. If there is no authenticated user, redirect to /login

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login')
  }, [isAuthenticated, navigate, isLoading])

  // 3. While Loading, show a spinner
  if (isLoading) {
    console.log(isLoading, user)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )
  }

  // 4. If there is a user, render the app
  if (isAuthenticated) return children
}
