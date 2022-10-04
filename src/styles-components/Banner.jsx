import styled from "styled-components";
import banner from '../assets/banner.jpg'

export const Banner = styled.div`
    display: flex;
    width: 100%;
    background: center no-repeat linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),  url(${banner});
    min-height: 50vh; 
    text-align: left;
    align-items: center;
`;

export const InfoBanner = styled.div`
    margin: auto;
    width: 30%;
    color: white;
    font-size: 1.2em;
    line-height: 1.3em;

    h2{
        margin-bottom: 10px;
        text-align: center;
    }
`;


