import React, { Component, useState } from 'react';
import { Alert, View, Text, Image, Modal, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

class RegisterContinue extends Component {
  constructor() {
    super();
    this.state = {
      type:'',
      whatsapperror: '',
      companyerror: '',
      grtineeror: '',
      pannerror: '',
      addresserror: '',
      aleternativemobileerror: '',
      aadharerror: '',
      isLoading: false,
      drivervisible: false,
      customervisible: false,
      truckownervisible: false,
      transportervisible: false,
      corporatecustomer: false,
      addressData: '',
      addressUri: '',
      name: '',
      email: '',
      city: '',
      statee: '',
      whatsappmobile: '',
      gstin: '',
      panData: '',
      aadharData: '',
      aleternativemobile: '',
      mobile: '',
      companyname: '',
      address: '',
      aaadharUri: '',
      panUri: ''

    }
  }
  
  gstvalidation = gst => {
    var re = /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/;
    return re.test(gst)
  }
  register() {
   
    AsyncStorage.getItem('type').then(value => {
      Alert.alert("type"+value)
      this.setState({
        type:value
      })
      
    })
    var validator = require('aadhaar-validator')

    var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    if(regpan.test(this.state.panData)){
     
    }  else {
      this.setState({ pannerror: 'Please enter a valid pan number!' })
    }
    if(validator.isValidNumber(this.state.aadharData)){
     
    }else{
      this.setState({ aadharerror: 'Invalid aadhar' })
    }
    if (this.state.whatsappmobile === '') {
      this.setState({ whatsapperror: 'Field can\'t be empty!' })
    }
    if (this.state.companyname === '') {
      this.setState({ companyerror: 'Field can\'t be empty!' })
    }
    if (this.state.gstin === '') {
      this.setState({ grtineeror: 'Field can\'t be empty!' })
    }
    if (this.state.panData === '') {
      this.setState({ pannerror: 'Field can\'t be empty!' })
    }
    if (this.state.address === '') {
      this.setState({ addresserror: 'Field can\'t be empty!' })
    }
    // if (this.state.aleternativemobile === '') {
    //   this.setState({ aleternativemobileerror: 'Field can\'t be empty!' })
    // }
    if (this.state.aadharData === '') {
      this.setState({ aadharerror: 'Field can\'t be empty!' })
    }
    if (this.state.whatsappmobile.length <10) {
      this.setState({ whatsapperror: 'Minimum length should be 10' })
    }
    if (this.state.aleternativemobile.length <10) {
      this.setState({ aleternativemobileerror: 'Minimum length should be 10' })
    }
    // if(this.state.whatsappmobile===this.state.aleternativemobile){
    //   this.setState({ whatsapperror: 'Alternative number shouldn\'t be same' })
    //   this.setState({ aleternativemobileerror: 'Alternative number shouldn\'t be same' })
    // }
    if (!this.gstvalidation(this.state.gstin)) {

      this.setState({ grtineeror: 'Invalid gst!' })

    }
    
    
    if(this.state.type === 'Customer'){
      this.openProgressbar()
      if(this.state.address.trim()!=''||this.state.whatsappmobile.trim()!=''||this.state.aleternativemobile.trim()!=''||this.state.panData.trim()!=''||this.state.aadharData.trim()!=''){
  // fetch('https://capi.saniologistics.com/api/Transporter/Add', {
          //    method: 'POST',
          //    headers: {

          //     'Content-Type': 'application/json',

          //   },

          //     body: JSON.stringify({

          //         "owner_Type": 0,
          //         "name": this.state.name,
          //         "mobile": this.state.mobile,
          //         "email": this.state.email,
          //         "other_Mobile": this.state.mobile,
          //         "other_Email": this.state.email,
          //         "whatsapp_Mobile": this.state.whatsappmobile,
          //         "company_Name": this.state.companyname,
          //         "gstin": this.state.gstin,
          //         "paN_No": this.state.panData,
          //         "aadhar_No": this.state.aadharData,
          //         "image_Url": "string",
          //         "description": "transporter",
          //         "status": 0,
          //         "user_Id": "null",
          //         "device_Id": "null",
          //         "login_Token": "null",
          //         "role_Id": 0,
          //         "requested_By": this.state.name,
          //         "requested_On": "2020-10-12T02:28:24.668Z",
          //         "time_Zone_Id": "ist",
          //         "time_Zone_Region": "ist",
          //         "offset_Seconds": 0,
          //         "longitude": "",
          //         "latitude": "",
          //         "address": this.state.address

          //     })

          // })

          //     .then((response) => response.json())
          //     .then((responseJSON) => {
          //       // Alert.alert("error"+JSON.stringify(responseJSON.Message))
          //         if (responseJSON.Message == "Owner created successfully") {
          //             this.setState({isLoading:false});

          //             Alert.alert("status"+responseJSON.Status)     
          //            this.props.navigation.navigate('driverdashboard')
          //            this.closeProgressbar()
          //         } else {
          //             this.setState({isLoading:false});
          //          //   Alert.alert("error"+JSON.stringify(responseJSON.Status))
          //         }
          //     }).catch((error) => {
          //         console.error(error);
          //     });
         this.props.navigation.navigate('driverdashboard')
      }
    }else if (this.state.type === 'Truck Owner') {
      if(this.state.address.trim()!=''||this.state.whatsappmobile.trim()!=''||this.state.aleternativemobile.trim()!=''||this.state.panData.trim()!=''||this.state.aadharData.trim()!=''){

      this.openProgressbar()
      fetch('https://capi.saniologistics.com/api/TruckOwner/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({

          "owner_Type": 0,
          "name": this.state.name,
          "mobile": this.state.mobile,
          "email": this.state.email,
          "other_Mobile": this.state.mobile,
          "other_Email": this.state.email,
          "whatsapp_Mobile": this.state.whatsappmobile,
          "company_Name": this.state.companyname,
          "gstin": this.state.gstin,
          "paN_No": this.state.panData,
          "aadhar_No": this.state.aadharData,
          "image_Url": "string",
          "description": "truckowner",
          "status": 0,
          "user_Id": "null",
          "device_Id": "null",
          "login_Token": "null",
          "role_Id": 0,
          "requested_By": this.state.name,
          "requested_On": "2020-10-12T02:28:24.668Z",
          "time_Zone_Id": "ist",
          "time_Zone_Region": "ist",
          "offset_Seconds": 0,
          "longitude": "",
          "latitude": "",
          "address": this.state.address

        })
      })

        .then((response) => response.json())
        .then((responseJSON) => {
          if (responseJSON.Message == "Owner created successfully") {
            this.setState({ isLoading: false });  
            this.props.navigation.navigate('driverdashboard')
            this.closeProgressbar()
          } else {
            this.setState({ isLoading: false });
            Alert.alert("User Already exist")
          }
        }).catch((error) => {
          console.error(error);
        });
      }
    }else if(this.state.type==='Transporter'){
      if(this.state.address.trim()!=''||this.state.whatsappmobile.trim()!=''||this.state.aleternativemobile.trim()!=''||this.state.panData.trim()!=''||this.state.aadharData.trim()!=''){
     
      this.openProgressbar()
     
      fetch('https://capi.saniologistics.com/api/Transporter/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          "owner_Type": 0,
          "name": this.state.name,
          "mobile": this.state.mobile,
          "email": this.state.email,
          "other_Mobile": this.state.mobile,
          "other_Email": this.state.email,
          "whatsapp_Mobile": this.state.whatsappmobile,
          "company_Name": this.state.companyname,
          "gstin": this.state.gstin,
          "paN_No": this.state.panData,
          "aadhar_No": this.state.aadharData,
          "image_Url": "string",
          "description": "transporter",
          "status": 0,
          "user_Id": "null",
          "device_Id": "null",
          "login_Token": "null",
          "role_Id": 0,
          "requested_By": this.state.name,
          "requested_On": "2020-10-12T02:28:24.668Z",
          "time_Zone_Id": "ist",
          "time_Zone_Region": "ist",
          "offset_Seconds": 0,
          "longitude": "",
          "latitude": "",
          "address": this.state.address
        })
      })

        .then((response) => response.json())
        .then((responseJSON) => {
          if (responseJSON.Message == "Owner created successfully") {
            this.setState({ isLoading: false });
            this.props.navigation.navigate('driverdashboard')
            this.closeProgressbar()
          } else {
            Alert.alert("User Already exist")
            this.setState({ isLoading: false });
          }
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  }

  componentDidMount() {
    this.openProgressbar();
    AsyncStorage.getItem('name').then(value => {

      this.setState({ name: value })
    })
    AsyncStorage.getItem('email').then(value => {
      this.setState({ email: value })
    })
    AsyncStorage.getItem('city').then(value => {
      this.setState({ city: value })

    })
    AsyncStorage.getItem('state').then(value => {
      this.setState({ statee: value })

    })
    AsyncStorage.getItem('mobile').then(value => {
      this.setState({ mobile: value })
    })

    setTimeout(() => {
      AsyncStorage.getItem('type').then(value => {
        if (value === 'Truck Owner') {

          this.setState({ truckownervisible: true })
          this.closeProgressbar();
        } else if (value === 'Transporter') {
          this.setState({ transportervisible: true })
          this.closeProgressbar();
        }else if(value==='Customer'){
          this.setState({ customervisible: true })
          this.closeProgressbar();
        }
      }

      );
    }, 5000)
  };

  openProgressbar = () => {
    this.setState({ isLoading: true })
  }
  closeProgressbar = () => {
    this.setState({ isLoading: false })
  }

  launchcamera(value) {

    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        if (value === "address") {
          this.setState({

            addressData: response.data,
            addressUri: response.uri
          });
        } else if (value === "aadhar") {

        }
      }
    });
  }
  handleMore(value){
    this.setState({
      gstin:value
    })
    Alert.alert(this.state.gstin.length)
    // if(this.state.gstin.length>14){
    //   var res = this.state.gstin.substr(2, 11);
    //   Alert.alert(res)
    // }
  }
  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: 'white', height: '100%' }}>

          {this.state.isLoading ? (
            <CustomProgressBar />
          ) : null}
          <View>
            <View>
              {this.state.customervisible ? (
                <View>
                  <Image source={require('../images/sanio_logo.png')} style={styles.logo} />


                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Address" underlineColorAndroid='#d5d5d5' onChangeText={(address) => this.setState({ address: address, addresserror: '' })} />
                    <Text style={{ color: 'red' }}>{this.state.addresserror}</Text>

                  </View>

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="whatsapp Mobile" underlineColorAndroid='#d5d5d5' onChangeText={(whatsapp_Mobile) => this.setState({ whatsappmobile: whatsapp_Mobile, whatsapperror: '' })} maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.whatsapperror}</Text>

                  </View>

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Alternative Mobile" underlineColorAndroid='#d5d5d5' onChangeText={(aleternativemobile) => this.setState({ aleternativemobile: aleternativemobile, aleternativemobileerror: '' })} maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.aleternativemobileerror}</Text>

                  </View>

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Please enter valid PAN number. E.g. AAAAA9999A" underlineColorAndroid='#d5d5d5' onChangeText={(panData) => this.setState({ panData: panData, pannerror: '' })} maxLength={10} pattern="[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}" />
                    <Text style={{ color: 'red' }}>{this.state.pannerror}</Text>

                  </View>

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Aadhar" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ aadharData: name, aadharerror: '' })} maxLength={15} />
                    <Text style={{ color: 'red' }}>{this.state.aadharerror}</Text>

                  </View>

                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => this.register()}>
                      <Text style={{ color: '#FFFFFF' }}>LOGIN</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#blue' }}>OTP will be send to your mobile number</Text>
                  </View>
                </View>
              ) : null}
            </View>

            <View>
              {this.state.truckownervisible ? (
                <View>
                  <Image source={require('../images/sanio_logo.png')} style={styles.logo} />

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="whatsapp Mobile" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ whatsappmobile: name, whatsapperror: '' })} keyboardType='numeric' maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.whatsapperror}</Text>

                  </View>
                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Company Name" underlineColorAndroid='#d5d5d5' onChangeText={(companyname) => this.setState({ companyname: companyname, companyerror: '' })} />
                    <Text style={{ color: 'red' }}>{this.state.companyerror}</Text>

                  </View>

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput}  placeholder="Please enter valid GST number. E.g. 22AAAAA00001Z5" underlineColorAndroid='#d5d5d5' onChangeText={(gstin)=>{this.handleMore(gstin)}} maxLength={15} />
                    <Text style={{ color: 'red' }}>{this.state.grtineeror}</Text>
                  </View>
                  {/* <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} autoCapitalize='characters' placeholder="Please enter valid PAN number. E.g. AAAAA9999A" underlineColorAndroid='#d5d5d5' onChangeText={(paN_No) => this.setState({ paN_No: paN_No, pannerror: '' })} maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.pannerror}</Text>
                  </View> */}
                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} autoCapitalize='characters' placeholder="Please enter valid PAN number. E.g. AAAAA9999A" underlineColorAndroid='#d5d5d5' onChangeText={(gstin)=>this.handleMore(gstin)} maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.pannerror}</Text>
                  </View>

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Alternative Mobile" underlineColorAndroid='#d5d5d5' onChangeText={(aleternativemobile) => this.setState({ aleternativemobile: aleternativemobile, aleternativemobileerror: '' })} keyboardType='numeric' maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.aleternativemobileerror}</Text>
                  </View>

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} autoCapitalize='characters' placeholder="Please enter 12 digit aadhar number" underlineColorAndroid='#d5d5d5' onChangeText={(aadharData) => this.setState({ aadharData: aadharData, addresserror: '' })} keyboardType='numeric' maxLength={12} />
                    <Text style={{ color: 'red' }}>{this.state.aadharerror}</Text>
                  </View>

                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => this.register()}>
                      <Text style={{ color: '#FFFFFF' }}>LOGIN</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#blue' }}>OTP will be send to your mobile number</Text>
                  </View>
                </View>
              ) : null}
            </View>
            <View>
              {this.state.transportervisible ? (
                <View>
                  <Image source={require('../images/sanio_logo.png')} style={styles.logo} />

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="whatsapp Mobile" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ whatsappmobile: name, whatsapperror: '' })} keyboardType='numeric' maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.whatsapperror}</Text>

                  </View>
                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Company Name" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ companyname: name, companyerror: '' })} />
                    <Text style={{ color: 'red' }}>{this.state.companyerror}</Text>

                  </View>
                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="GSTIN" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ gstin: name, grtineeror: '' })} maxLength={15} />
                    <Text style={{ color: 'red' }}>{this.state.grtineeror}</Text>

                  </View>
                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="PAN NO." underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ panData: name, pannerror: '' })} maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.pannerror}</Text>

                  </View>

                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Address" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ address: name, addresserror: '' })} />
                    <Text style={{ color: 'red' }}>{this.state.addresserror}</Text>

                  </View>



                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Alternative Mobile" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ aleternativemobile: name, aleternativemobileerror: '' })} keyboardType='numeric' maxLength={10} />
                    <Text style={{ color: 'red' }}>{this.state.aleternativemobileerror}</Text>

                  </View>
                  <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <TextInput styles={styles.textInput} placeholder="Aadhar" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ aadharData: name, aadharerror: '' })} keyboardType='numeric' maxLength={12} />
                    <Text style={{ color: 'red' }}>{this.state.aadharerror}</Text>

                  </View>

                  <View style={{ alignItems: 'center' ,bottom:5,position:"absolute"}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.register()}>
                      <Text style={{ color: '#FFFFFF' }}>LOGIN</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#blue' }}>OTP will be send to your mobile number</Text>
                  </View>
                </View>
              ) : null}
            </View>

          </View>


        </View>
      </ScrollView>
    );
  }

}

const CustomProgressBar = ({ visible }) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25,alignItems:'center',justifyContent:'center' }}>
        <Image source={require('../images/sanio_logo.png')} style={{height:30,width:30}} />  
        <Text style={{ fontSize: 20}}>Loading</Text>
        <AnimatedEllipsis/>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },

  logo: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    height: 140,
    resizeMode: 'contain'
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
    marginTop: 40,
    marginBottom: 10,
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

export default RegisterContinue;