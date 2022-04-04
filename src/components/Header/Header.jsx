import React from "react";
import styled from "styled-components";
import { ReactComponent as ReactLogo } from "./icons/Group.svg";
import { ReactComponent as ReactWallet } from "./icons/Wallet.svg";
import { ReactComponent as ReactExit } from "./icons/exit 1.svg";
import { ReactComponent as ReactSlash } from "./icons/Vector 4.svg";
import Flex from "./HeaderComponents/StyledFlex";
import Exit from "./HeaderComponents/Exit";
import ContainerHeader from "./HeaderComponents/ContainerHeader";
import ContainerGroops from "./HeaderComponents/ContainerGroops";
import { baseTheme } from "../../styles/variables";
import Name from "./HeaderComponents/Name";

const StyledReactSlash = styled(ReactSlash)`
  margin: 0 15px;
  @media ${baseTheme.media.mobileMax} {
    display: none;
  }
`;

const StyledReactLogo = styled(ReactLogo)`
  width: 30px;
  height: 30px;
  margin-right: 15.56px;
  @media ${baseTheme.media.tablet} {
    width: 40px;
    height: 40px;
  } ;
`;

const StyledReactWallet = styled(ReactWallet)`
  width: 73.9px;
  height: 16.83px;
  @media ${baseTheme.media.tablet} {
    width: 121px;
    height: 40px;
  } ;
`;

const StyledReactExit = styled(ReactExit)`
  width: 18px;
  height: 18px;
  @media ${baseTheme.media.mobileMax} {
    margin-left: 8px;
  }
`;

const TextExit = styled.p`
  margin-left: 8px;
  @media ${baseTheme.media.mobileMax} {
    display: none;
  }
`;
const Header = () => {
  return (
    <>
      <ContainerHeader>
        <ContainerGroops width={"119.46px"} height={"30px"}>
          <Flex>
            <StyledReactLogo />
            <StyledReactWallet />
          </Flex>
        </ContainerGroops>
        <ContainerGroops width={"106pxpx"} height={"24px"}>
          <Flex>
            <Name>Имя</Name>
            <StyledReactSlash />

            <Exit>
              <Flex>
                <StyledReactExit />
                <TextExit>Выход</TextExit>
              </Flex>
            </Exit>
          </Flex>
        </ContainerGroops>
      </ContainerHeader>
    </>
  );
};

export default Header;
