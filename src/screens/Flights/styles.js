import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#F5FDFE;
    padding:20px;
`;

export const Scroller = styled.ScrollView`
    flex:1;
`;
export const HeaderAerea = styled.View`
  flex-direction:row;
  align-items:center;
  padding-bottom: 10px;
`;
export const HeaderTitle = styled.Text`
    font-size:20px;
    font-family:'Lato';
    font-weight:bold;
    color:#00C6EB;
    margin-left:10px; 
`;
export const SearchArea = styled.View`

    background-color:#FFF;
    height:210px;
    width:100%;
    border-radius:10px;
    border:1px;
    border-color:#00C6EB;
    
`;
export const OriginFinder = styled.TouchableOpacity`
flex:1;
flex-direction:row;
align-self:stretch;
`;
export const OriginInput = styled.TextInput`
align-self:flex-end;
margin:10px;
height:60px;
width:90%;
border-color:#CAD0D6;
border:1px;
border-radius:5px;
`;
export const DestinationFinder = styled.TouchableOpacity`
flex:1;
flex-direction:row;
`;
export const DestinationInput = styled.TextInput`
align-self:flex-end;
margin:10px;
height:60px;
width:90%;
border-color:#CAD0D6;
border:1px;
border-radius:5px;
`;
export const ReverseRoute = styled.TouchableOpacity`
   align-self:flex-end;
`;

export const LoadingIcon = styled.ActivityIndicator`
 margin-top:50px;
`;