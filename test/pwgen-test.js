var prototype = require('prototype')
var pwgen = require('../pwgen')
var assert = require('assert')

describe('pwgen', function () {
    it('should generate passwords', function () {
        var generator = new pwgen;
        assert.equal(generator.generate().length, 8)
    })

    it('should generate passwords without capital letters', function () {
        var generator = new pwgen;
        generator.includeCapitalLetter = false
        assert.ok(! generator.generate().match(/[A-Z]/))
    })

    it('should generate passwords without numbers', function () {
        var generator = new pwgen;
        generator.includeNumber = false
        assert.ok(! generator.generate().match(/[0-9]/))
    })
})