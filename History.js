import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Dimensions } from 'react-native';
import { useState} from 'react';
import * as Styles from "./Styles.js";
import { ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';

//Display a view of either message list. 
const messageView = (item,key, navigation) => {
    return (<View style={Styles.History.MessageComponent}>
       <Text>Key: {item.item.shiftNum}</Text> 
       <Text>Original: {item.item.Cipher}</Text> 
       <Text>New: {item.item.displayText}</Text> 
       <Button title="View message"
       onPress={() =>navigation.navigate('Message', {item: item.item})
    }/>
    </View>)
    }


export function HistoryScreen({route, navigation}){
    const messages = useSelector((state) => state.history.value)
    const decrypted = [];
    const encrypted = [];
    let temp;
    for (let messageIndex in messages){
        temp = { ...messages[messageIndex] }
        temp.index = messageIndex;
        if (messages[messageIndex].type === "Encrypted" ){
            encrypted.push(temp);
            
        }
        else{
            decrypted.push(temp);
        }
    }
  return (<View style={Styles.History.container}>
    <View style = {Styles.History.container}>
    <View style = {Styles.History.row}>
    <View style = {Styles.History.cell}>
    <Text>Encrypted Messages</Text>
    <FlatList
data={ encrypted }
renderItem={ (item , index) => messageView(item, index, navigation) }
keyExtractor={ (item, index) => index }
/>
</View>
<View style = {Styles.History.cell}>
<Text>DecryptedMessages</Text>
<FlatList
data={ decrypted }
renderItem={ (item, index) => messageView(item, index, navigation) }
keyExtractor={ (item, index) => index }
/>
</View>
</View>
</View>
</View>
    )
    
};

