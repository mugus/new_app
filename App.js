import * as React from 'react';
// import { useDimensions } from '@react-native-community/hooks';
import ProductScreen from "./screens/ProductScreen";
import ProductDetails from "./screens/ProductDetails";
import LandingScreen from "./screens/LandingScreen";
import Home from "./screens/Home";
import chooseLanguage from "./screens/chooseLanguage";
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import DianosisScreen from './screens/DianosisScreen';
import AboutScreen from './screens/AboutScreen';
import CropsScreen from './screens/CropsScreen';
import SafetyScreen from './screens/SafetyScreen';
import SafetyTransport from './screens/SafetyTransport';
import SafetyStorage from './screens/SafetyStorage';
import SafetyLabels from './screens/SafetyLabels';
import SafetyApplication from './screens/SafetyApplication';
import DianosisDetailScreen from './screens/DianosisDetailScreen';
import Browser from './screens/Browser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen'>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen} 
          options={{headerShown : false}}
          />
         
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{
            title: 'Products',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen
          name="chooseLanguage"
          component={chooseLanguage}
          options={{headerShown : false}}
          />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            title: 'Product Details',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen
          name="DianosisScreen"
          component={DianosisScreen}
          options={{
            title: 'Dianosis',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen
          name="CropsScreen"
          component={CropsScreen}
          options={{
            title: 'Crops',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
           }} />
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} 
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          /> */}
          <Stack.Screen
          name="SafetyScreen"
          component={SafetyScreen} 
          options={{
            title: 'Safety Measures',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />

        <Stack.Screen
          name="SafetyTransport"
          component={SafetyTransport}
          options={{
            title: 'Transport',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />

        <Stack.Screen
          name="SafetyStorage"
          component={SafetyStorage}
          options={{
            title: 'Storage',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />

<Stack.Screen
          name="SafetyLabels"
          component={SafetyLabels}
          options={{
            title: 'Labels',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />


<Stack.Screen
          name="SafetyApplication"
          component={SafetyApplication}
          options={{
            title: 'Application',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />


        <Stack.Screen
          name="DianosisDetailScreen"
          component={DianosisDetailScreen}
          options={{
            title: 'Dianosis Details',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen
          name="Browser"
          component={Browser}
          options={{
            title: 'Browser',
            headerStyle: {
              backgroundColor: '#fff',
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen
          name="Home"
          options={{
            title: 'HOME',
            headerStyle: {
              backgroundColor: '#fff',
              height: 10,
              right: 0
            },
            headerTintColor: '#347464',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            {/* add tab bottom nav */}
          {() => (
            <Tab.Navigator
              initialRouteName = 'My Home'
              screenOptions = {{
                "tabBarActiveTintColor": "white",
                "tabBarInactiveTintColor": "black",
                "tabBarActiveBackgroundColor": "#347464",
                "tabBarInactiveBackgroundColor": "#eee",
                "tabBarInactivefontSize": 12,
                "tabBarStyle": [
                  {
                    "display": "flex",
                  },
                  null
                ]
              }}
            >
              <Tab.Screen name='Setting' component={SettingScreen}
                options={{
                  headerShown: false,
                  tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='account-settings' size={size} color={color}/>
                }}
              />

              <Tab.Screen name='My Home' component={HomeScreen}
                options={{
                  headerShown : false,
                  tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='home' size={size} color={color}/>
                }}
              />
              
              <Tab.Screen name='About' component={AboutScreen}
                options={{
                  headerShown : false,
                  tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='lightbulb-on' size={size} color={color}/>
                }}
              />
            </Tab.Navigator>
            )}
            {/* end tab bottom nav */}

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;