import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Forms } from "./pages/forms";
import { Register } from "./components/register";



export function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forms />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
