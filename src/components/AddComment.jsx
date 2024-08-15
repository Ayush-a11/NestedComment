import React, { useState } from 'react'
import { FiSend } from "react-icons/fi";
import useUpdateComment from './useUpdateComment';


function AddComment({data,setData,isShow=true,setShowReply,parent}) {
	
	const [comment,setComment]= useState("");

	const {AddReplyComment} =useUpdateComment(setData)

	const handleAddComment =()=>{
		if(comment){

			const newData={"id": Date.now(),
							"content": comment,
							"votes": 0,
							"timestamp":new Date().getDate(),
							"level":(parent?.level)+1||0,
							"replies": []}
			if(isShow)
			setData((prev)=>[...prev,newData]);
			else{
			AddReplyComment(parent.id,newData);
			setShowReply((prev)=>!prev);
			}
		}
	}
  return (
	<div className=" Addcomment">
	<div className="flex">
		<input type="text" placeholder="Enter your Comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
		<button className="flex items-center space-x-2" onClick={handleAddComment} >Add&nbsp;<FiSend /></button>
	</div>
	{isShow &&
	<div className="flex m-2">Sort By&nbsp; 
		<select className='bg-secondary border-2 rounded-lg border-primary'>
			<option value="Most Liked">Most Liked</option>
			<option value="Most Liked">Most Replied</option>
			<option value="Most Liked">Newest</option>
			<option value="Most Liked">Oldest</option>
		</select>
	
		</div>
	}
		</div>
  )
}

export default AddComment