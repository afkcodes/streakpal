import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ButtonX from '../components/Button';
import TextX from '../components/TextX';
import TouchableX from '../components/TouchableX';
import ViewX from '../components/ViewX';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';

const Welcome = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ViewX flex={1} alignItems='center' justifyContent='center'>
      <StatusBar
        translucent={false}
        backgroundColor={themes[theme].background.primary}
        style={theme === 'dark' ? 'light' : 'dark'}
      />
      <TouchableX
        activeOpacity={0.8}
        onPress={() => {
          theme === 'dark' ? setTheme('light') : setTheme('dark');
        }}>
        <TextX fontSize='xs' fontWeight='italicSemiBold'>
          Change Theme
        </TextX>
      </TouchableX>
      <TextX fontSize='3xl' fontWeight='italicSemiBold' marginTop={10}>
        afkcodes
      </TextX>
      <ViewX display='flex' flexDirection='column' gap={8} width='80%'>
        <ButtonX title='Primary' onPress={() => {}} borderRadius='2xs' size='md' />
        <ButtonX
          title='outline'
          onPress={() => {}}
          borderRadius='2xs'
          size='md'
          variant='outline'
        />
        <ButtonX
          title='ghost'
          onPress={() => {}}
          borderRadius='2xs'
          size='md'
          variant='ghost'
        />
        <ButtonX
          title='secondary'
          onPress={() => {}}
          borderRadius='2xs'
          size='md'
          variant='secondary'
        />
        <ButtonX
          title='Disabled'
          onPress={() => {}}
          borderRadius='2xs'
          size='md'
          variant='primary'
          disabled
        />
        <ButtonX
          title='Disabled'
          onPress={() => {}}
          borderRadius='2xs'
          size='md'
          variant='primary'
          rightIcon='✘'
        />
        <ButtonX
          title='Lefticon'
          onPress={() => {}}
          borderRadius='2xs'
          size='md'
          variant='success'
          leftIcon='✔'
          fullWidth
        />
      </ViewX>
    </ViewX>
  );
};

export default Welcome;
