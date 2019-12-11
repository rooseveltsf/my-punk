import styled from "styled-components"

export const Container = styled.div`
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-top: 40px
`

export const SubContainer = styled.div`
    border: none;
    height: 500px;
    margin: 0 17% 0 17%;
    border-radius: 12px
    display: flex;
    background: #fff;
    box-shadow: 5px 5px 10px #33333336;
    align-items: center;
    justify-content: center;
`

export const Info = styled.div`
    border-radius: 20px;
    padding: 30px;
`

export const Nome = styled.h2`
    font-size: 50px;
    margin-bottom: 20px;
    height: 150px;
`

export const Tagline = styled.p`
    font-size: 20px;
    color: #999999c7;
    margin-bottom: 15px;
`

export const Descricao = styled.p`
    width: 500px;
    font-size: 19px;
`

export const Imagem = styled.img`
    width: 100px;
    height: 400px;
    padding: 20px;
`

export const Botao = styled.button`
    background: #fff;
    color: #333;
    border: none;
    border-radius: 50px;

    &:hover {
        opacity: 0.3
    }
    &:disabled {
        opacity: 0.3
    }
`