import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Button from '../components/Button';
import TextX from '../components/TextX';
import TouchableX from '../components/TouchableX';
import ViewX from '../components/ViewX';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';

const Welcome = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ViewX flex={1} alignItems='center' justifyContent='center' gap={8}>
      <StatusBar
        translucent={false}
        backgroundColor={themes[theme].background.primary}
        style={theme === 'dark' ? 'light' : 'dark'}
      />
      <TouchableX
        onPress={() => {
          theme === 'dark' ? setTheme('light') : setTheme('dark');
        }}>
        <TextX fontSize='xs' fontWeight='italicSemiBold'>
          Change Theme
        </TextX>
      </TouchableX>
      <Button
        title='Hello'
        onPress={() => {}}
        variant='ghost'
        borderRadius='3xl'
        size='lg'
      />
      <Button
        title='Hello'
        onPress={() => {}}
        variant='outline'
        borderRadius='3xs'
        size='md'
      />
    </ViewX>
  );
};

export default Welcome;
