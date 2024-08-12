import React from 'react'

function AddComment() {
  return (
	<div className="flex justify-around Addcomment">
	<div>
		<input type="text" placeholder="Enter your Comment" />
		<button>Add Comment</button>
	</div>
	<div>Sort By&nbsp; 
		<select>
			<option value="Most Liked">Most Liked</option>
			<option value="Most Liked">Most Replied</option>
			<option value="Most Liked">Newest</option>
			<option value="Most Liked">Oldest</option>
		</select>
	
		</div>
		</div>
  )
}

export default AddComment