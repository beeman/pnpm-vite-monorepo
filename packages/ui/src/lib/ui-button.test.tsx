import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest';
import {UiButton} from './ui-button';

test('Button should be rendered', () => {
    render(<UiButton>Hello</UiButton>);

    expect(screen.getByText(/Hello/)).toBeInTheDocument();
});