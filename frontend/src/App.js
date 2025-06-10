import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Header, 
  Sidebar, 
  CategoryFilter, 
  VideoGrid, 
  VideoPlayer,
  mockVideos 
} from './components';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Filter videos based on category and search
  const filteredVideos = mockVideos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle functions
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Video selection
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleBackToHome = (video = null) => {
    if (video) {
      setSelectedVideo(video);
    } else {
      setSelectedVideo(null);
      setCurrentPage('home');
    }
  };

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#111827';
    } else {
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <BrowserRouter>
        <Header 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <Sidebar 
          darkMode={darkMode}
          isOpen={sidebarOpen}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <div className="p-6">
            {selectedVideo ? (
              <VideoPlayer 
                video={selectedVideo}
                darkMode={darkMode}
                onBack={handleBackToHome}
              />
            ) : (
              <>
                <CategoryFilter 
                  darkMode={darkMode}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                
                {filteredVideos.length > 0 ? (
                  <VideoGrid 
                    darkMode={darkMode}
                    videos={filteredVideos}
                    onVideoClick={handleVideoClick}
                  />
                ) : (
                  <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <h3 className="text-xl font-semibold mb-2">No videos found</h3>
                    <p>Try adjusting your search or category filter</p>
                  </div>
                )}
              </>
            )}
          </div>
        </main>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/watch/:id" element={<div />} />
          <Route path="/channel/:id" element={<div />} />
          <Route path="/search" element={<div />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;