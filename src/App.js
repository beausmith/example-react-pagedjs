import React, { useLayoutEffect } from "react";
import { Previewer } from "pagedjs";

import Book from "./Book";

const App = () => {
  useLayoutEffect(() => {
    const previewer = new Previewer();
    previewer
      .preview(
        document.querySelector("#root").innerHTML,
        [],
        document.querySelector("#preview")
      )
      .then(flow => {
        console.log("preview rendered, total pages", flow.total, { flow });
      });
    return () => {
      document.head
        .querySelectorAll('[data-pagedjs-inserted-styles]')
        .forEach((e) => e.parentNode?.removeChild(e))
    }
  }, []);
  return <Book />;
};

export default App;
