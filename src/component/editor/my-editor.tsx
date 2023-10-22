import React from "react";
import MDEditor from '@uiw/react-md-editor';
import './my-editor.css'


const CustomEditor = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <><MDEditor value={value}
            onChange={setValue} height={500} tabSize={4}/>
            {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
        </>

    )

}

export default CustomEditor