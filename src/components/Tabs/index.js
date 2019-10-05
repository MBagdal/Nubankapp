import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
    Container,
    TabsContainer,
    TabItem,
    TabText,
 } from './style';

export default function Tabs( { translateY } ) {
    console.log(translateY);
    return (
        <Container style={{
            // Animacão de fazer os tabs descer junto com o card
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 280],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',    
                }),
            }],
            // Opacidade nos tabs
            opacity: translateY.interpolate({
              inputRange: [0, 280],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}
        >
        <TabsContainer>
            <TabItem>
                <Icon name="person-add" size={24} color="#FFF" />
                <TabText>Indicar Amigo</TabText>
            </TabItem>
            <TabItem>
                <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                <TabText>Cobrar</TabText>
            </TabItem>
            <TabItem>
                <Icon name="arrow-downward" size={24} color="#FFF" />
                <TabText>Depositar</TabText>
            </TabItem>
            <TabItem>
                <Icon name="arrow-upward" size={24} color="#FFF" />
                <TabText>Transferir</TabText>
            </TabItem>
            <TabItem>
                <Icon name="lock" size={24} color="#FFF" />
                <TabText>Bloquear cartão</TabText>
            </TabItem>
        </TabsContainer>
        </Container>
    );
}