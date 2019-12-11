import React,{ useState, useEffect } from 'react'

//Importando a API
import api from '../../services/index'

//Importando alguns icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons'

//Importação dos styled components
import {
    Container,
    Item,
    Titulo,
    TagLine,
    ContainerBotao,
    Botao,
    Detalhes
} from "./styled";


export default function Main(){

    //Hooks de estado
    const[cervejas, setCervejas] = useState([])
    const[pagina, setPagina] = useState(1)

    useEffect(() => {
        carregarCervejas(pagina)
    }, [pagina])

    //Funcão para buscar as cervejas na API
    async function carregarCervejas(page = 1){
        try{
            const response = await api.get(`/beers?page=${page}`)
    
            const beer = response.data
    
            setCervejas(beer)
        }catch(err){
            alert('Erro inesperado')
        }
    }
    //Função para voltar uma pagina
    function anterior(){
        if(pagina === 1) return
        const numeroPagina = pagina - 1
        setPagina(numeroPagina)

        carregarCervejas(pagina)
    }

    //Função para passar uma pagina
    function proximo(){
        if(pagina === 13) return

        const numeroPagina = pagina + 1
        setPagina(numeroPagina)

        carregarCervejas(pagina)
    }

    //Retorno JSX
    return (
        <Container>
            {cervejas.map(beer => (
                <Item key={beer.id}>
                    <Titulo>{beer.name}</Titulo>
                    <TagLine>{beer.tagline}</TagLine>
                    <Detalhes to={`/beers/${beer.id}`}>Detalhes</Detalhes>
                </Item> 
            ))}
            <ContainerBotao>
                <Botao onClick={() => anterior()} disabled={pagina === 1}>
                    <FontAwesomeIcon size="4x" icon={faArrowAltCircleLeft}/>
                </Botao>
                <Botao onClick={() => proximo()} disabled={pagina === 13}>
                    <FontAwesomeIcon size="4x" icon={faArrowAltCircleRight}/>
                </Botao>
            </ContainerBotao>
        </Container>
    )
}