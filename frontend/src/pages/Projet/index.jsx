import styled from 'styled-components';
import { useFetch, useTheme } from '../../utils/hooks';
import { Loader } from '../../utils/style/Atoms';
import RenderHeaderDirFile from './renderHeaderDirFile';
import * as React from 'react';
import Grid from './grid';
import Langagues from './langaguesChart';
import IframeCommit from './iframeCommit';

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

const StyledCard = styled(Card)` 
  background-color: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : '#8186a0')};
`
const CardTitleStyled = styled(CardTitle)` 
  color: ${({ theme }) => (theme === 'light' ? '#8186a0' : '#ffffff')};
`

const CardSubtitleStyled = styled(CardTitle)`
  color: ${({ theme }) => (theme === 'light' ? '#8186a0' : '#ffffff')};
`

const ContainerGrid = styled.div`
    // display: flex;
    color: ${({ theme }) => (theme === 'light' ? '#8186a0' : '#ffffff')};
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
  color: ${({ theme }) => (theme === 'light' ? '#8186a0' : '#ffffff')};
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
      <StyledCard $theme={theme}>
        <CardBody className="text-center" >
          <CardTitleStyled tag="h5" $theme={theme}>
            Projet: {title}
          </CardTitleStyled>

          <CardSubtitleStyled
            className="text-center"
            tag="h6"
          >
            {data.description}
          </CardSubtitleStyled>
        </CardBody>
        <Container  className="justify-content-center" fluid >
          <Row xs="2 justify-content-center" >
            <Col xs="6" >
              <Container fluid="lg"  >
                  <Card theme={theme}>
                    <HeaderLanguage theme={theme}> File </HeaderLanguage>
                    <Langagues id={id}/>
                    <RenderHeaderDirFile id={id}/>
                  </Card>
              </Container>
              <Container fluid="lg" >
                <ContainerGrid theme={theme}>
                    <Grid id={id} />
                </ContainerGrid >
              </Container>
            </Col>
            <Col xs="3">
              <Container  fluid="lg" >
                <Todos id={id}/>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container className="justify-content-center mt-5" >
          <IframeCommit />
        </Container>
      </StyledCard>
  )
}