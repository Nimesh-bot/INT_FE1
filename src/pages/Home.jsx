import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import Card from "../components/Card"
import { user } from "../data"
import { mobile, tablet } from "../responsive"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { change, revert } from "../redux/themeSlice";

const Home = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  
  // Styled-Components
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.bg};
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
  const Title = styled.h1`
    font-size: ${props => props.size || "1.5rem"};
    font-weight: ${props => props.weight || "500"};
    color: ${theme.text};
    text-transform: ${props => props.text || "uppercase"};
  `
  const Desc = styled.p`
    font-size: ${props => props.size || "1rem"};
    font-weight: ${props => props.weight || "300"};
    color: ${props => props.color || theme.text};
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
    background-color: ${theme.primary};
  `
  const CardContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    align-items: center;
    padding: 1rem 0;
  
    ${tablet({
        gap: "4rem"
    })}
  `

  const [dark, setDark] = useState(true);
  
  const handleToggle = () => {
    setDark(!dark);

    if (dark === true) {
        dispatch(change())
    }
    else {
        dispatch(revert())
    }
}
  const [userDetail, setUserDetail] = useState(user)
  const [value, setValue] = useState(0)
  
  const handleBuy = (i) => {
    const boughtAmount = parseInt(value);
    if (boughtAmount < 0) {
      alert("Please enter a valid amount")
    } else {
      let newUser = {...userDetail}
      newUser.cryptoCurrencies[i].own += boughtAmount
      setUserDetail(newUser);
    }
  }

  const totalCryptos = userDetail.cryptoCurrencies.length;
  let uniqueOwned = 0;
  
  function uniqueCounter() {
    for(let i = 0; i < totalCryptos; i++) {
      if(userDetail.cryptoCurrencies[i].own !== 0) {
        uniqueOwned+=1;  
      }
    }
  }
  uniqueCounter();
  
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title Msize="1rem">Welcome</Title>
          <FlexWrapper>
            <Desc color={`${theme.disabled}`}>UNIQUE CRYTPO OWNED</Desc>
            <Desc color={`${theme.primary}`} weight="500">{uniqueOwned}</Desc>
            {
              (dark)? 
              (
                <DarkModeIcon style={{color: `${theme.primary}`}} onClick={handleToggle}/>
              )
              :
              (
                  <LightModeIcon style={{color: `${theme.primary}`}} onClick={handleToggle}/>
              )
            }
          </FlexWrapper>
        </Content>

        <Content margin="3rem 0" direction="column">
          <FlexWrapper width="100%">
            <Box />
            <Title>Cryptocurrencies</Title>
          </FlexWrapper>

          <CardContainer>
              <Card 
                name={userDetail.cryptoCurrencies[0].name}
                avatar={userDetail.cryptoCurrencies[0].avatar}
                own={userDetail.cryptoCurrencies[0].own}
                title={userDetail.cryptoCurrencies[0].name}  
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(0)}} 
              />
              <Card 
                name={userDetail.cryptoCurrencies[1].name}
                avatar={userDetail.cryptoCurrencies[1].avatar}
                own={userDetail.cryptoCurrencies[1].own}
                title={userDetail.cryptoCurrencies[1].name} 
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(1)}} 
              />
              <Card 
                name={userDetail.cryptoCurrencies[2].name}
                avatar={userDetail.cryptoCurrencies[2].avatar}
                own={userDetail.cryptoCurrencies[2].own}
                title={userDetail.cryptoCurrencies[2].name} 
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(2)}} 
              />
              <Card 
                name={userDetail.cryptoCurrencies[3].name}
                avatar={userDetail.cryptoCurrencies[3].avatar}
                own={userDetail.cryptoCurrencies[3].own}
                title={userDetail.cryptoCurrencies[3].name} 
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(3)}} 
              />
              <Card 
                name={userDetail.cryptoCurrencies[4].name}
                avatar={userDetail.cryptoCurrencies[4].avatar}
                own={userDetail.cryptoCurrencies[4].own}
                title={userDetail.cryptoCurrencies[4].name}  
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(4)}}
              />
              <Card 
                name={userDetail.cryptoCurrencies[5].name}
                avatar={userDetail.cryptoCurrencies[5].avatar}
                own={userDetail.cryptoCurrencies[5].own}
                title={userDetail.cryptoCurrencies[5].name}  
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(5)}}
              />
              <Card 
                name={userDetail.cryptoCurrencies[6].name}
                avatar={userDetail.cryptoCurrencies[6].avatar}
                own={userDetail.cryptoCurrencies[6].own}
                title={userDetail.cryptoCurrencies[6].name}  
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(6)}}
              />
              <Card 
                name={userDetail.cryptoCurrencies[7].name}
                avatar={userDetail.cryptoCurrencies[7].avatar}
                own={userDetail.cryptoCurrencies[7].own}
                title={userDetail.cryptoCurrencies[7].name}  
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(7)}}
              />
              <Card 
                name={userDetail.cryptoCurrencies[8].name}
                avatar={userDetail.cryptoCurrencies[8].avatar}
                own={userDetail.cryptoCurrencies[8].own}
                title={userDetail.cryptoCurrencies[8].name} 
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(8)}} 
              />
              <Card 
                name={userDetail.cryptoCurrencies[9].name}
                avatar={userDetail.cryptoCurrencies[9].avatar}
                own={userDetail.cryptoCurrencies[9].own}
                title={userDetail.cryptoCurrencies[9].name} 
                changeEvent={(e) => setValue(e.target.value)}
                event={() => {handleBuy(9)}} 
              />
          </CardContainer>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Home