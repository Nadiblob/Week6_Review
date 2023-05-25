/***
 * Selected countries with populations in millions
 ***/

const countries = [
    { name: 'Brazil', capital: 'Brasília', population: 216 },
    { name: 'Cuba', capital: 'Havana', population: 11 },
    { name: 'Germany', capital: 'Berlin', population: 83 },
    { name: 'Jamaica', capital: 'Kingston', population: 3 },
    { name: 'Malaysia', capital: 'Kuala Lumpur', population: 34 },
    { name: 'Mexico', capital: 'Mexico City', population: 128 },
    { name: 'Nigeria', capital: 'Abuja', population: 224 },
    { name: 'Poland', capital: 'Warsaw', population: 41 },
    { name: 'Portugal', capital: 'Lisbon', population: 10 },
    { name: 'South Africa', capital: 'Pretoria', population: 60 },
    { name: 'Spain', capital: 'Madrid', population: 48 },
    { name: 'United States', capital: 'Washington, DC', population: 340 },
    { name: 'Vietnam', capital: 'Hanoi', population: 99 }
];



/***
 * #1
 * Return the sum of the populations of the first 'count' countries in the array above.
 ***/

function sumSomePops(count) {
    return 0;  // FIX ME
}



/***
 * #2
 * Find all countries with populations of at least 100 million.
 * Return an array of strings in this format:
 * "Brazil has a population of 216 million"
 ***/

function bigCountries() {
    return [];  // FIX ME
}



/***
 * ¡Bonus!
 * Copy/paste the lines from your bigCountries() solution into bigCountriesSorted().
 * Can you sort the countries from highest to lowest population?
 * Hint: Do a web search for: javascript sort
 ***/

function bigCountriesSorted() {
    return [];  // FIX ME
}



module.exports = {
    bigCountries,
    bigCountriesSorted,
    sumSomePops
}