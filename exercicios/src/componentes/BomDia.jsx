import React from 'react'

/* export default props => 
    <div>
        <h1>Bom Dia {props.nome}!!! </h1>
        <h1>Até mais</h1>
    </div> */

/* export default props => 
    <React.Fragment>
        <h1>Bom Dia {props.nome}!!! </h1>
        <h1>Até mais</h1>
    </React.Fragment> */

export default props => [
    <h1 key='h1'>Bom Dia {props.nome}!!! </h1>,
    <h1 key='h2'>Até mais</h1>  
]  
    