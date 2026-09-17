import axios from "axios"

export default function ValidarEntrada(email, senha) {
  return axios({
    method: "POST",
    url: "http://localhost:4000/entrar",
    data: {
      email: email,
      senha: senha
    }
  })
}
