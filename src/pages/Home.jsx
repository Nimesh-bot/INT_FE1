import styled from "styled-components"
import { bg, disabled, primary, text } from "../assets/Colors"
import Card from "../components/Card"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${bg};
`	
const Wrapper = styled.div`
  width: 75vw;
  margin: 1rem 0;

  ${mobile({
    width: "90vw"
  })}
`
const Content = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.margin || "0"};

  ${mobile({
    flexDirection: "column",
  })}
`
export const Title = styled.h1`
  font-size: ${props => props.size || "1.5rem"};
  font-weight: ${props => props.weight || "500"};
  color: ${text};
  text-transform: ${props => props.text || "uppercase"};
`
export const Desc = styled.p`
  font-size: ${props => props.size || "1rem"};
  font-weight: ${props => props.weight || "300"};
  color: ${props => props.color || text};
`
const FlexWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: ${props => props.width};

  ${mobile({
    width: "unset"
  })}
`
const Box = styled.div`
  width: 0.75rem;
  height: 1.5rem;
  margin: 10px 0;
  background-color: ${primary};
`

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title Msize="1rem">Welcome</Title>
          <FlexWrapper>
            <Desc color={`${disabled}`}>UNIQUE CRYTPO OWNED</Desc>
            <Desc color={`${primary}`} weight="500">6</Desc>
          </FlexWrapper>
        </Content>

        <Content margin="3rem 0" direction="column">
          <FlexWrapper width="100%">
            <Box />
            <Title>Cryptocurrencies</Title>
          </FlexWrapper>

          <Card />
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Home