import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const InputNotes = ({ addIdea }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");

  function handleTitleChange(event) {
    setMessage("");
    setTitle(event.target.value);
  }
  function handleContentChange(event) {
    setMessage("");
    setContent(event.target.value);
  }

  function handleExpand() {
    setIsExpanded(true);
  }

  function handleChange() {
    if (title !== "" && content !== "") {
      const obj = {
        title: `${title}`,
        content: `${content}`,
      };
      setTitle("");
      setContent("");
      return addIdea(obj);
    } else {
      setMessage("Both fields are Rquired");
    }
  }
  return (
    <div className="form">
      <h1 className="font-bold">
        <input
          onChange={handleTitleChange}
          value={title}
          placeholder={isExpanded ? "Title..." : "Take a Note..."}
          onClick={handleExpand}
        />
      </h1>
      {isExpanded ? (
        <div>
          <p>
            <textarea
              onChange={handleContentChange}
              value={content}
              placeholder="Content..."
            />
          </p>
          <p>{`${message}`} </p>
          <button onClick={handleChange}>
            <BsFillPlusCircleFill />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default InputNotes;
