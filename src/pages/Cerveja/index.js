import React, {useState, useEffect} from 'react'

//Importando a API
import api from '../../services/index'

//Importando alguns icones
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons'

//Importação dos styled components
import {
    Container,
    SubContainer,
    Info,
    Nome,
    Tagline,
    Descricao,
    Imagem,
    Botao
} from './styled'

export default function Cerveja(props) {

    //Hooks de estado
    const [cerveja, setCerveja] = useState([])
    const [id, setId] = useState(Number(props.match.params.id))

    /*  Sempre que houver alteração no id o fetchBeer() será executado.
        (Método de ciclo de vida)*/
    useEffect(() => {
        fetchBeer(id)
    }, [id])

    //Buscando a cerveja passando como parâmentro o ID
    async function fetchBeer(id) {
        try{
            const response = await api.get(`/beers/${id}`)
            const beers = await response.data[0]
            setCerveja(beers) 
        }catch(err){
            alert('Erro inesperado')
        }
           
    }

    //Função para retroceder
    function anterior() {
        if(id === 1) return
        const novoId = id - 1
        setId(novoId)
    }

    //Funcção para avançar
    function proximo() {
        if(id === 325) return
        const novoId = id + 1
        setId(novoId)
    }


    //Retorno JSX
    return(
        <Container>
            <Botao disabled={id === 1} onClick={anterior}><FontAwesomeIcon size="4x" icon={faArrowAltCircleLeft} /></Botao>
            <SubContainer>
                <Info>
                    <Nome>{cerveja.name}</Nome>
                    <Tagline>{cerveja.tagline}</Tagline>
                    <Descricao>{cerveja.description}</Descricao>     
                </Info>
                <Imagem src={cerveja.image_url} />
                
            </SubContainer>
            <Botao disabled={id === 325} onClick={proximo}><FontAwesomeIcon size="4x" icon={faArrowAltCircleRight} /></Botao>
        </Container>
    )
}