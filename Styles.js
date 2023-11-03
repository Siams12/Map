import { StyleSheet, Text, View, Image, Button, TextInput, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      padding: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
export const History = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
     row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around', // You can adjust this to change horizontal spacing
    },
    cell: {
      width: 400,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    MessageComponent: {
      flex: 1,
      width: 300,
    },
    checkBoxComponent: {
      flexDirection: 'row',
      display: 'flex'
    }
  });
  
export const bigButton = StyleSheet.create({
    container: {
      alignSelf: 'flex-end',
      marginTop: -5,
      position: 'absolute', // add if dont work with above
    }
  });
