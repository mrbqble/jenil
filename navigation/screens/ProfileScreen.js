import * as React from 'react';
import {Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({navigation}) {
    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Text>My tours</Text>
            <Text>Settings</Text>
            <Text>Help</Text>
        </SafeAreaView>
    )
}