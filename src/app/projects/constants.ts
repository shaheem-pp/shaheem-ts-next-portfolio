// src/app/projects/constants.ts

export interface Project {
  title: string;
  image: string;
  shortContent: string;
  description: string;
  links: { [iconClass: string]: string | undefined };
  stack: string[];
  status: string;
  category: string;
  featured: boolean;
}

export const projects = [
  {
    title: "Grocify.ai",
    image: "Project/images/grocery/wa9.png",
    shortContent:
      "A WhatsApp-based AI assistant that helps users plan meals, manage groceries, and reduce food waste intelligently.",
    description: `<h5>Grocify.ai – AI Meal Planning on WhatsApp</h5>
<p>A FastAPI-powered conversational assistant that enables users to plan meals, track pantry items, and auto-generate grocery lists-entirely through WhatsApp.</p>

<p><em>Status:</em> Core modules for registration, meal planning, and Gemini-powered suggestions are live. Inventory syncing and expiry tracking are in active development.</p>

<h5>Impact Highlights:</h5>
<ul>
  <li><strong>10+ users</strong> actively planning 21+ meals/week through a conversational flow.</li>
  <li><strong>Reduced meal prep friction</strong> and food waste with AI-driven grocery suggestions.</li>
  <li><strong>90% of interactions</strong> complete in <strong>&lt;500ms</strong>, ensuring seamless user experience.</li>
</ul>

<h5>How It Works:</h5>
<ul>
  <li>User onboarding collects name, email, and phone to build a personalized profile.</li>
  <li>Users select meal frequency and types (breakfast/lunch/dinner/snacks).</li>
  <li>Gemini AI generates a 7-day meal plan based on user input and pantry stock.</li>
  <li>Grocery lists are generated automatically and can be confirmed, edited, or marked as purchased.</li>
</ul>

<h5>My Contributions:</h5>
<ul>
  <li>Designed the end-to-end WhatsApp UX and conversation flow.</li>
  <li>Built FastAPI backend with MySQL and Gemini integration for contextual prompt generation.</li>
  <li>Developed session handling, meal flow logic, and WhatsApp Cloud API integration.</li>
</ul>

<p>Grocify.ai solves a common problem-wasting time and ingredients-by helping users plan smarter and live more intentionally.</p>`,
    links: {
      // "bi bi-github": "https://github.com/shaheem-pp/grocify-ai" // Optional
    },
    stack: ["Gemini AI", "WhatsApp Cloud API", "FastAPI", "MySQL"],
    status: "In-progress",
    category: "Personal Project",
    featured: true,
  },
  {
    title: "Agua India App",
    image: "Project/images/agua/aguaGPTgen.png",
    shortContent:
      "A premium packaged drinking water delivery app offering a wide range of products and services.",
    description:
      "<h5>Agua India App - Your Premium Water Delivery Service</h5><p>The Agua India App simplifies premium bottled water delivery, offering a wide variety of products with fast, reliable service and real-time tracking for efficient delivery.</p><h5>Key Features:</h5><ul>    <li><strong>Wide Range of Products:</strong> Choose from 20L water jars, dispensers, and accessories, from top brands like Bisleri, Bailley, Caspian, and Officers Choice Blue.</li>    <li><strong>Affordable Pricing and Offers:</strong> Buy at low prices with great discounts, coupon offers, and promotions.</li>    <li><strong>Fast and Secure Checkout:</strong> Payment options include net-banking, UPI, credit/debit cards, and e-wallets.</li>    <li><strong>Assured Quality:</strong> Sourced from well-recognized water plants, ensuring the best quality water for consumers.</li>    <li><strong>On-time Delivery:</strong> Products delivered within 24 hours, increasing reliability and customer trust.</li></ul><h5>Impact:</h5><ul>    <li><strong>Order Processing Efficiency:</strong> Optimized workflows reducing delivery time by 20%, leading to a 25% increase in customer satisfaction.</li>    <li><strong>Vendor Dashboard:</strong> Developed a real-time analytics dashboard, improving sales productivity by 40% for vendors.</li>    <li><strong>Scalable Backend:</strong> Built and maintained the backend for 20,000+ users across Kochi, Chennai, Hyderabad, and Bangalore, ensuring reliable service across these cities.</li>    <li><strong>Uptime & Reliability:</strong> Ensured 99% uptime by resolving issues promptly, keeping customer experience consistent and reliable.</li></ul><h5>Improvements:</h5><ul>    <li>Optimized legacy code and database queries, significantly improving performance.</li>    <li>Enhanced user interface for a smoother, more intuitive experience.</li>    <li>Increased service area coverage, making Agua India available in more locations.</li></ul>",
    links: {
      "bi bi-apple":
        "https://apps.apple.com/in/app/agua-india/id1503679371?platform=iphone",
      "bi bi-google":
        "https://play.google.com/store/apps/details?id=appu.agua&hl=en_IN",
    },
    stack: [
      "PostGIS",
      "Google Maps Matrix API",
      "Django",
      "Python",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "jQuery",
      "Bootstrap",
    ],
    status: "Completed",
    category: "Professional Project",
    featured: true,
  },
  {
    title: "Carro App",
    image: "Project/images/Cynbus/carro2.png",
    shortContent:
      "A comprehensive car care app offering services like car wash booking, used car valuation, and service comparison.",
    description:
      "<h5>Carro App - Your Ultimate Car Care Companion</h5><p>The Carro App simplifies car care with an intuitive interface and a range of essential features.</p><h5>Key Features:</h3><ul>    <li><strong>Car Wash Booking:</strong> Book a car wash in seconds. Find nearby centers, compare prices, and choose services at your convenience.</li>    <li><strong>Used Car Valuation:</strong> Get expert assistance with detailed inspection reports when buying a used car.</li>    <li><strong>Car Services Comparison:</strong> Compare rates, services, and amenities at nearby car service centers.</li>    <li><strong>Easy Payment Options:</strong> Secure your service with a small booking fee, with payments via cash or online at the service center.</li></ul><h5>Improvements:</h3><ul>    <li>Improved user experience with a smoother, more intuitive interface.</li>    <li>Performance enhancements for faster load times and a seamless booking experience.</li>    <li>Expanded service areas now available in more locations.</li>    <li>Minor bug fixes for an overall improved experience.</li></ul>",
    links: {
      "bi bi-apple":
        "https://apps.apple.com/in/app/carro-your-car-app/id6475821919",
      "bi bi-google":
        "https://play.google.com/store/apps/details?id=com.findandpark.app&pcampaignid=web_share",
    },
    stack: [
      "PostGIS",
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "jQuery",
      "Bootstrap",
    ],
    status: "Completed",
    category: "Professional Project",
    featured: true,
  },
  {
    title: "Shoapp",
    image: "Project/images/Cynbus/shoapp2.png",
    shortContent:
      "Shoapp brings the mall to your fingertips, allowing you to shop from local stores and get everything delivered right to your doorstep.",
    description:
      "<h5>Shoapp - Your Ultimate Local Shopping Companion</h5><p>Shoapp, the app that revolutionizes shopping by bringing local stores right to your fingertips.</p><h5>Key Features:</h5><ul>    <li><strong>Shop From Local Stores:</strong> Access a wide range of products from local stores, including groceries, fashion, electronics, and home decor.</li>    <li><strong>Compare Prices and Deals:</strong> Compare prices and find exclusive deals to ensure you always get the best value.</li>    <li><strong>Nearby Store Locator:</strong> Find nearby stores and view their available stock, saving time by showing the closest options.</li>    <li><strong>Convenient Delivery:</strong> Place orders with ease, and trusted delivery partners will bring purchases to your doorstep.</li>    <li><strong>Shopping History & Favorites:</strong> Track your shopping history and save favorite items for quick reordering.</li>    <li><strong>Tailored Recommendations:</strong> Get Personal Projectized product and deal recommendations based on your shopping preferences.</li>    <li><strong>User-Friendly Interface:</strong> Enjoy a simple and intuitive interface, making it easy for users of all ages.</li></ul>",
    links: {
      "bi bi-apple":
        "https://apps.apple.com/ca/app/sho-app-shopping-app/id6450304129?platform=iphone",
    },
    stack: [
      "PostgreSQL",
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "jQuery",
      "Bootstrap",
    ],
    status: "Completed",
    category: "Professional Project",
    featured: true,
  },
  {
    title: "Vehicle & Area Tracking Systems",
    image: "Project/images/tracking.png",
    shortContent:
      "Backend systems built for tracking vehicles, areas, and optimizing delivery routes.",
    description:
      "<p><strong>Vehicle & Area Tracking Systems</strong> involves the development of backend solutions for efficient tracking and route optimization across multiple Client Project projects.</p><h5>Key Features:</h5><ul><li><strong>Vehicle Tracking:</strong> Real-time tracking of delivery vehicles using GPS data.</li><li><strong>PostGIS Integration:</strong> Utilizes PostGIS to track and store geospatial data of areas and locations.</li><li><strong>Delivery Route Optimization:</strong> Google Maps Matrix API integration to calculate the best routes for delivery vehicles.</li><li><strong>Legacy Code Optimization:</strong> Improved the performance of legacy database queries and models for existing systems.</li></ul><p>This backend solution plays a critical role in improving the efficiency of delivery operations for multiple Client Projects, involving different systems tailored to their specific needs.</p>",
    links: {},
    stack: [
      "PostGIS",
      "Google Maps Matrix API",
      "Django",
      "Python",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "jQuery",
      "Bootstrap",
    ],
    status: "Completed",
    category: "Client Project",
    featured: false,
  },
  {
    title: "Web Builder",
    image: "Project/images/web builder/build3.png",
    shortContent:
      "A Shopify alternative for Kerala businesses, offering custom domains, themes, and e-commerce management.",
    description:
      "<p><strong>Web Builder</strong> is a powerful e-commerce platform designed as a localized alternative to Shopify and Dhukhaan, tailored specifically for businesses in Kerala.</p>        <h5>Key Features:</h5>        <ul>            <li><strong>Easy Store Setup:</strong> Business owners can launch their online store with just a few clicks, without any coding knowledge.</li>            <li><strong>Custom Domains & Branding:</strong> Allows users to connect their own domain and Personal Projectize storefronts with unique themes.</li>            <li><strong>Flexible Product Management:</strong> Simplified inventory handling, pricing controls, and order tracking.</li>            <li><strong>Payment Gateway Integration:</strong> Supports local and global payment solutions for seamless transactions.</li>            <li><strong>Built-in SEO & Analytics:</strong> Helps businesses improve visibility and track performance effortlessly.</li>            <li><strong>Scalable & Affordable:</strong> A cost-effective solution compared to international platforms, with features tailored for local market needs.</li>        </ul>        <p>Designed to empower small and medium-sized businesses, <em>Web Builder</em> bridges the gap between local entrepreneurs and digital commerce, making online selling more accessible and profitable.</p>",
    links: {},
    stack: [
      "Django",
      "Python",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "jQuery",
      "Bootstrap",
    ],
    status: "Completed",
    category: "Client Project",
    featured: true,
  },
  {
    title: "Dattebayo",
    image: "Project/images/react/dattebayo.png",
    shortContent:
      "A React app built to showcase all characters in Naruto Anime.",
    description:
      "<p><strong>Narutopedia</strong> or <strong>Dattebayo</strong> is a web platform built as part of my Learning Project React using Typescript it uses <a href='https://api-dattebayo.vercel.app/docs' target='_blank'>Dattebayo API</a>. I tried to use proper architectures to learn how to reuse a component. </p>",
    links: {
      "bi bi-github": "https://github.com/shaheem-pp/dattebayo-react-ts",
      "bi bi-globe2": "https://dattebayo-react-ts.vercel.app/",
    },
    stack: ["React", "TypeScript"],
    status: "Completed",
    category: "Learning Project",
    featured: false,
  },
  {
    title: "Food For All",
    image: "Project/images/foodforall/ffa.png",
    shortContent:
      "A platform that connects food donors with NGOs and volunteers to minimize food waste.",
    description:
      "<p><strong>Food For All</strong> is a web platform built during <em>Fosshack 3</em> to help restaurants and food providers donate surplus food efficiently.</p><h5>Key Features:</h5><ul><li><strong>Seamless Food Donation:</strong> Connects donors with NGOs and volunteers within a 5-10 km radius.</li><li><strong>Real-time Notifications:</strong> Nearby registered NGOs receive instant updates on available food.</li><li><strong>Location-Based Matching:</strong> Uses <strong>PostGIS</strong> to store and process geospatial data.</li><li><strong>REST API Integration:</strong> Ensures smooth communication between frontend (Next.js) and backend (Django).</li></ul><p>Unlike WhatsApp communities where messages often get lost, <em>Food For All</em> provides a structured, centralized solution to food wastage.</p>",
    links: {
      "bi bi-github": "https://github.com/AkshayBenny/food-surplus-detection",
    },
    stack: ["Django", "Next.js", "REST API", "PostGis"],
    status: "Completed",
    category: "Hackathon Project",
    featured: true,
  },
  {
    title: "QiblaDirection",
    image: "Project/images/ios/Qibla.png",
    shortContent:
      "A SwiftUI-based iOS app that helps users find the Qibla direction accurately using CoreLocation and MapKit.",
    description: `  <h5>QiblaDirection – SwiftUI Qibla Finder</h5>
                        <p><strong>QiblaDirection</strong> is a lightweight and intuitive iOS app built using <strong>SwiftUI</strong> that helps users determine the direction of the Qibla from any location using real-time compass and map data.</p>
                        
                        <h5>Key Features:</h5>
                        <ul>
                          <li><strong>Real-time Compass:</strong> Utilizes device sensors to display the exact Qibla direction dynamically.</li>
                          <li><strong>MapKit Integration:</strong> Visual Qibla line overlayed on the map for geographic orientation.</li>
                          <li><strong>CoreLocation Services:</strong> Automatically detects and updates the user’s current location.</li>
                          <li><strong>Minimal UI:</strong> Clean and focused interface built with SwiftUI principles.</li>
                        </ul>
                        
                        <h5>My Contributions:</h5>
                        <ul>
                          <li>Developed the entire app UI using SwiftUI with compass and map views.</li>
                          <li>Integrated CoreLocation for dynamic user positioning.</li>
                          <li>Implemented Qibla angle calculation logic using Haversine formula.</li>
                        </ul>
                        
                        <p><strong>QiblaDirection</strong> offers a simple but valuable tool for Muslims to confidently pray in the correct direction, even while traveling.</p>
                    `,
    links: {
      "bi bi-github": "https://github.com/shaheem-pp/QiblaDirection-swiftui",
    },
    stack: ["SwiftUI", "MapKit", "CoreLocation", "Xcode"],
    status: "Completed",
    category: "Learning Project",
    featured: false,
  },
  {
    title: "Routine Pro",
    image: "Project/images/routine-pro/cover.png",
    shortContent:
      "A SwiftUI habit and todo tracker with streak tracking, flexible schedules, and profile insights.",
    description: `<h5>Routine Pro – Personalized Habit & Todo Tracker</h5>
<p>A SwiftUI-based iOS app designed to help users organize daily habits and tasks with features like streak tracking, flexible repeat options, and progress visualization.</p>

<p><em>Status:</em> Core habit and todo management features implemented using SwiftData. iCloud sync is planned for future releases.</p>

<h5>Features:</h5>
<ul>
  <li>Tab-based navigation for daily tasks, habits, and user profile.</li>
  <li>Flexible habit scheduling: daily, weekly, or custom repeats with reminders.</li>
  <li>Todo tracking with optional due dates and completion management.</li>
  <li>Profile insights including habit streaks, longest streaks, and progress percentages.</li>
  <li>Dark and light themes for user customization.</li>
</ul>

<h5>My Contributions:</h5>
<ul>
  <li>Developed the entire SwiftUI app architecture using SwiftData for local storage.</li>
  <li>Designed habit scheduling logic and user-friendly interfaces.</li>
  <li>Implemented streak tracking and progress visualization features.</li>
</ul>

<p>Routine Pro aims to help users build and maintain consistent habits with a simple, focused iOS experience.</p>`,
    links: {
      "bi bi-github": "https://github.com/shaheem-pp/Routine-Pro-swiftui",
    },
    stack: ["Swift", "SwiftUI", "SwiftData"],
    status: "In-progress",
    category: "Personal Project",
    featured: false,
  },
  {
    title: "YouTube Downloader",
    image: "Project/images/yt-downloader/cover_image.png",
    shortContent:
      "A simple web app to download YouTube videos and audio in various formats, built with Flask.",
    description: `<h5>YouTube Downloader Flask – Download YouTube Videos Easily</h5>
<p>This project is a lightweight web application that allows users to download YouTube videos or extract audio in multiple formats. Built with Flask and leveraging pytube, it provides a clean, user-friendly interface for quick downloads without ads or clutter.</p>

<h5>Key Features:</h5>
<ul>
  <li>Download YouTube videos in MP4 or extract audio as MP3.</li>
  <li>Paste a YouTube link and choose your preferred format.</li>
  <li>Fast, ad-free, and privacy-friendly experience.</li>
  <li>Responsive UI for both desktop and mobile users.</li>
</ul>

<h5>How It Works:</h5>
<ul>
  <li>Paste a YouTube URL into the input field.</li>
  <li>Select the desired format (video or audio).</li>
  <li>Click download and receive your file in seconds.</li>
</ul>

<h5>Tech Stack & Contributions:</h5>
<ul>
  <li>Developed the Flask backend and integrated pytube for video/audio extraction.</li>
  <li>Designed a minimal, intuitive frontend with HTML and Bootstrap.</li>
  <li>Deployed the app for easy access and sharing.</li>
</ul>

<p>Open-source and available on <a href=\"https://github.com/shaheem-pp/yt-downaloader-flask\" target=\"_blank\">GitHub</a>.</p>`,
    links: {
      "bi bi-github": "https://github.com/shaheem-pp/yt-downaloader-flask",
    },
    stack: ["Flask", "Python", "pytube", "Bootstrap"],
    status: "Completed",
    category: "Personal Project",
    featured: false,
  },
  {
    title: "TPLBrowser",
    image: "Project/images/ios/TPL.png",
    shortContent:
      "A SwiftUI-based browser and map app to explore Toronto Public Library branches with WebKit integration.",
    description: `<h5>TPLBrowser – Toronto Public Library Explorer</h5>
        <p><strong>TPLBrowser</strong> is a SwiftUI-based iOS application that lets users explore Toronto Public Library branches with an interactive map, location services, and in-app browser functionality.</p>
        
        <h5>Key Features:</h5>
        <ul>
          <li><strong>MapKit Integration:</strong> Displays all TPL branches on a map with location pins and details.</li>
          <li><strong>GeoJSON Parsing:</strong> Parses real branch data from Toronto’s open data GeoJSON feed to render markers dynamically.</li>
          <li><strong>WebKit Embedded Browser:</strong> Allows users to browse the TPL website within the app using WKWebView.</li>
          <li><strong>Swift Concurrency:</strong> Uses <code>async/await</code> to fetch and decode data efficiently.</li>
          <li><strong>CoreLocation Support:</strong> Displays user's location and alerts when location permissions are denied.</li>
        </ul>
        
        <h5>My Contributions:</h5>
        <ul>
          <li>Designed and built the entire UI using SwiftUI with MVVM architecture.</li>
          <li>Implemented location permission alerts, error handling, and web navigation logic.</li>
          <li>Parsed complex GeoJSON into Swift structs for mapping purposes.</li>
        </ul>
        
        <p><strong>TPLBrowser</strong> combines education, civic data, and clean UI to offer a lightweight but purposeful tool for navigating public libraries in Toronto.</p>`,
    links: {
      "bi bi-github": "https://github.com/shaheem-pp/TPLBrowser",
    },
    stack: ["SwiftUI", "MapKit", "CoreLocation", "WebKit", "GeoJSON", "Xcode"],
    status: "Completed",
    category: "Learning Project",
    featured: false,
  },
  {
    title: "WordWeaver",
    image: "Project/images/wordweaver/cover.png",
    shortContent:
      "A minimalist web app that transforms user input into beautifully animated typographic art using Flask and WebGL.",
    description: `<h5>WordWeaver – Typographic Visualizer</h5>
<p><strong>WordWeaver</strong> is a Flask-based generative design application that brings typography to life. It turns user-provided text into dynamic, animated visuals using the power of WebGL, p5.js, and shader magic-right from the browser.</p>

<h5>Key Features:</h5>
<ul>
  <li><strong>Interactive Input:</strong> Users can input any word or phrase to instantly generate personalized typographic animations.</li>
  <li><strong>WebGL Rendering:</strong> Renders characters in real-time using fragment shaders, vertex shaders, and a clean visual pipeline.</li>
  <li><strong>Minimalist Design:</strong> Clean UI focused on showcasing the visuals with subtle motion and glowing effects.</li>
  <li><strong>Real-time Canvas:</strong> Utilizes HTML5 canvas, p5.js, and Three.js for smooth and responsive visuals.</li>
</ul>

<h5>My Contributions:</h5>
<ul>
  <li>Developed the Flask backend and routing logic for user input processing.</li>
  <li>Integrated WebGL shaders to animate and morph text into glowing typographic art.</li>
  <li>Designed a dark, studio-themed interface optimized for focus and immersion.</li>
</ul>

<p><strong>WordWeaver</strong> is not just a visual toy-it’s a statement piece combining creativity, code, and real-time rendering, aimed at exploring the intersection of language and generative art.</p>`,
    links: {
      "bi bi-github": "https://github.com/shaheem-pp/WordWeaver-flask",
    },
    stack: ["Flask", "HTML", "CSS", "JavaScript", "p5.js", "WebGL"],
    status: "Completed",
    category: "Personal Project",
    featured: false,
  },
  {
    title: "Explore Bikes",
    image: "Project/images/explore/exp.png",
    shortContent:
      "A web platform for scheduling test drives and vehicle maintenance appointments.",
    description:
      "<p><strong>Explore Bikes</strong> is a vehicle booking and service management platform designed for a local vendor.</p><h5>Key Features:</h5><ul><li><strong>Test Drive Booking:</strong> Users can schedule test drives with ease.</li><li><strong>Service Appointments:</strong> Allows customers to book maintenance services and track service progress.</li><li><strong>Chatbot Assistance:</strong> Basic chatbot integration enables users to make bookings via chat.</li></ul><p>Developed as my final-year Academic Project Project using the <strong>Django framework</strong>.</p>",
    links: {},
    stack: ["Django", "HTML", "CSS", "JavaScript", "SQLite3"],
    status: "Completed",
    category: "Academic Project",
    featured: false,
  },
  {
    title: "Urban Nest",
    image: "Project/images/csd2103/urban_nest.png",
    shortContent:
      "A JavaScript-based e-commerce platform with dynamic shopping features.",
    description:
      "<p><strong>Urban Nest</strong> is a fully functional e-commerce website built for my CSD2103 course project.</p><h5>Key Features:</h5><ul><li><strong>Shopping Cart:</strong> Implemented using JavaScript with persistent local storage.</li><li><strong>Category-Based Filtering:</strong> Users can browse products efficiently.</li><li><strong>Dynamic Product Rendering:</strong> Fetches and displays products dynamically.</li><li><strong>Search Functionality:</strong> Helps users find products quickly.</li><li><strong>Session-Based Authentication:</strong> Secure login and authorization system.</li></ul><p><em>Disclaimer: Images used in this project are sourced from various online platforms.</em></p>",
    links: {
      "bi bi-github": "https://github.com/shaheem-pp/CSD2103-project.git",
    },
    stack: ["JavaScript", "HTML", "Bootstrap", "CSS"],
    status: "Completed",
    category: "Academic Project",
    featured: false,
  },
  {
    title: "ReciMe",
    image: "Project/images/csd4523/img1.png",
    shortContent:
      "A community-driven recipe-sharing platform built with Django.",
    description:
      "<p><strong>ReciMe</strong> is a collaborative platform for food lovers, built as part of my CSD4523 course project.</p><h5>Key Features:</h5><ul><li><strong>Discover Recipes:</strong> Browse a diverse collection of step-by-step recipes.</li><li><strong>Create & Share:</strong> Users can upload and share their own recipes.</li><li><strong>Engage with the Community:</strong> Like, bookmark, and review recipes.</li><li><strong>Chef Mode:</strong> A dedicated section for expert chefs to share high-quality content.</li></ul><p>More than just a recipe-sharing site, <em>ReciMe</em> fosters a passionate community for cooking enthusiasts.</p>",
    links: {
      "bi bi-github": "https://github.com/shaheem-pp/CSD4523-project.git",
      "bi bi-camera-video-fill": "https://youtu.be/PAoJ3Gwr8EI",
    },
    stack: [
      "Django",
      "HTML",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "jQuery",
      "AJAX",
      "SQLite3",
    ],
    status: "Completed",
    category: "Academic Project",
    featured: false,
  },
];
