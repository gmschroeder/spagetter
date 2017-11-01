// these tests only run in node, not the browser!

let mocha = require('mocha')
let chai = require('chai')
let expect = require('chai').expect
let request = require('request')
let app = require('http')

describe('http requests', () => {
    it('An address that exists should return 200',(done) =>  {
        request.get('http://localhost:3000', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            done()
        })
    })

    it('An address that doesn\'t exist should return 404',(done) => {
        request.get('http://localhost:3000/obviouslyfakeuri', (err, res, body) => {
            expect(res.statusCode).to.equal(404)
            done()
        })
    })
})

