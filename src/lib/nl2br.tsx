import React from "react";

/** Convert \n in strings to <br/> for JSX rendering */
export function nl2br(text: string): React.ReactNode {
  if (!text.includes("\n")) return text;
  return text.split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}
