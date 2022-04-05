import styled from "styled-components";
import { baseTheme } from "../../../../styles/variables";

const StyledRegisterHeader = styled.div`
	.header-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
	}

	.header-title {
		font-size: 24px;
		font-weight: 700;
		font-family: "Poppins", sans-serif;
		margin: 0;

		@media screen and ${baseTheme.media.tabletMin} {
			font-size: 30px;
		}
	}

	.header-logo {
		width: 30px;
		height: 30px;
		margin-right: 14px;

		@media screen and ${baseTheme.media.tabletMin} {
			width: 40px;
			height: 40px;
			margin-right: 20px;
		}
	}
`;

export default StyledRegisterHeader;
