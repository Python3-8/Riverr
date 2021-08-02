import React, { createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const inputRef = createRef();
  return (
    <React.Fragment>
      <Navbar />
      <div class="row">
        <div class="col">
          <div class="input-group">
            <input
              type="text"
              ref={inputRef}
              class="form-control"
              placeholder="desrrevir eb ot txet hsilgnE eht retnE"
              aria-label="bɘƨɿɿɘviɿ ɘd oɈ ɈxɘɈ ʜƨilϱnƎ ɘʜɈ ɿɘɈnƎ"
            />
            <button class="btn btn-outline-secondary" type="button">
              bruhs ot etalsnarT
            </button>
            <button class="btn btn-outline-secondary" type="button">
              dɿiɿɿoЯ oɈ ɘɈɒlƨnɒɿT
            </button>
          </div>{" "}
        </div>
        <div class="col">:ɘɿɘʜ ɈxɘɈ ʜƨilϱnƎ ɿυoγ ɘƨɿɿɘviЯ</div>
      </div>
    </React.Fragment>
  );
}

export default App;
