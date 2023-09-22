import { StyleSheet, Text, View, Image, Button, TextInput, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native'
export const navButton = (Page) => {
    const navigation = useNavigation()
    return(
    <Button title={Page} onPress={() => navigation.navigate(Page)}/>
    )
}