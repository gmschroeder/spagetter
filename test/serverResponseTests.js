// these tests only run in node, not the browser!

var request = require('request')
var mocha = require('mocha')
var chai = require('chai')
var assert = chai.assert
describe("requests return appropriate messages ", () => {
    it("should return 404 if route exists", () => {
        var options = {
            url: 'http://localhost:3000/xyz',
            headers: {
                'Content-Type': 'text/plain'
            }
        }
        request.get(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal('correct header');
            done();

        });
    });
    it("should return 200 if route exists in a folder", () => {
        var options = {
            url: 'http://localhost:3000/xyz',
            headers: {
                'Content-Type': 'text/plain'
            }
        }
        request.get(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal('correct header');
            done();

        });
    });

});
