
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


export default function BlogUpdate(){

   let { id } = useParams();
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/categories`)
            .then((response) => {
                console.log(response.data.data)
                setCategoryData(response.data.data);
            })
    }, []);
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/blog/`+id)
            .then((response) => {
                console.log(response.data.data)
                setBlogData(response.data.data);
                setTitle(response.data.data.title)
                setContent(response.data.data.content)
                setCategory_id(response.data.data.category_id)
            })
    }, []);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category_id, setCategory_id] = useState('');
    const postData = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(content);
        console.log(category_id);
        axios.post(`http://127.0.0.1:8000/api/v1/blog/${id}/update`, {title, content, category_id})
    }
    // console.log(APIData, 'APIData')
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label">content</label>
                        <textarea className='form-control' name='content' value={content}
                        onChange={(e) => setContent(e.target.value)}
                        ></textarea>                        
                    </div>                    
                    <div className="mb-3">
                        <label className="form-label">categories</label>
                        <select className='form-control' name='category_id' value={category_id}
                        onChange={(e) => setCategory_id(e.target.value)}>
                            <option>Select one</option>
                            {categoryData.map((data) => {
                                return (
                                    <option value={data.id}>{data.name}</option>  
                                )
                            })}
                        </select>
                    </div>                    

                    <button type="submit"  onClick={postData} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}