import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    CardHeader,
    CardContent,
    CardFooter,
    Title,
    Description, 
    Annotation,
} from './style';

export default function Card () {
    return (
        <Container>
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
        </Container>
    );
}