// import * as React from 'react';
import React, { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView,Button, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function DianosisScreen({route, navigation}){
    // const [diagnos, setDiagnos] = useState([]);
    const [isReady, setisready] = useState(false);
    const { crop_id, name } = route.params;
    const [diagnosisdetails, setDiagnosisdetails] = useState([]);

    let cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    const OpenCamera = async() => {
        // alert('Camera')
        const { status } = await Camera.requestCameraPermissionsAsync();
        const { mediaLibraryPermission } = await MediaLibrary.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        setHasMediaLibraryPermission(mediaLibraryPermission === 'granted');

    }
console.log("data: ", crop_id);
    useEffect(()=> {
        // axios.get('http://197.243.14.102:4000/api/v1/diagnosis/').then(res => {
        //     setDiagnos(res.data.diagnosis);
        // }).catch(err=>{
        //     console.log(err);
        // })

        axios.get(`http://197.243.14.102:4000/api/v1/crops/${crop_id}`).then(res => {
            setDiagnosisdetails(res.data.diag);
        }).catch(err=>{
            console.log(err);
        })
        diagnosisdetails ? setisready(true) : setisready(false)
        // let timer = setTimeout( ()=> setisready(true), 2000);
        // return () => {
        //     clearTimeout(timer);
        // };
      }, [])

console.log(diagnosisdetails);
    if (hasPermission === false) {
        return <Text>Soryry, No access to camera granted</Text>;
      }
    if (hasPermission === true) {
        const takePic = async() => {
            let options = {
                quality: 1,
                base64: true,
                exif: false
            };
            let newPhoto = await cameraRef.current.takePictureAsync(options);
            setPhoto(newPhoto);
          };
        if(photo){
            let sharePic = () => {
                shareAsync(photo.uri).then(()=> {
                    setPhoto(undefined);
                });
            };
            let savePhoto = () => {
                MediaLibrary.saveToLibraryAsync(photo.uri).then(()=>{
                    setPhoto(undefined);
                })
            };
            return (
                <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                    <Image style={{flex: 1, alignSelf: 'stretch'}} source={{ uri: "data:image/jpg;base64,"+photo.base64}} />
                    <Button title="Share" onPress={sharePic} />
                    {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
                    <Button title="Discard" onPress={()=> setPhoto(undefined)} />
                    
                </SafeAreaView>
            );
        }
        return (
            <>
            <View>
                <Camera type={type} style={{width: '100%', height: '90%'}} ref={cameraRef}>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                                );
                                }}>
                                <Text> Flip </Text>
                            </TouchableOpacity>
                            <View style={{backgroundColor: '#fff', alignSelf: 'center', alignItems: 'flex-end'}}>
                                <Button title="Take Pic" onPress={takePic} />
                            </View>
                        </View>
                    </Camera>
            </View>
            </>
        );
      }


    return(
        <SafeAreaView>
            <StatusBar backgroundColor = "#fff" barStyle = "dark-content" hidden = {false} translucent = {true}/>
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', top: 30, justifyContent: 'space-around'}}>
                {
                    diagnosisdetails.length > 0 &&
                        diagnosisdetails.map((diag)=>{
                            return (
                            <TouchableOpacity style={{width: 170, height: 220, backgroundColor: '#edefea', borderRadius: 10}}  key={diag.diagnosis_id} onPress={()=>  navigation.navigate('DianosisDetailScreen', {diagnosis_id: diag.diagnosis_id, name: 'DianosisDetailScreen' })}>
                                <View style={{width: 150, height: 210}}>
                                    <Image source={{uri: `http://197.243.14.102:4000/uploads/${diag.image}`}} style={{width: 150, height: 170}} />
                                    <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 18, paddingBottom: 10, padding: 10}}>{diag.diagnosis_name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }



                </View>


                <View style={{flex: 1, flexDirection: 'row', paddingTop: 35}}>
                    <TouchableOpacity>

                        <View style={{padding: 10,left: 20}}>
                            <Text onPress={OpenCamera} style={{color: '#347464', fontWeight: 'bold', fontSize: 16, top: 10}}>
                                <MaterialCommunityIcons name="camera" size={24}/> Open Camera</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                    
            </ScrollView>
        </SafeAreaView>
    );
}