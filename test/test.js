// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const dateFormat = require('dateformat');
const app = require('../index');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Application", () => {
    describe("GET /", () => {

        it("should return a json object", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

        
        it("should say Hello World", (done) => {
            const todaysDate = dateFormat( Date.now(), 'yyyy-mm-dd' );
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.name.should.equal('Hello World');
                    done();
                 });
        });

        it("should display current Date", (done) => {
            const todaysDate = dateFormat( Date.now(), 'yyyy-mm-dd' );
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.date.should.equal(todaysDate);
                    done();
                });
        });
    });
});