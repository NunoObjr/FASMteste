import React, { Component } from 'react'
import api from '../services/api'
import {Link} from 'react-router-dom'

export default class Lista extends Component{
    state = {
        vetor: []
    }


    componentDidMount(){
        this.loadLista();  
    }

    loadLista = async() =>{
        const vetor = await api.get('/breweries?page=25');
        this.setState({ vetor:vetor.data })
        
    };

    render(){
        const listagem = this.state.vetor
        return(
            <div>
                <Link to='/'><h1>Pagina Anterior</h1></Link>
                {listagem.map(obj => (
                    <ul key={obj.id}>
                        <li>{obj.id}</li>
                        <li>{obj.name}</li>
                        <li>{obj.city}</li>
                        <li>{obj.country}</li>
                    </ul>
                ))}
            </div>
        )
    }




} 
