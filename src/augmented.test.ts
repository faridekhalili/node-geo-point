import { expect } from '@jest/globals';
import { Point, GeoPoint, LatLng } from './geo-point';

describe('Augmented tests', () => {
    it('Sample 5', () => {
        /**
         * StringLiteral
         * src/geo-point.ts:47:28
         * -         throw new RangeError('bad longitude value');
         * +         throw new RangeError("");
         ---------------------------------------------------------
         * ConditionalExpression
         * src/geo-point.ts:46:9
         * -       if (longitude < -180 || longitude > 180) {
         * +       if (false) {
         */
        expect(() => new GeoPoint(0, 181)).toThrow('bad longitude value')
    });
});
