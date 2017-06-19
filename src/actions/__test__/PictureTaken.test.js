import { pictureTaken } from '../index';

describe('tests pictureTaken action', () => {
  it('returns the pictureUrl whe a picture is been taken', () => {
    const url = 'https://www.qpm.ca/wp-content/uploads/2012/07/default-avatar-tech-guy.png';
    const expectedActions = {
      type: 'PICTURE_TAKEN',
      payload: url
    };
    expect(pictureTaken(url)).toEqual(expectedActions);
  });
});
