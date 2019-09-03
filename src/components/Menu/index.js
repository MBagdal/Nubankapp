import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';

import { 
    Container, 
    Code,
    Nav,
    NavItem,
    NavText,
    SignOutButton,
    SignOutButtonText,
    
} from './style';

export default function Menu ({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
              inputRange: [0, 280],
              outputRange: [0, 0.8],
            }),
          }}
        >
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"/>
                    <NavText>Me Ajuda</NavText>
                    {/* <Icon name="keyboard-arrow-right" size={20} color="#fff" style={{flex: 1, justifyContent: "center"}}/> */}
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"/>
                    <NavText>Perfil</NavText>
                    {/* <NavText>Nome de preferencia, telefone, email...</NavText> */}
                </NavItem>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"/>
                    <NavText>Configurar NuConta</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"/>
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <SignOutButton onPress={ _ => {} }>
                    <SignOutButtonText>
                        Sair do app
                    </SignOutButtonText>
                </SignOutButton>
                    
            </Nav>
        </Container>
    );
};