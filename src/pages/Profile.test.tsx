import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Profile from './Profile';

describe('Profile', () => {
    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    );

    it('It must render the table on the page', () => {
        expect(screen.getByRole('table')).toBeInTheDocument();
    })
})