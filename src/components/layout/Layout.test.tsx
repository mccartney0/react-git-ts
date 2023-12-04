import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
    render(
        <BrowserRouter>
            <Layout>
                My app
            </Layout>
        </BrowserRouter>
    )

    it('It must render the My app message', () => {
        const app = screen.getByText('My app');

        expect(app).toBeInTheDocument();
    });
})