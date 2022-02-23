import styled from "styled-components"
import { disabled, primary, text } from "../assets/Colors"
import { user } from "../data"
import { Title, Desc } from "../pages/Home"
import { mobile, tablet } from "../responsive"

const Container = styled.div`
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
const Content = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: #000;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 2;
    transition: all 0.5s ease-in-out;

    ${tablet({
        backgroundColor: "transparent",
        transform: "translateY(-2.5rem)",
        
    })}
`
const Button = styled.button`
    padding: 0.5rem 1rem;
    position: absolute;
    border-radius: 4px;
    background-color: ${primary};
    color: ${text};
    border: none;
    transform: translateY(4rem);
    transition: all 0.5s ease-in-out;
    z-index: 1;

    ${tablet({
        transform: "translateY(5rem)",
    })}
`
const Wrapper = styled.div`
    width: 250px;
    height: 300px;
    position: relative;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #000;

    ${mobile({
        flex: "1 0 100%"
    })}

    &:hover ${Content} {
        transform: translateY(-3rem);
        background-color: transparent;
    }
    
`
const Image = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`

const Card = () => {
  return (
    <Container>
        {user.cryptoCurrencies.map((items) => (
            <Wrapper>
                <Content>
                    <Title weight="300">{items.name}</Title>
                    <Image src={items.avatar} />
                    <Desc color={`${disabled}`}>Owned: {items.own}</Desc>
                </Content>
                <Button>BUY MORE</Button>
            </Wrapper>
        ))}
    </Container>
  )
}

export default Card