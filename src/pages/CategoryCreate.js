
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function CategoryCreate(){

    
    const [name, setName] = useState('');
    
    const postData = (e) => {
        e.preventDefault();
        console.log(name);
        axios.post(`http://127.0.0.1:8000/api/v1/category/store`, {name})
    }

    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                <form>
                    <div className="mb-3">
                        <label className="form-label">name</label>
                        <input type="text" className="form-control" name='name'
                        value={name}
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