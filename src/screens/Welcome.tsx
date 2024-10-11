import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { NavigationContext } from 'navigation-react';
import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import Button from '../components/Button';
import MasonryGrid from '../components/MasonaryGrid';
import Testimonial from '../components/Testimonial';
import TextX from '../components/TextX';
import ViewX from '../components/ViewX';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../styles/themes';

const testimonials = [
  {
    id: '1',
    name: 'Sarah L.',
    streak: '100 days',
    habit: 'meditation',
    quote:
      'Found inner peace and boosted productivity! StreakPal made it easy to maintain my daily practice.',
    avatar: 'https://mighty.tools/mockmind-api/content/human/65.jpg',
  },
  {
    id: '2',
    name: 'Mike R.',
    streak: '30 days',
    habit: 'running',
    quote:
      'Lost 15 pounds and completed my first 5K! The streak feature kept me motivated even on tough days.',
    avatar: 'https://mighty.tools/mockmind-api/content/human/66.jpg',
  },
  {
    id: '3',
    name: 'Emily K.',
    streak: '52 weeks',
    habit: 'reading',
    quote:
      'Read 52 books in a year! StreakPal helped me track my progress and discover new authors.',
    avatar: 'https://mighty.tools/mockmind-api/content/human/67.jpg',
  },
  {
    id: '4',
    name: 'Alex T.',
    streak: '60 days',
    habit: 'healthy eating',
    quote:
      'Kicked my junk food addiction! StreakPal helped me plan and stick to nutritious meals.',
    avatar: 'https://mighty.tools/mockmind-api/content/human/68.jpg',
  },
  {
    id: '5',
    name: 'Lisa M.',
    streak: '45 days',
    habit: 'writing',
    quote:
      'Finally finished my novel draft! The progress tracking feature was a game-changer for my writing habit.',
    avatar: 'https://mighty.tools/mockmind-api/content/human/69.jpg',
  },
  {
    id: '6',
    name: 'Tom K.',
    streak: '90 days',
    habit: 'coding',
    quote:
      'Landed my dream job as a developer! Daily practice with StreakPal really paid off.',
    avatar: 'https://mighty.tools/mockmind-api/content/human/70.jpg',
  },
  {
    id: '7',
    name: 'Olivia P.',
    streak: '120 days',
    habit: 'yoga',
    quote:
      "Transformed my body and mind with daily yoga. StreakPal's reminders kept me consistent.",
    avatar: 'https://mighty.tools/mockmind-api/content/human/71.jpg',
  },
  {
    id: '8',
    name: 'David H.',
    streak: '75 days',
    habit: 'journaling',
    quote:
      'Reduced anxiety through daily journaling. StreakPal made it easy to build this life-changing habit.',
    avatar: 'https://mighty.tools/mockmind-api/content/human/72.jpg',
  },
];
const { height } = Dimensions.get('window');

const Welcome = () => {
  const { theme } = useTheme();
  const { stateNavigator } = useContext(NavigationContext);
  return (
    <ViewX flex={1} alignItems='center' justifyContent='center' gap={8}>
      <StatusBar backgroundColor={themes[theme].background.primary} />
      <MasonryGrid
        data={testimonials}
        renderItem={(item) => (
          <Testimonial
            source={item.avatar}
            streak={item.streak}
            habit={item.habit}
            name={item.name}
            quote={item.quote}
          />
        )}
        numColumns={2}
        containerStyle={{ height: height * 0.6 }}
        scrollDuration={80000} // A
      />
      <LinearGradient
        colors={['transparent', '#121212', '#1e1e1e']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: height * 0.6,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}>
        <ViewX display='flex' alignItems='center' backgroundColor='transparent'>
          <TextX fontSize='5xl' fontWeight='bold' textAlign='center'>
            Michi
          </TextX>
          <TextX
            fontSize='md'
            textAlign='center'
            marginBottom={16}
            opacity={0.8}
            fontWeight='medium'>
            Your Journey to a Better You.
          </TextX>
        </ViewX>
        <ViewX display='flex' gap={8} backgroundColor='transparent'>
          <Button
            title='Start Your Journey'
            onPress={() => {
              stateNavigator.navigate('tabs');
            }}
            borderRadius='sm'
            size='lg'
          />
          <Button
            title='I already have an account'
            onPress={() => {}}
            borderRadius='sm'
            size='lg'
            variant='outline'
            fontWeight='medium'
          />
        </ViewX>
      </LinearGradient>
    </ViewX>
  );
};

export default Welcome;
