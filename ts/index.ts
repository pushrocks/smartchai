import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
import chaiString = require('chai-string');

chai.use(chaiAsPromised);
chai.use(chaiString);
export const expect = chai.expect;
