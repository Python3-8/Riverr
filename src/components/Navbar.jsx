import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#333" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="row g-2">
            <div className="col" style={{ color: "ghostwhite" }}>
              ɿ ɿ ɘ v i
            </div>
            <div className="col">
              <div
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "gold",
                  textAlign: "center",
                  color: "#333666",
                  borderRadius: 5,
                }}
              >
                Я
              </div>
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
