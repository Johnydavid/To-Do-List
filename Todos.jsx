import React, { useState } from "react";

function Todos() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    if (e) {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    if (e && input.length > 5) {
      let taskList = [...list];
      taskList.push(input);
      setList(taskList);
      setInput("");
    }
  };

  return (
    <section className="center-layout">
      <div className="todos-container">
        <div className="form-header">
          {/* // Two -way Data Binding */}
          <input
            onChange={handleInputChange}
            value={input}
            placeholder="Enter your Task Here"
          />

          <button
            className="todoButton "
            onClick={handleSubmit}
            disabled={input.length <= 5}
          >
            Add
          </button>

          <div className="todos-list">
            <h4 style={{ color: "black" }}> Tasks for Today</h4>
          </div>

          <div className="task-list">
            {list.map((d, i) => (
              <div className="list-item" key={`task list item ${i}`}>
                {" "}
                {d}{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Todos;
