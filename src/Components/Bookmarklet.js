import React from "react";

function Bookmarklet() {
  const bookmarkletCode = `javascript:(function(){document.body.style.backgroundColor='lightblue';})();`;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(bookmarkletCode)
      .then(() => {
        alert("Bookmarklet copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <>
      <div>Bookmarklet</div>
      <div>
        <h1>Create Your Bookmarklet</h1>
        <p>
          Click the button below to copy the bookmarklet that changes the
          background color:
        </p>
        <button onClick={copyToClipboard}>Copy Bookmarklet</button>
      </div>
    </>
  );
}

export default Bookmarklet;
