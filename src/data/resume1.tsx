import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, PenTool, Trello, BarChart } from "lucide-react";

export const DATA1 = {
  name: "Rocky ",
  initials: "G",
  url: "https://rhackz.io",
  location: "Philippines, Tuguegarao City",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
  "Virtual Assistant | Social Media Manager | Lead Generation",
  
 
  
  summary:
  "I work as a Virtual Assistant to help more small and medium business owners accomplish their tasks smoothly so they can work on what matters most.",

  
  summary1:
  "- Social Media Marketing \n\n - Email marketing \n\n - Lead generation",


  yawa:
  "- Managing WordPress Websites (Uploading articles, Creating images) \n\n - Creating Social Media Images (Quotes, Posters) \n\n - Managing Email Campaigns(Convertkit, Mailchimp) \n\n - Manage Pinterest Accounts(Tailwind) \n\n - Manage LinkedIn Profile Account -Build engagement and Trust via Social media Platforms. \n\n - Improve Customer Relations (through Customer Support, Refunds, etc) \n\n  - Build click funnel sites for Membership programs \n\n - Manage YouTube accounts (edit videos, create thumbnails, Inserting Captions, Write Descriptions). \n\n  - Create Lead Magnets (recipes, meal plans, etc.) \n\n - Gather data for Efficient Business Strategy and decision-making.",
  avatarUrl: "/me.png",


  skills: [
    "Graphic Design",
    "Virutal Assistant App Savvy",
    "Automaation",
    "Content Research",
    "Copyright",
    "Vanilla PHP",
    "Javascript",
    "React.js",
    "AJAX Javascript",
    "Typescript",
   
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Portfolio", icon: PenTool , label: "Portfolio" },
    { href: "/resume", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "rockygannaban61@gmail.com",
    tel: "+639959561768",
    social: {
      Trello: {
        name: "Trello",
        url: "https://trello.com/",
        icon: Trello,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rocky-gannaban-30488b316/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION",
        icon: Icons.linkedin,

        navbar: true,
      },

      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@rhackz4290",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Zoom",
      href: "",
      badges: [],
      logoUrl: "/zoom.png",
      

    },
    {
      company: "Click Funnels",
      href: "",
      badges: [],
      logoUrl: "/funnel.png",
    },
    {
      company: "ConvertKit",
      href: "",
      badges: [],
      logoUrl: "/convert.png",
    },

    {
      company: "Google Apps",
      href: "",
      badges: [],
      logoUrl: "/google.png",
    },


    {
      company: "Stripe ",
      href: "",
      badges: [],
      logoUrl: "/stripe.png",
    },
    {
      company: "Tailwind ",
      href: "",
      badges: [],
      logoUrl: "/tailwind.png",
    },
    {
      company: "Kapwing ",
      href: "",
      badges: [],
      logoUrl: "/kapwing.png",
    },
    {
      company: "Canva ",
      href: "",
      badges: [],
      logoUrl: "/canva.png",
    },
    {
      company: "Adobe Premiere Pro ",
      href: "",
      badges: [],
      logoUrl: "/premiere.png",
    },
    {
      company: "Adobe Photoshop CC ",
      href: "",
      badges: [],
      logoUrl: "/photoshop.png",
    },
    {
      company: "Adobe Illustrator CC",
      href: "",
      badges: [],
      logoUrl: "/AI.png",
    },
    {
      company: "Grammarly",
      href: "",
      badges: [],
      logoUrl: "/grammarly.png",
    },
    {
      company: "Trello",
      href: "",
      badges: [],
      logoUrl: "/trello.png",
    },
    {
      company: "WordPress",
      href: "",
      badges: [],
      logoUrl: "/wordpress.png",
    },  {
      company: "Youtube",
      href: "",
      badges: [],
      logoUrl: "/youtube.png",
    },
    {
      company: "HTML5",
      href: "",
      badges: [],
      logoUrl: "/html.png",
    },
    {
      company: "Boostrap css",
      href: "",
      badges: [],
      logoUrl: "/boostrap.png",
    },
    {
      company: "Javascript",
      href: "",
      badges: [],
      logoUrl: "/javascript.png",
    },
    {
      company: "Vanilla PHP",
      href: "",
      badges: [],
      logoUrl: "/php.png",
    },
  ],

  education: [
    {
      school: "FL VARGAS COLLEGE. INC ",
      href: "https://www.facebook.com/flvargascollegeinc/",
      degree: "Computer Science | Tuguegarao City , Cagayan PH 3500",
      logoUrl: "/flvc.jpg",
      start: "2020",
      end: "2024",
    },
   
  ],
  projects: [
    {
      // Add the title for the project
      title: "Administrative Support",
      // Icon added beside the title
      icon: BarChart,
      active: true,
      description:
        "If you have daily tasks or Administrative work that keep you busy, and you can't do the tasks that will make your business grow more.\n\nWell.. It's time for you to get an extra helping hand to do it. I'm easy to train, and my attention to detail is superb.",
      links: [
        {
          type: "Website",
          href: "",
          // Use the globe icon from Icons
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
        
    },
    {
      title: "Personal Assistant",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "I'm a paragraph, Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Customer Support",
      href: "",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "With so many customers bugging you all day asking for refunds, unable to make successful transactions, or unable to even do simple tasks like buying from the shopping cart, it's time to call for help. \n\n\n I have extraordinary patience to handle customer rage and emotions.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Project Management",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "There Will be days when you lose track of your project's progress.\n This is a time to hire a project manager and keep things like a well-oiled machine running.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },{
      title: "Social Media Management",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Keeping in touch with your customers, fans, colleagues, or even strangers is not as hard as you think. \n\nIf you hire me, I can manage your social media channels like Facebook, Instagram, and Linkedin and keep updates on what is happening in your business.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "DATA1base Building & Research",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "I know that business owners/CEO should be at the top of everything. We all agree, but you should not be doing it in repetition and you should not waste your time.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },



    {
      title: "Email Marketing",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Email is the lifeblood of all marketing campaigns, and if you need to reach out to your customers or your fans. I can set up an email broadcast for you including landing pages, sign-up forms, or whatever you require.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },

    {
      title: "Content Management ",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "If you have a website like WordPress, Wix, or whatever you use. I can be the one who manages content for you so that people can read the latest updates from you directly from your website. I can also manage the content from start to finish if you have a team and you regularly publish content.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },

    {
      title: "Youtube Management ",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "If you are planning or already have an existing YouTube channel, you don't need to worry about video editing anymore adding descriptions, do the time-consuming graphic design and tagging. I can do that for you.\n\nIf you wish for someone to assist you in doing YouTube Livestream, I can be a great help in managing your presentations and helping you conduct live streams.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },


  ],
  hackathons: [
    {
      title: "Zoom",
      dates: "",
      location: "",
      description:
        "",
      image:
        "/zoom.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Zoom",
      dates: "",
      location: "",
      description:
        "",
      image:
        "/zoom.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical DATA1 from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media DATA1 regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best DATA1 Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion DATA1set](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their DATA1 and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
