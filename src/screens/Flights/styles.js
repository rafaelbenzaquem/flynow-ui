import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#F5FDFE;
`;

export const Scroller = styled.ScrollView`
    flex:1;
    padding:20px;

`;
export const HeaderAerea = styled.View`
    flex-direction:row;
    align-items:center;
`;
export const HeaderTitle = styled.Text`
    font-size:20;
    font-family:'Lato';
    font-weight:bold;
    color:#00C6EB;
`;
export const SearchArea = styled.View`
    background-color:#FFF;
    height:210px;
    border-radius:10px;
    border:1px;
    flex-direction:row;

    border-color:#00C6EB;


`;
export const OriginFinder = styled.TouchableOpacity`
flex:1;

`;
export const OriginInput = styled.TextInput``;
export const DestinationFinder = styled.TouchableOpacity``;
export const DestinationInput = styled.TextInput``;
export const ReverseRoute = styled.TouchableOpacity``;