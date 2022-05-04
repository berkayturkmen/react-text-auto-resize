'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TextAutoResize(_ref) {
  var minRow = _ref.minRow,
      maxRow = _ref.maxRow,
      className = _ref.className,
      style = _ref.style,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onKeyUp = _ref.onKeyUp,
      onChange = _ref.onChange;

  var _useState = React.useState(minRow),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      rows = _useState2[0],
      setRows = _useState2[1];

  var _useState3 = React.useState(""),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  function setTextAreaInput(e) {
    var val = e.target.value;
    setValue(onChange(val));
    var newLines = (val.match(/\n/g) || []).length;
    if (!newLines) setRows(minRow);else if (newLines < maxRow) setRows(newLines + 1);else setRows(maxRow);
  }

  return /*#__PURE__*/React__default["default"].createElement("textarea", {
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

module.exports = TextAutoResize;
