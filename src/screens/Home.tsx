import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TextX from '../components/TextX';
import ViewX from '../components/ViewX';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';

const Home = () => {
  const { theme } = useTheme();
  return (
    <ViewX flex={1} alignItems='center' justifyContent='center'>
      <StatusBar backgroundColor={themes[theme].background.primary} />
      <TextX>Home</TextX>
    </ViewX>
  );
};

export default Home;
