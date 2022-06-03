import styled from 'styled-components';
import { useFetch, useTheme } from '../../utils/hooks';
import { Loader } from '../../utils/style/Atoms';
import RenderHeaderDirFile from './renderHeaderDirFile';
import * as React from 'react';
import Grid from './grid';
import Langagues from './langaguesChart';
import Todos from '../Todos/index'

import {
    Card,
    Row,
    Col,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
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


const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderLanguage = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
`

export default function Projet(props) {
  const { theme } = useTheme()
  const { id } = props.match.params
  const title = props.match.params.id
  const { data, isLoading, error } = useFetch(`https://api.github.com/repos/Heidet/${id}`)
 

  if (error) {
    return <span>Il y a un problème</span>
  }
  return isLoading ? (
      <LoaderWrapper>
        <Loader data-testid="loader" />
      </LoaderWrapper>
    ) : (
      <Card>
        <CardBody className="text-center">
          <CardTitle tag="h5">
            Projet: {title}
          </CardTitle>

          <CardSubtitle
            className="text-center"
            tag="h6"
          >
            {data.description}
          </CardSubtitle>
        </CardBody>
        <Container className="justify-content-center" fluid >
          <Row xs="2 justify-content-center">
            <Col xs="6">
              <Container fluid="lg">
                  <Card theme={theme}>
                    <HeaderLanguage> File </HeaderLanguage>
                    <Langagues id={id}/>
                    <RenderHeaderDirFile id={id}/>
                  </Card>
              </Container>
              <Container fluid="lg">
                <ContainerGrid >
                    <Grid id={id} />
                </ContainerGrid >
              </Container>
            </Col>
            <Col xs="3">
              <Container  fluid="lg">
                <Todos id={id}/>
              </Container>
            </Col>
          </Row>
        </Container>
      </Card>

   



  )
}