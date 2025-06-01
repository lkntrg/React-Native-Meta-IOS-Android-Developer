import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logo}
        resizeMode="contain"
        accessible
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.subtitle}>Your local Mediterranean Bistro</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}
        accessibilityLabel="Go to Newsletter Subscribe Screen"
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#495E57',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#495E57',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F4CE14',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#495E57',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
