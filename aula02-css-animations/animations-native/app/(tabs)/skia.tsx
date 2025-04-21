import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme.web';

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
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
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
});
