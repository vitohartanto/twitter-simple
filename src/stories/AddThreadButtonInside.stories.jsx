// AddThreadButton.stories.jsx

import React from 'react';
import AddThreadButtonInside from '../components/AddThreadButtonInside';

const stories = {
  title: 'AddThreadButtonInside',
  component: AddThreadButtonInside,
};

export default stories;

function TemplateStory(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AddThreadButtonInside {...args} />;
}

const Model1 = TemplateStory.bind({});
Model1.args = {
  content: '',
  type: 'Model1',
};

const Model2 = TemplateStory.bind({});
Model2.args = {
  content: '',
  type: 'Model2',
};

export { Model1, Model2 };
