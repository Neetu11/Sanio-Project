import React,{Component} from 'react';
import {View,Image,ActivityIndicator,StyleSheet,TextInput,Text, Alert,TouchableOpacity,Modal} from 'react-native';

class LoginScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            UserEmail:'',
            UserPassword:'',
            isLoading:true
        }
    }

    openProgressbar = () => {
        this.setState({ isLoading: true })
    }



    render(){
        return(
            
           <View style={{backgroundColor:'white',height:'100%'}}>
              {/* {this.state.isLoading?<CustomProgressBar/>:( */}
                    <View>
                    <Image source={require('../images/sanio_logo.png')} style={styles.logo}/>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.edittext_view}>
                         <Text style={{color:'blue',marginLeft:10}}>Mobile No.</Text>
                         <View style={styles.passwordlayout}>
                             {/* <Image style={{marginLeft:10,width:20,height:20,marginTop:10}} source={require('../images/user.png')}/>                     */}
                             <TextInput onChangeText={UserEmail=>this.setState({UserEmail})} label="email/mobile" style={{marginLeft:5,fontSize:20,marginBottom:6}}></TextInput>
     
                         </View>
                    </View>
     
                    <View style={styles.edittext_view}>
                         <Text style={{color:'blue',marginLeft:10}}>Password</Text>
                         <View style={styles.passwordlayout}>
                         
                            {/* <Image style={{marginLeft:10,width:'5%',height:20,marginTop:10}} source={require('../images/password.png')}/>                     */}
                        
                         <TextInput onChangeText={UserPassword=>this.setState({UserPassword})} label="******" style={{marginLeft:5,fontSize:20,marginBottom:6}}></TextInput>
                         </View>
                    </View>
                    <View style={{marginTop:15,width:'100%',marginRight:45}}  >
                      <Text style={{textAlign:'right',color:'blue',fontStyle:'italic',fontWeight:'bold'}} onPress={()=>this.props.navigation.navigate('ForgetScreen')}>Forget Password</Text>
                      
                  </View>
                  
                    <TouchableOpacity onPress={this.userloginfunction} style={styles.button}> 
                        <Text style={{color:'#FFFFFF'}}>LOGIN</Text>
                    </TouchableOpacity>
                
     
         
                  </View>
                  </View>
              
              {/* )} */}
               </View>  
               
        );
    };
}
const CustomProgressBar = ({ visible }) => (
    <Modal onRequestClose={() => null} visible={visible}>
      <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: '200' }}>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
const styles=StyleSheet.create({
    container:{
        justifyContent:'center'
    },
    passwordlayout:{
        flexDirection:'row',
    },
    logo:{
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        marginTop:30,
        height:170,  
        resizeMode:'contain'        
    },
    editext:{
        width:'100%'
    },
    button:{
        marginTop:20,
        borderRadius:10,
        backgroundColor:'blue',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:50
    },
    edittext_view:
    {
        marginTop:40,    
        borderRadius:12,      
        width:'90%',
        padding:10,
        backgroundColor:"#eaf0d8",
        height:70,
    },
    inputView:{
        borderWidth:1,
        borderColor:'#2196f3',
        width:'100%', 
        borderRadius:5,
        margin:20,
        backgroundColor:"#00000000",
        height:50,
        paddingHorizontal:10            
    },
});
export default LoginScreen;