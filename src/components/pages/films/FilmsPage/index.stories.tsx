import React from 'react';
import { withPageWrapper, withCurrentPathProvider } from 'utils/decorators';
import { films } from 'schema/mockedData';
import FilmsPage from './index';
import { FilmListQuery } from 'typings/graphql/build';

export default {
  title: 'Pages/films/Films list page',
  component: FilmsPage,
  decorators: [withPageWrapper, withCurrentPathProvider({ path: '/films' })],
};

// Mock data.
const data: FilmListQuery = {
  api: {
    allFilms: films.map((film) => ({
      id: `${film.id}`,
      title: `${film.title}`,
    })),
  },
};

export const Default = () => <FilmsPage data={data} />;
