import { hello } from '@npm-workspace-demo/components';
import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const output = hello();
  const title = 'Tab One: ' + output;
  return (
    <>
      <Stack.Screen options={{ title }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One" />
      </Container>
    </>
  );
}
