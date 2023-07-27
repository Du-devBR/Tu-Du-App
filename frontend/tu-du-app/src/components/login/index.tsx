import { ToastContainer } from "react-toastify";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import logo from '../../assets/img/logo.svg'
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { fetchPostLogin } from "../../redux/reducer/login/action";
import { Link, useNavigate } from "react-router-dom";

export function Login(){

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading, sucess, error, data} = useSelector((store: IRootState) => store.login)

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)
  const [loginUser, setLoginUser] = useState<ILoginUser>({
    username: "",
    password: "",
  })

  function submitLoginUser(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    dispatch<any>(fetchPostLogin(loginUser))
  }

  console.log(data);


  useEffect(() => {
    if(sucess) {
      setTimeout(() => {
        navigate("/home")
      }, 2000);
    }
  }, [sucess])

  return(
    <div className=" w-1/2 flex flex-col items-center px-16 justify-center gap-6">
      <div className="flex flex-col items-center">
        <img className=" w-14 mb-4" src={logo} alt="" />
        <h2 className=" text-h1 font-lg font-roboto text-black-800">Olá, seja bem vindo ao TuDu.</h2>
        <p className=" text-h2 font-roboto font-md text-black-800">Gerencie seu tempo criando tarefas.</p>
      </div>
      <div>
        <ToastContainer autoClose={1000}/>
      </div>
      <form className="w-full flex flex-col" action="" onSubmit={submitLoginUser}>
        <div className="flex flex-col gap-4">
          <input
            className={`px-4 py-3 rounded-lg bg-none outline-none border-[1px] text-black-800 font-md font-roboto text-p14 ${error ? "bg-red-100 border-red-1000 placeholder:text-red-1000" : "border-gray-300 placeholder:text-gray-300"} focus:outline-none focus:border-purple-1000 focus:ring-1 focus:ring-purple-100`}
            type="text"
            value={loginUser.username}
            placeholder={`${errorEmail ? "email não cadastrado" : "Email"}`}
            onChange={(event) => setLoginUser({...loginUser, username: event.target.value})}
          />
          <div className="flex flex-col justify-center relative">
            <input
              type={viewPassword ? "text" : "password"}
              value={loginUser.password}
              className={`px-4 py-3 rounded-lg bg-none outline-none border-[1px] text-black-800 font-md font-roboto text-p14 ${error ? "bg-red-100 border-red-1000 placeholder:text-red-1000" : "border-gray-300 placeholder:text-gray-300"} focus:outline-none focus:border-purple-1000 focus:ring-1 focus:ring-purple-100`}
              placeholder={`${errorPassword ? "Senha incorreta" : "Senha"}`}
              onChange={(event) => setLoginUser({...loginUser, password: event.target.value})}
            />
            <div
              className="absolute right-4 cursor-pointer"
              onClick={() => setViewPassword(!viewPassword)}>
              {
                viewPassword ?
                <AiOutlineEye className="text-purple-1000 text-h2" /> :
                <AiOutlineEyeInvisible className="text-purple-1000 text-h2" />
              }
            </div>
          </div>
        </div>
        <button
          className={`w-full py-4 mt-6 rounded-lg border-none bg-purple-1000 text-white font-roboto font-lg text-button uppercase shadow-md  hover:shadow-black-800 duration-500 `}
          type="submit"
            >
              {loading ? "Aguardando" : "Entrar"}
        </button>
        <span className=" text-black-800 font-roboto font-md text-p14 self-center mt-6">
          Não possui uma conta?
          <Link
            className=" text-purple-1000 font-lg"
            to={"/register"}
              > Registre-se aqui.
          </Link>
        </span>
      </form>
    </div>
  )
}
