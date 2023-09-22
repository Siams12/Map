import { StyleSheet, Text, View, Image, Button, TextInput, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 6,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
      borderWidth: 1,
      borderColor: 'gray',
    },
    MessageComponent: {
      flex: 1,
      width: 300,
    }
  });
  
export const bigButton = StyleSheet.create({
    container: {
      alignSelf: 'flex-end',
      marginTop: -5,
      position: 'absolute', // add if dont work with above
    }
  });
