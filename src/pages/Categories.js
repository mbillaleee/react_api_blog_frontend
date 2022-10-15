import axios from "axios";
import React, { useEffect, useState } from "react";


export default function Categories(){

 const onDelete = (id) => {
        axios.post(`http://127.0.0.1:8000/api/v1/category/${id}/destroy`)
        .then((result) => {

            console.log('success', result)
        })
    }


	const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/categories`)
            .then((response) => {
                console.log(response.data.data)
                setAPIData(response.data.data);
            })
    }, []);
    console.log(APIData, 'APIData')

	return(
		<>

		<div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-danger">Category Data</h1>
            <a href="/category-create" className="btn btn-sm float-end btn-info text-white">Create</a>
            <table className="table table-stript">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {APIData.map((data) => {
                        return (
                            <tr>
                                <td>
                                    {data.id}
                                </td>
                                <td>
                                    {data.name}
                                </td>
                                <td>
                                    {data.slug}
                                </td>
                                <td>
                                	<a href={"category-update/"+data.id} className="btn btn-sm btn-success">Update </a>
                                	   <button className="btn btn-danger text-white" onClick={()=>onDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                       )
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>


		</>
		)
}