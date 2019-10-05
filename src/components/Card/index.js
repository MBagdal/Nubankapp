import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';

import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
    Container,
    CardHeader,
    CardContent,
    CardFooter,
    Title,
    Description, 
    Annotation,
} from './style';



export default function Card ( { translateY } ) {
    let offset = 0;

    const animatedEvent = Animated.event(
        [
          {
            nativeEvent: {
              translationY: translateY,
            },
          },
        ],
        { useNativeDriver: true },
      );

    function onHandlerStateChange ( event ) {
        if ( event.nativeEvent.oldState === State.ACTIVE ) {
            const { translationY } = event.nativeEvent;
            let opened = false;
            offset += translationY;

            if ( translationY >= 100 ) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 380 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start( _ => {
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }    
    }

    return (
        <PanGestureHandler 
            onGestureEvent={animatedEvent}
            onHandlerStateChange={ onHandlerStateChange }>

            <Container style={{ 
                transform: [{ translateY: translateY.interpolate({
                    inputRange: [-200, 0, 380],
                    outputRange: [-50, 0, 350],
                    extrapolate: 'clamp'
                })}]
            }}>
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
                <Annotation>Depósito de R$ 192.007,45, recebido quinta-feira às 14:47.</Annotation>
            </CardFooter>
        </Container>        
        </PanGestureHandler>
    );
}