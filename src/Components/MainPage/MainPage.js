import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [emailConfirma, setEmailConfirma] = useState("")
const [date, setDate] = useState("")
const [phone, setPhone] = useState("")
const [race, setRace] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeDate = (event) => {
  setDate(event.target.value)
}
const onChangePhone = (event) => {
  setPhone(event.target.value)
}
const onChangeRace = (event) => {
  setRace(event.target.value)
}
const onChangeEmailConfirma = (event) => {
  setEmailConfirma(event.target.value)
}

const sendData = () => {
  if(age >= 18 && name.length >= 10 && name.length < 30 && email.includes("@") && email.includes(".com") && email === emailConfirma){
    setFormFlow(2)
  } else {
    alert("Seu usuário não pode ser cadastrado!")
  }
}



  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name={name}
      age={age}
      email={email}
      emailConfirma={emailConfirma}
      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      onChangeEmail={onChangeEmail}
      sendData={sendData}
      onChangeEmailConfirma={onChangeEmailConfirma}
      date={date}
      phone={phone}
      race={race}
      onChangeDate={onChangeDate}
      onChangePhone={onChangePhone}
      onChangeRace={onChangeRace}
      />  : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage