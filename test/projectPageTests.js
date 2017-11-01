// these tests only run in node, not the browser!
let mocha = require('mocha')
let chai = require('chai')
let expect = require('chai').expect
let request = require('request')
let app = require('http')



describe('Project page urls', () => {
    it('A project that exists should return 200',(done) =>  {
        request.get('http://localhost:3000/someappthatnobodywillreallyuse', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            done()
        })
    })

    it('A project page that doesn\'t exist should return 404',(done) => {
        request.get('http://localhost:3000/someobviouslyfakeuri', (err, res, body) => {
            expect(res.statusCode).to.equal(404)
            done()
        })
    })
})
