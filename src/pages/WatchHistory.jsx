import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { deleteAHistory, getAllHistory } from '../services/allAPI'

function WatchHistory() {
  const [history , setHistory] = useState([])

  const WatchAllHistory=async()=>{
    const {data}=await getAllHistory()
    //console.log(data);
    setHistory(data)
  }
  console.log(history);

  //function to remove a particular history
  const removeAHistory=async (id)=>{
    await deleteAHistory(id)
    //to get the remaining history
    WatchAllHistory()
  }

  useEffect(()=>{
    WatchAllHistory()
  },[])

  return (
    <>

    <div className='container mt-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'}className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i> Back to Home</Link>
    </div>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
        <th>#</th>
        <th>caption</th>
        <th>URL</th>
        <th>Time stamp</th>
        <th>Action</th>
        </tr>
      </thead>
    <tbody>
      {history?.length>0?
      history.map((item,index)=>(
      <tr>
        <td>{index+1}</td>
        <td>{item.caption}</td>
        <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
        <td>{item.timestamp}</td>
        <td><button onClick={()=>removeAHistory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
      </tr>))
      :
      <p className='fw-bolder fs-5 text-danger m-4'>nothing to display</p>
      }
    </tbody>
    </table>
    
    </>
  )
}

export default WatchHistory