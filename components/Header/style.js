import styled from "styled-components";

export const HeaderContainer = styled.header`
    .header__content {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .header__logo {
            margin: 0 3.12rem;
        }
    }
`;

export const HeaderNav = styled.nav`
    a {
        font-family: 'Audiowide', cursive;
        font-size: 1.37rem;
        text-transform: uppercase;
        margin: 0 1.56rem;

        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
`;