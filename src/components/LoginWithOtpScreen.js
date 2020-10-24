import React, { useState, Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox'
import { View,Alert,Image, StyleSheet, TextInput, Text, TouchableOpacity, SafeAreaView,Modal} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

class LoginWithOtpScreen extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            mobile: '',
            mobileerror: '',
            choosenIndex: 0,
            checked:false,    
            
        }
    }

    mobilevalidator() {
         if (this.state.mobile == "") {
              this.setState({ mobileerror: 'Mobile field cannot be empty' })
        }else if(this.state.mobile.length<10){
              this.setState({ mobileerror: 'Minimum digit should be 10' })
        }else{
               AsyncStorage.setItem('mobile',this.state.mobile);
               this.login() 
               //    this.props.navigation.navigate('registersanio')
        }
    }
    openProgressbar = () => {
        this.setState({ isLoading: true })
      }
      closeProgressbar = () => {
        this.setState({ isLoading: false })
      }
    
    login(){
        this.openProgressbar()
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
            this.closeProgressbar()
               AsyncStorage.setItem('requestid',responseJSON.Result.Request_Id);
               AsyncStorage.setItem('userid',responseJSON.Result.User_Id);
            //    console.log(JSON.stringify(responseJSON.Result.Request_Id));
                this.props.navigation.navigate('otpscreen')
            //  Alert.alert("status"+this.state.countrypicker)
           } else {
            this.closeProgressbar()
               this.props.navigation.navigate('registersanio')
              // Alert.alert("status"+responseJSON)
           }
       }).catch((error) => {
           console.error(error);
       });
    }
    
    // datas(value) {
    //     try {
    //       AsyncStorage.setItem('mobile',value);
    //     } catch (error) {
    //       // Error saving data
    //     }
    //   };
      
    render() {
        return (
            // <KeyboardAwareScrollView innerRef={ref => {
            //     this.scroll = ref
            //   }}>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                {this.state.isLoading?(
         <CustomProgressBar/>
          ):null}
                <Image source={require('../images/sanio_logo.png')} style={styles.logo} />
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 40 }}>
                    <TextInput   onFocus = {this._handleFocus} onBlur = {this._handleBlur}styles={styles.textInput} placeholder="Mobile" underlineColorAndroid='#d5d5d5' onChangeText={(text) => this.setState({ mobile: text ,mobileerror:''})} keyboardType='numeric' maxLength={10}/>
                   
                    <Text style={{color:'red'}}>{this.state.mobileerror}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={()=> this.mobilevalidator()}>
                            <Text style={{ color: '#FFFFFF', fontSize: 17 }} >Sign in/Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }} onPress={()=>this.props.navigation.navigate('loginwithpass')}>
                        <Text>Login with Password</Text>
                        
                    </View>  */}
{/* 
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text>_____________________</Text>
                        <Text style={{ fontSize: 18 }}> or </Text>
                        <Text>_____________________</Text>
                    </View> */}

                    {/* <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={styles.facebook} >
                            <Image style={{ width: 30, height: 30, justifyContent: 'center', marginLeft: 10, marginTop: 10 }} source={require('../images/facebook.png')} />
                            <View style={{ justifyContent: 'center', width: '90%', alignContent: 'center' }}>
                                <Text style={{ color: '#000000', marginLeft: 24, fontSize: 20 }} >Continue with Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.facebook} >
                            <Image style={{ width: 30, height: 30, justifyContent: 'center', marginLeft: 10, marginTop: 10 }} source={require('../images/google-hangouts.png')} />
                            <View >
                                <Text style={{ color: '#000000', marginLeft: 24, fontSize: 20 }} >Continue with Google</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.facebook}>
                            <Image style={{ width: 30, height: 30, justifyContent: 'center', marginLeft: 10, marginTop: 10 }} source={require('../images/mail.png')} />
                            <View style={{ justifyContent: 'center', width: '90%', alignContent: 'center' }}>
                                <Text style={{ color: '#000000', marginLeft: 25, fontSize: 20 }} >Continue with Email</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}

                </View>

                <View style={styles.bottomview}>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox tintColors={{ true: 'blue', false: 'blue' }} onPress={()=>this.setState({checked:!this.state.checked})} checked={this.state.checked}  />
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13 }}>I agree to the</Text>
                            <Text style={{ color: 'blue', fontSize: 13 }}> terms of service</Text>
                            <Text style={{ color: 'blue', fontSize: 13 }}> and</Text>
                            <Text style={{ color: 'blue', fontSize: 13 }}> privacy policy</Text>
                        </View>
                    </View>
                    
                </View>

            </View>
            // </KeyboardAwareScrollView>
        );
    }

}
const CustomProgressBar = ({ visible }) => (
    <Modal onRequestClose={() => null} visible={visible}>
      <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25,alignItems:'center',justifyContent:'center' }}>
          <Image source={require('../images/sanio_logo.png')} style={{height:30,width:30}} />  
          <Text style={{ fontSize: 20, fontWeight: '200' }}>Loading</Text>
          <AnimatedEllipsis />
        </View>
      </View>
    </Modal>
  );
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
        borderColor: '#d5d5d5',
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
        backgroundColor: '#184272',
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
        backgroundColor: "#eaf0d8",
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
        borderColor: '#2196f3',
        width: '100%',
        borderRadius: 5,
        margin: 20,
        backgroundColor: "#00000000",
        height: 50,
        paddingHorizontal: 10
    },
});

export default LoginWithOtpScreen;