import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks';
import styled from 'styled-components';
import { StyledLink, Loader } from '../../utils/style/Atoms'

const StyledTitle = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const HomeWrapper = styled.div`
  // display: flex;
  width: '100%';
  height: 400;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const { theme } = useTheme()
  return (
    <HomeWrapper theme={theme}>
      <StyledTitle theme={theme}> Correction hebomadaire </StyledTitle>
      <Typography component="p" variant="h4">
        9
      </Typography>
      {/* <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography> */}
      <div>
        <StyledLink theme={theme} to="/">
          Voir les corrections
        </StyledLink>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          Voir les corrections
        </Link> */}
      </div>
    </HomeWrapper>
  );
}