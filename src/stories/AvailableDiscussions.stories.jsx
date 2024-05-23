// AvailableDiscussions.stories.jsx

import React from 'react';
import AvailableDiscussions from '../components/AvailableDiscussions';

const stories = {
  title: 'AvailableDiscussions',
  component: AvailableDiscussions,
};

export default stories;

function TemplateStory(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AvailableDiscussions {...args} />;
}

const WithTypeBrown = TemplateStory.bind({});
WithTypeBrown.args = {
  content: 'for StoryBook',
  type: 'brown',
};

const WithTypeBlue = TemplateStory.bind({});
WithTypeBlue.args = {
  content: 'for StoryBook',
  type: 'blue',
};

export { WithTypeBrown, WithTypeBlue };
