import React from 'react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';


export default {
    title: 'Welcome',
    component: Welcome,
}

export const ToStoryBook = () => <Welcome showApp={linkTo('Button')} />;


ToStoryBook.story = {
    name: 'to Storybook'
};