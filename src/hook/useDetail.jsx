import axios from "axios"
import { useQuery } from "react-query"

const detailFetch = ({queryKey}) =>{
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/posts/${heroId}`)
}

export const useDetail = (heroId) =>{
    return useQuery(['all-post', heroId],detailFetch)
}