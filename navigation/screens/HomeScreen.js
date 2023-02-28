import React, {useState} from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tours from "./tours.json";


export default function HomeScreen({navigation}) {

    const [filters, setFilters] = useState(false);
    const [search, setSearch] = useState('');
    
    const arraySF = search ? tours.tours.filter(tour => tour.name.split(' ').filter(word => word.substring(0, search.length).toLowerCase() === search.toLowerCase()).length > 0) : tours.tours

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <View style={{flex: 0.1, width: "95%", alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Ionicons name='filter' size={40} color='green' onPress={() => setFilters(!filters)}/>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: 'green',
                        width: "80%",
                        fontSize: 16,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderRadius: 10
                    }}
                    onChangeText={newText => setSearch(newText)}
                />
            </View>
            {filters ? <Text>Filters on</Text> : <Text>Filters off</Text>}
            <ScrollView style={{flex: 0.9, width: "95%"}} showsVerticalScrollIndicator={false}>
                {arraySF.map((tour, index) => {
                    return (
                        <View style={{display: 'flex', padding: 15, borderWidth: 0.2, borderRadius: 10, marginBottom: 20}} key={index}>
                            <View>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{tour.name.length > 60 ? tour.name.substring(0, 60) + "..." : tour.name}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                    <Text style={{padding: 7, borderWidth: 1, borderRadius: 15, fontSize: 16}}><Ionicons name='calendar' size={20}/>  {tour.startDate} - {tour.endDate}</Text>
                                    <Text style={{marginLeft: 20, fontSize: 18}}>{tours.agencies.find(item => item.id === tour.agencyId)?.name} ({tours.agencies.find(item => item.id === tour.agencyId)?.ecoRating}<Ionicons name="star" size={20}/>)</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1,
                                    marginVertical: 10
                                }}
                            />
                            <Text style={{color: 'green', fontWeight: 'bold', fontSize: 20}}>{tour.cost}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}