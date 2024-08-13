import React, { useState } from "react";
import './Customizable.css'

function Customizable() {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };

  return (
    <>
      <h1>Customizable</h1>
      <button onClick={toggleModel} className="btn-model">
        Open
      </button>
      {
        model && (
          <div className="modal">
          <div className="overlay" onClick={toggleModel}></div>
            <div className="modal-content">
              <h1>Customizable Model</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                quas ab excepturi? Dolorem, corporis aspernatur magni voluptatem
                reprehenderit recusandae doloremque, laudantium, perferendis
                officiis eum nostrum?
              </p>
              <button className="close-modal" onClick={toggleModel}>
                Close
              </button>
            </div>
        </div>
        )
      }
    </>
  );
}

export default Customizable;
