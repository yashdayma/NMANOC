import React from "react";


function MarqueeText({ text }) {
    return (
      <div className="marquee" style={{text: "RGB(86, 188, 95)"}}>
        <div className="marquee-inner">
          {text}
        </div>
      </div>
    );
  }
  export default MarqueeText;