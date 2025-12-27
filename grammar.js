/**
 * @file Fraz language
 * @author FkyFrky
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "fraz",

  rules: {
    // TODO: add the actual grammar rules
    source_file: ($) => repeat($.expression),
    expression: ($) => seq($.integer, "+", $.integer),
    integer: ($) => /\d+/,
  },
});
