import React, { useState, useEffect } from 'react';
import { Image, Text, View, SafeAreaView,Button,Linking, ScrollView, TouchableOpacity } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Svg, { Rect } from 'react-native-svg';
// import ContentLoader from 'react-native-masked-loader';
import axios from 'axios';
const ingaboURL = "https://ingabo.rw";
// function getMaskedElement() {
//     return (
//         <ScrollView>


//             <View style={{flex: 1, flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-around', top: 10}}>
//                 <TouchableOpacity>
//                     <View style={{width: 150, height: 200}}>
//                         <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 14}}></Text>
//                         <View style={{width: 150, height: 170, margin: 7,backgroundColor: "#f0eff0", alignItems: 'center'}} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <View style={{width: 150, height: 200}}>
//                         <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 14}}></Text>
//                         <View style={{width: 150, height: 170, margin: 7,backgroundColor: "#f0eff0", alignItems: 'center'}} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <View style={{width: 150, height: 200}}>
//                         <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 14}}></Text>
//                         <View style={{width: 150, height: 170, margin: 7,backgroundColor: "#f0eff0", alignItems: 'center'}} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <View style={{width: 150, height: 200}}>
//                         <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 14}}></Text>
//                         <View style={{width: 150, height: 170, margin: 7,backgroundColor: "#f0eff0", alignItems: 'center'}} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <View style={{width: 150, height: 200}}>
//                         <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 14}}></Text>
//                         <View style={{width: 150, height: 170, margin: 7,backgroundColor: "#f0eff0", alignItems: 'center'}} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <View style={{width: 150, height: 200}}>
//                         <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 14}}></Text>
//                         <View style={{width: 150, height: 170, margin: 7,backgroundColor: "#f0eff0", alignItems: 'center'}} />
//                     </View>
//                 </TouchableOpacity>
                
//             </View>

      
//         </ScrollView>
//     );
//   }






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
    //   const MaskedElement = getMaskedElement();
    return(
        <SafeAreaView>
                    <ScrollView>
            {
                isloading ? (<Text>Loading ... </Text> ):
                (
                        <View style={{flex: 1, flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-around', top: 5, paddingBottom: 10 }}>
                            {
                                product.map((product)=>{
                                    return (
                                        <TouchableOpacity style={{width: 180, height: 250,borderColor: '#347464',backgroundColor: '#edefea', borderRadius: 10}} key={product.product_id} onPress={()=> navigation.navigate('ProductDetails', {product_id: product.product_id, name: 'ProductDetails' })}>
                                            <View style={{width: 150, height: 210}}>
                                                <Text style={{color: '#347464', fontWeight: 'bold', fontSize: 15, paddingBottom: 10, padding: 10}}>{product.name}</Text>
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