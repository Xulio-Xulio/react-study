import React from 'react'
import ReactDOM from 'react-dom'

/* import Blabla from './componentes/Primeiro' */
/* import BomDia from './componentes/BomDia' */

/* ReactDOM.render(<Blabla />, document.getElementById(`root`)) */
/* ReactDOM.render(<BomDia  nome="Julio"/>, document.getElementById(`root`)) */

/* import Multi from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Julio"/>
        <Multi.BoaNoite nome="Julia"/>
    </div>
, document.getElementById('root')) */

/* import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom Dia" nome="Caio" />
    </div>
    , document.getElementById('root')
) */

import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render(
    <div>
        <Pai nome="Carlos" sobrenome="Johnson">
            {/* Como passo os componentes filho aqui? */}
            <Filho nome="Carlito" />
            <Filho nome="Rick" />
            <Filho nome="Lila" />
        </Pai>
    </div>
,document.getElementById('root'))