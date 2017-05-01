import 'typings-test'
import * as smartchai from '../dist/index'
import * as smartq from 'smartq'

smartchai.expect('hi there').to.startWith('hi')
let deferred = smartq.defer()
smartchai.expect(deferred.promise).to.eventually.be.null
deferred.resolve(null)
