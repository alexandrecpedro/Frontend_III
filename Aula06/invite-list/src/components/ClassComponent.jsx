import React, { Component } from 'react';

export default class ClassComponent extends Component {
    // render components on screen
    render() {
        const { nome, estaNaLista } = this.props;
        return (
            <li>{nome} {estaNaLista ? "está" : "não está"} convidado para festa</li>
        );
    };
};