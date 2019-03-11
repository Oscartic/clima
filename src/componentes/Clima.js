import React, { Component } from 'react';

class Clima extends Component {

    mostrarResultado = () => {

        // obtener los datos de la consulta 

        const { name } = this.props.resultado;
        
        if(!name) return null;
        
        return(
            <h1>Desde Clima.js</h1>
        )
    }

    render() { 
        console.log(this.props.resultado);
        return ( 
            <div className="container">
               { this.mostrarResultado() }
            </div>
         );
    }
}
 
export default Clima;