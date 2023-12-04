import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
    const mockData = [
      {
        tech: 'React',
        type: 'Frontend',
      },
      {
        tech: 'Angular',
        type: 'Frontend',
      },
      {
        tech: 'Node',
        type: 'Backend',
      },
    ];

    const theadRowLength = 1;
    it('It must show the tables items', () => {

        render(<Table data={mockData} />)
        expect(screen.getAllByRole('row')).toHaveLength(theadRowLength + mockData.length);
    })

    it('It must render the table if data is undefined', () => {
        render(<Table />)

        expect(screen.getAllByRole('row')).toHaveLength(theadRowLength);
    })
})