import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View,StatusBar, Platform, SafeAreaView,Button, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import * as Linking from 'expo-linking';

export default function ProductDetails({route, navigation}){
    const { product_id, name } = route.params;
    const [productdetails, setProductdetails] = useState([]);
    const [ isloading, setIsloading ] = useState(true);
   
    const OpenStore = async () => {
        Linking.openURL('https://ingabo.store');
        // navigation.navigate(
        //     'Browser',
        //     { url: 'https://ingabo.store' }
        // )
    }
    // console.log("Data: ",product_id);

    const GetData = async () => {
        await axios.get(`http://197.243.14.102:4000/api/v1/products/${product_id}`).then(res => {
            setProductdetails(res.data.product);
            setIsloading(false);
          }).catch(err=>{
              console.log(err);
          })
    }

    useEffect(()=> {
        GetData()
      }, [])


    console.log(isloading);
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <StatusBar backgroundColor = "#fff" barStyle = "dark-content" hidden = {false} translucent = {true}/>
            {
                isloading ? <Text style={{fontSize: 12, left: 15, paddingTop: 60}}>Loading......</Text> : 
                (
                    <ScrollView key={productdetails.product_id} style={{padding: 2, height: '100%'}}>

                        <View style={{flex: 1, flexDirection: 'row', height: '100%'}}>
                            <View style={{height:300,padding: 10,width:190, alignItems: 'center'}}>
                                <Image style={{width: '100%', height: '100%'}} source={{uri: `http://197.243.14.102:4000/uploads/${productdetails.image}`}}/>
                            </View>
                            <View style={{flex: 1, flexDirection: 'column',padding: 5, width:'100%'}}>
                                <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 14}}>{productdetails.name}</Text>
                                <Text style={{color: '#347455', fontWeight: 'bold', fontSize: 12}}>({productdetails.category})</Text>
                                <View style={{top: 10}}>
                                    <Text style={{fontSize: 12, paddingRight: 5}}>
                                        {productdetails.description}
                                    </Text>
                                    <Text></Text>
                                    <Button
                                        title="Shop Product"
                                        color= "#347464"
                                        onPress={OpenStore}
                                        />

                                </View>
                            </View>
                        </View>

                        <View style={{flex: 1, flexDirection: 'column',padding: 5}}>
                            <View style={{width:'100%', height: '100%'}}>
                                <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 15,textDecorationLine: 'underline'}}>How to use</Text>
                                <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 13, left: 10,fontStyle: 'italic'}}>Pre-Conditions</Text>
                                <Text style={{fontSize: 12, left: 15,paddingRight:15}}>
                                    {productdetails.pre_condition}
                                </Text>
                                <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 13, left: 10,fontStyle: 'italic'}}>Application</Text>
                                <Text style={{fontSize: 12, left: 15,paddingTop: 10,paddingRight:15}}>
                                    {productdetails.application}</Text>
                            </View>
                        </View>
                        
                    </ScrollView>
                )
            }
            
        </SafeAreaView>
    );
}