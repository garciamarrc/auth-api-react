import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Blog } from "./pages/Blog"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
