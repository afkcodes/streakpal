import { SquircleView } from 'expo-squircle-view';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TextX from './TextX';

interface TestimonialProps {
  source: string;
  name: string;
  streak: string;
  habit: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  source,
  name,
  habit,
  streak,
  quote,
}) => {
  return (
    <SquircleView
      cornerSmoothing={100}
      preserveSmoothing
      style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 10, padding: 12 }}
      backgroundColor='rgba(255, 255, 255, 0.1)'>
      <Image source={{ uri: source }} style={styles.avatar} />
      <TextX fontSize='md' marginBottom={4}>
        {name}
      </TextX>
      <TextX color='accent' fontSize='sm' marginBottom={4}>
        {streak} {habit} streak
      </TextX>
      <TextX fontSize='sm' fontWeight='italicMedium'>
        {quote}
      </TextX>
    </SquircleView>
  );
};

export default Testimonial;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
});
