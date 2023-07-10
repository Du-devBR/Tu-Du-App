import { useState } from "react"
import { Link } from "react-router-dom"
import { IRootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostUser } from "../../redux/reducer/register/action"
import logo from '../../assets/img/logo.svg'

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
  }


  return(
    <div className=" w-1/2 flex flex-col items-center px-16 justify-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <img className=" w-14" src={logo} alt="" />
        <h2 className=" text-h1 font-lg font-roboto text-black-800">Registre-se agora mesmo</h2>
      </div>
      {/* <div>
        {loading && sucess ? <p>Produto cadastrado</p> : loading ? <p>Carregando</p> : <p></p>}
        {error ? <p>Erro ao cadatrar</p> : <p></p>}
      </div> */}
      <form className="w-full flex flex-col" action="" onSubmit={(event) => teste(event)}>
        <div className="flex flex-col gap-4">
          <input
            className="px-4 py-3 rounded-lg bg-none outline-none border-[1px] border-gray-300 text-black-800 font-md font-roboto text-p14 placeholder:text-gray-300"
            type="text"
            placeholder="Nome"
            onChange={(event) => setRegisterData({...registerData, name: event.target.value})}
          />
          <input
            type="text"
            className="px-4 py-3 rounded-lg bg-none outline-none border-[1px] border-gray-300 text-black-800 font-md font-roboto text-p14 placeholder:text-gray-300"
            placeholder="Sobrenome"
            onChange={(event) => setRegisterData({...registerData, lastname: event.target.value})}
          />
          <input
            type="text"
            className="px-4 py-3 rounded-lg bg-none outline-none border-[1px] border-gray-300 text-black-800 font-md font-roboto text-p14 placeholder:text-gray-300"
            placeholder="E-mail"
            onChange={(event) => setRegisterData({...registerData, username: event.target.value})}
          />
          <input
            type="password"
            className="px-4 py-3 rounded-lg bg-none outline-none border-[1px] border-gray-300 text-black-800 font-md font-roboto text-p14 placeholder:text-gray-300"
            placeholder="Senha"
            onChange={(event) => setRegisterData({...registerData, password: event.target.value})}
          />
          <input
            type="password"
            className="px-4 py-3 rounded-lg bg-none outline-none border-[1px] border-gray-300 text-black-800 font-md font-roboto text-p14 placeholder:text-gray-300"
            placeholder="Confirme a senha"
            onChange={(event) => setRegisterData({...registerData, password: event.target.value})}
          />
        </div>
        <button
          className={`w-full py-4 mt-6 rounded-lg border-none bg-purple-1000 text-white font-roboto font-lg text-button uppercase shadow-md  hover:shadow-black-800 duration-500 ${loading ? "animate-pulse" : ''}`}
          type="submit"
            >
              {loading ? "Cadastrando" : "Cadastrar"}
        </button>
        <span className=" text-black-800 font-roboto font-md text-p14 self-center mt-6">
          Ja possui uma conta?
          <Link
            className=" text-purple-1000 font-lg"
            to={"/login"}
              > Ir ao login
          </Link>
        </span>
      </form>
    </div>

  )
}
