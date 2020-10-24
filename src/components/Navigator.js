import React,{ Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSanio from './LoginWithOtpScreen';
import RegisterSanio from './Register';
import RegisterContinue from './RegisterContinue';
import SplashScreenSanio from './SannioSplashScreen';
import DriverDashboard from './DriverDashboard';
import LoginWithPassword from './LoginWithPassword';
import otpscreen from './OTPScreen';
const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();

export default class Navigator extends Component{
    render(){
        return(
            <NavigationContainer>
               <Stack.Navigator initialRouteName='sanioSplash'>

                  <Stack.Screen options={{headerShown:false}} name="sanioSplash" component={SplashScreenSanio}/>
                    <Stack.Screen options={{headerShown:false}} name="loginsanio" component={LoginSanio}/>
                    <Stack.Screen options={{headerShown:false}} name="registersanio" component={RegisterSanio}/> 
                    <Stack.Screen options={{headerShown:false}} name="registercontinue" component={RegisterContinue}/>
                    <Stack.Screen options={{headerShown:false}} name="driverdashboard" component={DriverDashboard}/>
                    <Stack.Screen options={{headerShown:false}} name="loginwithpass" component={LoginWithPassword}/>
                    <Stack.Screen options={{headerShown:false}} name="otpscreen" component={otpscreen}/>
                    {/* <Stack.Screen options={{headerShown:false}} name="adddriver" component={Adddriver}/> */}

               </Stack.Navigator>     
            </NavigationContainer>    
        );
    }
}

// function DrawerNaviagtion(){
//     return(
//         <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen name="Home" component={MainTabScreen}/>
//         </Drawer.Navigator>
//     )
// }
