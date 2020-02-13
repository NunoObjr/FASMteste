import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Index extends Component{
    state = {
        CNPJ: "",
        Cpf: "",
        Cep: "",
        RazaoSocial: "",
        Nome: "",
        Endereco: "",
        Bairro:"",
        Complemento:"",
        Cidade:"",
        Estado:""
    };


    handleSubmit = async e => {
        e.preventDefault();
        const regex = /[0-9]/;
        const regexL = /[a-z]/;
        localStorage.setItem('Complemento', this.state.Complemento)
        if(this.state.CNPJ.length!=11 || regexL.test(this.state.CNPJ)){
            alert("erro no campo cnpj")
        }
        else{
            localStorage.setItem('CNPJ', this.state.CNPJ)
            if(this.state.Cpf.length!=11|| regexL.test(this.state.CNPJ)){
                alert("erro no campo cpf")
                localStorage.removeItem('CNPJ')
            }
            else{
                localStorage.setItem('CPF', this.state.Cpf)  
                if(this.state.Cep.length!=8 || regexL.test(this.state.CNPJ)){
                    alert("erro no campo cep")
                }
                else{
                    localStorage.setItem('Cep', this.state.Cep)
                    if(regex.test(this.state.RazaoSocial)){
                    alert('erro no campo Razao social')
                    }
                    else{
                    localStorage.setItem('Social', this.state.RazaoSocial)
                    
                        if(regex.test(this.state.Nome)){
                        alert('erro no campo Nome')
                        }
                        else{
                            localStorage.setItem('Nome', this.state.Nome)
                            
                            if(regex.test(this.state.Endereco)){
                                alert('erro no campo Endereco')
                            }
                            else{
                                localStorage.setItem('Endereco', this.state.Endereco)
                                
                                if(regex.test(this.state.Bairro)){
                                alert('erro no campo Bairro')
                                }
                                else{
                                localStorage.setItem('Bairro', this.state.Bairro)
                                    if(regex.test(this.state.Cidade)){
                                    alert('erro no campo Cidade')
                                    }
                                    else{
                                    localStorage.setItem('Cidade', this.state.Cidade)
                                    
                                    if(regex.test(this.state.Estado)){
                                    alert('erro no campo Estado')
                                    }
                                    else{
                                    localStorage.setItem('Cidade', this.state.Estado)
                                    }
                                    }
                                }
                            
                            }
                        }
                     }
                }
            }
        }
    };

    render(){

        return(
            <div>
                <Link to='/lista'><h1>Proxima pagina -></h1></Link>
                <form 
                onSubmit={this.handleSubmit}
                >
                    <input 
                    type="password" 
                    placeholder="CNPJ"
                    onChange={e => this.setState({ CNPJ: e.target.value })}
                    />
                    <input 
                    type="password" 
                    placeholder="Cep"
                    onChange={e => this.setState({ Cep: e.target.value })}
                    />
                    <input 
                    type="password" 
                    placeholder="Cpf"
                    onChange={e => this.setState({ Cpf: e.target.value })}
                    />
                    <input 
                    type="text" 
                    placeholder="Razao Social"
                    onChange={e => this.setState({ RazaoSocial: e.target.value })}
                    />
                    <input 
                    type="text" 
                    placeholder="Nome do responsavel"
                    onChange={e => this.setState({ Nome: e.target.value })}
                    />
                    <input 
                    type="text" 
                    placeholder="Bairro"
                    onChange={e => this.setState({ Bairro: e.target.value })}
                    />
                    <input 
                    type="text" 
                    placeholder="Endereco"
                    onChange={e => this.setState({ Endereco: e.target.value })}
                    />
                    <input 
                    type="text" 
                    placeholder="Complemento"
                    onChange={e => this.setState({ Complemento: e.target.value })}
                    />
                    <input 
                    type="text" 
                    placeholder="Cidade"
                    onChange={e => this.setState({ Cidade: e.target.value })}
                    />
                    <input 
                    type="text" 
                    placeholder="Estado"
                    onChange={e => this.setState({ Estado: e.target.value })}
                    />
                    <button id="submit" type="submit">Salvar</button>
                </form>
            </div>
        )
    }
} 