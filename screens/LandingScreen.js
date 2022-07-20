import { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, StatusBar, Platform, SafeAreaView,ScrollView, TouchableOpacity } from 'react-native';
// import logo from '../assets/main-logo.png'

export default function LandingScreen({navigation}){
    const [language, setLanguage] = useState("en")
    // lang = 'Kinya'
    const HandleChangeToEnglish=()=>{
        // console.log(lang);
        setLanguage("en")
        navigation.navigate(
            'Home', {lang: 'en', name: 'english' }
            )
      }
    const HandleChangeToKinya = async ()=>{
        setLanguage("Kin")
        navigation.navigate(
            'Home',
            {lang: 'kinya', name: 'kinyarwanda' }
        )
        // console.log("Ready to swith in Kinyarwanda");
      }
      
      console.log("lan: ", language);
    return(
        <>
        <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <StatusBar backgroundColor = "#fff" barStyle = "dark-content" hidden = {false} translucent = {true}/>
            <ScrollView>
                <View style={{flex: 1, flexDirection: "column", flexWrap: "nowrap",textAlign: 'center'}}>
                    <View style={{paddingTop: 20,alignItems: 'center'}}>
                        <Text style={{color: '#347464',height: 35,fontSize: 30,lineHeight: 35}}>Welcome!</Text>
                    </View>
                    <View style={{ paddingTop: 20,alignSelf: 'stretch',alignItems: 'center'}}>
                        <Image source={require('../assets/main-logo.png')} style={{height: 400}} />
                    </View>

                    <View style={{ paddingTop: 60, alignItems: 'center'}}>
                        {/* <Text style={{color: '#347464', fontSize:18}}>Choose a language    /    Hitamo ururumi</Text> */}
                    </View>
                

                    <View style={{fontSize:22 ,paddingTop: 50,paddingBottom: 35, alignItems: 'center'}}>
                        <Text>
                            <Text onPress={HandleChangeToKinya} style={{fontSize: 22 ,left: 100}}>Get Started</Text>
                        </Text>
                        {/* <Text>
                            <Text onPress={HandleChangeToEnglish}  style={{fontSize: 18 ,paddingLeft: 15}}>English</Text> 
                            <Text>                                  </Text>
                            <Text onPress={HandleChangeToKinya} style={{fontSize: 18 ,left: 100}}>Kinyarwanda</Text>
                        </Text> */}
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
        </>
    )
}
