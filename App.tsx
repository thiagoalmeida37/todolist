import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { HomePage } from './src/screens/home';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
      <HomePage />
    </>
  );
}