import { useState } from 'react';
import { Search } from './components/Search'
import { Profile } from './components/Profile'
import { Cards } from './components/Cards'
import { api } from "./services/api";

function App() {

  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);



  function handleSearch(search){
    api.get(`/users/${search}`)
    .then((res) => {
      setUser(res.data)
    })
  }

  function getRepos(search){
    api.get(`/users/${search}/repos`)
    .then((res) => {
      setRepositories(res.data);
    });
  }

  

  return (
    <>
      <Search handleSearch={handleSearch} getRepos={getRepos}/>
      <Profile user={user}/>
      <Cards repositories={repositories}/>
    </>
  )
}

export default App