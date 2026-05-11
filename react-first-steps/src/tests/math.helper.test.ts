import {describe, expect, test} from 'vitest';
import { add, multiply, subtract } from '../helpers/math.helper';


describe('add', () => {

    test('should add two positive numbers', () => {

        const a = 1;
        const b = 2;

        const result = add(a, b);
        
        expect(result).toBe(a + b);

    });


});

describe('subtract', () => {
    
    test('should add two positive numbers', () => {

        const a = 1;
        const b = 2;

        const result = subtract(a, b);
        
        expect(result).toBe(a - b);

    });

    test('should add two negative numbers', () => {

        const a = -1;
        const b = -2;

        const result = subtract(a, b);
        
        expect(result).toBe(a - b);

    });
});

describe('multiply', () => {
    
    test('should add two positive numbers', () => {

        const a = 1;
        const b = 2;

        const result = multiply(a, b);
        
        expect(result).toBe(a * b);

    });
    test('if you multiply a number by 0 it should return 0', () => {

        const a = 0;
        const b = 2;

        const result = multiply(a, b);
        
        expect(result).toBe(0);

    });

})


