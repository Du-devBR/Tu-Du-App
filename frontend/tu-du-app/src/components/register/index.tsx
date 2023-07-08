import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IRootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostUser } from "../../redux/reducer/register/action"

export function Register(){

  const dispatch = useDispatch()
  const {error, loading, sucess} = useSelector((store: IRootState) => store.register)
  const [registerData, setRegisterData] = useState<IUserData>({
    name: "",
    lastname: "",
    username: "",
    password: "",
    role: "USER"
  })

  function teste (event: Event) {
    event.preventDefault()
    dispatch<any>(fetchPostUser(registerData))
    console.log(registerData)
  }

  console.log(sucess)

  // useEffect(() => {
  //   if (newUser === null && error !== null) {
  //     // Ocorreu um erro no envio do usuário, faça o que for necessário aqui
  //     console.log("Erro:", error);
  //   }
  // }, [newUser, error]);

  return(
   <div>
     <h2>Registre-se agora mesmo</h2>
     <div>
      {loading && sucess ? <p>Produto cadastrado</p> : loading ? <p>Carregando</p> : <p></p>}
     {error ? <p>Erro ao cadatrar</p> : <p></p>}
    </div>
     <form action="" onSubmit={(event) => teste(event)}>
      <div>
        <input
          type="text"
          // value={registerData.name}
          placeholder="Nome"
          onChange={(event) => setRegisterData({...registerData, name: event.target.value})}
        />
        <input
          type="text"
          // value={registerData.lastname}
          placeholder="Sobrenome"
          onChange={(event) => setRegisterData({...registerData, lastname: event.target.value})}
        />
        <input
          type="text"
          // value={registerData.username}
          placeholder="E-mail"
          onChange={(event) => setRegisterData({...registerData, username: event.target.value})}
        />
        <input
          type="password"
          // value={registerData.password}
          placeholder="Senha"
          onChange={(event) => setRegisterData({...registerData, password: event.target.value})}
        />
        <input
          type="password"
          // value={registerData.password}
          placeholder="Confirme a senha"
          onChange={(event) => setRegisterData({...registerData, password: event.target.value})}
        />
      </div>
      <button type="submit">Cadastrar</button>
      <span>
        Ja possui uma conta?
        <Link to={"/login"}> Ir ao login</Link>
      </span>
     </form>
   </div>

  )
}
