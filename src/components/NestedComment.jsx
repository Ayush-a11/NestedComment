import React, { useState } from 'react'
import { FaBeer } from "react-icons/fa";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { CiTimer } from "react-icons/ci";
import { FaReplyAll } from "react-icons/fa";



function NestedComment({data}) {
	const[showReply,setShowReply]=useState(false);
	const[like,setLiked] =useState(false);
  return (
	<div className="bg-black p-2 transition-all duration-300">
	<div className={`bg-[rgb(13,13,13)] mt-5 p-2 w-80 `} style={{marginLeft:`${data.level*20}px`}}>
		<div className="flex">
		{data.content}
		</div>
		<div className="flex justify-between"> 
	<button  onClick={()=>setLiked((prev)=>!prev)}className='flex items-center  text-blue-400'>
		{like?<AiFillLike />:
<AiOutlineLike />}{data.votes}</button>
			<button className='flex items-center  text-blue-400'onClick={()=>setShowReply((prev)=>!prev)} ><FaReplyAll />{data.replies.length}Replies</button>			
			<button className='flex items-center text-blue-400'><CiTimer/>{new Date(data.timestamp).toLocaleDateString()}</button>
		</div>
		
	</div>
	{data.replies && showReply &&
			<div className="">
			{
			 data.replies.map((item)=>(
				<NestedComment data={item}/>
			))}
			</div>}
	</div>
	
  )
}

export default NestedComment