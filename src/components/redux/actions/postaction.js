import axios from "axios"



export function submit(values) {
    console.log(values)
        axios.post('http://127.0.0.1:3010/api/users', {values})
        alert("User added")
      }
