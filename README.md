# harvard-student-organizations
[![travis build](https://img.shields.io/travis/tobiasbueschel/harvard-student-organizations.svg?style=flat-square)](https://travis-ci.org/tobiasbueschel/harvard-student-organizations)
[![codecov coverage](https://img.shields.io/codecov/c/github/tobiasbueschel/harvard-student-organizations.svg?style=flat-square)](https://codecov.io/gh/tobiasbueschel/harvard-student-organizations)
[![version](https://img.shields.io/npm/v/harvard-student-organizations.svg?style=flat-square)](http://npm.im/harvard-student-organizations)
[![downloads](https://img.shields.io/npm/dm/harvard-student-organizations.svg?style=flat-square)](http://npm-stat.com/charts.html?package=harvard-student-organizations)
[![MIT License](https://img.shields.io/npm/l/harvard-student-organizations.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## Installation
This package is distributed via [npm](https://www.npmjs.com/package/harvard-student-organizations):
```bash
$ npm install --save harvard-student-organizations
```

## Usage
#### Node.js
```javascript
const studentOrgs = require('harvard-student-organizations');
const allStudentOrgs = studentOrgs.all;
const randomStudentOrg = studentOrgs.random();
const threeRandomStudentOrgs = studentOrgs.random(3);
```

**Response:**
```json
{
  "name": "Computer Society (HCS)"
}
```

#### Browser
```html
<script src="https://unpkg.com/harvard-student-organizations/dist/index.umd.min.js"></script>
```
