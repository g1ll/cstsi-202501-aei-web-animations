import styled from "styled-components";

export const ContainerExamples = styled.div`
	flex:row;
	justify-content: center;
	margin-top: 5%;
	width: 75%;
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

	.nes-container {
	  display: flex;
      flex-direction: column;
      align-items: center;
	}


	button {
		margin: auto;
	}

	@media (max-width: 450px) {
		.nes-container {
      		align-items: flex-start;
			padding: 0;
		}

	}
`;