import { FirstLetterUpperPipe } from './first-letter-upper.pipe';

describe('FirstLetterUpperPipe', () => {
  let pipe: FirstLetterUpperPipe;

  beforeEach(() => {
    pipe = new FirstLetterUpperPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should upper the first letter', () => {
    expect(pipe.transform('test')).toBe('Test');
  });
});
