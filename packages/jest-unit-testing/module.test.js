import mut from './module.js';

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 2;
  const got = mut.div(12, 6);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = Infinity;
  const got = mut.div(12, 0);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const got = mut.div(0, 0);
  expect(got).toBeNaN();
});

test('Testing div -- success', () => {
  const expected = -2;
  const got = mut.div(12, -6);
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("sixseven67");
  expect(got).toBeTruthy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("sixseven");
  expect(got).toBeFalsy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("6");
  expect(got).toBeTruthy();
});

//Catches error
test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers(" ");
  expect(got).toBeFalsy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("      8   ");
  expect(got).toBeTruthy();
});