import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen({navigation}) {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
        
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            })();
        }, []);

    return (
        <SafeAreaView style = {{
            flex: 1,
        }}>
            <MapView
                provider = {PROVIDER_GOOGLE}
                style={{
                    height: "105%"
                }}
                region = {{
                    latitude: location ? location.coords.latitude : 0,
                    longitude: location ? location.coords.longitude : 0,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <Marker
                    coordinate = {{
                        latitude: location ? location.coords.latitude : 0,
                        longitude: location ? location.coords.longitude : 0,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                ></Marker>
            </MapView>
        </SafeAreaView>
    )
}