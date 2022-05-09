import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState } from 'react';

function TextAutoResize(_ref) {
  var _ref$minRows = _ref.minRows,
      minRows = _ref$minRows === void 0 ? 2 : _ref$minRows,
      _ref$maxRows = _ref.maxRows,
      maxRows = _ref$maxRows === void 0 ? 5 : _ref$maxRows,
      className = _ref.className,
      style = _ref.style,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onKeyUp = _ref.onKeyUp,
      onChange = _ref.onChange;

  var _useState = useState(minRows),
      _useState2 = _slicedToArray(_useState, 2),
      rows = _useState2[0],
      setRows = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  function setTextAreaInput(e) {
    var val = e.target.value;
    setValue(onChange(val));
    var newLines = (val.match(/\n/g) || []).length;
    if (!newLines) setRows(minRows);else if (newLines < maxRows) setRows(newLines + 1);else setRows(maxRows);
  }

  return /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    onChange: function onChange(e) {
      return setTextAreaInput(e);
    },
    className: className,
    value: value,
    style: style,
    placeholder: placeholder,
    disabled: disabled,
    onKeyUp: onKeyUp
  });
}

export { TextAutoResize as default };
