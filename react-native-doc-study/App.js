/**
 * 
 * React Native DOC Study,..
 * 
 * (03/20) 
 *  > 반응 기초 / Cat.js / https://reactnative.dev/docs/intro-react / 
 *  > 텍스트 입력처리 / https://reactnative.dev/docs/handling-text-input
 * 
 * next.. https://reactnative.dev/docs/using-a-listview (목록보기)
 * 
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatListComponents from './components/FlatListComponents';
import Cat from './guide/Cat';
import ScrollViewGuide from './guide/ScrollViewGuide';
import PizzaTranslator from './guide/TextInputGuide';

export default function App() {
  return (    
    <View style={styles.container}>
      <FlatListComponents />
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
