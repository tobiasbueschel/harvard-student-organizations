import uniqueRandomArray from 'unique-random-array'
import harvardStudentOrganizations from './harvard-student-organizations.json'

const getRandomStudentOrganization = uniqueRandomArray(harvardStudentOrganizations)

const random = number => {
  if (number === undefined) {
    return getRandomStudentOrganization()
  } else {
    const getRandomStudentOrganizations = []
    for (let i = 0; i < number; i++) {
      getRandomStudentOrganizations.push(getRandomStudentOrganization())
    }
    return getRandomStudentOrganizations
  }
}

module.exports = {
  all: harvardStudentOrganizations,
  random
}
