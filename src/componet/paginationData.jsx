    import axios from 'axios'
    import React, { Fragment, useState } from 'react'
    import { useInfiniteQuery, useQuery } from 'react-query'
    import '../App.css'

    const Pagi = (page) =>{
        return axios.get(`http://localhost:4000/users?_limit=2&_page=${page}`)
    }
    const Infinate = ({pageParams}) =>{
        return axios.get(`http://localhost:4000/users?_limit=2&_page=${pageParams}`)
    }

    export const PaginationData = () => {
        const [page,setpage] = useState(1);

        const {data:infi,hasNextPage,fetchNextPage} = useInfiniteQuery(["All-user"],({pageParam = 1})=>Infinate({pageParams:pageParam}),{
            getNextPageParam: (_lastPage,pages) => {
                if(pages.length < 5){
                    return pages.length + 1
                }else{
                    return undefined
                }
            }
        })

        const {data,isLoading,} = useQuery(["user",page],()=>Pagi(page))
        if(isLoading){
            return <div>Loading....</div>
        }
    return (
        <div className='pageandloadContainer'>
            
            <div>
                <h1>Pagination</h1>
                <div className='pagiWrapper'>
                {data?.data.map( user =>{
                    return(
                        <div style={{margin:'10px',border:'2px solid black',borderRadius:'5px',padding:'10px'}}>
                            <p>User-name : {user?.username}</p>
                            <p>Name : {user?.name}</p>
                            <p>Email : {user?.email}</p>
                        </div>
                    )
                })}
                </div>
                <button disabled={page === 1} onClick={()=>setpage( pre => pre - 1)}>Previous</button>
                <span>PageNum  - {page}</span>
                <button disabled={page === 5} onClick={()=>setpage( pre => pre + 1)}>Next </button>
            </div>
            
            <div className='infiWrapper'>
                <h1>Infinate</h1>
                <div className="names">
                {infi?.pages.map( (group,i) => {
                return(
                    <Fragment key={i} >
                        {
                            group?.data.map(ite=>{
                            return <p>{ite.id} - {ite.name}</p>
                            })
                        }
                    </Fragment>
                )
                })}
                </div>
                <button onClick={fetchNextPage} disabled={!hasNextPage}>Load more</button>
            </div>
               
        </div>
    )
    }
