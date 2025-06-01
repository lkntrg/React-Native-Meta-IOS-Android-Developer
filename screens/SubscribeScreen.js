import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('');

  const isValid = validateEmail(email);

  const handleSubscribe = () => {
    if (email.trim() === '') {
      Alert.alert('Please enter your email address.');
      return;
    }
    Alert.alert('Subscribed!', `You have subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe to our Newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Email input"
      />
      <Pressable
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={handleSubscribe}
        accessibilityLabel="Subscribe to newsletter"
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#495E57',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    maxWidth: 350,
    height: 48,
    borderColor: '#495E57',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 24,
    fontSize: 16,
    backgroundColor: '#F3F3F3',
  },
  button: {
    backgroundColor: '#F4CE14',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#495E57',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SubscribeScreen;
