import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Feed from './components/Feed';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />}></Route>
          <Route path='/video/:id' element={<VideoDetail />}></Route>
          <Route path='/channel/:id' element={<ChannelDetail />}></Route>
          <Route path='/search/:searchTerm' element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
