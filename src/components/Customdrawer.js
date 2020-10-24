import React, { useState ,useEffect  } from 'react';
import {

  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch
 } from 'react-native-paper';
import {View,Text,StyleSheet,Modal} from 'react-native';
import { AsyncStorage } from 'react-native';
import AnimatedEllipsis from 'react-native-animated-ellipsis';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

import Mater from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Entypo';

export function DrawerContent(props){
  const [name,setName]= useState( '' )
  const [email,setEmail]= useState( '' )
  const [type,setType]= useState( '' )
  const [customer,setCustomer]= useState(false)
  const [truckowner,setTruckowner]= useState(false)
  const [transporter,setTransporter]= useState(false)
  const [isLoading,setloading]= useState(false)
  openProgressbar = () => {
 
    setloading(true)
  }
  closeProgressbar = () => {
    setloading(false)
  }
  useEffect(()=>{
    AsyncStorage.getItem('name').then(value=>{
      
      setName(value)
   
    })
    AsyncStorage.getItem('email').then(value=>{
      
      setEmail(value)
   
    })

    AsyncStorage.getItem('type').then(value=>{
      
      setType(value,false)
      if(value==='Customer'){
        setCustomer(true)
      }else if(value==='TruckOwner'){
        setTruckowner(true)
      }else if(value==='Transporter'){
        setTransporter(true)
      }
   
    })
  })
  return(
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
      {customer ? (
        <View style={styles.userInfoSection}>
      <View style={{flexDirection:'row',marginTop: 15}}>
                      <Avatar.Image 
                                source={require('../images/profile.png')
                                }
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                              <Title style={styles.title}>{name}</Title>
                              <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>
    
                      <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            
                        />
                        
                        <DrawerItem 
                               icon={({color, size}) => (
                                   <Mater 
                                   name="lock" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Update password"
                             
                           />
                        <DrawerItem 
                               icon={({color, size}) => (
                                <Mater
                                   name="logout" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Signout"
                               
                           />
        </Drawer.Section>
      
        </View>
      ):null}
        {truckowner ? (
         <View style={styles.userInfoSection}>
         <View style={{flexDirection:'row',marginTop: 15}}>
                         <Avatar.Image 
                                   source={require('../images/profile.png')
                                   }
                                   size={50}
                               />
                               <View style={{marginLeft:15, flexDirection:'column'}}>
                                 <Title style={styles.title}>{name}</Title>
                                 <Caption style={styles.caption}>{email}</Caption>
                               </View>
                           </View>
       
                         <Drawer.Section style={styles.drawerSection}>
                         <DrawerItem 
                               icon={({color, size}) => (
                                   <Icon 
                                   name="home" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Home"
                              
                           />

                            <DrawerItem 
                               icon={({color, size}) => (
                                   <Icon 
                                   name="add-user" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Add Driver"
                              
                           /> 
                           
                            <DrawerItem 
                               icon={({color, size}) => (
                                   <Mater 
                                   name="lock" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Update password"
                             
                           />
                            <DrawerItem 
                               icon={({color, size}) => (
                                <Mater
                                   name="logout" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Signout"
                               
                           />
           </Drawer.Section>
         
           </View>
        ):null}
        {transporter ? (
         <View style={styles.userInfoSection}>
         <View style={{flexDirection:'row',marginTop: 15}}>
                         <Avatar.Image 
                                   source={require('../images/profile.png')
                                   }
                                   size={50}
                               />
                               <View style={{marginLeft:15, flexDirection:'column'}}>
                                 <Title style={styles.title}>{name}</Title>
                                 <Caption style={styles.caption}>{email}</Caption>
                               </View>
                           </View>
       
                         <Drawer.Section style={styles.drawerSection}>
                         <DrawerItem 
                               icon={({color, size}) => (
                                   <Icon 
                                   name="home" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Home"
                              
                           />
                            <DrawerItem 
                               icon={({color, size}) => (
                                   <Icon 
                                   name="home" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Add Driver"
                              
                           />
                             <DrawerItem 
                               icon={({color, size}) => (
                                   <Mater 
                                   name="lock" 
                                   color={color}
                                   size={size}
                                   />
                               )}
                               label="Update password"
                             
                           />
                            <DrawerItem 
                               icon={({color, size}) => (
                                <Mater
                                   name="logout" 
                                   color={color}
                                   size={size}
                                   />
                                   
                               )}
                               label="Signout"
                               
                           />
           </Drawer.Section>
         
           </View>
        ):null}
              </DrawerContentScrollView>
       
    </View>    
   );
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
signout=(navigation)=>{
  this.openProgressbar()
  setTimeout(() => {
    
    navigation.navigate('loginsanio')
    this.closeProgressbar()
}, 5000)
}
const styles = StyleSheet.create({
 drawerContent: {
   flex: 1,
 },
 userInfoSection: {
   paddingLeft: 20,
 },
 title: {
   fontSize: 16,
   marginTop: 3,
   fontWeight: 'bold',
 },
 caption: {
   fontSize: 14,
   lineHeight: 14,
 },
 row: {
   marginTop: 20,
   flexDirection: 'row',
   alignItems: 'center',
 },
 section: {
   flexDirection: 'row',
   alignItems: 'center',
   marginRight: 15,
 },
 paragraph: {
   fontWeight: 'bold',
   marginRight: 3,
 },
 drawerSection: {
   marginTop: 15,
 },
 bottomDrawerSection: {
     marginBottom: 15,
     borderTopColor: '#f4f4f4',
     borderTopWidth: 1
 },
 preference: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingVertical: 12,
   paddingHorizontal: 16,
 },
});