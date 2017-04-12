/* global describe, it */
import {expect} from 'chai'
import harvardStudentOrganizations from './index'

describe('harvard-student-organizations', () => {
  describe('all', () => {
    it('should be an array of objects', () => {
      expect(harvardStudentOrganizations.all).to.satisfy(isArrayOfObjects)

      function isArrayOfObjects (array) {
        return array.every(item => {
          return typeof item === 'object'
        })
      }
    })

    it('should contain `Computer Society (HCS)`', () => {
      const hcs = {
        'name': 'Computer Society (HCS)'
      }
      expect(harvardStudentOrganizations.all).to.include(hcs)
    })
  })

  describe('random', () => {
    it('should return a random item from the harvardStudentOrganizations.all', () => {
      const randomItem = harvardStudentOrganizations.random()
      expect(harvardStudentOrganizations.all).to.include(randomItem)
    })

    it('should return an array of random items if passed a number', () => {
      const randomItems = harvardStudentOrganizations.random(3)
      expect(randomItems).to.have.length(3)
      randomItems.forEach(item => {
        expect(harvardStudentOrganizations.all).to.include(item)
      })
    })
  })
})
