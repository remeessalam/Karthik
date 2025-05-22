import logo from "../assets/logo/logo.png";

// services icons (website)
// import { ReactComponent as icon1 } from "../assets/svg/services/AI Development.svg";
// import { ReactComponent as icon2 } from "../assets/svg/services/Web Development.svg";
// import { ReactComponent as icon3 } from "../assets/svg/services/App Development.svg";
// import { ReactComponent as icon4 } from "../assets/svg/services/Hybrid App Development.svg";
// import { ReactComponent as icon5 } from "../assets/svg/services/IT consultancy and strategy.svg";
// import { ReactComponent as icon6 } from "../assets/svg/services/IT Infrastructure.svg";
import {
  FaRobot,
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaBrain,
  FaGamepad,
  FaChartLine,
  FaCogs,
  FaCode,
} from "react-icons/fa";

// app development services icons
import { ReactComponent as appIcon1 } from "../assets/svg/services/iOS App Development.svg";
import { ReactComponent as appIcon2 } from "../assets/svg/services/Android.svg";
import { ReactComponent as appIcon3 } from "../assets/svg/services/Flutter.svg";
import { ReactComponent as appIcon4 } from "../assets/svg/services/Hybrid App Development.svg";

// web development services icons
import { ReactComponent as webIcon1 } from "../assets/svg/services/E-Commerce Development.svg";
import { ReactComponent as webIcon2 } from "../assets/svg/services/Social Media Websites.svg";
import { ReactComponent as webIcon3 } from "../assets/svg/services/Web Development.svg";
import { ReactComponent as webIcon4 } from "../assets/svg/services/UIUX Design.svg";
import { AiFillAppstore } from "react-icons/ai";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.webp";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold-creekcap.webp";
import ThinkRealityImg from "../assets/web-development-portfolio/think-reality.webp";
import AkashMegaMart from "../assets/web-development-portfolio/Akash-Mega-Mart.webp";
import MidwamImmersive from "../assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.webp";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "../assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.webp";
import AkashMegaMartApp from "../assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.webp";
import FeelItMobileApp from "../assets/app-development-portfolio/FeelIt-Mobile-App.webp";
import KlikomicsMobileApp from "../assets/app-development-portfolio/Klikomics-Mobile-App.webp";
import AutoSnapMobileApp from "../assets/app-development-portfolio/AutoSnap-Mobile-App.webp";
export { logo };

export const companyDetails = {
  email: "xyz@example.com",
  phone: "+0000000000",
  phone2: "+0000000000",
  address: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
};

export const testimonials = [
  {
    name: "Olivia R.",
    designation: "Product Lead",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "We were drowning in manual processes until the uTurn Technologies AI development team stepped in. Now our support and analytics workflows run like clockwork - faster and more accurate than ever, significantly boosting our efficiency.",
  },
  {
    name: "Priya S.",
    designation: "Co-Founder",
    image: require("../assets/images/testimonial/1.jpg"),
    review:
      "Users are loving the new experience. The uTurn Technologies mobile app team was organized, quick, and spot-on with every feature. The app is smooth, secure, and has transformed how our customers interact with us.",
  },
  {
    name: "James T.",
    designation: "Marketing Director",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "uTurn Technologies didn’t just design a pretty site - they built a performance engine. Speed, SEO, UX - all on point. Our website is now a conversion powerhouse, enhancing our online presence remarkably.",
  },
  {
    name: "Dana L.",
    designation: "Technical Director",
    image: require("../assets/images/testimonial/4.jpg"),
    review:
      "No fluff, no bloat - just the exact tools we needed, built from scratch. uTurn Technologies’ custom software development delivered a precise, scalable solution that perfectly fits our processes and growth plans.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webIcon1,
    desc: "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webIcon2,
    desc: "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webIcon3,
    desc: " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webIcon4,
    desc: "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appIcon1,
    desc: "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appIcon2,
    desc: "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appIcon3,
    desc: "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appIcon4,
    desc: "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio links
export const portfolio = {
  appDevelopment: {
    icon: <AiFillAppstore size={30} />,
    list: [
      {
        id: 1,
        img: AkashMegaMartApp,
        title: "Akash Mega Mart ",
        link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
      },
      {
        id: 2,
        img: FeelItMobileApp,
        title: "FeelIt Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
      },
      {
        id: 3,
        img: KlikomicsMobileApp,
        title: "Klikomics Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      },
      {
        id: 4,
        img: AutoSnapMobileApp,
        title: "AutoSnap Mobile App",
        link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      },
      {
        id: 8,
        img: RentopBikeAndCarImgapp,
        title: "Rentop Bike and Car",
        link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      },
    ],
  },
  webDevelopment: {
    icon: <FaGlobe size={30} />,
    list: [
      {
        id: 1,
        img: FiveGHomesImg,
        title: "5g Homes",
        link: "https://5ghighspeedinternet.co",
      },
      {
        id: 3,
        img: ColdCreekcapImg,
        title: "Cold Creekcap",
        link: "https://www.coldcreekcap.com",
      },
      {
        id: 9,
        img: ThinkRealityImg,
        title: "Think Reality",
        link: "https://thinkrealty.ae",
      },
      {
        id: 90,
        img: AkashMegaMart,
        title: "Akash Mega Mart",
        link: "https://akashmegamart.com/",
      },
      {
        id: 91,
        img: MidwamImmersive,
        title: "Midwam ",
        link: "https://www.midwam.com/en/about",
      },
    ],
  },
};

//all services
export const services = [
  {
    id: 1,
    title: "AI Development",
    icon: FaRobot,
    desc: "We design AI tools that do more than impress — they improve how you work. From smart chatbots to automated insights, we bring AI-powered solutions into your business in ways that matter.",
    detailsPage: {
      banner: require("../assets/images/service-details/ai-development.webp"),
      img1: require("../assets/images/service-details/ai-dev-1.webp"),
      img2: require("../assets/images/service-details/ai-dev-2.webp"),
      img3: require("../assets/images/service-details/ai-dev-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Transforming Businesses with AI-Powered Solutions
            </h2>
            <p>
              In an era where efficiency and innovation drive success, our AI development services empower businesses with smart automation and actionable insights.
            </p>
            <p>
              As a leading <span class="font-bold text-secondary">AI development company</span>, we craft tailored AI tools, from intelligent chatbots to predictive analytics, to help you stay competitive and achieve your goals.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our AI Development Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Smart Business Automation</h3>
                <p>
                  Automate repetitive tasks and streamline workflows to boost efficiency and focus on strategic priorities.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Actionable Insights</h3>
                <p>
                  Leverage AI to analyze data and deliver insights that drive smarter, faster decision-making.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Tailored Solutions</h3>
                <p>
                  Our AI solutions are customized to fit your unique business needs, ensuring maximum impact.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalable Innovation</h3>
                <p>
                  Build AI systems that grow with your business, adapting to new challenges and opportunities.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our AI Development Expertise
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Intelligent Chatbots</h3>
                <p>
                  Create conversational AI that enhances customer support and engagement.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Predictive Analytics</h3>
                <p>
                  Use AI to forecast trends and optimize business strategies.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Automation Tools</h3>
                <p>
                  Streamline operations with AI-driven process automation.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 2,
    title: "Web Development",
    icon: FaGlobe,
    desc: "Need a website that’s fast, user-friendly, and built to grow with you? We create custom web design services that are more than digital brochures — they’re conversion engines.",
    detailsPage: {
      banner: require("../assets/images/service-details/web-development.webp"),
      img1: require("../assets/images/service-details/web-dev-1.webp"),
      img2: require("../assets/images/service-details/web-dev-2.webp"),
      img3: require("../assets/images/service-details/web-dev-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Crafting Websites That Convert
            </h2>
            <p>
              A website is your digital storefront. Our responsive website developers create fast, user-friendly, and scalable web apps that engage visitors and drive results.
            </p>
            <p>
              At <span class="font-bold text-secondary">AI Company</span>, we focus on delivering websites that combine aesthetics with functionality to fuel your business growth.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Web Development Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Custom Web Design</h3>
                <p>
                  We build websites tailored to your brand and business goals, ensuring a unique online presence.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Responsive Design</h3>
                <p>
                  Our websites are optimized for all devices, providing a seamless experience for every user.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalable Solutions</h3>
                <p>
                  We create web apps that grow with your business, adapting to increasing traffic and complexity.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">SEO-Optimized</h3>
                <p>
                  Our development process ensures your site ranks well on search engines, attracting more visitors.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Web Development Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Discovery</h3>
                <p>
                  We understand your goals and audience to create a tailored strategy.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Design & Development</h3>
                <p>
                  We craft a visually stunning and functional website using the latest technologies.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Testing & Launch</h3>
                <p>
                  We test rigorously and launch your site, ensuring optimal performance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: FaMobileAlt,
    desc: "Whether you're launching a startup or expanding an enterprise, we build mobile apps your users will love — and actually use. Smooth, secure, and packed with features.",
    detailsPage: {
      banner: require("../assets/images/service-details/mobile-app-development.webp"),
      img1: require("../assets/images/service-details/app-dev-1.webp"),
      img2: require("../assets/images/service-details/app-dev-2.webp"),
      img3: require("../assets/images/service-details/app-dev-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Building Mobile Apps Users Love
            </h2>
            <p>
              As a leading <span class="font-bold text-secondary">mobile development company</span>, we create iOS and Android apps that are intuitive, secure, and feature-rich.
            </p>
            <p>
              Whether you’re a startup or an enterprise, our apps are designed to engage users and drive business growth.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Mobile App Development?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Custom App Design</h3>
                <p>
                  We tailor apps to your business needs, ensuring a unique user experience.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cross-Platform Compatibility</h3>
                <p>
                  Our apps work seamlessly on iOS and Android, maximizing your reach.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Security First</h3>
                <p>
                  We prioritize data security to protect your users and your business.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalable Solutions</h3>
                <p>
                  Our apps are built to scale, supporting your growth over time.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Mobile App Development Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Consultation</h3>
                <p>
                  We understand your vision and define the app’s features.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Design & Development</h3>
                <p>
                  We create a user-friendly app with robust functionality.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Testing & Launch</h3>
                <p>
                  We ensure a flawless launch with thorough testing and ongoing support.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 4,
    title: "UI/UX Design",
    icon: FaPaintBrush,
    desc: "We believe design is about more than looking good. It’s about making things work. Our UI/UX design process is user-first, meaning every click, swipe, and tap makes sense.",
    detailsPage: {
      banner: require("../assets/images/service-details/ui-ux-design.webp"),
      img1: require("../assets/images/service-details/ui-ux-1.webp"),
      img2: require("../assets/images/service-details/ui-ux-2.webp"),
      img3: require("../assets/images/service-details/ui-ux-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Designing User-First Experiences
            </h2>
            <p>
              Great design is intuitive and engaging. As a leading <span class="font-bold text-secondary">UI UX design agency</span>, we create interfaces that are visually appealing and easy to use.
            </p>
            <p>
              Our user experience services prioritize functionality, ensuring every interaction feels natural and delightful.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our UI/UX Design Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">User-Centric Design</h3>
                <p>
                  We focus on your users, creating interfaces that are intuitive and engaging.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Mobile UI Experts</h3>
                <p>
                  Our designs are optimized for mobile, ensuring a seamless experience across devices.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Iterative Process</h3>
                <p>
                  We refine designs through user feedback to ensure optimal usability.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Brand Consistency</h3>
                <p>
                  Our designs align with your brand identity, creating a cohesive user experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our UI/UX Design Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Research & Analysis</h3>
                <p>
                  We study your users and business goals to inform our design strategy.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Wireframing & Prototyping</h3>
                <p>
                  We create mockups to visualize the user journey and refine functionality.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Design & Testing</h3>
                <p>
                  We develop and test the final design to ensure a flawless user experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 5,
    title: "Machine Learning",
    icon: FaBrain,
    desc: "Data is powerful — if you know what to do with it. Our ML experts build models that help you predict, personalize, and streamline decisions.",
    detailsPage: {
      banner: require("../assets/images/service-details/machine-learning.webp"),
      img1: require("../assets/images/service-details/ml-1.webp"),
      img2: require("../assets/images/service-details/ml-2.webp"),
      img3: require("../assets/images/service-details/ml-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Unlocking Data’s Potential with Machine Learning
            </h2>
            <p>
              Our <span class="font-bold text-secondary">machine learning consulting</span> services turn raw data into actionable insights, helping businesses make smarter decisions.
            </p>
            <p>
              We build ML solutions for businesses that predict trends, personalize experiences, and optimize operations.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Machine Learning Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Predictive Analytics</h3>
                <p>
                  Forecast trends and outcomes to stay ahead of the competition.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Personalization</h3>
                <p>
                  Deliver tailored experiences that increase customer satisfaction.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Streamlined Decisions</h3>
                <p>
                  Automate decision-making with data-driven ML models.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalable Models</h3>
                <p>
                  Our ML solutions grow with your data and business needs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Machine Learning Expertise
            </h2>
            <ul class="space-y-5 list-disc pl-6">
              <li>
                <h3 class="font-bold mb-2">Custom ML Models</h3>
                <p>
                  Build models tailored to your specific business challenges.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data Processing</h3>
                <p>
                  Clean and prepare data for accurate ML outcomes.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Model Deployment</h3>
                <p>
                  Seamlessly integrate ML models into your existing systems.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 6,
    title: "Game Development",
    icon: FaGamepad,
    desc: "We create games that entertain, educate, and engage. From casual mobile games to immersive experiences, we bring your game idea to life.",
    detailsPage: {
      banner: require("../assets/images/service-details/game-development.webp"),
      img1: require("../assets/images/service-details/game-dev-1.webp"),
      img2: require("../assets/images/service-details/game-dev-2.webp"),
      img3: require("../assets/images/service-details/game-dev-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Bringing Your Game Ideas to Life
            </h2>
            <p>
              As expert <span class="font-bold text-secondary">mobile game developers</span>, we create engaging and immersive games using tools like Unity.
            </p>
            <p>
              From casual mobile games to complex experiences, our game design experts deliver fun and functional games tailored to your vision.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Game Development Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Engaging Experiences</h3>
                <p>
                  We create games that captivate players with compelling gameplay.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cross-Platform Games</h3>
                <p>
                  Our games run smoothly on mobile, desktop, and other platforms.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Custom Development</h3>
                <p>
                  We tailor games to your specific goals, whether for entertainment or education.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">High Performance</h3>
                <p>
                  Our games are optimized for speed and reliability.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Game Development Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Concept Development</h3>
                <p>
                  We collaborate to define your game’s vision and mechanics.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Design & Development</h3>
                <p>
                  We create assets and build the game using industry-standard tools.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Testing & Launch</h3>
                <p>
                  We ensure a polished game with rigorous testing and support.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    icon: FaChartLine,
    desc: "Let’s turn your data into a story. We help companies spot trends, track KPIs, and make smarter decisions through clean, interactive dashboards and data pipelines.",
    detailsPage: {
      banner: require("../assets/images/service-details/data-analytics.webp"),
      img1: require("../assets/images/service-details/data-analytics-1.webp"),
      img2: require("../assets/images/service-details/data-analytics-2.webp"),
      img3: require("../assets/images/service-details/data-analytics-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Turning Data into Actionable Insights
            </h2>
            <p>
              Our <span class="font-bold text-secondary">business intelligence solutions</span> transform raw data into clear, actionable insights.
            </p>
            <p>
              With custom data analytics and data visualization experts, we help you track KPIs, spot trends, and make informed decisions.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Data Analytics Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Interactive Dashboards</h3>
                <p>
                  Visualize your data with intuitive, real-time dashboards.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Data Pipelines</h3>
                <p>
                  Streamline data collection and processing for accuracy and efficiency.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Actionable Insights</h3>
                <p>
                  Turn data into strategies that drive business growth.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalable Solutions</h3>
                <p>
                  Our analytics systems grow with your data needs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Data Analytics Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Data Assessment</h3>
                <p>
                  We analyze your data sources and business goals.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Pipeline Development</h3>
                <p>
                  We build efficient data pipelines for seamless processing.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Visualization & Reporting</h3>
                <p>
                  We create dashboards and reports tailored to your needs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 8,
    title: "Robotic Process Automation (RPA)",
    icon: FaCogs,
    desc: "We build bots that work around the clock, automating repetitive tasks and freeing your team to focus on what really matters.",
    detailsPage: {
      banner: require("../assets/images/service-details/rpa.webp"),
      img1: require("../assets/images/service-details/rpa-1.webp"),
      img2: require("../assets/images/service-details/rpa-2.webp"),
      img3: require("../assets/images/service-details/rpa-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Automating Workflows with RPA
            </h2>
            <p>
              Our <span class="font-bold text-secondary">RPA services for businesses</span> streamline operations by automating repetitive tasks.
            </p>
            <p>
              As expert robotic automation developers, we create bots that save time, reduce errors, and boost productivity.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our RPA Services?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Time Savings</h3>
                <p>
                  Automate repetitive tasks to free up your team’s time.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Error Reduction</h3>
                <p>
                  Bots perform tasks with precision, minimizing human error.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalable Automation</h3>
                <p>
                  Our RPA solutions scale with your business needs.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Cost Efficiency</h3>
                <p>
                  Reduce operational costs with automated workflows.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our RPA Development Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Process Analysis</h3>
                <p>
                  We identify tasks suitable for automation.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Bot Development</h3>
                <p>
                  We build and test bots to ensure accuracy and efficiency.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Deployment & Support</h3>
                <p>
                  We deploy bots and provide ongoing maintenance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
  {
    id: 9,
    title: "Custom Software Development",
    icon: FaCode,
    desc: "Your business isn’t generic — your software shouldn’t be either. We develop custom solutions tailored to your processes, workflows, and growth plans.",
    detailsPage: {
      banner: require("../assets/images/service-details/custom-software.webp"),
      img1: require("../assets/images/service-details/software-dev-1.webp"),
      img2: require("../assets/images/service-details/software-dev-2.webp"),
      img3: require("../assets/images/service-details/software-dev-3.webp"),
      firstSection: `
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-xl font-bold">
              Tailored Software for Your Business
            </h2>
            <p>
              Our <span class="font-bold text-secondary">bespoke software development</span> services deliver solutions that align with your unique workflows and goals.
            </p>
            <p>
              As expert enterprise software engineers, we build custom-built platforms that drive efficiency and growth.
            </p>
          </div>
        </div>
      `,
      secondSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Why Choose Our Custom Software Development?
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Tailored Solutions</h3>
                <p>
                  We build software that fits your specific business processes.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Scalable Architecture</h3>
                <p>
                  Our solutions grow with your business, adapting to new challenges.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Secure & Reliable</h3>
                <p>
                  We prioritize security and performance in every solution.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">End-to-End Development</h3>
                <p>
                  From planning to deployment, we handle every phase of development.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
      thirdSection: `
        <div class="py-6">
          <div class="space-y-6">
            <h2 class="text-xl font-bold">
              Our Software Development Process
            </h2>
            <ul class="space-y-5 list-decimal pl-6">
              <li>
                <h3 class="font-bold mb-2">Requirement Analysis</h3>
                <p>
                  We understand your business needs and goals.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Design & Development</h3>
                <p>
                  We create a custom solution with robust functionality.
                </p>
              </li>
              <li>
                <h3 class="font-bold mb-2">Testing & Deployment</h3>
                <p>
                  We ensure a reliable solution with thorough testing and support.
                </p>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  },
];
