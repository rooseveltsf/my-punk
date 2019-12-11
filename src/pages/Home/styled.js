import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    margin: 20px auto 0;
    padding: 0 20px;
`

export const Item = styled.div`
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    margin: 10px;
    padding: 20px;
    width: 45%;
    height: 150px;
`

export const Titulo = styled.h2`
    font-size: 25px;
    height: 50px;
    margin-bottom: 10px;
`

export const TagLine = styled.p`
    font-size: 17px;
    color: #999999c7;
    margin-top: 6px;
    line-height: 30px;
`

export const Detalhes = styled(Link)`
    border: 2px solid #333;
    color: #333;
    background: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 50px;
    font-size: 20px;
    margin-top: 10px;
    transition: all 0.3s;

    &:hover {
        background: #333;
        color: #fff;
    }
`

export const ContainerBotao = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`

export const Botao = styled.button`
    border-radius: 40px;
    border: none;
    background: #333;
    /* padding: 10px; */
    color: #fff;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        opacity: 0.3;
    }
    &:disabled {
        opacity: 0.3;
        cursor: auto;
    }
`