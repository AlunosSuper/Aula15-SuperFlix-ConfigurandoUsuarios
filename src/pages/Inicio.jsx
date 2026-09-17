import Principal from "../components/Principal";
import Entrar from "../components/Entrar"

export default function Inicio() {
  return <Principal fundo="/fundo.jpg" tamanho="480px">
    <Entrar />
  </Principal>;
}
