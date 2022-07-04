import styled from 'styled-components'
import { useTheme, useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Atoms'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
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
      <GridToolbarColumnsButton  />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [
  {
    field: "Detail",
    headerName: "Detail",
    width: 100,
    renderCell: (params) => (
      <Button outline color="primary"><Link to={`/projet/${params.row.name}`}>Detail</Link></Button>
    )
  },
  { field: 'sha', headerName: 'ID', width: 200, 
  valueGetter: (params) => {
    var result = params.id.sha
    return result
  }},
  { field: "name", headerName: "Auteur", width: 110,
  valueGetter: (params) => {
    var result = params.id.commit.committer.name
    return result
  }},
  { field: "message", headerName: "Message", width: 300,
  valueGetter: (params) => {
    var result = params.id.commit.message
    return result
  }},
  { field: "updated_at", headerName: "Date", width: 200,
  valueGetter: (params) => {
    var result = params.id.commit.committer.date
    return result
  }},
];



export default function Grid(params) {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `https://api.github.com/repos/Heidet/${params.id}/commits`
  )

  if (error) {
    return <span>Il y a un problème</span>
  }

  return isLoading ? (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    ) : (
    <HomeWrapper>
        <div theme={theme} style={{ height: 400, width: '100%' }}>
          <DataGrid
            rowHeight={80}
            rows={data}
            getRowId= {(params) => params}
            columns={columns}
            pageSize={15}
            density="compact"
            disableMultipleSelection= {true}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
    </HomeWrapper>
  );
}
