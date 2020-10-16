import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

class SannioSplashScreen extends Component {
    
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('loginsanio')
        }, 5000)
    }
    render() {
        return (

            <View style={styles.viewconatiner}>

                <Image source={require('../images/sanio_logo.png')} style={styles.logo}></Image>
                <Text style={{ color: 'blue', fontSize: 25, marginTop: 20 }}>Sanio Logistics</Text>
                <View style={styles.bottomView}>
                    {/* <Text style={{ color:'blue',fontSize:16}}>saniologistics.com</Text> */}
                </View>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        width: 200,
        height: 200,
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    bottomView: {
        width: '100%',
        height: 50,

        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    viewconatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});
export default SannioSplashScreen;