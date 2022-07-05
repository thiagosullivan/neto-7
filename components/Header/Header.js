import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoHeader from '../../assets/neto-logo.webp';
import { HeaderContainer, HeaderNav } from './style';


function Header() {
  return (
    <HeaderContainer>
        <div className='header__content'>
            <HeaderNav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/">
                    <a>Fotos</a>
                </Link>
                <Link href="/">
                    <a>Vídeos</a>
                </Link>
            </HeaderNav>
            <Link href="/">
                <a className='header__logo'>
                    <Image src={LogoHeader} height={150} width={150}/>
                </a>
            </Link>
            <HeaderNav>
                <Link href="/">
                    <a>Sobre</a>
                </Link>
                <Link href="/">
                    <a>Calendário</a>
                </Link>
                <Link href="/">
                    <a>Contato</a>
                </Link>
            </HeaderNav>
        </div>
    </HeaderContainer>
  )
}

export default Header