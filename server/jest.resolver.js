module.exports = function(path, options) {
  if (/^https:/.test(path)) {
    return './react_stub.js';
  }
  if (/InputForm$/.test(path)) {
    return path.replace(/\.js$/, '.jsx');
  }
  return options.defaultResolver(path, options);
}
