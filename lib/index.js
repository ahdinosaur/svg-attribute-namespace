/**
 * Modules
 */

var namespaces = require('@f/svg-attribute-namespaces')

/**
 * Exports
 */

module.exports = svgAttributeNamespace['default'] = svgAttributeNamespace

/**
 * Get namespace of svg attribute
 *
 * @param {String} attributeName
 * @return {String} namespace
 */

function svgAttributeNamespace (attributeName) {
  // if no prefix separator in attributeName, then no namespace
  if (attributeName.indexOf(':') === -1) return null

  // get prefix from attributeName
  var prefix = attributeName.split(':', 1)[0]

  // if prefix in supported prefixes
  if (namespaces.hasOwnProperty(prefix)) {
    // then namespace of prefix
    return namespaces[prefix]
  } else {
    // else unsupported prefix
    throw new Error('svg-attribute-namespace: prefix "' + prefix + '" is not supported by SVG.')
  }
}
