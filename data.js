const data = [
  {
    id: 0,
    tag: "project",
    title: "Anticipant",
    featureIMG: ["/anticipant/a1.svg"],
    images: ["/anticipant/anticipant-2.svg", "/anticipant/anticipant-3.svg"],
    tagline: `A simple, clean, and engaging user interface for exploring currently trending trailers from TMDB`,
    stack: ["Next.js", "React", "TMDB API", "CSS Modules", "SSG", "SSR"],
    description: `Anticipant Movie Trailers is a Static first Next.js web app that serves over 100 upcoming movies provided by The Movie Database (TMDB) API.  
      Anticipant was founded on the idea that products should be useful, beautiful, and exciting to use. Anticipants won't see annoying ads, a cluttered UI, or CTAs that distract from the experience. Users can sign in to the site using OAuth Credentials with their Google Account, and all persisted data is using Postgres via Supabase. Full search functionality for movie trailers past or present that aren't featured in TMDB's top trending trailers are served using Server Side Rendering that Next.js provides in tandem with TMDB's API. The UI was designed to feel big while displaying the most essential information to aid each movie trailer viewing.`,
    link: "https://anticipant.vercel.app/",
  },
  {
    id: 1,
    tag: "project",
    title: "Augment News",
    featureIMG: ["/augment/au1.svg"],
    images: ["/augment/aug-2.svg", "/augment/aug-3.svg"],
    tagline:
      "Augment News is a daily news link aggregator featuring currently trending news from: business, pop culture, sports, tech, and science sources across the web",
    stack: ["Next.js", "React", "NewsAPI", "Tailwind CSS", "SSG", "SSR"],
    description:
      "Augment News is a daily news link aggregator featuring currently trending news from business, pop culture, sports, tech, and science sources across the web.",
    link: "https://augment.vercel.app/",
  },
  {
    id: 2,
    tag: "project",
    title: "CF 101",
    featureIMG: ["/cf101/c1.svg"],
    images: [
      "/cf101/desktopHome.png",
      "/cf101/desktopGamePage.png",
      "/cf101/mobileSignUp.png",
      "/cf101/loggedin.png",
    ],
    tagline: `College Football Scores and Stats without the ads!`,
    stack: [
      "Next.js",
      "React",
      "CollegeFootballDataAPI",
      "Tailwind CSS",
      "SSG",
      "Supabase",
      "Postgres",
    ],
    description: `CF 101 is a comprehensive college football score website that offers
        expert insights on players, coaches, and conferences, and our upcoming
        transfer portal display keeps fans up to date on where their favorite
        players are going next. In addition, our live game stats, including
        real time scores, provide fans with updates on all the action. At CF
        101, we are dedicated to providing the best college football coverage
        available.`,
    link: "https://cf101.vercel.app/",
  },
];

export default data;

// const heroData = [{ id: 101, featureIMG: ["/hero/portfolio-hero.svg"] }];

// export { heroData };
