import { useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { mobile, tablet } from "../responsive"
import Backdrop from "./Backdrop"


const Card = (props) => {
    const theme = useSelector((state) => state.theme);
    
    // Styled-Components
    const Content = styled.div`
        width: 100%;
        border-radius: 10px;
        background-color: ${theme.black};
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
        background-color: ${theme.primary};
        color: ${theme.text};
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
        background: ${theme.black};
    
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

    const [show, setShow] = useState("hidden")

    const handleClick = () => {
        setShow("visible")
    }
    const handleClose = () => {
        setShow("hidden")
    }

    return (
        <>
            {/* <Container> */}
            <Wrapper>
                <Content>
                    <Title weight="300">{props.name}</Title>
                    <Image src={props.avatar} />
                    <Desc color={`${theme.disabled}`}>Owned: {props.own}</Desc>
                </Content>
                <Button onClick={handleClick}>BUY MORE</Button>
            </Wrapper>
            {/* </Container> */}
            <Backdrop 
                name={props.title} 
                display={show} 
                close={handleClose}
                changeEvent={props.changeEvent}
                event={props.event}
            />
        </>
    )
}

export default Card