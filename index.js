const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

const courses = [
    {
        id: 1, 
        name: 'Introduction to React Native',
        instructor: 'John Doe', 
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/1172996_0241_5.jpg',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ],
        path: "Introduction_to_React_Native",
    },
    {
        id: 2, 
        name: 'Straightforwardy Learn Front-End Web Development',
        instructor: 'John Doe', 
        description: 'Intuitively understand HTML, CSS, JavaScript, and responsive web design.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://img-b.udemycdn.com/course/240x135/2573128_c209.jpg', 
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ],
        path: "Straightforwardy_Learn_Front-End_Web_Development",
    },
    {
        id: 3, 
        name: 'The Complete React Native + Hooks Course',
        instructor: 'Stephen Grider', 
        description: 'Understand React Native with Hooks, Context, and React Navigation.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/3884864_f631_2.jpg',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ],
        path: "The_Complete_React_Native_+_Hooks_Course",
    },
];

app.get("/", (req, res) => {
    res.json(courses);
});

app.listen(8080, function(){
    console.log("Server started at port 8080");
});