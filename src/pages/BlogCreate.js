
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function BlogCreate(){

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/categories`)
            .then((response) => {
                console.log(response.data.data)
                setAPIData(response.data.data);
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
        axios.post(`http://127.0.0.1:8000/api/v1/blog/store`, {title, content, category_id})
    }
    console.log(APIData, 'APIData')
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" name='title'
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label">content</label>
                        <textarea className='form-control' name='content'
                        onChange={(e) => setContent(e.target.value)}
                        ></textarea>                        
                    </div>                    
                    <div className="mb-3">
                        <label className="form-label">categories</label>
                        <select className='form-control' name='category_id'
                        onChange={(e) => setCategory_id(e.target.value)}>
                            <option>Select one</option>
                            {APIData.map((data) => {
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