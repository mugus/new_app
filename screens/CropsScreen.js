import react, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, SafeAreaView,Button,ScrollView, TouchableOpacity,StatusBar } from 'react-native';
// import Skeleton from "./Skeleton";
import axios from 'axios';

export default function CropsScreen({route, navigation}){
    const [crop, setCrop] = useState([]);
    // const [isReady, setisready] = useState(false);
    const { lang } = route.params;
    console.log("Lang: ",lang);
    
    useEffect(()=> {
        axios.get('http://197.243.14.102:4000/api/v1/crops').then(res => {
            setCrop(res.data.crops);
        }).catch(err=>{
            console.log(err);
        })
        // product ? setisready(true) : setisready(false)
        // let timer = setTimeout( ()=> setisready(true), 2000);
        // return () => {
        //     clearTimeout(timer);
        // };
      }, [])

    return(
        <SafeAreaView>
            <StatusBar backgroundColor = "#fff" barStyle = "dark-content" hidden = {false} translucent = {true}/>
            <ScrollView style={{paddingRight: 10}}>
            {/* {
                isReady ? ( */}
                    <View style={{flex: 1, flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-around', top: 10}}>
                    {
                        crop.map((crop)=>{
                            return (
                        <TouchableOpacity style={{width: 170, height: 240, backgroundColor: '#edefea', borderRadius: 10, padding: 10}} key={crop.crop_id} onPress={()=> navigation.navigate('DianosisScreen', {crop_id: crop.crop_id, name: 'DianosisScreen' })}>
                            <View style={{width: 150, height: 210}}>
                                <Image source={{uri: `http://197.243.14.102:4000/uploads/${crop.image}`}} style={{width: 150, height: 170}} />
                                <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 18, paddingBottom: 10, padding: 10}}>{crop.name}</Text>
                            </View>
                        </TouchableOpacity>
                            )
                        })
                    }

                    </View>
                {/* ) : (
                    <Skeleton />
                    )
                } */}
           
                </ScrollView>

        </SafeAreaView>
    );
}