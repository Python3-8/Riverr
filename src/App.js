import React, { createRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar";

const rorrirbData = {
  a: "\u0252",
  b: "d",
  c: "\u0254",
  d: "b",
  e: "\u0258",
  f: "\u0287",
  g: "\u03f1",
  h: "\u029c",
  i: "i",
  j: "\u012f",
  k: "\u029e",
  l: "l",
  m: "m",
  n: "n",
  o: "o",
  p: "q",
  q: "p",
  r: "\u027f",
  s: "\u01a8",
  t: "\u0248",
  u: "\u03c5",
  v: "v",
  w: "w",
  x: "x",
  y: "\u03b3",
  z: "z",
  A: "A",
  B: "\u0a98",
  C: "\u0186",
  D: "\u10a7",
  E: "\u018e",
  F: "\u11bf",
  G: "\u04d8",
  H: "H",
  I: "I",
  J: "\u10b1",
  K: "\ufefc",
  L: "\u2143",
  M: "M",
  N: "\u0418",
  O: "O",
  P: "\u0533",
  Q: "\u03d8",
  R: "\u042f",
  S: "\u01a7",
  T: "T",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "Z",
  1: "\u0196",
  2: "\u03c2",
  3: "\u0190",
  4: "\u03bc",
  5: "\u091f",
  6: "\u10db",
  7: "\u0662",
  8: "8",
  9: "\u0b67",
  0: "0",
  "<": "<",
  ">": ">",
  "\\": "/",
  "/": "\\",
};

function App() {
  const engInputRef = createRef();
  const langInputRef = createRef();
  const [value, setValue] = useState("");
  const transToShurb = () => {
    const input = engInputRef.current.value;
    setValue(input.split("").reverse().join(""));
  };
  const transFromShurb = () => {
    const input = langInputRef.current.value;
    setValue(input.split("").reverse().join(""));
  };
  const copyToCb = () => {
    const el = document.createElement("input");
    el.setAttribute("value", value);
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast.success("!bɿɒodqilɔ oɈ bɘiqoƆ");
  };
  const transToRorrirb = () => {
    const input = engInputRef.current.value;
    let mirrored = "";
    for (let char of input.split("").reverse().join(""))
      mirrored += Object.keys(rorrirbData).includes(char)
        ? rorrirbData[char]
        : char;
    setValue(mirrored);
  };
  const transFromRorrirb = () => {
    const input = langInputRef.current.value;
    let mirrored = "";
    for (let char of input.split("").reverse().join("")) {
      if (!Object.values(rorrirbData).includes(char)) {
        mirrored += char;
        continue;
      }
      for (let key of Object.keys(rorrirbData)) {
        const val = rorrirbData[key];
        if (char === val) {
          mirrored += key;
          break;
        }
      }
    }
    setValue(mirrored);
  };
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <div class="main-body" style={{ padding: 6 }}>
        <h3 style={{ color: "ghostwhite" }}>ƨɿoɈɒlƨnɒɿT</h3>
        <div class="row" style={{ padding: 12 }}>
          <div class="col">
            <div class="input-group">
              <input
                type="text"
                ref={engInputRef}
                class="form-control"
                placeholder="desrrevir eb ot txet hsilgnE eht retnE"
                aria-label="bɘƨɿɿɘviɿ ɘd oɈ ɈxɘɈ ʜƨilϱnƎ ɘʜɈ ɿɘɈnƎ"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={transToShurb}
                style={{ color: "ghostwhite" }}
              >
                bruhS ot etalsnarT
              </button>
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={transToRorrirb}
                style={{ color: "ghostwhite" }}
              >
                dɿiɿɿoЯ oɈ ɘɈɒlƨnɒɿT
              </button>
            </div>{" "}
          </div>
          <div class="col" style={{ color: "ghostwhite" }}>
            :ɘɿɘʜ ɈxɘɈ ʜƨilϱnƎ ɿυoγ ɘƨɿɿɘviЯ
          </div>
        </div>
        <div class="row" style={{ padding: 12 }}>
          <div class="col">
            <div class="input-group">
              <input
                type="text"
                ref={langInputRef}
                class="form-control"
                placeholder="desrrevirnu eb ot txet brirroR ro bruhS eht retnE"
                aria-label="bɘƨɿɿɘviɿnυ ɘd oɈ ɈxɘɈ dɿiɿɿoЯ ɿo dɿυʜƧ ɘʜɈ ɿɘɈnƎ"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={transFromShurb}
                style={{ color: "ghostwhite" }}
              >
                bruhS morf etalsnarT
              </button>
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={transFromRorrirb}
                style={{ color: "ghostwhite" }}
              >
                dɿiɿɿoЯ moɿʇ ɘɈɒlƨnɒɿT
              </button>
            </div>{" "}
          </div>
          <div class="col" style={{ color: "ghostwhite" }}>
            :ɘɿɘʜ ɈxɘɈ dɿiɿɿoЯ ɿo dɿυʜƧ ɿυoγ ɘƨɿɿɘviɿnU
          </div>
        </div>
        <hr style={{ color: "ghostwhite" }} />
        <h3 style={{ color: "ghostwhite" }}>ɈlυƨɘЯ</h3>
        <div class="row">
          <div class="col">
            <div class="input-group" style={{ padding: 9 }}>
              <textarea
                type="text"
                value={value}
                readOnly
                class="form-control"
                placeholder="ereh sraeppa lliw tuptuo ehT"
                aria-label="ɘɿɘʜ ɿɒɘqqɒ lliw ɈυqɈυo ɘʜT"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={copyToCb}
                style={{ color: "ghostwhite" }}
              >
                📋 &#8206; ypoC
              </button>
            </div>
          </div>
          <div className="col" style={{ color: "ghostwhite" }}>
            :ɈυqɈυO
          </div>
        </div>
        <div
          style={{ textAlign: "center", marginTop: "6rem", fontSize: "60pt" }}
        >
          <a
            href="http://www.strawpoll.me/45541914"
            target="_blank"
            rel="noreferrer"
          >
            !ɘm ɘɈɒЯ
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
