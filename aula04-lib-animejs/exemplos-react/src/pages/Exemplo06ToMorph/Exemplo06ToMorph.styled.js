import { createGlobalStyle } from "styled-components";

export const Exemplo06Styles = createGlobalStyle`
        #root {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.examples-containers {
			margin-top: 5%;
			width: 50%;
		}

		.btn {
			margin: 15px;
			width: 200px;
		}

		#circle {
			width: 40px;
			height: 40px;
			background-color: blue;
			border-radius: 50%;
		}

		.nes-btn {
			border-image-repeat: stretch !important;
		}
`;