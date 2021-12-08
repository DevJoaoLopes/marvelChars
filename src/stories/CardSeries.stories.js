import React from 'react';
import CardSeries from '../components/CardSeries';


export default {
    title: 'CardSeries',
    component: CardSeries,
}

export const CardStory = () => <CardSeries title="Card component" img="https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/8029/image-not-found.jpg"/>;


CardStory.story = {
    name: 'Card component'
};