import React, { Component } from 'react';
import s from "./ModalWindow.module.css";

export default class ModalWindow extends Component {
 
  
  componentDidMount() {
    window.addEventListener("keydown", this.handlKeyPress)
  };
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlKeyPress)
  };
  handlKeyPress = (e) => {
    if( e.code !== "Escape") return;
    this.props.onClose();
  };
  handleBlackdropClick = (e) => {
if ( e.target !== e.currentTarget) return;
this.props.onClose();
  }
  render() {
    return (
      <div className={s.blackdrop} onClick={this.handleBlackdropClick}>
        <div className={s.modalWindow}>{this.props.children}</div>
      </div>
    )
  }
};

