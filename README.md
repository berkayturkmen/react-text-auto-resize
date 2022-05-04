## Installation

```
$ npm i react-text-auto-resize
```

## Usage

```jsx
import React, { useState } from 'react';
import AutoResize from './lib/AutoResize';
  
function App(){
	const [value, setValue] = useState("");
	return (
		<AutoResize onChange={(e) => setValue(e)} />
	);
}
```

## Custom

```jsx
import React, { useState } from 'react';
import AutoResize from './lib/AutoResize';
  
function App(){
	const [value, setValue] = useState("");

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && e.shiftKey) {
			console.log("Pressed shift + enter");
		}
	};

	return (
		<AutoResize
			minRow={2}
			maxRow={8}
			className="form-control" 
			style={{ border: '2px solid #222', padding: '5px' }}
			placeholeder={"hello world"}
			disabled={false}
			onKeyUp={(e) => handleKeyPress(e)}
			onChange={(e) => setValue(e)} 
		/>
	);
  }
```