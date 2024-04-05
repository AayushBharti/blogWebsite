import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {

    //step-3 -- consuming the context
    const {loading,posts} = useContext(AppContext)

  return (
    <div>

    {
        loading?
            
        (<Spinner/>):
        (
            posts.length === 0 ? 
            (
                <div>No Post Found</div>
            ):
            (
                posts.map((posts)=>(<BlogDetails/>))
            )
        

        )
    }

    </div>
  )
}

export default Blogs