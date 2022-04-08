import styled from 'styled-components'
import EmptyList from '../../components/EmptyList'
import PropTypes from 'prop-types'
import { ProjetsContext } from '../../utils/context'
import colors from '../../utils/style/colors'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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


const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: "user", headerName: "User", width: 70 },
  { field: "fromaddress", headerName: "Sender", width: 70 },
  { field: "dkimSpfChk", headerName: "DKIM/SPF", width: 70 },
  { field: "replySenderMismatch", headerName: "Reply MisMatch", width: 70 },
  { field: "riskywordchk", headerName: "Risky Word", width: 70 },
  { field: "domainagechk", headerName: "Sender Domain Age", width: 70 },
  { field: "attachmentChk", headerName: "Attachments", width: 70 },
  { field: "riskyLinkAge", headerName: "Body Link Age", width: 70 },
  { field: "riskyLinkTypo", headerName: "Link Typosquatting", width: 70 },
  {
    field: "senderTypoSquatting",
    headerName: "Sender TypoSquatting",
    width: 70,
  }
];
// componentDidMount() {
//   const { id } = this.props.match.params
//   fetch(`https://api.github.com/repos/Heidet/${id}/commits`)
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           items: result.items
//         });
//       },
//       // Remarque : il est important de traiter les erreurs ici
//       // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
//       // des exceptions provenant de réels bugs du composant.
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
//   }


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

export default function Commits(props) {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 6,
  // });
  const { theme } = useTheme()
  const { id } = props.match.params
  const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}/commits`)

  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        id={Math.random()}
        rows={data}
         columns={columns}

         pageSize={15}
         checkboxSelection
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}

// function Commits(props) {
//   const { theme } = useTheme()
//   const { id } = props.match.params
//   const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}/commits`)


//   if (error) {
//     return <span>Il y a un problème</span>
//   }
//   return isLoading ? (
//       <LoaderWrapper>
//         <Loader data-testid="loader" />
//       </LoaderWrapper>
//     ) : (
//       console.log(data),
//       <HomeWrapper theme={theme}>
//         <ul>
//           {data.map(data => (
//             <Col theme={theme}>
//               <StyledLink $theme={theme}>Release : {data.node_id }</StyledLink>
//               <br></br>
//             </Col>
//           ))}
//         </ul>
//       </HomeWrapper>
//   );
// }


// export default Commits
