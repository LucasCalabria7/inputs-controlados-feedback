import React from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = (props) => {
  function finalClick() {
      alert("Parabéns você completou seu cadastro !")
  }
  return (
    <Form>
      <label>
        Data de Nascimento:
        <Input type="date" value={props.date} onChange={props.onChangeDate} />
      </label>

      <label>
        Número do Celular
        <Input type="number" placeholder="(00) 0000-0000" value={props.phone} onChange={props.onChangePhone} />
      </label>

      <label>
        Você se considera de qual raça ?
        <select onChange={props.onChangeRace} >
          <option></option>
          <option>Branco</option>
          <option>Preto</option>
          <option>Amarelo</option>
          <option>Pardo</option>
          <option>Indígena</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>

      <label>
        Você se considera de qual sexo ?
        <select onChange={props.onChangeRace} >
          <option></option>
          <option>Homem cisgênero</option>
          <option>Mulher cisgênero</option>
          <option>Homem trans</option>
          <option>Mulher trans</option>
          <option>Pessoa não binária</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>

      <button onClick={finalClick} >Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm