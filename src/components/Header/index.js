import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'
import { NavBar } from './styled'

// Retorno JSX do NavBar
const Header = () => <NavBar><FontAwesomeIcon size="sm" spin={Animation} icon={faBeer} /></NavBar>


export default Header;

