import styled from "styled-components";

export const CardFifaContainer = styled.section`

`

export const CardFifaContent = styled.section`
    display: flex;

    h2 {
        color: ${({theme}) => theme.gold};
    }
    .card__colOne {
        background-color: ${({theme}) => theme.greythird};
        padding: 2.81rem;

        h2 {
            font-family: 'Alata', cursive;
            font-size: 3rem;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 2rem;
        }
    }
    .card__colTwo {
        background-color: ${({theme}) => theme.third};
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
            font-family: 'Audiowide', cursive;
            font-size: 3rem;
            text-transform: uppercase;
            text-align: center;
            margin: 2rem 0;
        }
    }
`