import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import { useTheme, useFetch } from '../../utils/hooks'
import * as React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

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
  { field: 'id', headerName: 'ID', width: 200,},
  { field: "name", headerName: "Projet", width: 200,},
  { field: "full_name", headerName: "Full_name", width: 200,},
  { field: "updated_at", headerName: "updated_at", width: 200,},
];



export default function Repos() {
  const { theme } = useTheme()

  const { data, isLoading, error } = useFetch(
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
    <HomeWrapper>
        <div theme={theme} style={{ height: 400, width: '100%' }}>
          <DataGrid
            rowHeight={80}
            rows={data}
            columns={columns}
            pageSize={15}
            density="compact"
            isRowSelectable={(params) =>  console.log(params)}
            disableMultipleSelection= {true}
            onCellClick={(params)  => console.log(params)}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
    </HomeWrapper>
  );
}

