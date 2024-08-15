import React from 'react'

function useUpdateComment(setData) {


  const AddReplyComment =(parentId,Comment)=>{
	setData((prev)=>{
		function recursiveTraverse(data){
			return data.map((item)=>{
				console.log(item)
					if(item.id===parentId){
						return {...item,replies:[...item.replies,Comment]};
					}
					else if(item.replies.length>0){
						return {...item,replies: recursiveTraverse(item.replies)};
					}
					else{
						return item;
					}
				})
			}
		const finalData= recursiveTraverse(prev);
		return finalData;
	});
      
  }	
 
  const DeleteComment=(id)=>{
	setData((prev)=>{
		function recursiveTraverse(data){
			return data.reduce((acc,item)=>{
					if(item.id === id){
						return acc
					}
					else if(item.replies.length>0){
						return [...acc,{...item,replies: recursiveTraverse(item.replies)}];
					}
				
					return [...acc,item];
				
				},[])
			}
		const finalData= recursiveTraverse(prev);
		console.log(finalData)
		return finalData;
	})


  }
  
  const UpdateComment   =()=>{
	

  }

  const UpdateLikes =(id)=>{
	setData((prev)=>{
		function recursiveTraverse(data){
			return data.map((item)=>{
				console.log(item)
					if(item.id===id){
						return {...item,votes:item.votes+1};
					}
					else if(item.replies.length>0){
						return {...item,replies: recursiveTraverse(item.replies)};
					}
					else{
						return item;
					}
				})
			}
		const finalData= recursiveTraverse(prev);
		return finalData;
	});
  }


  return {AddReplyComment, DeleteComment, UpdateComment,UpdateLikes}
}

export default useUpdateComment