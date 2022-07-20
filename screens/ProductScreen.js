import React, { useState, useEffect } from 'react';
import { Image, Text, View, SafeAreaView,Button,Linking, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Svg, { Rect } from 'react-native-svg';
// import ContentLoader from 'react-native-masked-loader';
import axios from 'axios';
const width = '47%';
export default function ProductScreen({navigation}){
    const [product, setProduct] = useState([]);
    const [ isloading, setIsloading ] = useState(true);
    
    useEffect(()=> {
        axios.get('http://197.243.14.102:4000/api/v1/products').then(res => {
          setProduct(res.data.products);
          setIsloading(false);
        }).catch(err=>{
            console.log(err);
        })
      }, [])
      
    return(
        <SafeAreaView>
            <StatusBar backgroundColor = "#fff" barStyle = "dark-content" hidden = {false} translucent = {true}/>
                    <ScrollView>
            {
                isloading ? (<Text>Loading ... </Text> ):
                (
                        <View style={{flex: 1, flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-around', top: 5,paddingTop: 10, paddingBottom: 10,  }}>
                            {
                                product.map((product)=>{
                                    return (

                                        <TouchableOpacity key={product.product_id} style={{padding: 20,height:300,borderRadius: 10, margin: 5,backgroundColor: "#edefea", width:width}} onPress={()=> navigation.navigate('ProductDetails', {product_id: product.product_id, name: 'ProductDetails' })}>
                                            <View styles={{padding: 10, alignItems: 'center'}}>
                                                <Text style={{color: '#000', fontWeight: 'bold',padding:5, fontSize: 17, textTransform: 'uppercase'}}>{product.name}</Text>
                                                <Image source={{uri: `http://197.243.14.102:4000/uploads/${product.image}`}} style={{width: 150, height: 170}} />
                                            </View>
                                        </TouchableOpacity>
                                        
           
                                    )
                                })
                            }
                            
                        </View>
                        
                        )
                    } 
                    </ScrollView>
            
        </SafeAreaView>
    );
}