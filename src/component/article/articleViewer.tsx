import { Viewer } from "@bytemd/react";
import React, { useState } from "react";

import 'bytemd/dist/index.css'
import 'juejin-markdown-themes/dist/devui-blue.css'

const ViewMd = ({ context }) => {

  return (
    <Viewer

      value={context}

    // plugins={plugins}

    />
  )
}

export default ViewMd