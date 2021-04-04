import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

// // Render editor
// render(
//   <AceEditor
//     mode="java"
//     theme="github"
//     onChange={onChange}
//     name="UNIQUE_ID_OF_DIV"
//     editorProps={{ $blockScrolling: true }}
//   />,
//   document.getElementById("example")
// );

function editor() {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Start off here: Your first time editing React code!
      </h1>
      <h2>What is React?</h2>
      <p>
        React is a Javascript library developed by Facebook. React has gotten
        insanely popular over the last few years. Now, it's even used in major
        players such as -{" "}
      </p>

      <img
        style={{
          height: "4%",
          width: "4%",
          marginLeft: "20%",
          marginTop: "10px",
        }}
        src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
      />
      <img
        style={{
          height: "3.5%",
          width: "3.5%",
          marginLeft: "20%",
          marginTop: "10px",
        }}
        src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
      />
      <img
        style={{
          height: "5.3%",
          width: "5.3%",
          marginLeft: "20%",
          marginTop: "10px",
        }}
        src="https://i.pcmag.com/imagery/reviews/07AxdIVbQ63OEkJoPgCybXt-19..1594914797.png"
      />

      <iframe
        src="https://codesandbox.io/embed/priceless-williams-9m58p?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "500px",
          border: "0",
          borderRadius: "4px",
        }}
        title="priceless-williams-9m58p"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}

export default editor;
