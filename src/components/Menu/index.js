import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

//import QRCode from 'react-native-qrcode';
import { 
    Container, 
    Code,
    Nav,
    NavItem,
    NavText,
    SignOutButton,
    SignOutButtonText,
    
} from './style';

export default function Menu () {
    return (
        <Container>
            <Code>
                {/* <QRCode
                    value="https://google.com.br"
                    size="{80}"
                    bgColor="#fff"
                    fgColor="8b10ae"
                /> */}
            </Code>
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