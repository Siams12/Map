import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Dimensions,  Alert, Platform } from 'react-native';
import { useState} from 'react';
import * as Styles from "./Styles.js";
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, FlatList } from 'react-native';
import {deleteMessage} from "./Models/history.js";
import { Ionicons } from '@expo/vector-icons'; 


export function MessageScreen({route, navigation}){
    const dispatch = useDispatch();
    //Turn this into an exportable component maybe add an if statement to use it differently between versions
    const showConfirmDialog = () => {
        if (Platform.OS !== "web"){
        return Alert.alert(
          "Are your sure?",
          "This will delete your current message.",
          [
            {
              text: "Yes",
              onPress: () => {
                dispatch(deleteMessage(route.params.item.index))
                navigation.navigate('History')
              },
            },
            {
              text: "No",
            },
          ]
        );
        }
        else {
            let test = confirm("Are you sure you want to delete this this message?")
            if (test){
                dispatch(deleteMessage(route.params.item.index))
                navigation.navigate('History')
            }
            return;
        }
      };
    return (
        <View style={Styles.styles.container}>
            <Text style={{fontWeight: "bold", fontSize: 20}}>MESSAGE INFO</Text>
            <Text>Original: {route.params.item.Cipher}</Text>
            <Text>New: {route.params.item.displayText}</Text>
            <Text>Key: {route.params.item.shiftNum}</Text>
            <Ionicons.Button name = "trash-outline"  backgroundColor="#ff5c5c" onPress={() => {
                showConfirmDialog()
            }}>
              DELETE
              </Ionicons.Button>
            </View>)
}