import React, { useState } from "react";

export default function TextAutoResize({ minRows = 2, maxRows = 5, className, style, placeholder, disabled, onKeyUp, onChange }) {
    const [rows, setRows] = useState(minRows);
    const [value, setValue] = useState("");

    function setTextAreaInput(e) {
        const val = e.target.value;
        setValue(onChange(val));

        const newLines = (val.match(/\n/g) || []).length;
        if (!newLines) setRows(minRows);
        else if (newLines < maxRows) setRows(newLines + 1);
        else setRows(maxRows);
    }
    return (
        <textarea
            rows={rows}
            onChange={(e) => setTextAreaInput(e)}
            className={className}
            value={value}
            style={style}
            placeholder={placeholder}
            disabled={disabled}
            onKeyUp={onKeyUp}>
        </textarea>
    );
}