
import member from './images/cnsrvit_member.png'
import tablebooking from './images/tablebooking.png'
import flashcards from './images/flash_cards.png'
import memory from './images/memory.png'
import leopold from './images/leopold_work.png'

const featureProjects = [
  {
    id: 1,
    title: 'Project Leopold',
    imageUrl: leopold,
    description: `Enterprise level Vue application to manage internal business solutions. This project
    connects with a Ruby on Rails backend. On the backend I worked on services and reports for the company.
    It was great to think of Rails in a different way as an api only backend. On the client side, I worked on
    authentication and authorization, writing the axios calls inside of vuex, and worked with a front end specialist
    on the UI/UX of the application.
    `,
    subTitle: 'Enterprised sized Vue Application',
  },
  {
    id: 2,
    title: 'CNSRVIT',
    imageUrl: member,
    description: `Developed <em>Ruby on Rails solutions for project management, invoicing, 
                member management. I worked on the state machine to help manage the status
                of objects such as projects, invoices, and users. I also spent time writing 
                services to generate report data, services to perform complex business logic,
                and some guards and validations to protect the integrity of user input data. 
                `,
    subTitle: 'Full Stack Rails Web Suite',
  },
  {
    id: 3,
    title: 'TableBooking App',
    imageUrl: tablebooking,
    subTitle: 'Rails + React Proof of Concept',
    description: `
        Worked with a small team from Dev Point Labs to create a table booking 
        proof of concept utilizing React, Redux, & Rails. It was a great beta project that utilized
        Devise and React Router to manage auth. It was when I first started by love-hate relationship with 
        redux and the flux pattern. 
        `,
    link: 'https://tablebooking-dpl.herokuapp.com/',
  },
  {
    id: 4,
    title: 'React Flash Cards',
    imageUrl: flashcards,
    subTitle: 'Rails + React App',
    description: `
        I created a fun little Flash Card app utilizing Rails & React with Semantic UI.
        It may take a fews seconds to load the cards because the backend is hosted on Heroku and
        I am too cheap to get off the free tier for a toy app. Also don't hold me responsible fot the
        content of the cards. It is open to the internet and anyone can edit.
    `,
    link: 'https://rails-react-flashcards.herokuapp.com/',
  },
  {
    id: 5,
    title: 'Drag Queen Memory Game',
    imageUrl: memory,
    subTitle: 'Vue App',
    description:
      `I decided to make a Drag Queen Memory Game with Vue. 
      Because... why not? The world needed this. 
      It is just a funny little thing to play when you have that awkward amount of time.
      It is best viewed on your phone, while you are awkwardly waiting for your best friend
      to meet up with you at the bar. But anyways, the 
      fun thing about this project is that it focused on something Vue is strong at, transitions and state management.`,
    link: 'https://memory.pohlfolio.com/',
  },
]

export default featureProjects
