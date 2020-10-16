import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSanio from './LoginWithOtpScreen';
import RegisterSanio from './Register';
import RegisterContinue from './RegisterContinue';
import SplashScreenSanio from './SannioSplashScreen';

const Stack=createStackNavigator();

export default class Nav extends Component{
    render(){
        return(
            <NavigationContainer>
               <Stack.Navigator initialRouteName='sanioSplash'>

                    <Stack.Screen options={{headerShown:false}} name="sanioSplash" component={SplashScreenSanio}/>
                    <Stack.Screen options={{headerShown:false}} name="loginsanio" component={LoginSanio}/>
                    <Stack.Screen options={{headerShown:false}} name="registersanio" component={RegisterSanio}/> 
                  
                    <Stack.Screen options={{headerShown:false}} name="registercontinue" component={RegisterContinue}/>
       
               </Stack.Navigator>     
            </NavigationContainer>    
        );
    }
}

