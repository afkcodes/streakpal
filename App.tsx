import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MasonryGrid from './src/components/MasonaryGrid';
// Import the new MasonryGrid component

const { height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
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

  const renderTestimonial = (item) => (
    <View key={item.id} style={styles.testimonialBox}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.streak}>
        {item.streak} {item.habit} streak
      </Text>
      <Text style={styles.quote}>"{item.quote}"</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#121212' translucent={false} />
      <MasonryGrid
        data={testimonials}
        renderItem={renderTestimonial}
        numColumns={2}
        containerStyle={styles.gridContainer}
        scrollDuration={80000} // A
      />
      <LinearGradient
        colors={['transparent', '#121212', '#1e1e1e']}
        style={styles.overlay}>
        <Text style={styles.title}>StreakPal</Text>
        {/* <Text style={styles.subtitle}>Transform Your Life, One Streak at a Time</Text> */}
        <Text style={styles.subtitle}>Streaks That Inspire, Habits That Transform</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Start Your Journey</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
            <Text style={styles.loginButtonText}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  gridContainer: {
    paddingBottom: height * 0.5, // Make room for the overlay
  },
  testimonialBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  name: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Barlow-Bold',
  },
  streak: {
    color: '#FF6B6B',
    fontSize: 14,
    marginBottom: 4,
    fontFamily: 'Barlow-Regular',
  },
  quote: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Barlow-MediumItalic',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.6,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 38,
    // fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 4,
    fontFamily: 'Barlow-Bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Barlow-Medium',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#FF6B6B',
    borderRadius: 4,
    paddingVertical: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Barlow-Bold',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF6B6B',
    borderRadius: 4,
    paddingVertical: 15,
  },
  loginButtonText: {
    color: '#FF6B6B',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Barlow-Medium',
  },
});

export default WelcomeScreen;
