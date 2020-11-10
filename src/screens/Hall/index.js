import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, CustomButton, CustomButtonText } from './styles';
import {useNavigation} from '@react-navigation/native';

import Banner from './assets/banner_1.svg';
import Icon1 from './assets/icon_1.svg';
import Icon2 from './assets/icon_2.svg';
import Icon3 from './assets/icon_3.svg';
import Icon4 from './assets/icon_4.svg';

export default () => {

    const navigation = useNavigation();

    const goFlightsPage = ()=>{
        navigation.navigate('Flights');
    }

    const goFreightPage = ()=>{
        navigation.navigate('Freight');
    }

    const goCargoPage = ()=>{
        navigation.navigate('Cargo');
    }

    return (
        <Container>
            <Text style={styles.mainTitle}>Welcome to Flynow</Text>
            <Text style={styles.subTitle}>Choice a service</Text>
            <CustomButton style={styles.btnFlights} onPress={goFlightsPage}>
                <Icon1 />
                <CustomButtonText>Flights</CustomButtonText>
            </CustomButton>
            <CustomButton style={styles.btnFreight} onPress={goFreightPage}>
                <Icon2 />
                <CustomButtonText>Freight</CustomButtonText>
            </CustomButton>
            <CustomButton style={styles.btnCargo} onPress={goCargoPage}>
                <Icon3 />
                <CustomButtonText>Cargo</CustomButtonText>
            </CustomButton>
            <CustomButton style={styles.btnPayment}>
                <Icon4/>
                <CustomButtonText>Payments</CustomButtonText>
            </CustomButton>
            <Banner style={styles.sBanner}></Banner>
        </Container>

    );
}

const styles = StyleSheet.create({
    mainTitle: {
        position: "absolute",
        top: 20,
        fontFamily: 'Lato',
        fontSize: 36,
        fontWeight: 'bold',
        color:'#7A7F85'
    },

    subTitle:{
        position:"absolute",
        top: 60,
        fontFamily: 'Lato',
        fontSize: 20,
        color:'#7A7F85'

    },
    btnFreight:{
        backgroundColor:'#DFDF00'
    },
    btnFlights: {
        backgroundColor: '#00C4F8'
    },
    btnPayment:{
        backgroundColor:'#BB88F2'
    },
    btnCargo:{
        backgroundColor:'#61E9A5'
    },

    sBanner: {
        position: "absolute",
        bottom: 20

    }


});
