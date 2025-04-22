
import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LoaderSquareImageWithHooks from '@/components/animated/LoaderImageAnimatedViewHooks/LoaderSquareImageWithHooks';
import LoaderSquareImage from '@/components/animated/LoaderImageAnimatedView/LoaderSquareImage';
import LoaderSquareImageStyled from '@/components/animated/LoaderSquareImageStyled/LoaderSquareImageStyled';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#0a4e63' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">CSTSI-Animação de Elementos de Interface</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Exemplos React-Native!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Teste Suporte com Styled Component</ThemedText>
        <ThemedText>
         Animação utilizando CSS e Styled-components.
        </ThemedText>
        {/*Apenas para a plataforma Web*/}
        <LoaderSquareImageStyled />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Reanimated Componentes com Hooks </ThemedText>
        <ThemedText>
          A biblioteca Reanimated utiliza diversos Hooks para gerenciar os frames da animação e atualizar os estilos.
          Os Hooks cumprem papeis semelhantes as propriedades CSS, mas com uma abordagem diferente.

        </ThemedText>
        <LoaderSquareImageWithHooks />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">A Reanimated e Propriedades CSS </ThemedText>
        <ThemedText>
          Animações baseadas em propriedades CSS serão suportadas apenas na verão 4 😟.
        </ThemedText>
        <LoaderSquareImage />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
