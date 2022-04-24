import styled from 'styled-components';

export const Text = styled.span`
  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => fontSize || 'auto'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  margin: ${({ margin }) => margin || '0'};
`;

export const HeaderOne = styled.h1``;
