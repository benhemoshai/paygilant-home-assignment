import PostList from './components/PostList'
import DetailedPost from './components/DetailedPost'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import NewPost from './components/NewPost'

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<DetailedPost />} />
        <Route path="/new-post" element={<NewPost/>}></Route>
      </Routes>
      </main>
    </div>
  )
}

export default App
