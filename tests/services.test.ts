import { helloService } from '../src/hello-service'
import { ValidationError } from '../src/common'

describe('say hello', function() {
    it('base', function() {
        let result = helloService({
            name: "Tom"
        })
        expect(result.message).toBe('Hello Tom')
    })
    it('error', function() {
        const t = () => {
            helloService({
                name: ''
            })
        }
        expect(t).toThrow(ValidationError)
    })
})
