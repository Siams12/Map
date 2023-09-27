import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Dimensions, Alert, Platform } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState} from 'react';
import * as Styles from "./Styles.js";
import { ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { markMessage, deleteMessage, setList } from './Models/history.js';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

  
function deleteMessages(messageList, dispatch) {
    const messagesToKeep = messageList.filter((messageItem) => messageItem.delete === false);
    dispatch(setList(messagesToKeep));
  }

//Display a view of either message list. 
const messageView = (item,key, navigation, dispatch) => {
    return (<View style={Styles.History.MessageComponent}>
        <View style = {Styles.History.checkBoxComponent}>
       <Text style = {{marginRight: '60%'}}>Key: {item.item.shiftNum}</Text> 
       <Text>Delete: </Text>
       <Checkbox
       value={item.item.delete}
       onValueChange={() => {
                dispatch(markMessage(item.item.index))
                navigation.navigate('History')
        }
        }
       />
       </View>
       <Text>Original: {item.item.Cipher}</Text> 
       <Text>New: {item.item.displayText}</Text> 
       <MaterialIcons.Button name="message"
       onPress={() =>navigation.navigate('Message', {item: item.item})
    }>
      View Message
    </MaterialIcons.Button>
    </View>)
    }



export function HistoryScreen({route, navigation}){
    const dispatch = useDispatch();
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
  let messageCopy = [...messages];
    //could be put as component in other file.
  const showConfirmDialog = () => {
    if (Platform.OS !== "web"){
    return Alert.alert(
      "Are your sure?",
      "This will delete these messages.",
      [
        {
          text: "Yes",
          onPress: () => {
            deleteMessages(messageCopy, dispatch)
            navigation.navigate('History')
          }
        },
        {
          text: "No",
        },
      ]
    );
    }
    else {
        let test = confirm("Are you sure you want to delete these messages?")
        if (test){
            navigation.navigate('History')
            deleteMessages(messageCopy, dispatch)
        }
        return;
    }
  };
  return (<View style={Styles.History.container}>
    <View style = {Styles.History.container}>
    <View style = {Styles.History.row}>
    <View style = {Styles.History.cell}>
    <Text>Encrypted Messages</Text>
    <FlatList
data={ encrypted }
renderItem={ (item , index) => messageView(item, index, navigation, dispatch) }
keyExtractor={ (item, index) => index }
/>
</View>
<View style = {Styles.History.cell}>
<Text>DecryptedMessages</Text>
<FlatList
data={ decrypted }
renderItem={ (item, index) => messageView(item, index, navigation, dispatch) }
keyExtractor={ (item, index) => index }
/>
</View>
</View>
<Ionicons.Button name={"trash-outline"} backgroundColor="#ff5c5c" onPress={() => {
    showConfirmDialog()
}}> 
DELETE 
{/* <AntDesign name="delete" size={24} color="black" /> */}
</Ionicons.Button>
</View>
</View>
    )
    
};


