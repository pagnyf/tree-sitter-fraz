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
    source_file: ($) => repeat($.definition),
    definition: ($) =>
      choice(
        seq($.object, "has", $.attribute),
        seq($.attribute, "is", $.type),
        seq($.attribute, "either", $.attribute),
        seq($.object, "test", $.attribute),
        seq($.string_literal, "string", $.string_literal),
      ),
    object: ($) => /[A-Z][a-z]*/,
    attribute: ($) => /[a-z]+/,
    comment: ($) => seq("# ", /.*/),
    type: ($) => /datetime|integer/,
    integer_literal: ($) => /\d+/,
    string_literal: ($) => /[a-z]+/,
  },
});
