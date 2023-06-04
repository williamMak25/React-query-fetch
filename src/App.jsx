import './App.css'
import {ReactQueryDevtools} from 'react-query/devtools'
import { useQuery,QueryClientProvider,QueryClient } from 'react-query'
import { Data } from './componet/data'
import { NavLink, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { PostDeatail } from './componet/PostDeatail'
import { ParallelFetch } from './componet/ParallelFetch'
import { PaginationData } from './componet/paginationData'
import { Mutation } from './componet/mutation'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <nav className='navBar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/data'>Data fetching with useQuery</NavLink>
        <NavLink to='/pagi'>Pagination and Infinate Query</NavLink>
        <NavLink to='/parallel'>ParallelFetch</NavLink>
        <NavLink to='mutation'>Mutation/PostRequest</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pagi' element={<PaginationData/>}/>
        <Route path='/parallel' element={<ParallelFetch/>}/>
        <Route path='/mutation' element={<Mutation/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/data/:id' element={<PostDeatail/>}/>
      </Routes>
      <ReactQueryDevtools/>
    </QueryClientProvider>
   
  )
}

export default App
