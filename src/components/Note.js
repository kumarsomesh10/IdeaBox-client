import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
// import { BsFillCheckCircleFill } from "react-icons/bs";

const Note = ({ id, title, content, deleteIdea }) => {
  return (
    <div className="note">
      <h1 className="font-bold">{title} </h1>
      <p>{content} </p>
      <button
        onClick={() => {
          console.log(id);
          deleteIdea(id);
        }}
      >
        <AiFillDelete />
      </button>
      <button>
        <IoMdCreate />
      </button>
    </div>
  );
};

export default Note;
