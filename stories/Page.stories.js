import React from 'react';
import { Page } from '../src/components/Page/Page';
import imageFeature from  './assets/static/call-of-duty.jpg';
import imageAuthor from  './assets/static/andrew_circle.png';

export default {
    title: "Template/Page",
    component: Page,
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

const featureImage = {
    src: imageFeature,
    alt: 'media',
    caption: 'Source: Getty Images'
};

const authorImage = {
    src: imageAuthor,
    alt: 'media',
    caption: 'Source: Getty Images'
}

const mockArticleData = {
    publishDate: "23 Oct",
    featuredImage: featureImage,
    title: 'Football Ramble & Betway: Safer Gambling Week special',
    content: `<p>We had started upping Kameko’s work in March to get him ready for a trial in April before heading to the 2000 Guineas, but it soon became apparent those races wouldn’t be happening on the scheduled dates.<p>
    <p>It’s tough to prepare a horse for a race when you don’t know when that race is going to happen, so it was just a case of ticking him over. The racecourse gallop he got at Kempton Park put him spot on and was a huge help in getting him to Newmarket in the best shape.</p>
    <p>Winning a Classic is one of the biggest feats for a trainer in the UK. It was an amazing experience, despite being unable to hug Marie and Simon (our team on the day) or congratulate Oisin from a distance of less than two metres.</p>
    <p><strong>Royal Ascot</strong></p>
    <p>Royal Ascot was a mixed bag for us. Alounak ran a corker to finish second in the Hardwicke Stakes, which was arguably his best run of the season. Berlin Tango, Berkshire Rocco and Symbolize were all placed, but I can’t help feeling the first two were a tad unlucky.</p>
    <p>But that’s racing on the biggest stage – the finest of margins define victory and defeat.</p>
    <p>Without doubt, the highlight of the week was <strong>Tactical</strong> winning the Windsor Castle Stakes for Her Majesty The Queen. We thought he had the potential to go close, but he did it in such terrific style that it was very satisfying for us and Her Majesty, who, appropriately, enjoyed watching the race from Windsor Castle.</p>`,
    teaser: 'Luke Moore and Jim Campbell sit down with Betway\'s Alan Alger to discuss the importance of Safer Gambling Week and how we can all gamble more responsibly.',
    category: {
        name: "Accumulator",
        url: "http://google.com"
    }, 
    author: {
        image: authorImage,
        name: 'Andrew Balding',
        url: 'http://youtube.com',
        social: [
            {
                handle: '@AndrewBalding2',
                type: 'TWITTER',
                url: 'https://twitter.com/AndrewBalding2',

            }
        ],
        content: 'Multiple Group 1 and Classic-winning Flat trainer who has amassed over 250 wins across the last two seasons.'
    },
    tags: {
        title: 'tags',
        tags: [
            {
                name: 'Premier league',
                url: 'www.youtube.com'
            },
            {
                name: 'Arsenal',
                url: 'www.youtube.com'
            },
            {
                name: 'Manchester united',
                url: 'www.youtube.com'
            },
            {
                name: 'Tottenham',
                url: 'www.youtube.com'
            }
        ]
    } ,
    relatedArticles: {
        title: 'related articles',
        boxshadow: false,
        backgroundColor: 'transparent',
        with: '100%',
        hoverColor: 'rgba(68,68,68,.2)',
        articles: [
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
    } 
}

const Template = (args) =>  <Page {...args} />;

export const SinglePage = Template.bind({});

SinglePage.args = {...mockArticleData}