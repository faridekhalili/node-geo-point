import { expect } from '@jest/globals';
import { Point, GeoPoint, LatLng } from './geo-point';

describe('Augmented tests', () => {
    it('Sample 1', () => {
        /**
         * StringLiteral
         * src/geo-point.ts:65:27
         * -         throw new TypeError('Object must have type and coordinates');
         * +         throw new TypeError("");
         */
        const point: Point = { type: 'Point', coordinates: [0, 1] }
        delete point.type
        expect(() => GeoPoint.fromGeoJSON(point)).toThrow('Object must have type and coordinates')
    });
});
