// url check function
import {urlChecker} from '../js/urlChecker'
describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(urlChecker()).toBeDefined();     
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect( urlChecker('sometext') ).toEqual(false);
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect( urlChecker('www.google.com')).toEqual(true);
    })
    test('Testing the checkUrl function not Empty', () => {
        expect( urlChecker('')).toEqual(false);
    })
})
