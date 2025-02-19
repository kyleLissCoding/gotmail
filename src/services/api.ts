import axios from 'axios';
import { Email, AIAnalysis } from '../types';

const api = axios.create({
  baseURL: process.env.API_URL || 'https://api.gotmail.com',
});

export const emailService = {
  async getEmails(): Promise<Email[]> {
    const response = await api.get('/emails');
    return response.data;
  },

  async analyzeEmail(emailId: string): Promise<AIAnalysis> {
    const response = await api.post(`/emails/${emailId}/analyze`);
    return response.data;
  },

  async markAsRead(emailId: string): Promise<void> {
    await api.put(`/emails/${emailId}/read`);
  }
};

export const authService = {
  async login(token: string): Promise<void> {
    await api.post('/auth/login', { token });
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  }
}; 