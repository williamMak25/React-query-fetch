import axios from "axios"
import { useQuery } from "react-query"


const FetchData = () =>{
    return axios.get('http://localhost:4000/posts')
  }
export const useFetch = (successCall,errorCall) => {
   return useQuery('all-post',
    FetchData,
    {
      //enabled:false,
      onSuccess:successCall,
      onError:errorCall,
      /*select: (data) =>{
        const title = data.data.map( ite => ite.title)
        return title
      }*/
    })
}