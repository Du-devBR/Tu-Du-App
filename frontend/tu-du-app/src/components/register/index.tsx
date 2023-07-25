import { FormEvent, useEffect, useState } from "react"
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import { IRootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostUser } from "../../redux/reducer/register/action"
import logo from '../../assets/img/logo.svg'
import { usePasswordValidation } from "../../hooks/useValidation";

export function Register(){

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {loading, sucess} = useSelector((store: IRootState) => store.register)
  const [passwordValidation, handlePasswordChange] = usePasswordValidation()
  const [errorName, setErrorName] = useState(false)
  const [errorLastname, setErrorLastname] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [checkPassword, setCheckPassword] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)
  const [openInputPassword, setOpenInputPassword] = useState(false)
  const [registerData, setRegisterData] = useState<IUserData>({
    name: "",
    lastname: "",
    username: "",
    password: "",
    confirmePassword: "",
    role: "USER"
  })

  function submitNewUser (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
      if(!validateInput()){
        dispatch<any>(fetchPostUser(registerData))
        clearInput()
      }
  }

  function clearInput(){
    setRegisterData({
      ...registerData,
        name: "",
        lastname: "",
        username: "",
        password: "",
        confirmePassword: ""
    })
  }

  function validateInput(){
    const {name, lastname, username, password, confirmePassword} = registerData
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if(password !== confirmePassword) {
      setCheckPassword(true)
      return true
    }
    if(name === '' || lastname === '' || username === '' || password === '' || confirmePassword === ""){

      if(name === ""){
        setErrorName(true)
      }
      if(lastname === ""){
        setErrorLastname(true)
      }
      if(username === ""){
        setErrorEmail(true)
      }
      if(!passwordRegex.test(password)){
        setErrorPassword(true)
      }
      if(!passwordRegex.test(confirmePassword)){
        setCheckPassword(true)
      }else{
        setCheckPassword(false)
      }
      return true
    }

    setErrorName(false)
    setErrorLastname(false)
    setErrorEmail(false)
    setErrorPassword(false)
    setCheckPassword(false)
    return false
  }

  useEffect(() => {
    if(sucess){
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    }
  }, [sucess])

  return(
    <div className=" w-1/2 flex flex-col items-center px-16 justify-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <img className=" w-14" src={logo} alt="" />
        <h2 className=" text-h1 font-lg font-roboto text-black-800">Registre-se agora mesmo</h2>
      </div>
      <div>
        <ToastContainer autoClose={1000}/>
      </div>
      <form className="w-full flex flex-col" action="" onSubmit={submitNewUser}>
        <div className="flex flex-col gap-4">
          <input
            className={`px-4 py-3 rounded-lg bg-none outline-none border-[1px] text-black-800 font-md font-roboto text-p14 ${errorName ? "bg-red-100 border-red-1000 placeholder:text-red-1000" : "border-gray-300 placeholder:text-gray-300"} focus:outline-none focus:border-purple-1000 focus:ring-1 focus:ring-purple-100`}
            type="text"
            value={registerData.name}
            placeholder={`${errorName ? "Por favor, preencha seu nome." : "Nome"}`}
            onChange={(event) => setRegisterData({...registerData, name: event.target.value})}
          />
          <input
            type="text"
            value={registerData.lastname}
            className={`px-4 py-3 rounded-lg bg-none outline-none border-[1px] text-black-800 font-md font-roboto text-p14 ${errorLastname ? "bg-red-100 border-red-1000 placeholder:text-red-1000" : "border-gray-300 placeholder:text-gray-300"} focus:outline-none focus:border-purple-1000 focus:ring-1 focus:ring-purple-100`}
            placeholder={`${errorLastname ? "Por favor, preencha seu sobrenome." : "Sobrenome"}`}
            onChange={(event) => setRegisterData({...registerData, lastname: event.target.value})}
          />
          <input
            type="text"
            value={registerData.username}
            className={`px-4 py-3 rounded-lg bg-none outline-none border-[1px] text-black-800 font-md font-roboto text-p14 ${errorEmail ? "bg-red-100 border-red-1000 placeholder:text-red-1000" : "border-gray-300 placeholder:text-gray-300"} focus:outline-none focus:border-purple-1000 focus:ring-1 focus:ring-purple-100`}
            placeholder={`${errorEmail ? "E-mail invalido" : "E-mail"}`}
            onChange={(event) => setRegisterData({...registerData, username: event.target.value})}
          />
          <div className="flex flex-col duration-700">
            <div className="flex flex-col justify-center relative">
              <input
                type={viewPassword ? "text" : "password"}
                value={registerData.password}
                className={`px-4 py-3 rounded-lg bg-none outline-none border-[1px] text-black-800 font-md font-roboto text-p14 ${errorPassword ? "bg-red-100 border-red-1000 placeholder:text-red-1000" : "border-gray-300 placeholder:text-gray-300"} focus:outline-none focus:border-purple-1000 focus:ring-1 focus:ring-purple-100`}
                placeholder="Senha"
                onChange={(event) => {
                  setRegisterData({...registerData, password: event.target.value})
                  handlePasswordChange(event)
                  setErrorPassword(registerData.password.length > 1 ? false : true)
                }}
                onClick={() => setOpenInputPassword(!openInputPassword)}
              />
              <div
                className=" absolute right-4 cursor-pointer"
                onClick={() => setViewPassword(!viewPassword)}
                >
                  {
                    viewPassword ?
                    <AiOutlineEye className=" text-purple-1000 text-h2" /> :
                    <AiOutlineEyeInvisible className="text-purple-1000 text-h2" />
                  }
              </div>
            </div>
            {
              openInputPassword && (
                <div className= "flex flex-col p-2 gap-1">
                  <span
                    className={passwordValidation.lenght ? " font-roboto text-green-1000 font-md text-h3" : " font-roboto text-purple-1000 font-md text-h3"}
                    >Pelo menos 8 caracteres
                  </span>
                  <span
                    className={passwordValidation.upperCase ? " font-roboto text-green-1000 font-md text-h3" : " font-roboto text-purple-1000 font-md text-h3"}
                    >Pelo menos 1 letra maiscula
                  </span>
                  <span
                    className={passwordValidation.lowerCase ? " font-roboto text-green-1000 font-md text-h3" : " font-roboto text-purple-1000 font-md text-h3"}
                    >Pelo menos 1 letra minuscula
                  </span>
                  <span
                    className={passwordValidation.number ? " font-roboto text-green-1000 font-md text-h3" : " font-roboto text-purple-1000 font-md text-h3"}
                    >Pelo menos 1 numero
                  </span>
                  <span
                    className={passwordValidation.specialChar ? " font-roboto text-green-1000 font-md text-h3" : " font-roboto text-purple-1000 font-md text-h3"}
                    >Pelo menos 1 caracter especial(._-*@)
                  </span>
                </div>
              )
            }
          </div>
          <input
            type="password"
            value={registerData.confirmePassword}
            className={`px-4 py-3 rounded-lg bg-none outline-none border-[1px] text-black-800 font-md font-roboto text-p14 ${checkPassword ? "bg-red-100 border-red-1000 placeholder:text-red-1000" : "border-gray-300 placeholder:text-gray-300"} focus:outline-none focus:border-purple-1000 focus:ring-1 focus:ring-purple-100`}
            placeholder={`${checkPassword ? "Senha precisa ser igual" : "Confirme a senha"}`}
            onChange={(event) => {
              setRegisterData({...registerData, confirmePassword: event.target.value})
              setCheckPassword(registerData.confirmePassword.length > 1 ? false : true)
            }}
          />
        </div>
        <button
          className={`w-full py-4 mt-6 rounded-lg border-none bg-purple-1000 text-white font-roboto font-lg text-button uppercase shadow-md  hover:shadow-black-800 duration-500 ${loading ? "animate-pulse" : ''} disabled:bg-gray-300`}
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
