var pwgen = require('../pwgen')
var assert = require('assert')

describe('pwgen', function () {
    it('should generate passwords', function () {
        var generator = new pwgen;
        var i, password
        for (i = 0; i < 1000; i++) {
            password = generator.generate()
            assert.equal(password.length, 8, password)
        }
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
