import React, {useState} from 'react';
import {Platform} from 'react-native';
import { Text } from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {
    Container,
    Scroller,

    HeaderAerea,
    HeaderTitle,

    SearchArea,
    OriginFinder,
    OriginInput,
    DestinationFinder,
    DestinationInput,
    ReverseRoute,
    LoadingIcon,
} from './styles';
import Api  from '../../Api';

import Icon1 from './asserts/icon_1.svg';
import Icon2 from './asserts/icon_2.svg';
import Icon3 from './asserts/icon_3.svg';
import Icon4 from './asserts/icon_4.svg';
import Icon5 from './asserts/icon_5.svg';

export default () => {
    const[locationText,setLocationtext] = useState('');
    const [coords,setCoords] = useState(null);
    const [loading,setLoading]=useState(false);
    const[list,setList]=useState([]);

    const handleLocationFinder = async () => {


        let result = await request(
            Platform.OS==='ios'?
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            :
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted'){
            setLoading(true);
            setLocationtext('');
            setList([]);

            Geolocation.getCurrentPosition((i)=>{
              console.log(i);  
              setCoords(i.coords);
              getTravels();
            });
        }
       
    }
    const getTravels = async()=>{

        setLoading(true);
        setList([]);

        let res = await Api.findServicesByType('travel');
        console.log(res);
        

        setLoading(false);
    }

    return (
        <Container>
            <Scroller>
                <HeaderAerea>
                    <Icon1 width="18px" height="18px"/>
                    <HeaderTitle >Flights</HeaderTitle>
                </HeaderAerea>
                <SearchArea>
                    
                    <OriginFinder onPress={handleLocationFinder}>
                        <Icon2 width="18px" height="18px"/>
                    </OriginFinder>
                    <OriginInput placeholder="Enter Origin"></OriginInput>
                    
                    <ReverseRoute>
                        <Icon4 width="11" height="22"/>
                    </ReverseRoute>
                    <DestinationFinder>
                        <Icon3 width="18px" height="18px"/>
                    </DestinationFinder>
                    <DestinationInput placeholder="Enter Destination"></DestinationInput>
                    


                </SearchArea>
                {loading &&
                <LoadingIcon size="large" color="#OOO"/>
}
            </Scroller>
        </Container>
    );
}
