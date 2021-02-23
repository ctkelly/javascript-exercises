function findAge(deathDate, birthDate) {
  let thisYear = new Date().getFullYear();
  return (deathDate || thisYear) - birthDate;
}

let findTheOldest = function(people) {
  return people.reduce((oldest, currentPerson) => {
    let oldestAge = findAge(oldest.yearOfDeath, oldest.yearOfBirth);
    let currentAge = findAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    return oldestAge > currentAge ? oldest : currentPerson;
  })
} 

module.exports = findTheOldest
