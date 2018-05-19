import { PortfolioTexts } from '../consts';

const INITIAL_STATE = {
  homeTitle: 'I\'m Vadym Lytvyn',
  homeText: 'I want to start a career in IT with the ability to demonstrate their knowledge and gain new ones. I love programming (C#, java). Like to solve interesting problems. I love to read books on programming. Let\'s start scrolling and learn more about me.',
  socialLinks: [
    'https://www.linkedin.com/in/vadym-lytvyn/',
    'https://plus.google.com/u/0/+VadimLytvin',
    'https://vk.com/lytvin',
    'https://github.com/VadyaVL',
  ],
  resumeContent: [
    {
      name: 'Education',
      type: 1,
      content: [
        {
          title: 'National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"',
          dateParagraphs: [
            {
              text: 'Bachelor of programming engineering',
              date: '2012 - 2016',
            },
            {
              text: 'Master of programming engineering',
              date: '2016 - 2017',
            },
          ],
          paragraphs: [
            'At NTUU "KPI" I study at the Computer Systems Software Department of the Faculty of Applied Mathematics. The faculty I learned some programming languages (C / C ++, C #, java, python) and some technologies, knowledge of OOP, design patterns, different life cycles of software and technology development programs. Got some teamwork skills learned something about the methodology SCRUM. I am satisfied with their place of study. The teachers tried to teach us that we need in the real world.',
          ],
        },
      ],
    },
    {
      name: 'Work',
      type: 1,
      content: [
        {
          title: 'Freelancehunt',
          dateParagraphs: [
            {
              text: 'Freelancer',
              date: 'November 2015 - December 2017',
            },
          ],
          paragraphs: [
            'Engaged in the development of programs related to encryption, neural networks, mathematical calculations, and corporate information systems and some web applications.',
            'Languages/technologies/tools used: C/C++, java, swing, Apache POI, JmonkeyEngine, C#, Windows Forms, MySQL, SQlite, python, django, Bootstrap and Foundation, REST API and etc.',
          ],
        },
        {
          title: 'Управління комп\'ютеризованих систем Апарату Верховної Ради України',
          dateParagraphs: [
            {
              text: 'Web developer',
              date: 'May 2016',
            },
          ],
          paragraphs: [
            'This was university practice.',
            'Languages/technologies/tools used: php, kohana framework, Bootstrap and Foundation, JavaScript, API (VK, Facebook and Google)',
          ],
        },
        {
          title: 'WORLD DATA CENTER FOR GEOINFORMATICS AND SUSTAINABLE DEVELOPMENT',
          dateParagraphs: [
            {
              text: '.Net Developer',
              date: 'July, November, December 2015',
            },
          ],
          paragraphs: [
            'This was university practice.',
            'Languages/technologies/tools used: Microsoft .NET Framework 4.5, Windows Forms, C#, SQLite, DocX library. Developing software for Kiev Geophysical Laboratory.',
          ],
        },
      ],
    },
    {
      name: 'Skills',
      type: 2,
      content: [
        { name: 'Knowledge of .NET, Windows Forms, MVC, C#', value: 0 },
        { name: 'Knowledge of C/C++, java and some related technologies', value: 0 },
        { name: 'Databases: MySQL, SQLite, neo4j, some other...', value: 0 },
        { name: 'Revision control system: Git', value: 0 },
        { name: 'UNDERSTANDING OF OOP AND DESIGN PATTERNS', value: 0 },
        { name: 'Understanding of Scrum', value: 0 },
        { name: 'Experience with 3D Editor Blender, Corel Draw, Photoshop ...', value: 0 },
      ],
    },
  ],
};

export default function (
  state = INITIAL_STATE,
  action = { type: '', payload: null }
) {
  switch (action.type) {
    case PortfolioTexts.GET_HOME_TEXT:
      // get data from file, maybe use saga
      return state.merge(fromJS({ showDatabaseDialog: action.payload.show }));
    default:
      return state;
  }
}
