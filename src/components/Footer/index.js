import React from 'react';//Lembrando que precisamos importar o React da dependência react para que ele entenda que este é um componente que será exibido na tela.

import './style.css';

export default function Footer(){       //há mais de uma maneira de exportar containers, este é um exemplo
    return(
            <footer>Desenvolvido com React</footer>

    );
}