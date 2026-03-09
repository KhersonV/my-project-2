# 📚 Online Courses Platform

A modern web application for browsing and purchasing online courses in various categories: Trading, IT, and Travel. This project demonstrates the use of modern React technologies with Redux state management.

## 🎯 Project Description

This is a fully-functional online learning platform that allows users to:

- Browse course catalog by categories
- Read detailed articles and reviews
- Add courses to shopping cart
- Save favorite courses
- View detailed course information (price, pros, cons)

## ✨ Key Features

### 🏠 Home Page

- Interactive course slider (Swiper)
- List of relevant educational articles
- Quick navigation through categories

### 📖 Course Catalog

- **Trading** - courses on trading and investments
- **IT/Programming** - courses on programming and development
- **Travel** - courses on travel

### 🛒 Shopping Cart

- Add/remove courses
- Automatic total price calculation
- Visual display of item count

### ❤️ Favorites

- Save courses for later viewing
- Favorite course counter in header
- Quick access to liked materials

### 📄 Detailed Course Information

- Title and description
- Course price
- Pros and cons
- Reasons for course selection
- Images

## 🚀 Technologies

### Frontend

- **React 18.2.0** - modern library for building user interfaces
- **React Router 6.9.0** - routing and navigation
- **Redux Toolkit 1.9.3** - global state management
- **React Redux 8.0.5** - React bindings for Redux

### UI Libraries

- **Material-UI (MUI) 5.11** - modern components and icons
- **Emotion** - component styling
- **Swiper 9.1.1** - carousel/slider for the home page

### Additional

- **Lodash 4.17.23** - utility library for data manipulation
- **Create React App** - build and development tooling

## 📁 Project Structure

```
src/
├── components/
│   ├── ArticleList/        # Article list
│   ├── Cart/               # Shopping cart
│   ├── Category/           # Category page
│   ├── CoursesPage/        # Course display
│   ├── Favorites/          # Favorite courses
│   ├── Footer/             # Site footer
│   ├── Header/             # Header with navigation
│   ├── Home/               # Home page
│   ├── IconMenu/           # Icon menu
│   ├── Main/               # Main routing
│   ├── redux/              # Redux store and reducers
│   │   ├── store.js
│   │   ├── cartReducer.js
│   │   └── likeReducer.js
│   ├── Reviews/            # Reviews
│   └── Swiper/             # Slider component
├── utils/
│   ├── articlesArray.js    # Articles data
│   └── coursesArray.js     # Courses data
├── img/                    # Images
├── App.js                  # Main component
└── index.js                # Entry point
```

## 🛠️ Installation and Setup

### Prerequisites

- Node.js (version 14.0 or higher)
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run in Development Mode

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

An optimized version will be created in the `build/` folder

### Run Tests

```bash
npm test
```

## 🎨 Implementation Features

### State Management

The application uses **Redux Toolkit** for global state management:

- `cartReducer` - manages shopping cart
- `likeReducer` - manages favorite courses

### Routing

Implemented using **React Router v6**:

- `/` - home page
- `/:category` - category course page
- `/:category/:id` - detailed article information
- `/cart` - shopping cart
- `/favorites` - favorites

### Component-Based Architecture

Modular architecture with reusable components, which simplifies maintenance and project scaling.

## 🎓 What I Learned

- Working with modern React stack
- State management with Redux Toolkit
- Routing in React applications
- Working with Material-UI components
- Creating responsive interfaces
- Organizing React project structure
- Working with external libraries (Swiper)

## 🔄 Future Improvements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Payment system
- [ ] Course filtering and search
- [ ] Mobile responsive design
- [ ] Review and rating system
- [ ] User dashboard
- [ ] Course progress tracking

## 📱 Screenshots

<!-- Add screenshots of your application here -->

## 👨‍💻 Author

Developed as a portfolio project to demonstrate skills with React and modern frontend stack.

## 📄 License

This project was created for educational purposes.
