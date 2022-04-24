import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ fontSize }) => fontSize || '20px'};
  text-transform: uppercase;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width || '100%'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#3b8719'};
  border: ${({ border }) => border || 'none'};
  color: ${({ color }) => color || 'white'};
  border-radius: 6px;
  font-family: 'Noto Sans', sans-serif;
  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    background-color: #8bbd8e;
  }
`;

export default Button;
