import { expect } from '@jest/globals';
import { Point, GeoPoint, LatLng } from './geo-point';

describe('Augmented tests', () => {
    it('Sample 3', () => {
        /**
         * StringLiteral
         * src/geo-point.ts:86:27
         * -         throw new TypeError('GeoPoint: Argument must be an object');
         * +         throw new TypeError("");
         -------------------------------------------------------------------------
         * BlockStatement
         * src/geo-point.ts:85:28
         * -       if (!isObject(object)) {
         * -         throw new TypeError('GeoPoint: Argument must be an object');
         * -       }
         * +       if (!isObject(object)) {}
        */
        const o = <LatLng><unknown>'a'
        expect(() => GeoPoint.fromObject(o)).toThrow('GeoPoint: Argument must be an object');
    });
});
