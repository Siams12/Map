import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity, 
  Alert
} from "react-native";
import { useState, useEffect, useRef } from "react";
import * as Styles from "./Styles.js";
import { FlatList, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import MapView,{Marker} from "react-native-maps";
import { addMarker, deleteMarker, resetMarker} from "./Models/markers.js";
export function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const markers = useSelector((state) => state.markers.value);
  const [region, setRegion] = useState({
    latitude: 39.9937,
    longitude: -81.734,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const regionRef = useRef();
  regionRef.current = region;
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // Need some error handling here, exactly what depends on the app
        return;
      }
      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          distanceInterval: 3,
        },
        watchLocation
      );
    })();
  }, []);

  const watchLocation = (location) => {
    const newRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: regionRef.current.latitudeDelta,
      longitudeDelta: regionRef.current.longitudeDelta,
    };
    setRegion(newRegion);
  };

  const zoomChanges = (newRegion) => {
    setRegion(newRegion);
  };

  const showConfirm = (id) => {
    return Alert.alert(
      "Are your sure?",
      "This will delete your current marker",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(deleteMarker(id))
          },
        },
        {
          text: "No",
        },
      ]
    );
    }
  return (
    <View style={Styles.styles.container}>
      <MapView
        style={{ width: "75%", height: "75%" }}
        initialRegion={region}
        region={region}
        onRegionChangeComplete={zoomChanges}
      >
      
      {markers.map(marker => (
          <Marker
            key = {marker.id}
            id = {marker.id}
            coordinate={{ latitude: marker.region.latitude, longitude: marker.region.longitude }}
            title={marker.title}
            description= {marker.description}
            onPress={() => {showConfirm(marker.id)}}
          />
        ))}
      </MapView>
      <Text>Add a marker!</Text>
      <TextInput
        style={{ padding: 8, backgroundColor: "#f5f5f5" }}
        onChangeText={(text) => setTitle(text)}
        placeholder="title"
      />
      <TextInput
        style={{ padding: 8, backgroundColor: "#f5f5f5" }}
        onChangeText={(text) => setDesc(text)}
        placeholder="description"
      />
      <Button title="Add" onPress={() => {dispatch(addMarker({region: region, title: title, description: desc, id: Math.floor(Math. random() * 1000000) + 1}))}} />
    </View>
  );
}
