import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="task-container">
          <div id="form-wrapper">
            <div style={{ flex: 6 }}>
              <input
                className="form-control"
                id="title"
                type="text"
                name="title"
                placeholder="Placeholder"
              />
            </div>
            <div style={{ flex: 1 }}>
              <input
                className="btn btn-warning"
                id="submit"
                type="submit"
                name="Add"
                placeholder="Placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
