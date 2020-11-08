import React from 'react';
import ReactDOM from 'react-dom';
import { Tag } from './components/Tag/Tag';

it('render tag', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Tag tagName="Premier league" />,
        div
    );

    expect(div.querySelector('a > span').textContent).toEqual('Premier league');
})