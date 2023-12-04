import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));

describe('Home', () => {

    const username = 'mccartney0'

    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )

    it('It must be redirected to the profile page', () => {
        const input = screen.getByRole('textbox', { name: 'Username'});
        const button = screen.getByRole('button', { name: 'Submit' });

        fireEvent.change(input, {
            target: { value: 'mccartney0' }
        })
        fireEvent.click(button);
        expect(mockedUsedNavigate).toHaveBeenCalledWith(`/${username}`);
    })

    it('It can not redirect user to the profile page if input is empty', () => {
        window.alert = jest.fn();

        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const button = screen.getByRole('button', { name: 'Submit' });
        fireEvent.click(button);
        expect(mockedUsedNavigate).not.toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalled();
    })
})