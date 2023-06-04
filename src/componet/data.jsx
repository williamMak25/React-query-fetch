import axios from 'axios'
import React from 'react'
import { useFetch } from '../hook/useFetch'
import { NavLink } from 'react-router-dom'
import '../App.css'



export const Data = () => {

  // success and erroe callback function

  const successCall = () =>{
      console.log("your data fetching is successfully fetched")
    }

    const errorCall = () => {
      console.log("your data fetching is failed")
    }

  const {data,isLoading,isError,error,isFetching ,refetch} = useFetch(successCall,errorCall);

      if(isLoading){
        return <div>Loading</div>
      }
      if(isError){
        return <div>{error.message}</div>
      }

        return (
            <div className='postContainer'>
              <h1>Post title</h1>
               {
                data?.data.map( ite => {
                    return <NavLink to={`/data/${ite.id}`}>
                            <p>{ite.id} - {ite.title}</p>
                          </NavLink>
                })
               }
              
              {/*data?.map( titles => {
                return <p>{titles}</p>
              })}
              <button onClick={refetch}>Fetch Data</button>*/}
            </div>
        )
}
