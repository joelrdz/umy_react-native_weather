import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const Form = () => {
  return (
    <>
      <View>
        <View style={StyleSheet.form}>
          <TextInput
            placeholder='Ciudad'
            placeholderTextColor='#666'
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 100,
    width: '60%',
    marginHorizontal: 'auto'
  }
})

export default Form;