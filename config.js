// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Jelly',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/JellyPumps',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/2/#inbox',
    },
    {
      id: '3',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '4',
      name: 'TranscribersOfReddit',
      icon: 'trello',
      link: 'https://reddit.com/r/TranscribersOfReddit',
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Feel Good inc. Radio',
        link: 'https://open.spotify.com/playlist/37i9dQZF1E8GJRbsFHwpXF',
      },
      {
        name: 'Sweater Weather Radio',
        link: 'https://open.spotify.com/playlist/37i9dQZF1E8zAgzJXDi5Wo',
      },
      {
        name: 'Black Rover Radio',
        link: 'https://open.spotify.com/playlist/37i9dQZF1E8zKwjYTZ0jpW',
      },
    ],
    secondList: [
      {
        name: 'Reverso Context',
        link: 'https://context.reverso.net/translation/',
      },
      {
        name: 'UptimeBot',
        link: 'https://uptimerobot.com/dashboard#789471433',
      },
      {
        name: 'Kaffine',
        link: 'https://kaffeine.herokuapp.com/',
      },
      {
        name: '小説を読もう！ || 小説ランキング',
        link: 'https://yomou.syosetu.com/rank/top/',
      },
      {
        name: 'Wanikani',
        link: 'https://www.wanikani.com/lesson/session' 
      },
    ],
  },
};
