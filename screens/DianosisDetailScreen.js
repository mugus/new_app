import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView,Button, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import * as data from '../../database.json'
import axios from 'axios';

// const database = require('../../database.json');
export default function DianosisDetailScreen({route, navigation}){
    const [diagnosis, setDiagnosis] = useState('');
    const { diagnosis_id, name } = route.params;
    const [details, setDetails] = useState([]);

    const OpenStore = async () => {
        navigation.navigate(
            'Browser',
            { url: 'https://ingabo.store' }
        )
    }

    useEffect(() => {
        axios.get(`http://197.243.14.102:4000/api/v1/diagnosis/${diagnosis_id}`).then(res => {
            setDetails(res.data.diagnosis);
            // console.log('test ',res.data.diagnosis.diagnosis_name);
        }).catch(err=>{
            console.log(err);
        })
    }, []);
    
    
    return(
        <SafeAreaView>
            <ScrollView style={{padding: 2, height: '100%'}}>

                <View style={{flex: 1, flexDirection: 'row',top: 10, height: '100%'}}>
                    <View style={{height:300,padding: 10,width:190, alignItems: 'center'}}>
                        {/* <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 14}}>JACKMAX</Text> */}
                        <Image  source={{uri: `http://197.243.14.102:4000/uploads/${details.image}`}} style={{width: '100%', height: '100%'}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'column',padding: 5, width:'100%'}}>
                        <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 16}}>{details.diagnosis_name}</Text>
                        <Text style={{color: '#347464', fontSize: 15, left: 10, fontStyle: 'italic'}}>Symptoms</Text>
                        <View style={{top: 10}}>
                            <Text style={{fontSize: 12, paddingRight: 5}}>
                                {details.symptoms}
                            </Text>
                            

                        </View>
                    </View>
                    {/* <TouchableOpacity onPress={()=> navigation.navigate('DianosisScreen', { name: 'DianosisScreen' })}>
                    </TouchableOpacity> */}
                </View>

                <View style={{flex: 1, flexDirection: 'column',padding: 10, height:500 }}>
                    <View style={{width:'100%', height: '100%'}}>
                        <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 16}}>Diagnosis</Text>

                        <Text style={{color: '#347464', fontSize: 15, left: 10, top: 10,fontStyle: 'italic'}}>Cause</Text>
                        <Text style={{fontSize: 12, left: 15, top: 15,paddingRight:15}}>
                            {details.cause}
                        </Text>

                        <Text style={{color: '#347464', fontSize: 15, left: 10, top: 20,fontStyle: 'italic'}}>Prevention</Text>
                        <Text style={{fontSize: 12, left: 15, top: 25,paddingRight:15}}>
                            {details.prevention}
                        </Text>

                        <Text style={{color: '#347464', fontSize: 15, left: 10, top: 30,fontStyle: 'italic'}}>Recommended Product</Text>
                        <Text style={{fontSize: 12, left: 15, top: 35,paddingRight:15}}>
                            {details.recommendation_products}
                        </Text>
                        <View style={{left: 15,top: 45, width: 250}}>
                            <Button 
                                title="Shop Recommended Product"
                                color= "#347464"
                                onPress={OpenStore}
                            />

                        </View>

                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}