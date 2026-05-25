const apiUrl = "https://openacademy-api.herokuapp.com";

const siteMetadata = {
  title: "Clasier Academy",
  author: {
    name: "Clasier",
    summary: "publishing practical training for authors, creators, and book teams.",
  },
  description:
    "Practical courses from Clasier for authors, publishing teams, and creators building books with strategy.",
  siteUrl: "https://clasieracademy.com/",
  language: "en-US",
  social: {
    twitter: "clasierpub",
  },
};

const links = {
  search: "search",
};

const apiLinks = {
  apiLoginUrl: apiUrl + "/login",
  apiSignupUrl: apiUrl + "/signup",
  testsUrl: apiUrl + "/academy/tests",
  getAllCourses: apiUrl + "/academy/courses",
  getItems: apiUrl + "/academy/items/",
};

const socialIcons = [
  {
    id: 0,
    icon: "youtube",
    url: "https://youtube.com/ClasierPub",
  },
  {
    id: 356,
    icon: "facebook",
    url: "https://facebook.com/clasier.pub",
  },
  {
    id: 3,
    icon: "linkedin",
    url: "https://www.linkedin.com/company/clasierpub",
  },
  {
    id: 2,
    icon: "instagram",
    url: "https://instagram.com/clasier.pub",
  },
  {
    id: 4,
    icon: "twitter",
    url: "https://twitter.com/clasierpub",
  },
];

const navbarLinks = [
  { title: "Home", url: "/" },
  { title: "Courses", url: "/courses" },
  { title: "Clasier Publishing", url: "https://pub.clasier.com" },

  // {
  //   title: "Courses",
  //   submenu: [
  //     { title: "Home", url: "/" },
  //     { title: "Courses", url: "/courses" },
  //   ],
  // },
];

const hero = {
  mainTitle: "Learn the systems behind better books.",
  subTitle:
    "Clasier Academy turns publishing experience into practical courses for authors, creators, editors, and book teams.",
  searchPlaceholder: "Search publishing skills",
  VimeoVideoId: "208266874",
};

const allCourses = {
  title: "Courses",
  subTitle:
    "Explore guided lessons across writing, editorial planning, launch strategy, and digital publishing.",
  searchPlaceholder: "Search all courses",
  bestCourses: {
    title: "Featured learning paths",
    subTitle: "Start with the programs most useful to authors and publishing teams.",
  },
  courses: {
    title: "All courses",
    subTitle: "Browse every available Clasier Academy course.",
  },
};

const singleCourse = {
  buttonStartText: "Start learning",
  description: {
    descriptionTitleText: "Course overview",
    contentTitleText: "Course content",
    requiredTitleText: "Before you begin",
    required: [],
  },
};

const popularCourses = {
  title: "Popular courses",
  subTitle: "Practical training for turning ideas, drafts, and expertise into stronger books.",
};

const search = {
  title: "Search results",
  searchPlaceholder: "Search Clasier Academy",
  labelResults: "results:",
};

const footer = {
  aboutText:
    "Clasier Academy helps authors and publishing professionals learn the systems behind clearer writing, sharper positioning, and stronger book launches.",
  LinksTitle: "Explore",
  links: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Courses",
      url: "/courses",
    },
    {
      title: "Clasier Publishing",
      url: "https://pub.clasier.com",
    },
  ],
  newsLetterTitle: "Stay in the loop",
  newsLetterText: "Get practical notes on writing, publishing, and building book-led authority.",
};

module.exports = {
  exchangeRates: [
    {
      id: "BOB",
      text: "BS",
      conuntry: "Bolivia",
    },
    {
      id: "USS",
      text: "$",
      conuntry: "UUEE",
    },
    {
      id: "EUR",
      text: "€",
      conuntry: "",
    },
  ],

  extensions: [
    {
      id: "domain1",
      text: ".com",
      prices: [
        { id: "BOB", value: 10 },
        { id: "USS", value: 11 },
        { id: "EUR", value: 12 },
      ],
    },
    {
      id: "domain2",
      text: ".bo",
      prices: [
        { id: "BOB", value: 20 },
        { id: "USS", value: 21 },
        { id: "EUR", value: 22 },
      ],
    },
    {
      id: "domain3",
      text: ".com.bo",
      prices: [
        { id: "BOB", value: 30 },
        { id: "USS", value: 31 },
        { id: "EUR", value: 32 },
      ],
    },
  ],

  HostingTypes: [
    { id: "hosting1", text: "initial", price: { BOB: 150, USD: 21, EUR: 123 } },
    { id: "hosting2", text: "pyme", price: { BOB: 350, USD: 50, EUR: 123 } },
    {
      id: "hosting3",
      text: "enterprice1",
      price: { BOB: 700, USD: 88, EUR: 123 },
    },
    {
      id: "hosting4",
      text: "enterprice1",
      price: { BOB: 850, USD: 121, EUR: 123 },
    },
  ],
  links,
  socialIcons,
  siteMetadata,
  apiUrl,
  apiLinks,
  navbarLinks,
  hero,
  singleCourse,
  allCourses,
  popularCourses,
  footer,
  search,
  paymentMethods: require("./config/paymentMethods"),
};
