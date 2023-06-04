import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useFetch } from '../hook/useFetch'
import '../App.css'

const addPost = (post) => {
    return axios.post("http://localhost:4000/posts",post)
}

export const Mutation = () => {
    const [data,setData] = useState({
        title: "",
        body: "",
        userId:1
    })

    const {mutate:addpostdata} = useMutation(addPost)

    const {data:fetchData} = useFetch()


const handleChange = (e) => {
    const {name,value} = e.target;
    setData( pre =>({
        ...pre,
        [name]:value
    }))
}
const handleClick = () =>{
    addpostdata(data)
}
  return (
    <div className='mutationContainer'>
    <div className='postaddContainer'>
        <h2>Creat Post</h2>
        <label>Title</label>
        <input type='text' name="title" onChange={handleChange}/>
        <label>Body</label>
        <input type='text' name='body' onChange={handleChange}/>
        <button onClick={handleClick}>ADD</button>
    </div>
    <div className='fetchWrapper'>
        <h1>Post Title</h1>
        {fetchData?.data?.map( ite => {
            return(
                <p>{ite?.id} . {ite?.title}</p>
            )
        })}
    </div>
    </div>
  )
}
