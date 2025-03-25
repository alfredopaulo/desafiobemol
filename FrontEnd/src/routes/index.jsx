import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FeedbackPage from "../pages/Feedbacks";
import PdiPage from "../pages/Pdi";
import UsersPages from "../pages/Users";
import ListaFeedbacks from "../pages/ListaFeedbacks";
import FeedbackSearch from "../pages/FeedbackSearch";
import FeedbackOpcoes from "../pages/FeedbackOpcoes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedbacks" element={<FeedbackPage />} />
        <Route path="/pdi" element={<PdiPage />} />
        <Route path="/users" element={<UsersPages />} />
        <Route path="/lista-feedbacks" element={<ListaFeedbacks />} />
        <Route path="/feedbacks-search" element={<FeedbackSearch />} />
        <Route path="/feedback-options" element={<FeedbackOpcoes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
