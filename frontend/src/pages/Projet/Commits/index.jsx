import styled from 'styled-components'
import { useFetch, useTheme } from '../../../utils/hooks'
import { Loader } from '../../../utils/style/Atoms'
import * as React from 'react';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';


const HomeWrapper = styled.div`
  // display: flex;
  width: '100%';
  height: 400;
  justify-content: center;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}


function Commits(props) {
  const { theme } = useTheme()
  const { id } = props.match.params
  const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}/commits`)


  if (error) {
    return <span>Il y a un problème</span>
  }
  return isLoading ? (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    ) : (
      <HomeWrapper theme={theme}>
        {/* <StyledTitle theme={theme}>
          <h1> Fetch data projet en cours </h1>   
        </StyledTitle>
        <ul>
          {data.map(data => (
            <Col theme={theme}>
              <StyledLink $theme={theme}>Release : {data.node_id }</StyledLink>
              <br></br>
            </Col>
          ))}
        </ul> */}
      </HomeWrapper>
  );
}


export default Commits
