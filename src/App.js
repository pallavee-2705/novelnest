import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, BookDetail, Store } from './pages';
import { Navbar, Footer } from './components';
import { Toaster } from 'react-hot-toast';
 
function App() {
  return (
    // <StateContext>
      <Router>
        <Layout>
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<BookDetail />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Layout>
      </Router>
    // </StateContext>
  );
}

function Layout({ children }) {
  // You can add any additional layout components or styling here
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default App;
