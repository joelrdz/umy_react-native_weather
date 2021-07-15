import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Form = () => {
  return (
    <>
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Ciudad'
            placeholderTextColor='#666'
          />
        </View>
        <View>
          <Picker
            itemStyle={{ height: 120, backgroundColor: '#fff' }}
          >
            <Picker.Item label='-- Selecciona un país --' value='' />
            <Picker.Item label='Estados Unidos' value='US' />
            <Picker.Item label='México' value='MX' />
            <Picker.Item label='Argentina' value='AR' />
            <Picker.Item label='Colombia' value='CO' />
            <Picker.Item label='Costa Rica' value='CR' />
            <Picker.Item label='España' value='ES' />
            <Picker.Item label='Perú' value='PE' />
          </Picker>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.btnSearch}>
            <Text style={styles.txtSearch}>Buscar Clima</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  btnSearch: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10
  },
  txtSearch: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18
  }
});

export default Form;