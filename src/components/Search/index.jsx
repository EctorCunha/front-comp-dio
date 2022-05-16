import { useState } from 'react'
import { InputButton, SearchStyled} from './search'


export function Search({handleSearch, getRepos}) {
  const [search, setSearch] = useState("")

  function funcoes(){
    handleSearch(search),
    getRepos(search)
  }
  

  return (
    <div>
        <SearchStyled
         id='search' 
         type="text" 
         placeholder='Digite o username para pesquisa...'
         onChange={(e)=> setSearch(e.target.value)}
         ></SearchStyled>
        <InputButton type="submit"
         onClick={()=>funcoes(search)}
         >
         </InputButton>
    </div>
  )
}
