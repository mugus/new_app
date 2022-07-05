import react, { useState, useEffect } from "react";
import { Image, Platform, Text, View,StatusBar, SafeAreaView,TouchableOpacity,Button,ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const width = '47%';
export default function SafetyScreen({navigation}){
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'row',paddingTop: 70}}>

                    <TouchableOpacity onPress={()=> navigation.navigate('SafetyTransport', { name: 'SafetyTransport' })} style={{padding: 30 ,alignContent:"center" ,height:160,borderRadius: 10, margin: 5,backgroundColor: "#5d806f", width:width}}>
                        <View styles={{padding: 10,}}>
                            <Text style={{color: '#fff', fontWeight: 'bold',padding:5, fontSize: 20}}>Transport</Text>
                            <MaterialCommunityIcons name="truck-check" size={50} color="#fff" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> navigation.navigate('SafetyStorage', { name: 'SafetyStorage' })} style={{padding: 30,height:160 ,alignContent:"center" ,borderRadius: 10, margin: 5,backgroundColor: "#5d806f", width:width}} >
                        <View styles={{padding: 10, alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontWeight: 'bold',padding:5, fontSize: 20}}>Storage</Text>
                            <MaterialCommunityIcons name="warehouse" size={50} color="#fff" />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{flex: 1, paddingTop: 10, alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('SafetyApplication', { name: 'SafetyApplication' })} style={{padding: 30,height:160 ,alignContent:"center" ,borderRadius: 10, margin: 5,backgroundColor: "#5d806f", width:width}}>
                        <View styles={{padding: 10, alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontWeight: 'bold',padding:5, fontSize: 18}}>Application</Text>
                            <MaterialCommunityIcons name="doctor" size={50} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        );

        

    
}
