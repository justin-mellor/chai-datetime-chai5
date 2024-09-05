import { test } from 'vitest';
import chai, { expect } from 'chai';
import chaiDate from 'chai-datetime';

chai.use(chaiDate);

test('test equalDate', () => {
    let date1 = new Date(2024, 9, 5, 11, 0);
    let date2 = new Date(2024, 9, 5, 14, 30);
    let date3 = new Date(2024, 9, 6, 11, 0);

    expect(date1).to.equalDate(date2);
    expect(date1).to.not.equalDate(date3);
});

