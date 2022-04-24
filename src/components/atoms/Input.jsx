import styled from "styled-components";

const Input = styled.input`
  font-family: "Noto Sans", sans-serif;
  border: 1px solid #43c522;
  height: ${({ height }) => height || "40px"};
  width: ${({ width }) => width || "220px"};
  border-radius: ${({ borderRadius }) => borderRadius || "7px"};
  margin: ${({ margin }) => margin || "10px 0px 2px 0px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "none"};
  padding-left: 3px;
  &:focus {
    outline: none;
  }
`;

export default Input;
