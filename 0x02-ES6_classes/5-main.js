import Building from './5-building.js';

const b = new Building(200);
console.log(b.sqft);

class TestBuilding extends Building {}

try {
    const test = new TestBuilding(200)
}
catch(err) {
    console.log(err);
}
