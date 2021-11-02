import React, { Component } from 'react'
import ModalWindow from '../ModalWindow/ModalWindow';

export default class App extends Component {
  state = {
    isModalOpen: false
  };

  openModal = () => this.setState( { isModalOpen: true});
  closeModal = () => this.setState( { isModalOpen: false});

  render() {
    
    return (
      <div>
       
       <button onClick={this.openModal}>Open</button>
       {this.state.isModalOpen && (       <ModalWindow> 
         <h2>Modal window</h2>
         <p>Моя цель - донести до вас все необходимое для того, чтобы вы сразу, с довольно хорошим пониманием вопроса, начали пользоваться git. Здесь я не беру цель рассказать все темы, но только те, которые нужны чтобы сразу начать пользоваться Git.
         </p>
         <button onClick={this.closeModal}>Close modal</button>
       </ModalWindow>)}

    
  </div> )
  }
}
