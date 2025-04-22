import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AskQuestion from './pages/AskQuestion';
import ExploreTopics from './pages/ExploreTopics';
import LearningHistory from './pages/LearningHistory';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard';
import { BoardProvider } from './contexts/BoardContext';

function App() {
  return (
    <BoardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/explore" element={<ExploreTopics />} />
          <Route path="/history" element={<LearningHistory />} />
        </Routes>
      </BrowserRouter>
    </BoardProvider>
  );
}

export default App;