import React, { useState } from "react";
import {
  FaBeer,
  FaChevronDown,
  FaChevronUp,
  FaUserCircle,
} from "react-icons/fa";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { CiTimer } from "react-icons/ci";
import { FaReplyAll } from "react-icons/fa";
import AddComment from "./AddComment";
import useUpdateComment from "./useUpdateComment";
import { MdOutlineDeleteSweep } from "react-icons/md";


function NestedComment({ data, setData }) {
  const [showReply, setShowReply] = useState(false);
  const [like, setLiked] = useState(false);
  const [reply, setReply] = useState(false);
  const names = ["Rajesh", "Suresh", "Sachin", "Ayush", "Harsh", "Akash"];
  const { DeleteComment,UpdateLikes } = useUpdateComment(setData);

  const handleReply = () => {
    setReply((prev) => !prev);
  };

  return (
    <div className="bg-black p-2 transition-all duration-300">
      <div
        className={`bg-[rgb(13,13,13)] mt-5 p-2 w-80 `}
        style={{ marginLeft: `${data.level * 20}px` }}
      >
        <div className="flex items-center space-x-2 ">
          {" "}
          <FaUserCircle />
          <span className="text-sm">
            {names[Math.round(Math.random() * (names.length - 1))]}
          </span>
          <span className="flex items-center text-sm text-primary">
            <CiTimer />
            {new Date(data.timestamp).toLocaleDateString()}
          </span>

		  <div className="">
		  <button onClick={()=>DeleteComment(data.id)}><MdOutlineDeleteSweep /></button>

		  </div>
        </div>
        <div className="flex items-center">
          <h1 className="p-2">{data.content}</h1>
        </div>
        <div className="flex space-x-4 text-sm">
          <button
            onClick={() => {
              setLiked((prev) => !prev)
              UpdateLikes(data.id);
            }}
            className="flex items-center  text-primary "
          >
            {like ? <AiFillLike /> : <AiOutlineLike />}
            {data.votes}
          </button>
          <button
            className="flex items-center  text-primary"
            onClick={handleReply}
          >
            <FaReplyAll />
            Reply
          </button>
        </div>
      </div>
      {reply && <AddComment data={data} setData={setData} isShow={reply} setShowReply={setReply} parent={data}/>}
      <button
        style={{ marginLeft: `${data.level * 20}px` }}
        className="flex items-center ml-2 text-sm text-primary"
        onClick={() => setShowReply((prev) => !prev)}
      >
        {showReply ? <FaChevronUp /> : <FaChevronDown />}
        { data.replies?.length}Replies
      </button>
      {data.replies && showReply && (
        <div className="">
          {data.replies.map((item) => (
            <NestedComment data={item} setData={setData}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default NestedComment;
