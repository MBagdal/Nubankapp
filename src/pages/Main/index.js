import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs/index';

import { 
    Container,
    Content,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Title,
    Description, 
    Annotation,
} from './style';

export default function main() {
    return (
        <Container>
            <Header />
            <Content>
                <Menu/>
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={24} color="#666"/>
                        <Icon name="visibility-off" size={24} color="#666"/>
                    </CardHeader>
                    <CardContent>
                        <Description>
                            R$ 192.007,45
                        </Description>
                        <Title>
                            Bem vindo a sua NuConta:
                        </Title>
                    </CardContent>
                    <CardFooter>
                        <Annotation>Vai porra</Annotation>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs />
        </Container>
    );
};