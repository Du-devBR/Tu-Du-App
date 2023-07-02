import { useEffect, useState } from "react"

import { urlApi } from "./service/api"
import axios from "axios";


export function App() {

  const [teste, setTeste] = useState([])

  // useEffect(() => {


  //   fetch(`http://localhost:8080/api/user`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTeste(data);
  //     });
  // }, []);

  useEffect(() => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYW1pbGFAdGVzdGUuY29tIiwiaXNzIjoidHVkdSIsIm5vbWUiOiJDYW1pbGEiLCJpZCI6MSwic29icmVub21lIjoiQW5hbmlhcyIsImV4cCI6MTY4ODM0OTc3NH0.ljFT-TeiEeTtLKbS3iFmYX_0Q2x1xhYdgM8XodYuE6g';

    axios.get(`${urlApi}/api/users/1/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const data = response.data;
        setTeste(data);
      })
      .catch((error) => {
        // Tratar erros
        console.error(error);
      });
  }, []);


  return (
    <>
    <h1>Hello word</h1>
    {
      teste.map((t) => (
        <span key={t.id}>{JSON.stringify(t.title)}</span>
      ))
    }
    </>
  )
}
