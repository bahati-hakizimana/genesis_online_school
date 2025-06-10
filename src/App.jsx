import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Books from "./pages/books/Books";

import HomeLayout from "./layouts/HomeLayout";
import Contact from "./pages/Contact";
import ExamPage from "./pages/exams/ExamPage.jsx";
import Exams from "./pages/exams/Exams";

import Notes from "./pages/notes/Notes";
import NotesPage from "./pages/notes/NotesPage.jsx";
import BooksPage from "./pages/books/BooksPage.jsx";
import ForgotPassword from "./pages/Modals/ForgotPassword";

import Download from "./pages/Download";
import Subscription from "./pages/Subscription";
import ExamHomePage from "./pages/ExamHomePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomeGuest from "./components/guest/HomeGuest.jsx";
import WhatOffer from "./components/guest/pages/mainpages/WhatOffer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeGuest />}>
        </Route>
         <Route path="/offer" element={<WhatOffer />} />
        <Route path="/stud" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/stud/about-us" element={<AboutUs />} />
          <Route path="/stud/books" element={<Books />} />
          <Route path="/stud/notes" element={<Notes />} />
          <Route path="/stud/exams" element={<Exams />} />
          <Route path="/stud/downloads" element={<Download />} />
          <Route path="/stud/exam/:year" element={<ExamHomePage />} />
          <Route path="/stud/subscription" element={<Subscription />} />

          {/* Protected routes */}
          <Route
            path="/stud/exam-content/:id"
            element={
              <ProtectedRoute element={ExamPage} />
            }
          />
          <Route
            path="/stud/books-content/:id"
            element={
              <ProtectedRoute element={BooksPage} />
            }
          />
          <Route
            path="/stud/notes-content/:id"
            element={
              <ProtectedRoute element={NotesPage} />
            }
          />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
