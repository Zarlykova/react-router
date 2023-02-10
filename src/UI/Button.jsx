import styled from "styled-components"

export const Button = ({children ,onClick })=>{
    return(
        <StyledButton onClick={onClick}> {children} </StyledButton>
    )
}

const StyledButton = styled.button`
    padding: 1rem 1.5rem;
    background-color: darkcyan;
    border: none;
    border-radius: 1.5rem;
    color: white;
    font-size: 1rem;

`