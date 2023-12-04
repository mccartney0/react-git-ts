import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));

describe('Home', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )

    it('It must be redirected to the profile page', () => {
        const button = screen.getByRole('button', { name: 'Submit' });
        fireEvent.click(button);
        expect(mockedUsedNavigate).toHaveBeenCalled();
    })
})