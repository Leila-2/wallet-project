import styled from 'styled-components';
import { baseTheme } from '../../styles/variables';

export const StyledPeriod = styled.div`
.form {
    display: flex;
    flex-direction: column;

    @media screen and ${baseTheme.media.tabletMin} {
        flex-direction: row;
        height: 50px;
    }
}

.inputWrapperMonth {
    position: relative;
    margin-bottom: 20px;

    @media screen and ${baseTheme.media.tabletMin} {
        width: 166px;
        margin-bottom: 0;
        margin-right: 16px;
    }
}

.inputWrapperYear {
    position: relative;
    margin: 0;

    @media screen and ${baseTheme.media.tabletMin} {
        width: 166px;
    }
}

.svgArrowDown {
    position: absolute;
    right: 20px;
    top: 24px;
    width: 18px;
    height: 9px;
    cursor: pointer;
    pointer-events: none;
}
`;