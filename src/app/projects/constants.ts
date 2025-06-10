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


export const projects = [{
    title: "MealMind AI",
    // image: "Project/images/grocery/wa10.png",
    image: "Project/images/grocery/wa9.png",
    shortContent: "A WhatsApp-based AI assistant that helps users plan meals, manage groceries, and reduce food waste through intelligent meal planning.",
    description: `<h5>MealMind AI - Smarter Meal Planning Through Chat</h5>
<p>MealMind AI is a WhatsApp-based conversational assistant that helps users plan weekly meals, track their pantry, and generate smart grocery lists—automatically and efficiently.</p>

<p><em>Status:</em> Core flows for registration, meal planning, and Gemini-powered recommendations are functional. Inventory syncing and expiry tracking are in development.</p>

<h5>Impact & Outcomes:</h5>
<ul>
    <li><strong>Reduced Food Waste:</strong> Uses fridge/pantry data to suggest meals that prevent food from being forgotten or discarded.</li>
    <li><strong>Time-Saving Automation:</strong> Eliminates manual meal planning with AI-generated, personalized suggestions.</li>
    <li><strong>Inventory Awareness:</strong> Helps users track available groceries and quantities with reminder and expiry prompts.</li>
    <li><strong>Conversational UX:</strong> Entire workflow runs through WhatsApp—no app install needed. Users interact via buttons and prompts.</li>
</ul>

<h5>How It Works:</h5>
<ul>
    <li><strong>User Onboarding:</strong> When a user sends "Hi", the system checks for an existing profile. If not found, it registers them using their name and email.</li>
    <li><strong>Action Menu:</strong> Users can:
        <ul>
            <li>View their current meal plan</li>
            <li>Update current grocery inventory</li>
            <li>Create a new weekly meal plan</li>
        </ul>
    </li>
    <li><strong>Planning Flow:</strong> Users are prompted to:
        <ul>
            <li>Select how many meals per day</li>
            <li>Choose how many people per meal</li>
            <li>Specify meal types (breakfast, lunch, snacks, dinner, etc.)</li>
        </ul>
    </li>
    <li><strong>AI Integration:</strong> Gemini AI suggests meal combinations based on user input, preferred ingredients, and available items—even if not stored in the database.</li>
    <li><strong>Final Output:</strong> The user receives a list of 7-day meal plans (e.g., 14 meals for 2-per-day), followed by a full grocery list with item names and quantities.</li>
    <li><strong>Post-Planning Actions:</strong> Users can confirm the list, mark groceries as purchased, make changes, or set expiry tracking reminders for perishables.</li>
</ul>

<h5>My Contributions:</h5>
<ul>
    <li>Designed the end-to-end WhatsApp conversation flow and decision tree.</li>
    <li>Integrated WhatsApp Cloud API with FastAPI to handle user messaging and responses.</li>
    <li>Implemented Gemini AI prompt generation for adaptive, contextual meal planning.</li>
    <li>Built backend user session and inventory management logic using MySQL.</li>
</ul>

<p>This project was inspired by the daily frustration of forgetting what’s already in the fridge and unintentionally wasting food. MealMind AI transforms that pain point into a seamless, AI-powered chat experience for intentional living.</p>`,
    links: {
        // "bi bi-github": "https://github.com/shaheem-pp/meal-mind-ai" // Replace or update if private or not ready
    },
    stack: ["Gemini AI", "WhatsApp Cloud API", "FastAPI", "MySQL"],
    status: "In-progress",
    category: "Personal Project",
    featured: true
}, {
    title: "Agua India App",
    image: "Project/images/agua/aguaGPTgen.png",
    shortContent: "A premium packaged drinking water delivery app offering a wide range of products and services.",
    description: "<h5>Agua India App - Your Premium Water Delivery Service</h5><p>The Agua India App simplifies premium bottled water delivery, offering a wide variety of products with fast, reliable service and real-time tracking for efficient delivery.</p><h5>Key Features:</h5><ul>    <li><strong>Wide Range of Products:</strong> Choose from 20L water jars, dispensers, and accessories, from top brands like Bisleri, Bailley, Caspian, and Officers Choice Blue.</li>    <li><strong>Affordable Pricing and Offers:</strong> Buy at low prices with great discounts, coupon offers, and promotions.</li>    <li><strong>Fast and Secure Checkout:</strong> Payment options include net-banking, UPI, credit/debit cards, and e-wallets.</li>    <li><strong>Assured Quality:</strong> Sourced from well-recognized water plants, ensuring the best quality water for consumers.</li>    <li><strong>On-time Delivery:</strong> Products delivered within 24 hours, increasing reliability and customer trust.</li></ul><h5>Impact:</h5><ul>    <li><strong>Order Processing Efficiency:</strong> Optimized workflows reducing delivery time by 20%, leading to a 25% increase in customer satisfaction.</li>    <li><strong>Vendor Dashboard:</strong> Developed a real-time analytics dashboard, improving sales productivity by 40% for vendors.</li>    <li><strong>Scalable Backend:</strong> Built and maintained the backend for 20,000+ users across Kochi, Chennai, Hyderabad, and Bangalore, ensuring reliable service across these cities.</li>    <li><strong>Uptime & Reliability:</strong> Ensured 99% uptime by resolving issues promptly, keeping customer experience consistent and reliable.</li></ul><h5>Improvements:</h5><ul>    <li>Optimized legacy code and database queries, significantly improving performance.</li>    <li>Enhanced user interface for a smoother, more intuitive experience.</li>    <li>Increased service area coverage, making Agua India available in more locations.</li></ul>",
    links: {
        "bi bi-apple": "https://apps.apple.com/in/app/agua-india/id1503679371?platform=iphone",
        "bi bi-google": "https://play.google.com/store/apps/details?id=appu.agua&hl=en_IN"
    },
    stack: ["PostGIS", "Google Maps Matrix API", "Django", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript", "AJAX", "jQuery", "Bootstrap"],
    status: "Completed",
    category: "Professional Project",
    featured: true
}, {
    title: "Carro App",
    image: "Project/images/Cynbus/carro2.png",
    shortContent: "A comprehensive car care app offering services like car wash booking, used car valuation, and service comparison.",
    description: "<h5>Carro App - Your Ultimate Car Care Companion</h5><p>The Carro App simplifies car care with an intuitive interface and a range of essential features.</p><h5>Key Features:</h3><ul>    <li><strong>Car Wash Booking:</strong> Book a car wash in seconds. Find nearby centers, compare prices, and choose services at your convenience.</li>    <li><strong>Used Car Valuation:</strong> Get expert assistance with detailed inspection reports when buying a used car.</li>    <li><strong>Car Services Comparison:</strong> Compare rates, services, and amenities at nearby car service centers.</li>    <li><strong>Easy Payment Options:</strong> Secure your service with a small booking fee, with payments via cash or online at the service center.</li></ul><h5>Improvements:</h3><ul>    <li>Improved user experience with a smoother, more intuitive interface.</li>    <li>Performance enhancements for faster load times and a seamless booking experience.</li>    <li>Expanded service areas now available in more locations.</li>    <li>Minor bug fixes for an overall improved experience.</li></ul>",
    links: {
        "bi bi-apple": "https://apps.apple.com/in/app/carro-your-car-app/id6475821919",
        "bi bi-google": "https://play.google.com/store/apps/details?id=com.findandpark.app&pcampaignid=web_share"
    },
    stack: ["PostGIS", "Django", "Python", "HTML", "CSS", "JavaScript", "AJAX", "jQuery", "Bootstrap"],
    status: "Completed",
    category: "Professional Project",
    featured: true
}, {
    title: "Shoapp",
    image: "Project/images/Cynbus/shoapp2.png",
    shortContent: "Shoapp brings the mall to your fingertips, allowing you to shop from local stores and get everything delivered right to your doorstep.",
    description: "<h5>Shoapp - Your Ultimate Local Shopping Companion</h5><p>Shoapp, the app that revolutionizes shopping by bringing local stores right to your fingertips.</p><h5>Key Features:</h5><ul>    <li><strong>Shop From Local Stores:</strong> Access a wide range of products from local stores, including groceries, fashion, electronics, and home decor.</li>    <li><strong>Compare Prices and Deals:</strong> Compare prices and find exclusive deals to ensure you always get the best value.</li>    <li><strong>Nearby Store Locator:</strong> Find nearby stores and view their available stock, saving time by showing the closest options.</li>    <li><strong>Convenient Delivery:</strong> Place orders with ease, and trusted delivery partners will bring purchases to your doorstep.</li>    <li><strong>Shopping History & Favorites:</strong> Track your shopping history and save favorite items for quick reordering.</li>    <li><strong>Tailored Recommendations:</strong> Get Personal Projectized product and deal recommendations based on your shopping preferences.</li>    <li><strong>User-Friendly Interface:</strong> Enjoy a simple and intuitive interface, making it easy for users of all ages.</li></ul>",
    links: {
        "bi bi-apple": "https://apps.apple.com/ca/app/sho-app-shopping-app/id6450304129?platform=iphone"
    },
    stack: ["PostgreSQL", "Django", "Python", "HTML", "CSS", "JavaScript", "AJAX", "jQuery", "Bootstrap"],
    status: "Completed",
    category: "Professional Project",
    featured: true
}, {
    title: "Vehicle & Area Tracking Systems",
    image: "Project/images/tracking.png",
    shortContent: "Backend systems built for tracking vehicles, areas, and optimizing delivery routes.",
    description: "<p><strong>Vehicle & Area Tracking Systems</strong> involves the development of backend solutions for efficient tracking and route optimization across multiple Client Project projects.</p><h5>Key Features:</h5><ul><li><strong>Vehicle Tracking:</strong> Real-time tracking of delivery vehicles using GPS data.</li><li><strong>PostGIS Integration:</strong> Utilizes PostGIS to track and store geospatial data of areas and locations.</li><li><strong>Delivery Route Optimization:</strong> Google Maps Matrix API integration to calculate the best routes for delivery vehicles.</li><li><strong>Legacy Code Optimization:</strong> Improved the performance of legacy database queries and models for existing systems.</li></ul><p>This backend solution plays a critical role in improving the efficiency of delivery operations for multiple Client Projects, involving different systems tailored to their specific needs.</p>",
    links: {},
    stack: ["PostGIS", "Google Maps Matrix API", "Django", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript", "AJAX", "jQuery", "Bootstrap"],
    status: "Completed",
    category: "Client Project",
    featured: false
}, {
    title: "Web Builder",
    image: "Project/images/web builder/build3.png",
    shortContent: "A Shopify alternative for Kerala businesses, offering custom domains, themes, and e-commerce management.",
    description: "<p><strong>Web Builder</strong> is a powerful e-commerce platform designed as a localized alternative to Shopify and Dhukhaan, tailored specifically for businesses in Kerala.</p>        <h5>Key Features:</h5>        <ul>            <li><strong>Easy Store Setup:</strong> Business owners can launch their online store with just a few clicks, without any coding knowledge.</li>            <li><strong>Custom Domains & Branding:</strong> Allows users to connect their own domain and Personal Projectize storefronts with unique themes.</li>            <li><strong>Flexible Product Management:</strong> Simplified inventory handling, pricing controls, and order tracking.</li>            <li><strong>Payment Gateway Integration:</strong> Supports local and global payment solutions for seamless transactions.</li>            <li><strong>Built-in SEO & Analytics:</strong> Helps businesses improve visibility and track performance effortlessly.</li>            <li><strong>Scalable & Affordable:</strong> A cost-effective solution compared to international platforms, with features tailored for local market needs.</li>        </ul>        <p>Designed to empower small and medium-sized businesses, <em>Web Builder</em> bridges the gap between local entrepreneurs and digital commerce, making online selling more accessible and profitable.</p>",
    links: {},
    stack: ["Django", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript", "AJAX", "jQuery", "Bootstrap"],
    status: "Completed",
    category: "Client Project",
    featured: true
}, {
    title: "Dattebayo",
    image: "Project/images/react/dattebayo.png",
    shortContent: "A React app built to showcase all characters in Naruto Anime.",
    description: "<p><strong>Narutopedia</strong> or <strong>Dattebayo</strong> is a web platform built as part of my Learning Project React using Typescript it uses <a href='https://api-dattebayo.vercel.app/docs' target='_blank'>Dattebayo API</a>. I tried to use proper architectures to learn how to reuse a component. </p>",
    links: {
        "bi bi-github": "https://github.com/shaheem-pp/dattebayo-react-ts",
        "bi bi-globe2": "https://dattebayo-react-ts.vercel.app/"
    },
    stack: ["React", "TypeScript"],
    status: "Completed",
    category: "Learning Project",
    featured: false
}, {
    title: "Food For All",
    image: "Project/images/foodforall/ffa.png",
    shortContent: "A platform that connects food donors with NGOs and volunteers to minimize food waste.",
    description: "<p><strong>Food For All</strong> is a web platform built during <em>Fosshack 3</em> to help restaurants and food providers donate surplus food efficiently.</p><h5>Key Features:</h5><ul><li><strong>Seamless Food Donation:</strong> Connects donors with NGOs and volunteers within a 5-10 km radius.</li><li><strong>Real-time Notifications:</strong> Nearby registered NGOs receive instant updates on available food.</li><li><strong>Location-Based Matching:</strong> Uses <strong>PostGIS</strong> to store and process geospatial data.</li><li><strong>REST API Integration:</strong> Ensures smooth communication between frontend (Next.js) and backend (Django).</li></ul><p>Unlike WhatsApp communities where messages often get lost, <em>Food For All</em> provides a structured, centralized solution to food wastage.</p>",
    links: {
        "bi bi-github": "https://github.com/AkshayBenny/food-surplus-detection"
    },
    stack: ["Django", "Next.js", "REST API", "PostGis"],
    status: "Completed",
    category: "Hackathon Project",
    featured: true
}, {
    title: "Explore Bikes",
    image: "Project/images/explore/exp.png",
    shortContent: "A web platform for scheduling test drives and vehicle maintenance appointments.",
    description: "<p><strong>Explore Bikes</strong> is a vehicle booking and service management platform designed for a local vendor.</p><h5>Key Features:</h5><ul><li><strong>Test Drive Booking:</strong> Users can schedule test drives with ease.</li><li><strong>Service Appointments:</strong> Allows customers to book maintenance services and track service progress.</li><li><strong>Chatbot Assistance:</strong> Basic chatbot integration enables users to make bookings via chat.</li></ul><p>Developed as my final-year Academic Project Project using the <strong>Django framework</strong>.</p>",
    links: {},
    stack: ["Django", "HTML", "CSS", "JavaScript", "SQLite3"],
    status: "Completed",
    category: "Academic Project",
    featured: false
}, {
    title: "Urban Nest",
    image: "Project/images/csd2103/urban_nest.png",
    shortContent: "A JavaScript-based e-commerce platform with dynamic shopping features.",
    description: "<p><strong>Urban Nest</strong> is a fully functional e-commerce website built for my CSD2103 course project.</p><h5>Key Features:</h5><ul><li><strong>Shopping Cart:</strong> Implemented using JavaScript with persistent local storage.</li><li><strong>Category-Based Filtering:</strong> Users can browse products efficiently.</li><li><strong>Dynamic Product Rendering:</strong> Fetches and displays products dynamically.</li><li><strong>Search Functionality:</strong> Helps users find products quickly.</li><li><strong>Session-Based Authentication:</strong> Secure login and authorization system.</li></ul><p><em>Disclaimer: Images used in this project are sourced from various online platforms.</em></p>",
    links: {
        "bi bi-github": "https://github.com/shaheem-pp/CSD2103-project.git"
    },
    stack: ["JavaScript", "HTML", "Bootstrap", "CSS"],
    status: "Completed",
    category: "Academic Project",
    featured: false
}, {
    title: "ReciMe",
    image: "Project/images/csd4523/img1.png",
    shortContent: "A community-driven recipe-sharing platform built with Django.",
    description: "<p><strong>ReciMe</strong> is a collaborative platform for food lovers, built as part of my CSD4523 course project.</p><h5>Key Features:</h5><ul><li><strong>Discover Recipes:</strong> Browse a diverse collection of step-by-step recipes.</li><li><strong>Create & Share:</strong> Users can upload and share their own recipes.</li><li><strong>Engage with the Community:</strong> Like, bookmark, and review recipes.</li><li><strong>Chef Mode:</strong> A dedicated section for expert chefs to share high-quality content.</li></ul><p>More than just a recipe-sharing site, <em>ReciMe</em> fosters a passionate community for cooking enthusiasts.</p>",
    links: {
        "bi bi-github": "https://github.com/shaheem-pp/CSD4523-project.git",
        "bi bi-camera-video-fill": "https://youtu.be/PAoJ3Gwr8EI"
    },
    stack: ["Django", "HTML", "Bootstrap", "CSS", "JavaScript", "jQuery", "AJAX", "SQLite3"],
    status: "Completed",
    category: "Academic Project",
    featured: false
}];