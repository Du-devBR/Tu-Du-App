import { Outlet } from "react-router-dom";
import banner from '../../assets/img/banner.svg'

export function Forms(){
  return(
    <div className="flex h-screen">
      <div className=" w-1/2">
        <img
          className=" w-full h-full object-cover"
          src={banner}
          alt=""
        />
      </div>
      <Outlet />
    </div>
  )
}
