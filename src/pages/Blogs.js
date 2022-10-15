import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Blogs() {


  const onDelete = (id) => {
        axios.post(`http://127.0.0.1:8000/api/v1/blog/${id}/destroy`)
        .then((result) => {

            console.log('success', result)
        })
    }

  const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/blogs`)
            .then((response) => {
                console.log(response.data.data)
                setAPIData(response.data.data);
            })
    }, []);
    console.log(APIData, 'APIData')
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-danger">About</h1>
            <a href="/blog-create" className="btn btn-sm float-end btn-info text-white">Create</a>
            <table className="table table-stript">
              <thead>
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>content</th>
                  <th>Slug</th>
                  <th>Category</th>
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
                                    {data.title}
                                </td>
                                <td>
                                    {data.content}
                                </td>
                                <td>
                                    {data.slug}
                                </td>
                                <td>
                                    {data.category}
                                </td>
                                <td>
                                  <div className="d-grid gap-2 d-md-block row">
                                    <a href={"blog-update/"+data.id} className="btn btn-success">Update </a>
                                     <button className="btn btn-danger text-white" onClick={()=>onDelete(data.id)}>Delete</button>

                                  </div>
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
  );
}
