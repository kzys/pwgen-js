var test = require('node:test')
var assert = require('node:assert')
var pwgen = require('../pwgen')

test('pwgen', async function (t) {
    await t.test('should generate passwords', function () {
        var generator = new pwgen
        var i, password
        for (i = 0; i < 1000; i++) {
            password = generator.generate()
            assert.equal(password.length, 8, password)
        }
    })

    await t.test('should generate passwords without capital letters', function () {
        var generator = new pwgen
        generator.includeCapitalLetter = false
        assert.ok(! generator.generate().match(/[A-Z]/))
    })

    await t.test('should generate passwords without numbers', function () {
        var generator = new pwgen
        generator.includeNumber = false
        assert.ok(! generator.generate().match(/[0-9]/))
    })
})
