import styled from "styled-components";

const Block = styled.div`
  font-family: Noto;
  text-align: ${({ textAlign }) => textAlign || "unset"};

  max-height: ${({ maxHeight }) => maxHeight || "unset"};
  max-width: ${({ maxWidth }) => maxWidth || "unset"};
  width: ${({ width }) => width || "unset"};
  height: ${({ height }) => height || "unset"};

  display: ${({ display }) => display || "block"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "unset"};
  align-items: ${({ alignItems }) => alignItems || "unset"};
  flex: ${({ flex }) => flex || "0 1 auto"};
  align-self: ${({ alignSelf }) => alignSelf || "none"};

  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};

  background-image: ${({ backgroundImage }) => backgroundImage || "none"};
  background-color: ${({ backgroundColor }) => backgroundColor || "none"};

  border-radius: ${({ borderRadius }) => borderRadius || "none"};
  box-shadow: ${({ boxShadow }) => boxShadow || "none"};

  border: ${({ border }) => border || "none"};
`;

export default Block;
