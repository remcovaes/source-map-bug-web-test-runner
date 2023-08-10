import { expect } from '@open-wc/testing';
import { multiply } from '../dist/index.js';

describe('myFunction', () => {
	for (let i = 0; i < 200; i++) {
		it('adds two numbers together' + i, () => {
			expect(multiply(1, 1)).to.equal(1);
		});
	}
});
