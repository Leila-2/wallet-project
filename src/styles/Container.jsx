import styled from 'styled-components';
import { baseTheme } from './variables';

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and ${baseTheme.media.tabletMax} {
    max-width: 768px;
  }
`;
