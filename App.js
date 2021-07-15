import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <View style={styles.app}>
        <View style={styles.container}>
          <Form />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center'
  },
  container: {
    marginHorizontal: '2.5%'
  }
});

export default App;
