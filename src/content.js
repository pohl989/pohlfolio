
import member from './images/cnsrvit_member.png'
import tablebooking from './images/tablebooking.png'
import flashcards from './images/flash_cards.png'
import memory from './images/memory.png'
import leopold from './images/leopold_work.png'

export const featuredProjects = [
  {
    id: 1,
    title: 'Project Leopold',
    imageUrl: leopold,
    description: `Enterprise level <strong>Vue</strong> application to manage internal business solutions. This project
    connects with a <strong>Ruby on Rails</strong> backend. On the backend 
    I worked on <strong>services</strong> and reports for the company.
    It was great to think of Rails in a different way as an <strong>api</strong> only backend. On the client side, I worked on
    <strong>authentication</strong> and <strong>authorization</strong>, 
    writing the http requests via <strong>axios</strong> and <strong>vuex</strong>, and 
    <strong>collaborated</strong> with a front end specialist
    on the UI/UX of the application.
    `,
    subTitle: 'Enterprised sized Vue Application',
  },
  {
    id: 2,
    title: 'CNSRVIT',
    imageUrl: member,
    description: `Developed <strong>Ruby on Rails</strong> solutions for project management, invoicing, 
                member management. I worked on the <strong>state machine</strong> to help manage the status
                of objects such as projects, invoices, and users. I also spent time writing 
                <strong>services</strong> to generate <strong>report data</strong>, services to perform complex business logic,
                and some guards and <strong>validations</strong> to protect the integrity of user input data. 
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
        proof of concept utilizing 
        <strong>React</strong>, <strong>Redux</strong>, & <strong>Rails</strong>. 
        It was a great beta project that utilized
        <strong>Devise</strong> and <strong>React Router</strong> 
        to manage auth. It was when I first started by love-hate relationship with 
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
        I created a fun little Flash Card app utilizing <strong>Rails</strong> & <strong>React</strong> 
        with <strong>Semantic UI</strong>.
        It may take a fews seconds to load the cards because the backend is hosted on <strong>Heroku</strong> and
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
      `I decided to make a Drag Queen Memory Game with <strong>Vue</strong>. 
      Because... why not? The world needed this. 
      It is just a fun little thing to play when you have that awkward amount of time.
      It is best viewed on your <strong>phone</strong>, while you are awkwardly waiting for your best friend
      to meet up with you at the bar. But anyways, the 
      fun thing about this project is that it focused on something Vue is strong at, <strong>transitions</strong> and state management.`,
    link: 'https://memory.pohlfolio.com/',
  },
]


export const aboutMeOne =
    `Hello, I\'m <strong>Ben Pohl</strong>. 
    I\'m a <strong>fullstack Developer</strong>. I love the problem solving aspect of the job. I love a new challenge whether is it 
    on the backend writing a new service, delayed job, or rake task. I also enjoy working on the front end creating 
    a solid component structure, dyanmic form validations, or creating that perfect transition`

export const aboutMeTwo =
    `My current day to day tech stack includes, Ruby on Rails, Vue and React. In my current position I write code for a internal system
    that manages federal contracts, projects, invoices, and members.`


export const roles = [
  'web developer',
  'Rails on Rails guy',
  'problem solver',
  'JavaScript coder',
  'pet parent',
  'React lover',
  'Marvel geek',
  'Vue fanatic',
  'dude who loves to code',
]

