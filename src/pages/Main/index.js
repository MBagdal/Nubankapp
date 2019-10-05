import React from 'react';
import { Animated }    from 'react-native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs/index';
import Card from '../../components/Card/index';

import { 
    Container,
    Content,
} from './style';


export default function main() {
    const translateY = new Animated.Value(0);
    
    return (
        <Container>
            <Header />
            <Content>
                <Menu translateY={ translateY }/>
                <Card translateY={ translateY }/>
            </Content>
            <Tabs translateY={ translateY } />
        </Container>
    );
};