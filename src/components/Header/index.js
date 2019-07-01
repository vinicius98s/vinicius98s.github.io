import React from 'react';
import { HeaderWrapper, Logo } from './styles';

import Menu from '../Menu';

const Header = () => (
    <HeaderWrapper>
        <Logo src={require('../../assets/images/Logo.svg')} />
        <Menu />
    </HeaderWrapper>
);

export default Header;
