
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


export default function CategoryUpdate(){

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
        axios.get(`http://127.0.0.1:8000/api/v1/category/`+id)
            .then((response) => {
                console.log(response.data.data)
                setBlogData(response.data.data);
                setName(response.data.data.name)
            })
    }, []);
    const [name, setName] = useState('');
    const postData = (e) => {
        e.preventDefault();
        console.log(name);
        axios.post(`http://127.0.0.1:8000/api/v1/category/${id}/update`, {name})
    }
    // console.log(APIData, 'APIData')
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button type="submit"  onClick={postData} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}