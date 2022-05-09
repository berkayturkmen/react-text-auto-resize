# react-textarea-autosize
Dynamic growing textarea component for React js
### Installation
```
$ npm i react-text-auto-resize
```

### Usage

```jsx
import React, { useState } from 'react';
import TextAutoResize from 'react-text-auto-resize';
  
function App(){
	const [value, setValue] = useState("");
	return (
		<TextAutoResize onChange={(e) => setValue(e)} />
	);
}
```

### Special props:

| prop | type | description | default value |
|-|-|-|-|
| `minRows` | `number` | Minimum number of rows to show for textarea | 2 |
| `maxRows` | `number` | Maximum number of rows up to which the textarea can grow | 5 |
| `className` | `string` | additional class name of textarea | |
| `style` | `string` | style properties of textarea `{ border: '2px solid #222' }` | |
| `placeholeder` | `string` | Sets placeholder | |
| `disabled` | `boolean` | Sets disabled | |
| `onKeyUp` | `func` | Triggers the onKeyUp event | |
| `onChange` | `func` | Triggers the onChange event  | | |

### Custom

```jsx
import React, { useState } from 'react';
import TextAutoResize from 'react-text-auto-resize';
  
function App(){
	const [value, setValue] = useState("");

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && e.shiftKey) {
			console.log("Pressed shift + enter");
		}
	};

	return (
		<TextAutoResize
			minRows={2}
			maxRows={8}
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