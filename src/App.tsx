import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Login } from './Login'
import { Test1 } from './pages/Test1'

// GitHub Pages: base path sama kuin vite.config.ts base (ilman loppuslanttia)
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="test1" element={<Test1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
