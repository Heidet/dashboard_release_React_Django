import * as React from 'react';
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks'
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';

const NavContainer = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function NavBar() {
  const { theme } = useTheme()
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    // <AppBar position="absolute" open={open}>
    <NavContainer $theme={theme}>
        <Toolbar
          sx={{
              pr: '24px', // keep right padding when drawer closed
          }}
        >
        </Toolbar>
        <StyledLink $theme={theme} to="/Dashboard">
          <HomeIcon />
          {/* <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} /> */}
        </StyledLink>
    </NavContainer>
    // </AppBar>
  )
}


