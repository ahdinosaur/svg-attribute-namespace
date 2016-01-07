# svg-attribute-namespace

get namespace of svg attribute

code copied from (`virtual-hyperscript/svg-attribute-namespace`](https://raw.githubusercontent.com/Matt-Esch/virtual-dom/master/virtual-hyperscript/svg-attribute-namespace.js), .

## Install

with [`npm`](https://www.npmjs.com), run

```
npm install --save svg-attribute-namespace
```

## Usage

### `var svgAttributeNamespace = require('svg-attribute-namespace')`

### `svgAttributeNamespace(attributeName) -> namespace`

## Example

```
var svgAttributeNS = require('svg-attribute-namespace')

function setAttribute (node, name, value) {
  var namespace = svgAttributeNs(name)
  node.setAttributeNS(namespace, name, value)
}
```
