import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Cloud01 from './assets/cloud01.svg';
import Cloud02 from './assets/cloud02.svg';
import SmallAircraft from './assets/smallAircraft.svg';
import Blue from './assets/blue.svg';
import White from './assets/white.svg';
import SmallCity from './assets/smallCity.svg';
import SmallCar from './assets/smallCar.svg';
import Aircraft from './assets/aircraft.svg';

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                //valida token
            } else {
              //  navigation.navigate('Hall');
              navigation.reset({
                  routes: [{name:'Hall'}]
              });
            }
        }
        checkToken();
    }, []);

    return (
        <View style={styles.container}>

            <SmallAircraft style={styles.sAircraft}

                height={450} width={450}

            />

            <Cloud02 style={styles.cloud02}
                height={270} width={270}

            />
            <Cloud01 style={styles.cloud01}

            />

            <Blue style={styles.blue} height={600} width={600} />
            <White style={styles.white} height={600} width={600} />
            <SmallCity style={styles.sCity} />
            <SmallCar style={styles.sCar} />
            <Aircraft style={styles.aircraft} width={70} />
            <Text style={styles.mainTitle}>
                FlyNow
            </Text>
            <Text style={styles.subTitle}>
                Your aircraft management
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0097EF',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cloud02: {
        position: 'absolute',
        top: -85,
        right: -70,

    }
    ,
    cloud01: {
        position: 'absolute',
        top: 75,
        right: -70,

    },

    sAircraft: {
        position: 'absolute',
        top: -140,
        left: -100
    },

    blue: {
        position: 'absolute',
        bottom: -140
    },

    white: {
        position: 'absolute',
        left: -105,
        bottom: -190
    },

    sCity: {
        position: 'absolute',
        bottom: 50
    },

    sCar: {
        position: 'absolute',
        bottom: 10
    },

    aircraft: {
        position: 'absolute',
        top: 180,
        left:164
    },

    mainTitle: {
        fontSize: 45,
        color: '#00D0DF',
        top: 135,
        fontWeight: 'bold',
        fontFamily: 'Arial Rounded MT',
        fontStyle: "italic"
    },
    subTitle: {
        fontSize: 20,
        color: '#172434',
        top: 135,
        fontWeight: 'bold',
        fontFamily: 'Arial Rounded MT',
        fontStyle: "italic"
    }

});