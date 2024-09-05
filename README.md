Demonstration of issue with chai-datetime when upgrading chai to v5

If running chai 4.5.0

`npm run test`

the test passes

If chai is 5.1.1 (or any version from 5.0 upwards)

`npm run test`

fails with

```
 FAIL  test/datetime.test.js [ test/datetime.test.js ]
TypeError: Cannot read properties of undefined (reading 'use')
 ❯ test/datetime.test.js:5:6
      3| import chaiDate from 'chai-datetime';
      4|
      5| chai.use(chaiDate);
       |      ^
      6|
      7| test('test equalDate', () => {
```
