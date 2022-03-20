/**
 * 
 * React Native DOC Study,..
 * 
 * (03/20) 반응 기초 https://reactnative.dev/docs/intro-react
 * 
 * 다음 텍스트 입력처리 진행 필요
 * => https://reactnative.dev/docs/handling-text-input
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './guide/Cat';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Cat name="tester1"/>
      <Cat name="tester2"/>
      <Cat name="tester3"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
