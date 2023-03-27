import img1 from "../img/traidingCourse1.webp";
import img2 from "../img/traidingCourse2.webp";
import img3 from "../img/traidingCourse3.webp";
import img4 from "../img/traidingCourse4.webp";
import img5 from "../img/traidingCourse5.webp";
import prog1 from "../img/prog1.jpg";
import prog2 from "../img/prog2.jpg";
import prog3 from "../img/prog3.jpg";
import prog4 from "../img/prog4.jpg";
import prog5 from "../img/prog5.jpg";

const coursesArray = [
    {
        id: 1,
        category: "Trading",
        title: "Investors Underground",
        companyName: "Investors Underground",
        img: img1,
        price: 997,
        whyWeChoseIt: [
            "Investors Underground (IU) has the most complete offering by far. With a clear educational path at a fairly reasonable price, it's our choice as the best overall stock trading course.",
        ],
        start: "29.03.2023",
        Pros: ["Clear educational path", "Reasonable price"],
        Cons: ["Advanced traders may not find it challenging enough"],
    },
    {
        id: 2,
        category: "Trading",
        title: "The Complete Foundation Stock Trading Course",
        companyName: "Udemy",
        img: img2,
        price: 129.99,
        whyWeChoseIt: [
            "This comprehensive course covers everything a beginner trader needs to know, from understanding the stock market and technical analysis to creating a trading plan and managing risk. With over 27 hours of on-demand video, this course is great value for money.",
        ],
        start: "01.04.2023",
        Pros: ["Great value for money"],
        Cons: ["Not ideal for intermediate or advanced traders"],
    },
    {
        id: 3,
        category: "Trading",
        title: "Technical Analysis",
        companyName: "Khan Academy",
        img: img3,
        price: 0,
        whyWeChoseIt: [
            "Khan Academy's Technical Analysis course is a great option for anyone who wants to learn the basics of technical analysis for free. The course covers topics such as candlestick charts, trend lines, and support and resistance levels.",
        ],
        start: "05.04.2023",
        Pros: ["Free"],
        Cons: ["Doesn't cover all aspects of trading"],
    },
    {
        id: 4,
        category: "Trading",
        title: "Stock Trading & Investing for Beginners",
        companyName: "Udemy",
        img: img4,
        price: 149.99,
        whyWeChoseIt: [
            "This course is a great starting point for anyone new to the stock market. It covers the basics of stock trading and investing, including understanding stocks and their valuation, creating a trading plan, and managing risk.",
        ],
        start: "10.04.2023",
        Pros: ["Covers the basics of stock trading and investing"],
        Cons: ["Not ideal for intermediate or advanced traders"],
    },
    {
        id: 5,
        category: "Trading",
        title: "Options Trading Course",
        companyName: "Investopedia Academy",
        img: img5,
        price: 299,
        whyWeChoseIt: [
            "Investopedia Academy's Options Trading Course is a great option for anyone who wants to learn about options trading. The course covers topics such as options pricing, strategies for buying and selling options, and risk management.",
        ],
        start: "15.04.2023",
        Pros: ["Covers options trading in detail"],
        Cons: [
            "Not ideal for beginners or those unfamiliar with options trading",
        ],
    },

    {
        id: 10,
        category: "Programming",
        title: "The Web Developer Bootcamp",
        companyName: "Udemy",
        img: prog1,
        price: 149.99,
        whyWeChoseIt: [
            "This course is a comprehensive introduction to web development. It covers HTML, CSS, JavaScript, Node.js, and more. With over 60 hours of on-demand video, this course is a great value for money.",
        ],
        start: "01.05.2023",
        Pros: ["Comprehensive", "Great value for money"],
        Cons: [""],
    },
    {
        id: 11,
        category: "Programming",
        title: "Java Programming Masterclass",
        companyName: "Udemy",
        img: prog2,
        price: 129.99,
        whyWeChoseIt: [
            "This course is a comprehensive introduction to Java programming. It covers Java basics, object-oriented programming, and more advanced topics. With over 80 hours of on-demand video, this course is a great value for money.",
        ],
        start: "05.05.2023",
        Pros: ["Comprehensive", "Great value for money"],
        Cons: [""],
    },
    {
        id: 12,
        category: "Programming",
        title: "Python for Data Science",
        companyName: "Coursera",
        img: prog3,
        price: 49,
        whyWeChoseIt: [
            "This course covers the basics of Python programming and data science. It's a great option for anyone who wants to learn data analysis and machine learning with Python. The course is taught by experienced instructors and has great reviews.",
        ],
        start: "10.05.2023",
        Pros: ["Great instructors", "Great reviews"],
        Cons: [""],
    },
    {
        id: 13,
        category: "Programming",
        title: "The Complete JavaScript Course",
        companyName: "Udemy",
        img: prog4,
        price: 129.99,
        whyWeChoseIt: [
            "This course is a comprehensive introduction to JavaScript. It covers JavaScript basics, DOM manipulation, and more advanced topics. With over 27 hours of on-demand video, this course is great value for money.",
        ],
        start: "15.05.2023",
        Pros: ["Comprehensive", "Great value for money"],
        Cons: [""],
    },
    {
        id: 14,
        category: "Programming",
        title: "Introduction to Computer Science",
        companyName: "Harvard University",
        img: prog5,
        price: 0,
        whyWeChoseIt: [
            "This course is an introduction to computer science and programming. It covers topics such as abstraction, algorithms, data structures, encapsulation, resource management, security, and software engineering. The course is taught by renowned Harvard professors and is completely free.",
        ],
        start: "20.05.2023",
        Pros: ["Taught by renowned Harvard professors", "Completely free"],
        Cons: [""],
    },
];

export default coursesArray;
