import styled from 'styled-components'
import { useDarkMode } from '../context/DarkModeContext'

const StyledLogo = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`

function Logo() {
  const { darkMode } = useDarkMode()
  const src = darkMode ? '/logo-dark.png' : '/logo-light.png'

  return (
    <StyledLogo>
      <Img src={src} alt="logo" />
    </StyledLogo>
  )
}

export default Logo
