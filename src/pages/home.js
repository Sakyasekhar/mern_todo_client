import React from 'react';
import { useState,useEffect } from 'react';
import Bloglist from '../Bloglist';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);
   
    
    // const handleDelete = (id) =>{
    //         const newblogs = blogs.filter(b => b.id !== id);
    //         setBlogs(newblogs);
    // } 
    
    

  

    return (
        <div className="home"> 
        {/* {isPending && <div>Loading...</div>} */}
        <Bloglist Blogs = {blogs} title="All Blogs" />
          {/* <Bloglist Blogs = {blogs.filter((blog)=>blog.author === 'mario' )} title="Mario's Blogs"/> */}
        </div>
    );    
}
 
export default Home;