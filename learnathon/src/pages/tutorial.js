import React from "react";
import { Card, CardContent, Typography } from "material-ui";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default function tutorial() {
  return (
    <div>
      <AceEditor
        mode="java"
        theme="github"
        //onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}
