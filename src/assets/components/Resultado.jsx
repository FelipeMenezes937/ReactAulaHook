import React from 'react'

// desestruturando o resultado para pegar o valor
const Tabela= ({resultado})=>{
    const valor=parseFloat(resultado)
    console.log(valor);
    if(resultado < 18.5){
        return(<>
            <td>abaixo do peso</td>
            <td>abaixo de 18.5</td>
        </>)
    }
    else if(resultado >= 18.5 && resultado < 25){
        return (
            <>
                <td>Peso Normal</td>
                <td>18.5 - 24.9</td>
            </>
        )
    }else if(resultado >= 25 && resultado < 30){
        return(
            <>
                <td>Sobre Peso</td>
                <td>25 - 29.9</td>
            </>
        )
    }else{
        return (
            <>
                <td>Obesidade Grau-1</td>
                <td>maior que 39.9</td>
            </>
        )
    }
    
}


const Resultado = ({resultado}) => {
  return (
    <div>
    <div className='resultado'>
        <h2>
            Seu IMD é de <span className='img-span'>{resultado}</span>
        </h2>
    </div>
    <table className='tabela'>
        <thead className='tableHandler'>
            <tr>
                <tr>Classificacao</tr>
                <th>IMC</th>
            </tr>
            
        </thead>
        <tbody>
            <tr>
                <Tabela resultado={resultado}/>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Resultado