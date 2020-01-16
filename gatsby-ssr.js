import React from "react";
import lity from "lity";
export function onRenderBody(
  { setHeadComponents }) {
setHeadComponents([
    <link href="dist/lity.css" rel="stylesheet" />,
    <script src="vendor/jquery.js"></script>,
    <script src="dist/lity.js"></script>
]);
}