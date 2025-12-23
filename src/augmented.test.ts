import { expect } from '@jest/globals';
import { GeoPoint } from './geo-point';

it('Sample 4 (fixed)', () => {
    /**
     * ConditionalExpression
     * src/geo-point.ts:38:41
     * -       if (typeof latitude !== 'number' || typeof longitude !== 'number') {
     * +       if (typeof latitude !== 'number' || false) {
     */
    expect(() => new GeoPoint(1, <any>'east')).toThrow('Bad geo point arguments');
});
