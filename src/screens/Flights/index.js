import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';
import { Api } from '../../Api';

export default () => {
    const findTravels = async () => {
        let json = await Api.findServicesByType('travel');

        return json;
    }

    findTravels();

    return (
        <Container>
            <Text>Flights</Text>
            
        </Container>
    );
}
