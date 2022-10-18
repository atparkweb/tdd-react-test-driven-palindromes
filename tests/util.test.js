const { normalize, reverse } = require('../util');

describe('normalize()', () => {
  it('removes spaces', () => {
    expect(normalize('hello world')).toBe('helloworld');
  });

  it('removes punctuation', () => {
    expect(normalize('!hi,my,name:is?andy')).toBe('himynameisandy');
  });

  it('ignores case', () => {
    expect(normalize('WoWtHisIsHardtoRead')).toBe('wowthisishardtoread');
  });
});

describe('reverse()', () => {
  it('reverses a string', () => {
    expect(reverse('This is a test')).toBe('tset a si sihT');
  });
});
