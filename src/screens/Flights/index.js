import React from 'react';
import { Text } from 'react-native';
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
    ReverseRoute
} from './styles';
import { Api } from '../../Api';

import Icon1 from './asserts/icon_1.svg';
import Icon2 from './asserts/icon_2.svg';
import Icon3 from './asserts/icon_3.svg';
import Icon4 from './asserts/icon_4.svg';
import Icon5 from './asserts/icon_5.svg';

export default () => {
    const findTravels = async () => {
        let json = await Api.findServicesByType('travel');
        return json;
    }
    return (
        <Container>
            <Scroller>
                <HeaderAerea>
                    <Icon1 />
                    <HeaderTitle >Flights</HeaderTitle>
                </HeaderAerea>
                <SearchArea>
                    
                    <OriginFinder>
                        <Icon2 />
                    </OriginFinder>
                    <OriginInput></OriginInput>
                    
                   
                    <DestinationFinder>
                        <Icon3 />
                    </DestinationFinder>
                    <DestinationInput></DestinationInput>
                    
                    <ReverseRoute>
                        <Icon4 />
                    </ReverseRoute>

                </SearchArea>
            </Scroller>
        </Container>
    );
}
