import React, { useState } from "react";
import { createRef } from "react";
import { toast } from "react-toastify";
import { rorrirbData } from "../utils/config";

const MainPage = (props) => {
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
            href="http://www.strawpoll.me/45544782"
            target="_blank"
            rel="noreferrer"
          >
            !ɘm ɘɈɒЯ
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
