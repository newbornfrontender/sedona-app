'use strict';

module.exports = {
  /* Global */
  printWidth: 80 /* Specify the line length that the printer will wrap on */,
  tabWidth: 2 /* Specify the number of spaces per indentation-level */,
  useTabs: false /* Indent lines with tabs instead of spaces */,
  /* Common */
  singleQuote: true /* Use single quotes instead of double quotes */,
  bracketSpacing: true /* Print spaces between brackets in object literals */,
  proseWrap:
    'preserve' /* By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer, e.g. GitHub comment and BitBucket. In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out with "never" */,
  /* JavaScript */
  semi: true /* Print semicolons at the ends of statements */,
  jsxBracketSameLine: false /* Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements) */,
  arrowParens:
    'always' /* Include parentheses around a sole arrow function parameter */,
  trailingComma:
    'all' /* Print trailing commas wherever possible when multi-line (a single-line array, for example, never gets trailing commas) */,
  /* Special */
  insertPragma: false /* Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier. This works well when used in tandem with the --require-pragma option. If there is already a docblock at the top of the file then this option will add a newline to it with the @format marker */,
  requirePragma: false /* Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to prettier */ /* These two options can be used to format code starting and ending at a given character offset (inclusive and exclusive, respectively) */,
  /* Range */ rangeStart: 0 /* Backwards to the start of the first line containing the selected statement */,
  rangeEnd: Infinity /* Forwards to the end of the selected statement */,
};
