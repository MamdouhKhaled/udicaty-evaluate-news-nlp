// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import {handleSubmit} from '../js/formHandler'

describe('Client Test', () => {
    test('Testing the handleSubmit function defined or not', () => {
        expect( typeof handleSubmit === 'function' ).toBe(true);     
    })
})
