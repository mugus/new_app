import React, { useState, useEffect } from 'react';

import { View, SafeAreaView,StatusBar, Platform, ScrollView, TouchableOpacity, Text } from 'react-native';


export default function SafetyApplication ({navigation}){

    return(
        <SafeAreaView>
            <StatusBar backgroundColor = "#fff" barStyle = "dark-content" hidden = {false} translucent = {true}/>
            <ScrollView>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 15, paddingLeft: 15}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>Safety </Text>
                        <Text style={{fontSize: 17, fontWeight: 'bold',color: '#5d806e',fontFamily: 'Roboto'}}>Application</Text>
                    </View>
                    <View style={{paddingTop:20, paddingLeft: 10, paddingRight: 10}}>

                        <View style={{flex: 1, flexDirection: 'row',paddingTop: 7, paddingRight:5}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>1. </Text>
                            <Text style={{fontSize: 16, fontWeight: '600',fontFamily: 'Roboto'}}>
                                Read the label thoroughly and follow all instructions indicated before applying pesticides.
                            </Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row',paddingTop: 7, paddingRight:5}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>2. </Text>
                            <Text style={{fontSize: 16, fontWeight: '600',fontFamily: 'Roboto'}}>
                                Put on the proper Personal Protective Equipment (PPE) such as nonabsorbent gloves, face mask, boots, overall. 
                            </Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row',paddingTop: 7, paddingRight:5}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>3. </Text>
                            <Text style={{fontSize: 16, fontWeight: '600',fontFamily: 'Roboto'}}>
                                Measure the instructed dosage carefully.
                            </Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row',paddingTop: 7, paddingRight:5}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>4. </Text>
                            <Text style={{fontSize: 16, fontWeight: '600',fontFamily: 'Roboto'}}>
                                Never drink, eat or smoke while mixing or applying pesticides.
                            </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row',paddingTop: 7, paddingRight:5}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>5. </Text>
                            <Text style={{fontSize: 16, fontWeight: '600',fontFamily: 'Roboto'}}>
                                Mix pesticides outdoors or in well-ventilated areas.
                            </Text>
                        </View>
                        

                    
                    </View>
                    {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15, paddingLeft: 15, width: '50%'}} /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}