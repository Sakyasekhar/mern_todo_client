import React, { useState } from "react";
import axios from 'axios';



function Newblog() {

    const [blog, setBlog] = useState({
        title: '',
        author: ''
    });


    const onSubmit = (e)=> {
        e.preventDefault();
    
        const blog = {
          title: e.title,
          author: e.author

        }
    
        console.log(blog);
    
        axios.post('http://localhost:3000/create', blog)
          .then(res => console.log(res.data));
    
        window.location = '/';
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setBlog(prevState => ({
          ...prevState,
          [name]: value
        }))
      };
    
        return(
            <div className='create-blog'>
                <h2>Add a new blog</h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor='Blog title'>Blog title</label><br/>
                    <input 
                    type="text" 
                    name="title"
                    id="title" 
                    value={blog.title}
                    onChange={handleChange} 
                    required/>
                    {/* <label for="body">Blog  discription</label>
                   <textarea id="body" name="body" required></textarea> */}
                   <label htmlFor='Blog author'>Blog  author</label>
                   <select name="author" id="body" value={blog.author} onChange={handleChange}> 
                     <option value="mario">mario</option>
                     <option value="yoshi">yoshi</option>
                   </select>
                   <button>Add</button>

                </form>
            
            </div>
        );
} 

export default Newblog;