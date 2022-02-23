import styled from "styled-components"
import { primary } from "../assets/Colors"
import { Title } from "../pages/Home"

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
`
const ModalContainer = styled.div`
    padding: 2rem;
    border-radius: 10px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`
const Input = styled.input`
    flex: 3;
    padding: 0.5rem;
    border: none;

    &:focus {
        outline: none;
    }
`
const Button = styled.button`
    border: none;
    flex: 1;
    padding: 0.5rem;
    background-color: transparent;
    color: ${primary};
`

const Backdrop = (props) => {
  return (
    <Container onClick={props.event}>
        <ModalContainer>
            <Title>{props.name}</Title>
            <Wrapper>
                <Input type="number" placeholder="0"></Input>
                <Button>BUY</Button>
            </Wrapper>
        </ModalContainer>
    </Container>
  )
}

export default Backdrop