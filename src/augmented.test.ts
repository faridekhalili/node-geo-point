import chai, { expect } from 'chai';
import { Point, GeoPoint, LatLng } from './geo-point';
chai.should();

describe('Augmented tests', () => {
    it('Sample 1', () => {
        /**
         * StringLiteral
         * src/geo-point.ts:65:27
         * -         throw new TypeError('Object must have type and coordinates');
         * +         throw new TypeError(\"\");
         */
        const point: Point = { type: 'Point', coordinates: [0, 1] }
        delete point.type
        try {
            GeoPoint.fromGeoJSON(point)
            chai.assert.fail('Expected error never thrown');
        } catch (error) {
            error.message.should.equals('Object must have type and coordinates')
        }
    });

    it('Sample 2', () => {
        /**
         * ArithmeticOperator
         * src/geo-point.ts:155:15
         * -       const y = sin\u03b8 * sin\u03b4 * cos\u03c61;
         * +       const y = sin\u03b8 * sin\u03b4 / cos\u03c61;
         */
        GeoPoint.calculateDestination(
            { latitude: 0.5, longitude: 0.5 },
            30,
            30
        ).should.deep.equals(new GeoPoint(0.5002336506056834, 0.5001349033824454))
    });

    it('Sample 3', () => {
        /**
         * StringLiteral
         * src/geo-point.ts:86:27
         * -         throw new TypeError('GeoPoint: Argument must be an object');
         * +         throw new TypeError(\"\");
         */
        const o = <LatLng><unknown>'a'
        try {
            GeoPoint.fromObject(o)
            chai.assert.fail('Expected error never thrown');
        } catch (error) {
            error.message.should.equals('GeoPoint: Argument must be an object');
        }
    });

    it('Sample 4', () => {
        /**
         * ConditionalExpression
         * src/geo-point.ts:38:41
         * -       if (typeof latitude !== 'number' || typeof longitude !== 'number') {
         * +       if (typeof latitude !== 'number' || false) {
         */
        try {
            const gp = new GeoPoint(<number><unknown>'foo', 3);
            chai.assert.fail('Expected error never thrown');
        } catch (error) {
            error.message.should.equals('Bad geo point arguments');
        }
    });

    it('Sample 5', () => {
        /**
         * StringLiteral
         * src/geo-point.ts:47:28
         * -         throw new RangeError('bad longitude value');
         * +         throw new RangeError(\"\");
         */
        try {
            const gp = new GeoPoint(0, 181)
            chai.assert.fail('Expected error never thrown');
        } catch (error) {
            error.message.should.equals('bad longitude value')
        }
    });

    it('Sample 6', () => {
        /**
         * StringLiteral
         * src/geo-point.ts:69:27
         * -         throw new TypeError('The value of type should be \\'Point\\'');
         * +         throw new TypeError(\"\");
         */
        const point: Point = { type: 'Point', coordinates: [0, 1] }
        point.type = <"Point">'foo'
        try {
            GeoPoint.fromGeoJSON(point)
            chai.assert.fail('Expected error never thrown');
        } catch (error) {
            error.message.should.equals('The value of type should be \'Point\'')
        }
    });

    it('Sample 7', () => {
        /**
         * ArithmeticOperator
         * src/geo-point.ts:153:19
         * -       const sin\u03c62 = sin\u03c61 * cos\u03b4 + cos\u03c61 * sin\u03b4 * cos\u03b8;
         * +       const sin\u03c62 = sin\u03c61 * cos\u03b4 - cos\u03c61 * sin\u03b4 * cos\u03b8;
         */
        GeoPoint.calculateDestination(
            { latitude: 0.5, longitude: 0.5 },
            30,
            30
        ).should.deep.equals(new GeoPoint(0.5002336506056834, 0.5001349033824454))
    });

    it('Sample 8', () => {
        /**
         * BlockStatement
         * src/geo-point.ts:85:28
         * -       if (!isObject(object)) {
         * -         throw new TypeError('GeoPoint: Argument must be an object');
         * -       }
         * +       if (!isObject(object)) {}
         */
        const o = <LatLng><unknown>'a'
        try {
            GeoPoint.fromObject(o)
            chai.assert.fail('Expected error never thrown');
        } catch (error) {
            error.message.should.equals('GeoPoint: Argument must be an object');
        }
    });

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
        gp.calculateDistance(other).should.equals(111201.78397336556)
    });
    
    it('Sample 10', () => {
        /**
         * ConditionalExpression
         * src/geo-point.ts:46:9
         * -       if (longitude < -180 || longitude > 180) {
         * +       if (false) {
         */
        try {
            const gp = new GeoPoint(0, 181)
            chai.assert.fail('Expected error never thrown');
        } catch (error) {
            error.message.should.equals('bad longitude value')
        }
    })
});