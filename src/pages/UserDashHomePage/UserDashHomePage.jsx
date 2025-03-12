import React, { useState } from "react";
import {
  Book,
  Clock,
  DollarSign,
  BarChart3,
  BookOpen,
  Heart,
  Bookmark,
  Search,
  Menu,
  X,
  Plus,
  User,
  LogOut,
  Bell,
  TrendingUp,
  Calendar,
  Users,
  Tag,
  Star,
  Award,
  BookMarked,
  Gift,
  Zap,
  List,
  Clock8,
  Target,
} from "lucide-react";

const UserDashHomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample data for charts and statistics
  const readingStats = [
    { month: "Jan", hours: 12 },
    { month: "Feb", hours: 19 },
    { month: "Mar", hours: 25 },
    { month: "Apr", hours: 18 },
    { month: "May", hours: 21 },
    { month: "Jun", hours: 24 },
  ];

  const myBooks = [
    {
      id: 1,
      title: "The Art of Programming",
      author: "John Smith",
      hourlyRate: 2.5,
      rentedTimes: 12,
      earnings: 89.5,
      coverColor: "bg-indigo-500",
    },
    {
      id: 2,
      title: "Data Structures Explained",
      author: "Emily Jones",
      hourlyRate: 3.25,
      rentedTimes: 8,
      earnings: 78.0,
      coverColor: "bg-emerald-500",
    },
    {
      id: 3,
      title: "Modern Web Development",
      author: "Ryan Thomas",
      hourlyRate: 2.75,
      rentedTimes: 15,
      earnings: 123.75,
      coverColor: "bg-purple-500",
    },
  ];

  const popularBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      hourlyRate: 2.99,
      rating: 4.8,
      coverColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      hourlyRate: 3.5,
      rating: 4.9,
      coverColor: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Educated",
      author: "Tara Westover",
      hourlyRate: 2.75,
      rating: 4.7,
      coverColor: "bg-red-500",
    },
    {
      id: 4,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      hourlyRate: 3.25,
      rating: 4.6,
      coverColor: "bg-pink-500",
    },
  ];

  const currentlyReading = [
    {
      id: 1,
      title: "Algorithms to Live By",
      author: "Brian Christian",
      hourlyRate: 3.25,
      hoursRead: 7,
      totalCost: 22.75,
      progress: 65,
      coverColor: "bg-teal-500",
    },
  ];

  const notifications = [
    {
      id: 1,
      message: 'Your book "The Art of Programming" was rented by a new user',
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "You earned $15.50 from rentals today",
      time: "5 hours ago",
    },
    {
      id: 3,
      message: "New recommended book based on your preferences",
      time: "1 day ago",
    },
  ];

  // NEW DATA SETS FOR ENHANCED SECTIONS
  const readingGoals = {
    weekly: { target: 10, current: 7, unit: "hours" },
    monthly: { target: 40, current: 31, unit: "hours" },
    books: { target: 24, current: 11, unit: "books" },
    progress: 77,
  };

  const readingHabits = [
    { day: "Mon", hours: 1.5 },
    { day: "Tue", hours: 0.8 },
    { day: "Wed", hours: 2.0 },
    { day: "Thu", hours: 1.2 },
    { day: "Fri", hours: 0.5 },
    { day: "Sat", hours: 3.0 },
    { day: "Sun", hours: 2.5 },
  ];

  const genreData = [
    { name: "Fiction", percentage: 35 },
    { name: "Non-Fiction", percentage: 25 },
    { name: "Business", percentage: 15 },
    { name: "Science", percentage: 10 },
    { name: "Technology", percentage: 15 },
  ];

  const upcomingReleases = [
    {
      id: 1,
      title: "The Future of AI",
      author: "Sarah Johnson",
      releaseDate: "March 25, 2025",
      coverColor: "bg-cyan-500",
      preorderPrice: 2.99,
    },
    {
      id: 2,
      title: "Quantum Computing Simplified",
      author: "David Chen",
      releaseDate: "April 10, 2025",
      coverColor: "bg-violet-500",
      preorderPrice: 3.5,
    },
    {
      id: 3,
      title: "The Last Algorithm",
      author: "Miguel Sanchez",
      releaseDate: "April 15, 2025",
      coverColor: "bg-amber-500",
      preorderPrice: 2.75,
    },
  ];

  const bookRecommendations = [
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      matchPercentage: 95,
      coverColor: "bg-green-500",
      hourlyRate: 2.99,
    },
    {
      id: 2,
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      matchPercentage: 92,
      coverColor: "bg-blue-600",
      hourlyRate: 3.25,
    },
    {
      id: 3,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      matchPercentage: 89,
      coverColor: "bg-orange-500",
      hourlyRate: 2.75,
    },
  ];

  const readingChallenges = [
    {
      id: 1,
      title: "100 Books Challenge",
      progress: 32,
      target: 100,
      deadline: "Dec 31, 2025",
      reward: "Gold Reader Badge",
    },
    {
      id: 2,
      title: "Classics Marathon",
      progress: 4,
      target: 10,
      deadline: "June 30, 2025",
      reward: "Classic Literature Certificate",
    },
    {
      id: 3,
      title: "Science Week",
      progress: 2,
      target: 5,
      deadline: "March 30, 2025",
      reward: "Science Reader Badge",
    },
  ];

  const readerReviews = [
    {
      id: 1,
      bookTitle: "The Art of Programming",
      reviewer: "Alex K.",
      rating: 5,
      comment:
        "Brilliantly explained concepts, helped me understand algorithms better!",
      date: "March 10, 2025",
    },
    {
      id: 2,
      bookTitle: "Data Structures Explained",
      reviewer: "Jamie T.",
      rating: 4,
      comment:
        "Clear explanations, but could use more examples in some sections.",
      date: "March 5, 2025",
    },
  ];

  const topBorrowers = [
    {
      id: 1,
      name: "Michael Roberts",
      booksRented: 5,
      totalHours: 42,
      totalPaid: 126.5,
    },
    {
      id: 2,
      name: "Jennifer Wu",
      booksRented: 3,
      totalHours: 28,
      totalPaid: 87.25,
    },
    {
      id: 3,
      name: "Thomas Clark",
      booksRented: 2,
      totalHours: 19,
      totalPaid: 57.5,
    },
  ];

  // Functions to render different dashboard sections
  const renderDashboardContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6 col-span-full">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="mr-2 text-indigo-600" size={20} />
          Currently Reading
        </h2>
        <div className="space-y-4">
          {currentlyReading.map((book) => (
            <div
              key={book.id}
              className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div
                className={`${book.coverColor} w-12 h-16 rounded flex items-center justify-center text-white`}
              >
                <Book size={24} />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>{book.progress}% complete</span>
                    <span>{book.hoursRead} hours read</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1 text-gray-500" />$
                    {book.hourlyRate}/hour
                  </span>
                  <span className="text-indigo-600">
                    Total: ${book.totalCost.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 col-span-full lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart3 className="mr-2 text-indigo-600" size={20} />
          Your Reading Activity
        </h2>
        <div className="h-64 flex items-end space-x-2">
          {readingStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className="bg-indigo-600 hover:bg-indigo-700 w-full rounded-t transition-all duration-300"
                style={{
                  height: `${(stat.hours / 25) * 200}px`,
                  animation: `growUp 1s ease-out ${index * 0.1}s`,
                }}
              ></div>
              <span className="text-xs mt-1">{stat.month}</span>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes growUp {
            from {
              height: 0;
            }
          }
        `}</style>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <div>Total Reading Hours: 119</div>
          <div>Average: 19.8 hours/month</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <DollarSign className="mr-2 text-indigo-600" size={20} />
          Your Earnings
        </h2>
        <div className="text-3xl font-bold text-gray-900 mb-2">$291.25</div>
        <p className="text-green-600 text-sm flex items-center mb-4">
          <span className="mr-1">↑</span> 12% from last month
        </p>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span>Total Books Shared</span>
            <span className="font-medium">{myBooks.length}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Total Rentals</span>
            <span className="font-medium">
              {myBooks.reduce((sum, book) => sum + book.rentedTimes, 0)}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Most Popular</span>
            <span className="font-medium">
              {myBooks.sort((a, b) => b.rentedTimes - a.rentedTimes)[0].title}
            </span>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Reading Goals */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Target className="mr-2 text-indigo-600" size={20} />
          Reading Goals
        </h2>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-indigo-600">
              {readingGoals.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${readingGoals.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Weekly Goal</h3>
              <p className="text-sm text-gray-600">
                {readingGoals.weekly.current} of {readingGoals.weekly.target}{" "}
                {readingGoals.weekly.unit}
              </p>
            </div>
            <div className="relative h-10 w-10">
              <svg viewBox="0 0 36 36" className="h-10 w-10">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="3"
                  strokeDasharray={`${
                    (readingGoals.weekly.current / readingGoals.weekly.target) *
                    100
                  }, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                {Math.round(
                  (readingGoals.weekly.current / readingGoals.weekly.target) *
                    100
                )}
                %
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Monthly Goal</h3>
              <p className="text-sm text-gray-600">
                {readingGoals.monthly.current} of {readingGoals.monthly.target}{" "}
                {readingGoals.monthly.unit}
              </p>
            </div>
            <div className="relative h-10 w-10">
              <svg viewBox="0 0 36 36" className="h-10 w-10">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="3"
                  strokeDasharray={`${
                    (readingGoals.monthly.current /
                      readingGoals.monthly.target) *
                    100
                  }, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                {Math.round(
                  (readingGoals.monthly.current / readingGoals.monthly.target) *
                    100
                )}
                %
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Annual Books Goal</h3>
              <p className="text-sm text-gray-600">
                {readingGoals.books.current} of {readingGoals.books.target}{" "}
                {readingGoals.books.unit}
              </p>
            </div>
            <div className="relative h-10 w-10">
              <svg viewBox="0 0 36 36" className="h-10 w-10">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="3"
                  strokeDasharray={`${
                    (readingGoals.books.current / readingGoals.books.target) *
                    100
                  }, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                {Math.round(
                  (readingGoals.books.current / readingGoals.books.target) * 100
                )}
                %
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Daily Reading Habits */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Clock8 className="mr-2 text-indigo-600" size={20} />
          Daily Reading Habits
        </h2>
        <div className="h-48 flex items-end space-x-1">
          {readingHabits.map((day, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className="bg-indigo-600 hover:bg-indigo-700 w-full rounded-t transition-all duration-300"
                style={{
                  height: `${(day.hours / 3) * 120}px`,
                }}
              ></div>
              <span className="text-xs mt-1">{day.day}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <div>
              Most Active Day: <span className="font-medium">Saturday</span>
            </div>
            <div>
              Avg Daily: <span className="font-medium">1.6 hrs</span>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 my-2"></div>
          <div className="flex text-sm text-gray-600">
            <div className="pr-2 border-r border-gray-200">
              Morning: <span className="font-medium">32%</span>
            </div>
            <div className="px-2 border-r border-gray-200">
              Afternoon: <span className="font-medium">28%</span>
            </div>
            <div className="pl-2">
              Evening: <span className="font-medium">40%</span>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Genre Distribution */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Tag className="mr-2 text-indigo-600" size={20} />
          Reading by Genre
        </h2>
        <div className="space-y-3">
          {genreData.map((genre, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{genre.name}</span>
                <span>{genre.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    index % 5 === 0
                      ? "bg-indigo-600"
                      : index % 5 === 1
                      ? "bg-green-500"
                      : index % 5 === 2
                      ? "bg-blue-500"
                      : index % 5 === 3
                      ? "bg-yellow-500"
                      : "bg-purple-500"
                  }`}
                  style={{ width: `${genre.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="text-sm text-gray-700">Reading Diversity Score</div>
          <div className="flex items-center mt-1">
            <div className="text-xl font-bold text-indigo-600 mr-2">8.4</div>
            <div className="text-xs text-gray-500">/ 10</div>
            <div className="text-xs text-green-600 ml-auto flex items-center">
              <span className="mr-1">↑</span> 0.8 from last month
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Upcoming Book Releases */}
      <div className="bg-white rounded-lg shadow-md p-6 col-span-full lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2 text-indigo-600" size={20} />
          Upcoming Book Releases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingReleases.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className={`${book.coverColor} h-4`}></div>
              <div className="p-4">
                <h3 className="font-medium">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <Calendar size={14} className="mr-1" />
                  {book.releaseDate}
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm">${book.preorderPrice}/hr</span>
                  <button className="border border-indigo-600 text-indigo-600 text-xs px-2 py-1 rounded hover:bg-indigo-50 transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW SECTION: Personalized Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6 col-span-full">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Zap className="mr-2 text-indigo-600" size={20} />
          Books You'll Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bookRecommendations.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg overflow-hidden flex"
            >
              <div className={`${book.coverColor} w-2`}></div>
              <div className="p-4 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{book.title}</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {book.matchPercentage}% match
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{book.author}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    ${book.hourlyRate}/hour
                  </span>
                  <button className="bg-indigo-600 text-white text-xs px-2 py-1 rounded hover:bg-indigo-700 transition-colors">
                    Rent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW SECTION: Reading Challenges */}
      <div className="bg-white rounded-lg shadow-md p-6 col-span-full">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="mr-2 text-indigo-600" size={20} />
          Reading Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {readingChallenges.map((challenge) => (
            <div key={challenge.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{challenge.title}</h3>
                <div className="text-sm bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                  Active
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>
                    {challenge.progress} of {challenge.target}
                  </span>
                  <span>
                    {Math.round((challenge.progress / challenge.target) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{
                      width: `${
                        (challenge.progress / challenge.target) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="mt-3 flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {challenge.deadline}
                </div>
                <div className="flex items-center">
                  <Gift size={14} className="mr-1" />
                  {challenge.reward}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW SECTION: Reader Reviews */}
      <div className="bg-white rounded-lg shadow-md p-6 col-span-full lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Star className="mr-2 text-indigo-600" size={20} />
          Recent Reviews of Your Books
        </h2>
        <div className="space-y-4">
          {readerReviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">{review.bookTitle}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-${
                        i < review.rating ? "yellow" : "gray"
                      }-400`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-2">"{review.comment}"</p>
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>By: {review.reviewer}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors">
            View all reviews →
          </button>
        </div>
      </div>

      {/* NEW SECTION: Top Borrowers */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Users className="mr-2 text-indigo-600" size={20} />
          Top Borrowers
        </h2>
        <div className="space-y-4">
          {topBorrowers.map((borrower) => (
            <div
              key={borrower.id}
              className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="bg-indigo-100 rounded-full h-10 w-10 flex items-center justify-center text-indigo-600">
                <User size={20} />
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-medium text-sm">{borrower.name}</h3>
                <div className="flex mt-1 text-xs text-gray-600">
                  <span className="pr-2 border-r border-gray-300">
                    {borrower.booksRented} books
                  </span>
                  <span className="px-2 border-r border-gray-300">
                    {borrower.totalHours} hours
                  </span>
                  <span className="pl-2">
                    ${borrower.totalPaid.toFixed(2)} paid
                  </span>
                </div>
              </div>
              <button className="text-xs text-indigo-600 hover:text-indigo-800">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMyBooksContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Books</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors">
          <Plus size={16} className="mr-1" /> Add Book
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
          >
            <div className={`${book.coverColor} h-3`}></div>
            <div className="p-4">
              <h3 className="font-medium text-lg">{book.title}</h3>
              <p className="text-gray-600 text-sm">{book.author}</p>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Hourly Rate</span>
                  <span className="font-medium">
                    ${book.hourlyRate.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Times Rented</span>
                  <span className="font-medium">{book.rentedTimes}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Earnings</span>
                  <span className="font-medium text-green-600">
                    ${book.earnings.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <button className="text-indigo-600 text-sm hover:text-indigo-800 transition-colors">
                  Edit Details
                </button>
                <button className="text-red-600 text-sm hover:text-red-800 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDiscoverContent = () => (
    <div className="space-y-6">
      <div className="bg-indigo-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Discover New Books</h2>
        <p className="mb-4">
          Find your next favorite read from our extensive collection
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title, author, or genre"
            className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Search size={20} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div
                className={`${book.coverColor} h-32 flex items-center justify-center text-white relative`}
              >
                <Book size={40} />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-1 rounded-full text-red-500 hover:text-red-700 transition-colors">
                    <Heart size={16} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-${
                          i < Math.floor(book.rating) ? "yellow" : "gray"
                        }-400`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm ml-1">{book.rating}</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    ${book.hourlyRate}/hour
                  </span>
                  <button className="bg-indigo-600 text-white text-sm px-3 py-1 rounded hover:bg-indigo-700 transition-colors">
                    Rent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderActiveContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboardContent();
      case "mybooks":
        return renderMyBooksContent();
      case "discover":
        return renderDiscoverContent();
      default:
        return renderDashboardContent();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderActiveContent()}
        </main>
      </div>
    </div>
  );
};

export default UserDashHomePage;
