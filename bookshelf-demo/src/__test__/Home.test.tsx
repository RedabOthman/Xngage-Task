import React from 'react';
import { render, screen, within} from '@testing-library/react';
import App from '../App';

jest.mock('../../public/data/categories/fiction.json', () => ({
  books: [
    {
      id: 1,
      image: '/images/books1.jpg',
      title: 'Maecenas',
      author: 'Vestibulum turpis',
      reviewedBy: 'Etiam feugiat',
    },
    {
      id: 2,
      image: '/images/books2.jpg',
      title: 'Nam',
      author: 'Fusce vulputate',
      reviewedBy: 'Nunc nec',
    },
  ],
}));

const mockCategories = {
  categories: [
    {
      id: 1,
      image: '/images/category1.png',
      title: 'Aenean',
      description: 'Mauris sollicitudin fermentum libero.',
    },
    {
      id: 2,
      image: '/images/category2.png',
      title: 'Donec posuere',
      description: 'Aenean vulputate eleifend tellus.',
    },
  ],
};

beforeEach(() => {
  window.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockCategories),
    } as Response)
  );
  render(<App />);
});

test('renders header links', () => {
  expect(screen.getByAltText(/Bookshelf Logo/i)).toBeInTheDocument();
  const headerElement = screen.getByLabelText(/Main navigation/i);
  expect(within(headerElement).getByText(/Home/i)).toBeInTheDocument();
  expect(within(headerElement).getByText(/Books/i)).toBeInTheDocument();
  expect(within(headerElement).getByText(/Reviews/i)).toBeInTheDocument();
  expect(within(headerElement).getByText(/New/i)).toBeInTheDocument();
});

test('renders Footer sections', () => {
  expect(screen.getByText(/^Navigation$/i)).toBeInTheDocument();
  expect(screen.getByText(/^Categories$/i)).toBeInTheDocument();
  expect(screen.getByText(/^Follow Us$/i)).toBeInTheDocument();
});

test('renders browse category from fetched data', async () => {
  expect(await screen.findByText(/^Our Most Popular Categories$/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Aenean/i)).toBeInTheDocument();
  expect(await screen.findByText(/^Aenean$/i)).toBeInTheDocument();
  expect(await screen.findByText(/^Donec posuere$/i)).toBeInTheDocument();
  expect(await screen.findByText(/^Mauris sollicitudin fermentum libero\.$/i)).toBeInTheDocument();
  expect(await screen.findByText(/^Aenean vulputate eleifend tellus\.$/i)).toBeInTheDocument();
});

test('renders carousel with Fiction category and its books', async () => {
  expect(await screen.findByRole('heading', { name: /^Fiction$/i })).toBeInTheDocument();
});
