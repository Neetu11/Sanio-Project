import React, { Component } from 'react';
import { Alert,View, Text, Image, StyleSheet, ActivityIndicator, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Picker } from '@react-native-community/picker';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

class Register extends Component {
  // const [selectedValue, setSelectedValue] = useState("Select State");

  constructor() {
    super();
    this.state = {
      isLoading: false,
      namerror: '',
      emailerror: '',
      usertypeerror: '',
      stateerror: '',
      cityerror: '',
      getValue: '',
      mobileerror: '',
      statee: '',
      usertype: '',
      name: '',
      email: '',
      city: '',
      state: '',
      choosenIndex: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this._retrieveData
      // AsyncStorage.getItem('mobile').then(value =>
      //   //AsyncStorage returns a promise so adding a callback to get the value
      //   this.setState({ getValue: value })

      //   //Setting the value in Text 

      // Alert.alert(this.state.getValue);
    }, 5000)
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('mobile');
      if (value !== null) {
        this.setState({ getValue: value })
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  validateEmail = email => {

    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);

    };

  openProgressbar = () => {
    this.setState({ isLoading: true })
  }
  closeProgressbar = () => {
    this.setState({ isLoading: false })
  }

  formvalidation() {
   
  
    if (this.state.name === "") {
      this.setState({ namerror: 'Field can\'t be empty!' })
    } 
     if(this.state.email === ""){
      this.setState({ emailerror: 'Field can\'t be empty!' })
    } 
     if(this.state.usertype === ""){
      this.setState({ usertypeerror: 'Field can\'t be empty!' })
    } 
     if(this.state.statee === ""){
      this.setState({stateerror: 'Field can\'t be empty!' })
    }
     if(this.state.city === ""){
      this.setState({cityerror: 'Field can\'t be empty!' })
    }
    
    if (!this.validateEmail(this.state.email)) {

    this.setState({emailerror: 'Invalid Email!' })
        
    }
       console.log("city"+this.state.city)

      if(this.state.city.trim()!="" && this.state.statee.trim()!="" && this.state.usertype.trim()!="" && this.state.name.trim()!="" && this.state.email.trim()!="" &&!this.validateEmail(this.state.email)){
    
        this.openProgressbar()
        AsyncStorage.setItem('mobile', this.state.mobile);
        AsyncStorage.setItem('type', this.state.usertype);
        AsyncStorage.setItem('name', this.state.name);
        AsyncStorage.setItem('email', this.state.email);
        AsyncStorage.setItem('city', this.state.city);
        AsyncStorage.setItem('state', this.state.statee);
        this.props.navigation.navigate('registercontinue')
        this.closeProgressbar()

      }
  }

  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: 'white', height: '100%' }}>
        {this.state.isLoading?(
         <CustomProgressBar/>
        // <ActivityIndicator size="small" color="#0000ff" />
          ):null}
          <Image source={require('../images/sanio_logo.png')} style={styles.logo} />
          <Text style={{ fontSize: 30, marginLeft: 20, marginTop: 40, color: '#184272' }}>Sign up to continue</Text>
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 40 }}>
            <TextInput styles={styles.textInput} placeholder="Name" underlineColorAndroid='#d5d5d5' onChangeText={(name) => this.setState({ name: name,namerror: ''  })} />
            <Text style={{ color: 'red' }}>{this.state.namerror}</Text>
          </View>


          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <TextInput styles={styles.textInput} placeholder="Email" underlineColorAndroid='#d5d5d5' onChangeText={(email) => this.setState({ email: email, emailerror: '' })}/>
            <Text style={{ color: 'red' }}>{this.state.emailerror}</Text>

          </View>

          <View style={{ width: '100%', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <View style={{ width: '90%', borderColor: '#d5d5d5', borderWidth: 1 }}>
              <Picker selectedValue={this.state.usertype} onValueChange={(itemValue, itemPosition) =>
                this.setState({ usertype: itemValue ,usertypeerror: '' })
                } style={{ height: 50, width: '100%' }}>
                <Picker.Item label="Select user type" value="Select user type" />
                <Picker.Item label="Customer" value="Customer" />
                <Picker.Item label="Truck Owner" value="Truck Owner" />
                <Picker.Item label="Transporter" value="Transporter" />
              </Picker>
            </View>
            <Text style={{ color: 'red' }}>{this.state.usertypeerror}</Text>
          </View>

          <View style={{ width: '100%', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <View style={{ width: '90%', borderColor: '#d5d5d5', borderWidth: 1 }}>
              <Picker selectedValue={this.state.statee} onValueChange={(itemValue, itemPosition) =>
                this.setState({ statee: itemValue, choosenIndex: itemPosition ,stateerror: '' })} style={{ height: 50, width: '100%' }}>
                <Picker.Item label="Select state" value="Select state" />
                <Picker.Item label="Delhi" value="Delhi" />
                <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
              </Picker>
            </View>
            <Text style={{ color: 'red' }}>{this.state.stateerror}</Text>
          </View>

          <View style={{ width: '100%', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <View style={{ width: '90%', borderColor: '#d5d5d5', borderWidth: 1 }}>
                <Picker selectedValue={this.state.city} onValueChange={(itemValue, itemPosition) =>
                this.setState({ city: itemValue, choosenIndex: itemPosition,cityerror: '' })} style={{ height: 50, width: '100%' }} >
                <Picker.Item label="Select city" value="Select city" />
                <Picker.Item label="Uttam nagar" value="Uttam nagar" />
                <Picker.Item label="Rajori" value="Rajori" />
              </Picker>
            </View>
            <Text style={{ color: 'red' }}>{this.state.cityerror}</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.button} onPress={() => this.formvalidation()}>
              <Text style={{ color: '#FFFFFF' }}>Continue</Text>
            </TouchableOpacity>
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

  logo: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    height: 140,
    resizeMode: 'contain'
  },
  // button:{
  //     marginTop:10,
  //     borderRadius:10,
  //     backgroundColor:'blue',
  //     alignContent:'center',
  //     justifyContent:'center',
  //     alignItems:'center',
  //     width:'90%',
  //     height:50
  // },
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

export default Register;