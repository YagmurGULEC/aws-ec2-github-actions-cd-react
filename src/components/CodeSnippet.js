import React, { useState } from "react";

const CodeSnippet = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => setCopied(true))
      .catch(err => console.error("Failed to copy text:", err));

    // Reset the "Copied!" message after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1em", borderRadius: "5px", fontFamily: "monospace" }}>
      <pre style={{ overflowX: "auto", margin: "0 0 10px" }}>{code}</pre>
      <button className="btn btn-primary "
        onClick={handleCopy}

      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
export default CodeSnippet;