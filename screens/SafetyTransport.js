import React, { useState, useEffect } from 'react';

import { View, SafeAreaView,StatusBar,Dimensions,    Platform, ScrollView, TouchableOpacity, Text } from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';
// import { useDimensions } from '@react-native-community/hooks'


export default function SafetyTransport ({navigation}){
    // const dimensions = useDimensions()

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row', paddingTop: 15, paddingLeft: 15}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>Safety </Text>
                        <Text style={{fontSize: 17, fontWeight: 'bold',color: '#5d806e',fontFamily: 'Roboto'}}>Transportation</Text>
                    </View>
                    <View style={{paddingTop:20, paddingLeft: 10, paddingRight: 10}}>

                        <View style={{flex: 1, flexDirection: 'row',paddingTop: 7,paddingRight:5}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>1. </Text>
                            <Text style={{fontSize: 16, fontWeight: '600',fontFamily: 'Roboto'}}>
                                The best way to transport pesticides is in the back of a truck or pickup, 
                                with the pesticides in their original containers. 
                            </Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row',paddingTop: 7,paddingRight:5}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>2. </Text>
                            <Text style={{fontSize: 16, fontWeight: '600',fontFamily: 'Roboto'}}>
                                All transported pesticides should have labels properly attached to containers during transportation 
                            </Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row',paddingTop: 7,paddingRight:5}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold',fontFamily: 'Roboto'}}>3. </Text>
                            <Text style={{fontSize: 16, fontWeight: '600',fontFamily: 'Roboto'}}>
                                Pesticides should never be carried in the passenger section of any vehicle. 
                            </Text>
                        </View>

                    
                    </View>
                    {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15, paddingLeft: 15, width: '50%'}} /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}