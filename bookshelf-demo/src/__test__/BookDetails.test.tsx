import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookDetails from '../pages/BookDetails';

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({
        id: 1,
        title: 'Maecenas',
        author: 'Vestibulum turpis',
        reviewedBy: 'John Doe',
        publishedOn: '2023-01-01',
        description: 'Ut leo. Aenean imperdiet.',
        image: '/images/books1.jpg',
      }),
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('BookDetails Component', () => {
  test('renders loading state initially', () => {
    render(
      <MemoryRouter initialEntries={['/book/1']}>
        <BookDetails />
      </MemoryRouter>
    );
    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders book details after loading', async () => {
    render(
      <MemoryRouter initialEntries={['/book/1']}>
        <BookDetails />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText(/Book Title: Maecenas/i));

    const title = screen.getByText(/Book Title: Maecenas/i);
    const author = screen.getByText(/Vestibulum turpis/i);
    const reviewedBy = screen.getByText(/John Doe/i);
    const publishOn = screen.getByText(/2023-01-01/i);
    const description = screen.getByText(/Ut leo. Aenean imperdiet./i);
    const image = screen.getByAltText(/Maecenas/i);


    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(reviewedBy).toBeInTheDocument();
    expect(publishOn).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
