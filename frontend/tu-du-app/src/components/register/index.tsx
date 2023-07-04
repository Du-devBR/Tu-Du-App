import { useState } from "react"
import { Link } from "react-router-dom"

export function Register(){

  const [registerData, serRegisterData] = useState<IUserData>({
    name: "",
    lastname: "",
    username: "",
    password: "",
    role: "USER"
  })
  return(
   <div>
     <h2>Registre-se agora mesmo</h2>
     <form action="">
      <div>
        <input
          type="text"
          placeholder="Nome"
        />
        <input
          type="text"
          placeholder="Sobrenome"
        />
        <input
          type="text"
          placeholder="E-mail"
        />
        <input
          type="password"
          placeholder="Senha"
        />
        <input
          type="password"
          placeholder="Confirme a senha"
        />
      </div>
      <button>Cadastrar</button>
      <span>
        Ja possui uma conta?
        <Link to={"/login"}> Ir ao login</Link>
      </span>
     </form>
   </div>

  )
}
