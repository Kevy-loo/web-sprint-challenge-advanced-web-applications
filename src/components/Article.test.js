import React from 'react';
import { render, screen } from '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: 'aMqwd', //unique article id
    headline: "test headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00 ', //timestamp of when article was added
    summary: "test summary", //short summary statement of article
    body: "test test"  //paragraph of article text
}

test('renders component without errors', ()=> {
    render(<Article />);
});

test('renders headline, author from the article when passed in through props', ()=> {
});

test('renders "Associated Press" when no author is given', ()=> {
});

test('executes handleDelete when the delete button is pressed', ()=> {
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.