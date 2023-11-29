import { Editor } from "@bytemd/react";
import React, { useState } from "react";
import gfm from '@bytemd/plugin-gfm'
import 'bytemd/dist/index.css'

const ByteMd = (props) => {
    const [value, setValue] = useState('')
    const print = () => {
        props.onChange(value)
    }

    const plugins = [
        gfm(),
        // Add more plugins here
    ]
    return (
        <Editor
            value={value}
            plugins={plugins}
            onChange={(v) => {
                setValue(v)
                print()
            }}
        />
    )
}

export default ByteMd