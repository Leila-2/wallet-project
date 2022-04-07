import styled from 'styled-components';
import { baseTheme } from '../../../../styles/variables';

const StyledHeader = styled.div`
  .containerMobil {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    line-height: 1.5;
    height: 60px;
  }
  .flexGroops {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 30px;
    height: 30px;
    margin-right: 15.56px;
  }
  .title {
    font-family: ${baseTheme.fonts.titleFont};
    font-size: 21.6px;
    line-height: 1.5;
    font-weight: 700;
    color: ${baseTheme.colors.black};
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: green;
  }
  .headerButton {
    background: ${baseTheme.colors.white};
    color: ${baseTheme.colors.grey};
    font-family: ${baseTheme.fonts.mainFont};
    height: 24px;
  }
  .name {
    text-align: end;
    width: 80px;
  }
  .exit {
    width: 51px;
    margin-left: 8px;
  }
  .exitIcon {
    height: 18px;
  }
  .slash {
    margin: 0 12px;
  }

  .exitIconMobil {
    margin-left: 8px;
  }

  .titleTablet {
    font-size: 30px;
    line-height: 1.5;
    font-family: ${baseTheme.fonts.titleFont};

    font-weight: 700;
    color: ${baseTheme.colors.black};
  }
  .logoTablet {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
  .containerTablet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export default StyledHeader;
