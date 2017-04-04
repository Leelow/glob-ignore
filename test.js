/* eslint-env mocha */
/* istanbul ignore next */
const path = require('path')
const assert = require('assert')
const mock = require('mock-require')
var glob = require('./glob-ignore.js')

const cwd = path.join(__dirname, 'files')

describe('glob-ignore (sync)', function () {
  it('should get all the files', function (done) {
    glob('**', {cwd: cwd}, function (err, res) {
      if (err) return done(err)
      assert.deepEqual(res, ['a.txt', 'b.txt', 'c.txt', 'x', 'x/y.txt', 'x/z.txt'])
      done()
    })
  })

  it('should filter files', function (done) {
    glob('x/**', {cwd: cwd}, function (err, res) {
      if (err) return done(err)
      assert.deepEqual(res, ['x', 'x/y.txt', 'x/z.txt'])
      done()
    })
  })

  it('should worked without filters', function (done) {
    glob('files/**', function (err, res) {
      if (err) return done(err)
      assert.deepEqual(res, ['files', 'files/a.txt', 'files/b.txt', 'files/c.txt', 'files/x', 'files/x/y.txt', 'files/x/z.txt'])
      done()
    })
  })

  it('should ignore a wrong filter', function (done) {
    glob('**', {wrong: 'filter'}, {cwd: cwd}, function (err, res) {
      if (err) return done(err)
      assert.deepEqual(res, ['a.txt', 'b.txt', 'c.txt', 'x', 'x/y.txt', 'x/z.txt'])
      done()
    })
  })

  it('should worked with a string filter', function (done) {
    glob('**', 'x', {cwd: cwd}, function (err, res) {
      if (err) return done(err)
      assert.deepEqual(res, ['a.txt', 'b.txt', 'c.txt'])
      done()
    })
  })

  it('should worked with multiple filters', function (done) {
    glob('**', ['a.txt', 'x'], {cwd: cwd}, function (err, res) {
      if (err) return done(err)
      assert.deepEqual(res, ['b.txt', 'c.txt'])
      done()
    })
  })

  it('should capture glob-all errors', function (done) {
    mock('glob-all', function (pattern, options, callback) {
      callback(new Error('test'))
    })
    glob = mock.reRequire('./glob-ignore.js')
    glob('**', {cwd: cwd}, function (err, res) {
      assert.equal(err.message, 'test')
      assert.equal(res, undefined)
      mock.stop('glob-all')
      glob = mock.reRequire('./glob-ignore.js')
      done()
    })
  })
})

describe('glob-ignore (sync)', function () {
  it('should get all the files', function () {
    assert.deepEqual(glob.sync('**', {cwd: cwd}), ['a.txt', 'b.txt', 'c.txt', 'x', 'x/y.txt', 'x/z.txt'])
  })

  it('should filter files', function () {
    assert.deepEqual(glob.sync('x/**', {cwd: cwd}), ['x', 'x/y.txt', 'x/z.txt'])
  })

  it('should work without filters', function () {
    assert.deepEqual(glob.sync('files/**'), ['files', 'files/a.txt', 'files/b.txt', 'files/c.txt', 'files/x', 'files/x/y.txt', 'files/x/z.txt'])
  })

  it('should ignore a wrong filter', function () {
    assert.deepEqual(glob.sync('**', {wrong: 'filter'}, {cwd: cwd}), ['a.txt', 'b.txt', 'c.txt', 'x', 'x/y.txt', 'x/z.txt'])
  })

  it('should worked with a string filter', function () {
    assert.deepEqual(glob.sync('**', 'x', {cwd: cwd}), ['a.txt', 'b.txt', 'c.txt'])
  })

  it('should worked with multiple filters', function () {
    assert.deepEqual(glob.sync('**', ['a.txt', 'x'], {cwd: cwd}), ['b.txt', 'c.txt'])
  })
})
