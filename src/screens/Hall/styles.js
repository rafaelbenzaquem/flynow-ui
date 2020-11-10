import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    padding: 0;
    margin: 0;    
    padding-top: 120px;
    background-color:#F5F9FF;
    flex:1;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap; 
`;

export const InputArea = styled.View`
    padding: 40px;
`;
export const CustomButton = styled.TouchableOpacity`
    margin:5px;
    width: 150px;
    height:150px;
    border-radius: 15px;
    justify-content:center;
    align-items:center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color:#FFF
`;