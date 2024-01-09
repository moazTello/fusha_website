import './App.css';
import { DataProvider } from './context/DataContext';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import Missing from './pages/Missing/Missing';
import Tours from './pages/Tours/Tours';
import PackageMain from './pages/PackagePage/PackageMain';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* <Route index element={<HomePage/>}/> */}
          <Route path='/fusha' element={<HomePage/>}/>
          <Route path='/tours' element={<Tours/>}/>
          <Route path='/packages' element={<PackageMain/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<Missing/>}/>
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;

// echo "# fusha" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/moazTello/fusha.git
// git push -u origin main


// git remote add origin https://github.com/moazTello/fusha.git
// git branch -M main
// git push -u origin main