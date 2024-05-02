import * as React from 'react';
import { render } from '@testing-library/react';

import { Users } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Users  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Users />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
