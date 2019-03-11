import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';


class App extends Component {

  state = {
    error: '', 
    consulta : {}
  }

  componentDidUpdate() {
    this.consultarApi();
  }

  componentDidMount() {
    this.setState({
      error: false 
    })
  }

  consultarApi = () => {
    const { ciudad, pais } = this.state.consulta;
    if(!ciudad || !pais) return null;

    const appid = 'e3646bbc406abe0aa693067648112d7d';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ ciudad },${ pais }&appid=${appid}`;
    console.log(url);
    // query con fetch api
   
    // leer la url y agregar el Api key

    // Consultar con fetch 
 
  }

  datosConsulta = respuesta => {
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true 
      });
    } else {
      this.setState({
        consulta: respuesta
      });
    }

  }

  render() {

    const error = this.state.error;

    let respuesta; 

    if(error) {
      respuesta =  <Error mensaje="Ambos campos son obligatorios" />
    }

    return (
      <div className="app">
        
        <Header 
          titulo = 'Clima React' 
        />

        <Formulario
          datosConsulta = { this.datosConsulta }
        />

        { respuesta }
      </div>
    );
  }
}

export default App;
