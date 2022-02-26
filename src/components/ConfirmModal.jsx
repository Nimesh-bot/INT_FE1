import styled from "styled-components"
import { primary } from "../assets/Colors"
import { Title } from "../pages/Home"
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Container = styled.div`
    visibility: ${props => props.visible};
    position: fixed;
    top: 0%;
    left: 0%;
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
    margin-top: ${props => props.margin};
    align-items: center;
    width: ${props => props.width};
    justify-content: ${props => props.justify};
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

const ConfirmModal = (props) => {
    return (
        <Container visible={props.display}>
            <ModalContainer>
                <Wrapper width="100%" justify="space-between">
                    <Title size="1rem" weight="300">CONFIRM</Title>
                    <CancelOutlinedIcon sx={{color: "white"}} onClick={props.close} />
                </Wrapper>
                <Wrapper margin="1rem">
                    <Title size="0.75rem" weight="300">Buy {props.value} {props.name}</Title>
                    <Button onClick={props.event}>Confirm</Button>
                </Wrapper>
            </ModalContainer>
        </Container>
    )
}

export default ConfirmModal