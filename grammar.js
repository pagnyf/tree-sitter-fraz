/**
 * @file Fraz language
 * @author FkyFrky
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "fraz",

  extras: ($) => [
    /\s/, // whitespace including [ \t\n\r]
    $.comment,
  ],

  rules: {
    // TODO: add the actual grammar rules
    source_file: ($) => repeat($.expression),
    expression: ($) => seq($.object, "has", $.attribute),
    object: ($) => /[A-Za-z]+/,
    attribute: ($) => /[a-z]+/,
    comment: ($) => seq("# ", /.*/),
    integer_literal: ($) => /\d+/,
    string_literal: ($) => /[a-z]+/,
  },
});
