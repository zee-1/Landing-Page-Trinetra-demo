import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProfessionalLanding from './components/Professional/ProfessionalLanding'
import TeamPage from './pages/TeamPage'
import BlogPage from './pages/BlogPage'
import StoryPage from './pages/StoryPage'
import ResourcesPage from './pages/ResourcesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfessionalLanding />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </Router>
  )
}

export default App