import React, { Component } from 'react';
import s from "./ModalWindow.module.css";

export default class ModalWindow extends Component {
  render() {
    return (
      <div className={s.blackdrop}>
        <div className={s.modalWindow}>{this.props.children}</div>
      </div>
    )
  }
};

