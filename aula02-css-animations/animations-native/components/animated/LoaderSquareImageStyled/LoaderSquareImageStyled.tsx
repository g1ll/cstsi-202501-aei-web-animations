import { Platform } from "react-native"
import LoaderImage from "./LoaderSquareImage.styled"
import { ThemedText } from "@/components/ThemedText"

const LoaderSquareImageStyled = () => {
    return (<>
            {Platform.OS === 'web'
                ? <LoaderImage />
                : <ThemedText>Animações CSS com styled-components são compatíveis apenas na web!!</ThemedText>
            }
        </>)
}

export default LoaderSquareImageStyled
