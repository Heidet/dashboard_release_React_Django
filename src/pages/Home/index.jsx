import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme, useFetch } from '../../utils/hooks'
import HomeIllustration from '../../assets/home-illustration.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
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

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
  flex: 1;
`

function Home() {
  const { theme } = useTheme()
// https://gitlab.ezdev.fr/api/v4/projects/1/access_tokens/yXmu-iz3FeJkzbP2mHSz
  const { data, isLoading, error } = useFetch(
    // `https://gitlab.ezdev.fr/api/v4/projects/`
    `https://api.github.com/users/Heidet/repos`
  )

  
return (
  console.log('data =>',data),
  console.log('isLoading =>',isLoading),
  console.log('error =>',error),
    <HomeWrapper>
      {/* <HomerContainer theme={theme}> */}
        <LeftCol>
          <StyledTitle theme={theme}>

          <h1> Fetch data projet en cours </h1>  
   
            <Container>
              <Row>
              {data.map((data) => ( 
                <Col 
                md="auto" key = { data.id }
                > 
                  Projet : { data.name }{ data.id },
                </Col>
              ))}
              </Row>
            
            </Container>
   

            {/* Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents */}
          </StyledTitle>
          {/* <StyledLink to="/survey/1" $isFullLink> */}
            {/* toto */}
          {/* </StyledLink> */}
        </LeftCol>
        {/* <Illustration src={HomeIllustration} /> */}
      {/* </HomerContainer> */}
    </HomeWrapper>
  )
}

export default Home
