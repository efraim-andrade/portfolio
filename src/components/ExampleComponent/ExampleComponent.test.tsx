import React from 'react';
import { render } from '@testing-library/react';

import ExampleComponent from './index';

describe('Components - ExampleComponent', () => {
  it('should be able to render the title', () => {
    const title = 'Meu Titulo';

    const { getByText } = render(<ExampleComponent title={title} />);

    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });
});
