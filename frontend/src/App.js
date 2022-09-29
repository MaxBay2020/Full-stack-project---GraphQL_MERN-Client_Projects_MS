import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/projects/:projectId' element={<ProjectPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    </Router>
  );
}

export default App;
