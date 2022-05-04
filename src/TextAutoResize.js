import React, { useState } from "react";

export default function TextAutoResize({ minRow, maxRow, className, style, placeholder, disabled, onKeyUp, onChange }) {
    const [rows, setRows] = useState(minRow);
    const [value, setValue] = useState("");

    function setTextAreaInput(e) {
        const val = e.target.value;
        setValue(onChange(val));

        const newLines = (val.match(/\n/g) || []).length;
        if (!newLines) setRows(minRow);
        else if (newLines < maxRow) setRows(newLines + 1);
        else setRows(maxRow);
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