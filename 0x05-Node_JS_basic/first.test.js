//const chai = require('chai');
//const chaiHttp = require('chai-http');

import chai from 'chai';
import chaiHttp from 'chai-http';
import filePath from './full_server/controllers/StudentsController.js'

process.argv[2] = './database.csv'

import app from './full_server/server.js';

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {

  describe('/students/:major endpoint', () => {
    describe('When the database is available', () => {
      //before(() => {
      //  filePath = './database.csv';
      //});

      it('Returns the right content', (done) => {
        chai.request(app)
          .get('/students/SWE')
          .end((error, response) => {
            //chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.equal(`List: Guillaume, Joseph, Paul, Tommy`);
            done();

          });
      });
    });
  });
});
