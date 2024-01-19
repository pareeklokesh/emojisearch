import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [getTitle, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const addTaskHandler = () => {
    if (getTitle.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { title: getTitle, timestamp: new Date().toLocaleString() },
      ]);
      setTitle("");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h2 className="todo-title text-center text-uppercase d-block">TODO List</h2>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="d-flex justify-content-between">
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addTaskmodal"
                  >
                    Add Task
                  </button>
                </div>
                <div>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>All</option>
                    <option value="1">Incomplete</option>
                    <option value="2">Completed</option>
                  </select>
                </div>
              </div>

              <div className="w-100 bg-secondary p-4 rounded mt-3">
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="todoItem_item p-3 bg-white mb-3 d-flex justify-content-between rounded"
                  >
                    <div className="todoItem_todoDetails d-flex align-items-center">
                      <div className="todoItem_svgBox me-3"></div>
                      <div className="todoItem_texts">
                        <p className="todoItem_todoText mb-0">{task.title}</p>
                        <p className="todoItem_time mb-0">{task.timestamp}</p>
                      </div>
                    </div>

                    <div className="todoItem_todoActions d-flex align-items-center">
                      <button className="editdeleBtn border-0 d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="14"
                          viewBox="0 0 448 512"
                        >
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                      </button>
                      <button className="editdeleBtn border-0 d-flex align-items-center justify-content-center ms-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addTaskmodal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add TODO
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" onChange={titleChangeHandler} className="form-control" />
              </div>
              <div className="">
                <label className="form-label">Status</label>
                <select className="form-select" aria-label="Default select example">
                  <option value="1" selected>Incomplete</option>
                  <option value="2">Completed</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={addTaskHandler} data-bs-dismiss="modal">
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todolist;
