import styled from "styled-components";

export const ContainerExamples = styled.div`
	flex:column;
	justify-content: center;
	/* margin-top: 5%; */
	width: 50%;
	align-items: center;
	text-align: center;

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

	button {
		margin: auto;
	}
`;