import React from 'react';
import { SideBar } from '../src/components/SideBar/SideBar';
import { Card } from '../src/components/Card/Card';

export default {
    title: "Components/SideBar",
    component: SideBar,
    parameters: {
        backgrounds: {
          values: [
            {name: 'blog', value: '#efefef'},
            {name: 'white', value: 'white'},
            {name: 'black', value: 'black'}
          ]
        },
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const mockCards = [
    {
        title: "Kings XI Punjab vs Rajasthan Royals betting tips & predictions",
        teaser: "Kings XI Punjab vs Rajasthan Royals betting tips & predictions", 
        category: {
            name: "IPL",
            url: "http://google.com"
        }, 
        author: {
            name: "Adam Drury",
            url: "http://youtube.com"
        },
        appearance: "default",
        boxshadow: true,
        icon: "quiz"
    },
    {
        title: "Saturday Betting Guide: Our writers' 10 best football tips",
        teaser: "Saturday Betting Guide: Our writers' 10 best football tips", 
        category: {
            name: "Accumulator",
            url: "http://google.com"
        }, 
        author: {
            name: "Adam Drury",
            url: "http://youtube.com"
        },
        appearance: "default",
        boxshadow: true,
        icon: "quiz"
    },
    {
        title: "The 10 most expensive players in the 2020 IPL auction",
        teaser: "The 10 most expensive players in the 2020 IPL auction", 
        category: {
            name: "IPL",
            url: "http://google.com"
        }, 
        author: {
            name: "Adam Drury",
            url: "http://youtube.com"
        },
        appearance: "default",
        boxshadow: true,
        icon: "quiz"
    },
    {
        title: "Don't Speculate: 5 football tips for Saturday's matches",
        teaser: "Don't Speculate: 5 football tips for Saturday's matches", 
        category: {
            name: "Accumulator",
            url: "http://google.com"
        }, 
        author: {
            name: "Adam Drury",
            url: "http://youtube.com"
        },
        appearance: "default",
        boxshadow: true,
        icon: "quiz"
    }
]

const Template = (args) => (
    <SideBar {...args}>
        {mockCards.map(({title, teaser, category, author, appearance, boxshadow, icon}) => {
            return (
                <Card
                    title={title}
                    teaser={teaser}
                    category={category}
                    author= {author}
                    appearance="mini"
                    boxshadow={false}
                    icon={null}
                    backgroundColor="transparent"
                />
            )
        })}
    </SideBar>
);

export const MostRead = Template.bind({});

MostRead.args = {
    title: "most read",
}