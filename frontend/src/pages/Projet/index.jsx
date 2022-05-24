import styled from 'styled-components'
import { useFetch, useTheme } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import * as React from 'react';
import Grid from './grid';
import Langagues from './langaguesChart';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Progress,
    CardFooter,
    Container,
    ListGroup,
    ListGroupItem
  } from "reactstrap";


const StyledTitle = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
const StyledSubTitle = styled.h3`
  text-align: center;
  padding-bottom: 30px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`


const ContainerGrid = styled.div`
    // display: flex;
    width: '100%';
    height: 400;
    padding-top: 2%;
    justify-content: center;
`


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

    //   Object.entries(languagesData.data).map(([key, value]) => (
    //     console.log({key}),
        // console.log({value})

function CalculLanguages(id) {
  const languagesData = useFetch(`https://api.github.com/repos/Heidet/${id}/languages`)
  // console.log('fonction =>',languagesData)
  if(languagesData.isLoading == true){
    return languagesData.data
  }
}

 


function Projet(props) {
  const { theme } = useTheme()
  const { id } = props.match.params
  const title = props.match.params.id
  const dataFile = useFetch(`https://api.github.com/repos/Heidet/${id}/contents`)
  const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}`)

  

  if (error) {
    return <span>Il y a un problème</span>
  }
  return isLoading ? (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    ) : (
      
    //   console.log(data),
      <HomeWrapper theme={theme}>
        <StyledTitle theme={theme}>
            Projet: {title}
        </StyledTitle>
        <StyledSubTitle theme={theme}>
            {data.description}
        </StyledSubTitle>
        <Container fluid="lg">
            <Card theme={theme}>
              <Langagues id={id}/>
                <ListGroup theme={theme}>
                  {dataFile.data.map(i => {
                    if(i.type == 'dir'){
                      return (
                        <ListGroupItem className="justify-content-between">
                          {i.name}{' '}
                        </ListGroupItem>
                      )
                    }
                  })}
                </ListGroup>
                <ListGroup>
                  {dataFile.data.map(i => {
                    if(i.type == 'file'){
                      return (
                        <ListGroupItem className="justify-content-between">
                          {i.name}{' '}
                        </ListGroupItem>
                      )
                    }
                  })}
                </ListGroup>
            </Card>
        </Container>

        <Container fluid="lg">
            <ContainerGrid>
                <Grid id={id}/>
            </ContainerGrid>
        </Container>
      </HomeWrapper>
  );
}


export default Projet
