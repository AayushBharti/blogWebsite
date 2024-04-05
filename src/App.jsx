import "./App.css";
import Blogs from './components/Blogs'
import Header from './components/Header'
import Pagination from './components/Pagination'


// const url = codehelp-apis.vercel.app/api/get-blogs?page=6

function App() {


  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
