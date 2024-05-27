import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export const MemComponent = ({ mem }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const dispatch = useDispatch();

  const upvoteHandler = () => {
    mem.upvotes += 1;
    setUpvotes(upvotes + 1);
    if (mem.upvotes + mem.downvotes > 10) {
      mem.star = true;
    }
    dispatch({ type: "UP-VOTE", payload: upvotes });
  };
  const downvoteHandler = () => {
    mem.downvotes -= 1;
    setDownvotes(downvotes - 1);
    dispatch({ type: "DOWN-VOTE", payload: downvotes });
  };
  // <span className="fa fa-star checked"></span>
  console.log(mem.star);
  return (
    <div className="mem-container">
      {mem.star && <img className="star" src="/assets/star-svgrepo-com.svg" alt="star"/>}
      <div className="img-wrapper">
        <img src={mem.img} alt={mem.title} />
      </div>

      <h3>{mem.title}</h3>
      <div className="mem-votes">
        <div className="vote-up">
          <span>{mem.upvotes}</span>
          <button onClick={upvoteHandler}>&#129033;</button>
        </div>
        <div className="vote-down">
          <span>{mem.downvotes}</span>
          <button onClick={downvoteHandler}>&#x1F80B;</button>
        </div>
      </div>
    </div>
  );
};
