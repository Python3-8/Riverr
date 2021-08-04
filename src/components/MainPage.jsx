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
    toast.success("Copied to clipboard!");
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
      <div className="main-body" style={{ padding: 6 }}>
        <h3 style={{ color: "ghostwhite" }}>Translators</h3>
        <div style={{ padding: 12 }}>
          <div className="p-3" style={{ color: "ghostwhite" }}>
            Riverrse your English text here:
          </div>
          <div className="p-2">
            <div className="input-group">
              <input
                type="text"
                ref={engInputRef}
                className="form-control"
                placeholder="Enter the English text to be riverrsed"
                aria-label="Enter the English text to be riverrsed"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={transToShurb}
                style={{ color: "ghostwhite" }}
              >
                Translate to Shurb
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={transToRorrirb}
                style={{ color: "ghostwhite" }}
              >
                Translate to Rorrirb
              </button>
            </div>{" "}
          </div>
        </div>
        <div style={{ padding: 12 }}>
          <div className="p-3" style={{ color: "ghostwhite" }}>
            Unriverrse your Shurb or Rorrirb text here:
          </div>
          <div className="p-2">
            <div className="input-group">
              <input
                type="text"
                ref={langInputRef}
                className="form-control"
                placeholder="Enter the Shurb or Rorrirb text to be unriverrsed"
                aria-label="Enter the Shurb or Rorrirb text to be unriverrsed"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={transFromShurb}
                style={{ color: "ghostwhite" }}
              >
                Translate from Shurb
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={transFromRorrirb}
                style={{ color: "ghostwhite" }}
              >
                Translate from Rorrirb
              </button>
            </div>{" "}
          </div>
        </div>
        <hr style={{ color: "ghostwhite" }} />
        <h3 style={{ color: "ghostwhite" }}>Result</h3>
        <div>
          <div className="p-3" style={{ color: "ghostwhite" }}>
            Output:
          </div>
          <div className="p-2">
            <div className="input-group" style={{ padding: 9 }}>
              <textarea
                type="text"
                value={value}
                readOnly
                className="form-control"
                placeholder="The output will appear here"
                aria-label="The output will appear here"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={copyToCb}
                style={{ color: "ghostwhite" }}
              >
                Copy 📋
              </button>
            </div>
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
            Rate me!
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
