import { expect } from '@jest/globals';
import { Point, GeoPoint, LatLng } from './geo-point';

describe('Augmented tests', () => {

    it('Sample 9', () => {
        /**
         * BlockStatement
         * src/geo-point.ts:218:46
         * -     calculateDistance(point: GeoPoint): number {
         * -       return GeoPoint.calculateDistance(this, point);
         * -     }
         * +     calculateDistance(point: GeoPoint): number {}
         */
        const gp = new GeoPoint(0, 0);
        const other = new GeoPoint(0, 1)
        expect(gp.calculateDistance(other)).toBeCloseTo(111201.78397336556, 5)
    });
});
