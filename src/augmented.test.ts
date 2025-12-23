import { expect } from '@jest/globals';
import { Point, GeoPoint, LatLng } from './geo-point';

describe('Augmented tests', () => {
    it('Sample 2', () => {
        /**
         * ArithmeticOperator
         * src/geo-point.ts:155:15
         * -       const y = sinθ * sinδ * cosφ1;
         * +       const y = sinθ * sinδ / cosφ1;
         --------------------------------------------------------------
         * ArithmeticOperator
         * src/geo-point.ts:153:19
         * -       const sinφ2 = sinφ1 * cosδ + cosφ1 * sinδ * cosθ;
         * +       const sinφ2 = sinφ1 * cosδ - cosφ1 * sinδ * cosθ;
         */
        expect(
            GeoPoint.calculateDestination(
                { latitude: 0.5, longitude: 0.5 },
                30,
                30
            )
        ).toEqual(new GeoPoint(0.5002336506056834, 0.5001349033824454))
    });
});
