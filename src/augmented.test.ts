import { expect } from '@jest/globals';
import { Point, GeoPoint, LatLng } from './geo-point';

describe('Augmented tests', () => {
    it('Sample 6', () => {
        /**
         * StringLiteral
         * src/geo-point.ts:69:27
         * -         throw new TypeError('The value of type should be 'Point'');
         * +         throw new TypeError("");
         */
        const point: Point = { type: 'Point', coordinates: [0, 1] }
        point.type = <"Point">'foo'
        expect(() => GeoPoint.fromGeoJSON(point)).toThrow("The value of type should be 'Point'")
    });
});
