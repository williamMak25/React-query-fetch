import React from 'react'
import { useParams } from 'react-router-dom'
import { useDetail } from '../hook/useDetail'
import '../App.css'

export const PostDeatail = () => {
    const {id} = useParams()
    const {data,isLoading,isError,error} = useDetail(id);
if(isLoading){
    return <div>Loading...</div>
}
if(isError){
    return <div>{error.message}</div>
}

  return (
    <div className='postDetailContainer'>
        <h1>{data?.data.title}</h1>
        <p>{data?.data.body}</p>
        <h4>Dynamic Query</h4>
    </div>

  )
}
