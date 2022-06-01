import styled from 'styled-components'
import { useFetch, useTheme } from '../../utils/hooks'
import { Loader } from '../../utils/style/Atoms'
import * as React from 'react';

import {
    ListGroup,
    ListGroupItem
} from "reactstrap";



const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`


export default function RenderHeaderDirFile(params) {
    const { theme } = useTheme()
    const { id } = params
    // console.log(params)

    const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}/contents`)
        
    // console.log(data)
    function renderDir() {
        return <> {
            data.map(i => {
                if(i.type == 'dir'){
                    return (
                    <ListGroupItem className="justify-content-between">
                        {i.name}{' '}
                    </ListGroupItem>
                    )
                }
            })
        }</>;
    }
    function renderFile() {
        return <> {
            data.map(i => {
                if(i.type == 'file'){
                    return (
                    <ListGroupItem className="justify-content-between">
                        {i.name}{' '}
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
        <ListGroup theme={theme}>
            {renderDir()}
            {renderFile()}
        </ListGroup>
    );
}

