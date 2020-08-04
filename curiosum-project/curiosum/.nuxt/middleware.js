const middleware = {}

middleware['Api'] = require('..\\middleware\\Api.js')
middleware['Api'] = middleware['Api'].default || middleware['Api']

middleware['ssr-cookie'] = require('..\\middleware\\ssr-cookie.js')
middleware['ssr-cookie'] = middleware['ssr-cookie'].default || middleware['ssr-cookie']

export default middleware
