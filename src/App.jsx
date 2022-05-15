import { Cards } from './components/Cards'
import { Profile } from './components/Profile'
import { Search } from './components/Search'

function App() {

  // const [search, setSearch] = useState("")
  // const [user, setUser] = useState("");
  // const [name, setName] = useState("")
  // // const [login, setLogin] = useState("")
  // // const [company, setCompany] = useState("")


  // function handleSearch(props){
  //   api.get(`/users/${search}`)
  //   .then((res) => {
  //     console.log(res.data)
  //     setName(res.name)
  //     // setLogin(res.data.login)
  //     // setCompany(res.data.company)
  //   })
  // }

  return (
    <>
      <Search/>
      <Profile/>
      <Cards/>
    </>
  )
}

export default App