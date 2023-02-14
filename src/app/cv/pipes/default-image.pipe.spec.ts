import { DefaultImagePipe } from './default-image.pipe';
import { CONSTANTES } from '../../../config/const.config';

fdescribe('DefaultImagePipe', () => {
  let pipe: DefaultImagePipe;
  beforeEach(() => {
    pipe = new DefaultImagePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return the same path when path is not empty string neither string with only spaces', () => {
    expect(pipe.transform('test')).toContain('test');
  });
  it('should return default Path when path is empty string', () => {
    expect(pipe.transform('')).toContain(CONSTANTES.defaultImage);
  });
  it('should return default Path when path contains only spaces', () => {
    expect(pipe.transform('     ')).toContain(CONSTANTES.defaultImage);
  });
});
