import styled from "styled-components";
import ButtonStyled from "./Button";

export const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#ffc0cb'};
  width: 120px;
  height: ${({ theme }) => theme.size.xxl};
  cursor: pointer;

  &:active {
    background-color: #0ad666;
  }
`;

export const Button = styled(ButtonStyled)`
  background-color: ${({theme}) => theme.colors.secundary};
  width: 120px;
  height: 60px;
  cursor: pointer;

  &:active {
    background-color: #0ad666;
  }
`