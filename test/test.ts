import 'typings-test'
import * as smartchai from '../dist/index'

describe('smartchai', function() {
  it('should have typings in place', function(){
    smartchai.expect('hi there').to.startsWith('hi')
  })
})
