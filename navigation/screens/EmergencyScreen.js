import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EmergencyScreen({navigation}) {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40}}>
            <Text style={{fontSize: 24, textAlign: 'center', color: 'red', fontWeight: 'bold'}}>Emergency signal have been sent. Please, wait for it.</Text>
        </SafeAreaView>
    )
}
