import styled from 'styled-components'
import { useFetch, useTheme } from '../../utils/hooks'
import { Loader } from '../../utils/style/Atoms'
import * as React from 'react';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';

import {
    ListGroup,
    ListGroupItem
} from "reactstrap";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ListGroupRefact = styled(ListGroup)`
    max-height: 200px;
    margin-bottom: 10px;
    overflow-y:scroll;
    -webkit-overflow-scrolling: touch;
`

export default function RenderHeaderDirFile(params) {
    const { theme } = useTheme()
    const { id } = params
    const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}/contents`)
    
    function renderDir() {
        return <> {
            data.map(i => {
                if(i.type === 'dir'){
                    return (
                    <ListGroupItem $theme={theme}  className="justify-content-between">
                        <FolderOpenTwoToneIcon theme={theme} /> {i.name}{' '}
                    </ListGroupItem>
                    )
                }
            })
        }</>;
    }

    function renderFile() {
        return <> {
            data.map(i => {
                if(i.type === 'file'){
                    return (
                    <ListGroupItem $theme={theme} className="justify-content-between">
                        <InsertDriveFileTwoToneIcon  theme={theme}/> {i.name}{' '}
                    </ListGroupItem>
                    )
                }
            })
        }</>;
    }

    if (error) {
        return <span>Il y a un problème</span>
    }

    return isLoading ? (
        <LoaderWrapper>
        <Loader data-testid="loader" />
        </LoaderWrapper>
    ) : (
        <ListGroupRefact className='listgroupedirfile' theme={theme}>
            {renderDir()}
            {renderFile()}
        </ListGroupRefact>
    );
}

