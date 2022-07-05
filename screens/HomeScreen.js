import react, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, StatusBar, Platform, SafeAreaView,ScrollView, Button,TouchableOpacity,  requireNativeComponent  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const width = '47%';
export default function Home({route,navigation}){
    // const { lang } = route?.params;
    
    const OpenStore = async () => {
        navigation.navigate(
            'Browser',
            { url: 'https://ingabo.store' }
        )
    }
    
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            
            <ScrollView>
                
                <View style={{flex: 1, flexDirection: 'row',paddingTop: 70}}>

                    <TouchableOpacity  style={{padding: 30,height:160,borderRadius: 10, margin: 5,backgroundColor: "#5d806f", width:width}} onPress={()=> navigation.navigate('CropsScreen', { name: 'CropsScreen' })}>
                        <View styles={{padding: 10, alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontWeight: 'bold',padding:5, fontSize: 20}}>Crops</Text>
                            <MaterialCommunityIcons name="bee-flower" size={50} color="#fff" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  style={{padding: 30,height:160,borderRadius: 10, margin: 5,backgroundColor: "#5d806f", width:width}} onPress={()=> navigation.navigate('ProductScreen', { name: 'ProductScreen' })}>
                        <View styles={{padding: 10, alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontWeight: 'bold',padding:5, fontSize: 20}}>Products</Text>
                            <MaterialCommunityIcons name="clipboard-list-outline" size={50} color="#fff" />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{flex: 1, flexDirection: 'row', paddingTop: 10}}>
                    <TouchableOpacity style={{padding: 30,height:160,borderRadius: 10, margin: 5,backgroundColor: "#5d806f", width:width}} onPress={ OpenStore }>
                        <View styles={{padding: 10, alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontWeight: 'bold',padding:5, fontSize: 20}}>Our Shop</Text>
                            <MaterialCommunityIcons name="cart-arrow-right" size={50} color="#fff" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 30,height:160,borderRadius: 10, margin: 5,backgroundColor: "#5d806f", width:width}} onPress={()=> navigation.navigate('SafetyScreen', { name: 'SafetyScreen' })}>
                        <View styles={{padding: 10, alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontWeight: 'bold',padding:5, fontSize: 20}}>Safety</Text>
                            <MaterialCommunityIcons name="safe-square" size={50} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
                


                {/* <View style={{top: 130, alignItems: 'center'}}>
                    <Text style={{color: '#347464', fontSize: 20, fontWeight: 'bold'}}>Our Partners</Text>
                </View>
                <ScrollView horizontal={true} style={{top: 140, left: 11, height: 250}}>
                    <Image  source={require('../assets/bk.jpg')} style={{width: 250,height: 60}} /> 
                    <Image  source={require('../assets/bk.jpg')} style={{width: 250,height: 60, left: 10, right: 10}} /> 
                    <Image  source={require('../assets/bk.jpg')} style={{width: 250,height: 60, left: 10, right: 10}} /> 
                </ScrollView> */}
            </ScrollView>
        </SafeAreaView>
        
    );
}