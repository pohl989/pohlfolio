
import member from './images/cnsrvit_member.png';
import tablebooking from './images/tablebooking.png';
import flashcards from './images/flash_cards.png';
import memory from './images/memory.png';

const featureProjects = [
  {
    id: 1,
    title: 'CNSRVIT',
    imageUrl: member,
    description: 'Developed solutions for project management, invoicing, member management',
    subTitle: 'Full Stack Rails Web Suite',
    link: 'https://cnsrvit.usaconservation.org/',
  },
  {
    id: 2,
    title: 'TableBooking App',
    imageUrl: tablebooking,
    subTitle: 'Rails + React Proof of Concept',
    description: 'Worked with a small team from Dev Point Labs to create a table booking proof of concept utilizing React, Redux, & Rails',
    link: 'https://tablebooking-dpl.herokuapp.com/',
  },
  {
    id: 3,
    title: 'React Flash Cards',
    imageUrl: flashcards,
    subTitle: 'Rails + React App',
    description: 'I created a fun little Flash Card app utilizing Rails & React with Semantic UI.',
    link: 'https://rails-react-flashcards.herokuapp.com/',
  },
  {
    id: 4,
    title: 'Drag Queen Memory Game',
    imageUrl: memory,
    subTitle: 'Vue App',
    description: 'I decided to make a Drag Queen Memory Game with Vue. Because... why not? The world needed this. It is just a funny little thing to play when you have that awkward amount of time.',
    link: 'https://memory.pohlfolio.com/',
  },
];

export default featureProjects;
