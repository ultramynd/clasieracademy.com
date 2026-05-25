const fallbackAuthors = [
  {
    id: "clasier-team",
    name: "Clasier Academy",
    user_name: "Clasier Academy",
    short_description: "Practical learning paths for builders, creators, and teams.",
    user_pic: "/images/noPic.png",
  },
];

const fallbackCourses = [
  {
    id: "launch-foundations",
    course_author_id: "clasier-team",
    course_short_link: "launch-foundations",
    course_title: "Launch Foundations",
    course_description: "Plan, position, and publish a digital product with a practical weekly workflow.",
    course_long_description:
      "<p>Build a clear product foundation, define the offer, map the customer journey, and prepare a launch plan that can move from idea to shipped experience.</p>",
    course_required_skills: "<ul><li>A product or service idea</li><li>Basic comfort using web tools</li></ul>",
    course_pic_url: "/images/noPic.png",
    course_price: 0,
    course_tags: ["Product", "Launch", "Strategy"],
  },
  {
    id: "web-presence",
    course_author_id: "clasier-team",
    course_short_link: "web-presence",
    course_title: "Web Presence Studio",
    course_description: "Shape the pages, content, and systems behind a credible online learning brand.",
    course_long_description:
      "<p>Turn scattered brand ideas into a structured site, message hierarchy, and repeatable publishing workflow.</p>",
    course_required_skills: "<ul><li>Basic writing ability</li><li>Access to your brand assets</li></ul>",
    course_pic_url: "/images/noPic.png",
    course_price: 0,
    course_tags: ["Brand", "Web", "Content"],
  },
];

const fallbackItems = {
  "launch-foundations": [
    {
      item_course_id: "launch-foundations",
      item_author_id: "clasier-team",
      item_title: "Clarify the outcome",
      item_description:
        "<p>Define the promise, target learner, and visible transformation for the course or product.</p>",
      item_type: "video",
      item_sort: 1,
      item_video_url: "",
    },
    {
      item_course_id: "launch-foundations",
      item_author_id: "clasier-team",
      item_title: "Map the launch path",
      item_description:
        "<p>Break the work into pages, assets, proof points, and launch checkpoints.</p>",
      item_type: "video",
      item_sort: 2,
      item_video_url: "",
    },
  ],
  "web-presence": [
    {
      item_course_id: "web-presence",
      item_author_id: "clasier-team",
      item_title: "Design the site structure",
      item_description:
        "<p>Create a page map that supports discovery, trust, enrollment, and ongoing publishing.</p>",
      item_type: "video",
      item_sort: 1,
      item_video_url: "",
    },
  ],
};

const hasFirebaseConfig = () =>
  Boolean(
    process.env.FIREBASE_API_KEY &&
      process.env.FIREBASE_AUTH_DOMAIN &&
      process.env.FIREBASE_PROJECT_ID
  );

const getFirestore = async () => {
  if (!hasFirebaseConfig()) return null;

  const app = (await import("myFirebase")).default;
  return app.firestore();
};

/* =========================================================
 *
 * ========================================================= */
export const getAllCourses = async () => {
  const db = await getFirestore();
  if (!db) return fallbackCourses;

  let courses = [];
  const querySnapshot = await db.collection("courses").get();
  querySnapshot.forEach((doc) => {
    const course = doc.data();
    courses.push(course);
  });

  return courses;
};

/* =========================================================
 *
 * ========================================================= */
export const getAllAuthors = async (courses) => {
  const db = await getFirestore();
  if (!db) return fallbackAuthors;

  let profiles = [];
  let authorIds = [];

  authorIds = courses.map((course) => course.course_author_id);
  authorIds = [...new Set(authorIds)];

  const querySnapshot = await db.collection("profiles").get();
  querySnapshot.forEach((doc) => {
    const profile = { ...doc.data(), id: doc.id };
    profiles.push(profile);
  });

  return profiles;
};
/* =========================================================
 *
 * ========================================================= */

export const getItems = async (course) => {
  if (!course) return [];

  const db = await getFirestore();
  if (!db) return fallbackItems[course.id] || [];

  let items = [];

  const querySnapshot = await db
    .collection("course_items")
    .where("item_course_id", "==", course.id)
    .get();
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    items.push(item);
  });

  return items;
};
/* =========================================================
 *
 * ========================================================= */

export const getShortLink = (link) => {
  let newString = link;
  newString = newString.toLowerCase();
  newString = newString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  newString = newString.replace(/ /g, "_");
  newString = newString.replace(/\?/g, "");
  newString = newString.replace(/¿/g, "");
  return newString;
};
