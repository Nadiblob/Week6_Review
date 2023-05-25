const { bigCountries,bigCountriesSorted, sumSomePops } = require('../src/hofs');



describe('HOFs', () => {
    describe('sumSomePops()', () => {
        test('computes correct sum', () => {
            expect( sumSomePops(1) ).toBe(216);
            expect( sumSomePops(5) ).toBe(347);
            expect( sumSomePops(10) ).toBe(810);
        });
    });
    
    describe('bigCountries()', () => {
        test('creates correct strings', () => {
            let answer = [
                'Brazil has a population of 216 million',
                'Mexico has a population of 128 million',
                'Nigeria has a population of 224 million',
                'United States has a population of 340 million'
            ];
            expect( bigCountries() ).toEqual(answer);
        });
    });

    describe('bigCountriesSorted()', () => {
        test('creates correct strings and sorts them', () => {
            let answer = [
                'United States has a population of 340 million',
                'Nigeria has a population of 224 million',
                'Brazil has a population of 216 million',
                'Mexico has a population of 128 million'
              ];
            expect( bigCountriesSorted() ).toEqual(answer);
        });
    });
});