

import { reverseVowels } from "./345";
import {expect, jest, test} from '@jest/globals';

describe('345', () => {
    const input_arr = ['hello', 'leetcode', 'e', 'ea', 'abc', 'aA']
    const expect_arr = ['holle', 'leotcede', 'e', 'ae', 'abc', 'Aa']
    it('all', () => {
        // expect(input[0]).toEqual(expect[0])

        // expect(1).toEqual(1)
        for (let i = 0; i < input_arr.length; i++) {
            const res = reverseVowels(input_arr[i])
            expect(res).toEqual(expect_arr[i])
            
        }
        // expect(reverseVowels('hello')).toEqual('holle')
    })    
})