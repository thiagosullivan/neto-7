import styled from "styled-components";

export const HistoryContainer = styled.section`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 1rem;
    display: flex;
    align-items: flex-start;

    .history__colOne {
        border-right: 2px solid ${({theme}) => theme.secondary};
        margin-right: 2rem;
    }

    .history__colTwo {
        max-width: 70%;

        .react-tabs__tab-list {
            display: flex;
            justify-content: center;
            justify-content: space-between;
            align-items: top;
            margin-bottom: 2rem;
        }
        .react-tabs__tab-list li {
            font-family: 'Audiowide', cursive;
            color: ${({theme}) => theme.primary};
            font-size: 2rem;
            border: 5px solid ${({theme}) => theme.primary};
            border-radius: 50%;
            width: 120px;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }
            &:last-child {
                margin-right: 0;
            }
        }
        .react-tabs__tab-list .react-tabs__tab--selected {
            border: 5px solid ${({theme}) => theme.secondary};
            color: ${({theme}) => theme.secondary};
        }
        .react-tabs__tab-panel p {
            max-width: 850px;
            width: 100%;
            text-align: justify;
            font-family: 'Tahoma', sans-serif;
            font-size: 1.12rem;
            line-height: 1.5;
            color: ${({theme}) => theme.primary};
        }

        .react-tabs__tab-panel ul {
            list-style: disc;
            padding: 2rem 0 0 2rem;
            line-height: 1.5;
            font-family: 'Tahoma', sans-serif;
            font-size: 1.12rem;
        }
    }
`