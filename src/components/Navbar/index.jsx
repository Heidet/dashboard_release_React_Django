import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/light-logoged.png'
import LightLogo from '../../assets/dark-logoged.png'
import { useTheme } from '../../utils/hooks'
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

const HomeLogo = styled.img`
  height: 70px;
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`
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
    <NavContainer>
        <Toolbar
        sx={{
            pr: '24px', // keep right padding when drawer closed
        }}
        >
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
            }}
        >
            <MenuIcon />
        </IconButton>
        <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
        >
        <StyledLink $theme={theme} to="/">
          <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
        </StyledLink>
        </Typography>
        <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
            </Badge>
        </IconButton>
        </Toolbar>
    </NavContainer>
    // </AppBar>
  )
}


