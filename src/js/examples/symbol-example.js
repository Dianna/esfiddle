/* global window */
window.es6Example = window.es6Example || {};
window.es6Example.template = {};

window.es6Example.template.code =
`const tiger = Symbol('cat');
const lion = Symbol('cat');

console.log(tiger === lion);
console.log(tiger == lion);`;

window.es6Example.template.display = 'Symbols';
