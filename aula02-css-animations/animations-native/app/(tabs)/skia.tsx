import { StyleSheet, Image, Platform } from 'react-native';

import React from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme.web';

import GoblinSprites from '@/components/animated/GoblinSprites/GoblinSprites';
import Animated from 'react-native-reanimated';

type colorThemeIcons = { dark: string; light: string };

export default function TabTwoScreen() {

  const colorScheme = useColorScheme() ?? 'light';
  const colorThemeIcons: colorThemeIcons = { light: '#187044', dark: '#62e9b0' }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#62e9b0', dark: '#187044' }}
      headerImage={
        <IconSymbol
          size={310}
          name="draw"
          style={{ ...styles.headerImage, color: colorThemeIcons[colorScheme] }}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">CSTSI-Animação de Elementos de Interface</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Biblioteca Skia para Gráficos 2D</ThemedText>
      </ThemedView>
      <ThemedText>Motor gráfico para renderizações 2D utilizando Canvas, no momento só está funcionando para versão web.
        É preciso alterar a propriedade main do package.json para "main": "index.web.tsx".
      </ThemedText>
      <Collapsible title="Sobre a biblioteca Skia">
        <ThemedText>
          A biblioteca Skia da Shopify pretende renderizar gráficos 2D de forma mais performática.
        </ThemedText>
        <ExternalLink href="https://shopify.github.io/react-native-skia/">
          <ThemedText type="link">Skia by Shopfy</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Renderizando a SpriteSheet do Goblin">
        <ThemedView style={{ flexDirection: 'column' }}>
          <Image
            source={require('@/assets/images/goblin_big.png')}
            style={styles.image}
          />
        </ThemedView>
      </Collapsible>
      <Collapsible title="Sprites no Canvas com Skia (web)">
        <ThemedView style={{ flexDirection: 'column' }}>
          {Platform.OS === 'web' && <GoblinSprites image={require('@/assets/images/goblin_big.png')} />}
          {/* <GoblinSprites image={require('@/assets/images/goblin_big.png')} /> */}
        </ThemedView>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  image: {
    height: 178,
    width: 290,
  },
});
