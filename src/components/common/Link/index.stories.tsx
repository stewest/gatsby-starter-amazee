import React from 'react';
import { withOneColumn } from 'utils/decorators';
import Link from './index';

export default {
  title: 'Components/Link',
  component: Link,
  decorators: [withOneColumn],
};

export const Default = () => <Link to="/some-url">This is a link</Link>;

export const ToLanguage = () => (
  <Link to="/some-url" toLanguage="de">
    This is a link that will always open to the German language version.
  </Link>
);
