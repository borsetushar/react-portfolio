import Image1 from '../../assets/resume.jpg'
import Image2 from '../../assets/flashcard.jpg'
import Image3 from '../../assets/youtube.png'

const data = [
    {
        id: 1,
        category: 'Frontend',
        image: Image1,
        title: "Resume Builder (Frontend)",
        desc : "The Almabetter Resume Builder makes your resume making process easy and simple.",
        demo: 'https://borsetushar.github.io/resume-app/',
        github: 'https://github.com/borsetushar/resume-app.git'
    },

    {
        id: 2,
        category: 'Frontend',
        image: Image2,
        title: "Flashcard Generator (Frontend)",
        desc : "The Flashcard Generator is a web application built using React that allows users to create and manage their own flashcards for studying and learning purposes..",
        demo: 'https://borsetushar.github.io/flashcard-generate-app/',
        github: 'https://github.com/borsetushar/flashcard-generate-app.git'
    },

    {
        id: 3,
        category: 'Backend',
        image: Image3,
        title: "Youtube Subscribers (Backend)",
        desc : "The YouTube Subscribers project is a backend application developed using Node.js and MongoDB. It provides a set of APIs to manage and retrieve subscriber data.",
        // demo: 'https://borsetushar.github.io/flashcard-generate-app/',
        github: 'https://github.com/borsetushar/Youtube-Subscribers.git'
    },
]

export default data;