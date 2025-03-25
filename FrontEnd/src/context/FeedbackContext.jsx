import React, { createContext, useState, useEffect } from "react";
import api, { baseURL } from "../api";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get(`${baseURL}/Users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const createFeedback = async (feedbackData) => {
    console.log(feedbackData);
    try {
      const response = await api.post(`${baseURL}/FeedBack`, feedbackData);
      setFeedbacks([...feedbacks, response.data]);
    } catch (error) {
      console.error("Erro ao criar feedback:", error);
    }
  };

  const getFeedbackById = async (id) => {
    try {
      const response = await api.get(`${baseURL}/FeedBack/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar feedback com ID ${id}:`, error);
      return null;
    }
  };

  const getAllFeedbacks = async () => {
    try {
      const response = await api.get(`${baseURL}/FeedBack`);
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Erro ao buscar todos os feedbacks:", error);
    }
  };

  const getReceivedFeedbacks = async (id) => {
    try {
      const response = await api.get(`${baseURL}/FeedBack/received/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erro ao buscar feedbacks recebidos pelo usuário com ID ${id}:`,
        error
      );
      return [];
    }
  };

  const getSentFeedbacks = async (id) => {
    try {
      const response = await api.get(`${baseURL}/FeedBack/sent/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        `Erro ao buscar feedbacks enviados pelo usuário com ID ${id}:`,
        error
      );
      return [];
    }
  };

  const deleteFeedback = async (id) => {
    try {
      await api.delete(`${baseURL}/FeedBack/${id}`);
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    } catch (error) {
      console.error(`Erro ao excluir feedback com ID ${id}:`, error);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        users,
        loading,
        createFeedback,
        getFeedbackById,
        getAllFeedbacks,
        getReceivedFeedbacks,
        getSentFeedbacks,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
