import TrailBlazer from './images/TrailBlazer.png'
import Drama from './images/Drama.png'
import Portfolio from './images/Portfolio.png'
import TaskMinder from './images/TaskMinder.png'

export const projects = [
    {
        id: '0',
        title: 'TrailBlazer',
        description: 'TrailBlazer is a game project that was created for the French "Trophées NSI" contest. <br />Coded entirely in Python, TraiBlazer is a 2D racing game in a top-down view. You\'re able to create your own circuits to drive onto.',
        image: TrailBlazer,
        tags: ['Python'],
    },
    {
        id: '1',
        title: 'Drama club website',
        description: 'I made this website for a drama club assignment. It is coded in the classic web languages (HTML, JavaScript, CSS). I plan on improving it soon.',
        image: Drama,
        tags: ['Classic web'],
    },
    {
        id: '2',
        title: 'This Portfolio',
        description: 'I set myself a challenge when developping this portfolio. I gave myself one week to learn how to use react and I coded the entire page with it. I learned a lot with this experiment, and I can\'t wait to learn more.',
        image: Portfolio,
        tags: ['Classic web', 'ReactJS', 'Node.js'],
    },
    {
        id: '3',
        title: 'TaskMinder',
        description: 'This project was created for my CS class. This was started as an experiment with PHP and CSV files, but quickly became more. For the first time, I planned the website\'s design ahead.',
        image: TaskMinder,
        tags: ['Classic web', 'PHP'],
    },
]