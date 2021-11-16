// import SearchBar from "../components/SearchBar"
import Todos from "../components/Todos"

const HomePage = () => {
  // const search = payload => {
  //   console.log(payload)
  // }

  return (
    <div className="py-8 px-4">
      {/* <SearchBar placeholder="Search Todo" onClick={search} /> */}
      <Todos className="flex" />
    </div>
  )
}

export default HomePage
