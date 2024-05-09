import React, { useState, useContext } from "react";
import ChatContext from "../../ChatContext";
import "./Answer.css";

const Answer = (props) => {
  const [input, setInput] = useState("");

  const { dispatch } = useContext(ChatContext);

  const submitAswer = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return;
    }
    dispatch({
      type: "ADD_ANSWER",
      questionId: props.questionId,
      country: props.country,
      answer: input,
    });
    setInput("");
    props.toggleAddButton();
  };

  return (
    <>
      {props.answer.map((el) => (
        <div className="answer-text" key={el}>
          <p>{el}</p>
        </div>
      ))}
      {props.buttonState ? (
        <form className="form-add_answer" onSubmit={submitAswer}>
          <input
            type="text"
            value={input}
            placeholder="Add a Reply..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button disabled={input.length === 0} type="submit">
            Reply
          </button>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default Answer;