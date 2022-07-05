// import * as React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView,ScrollView,Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function AboutScreen({navigation}){
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold',fontFamily: 'Roboto'}}>About </Text>
                        <Text style={{fontSize: 25, fontWeight: 'bold',color: '#5d806e',fontFamily: 'Roboto'}}>Ingabo Plant Health</Text>
                    </View>

                    <View style={{paddingTop:20, paddingLeft: 10, paddingRight: 10}}>

                        <Text style={{textAlign: 'justify', fontWeight: '500', fontSize: 16, fontFamily: 'Roboto'}}>
                            Ingabo Plant Health is an enterprise that provides solutions for Rwandan farmers to reduce crop losses, 
                            increase crop yields and increase their household incomes. 
                            We currently operate in all provinces of Rwanda.
                        </Text>
                        <Text style={{textAlign: 'justify', fontWeight: '500', fontSize: 16, fontFamily: 'Roboto', paddingTop: 10}}>
                            INGABO provides plant health advice and appropriate treatments 
                            to smallholder farmers through our network of trained village agrodealers.
                            Our mission is to increase the use of appropriate agrochemicals 
                            to reduce losses and increase incomes
                        </Text>
                        <Text style={{textAlign: 'justify', fontWeight: '500', fontSize: 16, fontFamily: 'Roboto',paddingTop: 30}}>
                            Ingabo provides the following solutions to rwandan farmers:
                        </Text>

                        <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', paddingTop: 25}}>
                            <View style={{height: 350}}>
                                <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>
                                    <MaterialCommunityIcons name="gift" size={24} color="#000" /> PROMOTION
                                </Text>
                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: '500',fontSize: 16}}>
                                    Establish convenient distribution networks for farmers to access and use these inputs
                                </Text>

                                

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Radio Advert
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Shop front Painted
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    After sell Support
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Field Extension services
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Free USSD application access for Farmer on Plant Health
                                </Text>
                                
                            </View>

                            <View style={{height: 300}}>
                                <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>
                                    <MaterialCommunityIcons name="school" size={24} color="#000" /> AGRO-DEALER TRAINING
                                </Text>
                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: '500',fontSize: 16}}>
                                    Train village level agricultural practitioners in plant health diagnosis and analysis
                                </Text>

                                

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Two Days Course
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Diagnostic Manual
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Follow-up Support
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Android SmartPhone Application
                                </Text>
                                
                            </View>

                            <View style={{height: 250}}>
                                <Text style={{fontSize: 18, fontWeight: '700', textAlign: 'center'}}>
                                    <MaterialCommunityIcons name="door-open" size={24} color="#000" /> INPUT SUPPLY
                                </Text>
                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: '500',fontSize: 16}}>
                                    Import high-quality agricultural inputs customized for plant health issues in Rwanda
                                </Text>

                                

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Direct from manufacturer
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Appropriate pack sizes
                                </Text>
                                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 15}} />

                                <Text style={{paddingTop: 10,fontFamily: 'Roboto',fontWeight: 'bold',fontSize: 16, textAlign: 'center'}}>
                                    Delivered to the door
                                </Text>
                                
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}