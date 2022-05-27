const findTheOldest = function(people) {
    let getAge = (obj) => {
        let yearOfDeath = obj.yearOfDeath ?? (new Date()).getFullYear();
        let val = yearOfDeath - obj.yearOfBirth;
        return val;
    }

    const oldToYoung = people.sort((a, b) => {
        let ageA = getAge(a);
        let ageB = getAge(b);

        return ageA > ageB ? -1 : 1;
    });

    people.name = oldToYoung[0].name;
    return people;
};

// Do not edit below this line
module.exports = findTheOldest;
