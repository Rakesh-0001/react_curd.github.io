import axios from 'axios'
import React, { useEffect, useState } from 'react'
import x from "./style.module.css"
import { Link } from 'react-router-dom'

const Users = () => {
    let [data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users").then((e)=>{
         setData(e.data)
        })
    })

    let deleteData=(e)=>{
        axios.delete(`http://localhost:3000/users/${e}`)


    }
  return (
    <div className={x.box}>
        {
            data.map((e)=>{

                return(
                    <div>
                       <table>
                        <tr>
                            <th>{e.id}</th>
                            <th>Id</th>
                        </tr>
                        <tr>
                            <td>NAME :</td>
                            <td>{e.name}</td>
                        </tr>
                        <tr>
                            <td>COMPNAY :</td>
                            <td>{e.comp}</td>
                        </tr>
                        <tr>
                            <td>SALARY :</td>
                            <td>{e.sal}</td>
                        </tr>
                        <tr>
                            <td><Link to={`/edit/${e.id}`}><button>EDIT</button></Link></td>
                            <td><Link><button onClick={()=>{deleteData(e.id)}}>DELETE</button></Link></td>
                        </tr>

                       </table>
                    </div>
                )

            })
        }
    </div>
  )
}

export default Users