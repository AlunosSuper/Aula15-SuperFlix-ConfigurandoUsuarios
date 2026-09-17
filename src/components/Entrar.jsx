import styled from "styled-components";
import ValidarEntrada from "../functions/ValidarEntrada"
import { useNavigate } from "react-router-dom"



const Modelo = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #222;
  padding: 32px;
`;
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FormularioTitulo = styled.div`
  font-size: 24pt;
  font-weight: bold;
  text-align: center;
`;
export default function Entrar() {

  const navegar = useNavigate()

  function Validar(evento) {
    const email = evento.target.email.value
    const senha = evento.target.senha.value

    ValidarEntrada(email, senha)
      .then(function(resposta) {
        if (resposta.status === 202)
          navegar("/explorar")
      })
      .catch(function(erro) {
        alert(erro.message)
      })
    
    evento.preventDefault()
  }

  return (
    <Modelo>
      <Formulario action="/explorar" method="GET" onSubmit={ Validar }>
        <FormularioTitulo> Entrar </FormularioTitulo>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="****" required />
        <input type="submit" value="Entrar" />
      </Formulario>
    </Modelo>
  );
}
