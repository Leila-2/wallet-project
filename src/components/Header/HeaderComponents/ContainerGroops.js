import React from "react";
import styled from "styled-components";

const StyledContainerGroops = styled.div`
    width: ${props => props.width || "100px"}
    height: ${props => props.height || "100px"}
`

export default function ContainerGroops({children, props}) {
    return (
        <>
            <StyledContainerGroops {...props}>{children}</StyledContainerGroops>
        </>
        
    )
}