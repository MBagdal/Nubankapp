import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex:1;
    background: #8b10ae;
    padding-top: ${getStatusBarHeight()}px;
    justify-content: center;
`;

export const Content = styled.View`
    flex: 1;
    max-height: 400px;
    z-index: 5;
`;

export const Card = styled.View`
    flex: 1;
    background: #fff;
    border-radius: 4px;
    margin: 0 20px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 200px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export const CardContent = styled.View`
    flex: 1;
    padding: 0 30px; 
    justify-content: center;
`;

export const CardFooter = styled.View`
    padding: 20px;
    background: #eee;
    border-radius: 4px;
`;

export const Title = styled.Text`
    font-size: 13px;
    color: #999;
    margin-top: 5px;
`;

export const Description = styled.Text`
    font-size: 26px;
    color: #000 ;
`;

export const Annotation = styled.Text`
    font-size: 12px;
    color: #333;
`;