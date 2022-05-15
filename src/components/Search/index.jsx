import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { InputButton, SearchStyled} from './search'


export function Search() {

  const [search, setSearch] = useState("")

  return (
    <div>
        <SearchStyled
         id='search' 
         type="text" 
         placeholder='Digite o username para pesquisa...'
         /* onChange={(e)=> setSearch(e.target.value)} */
         ></SearchStyled>
        <InputButton type="submit" /* onClick={()=>setSearch()} */></InputButton>
    </div>
  )
}
