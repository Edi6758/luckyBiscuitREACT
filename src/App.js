import React, {Component} from 'react';
import biscoito from './assets/biscoito.gif';
import './estilo.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Você vai ficar rico! XP+50', 
                        'Você vai perder seu carro:( XP-35', 
                        'Pegue outro biscoito: XP+0', 
                        'Você vai arrumar um emprego XP+15', 
                        'Você vai ser promovido XP+22', 
                        'Você está com SORTE XP+70', 
                        'Você vai adoecer XP-60']

    }

    quebraBiscoito(){

        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[numeroAleatorio];
        this.setState(state);
    }

    render() {
        return ( 
            <div className="container">
                <img src={biscoito} className="img" className="img"/>  
                <Botao nome = "Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button  className="botao" onClick={this.props.acaoBtn}> {this.props.nome}</button>
            </div>
        )
    }
}

export default App;