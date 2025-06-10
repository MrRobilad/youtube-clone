import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Mic, 
  Menu, 
  Bell, 
  Video, 
  User, 
  Home, 
  TrendingUp, 
  Users, 
  History, 
  Clock, 
  ThumbsUp, 
  PlaySquare,
  Settings,
  HelpCircle,
  Flag,
  MoreVertical,
  Share,
  Download,
  Plus,
  ChevronDown,
  Gamepad2,
  Music,
  Laptop,
  Film,
  Zap,
  ChefHat,
  GraduationCap,
  Play,
  Pause,
  Volume2,
  Maximize,
  ThumbsDown,
  Heart,
  MessageCircle,
  Filter,
  Sun,
  Moon
} from 'lucide-react';

// Mock Data
const mockVideos = [
  {
    id: 1,
    title: "Epic Gaming Setup Tour 2025 - Ultimate PC Build!",
    channel: "TechMaster Pro",
    views: "2.3M views",
    uploaded: "2 days ago",
    duration: "12:45",
    thumbnail: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    channelAvatar: "https://images.pexels.com/photos/3761264/pexels-photo-3761264.jpeg",
    category: "Gaming",
    description: "Check out my latest gaming setup with RTX 4090 and all the RGB you could want!",
    likes: "156K",
    dislikes: "2.1K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Live Concert: Amazing Night Under the Stars",
    channel: "MusicWorld Live",
    views: "5.7M views",
    uploaded: "5 days ago",
    duration: "45:20",
    thumbnail: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    channelAvatar: "https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg",
    category: "Music",
    description: "An unforgettable live performance featuring multiple artists in an outdoor amphitheater.",
    likes: "289K",
    dislikes: "5.2K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "iPhone 16 Pro Review: The Future is Here!",
    channel: "Tech Reviews Daily",
    views: "8.2M views",
    uploaded: "1 week ago",
    duration: "18:30",
    thumbnail: "https://images.pexels.com/photos/8000585/pexels-photo-8000585.jpeg",
    channelAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzQ5NTYwNTIwfDA&ixlib=rb-4.1.0&q=85",
    category: "Technology",
    description: "Complete review of the latest iPhone with all new features and camera improvements.",
    likes: "412K",
    dislikes: "18K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Behind the Scenes: Making of a Blockbuster",
    channel: "Hollywood Insider",
    views: "3.1M views",
    uploaded: "3 days ago",
    duration: "22:15",
    thumbnail: "https://images.pexels.com/photos/32500485/pexels-photo-32500485.jpeg",
    channelAvatar: "https://images.pexels.com/photos/3761264/pexels-photo-3761264.jpeg",
    category: "Entertainment",
    description: "Get exclusive behind-the-scenes footage from the latest action movie production.",
    likes: "98K",
    dislikes: "3.4K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Championship Final: Best Goals Compilation",
    channel: "Sports Central",
    views: "12.5M views",
    uploaded: "6 hours ago",
    duration: "15:40",
    thumbnail: "https://images.pexels.com/photos/32475933/pexels-photo-32475933.jpeg",
    channelAvatar: "https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg",
    category: "Sports",
    description: "The most incredible goals from this year's championship matches.",
    likes: "567K",
    dislikes: "12K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "Master Chef: 5-Course Italian Feast",
    channel: "Cooking with Maria",
    views: "4.8M views",
    uploaded: "4 days ago",
    duration: "35:25",
    thumbnail: "https://images.pexels.com/photos/8949043/pexels-photo-8949043.jpeg",
    channelAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzQ5NTYwNTIwfDA&ixlib=rb-4.1.0&q=85",
    category: "Food",
    description: "Learn to cook an authentic Italian feast from appetizers to dessert.",
    likes: "234K",
    dislikes: "6.7K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Physics Explained: Quantum Mechanics Made Simple",
    channel: "Science Academy",
    views: "1.9M views",
    uploaded: "1 week ago",
    duration: "28:10",
    thumbnail: "https://images.pexels.com/photos/32274990/pexels-photo-32274990.jpeg",
    channelAvatar: "https://images.pexels.com/photos/3761264/pexels-photo-3761264.jpeg",
    category: "Education",
    description: "Understanding quantum mechanics through easy-to-follow explanations and animations.",
    likes: "87K",
    dislikes: "2.3K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "Next-Gen Gaming: RTX 4090 Performance Test",
    channel: "Gaming Benchmarks",
    views: "6.4M views",
    uploaded: "2 days ago",
    duration: "16:55",
    thumbnail: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    channelAvatar: "https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg",
    category: "Gaming",
    description: "Testing the latest RTX 4090 on the most demanding games at 4K resolution.",
    likes: "298K",
    dislikes: "11K",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const mockComments = [
  {
    id: 1,
    user: "TechEnthusiast2025",
    avatar: "https://images.pexels.com/photos/3761264/pexels-photo-3761264.jpeg",
    comment: "This is exactly what I needed! Great explanation and the setup looks incredible.",
    likes: 234,
    replies: 12,
    time: "2 hours ago"
  },
  {
    id: 2,
    user: "GamerPro",
    avatar: "https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg",
    comment: "Amazing content! Can you do a follow-up video on cable management?",
    likes: 156,
    replies: 8,
    time: "5 hours ago"
  },
  {
    id: 3,
    user: "TechReviewer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzQ5NTYwNTIwfDA&ixlib=rb-4.1.0&q=85",
    comment: "The production quality keeps getting better! Keep up the great work 👍",
    likes: 89,
    replies: 4,
    time: "1 day ago"
  }
];

const categories = [
  { name: "All", icon: Filter },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Music", icon: Music },
  { name: "Technology", icon: Laptop },
  { name: "Entertainment", icon: Film },
  { name: "Sports", icon: Zap },
  { name: "Food", icon: ChefHat },
  { name: "Education", icon: GraduationCap }
];

// Header Component
export const Header = ({ darkMode, toggleDarkMode, toggleSidebar, searchQuery, setSearchQuery }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSidebar}
            className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}
          >
            <Menu className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
          </button>
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-red-600 fill-current" />
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>YouTube</span>
            </div>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center">
            <div className={`flex-1 flex items-center border ${darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'} rounded-l-full`}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-2 bg-transparent outline-none ${darkMode ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'}`}
              />
            </div>
            <button className={`px-6 py-2 border border-l-0 ${darkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'} rounded-r-full transition-colors`}>
              <Search className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
            </button>
            <button className={`ml-2 p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
              <Mic className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}
          >
            {darkMode ? 
              <Sun className="w-6 h-6 text-white" /> : 
              <Moon className="w-6 h-6 text-gray-700" />
            }
          </button>
          <button className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}>
            <Video className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
          </button>
          <button className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}>
            <Bell className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
          </button>
          <button className={`p-2 rounded-full hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}>
            <User className={`w-8 h-8 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ darkMode, isOpen, currentPage, setCurrentPage }) => {
  const menuItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: TrendingUp, label: "Trending", id: "trending" },
    { icon: Users, label: "Subscriptions", id: "subscriptions" },
  ];

  const libraryItems = [
    { icon: History, label: "History", id: "history" },
    { icon: Clock, label: "Watch Later", id: "watch-later" },
    { icon: ThumbsUp, label: "Liked Videos", id: "liked" },
    { icon: PlaySquare, label: "Your Videos", id: "your-videos" },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full ${darkMode ? 'bg-gray-900' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300 z-40 ${isOpen ? 'w-64' : 'w-16'} overflow-hidden`}>
      <div className="py-2">
        {/* Main Navigation */}
        <div className="px-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center space-x-6 px-3 py-2 rounded-lg transition-colors ${
                currentPage === item.id 
                  ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black')
                  : (darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700')
              }`}
            >
              <item.icon className="w-6 h-6 flex-shrink-0" />
              <span className={`${isOpen ? 'block' : 'hidden'} font-medium`}>{item.label}</span>
            </button>
          ))}
        </div>

        {isOpen && (
          <>
            <hr className={`my-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
            
            {/* Library */}
            <div className="px-2 space-y-1">
              <h3 className={`px-3 py-2 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Library
              </h3>
              {libraryItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center space-x-6 px-3 py-2 rounded-lg transition-colors ${
                    currentPage === item.id 
                      ? (darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black')
                      : (darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700')
                  }`}
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <hr className={`my-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />

            {/* Subscriptions */}
            <div className="px-2 space-y-1">
              <h3 className={`px-3 py-2 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Subscriptions
              </h3>
              {['TechMaster Pro', 'MusicWorld Live', 'Cooking with Maria'].map((channel, index) => (
                <button
                  key={channel}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  <img
                    src={[
                      "https://images.pexels.com/photos/3761264/pexels-photo-3761264.jpeg",
                      "https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzQ5NTYwNTIwfDA&ixlib=rb-4.1.0&q=85"
                    ][index]}
                    alt={channel}
                    className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                  />
                  <span className="font-medium text-sm truncate">{channel}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

// Category Filter Component
export const CategoryFilter = ({ darkMode, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-6">
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.name
                  ? 'bg-red-600 text-white'
                  : (darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Video Card Component
export const VideoCard = ({ video, darkMode, onVideoClick }) => {
  return (
    <div 
      className={`cursor-pointer group ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} rounded-lg transition-colors p-2`}
      onClick={() => onVideoClick(video)}
    >
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="flex mt-3 space-x-3">
        <img
          src={video.channelAvatar}
          alt={video.channel}
          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-sm leading-5 line-clamp-2 ${darkMode ? 'text-white' : 'text-black'} group-hover:text-red-600 transition-colors`}>
            {video.title}
          </h3>
          <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {video.channel}
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {video.views} • {video.uploaded}
          </p>
        </div>
      </div>
    </div>
  );
};

// Video Grid Component
export const VideoGrid = ({ darkMode, videos, onVideoClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          darkMode={darkMode}
          onVideoClick={onVideoClick}
        />
      ))}
    </div>
  );
};

// Video Player Component
export const VideoPlayer = ({ video, darkMode, onBack }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const relatedVideos = mockVideos.filter(v => v.id !== video.id).slice(0, 10);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Video Section */}
      <div className="lg:col-span-2">
        {/* Video Player */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            src={video.embedUrl}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <div>
          <h1 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
            {video.title}
          </h1>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={video.channelAvatar}
                alt={video.channel}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                  {video.channel}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  2.5M subscribers
                </p>
              </div>
              <button
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  isSubscribed
                    ? (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black')
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <div className={`flex items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full`}>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-l-full transition-colors ${
                    isLiked ? 'text-red-600' : (darkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200')
                  }`}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>{video.likes}</span>
                </button>
                <button className={`flex items-center space-x-2 px-4 py-2 border-l ${darkMode ? 'border-gray-700 text-white hover:bg-gray-700' : 'border-gray-300 text-black hover:bg-gray-200'} rounded-r-full transition-colors`}>
                  <ThumbsDown className="w-5 h-5" />
                  <span>{video.dislikes}</span>
                </button>
              </div>
              
              <button className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-full transition-colors`}>
                <Share className="w-5 h-5" />
                <span>Share</span>
              </button>
              
              <button className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-full transition-colors`}>
                <Download className="w-5 h-5" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Video Description */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-4 mb-6`}>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              {video.views} • {video.uploaded}
            </div>
            <p className={`${darkMode ? 'text-white' : 'text-black'} ${showDescription ? '' : 'line-clamp-2'}`}>
              {video.description}
            </p>
            <button
              onClick={() => setShowDescription(!showDescription)}
              className={`mt-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-red-600 transition-colors`}
            >
              {showDescription ? 'Show less' : 'Show more'}
            </button>
          </div>

          {/* Comments Section */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                1,247 Comments
              </h3>
              <button className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <Filter className="w-5 h-5" />
                <span>Sort by</span>
              </button>
            </div>

            {/* Add Comment */}
            <div className="flex space-x-3 mb-6">
              <img
                src="https://images.pexels.com/photos/3761264/pexels-photo-3761264.jpeg"
                alt="Your avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className={`w-full bg-transparent border-b-2 ${darkMode ? 'border-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-black placeholder-gray-500'} pb-2 outline-none focus:border-red-600 transition-colors`}
                />
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {mockComments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <img
                    src={comment.avatar}
                    alt={comment.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
                        {comment.user}
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {comment.time}
                      </span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      {comment.comment}
                    </p>
                    <div className="flex items-center space-x-4">
                      <button className={`flex items-center space-x-1 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-xs">{comment.likes}</span>
                      </button>
                      <button className={`flex items-center space-x-1 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <button className={`text-xs font-medium ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Videos Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-20">
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            Up next
          </h3>
          <div className="space-y-3">
            {relatedVideos.map((relatedVideo) => (
              <div
                key={relatedVideo.id}
                className={`flex space-x-3 cursor-pointer group ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} rounded-lg p-2 transition-colors`}
                onClick={() => onBack(relatedVideo)}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={relatedVideo.thumbnail}
                    alt={relatedVideo.title}
                    className="w-40 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {relatedVideo.duration}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-medium text-sm leading-5 line-clamp-2 ${darkMode ? 'text-white' : 'text-black'} group-hover:text-red-600 transition-colors`}>
                    {relatedVideo.title}
                  </h4>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {relatedVideo.channel}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {relatedVideo.views} • {relatedVideo.uploaded}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { mockVideos, mockComments, categories };