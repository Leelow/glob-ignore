const glob = require('glob-all')
const ignore = require('ignore')

module.exports = function (patterns, filters, options, callback) {
  callback = callback || options || filters
  options = typeof options === 'object' ? options : filters

  if (typeof options !== 'object') options = {}
  if (typeof filters === 'string') filters = [filters]
  else filters = Array.isArray(filters) ? filters : null

  glob(patterns, options, function (err, paths) {
    if (err) return callback(err)

    if (filters) {
      var ig = ignore().add(filters)
      paths = ig.filter(paths)
    }

    callback(null, paths)
  })
}

module.exports.sync = function (patterns, filters, options) {
  options = options || filters

  if (typeof options !== 'object') options = {}
  if (typeof filters === 'string') filters = [filters]
  else filters = Array.isArray(filters) ? filters : null

  var paths = glob.sync(patterns, options)
  if (filters) {
    var ig = ignore().add(filters)
    paths = ig.filter(paths)
  }

  return paths
}
