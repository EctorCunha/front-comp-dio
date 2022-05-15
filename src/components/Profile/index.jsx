import { Container, Button, Imagem, Infos } from "./profile";
import { Search } from '../Search'
import { useState } from "react";

export function Profile() {

  const [search, setSearch] = useState("")
  const [user, setUser] = useState("");
  const [name, setName] = useState("")
  // const [login, setLogin] = useState("")
  // const [company, setCompany] = useState("")


  function handleSearch(){
    api.get(`/users/${search}`)
    .then((res) => {
      // console.log(res.data)
      setSearch(res.data)
      // setLogin(res.data.login)
      // setCompany(res.data.company)
    })
  }


  return (
    
    <Container onChange={() => handleSearch()}>
      <Imagem src={user?.avatar_url} alt="Foto de perfil do github" />
      <Infos>
        <h1>{user?.name}</h1>
        <p>Username:{user?.login}</p>
        <p>Company:{user?.company}</p>
        <p>Location:{user?.location}</p>
        <p>Blog:{user?.blog}</p>
        <span>Followers: {user?.followers}</span>
        <span>Following: {user?.following}</span>
        <span>Gists: {user?.public_gists}</span>
        <span>Repos: {user?.public_repos}</span>
      </Infos>

      <div>
        <Button>Repositories</Button>
        <Button>Starred</Button>
      </div>
    </Container>
    
  );
}
