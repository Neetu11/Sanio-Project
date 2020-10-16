import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
// import { RadioGroup } from 'react-native-radio-buttons-group';
import { View, ImageBackground, Image, StyleSheet, StatusBar, Text, Alert, TouchableOpacity, Modal, ListView } from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import CardView from 'react-native-cardview';

class DriverDashboard extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            truckdashboard: false,
            customerdashboard: false,
            transporterdashboard: false,
            radio: [
                {
                    label: 'Covered',
                },
                {
                    label: 'Remaining',

                }
            ],
            data: [
                {
                    title: 'Petrol Pump',
                    image: require('../images/pentolpump.png'),
                    km: '5.6'

                },
                {
                    title: 'Restaurant',
                    image: require('../images/restro.png'),
                    km: '11.6'
                },
                {
                    title: 'Service Center',
                    image: require('../images/service.png'),
                    km: '8.6'
                }
            ]
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('name').then(value=>{
      
            this.setState({ name:value })
         
          })
        AsyncStorage.getItem('type').then(value => {
            
            if (value == 'Truck Owner') {
                this.setState({ truckdashboard: true })
            } else if (value == 'Customer') {
                this.setState({ customerdashboard: true })
            } else if (value == 'Transporter') {
                this.setState({ transporterdashboard: true })
            }
        }
        );
    }
    FlatListItemSeparator = () => {
        return (<View style={{
            height: 1,
            width: "100%",
            backgroundColor: "#607D8B",
        }}></View>);
    }
    render() {
        return (
            <View>
                <ImageBackground source={require('../images/dashboard_background.png')} style={styles.image}>
                    <StatusBar
                        backgroundColor="#184272"
                        barStyle="dark-content"
                        hidden={false}
                        translucent={true}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginTop: 55, marginLeft: 40, width: '65%' }}>
                            <View>
                                <Image source={require('../images/sidemenu.png')} style={styles.sidemenu} />
                            </View>
                            <View style={{ marginLeft: 20, backgroundColor: 'white', width: 100, borderRadius: 14, height: 26, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#184272', fontWeight: 'bold', fontSize: 16 }}>Details</Text>
                            </View>


                        </View>
                        <View style={{ marginTop: 35, marginRight: 10 }}>
                            <Image source={require('../images/sanio_logo.png')} style={styles.logo} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'gray', marginLeft: 44 }}>29th September 2020</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white', marginLeft: 44, fontSize: 29, marginTop: 5, fontWeight: 'bold' }}>Hello, {this.state.name}</Text>
                    </View>

                    {this.state.customerdashboard ? (
                        <View>
                            
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 40 }}>
                            
                                <FlatList horizontal={true} data={this.state.data} ItemSeparatorComponent={this.ItemSeparatorLine} renderItem={({ item }) =>

                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 30, marginTop: 10 }}>
                                        <CardView style={{ height: 220, width: 150 }} cornerRadius={10}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                                <View style={{ height: '100%' }}>
                                                    <Text style={{ color: '#184272', marginTop: 17, fontWeight: 'bold' }}>{item.title}</Text>

                                                    <Image source={item.image}
                                                        indicatorProps={{
                                                            size: '30%',
                                                            borderWidth: 0,
                                                            color: 'rgba(150, 150, 150, 1)',
                                                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                                                        }}
                                                        style={{
                                                            marginTop: 20,
                                                            width: 40,
                                                            height: 50,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',

                                                        }} />
                                                    <Text style={{ color: '#184272', fontSize: 28, bottom: 28, position: 'absolute', fontWeight: 'bold' }}>{item.km}</Text>
                                                    <Text style={{ color: 'gray', bottom: 15, position: 'absolute', alignItems: 'center', fontWeight: 'bold', marginLeft: 5 }}>Km</Text>
                                                </View>
                                            </View>
                                        </CardView>
                                    </View>

                                }
                                    keyExtractor={(item, index) => index}
                                />
                            </View>
                            <View style={{ marginLeft: 40, marginTop: 40, marginRight: 40 }}>
                                <Text style={{ color: '#184272', fontWeight: 'bold', fontSize: 25 }}>Distance</Text>
                                {/* <RadioGroup radioButtons={this.state.radio}/> */}

                            </View>
                            <View style={{ marginLeft: 40, marginTop: 10, flexDirection: 'row', height: 65 }}>
                                <Text style={{ color: '#184272', fontWeight: 'bold', fontSize: 55 }}>20.2</Text>
                                <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 25, marginLeft: 5, alignSelf: 'flex-end' }}>Km</Text>
                            </View>

                            <View style={{ width: '100%', borderRadius: 5, bottom: 0, position: 'absolute', alignItems: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: '#184272', width: '90%', height: 50, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
                                        <View style={{ justifyContent: 'center', width: '80%', height: '100%' }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>Total Consignment</Text>
                                        </View>
                                        <View style={{ position: 'absolute', right: 40, height: '100%', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>29</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    ) : null}
                    {this.state.truckdashboard ? (
                        <View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 70 }}>
                                    <CardView cornerRadius={15} cardElevation={10} style={{ height: 190, width: 140, margin: 20, padding: 10 }}>
                                        <View style={{ height: '100%' }}>
                                            <Text style={{ color: '#184272', marginTop: 17, fontWeight: 'bold' }}>Running Vehicles</Text>

                                            <Image
                                                source={require('../images/Truck.png')}
                                                style={{
                                                    marginTop: 20,
                                                    width: 40,
                                                    height: 40,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }} />
                                            <Text style={{ color: '#184272', fontSize: 28, bottom: 28, position: 'absolute', fontWeight: 'bold' }}>10</Text>
                                            <Text style={{ color: 'gray', bottom: 8, position: 'absolute', alignItems: 'center', fontWeight: 'bold', marginLeft: 3 }}>Vehicles</Text>
                                        </View>

                                    </CardView>
                                    <CardView cornerRadius={15} cardElevation={10} style={{ height: 190, width: 140, padding: 10, margin: 20 }}>
                                        <View style={{ height: '100%' }}>
                                            <Text style={{ color: '#184272', marginTop: 17, fontWeight: 'bold' }}>Ledger Amount</Text>

                                            <Image
                                                source={require('../images/Amount.png')}
                                                style={{
                                                    marginTop: 20,
                                                    width: 35,
                                                    height: 35,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }} />
                                            <Text style={{ color: '#184272', fontSize: 28, bottom: 22, position: 'absolute', fontWeight: 'bold' }}>10000</Text>
                                            <Text style={{ color: 'gray', bottom: 8, position: 'absolute', alignItems: 'center', fontWeight: 'bold', marginLeft: 2 }}>Rupees</Text>

                                        </View>
                                    </CardView>
                                </View>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                    <CardView cornerRadius={15} cardElevation={10} style={{ height: 190, width: 140, margin: 20, padding: 10 }}>

                                        <View style={{ height: '100%' }}>
                                            <Text style={{ color: '#184272', marginTop: 17, fontWeight: 'bold' }}>Reward</Text>

                                            <Image
                                                source={require('../images/Reward.png')}
                                                style={{
                                                    marginTop: 20,
                                                    width: 35,
                                                    height: 35,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }} />
                                            <Text style={{ color: '#184272', fontSize: 28, bottom: 22, position: 'absolute', fontWeight: 'bold' }}>10</Text>
                                            <Text style={{ color: 'gray', bottom: 8, position: 'absolute', alignItems: 'center', fontWeight: 'bold', marginLeft: 3 }}>Points</Text>
                                        </View>

                                    </CardView>
                                    <CardView cornerRadius={15} cardElevation={10} style={{ height: 190, width: 140, margin: 20, padding: 10 }}>
                                        <View style={{ height: '100%' }}>
                                            <Text style={{ color: '#184272', marginTop: 17, fontWeight: 'bold' }}>Total Vehicles</Text>

                                            <Image
                                                source={require('../images/Totalvehicle.png')}
                                                style={{
                                                    marginTop: 20,
                                                    width: 40,
                                                    height: 40,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }} />
                                            <Text style={{ color: '#184272', fontSize: 28, bottom: 22, position: 'absolute', fontWeight: 'bold' }}>56</Text>
                                            <Text style={{ color: 'gray', bottom: 8, position: 'absolute', alignItems: 'center', fontWeight: 'bold', marginLeft: 3 }}>Vehicles</Text>
                                        </View>

                                    </CardView>
                                </View>
                            </View>

                        </View>
                    ) : null}
                    {this.state.transporterdashboard ? (
                        <View>
                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 40 }}>
                                <CardView style={{ width: '80%', height: 180 }} cornerRadius={15} cardElevation={10}>
                                    <View style={{ padding: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'column', width: '40%' }}>
                                                <Text style={{ color: '#184272', fontSize: 18, }}>Total</Text>
                                                <Text style={{ color: '#184272', fontSize: 18 }}>Vehicles</Text>

                                            </View>
                                            <View style={{ flexDirection: 'column', alignContent: 'center', alignContent: 'center' }}>
                                                <Text style={{ fontSize: 25, color: '#184272', fontWeight: 'bold' }}>60</Text>
                                                <Text style={{ color: 'gray', fontWeight: 'bold' }}>Vehicles</Text>
                                            </View>
                                            <View style={{ right: 0, position: 'absolute', marginTop: 5 }}>
                                                <Image source={require('../images/lightbutton.png')} style={{ width: 30, height: 30 }} />
                                            </View>
                                        </View>
                                        <View>
                                            <Image source={require('../images/Truck.png')} style={{ width: 40, height: 40 }} />
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View>
                                                <CardView style={{ backgroundColor: '#d7e6f8', width: 135, height: 60, marginRight: 10, padding: 5 }} cornerRadius={15} cardElevation={10}>
                                                    <View style={{ flexDirection: 'column' }} >
                                                        <View style={{ right: 0, position: 'absolute' }}>
                                                            <Image style={{ width: 15, height: 15 }} source={require('../images/button.png')} />
                                                        </View>
                                                        <View>
                                                            <Text style={{ color: '#184272' }}>Booked</Text>
                                                            <Text style={{ fontSize: 25, color: '#184272', fontWeight: 'bold' }}>20</Text>
                                                        </View>
                                                    </View>
                                                </CardView>
                                            </View>
                                            <View>
                                                <CardView style={{ backgroundColor: '#d7e6f8', width: 140, height: 60, padding: 5 }} cornerRadius={15} cardElevation={10}>
                                                    <View style={{ flexDirection: 'column' }} >
                                                        <View style={{ right: 0, position: 'absolute' }}>
                                                            <Image style={{ width: 15, height: 15 }} source={require('../images/button.png')} />
                                                        </View>
                                                        <View>
                                                            <Text style={{ color: '#184272' }}>Unbooked</Text>
                                                            <Text style={{ fontSize: 25, color: '#184272', fontWeight: 'bold' }}>10</Text>
                                                        </View>
                                                    </View>
                                                </CardView>
                                            </View>
                                        </View>
                                    </View>
                                </CardView>
                            </View>

                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 30 }}>
                                <CardView cornerRadius={15} cardElevation={10} style={{ height: 190, width: 140, margin: 20, padding: 10 }}>

                                    <View style={{ height: '100%' }}>
                                        <Text style={{ color: '#184272', marginTop: 10, fontWeight: 'bold' }}>Reward</Text>

                                        <Image
                                            source={require('../images/Reward.png')}
                                            style={{
                                                marginTop: 20,
                                                width: 40,
                                                height: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                            }} />
                                        <Text style={{ color: '#184272', fontSize: 28, bottom: 22, position: 'absolute', fontWeight: 'bold' }}>10</Text>
                                        <Text style={{ color: 'gray', bottom: 8, position: 'absolute', alignItems: 'center', fontWeight: 'bold', marginLeft: 3 }}>Points</Text>
                                    </View>

                                </CardView>
                                <CardView style={{ height: 190, width: 140, margin: 20, padding: 10 }} cornerRadius={15} cardElevation={10}>

                                    <View style={{ height: '100%' }}>
                                        <Text style={{ color: '#184272', marginTop: 10, fontWeight: 'bold' }}>Total Vehicles</Text>

                                        <Image
                                            source={require('../images/Totalvehicle.png')}
                                            style={{
                                                marginTop: 20,
                                                width: 40,
                                                height: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                            }} />
                                        <Text style={{ color: '#184272', fontSize: 28, bottom: 22, position: 'absolute', fontWeight: 'bold' }}>56</Text>
                                        <Text style={{ color: 'gray', bottom: 8, position: 'absolute', alignItems: 'center', fontWeight: 'bold', marginLeft: 3 }}>Vehicles</Text>
                                    </View>

                                </CardView>
                            </View>

                        </View>
                    ) : null}
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        height: '100%',

    },
    sidemenu: {
        width: 20,
        height: 20
    },
    logo: {
        width: 70,
        height: 70
    }
})

export default DriverDashboard;