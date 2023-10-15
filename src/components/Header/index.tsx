import React from 'react';

import { Container, Logo, TextTest} from './styles';
import logoImg from '@assets/logo2.png';


export function Header(){
    return (
        <Container>
          <Logo source={logoImg}></Logo>
        </Container>
    );
}