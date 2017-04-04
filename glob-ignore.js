const glob = require('glob-all')
const ignore = require('ignore')

module.exports = function (patterns, filters, options, callback) {
  callback = callback || options || filters
  options = typeof options === 'object' ? options : filters

  if(typeof options !== 'object') options = {}
  if (typeof filters === 'string') filters = [filters]
  else if (!Array.isArray(filters)) filters = null

  glob(patterns, options, function (err, paths) {
    if (err) return callback(err)

    if (filters) {
      var ig = ignore().add(filters)
      paths = ig.filter(paths)
    }

    callback(null, paths)
  })
}

module.exports.sync = function(patterns, filters, options) {
  options = options || filters

  if (typeof filters === 'string') filters = [filters]
  else if (!Array.isArray(filters)) filters = null

  var paths = glob.sync(patterns, options)
  if (filters) {
    var ig = ignore().add(filters)
    paths = ig.filter(paths)
  }
  return paths
}

/*
module.exports('test/**', {}, {dot:false},function (err, res) {
  if (err) throw err
  console.log(res)
})*/

//console.log(module.exports.sync('test/**', {}, {dot: false}))

/*const path = require('path')

 const glob = require('glob')
 const ignore = require('ignore')
 const ig = ignore().add(['.git'])

 var dir = path.join(__dirname, 'test')


 module.exports = function(dir, filters, callback) {
 callback = callback || filters
 if(typeof filters === 'string') filters = [filters]
 else if(!Array.isArray(filters)) filters = null

 glob('**', {cwd: dir, dot:true}, function(err, paths) {
 if(err) return callback(err)

 if(filters) {
 var ig = ignore().add(filters)
 paths = ig.filter(paths)
 }

 return callback(err, paths)
 })
 }

 module.exports('**', '.git', function(err, res) {
 if(err) throw err
 console.log(res)
 })
 */

