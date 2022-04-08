import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import { Link } from 'react-router-dom'
import { useTheme, useFetch } from '../../utils/hooks'
import HomeIllustration from '../../assets/home-illustration.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


const HomeWrapper = styled.div`
  // display: flex;
  width: '100%';
  height: 400;
  justify-content: center;
`

const HomerContainer = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  display: flex;
  flex-direction: row;
  // max-width: 1200px;
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

const ColStyled = styled.span`
  // line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`


const StyledTitle = styled.h2`
  padding-bottom: 30px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
  flex: 1;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton  />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "full_name", headerName: "full_name", width: 100 },
  { field: "updated_at", headerName: "updated_at", width: 100 },


];

export default function Repos() {
  const { theme } = useTheme()
  // https://gitlab.ezdev.fr/api/v4/projects/1/access_tokens/yXmu-iz3FeJkzbP2mHSz
  const { data, isLoading, error } = useFetch(
    // `https://gitlab.ezdev.fr/api/v4/projects/`
    `https://api.github.com/users/Heidet/repos`
  )

  if (error) {
    return <span>Il y a un problème</span>
  }

  return isLoading ? (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    ) : (
    console.log('data =>',data),
    console.log('isLoading =>',isLoading),
    console.log('error =>',error),
    <HomeWrapper>
       {/* <HomerContainer theme={theme}> */}
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}

            pageSize={15}
            checkboxSelection
            components={{
              Toolbar: CustomToolbar,
            }}
            />
          </div>
       {/* </HomerContainer> */}
    </HomeWrapper>
  );
}

// function Repos() {
//   const { theme } = useTheme()
// // https://gitlab.ezdev.fr/api/v4/projects/1/access_tokens/yXmu-iz3FeJkzbP2mHSz
//   const { data, isLoading, error } = useFetch(
//     // `https://gitlab.ezdev.fr/api/v4/projects/`
//     `https://api.github.com/users/Heidet/repos`
//   )
//   if (error) {
//     return <span>Il y a un problème</span>
//   }


// return isLoading ? (
//   <LoaderWrapper>
//     <Loader data-testid="loader" />
//   </LoaderWrapper>
// ) : (
//   console.log('data =>',data),
//   console.log('isLoading =>',isLoading),
//   console.log('error =>',error),
//     <HomeWrapper>
//       <HomerContainer theme={theme}>
//         <LeftCol>
//           <StyledTitle theme={theme}>
//             <h1> Fetch data projet en cours </h1>   
//           </StyledTitle>
//           <Container>
//               <Row>
//               {data && data.map((result) => ( 
//                 <Col theme={theme}>
//                   <StyledLink $theme={theme} key={`/-${result.name}`} to={`/commits/${result.name}`} >Projet : { result.name }</StyledLink>
//                   <br></br>
//                 </Col>
//               ))}
//               </Row>
//           </Container>
//           {/* <StyledLink to="/survey/1" $isFullLink> */}
//             {/* toto */}
//           {/* </StyledLink> */}
//         </LeftCol>
//         {/* <Illustration src={HomeIllustration} /> */}
//       </HomerContainer>
//     </HomeWrapper>
//   )
// }

// export default Repos
