import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { HomePage } from './components/Home/HomePage'
import { ArticlePage } from './components/Article/ArticlePage'
import { Footer } from './components/Footer/Footer'
const App = () => {
  return (
    <div className='bg-dark-100 min-h-screen h-full'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
