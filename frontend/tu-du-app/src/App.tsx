import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/login";
import { Forms } from "./pages/forms";
import { Register } from "./components/register";
import { useEffect, useState } from "react";
import { Home } from "./pages/home";



export function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  const checkToken = () => {
    const token = localStorage.getItem("token")

    setIsAuth(!!token)
    setIsTokenChecked(true)
  }

  useEffect(() => {
    checkToken()
  }, [])

  if(!isTokenChecked){
    return null
  }
  console.log(isAuth)

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? (<Navigate to="/home" />) : (<Navigate to="/login" />)}>
        </Route>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Forms />}>
          <Route path="/login" element={isAuth ? (<Navigate to="/home" />) : (<Login />)}/>
          <Route path="/register" element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
