import styled from "styled-components";

export const HeroSliderContainer = styled.section`
    max-width: 1300px;
    width: 100%;
    height: 90vh;
    margin: 0 auto;
    padding: 3rem 0;
`

export const BannerText = styled.div`
    position: absolute;
    padding-top: 3rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    h1 {
        font-family: 'Alata', sans-serif;
        font-size: 9rem;
        text-transform: uppercase;
        text-align: center;

        span {
            color: ${({theme}) => theme.secondary};
            font-size: 21rem;
        }
    }
`