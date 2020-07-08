import React from 'react';
import { graphql } from 'gatsby';
import FilmTemplate from 'components/pages/films/FilmTemplate';
import withPageWrapper from 'hocs/withPageWrapper';

// By exporting this query, we tell Gatsby to execute it with the context
// variables provided as arguments and to fill it with the query result.
// https://www.gatsbyjs.org/docs/page-query/
export const FilmQuery = graphql`
  query FilmQuery($id: ID!) {
    api {
      film: Film(id: $id) {
        id
        title
        episodeId
        characters {
          id
          name
        }
      }
    }
  }
`;

const Page: React.FC<{
  data: {
    api: {
      film: {
        id: string;
        title: string;
        episodeId: string;
        characters: {
          id: string;
          name: string;
        }[];
      };
    };
  };
}> = ({ data }) => <FilmTemplate film={data.api.film} />;

export default withPageWrapper(Page);
