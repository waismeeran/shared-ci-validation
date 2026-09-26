import test from 'node:test';
import assert from 'node:assert/strict';
import { add } from './index.mjs';

test('adds two values', () => {
  assert.equal(add(2, 3), 5);
});
