import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs/index';
import Card from '../../components/Card/index';
import { 
    Container,
    Content,
} from './style';

export default function main() {
    return (
        <Container>
            <Header />
            <Content>
                <Menu/>
                <Card/>
            </Content>
            <Tabs />
        </Container>
    );
};