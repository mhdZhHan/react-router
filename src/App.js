import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from "./components/screens/Home"
import About from "./components/screens/About"
import Contact from "./components/screens/Contact"
import Nav from './components/includes/Nav'
import FourNotFour from './components/screens/FourNotFour'
import Login from './components/screens/Login'
import ProjectsNav from './components/includes/ProjectsNav'
import Projects from './components/screens/projects/Projects'
import Android from './components/screens/projects/Android'
import Web from './components/screens/projects/Web'

function App() {
    return (
        <Router>
            {/* navigation links */}
            <Nav />

            {/* Create rout paths */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* No match rout (404) */}
                <Route path="*" element={<FourNotFour />} />

                {/* URL Redirection */}
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Navigate replace to="/login" />} />

                {/* Nested routes */}
                <Route path="/projects" element={<ProjectsNav />}>
                    <Route index element={<Projects />} /> {/* index route */}
                    <Route path="all" element={<Projects />} />
                    <Route path="android" element={<Android />} />
                    <Route path="web" element={<Web />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
