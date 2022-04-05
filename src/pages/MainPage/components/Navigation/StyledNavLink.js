import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledNavLink = styled.li`
  font-family: ${baseTheme.fonts.cyrylic};
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  margin-bottom: 12px;

  .linkStyle {
    font-weight: 400;
    color: ${baseTheme.colors.black};
    display: flex;
    align-items: center;
  }

  .linkStyleActive {
    font-weight: 700;
    color: ${baseTheme.colors.black};
    display: flex;
    align-items: center;
  }
`;

export default StyledNavLink;
