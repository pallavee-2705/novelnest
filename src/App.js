import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, BookDetail, Store } from './pages';
import { BookNavBar, Footer } from './components';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:heading" element={<Layout><BookDetail /></Layout>} />
          <Route path="/store" element={<Layout><Store /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

function Layout({ children }) {
  // You can add any additional layout components or styling here
  return (
    <div>
      <BookNavBar />
      {children}
      <Footer />
    </div>
  );
}

export default App;
