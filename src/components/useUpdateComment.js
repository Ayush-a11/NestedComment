import React from 'react'

function useUpdateComment(setData) {


  const AddReplyComment =()=>{
      
  }	
 
  const DeleteComment   =(id)=>{

	setData((prev)=>{
		function recursiveTraverse(data){

			if(data){
				
				data.filter((item)=>{
					if(item.id===id){
						return null;
					}
					else if(item.replies.length){
						recursiveTraverse(item);
					}
					else{
						return item;
					}
				})
			}
			}
		recursiveTraverse(prev);
	})

  }
  
  const UpdateComment   =()=>{

  }


  return {AddReplyComment, DeleteComment, UpdateComment}
}

export default useUpdateComment