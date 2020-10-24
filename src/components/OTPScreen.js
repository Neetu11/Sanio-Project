import React, { useState, Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox'
import { View,Alert,Image, StyleSheet, TextInput, Text, TouchableOpacity, SafeAreaView,Modal} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

class LoginWithOtpScreen extends Component {
    constructor() {
        super();
        this.state = {
            mobile: '',
            mobileerror: '',
            choosenIndex: 0,
            checked:false,    
            code: '',
            requestedid:'',
            userid:''
        }
    }
     componentDidMount() {

        AsyncStorage.getItem('mobile').then(value => {
            
            this.setState({
              mobile:value
            })
            
          })

          AsyncStorage.getItem('requestid').then(value => {
       
             this.setState({
                requestedid:value
            })
            
          })

          AsyncStorage.getItem('userid').then(value => {
         
            this.setState({
              userid:value
            })
            
          })

          
      };

    resendotp(){
               
    fetch('https://capi.saniologistics.com/api/Login/LoginViaMobileOTP'
    , {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
     },
     body:JSON.stringify({
        
            "mobile": this.state.mobile,
            "description": "login",
            "status": 0,
            "user_Id": "",
            "device_Id": "",
            "login_Token": "",
            "role_Id": 0,
            "requested_By": this.state.mobile,
            "requested_On": "2020-10-20T06:28:43.314Z",
            "time_Zone_Id": "",
            "time_Zone_Region": "",
            "offset_Seconds": 0,
            "longitude": "12.3132312",
            "latitude": "12.1234",
            "address": ""
          
     })
      
   })
       .then((response) => response.json())
       .then((responseJSON) => {
       //  console.log(JSON.stringify(responseJSON))
       // Alert.alert(JSON.stringify(responseJSON))
           if (responseJSON.Message === "OTP has been send successfully") {
               this.setState({isLoading:false})
               
                this.props.navigation.navigate('otpscreen')
            //  Alert.alert("status"+this.state.countrypicker)
           } else {
               this.setState({isLoading:false});
               this.props.navigation.navigate('registersanio')
              // Alert.alert("status"+responseJSON)
           }
       }).catch((error) => {
           console.error(error);
       });
    }
    verifyotp(){
       
        // console.log(this.state.mobile)
        // console.log(this.state.requestedid)
        // console.log(this.state.userid)
        fetch('https://capi.saniologistics.com/api/Login/VerifyLoginOTP'
        , {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json',
         },
         body:JSON.stringify({
            
           
                "request_Id": this.state.requestedid,
                "verify_Otp": this.state.code,
                "device_Id": "null",
                "user_Id": this.state.userid,
                "remember_Me": true,
                "fcM_Token": "",
                "description": "otp",
                "status": 0,
                "login_Token": "null",
                "role_Id": 0,
                "requested_By": this.state.mobile,
                "requested_On": "2020-10-20T10:35:03.679Z",
                "time_Zone_Id": "null",
                "time_Zone_Region": "null",
                "offset_Seconds": 0,
                "longitude": "12.3123",
                "latitude": "12.12312",
                "address": ""
              
              
         })
          
       })
           .then((response) => response.json())
           .then((responseJSON) => {
          //   console.log(JSON.stringify(responseJSON))
             console.log(JSON.stringify(responseJSON))
            //   Alert.alert(JSON.stringify(responseJSON))
               if (responseJSON.Message === "You login successfully") {
                   this.setState({isLoading:false})
                   AsyncStorage.setItem('mobile',responseJSON.Result.Mobile);
                   AsyncStorage.setItem('name',responseJSON.Result.Name);
                   AsyncStorage.setItem('email',responseJSON.Result.Email);
                   AsyncStorage.setItem('Login_Token',responseJSON.Result.Login_Token);
                   AsyncStorage.setItem('type',responseJSON.Result.Role);
                    this.props.navigation.navigate('driverdashboard')
                
               } else {
                   this.setState({isLoading:false});
              
               }
           }).catch((error) => {
               console.error(error);
           });
    }
      
    render() {
        return (
            <View style={{marginTop:40}}>
            <Image source={require('../images/sanio_logo.png')} style={styles.logo} />
             <View style={{justifyContent:'center',alignItems:'center'}}>  
            <OTPInputView
            style={{width: '80%', height: 200,color:'black'}}
            pinCount={5}
            code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled = {(code) => {
                console.log(`Code is ${code}, you are good to go!`)
            }}
           
        />

</View> 
<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }} onPress={()=>this.verifyotp()}>
                        <Text>Resend OTP</Text>
                        
                    </View> 
         <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={()=>this.verifyotp()}>
                            <Text style={{ color: '#FFFFFF', fontSize: 17 }} >Sign In</Text>
                        </TouchableOpacity>
                    </View>
         </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    passwordlayout: {
        flexDirection: 'row',
    },
    logo: {
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
        height: 140,
        resizeMode: 'contain'
    },
    button: {

        borderRadius: 10,
        backgroundColor: 'blue',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50
    },
    facebook: {
        flexDirection: 'row',
        marginTop: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '90%',
        height: 50
    },
    editext: {
        width: '100%'
    },
    bottomview: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10
    },
    button: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'blue',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50
    },
    edittext_view:
    {
        
        marginTop: 20,
        borderRadius: 12,
        width: '100%',
        padding: 10,
        backgroundColor: "blue",
        height: 70,
    },
    textInput: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        fontFamily: 'Avenir-Medium',
        color: 'black',
    },
    inputView: {
        borderWidth: 1,
        borderColor: 'blue',
        width: '100%',
        borderRadius: 5,
        margin: 20,
        backgroundColor: 'blue',
        height: 50,
        paddingHorizontal: 10
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: 'blue',
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor:'blue',
        color:'black'
      },
    
      underlineStyleHighLighted: {
        borderColor: 'blue',
      },
      button: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#184272',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50
    },
});

export default LoginWithOtpScreen;