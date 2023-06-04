import axios from "axios"
import { useQuery } from "react-query"
import '../App.css'

const FetchComment = () => {
    return axios.get('https://jsonplaceholder.typicode.com/comments')
  }

const FetchAlbum = () => {
    return axios.get('https://jsonplaceholder.typicode.com/albums')
}

export const ParallelFetch = ()=>{
   const {data:commet} = useQuery('Comment',FetchComment)
   const {data:album} = useQuery('albums',FetchAlbum)

    return(
        <div className="parallelContainer">
            <div>
                <h1>Comment</h1>
                {commet?.data.map( com => {
                return <p>{com.name}</p>
            })}
            </div>
            <div>
                <h1>Album</h1>
                {album?.data.map( alb => {
                    return <p>{alb.title}</p>
                })}
            </div>
        </div>
    )
}