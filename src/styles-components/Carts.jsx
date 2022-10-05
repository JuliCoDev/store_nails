import styled from "styled-components";

export const ContainerCart = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 30px auto;
    
`;

export const Cart = styled.div`
    display: block;
    width: 33%;
    margin: 10px;

    &:hover{        
        cursor: pointer;
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.35);
    }

    img{
        width: 100%;
    }

    h3{
        width: 100%;
        text-align: center;
    }

    
`;