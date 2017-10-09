import * as smartchai from '../ts/index'
import * as smartq from 'smartq'

let asyncWrapper = async () => {
  smartchai.expect('hi there').to.startWith('hi')
  let deferred = smartq.defer()
  smartchai.expect(await deferred.promise).to.be.null()
  deferred.resolve(null)
}

asyncWrapper().catch(err => {
  throw err
})
