import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${(props) => props.padding || "0"}
`;

const Flex = ({ children, ...props }) => {
    return (
        <StyledFlex {...props}>
            {children}
        </StyledFlex>
    )
} 

export default Flex;