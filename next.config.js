// css跟less 并存使用
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

// 必须添加这个才能正常引入antd的css，不然会报 ^= css标识符错误
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {};
}

module.exports = withLess(withCSS({}));
