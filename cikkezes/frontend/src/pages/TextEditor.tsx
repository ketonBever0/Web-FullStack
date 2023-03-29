import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function TextEditor() {

    const [textBox, setTextBox] = useState<string>("");


    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    return (
        <div>
            <ReactQuill className='border mb-6' style={{ height: "30rem" }} theme='snow' modules={modules} formats={formats} value={textBox} onChange={setTextBox} />
        </div>
    )
}

export default TextEditor