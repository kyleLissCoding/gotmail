export interface User {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  notifications: boolean;
  emailDigest: boolean;
  aiFeatures: boolean;
}

export interface Email {
  id: string;
  subject: string;
  sender: {
    name: string;
    email: string;
  };
  recipients: {
    to: string[];
    cc?: string[];
    bcc?: string[];
  };
  content: string;
  timestamp: Date;
  read: boolean;
  labels: string[];
}

export interface AIAnalysis {
  sentiment: 'positive' | 'negative' | 'neutral';
  priority: 'high' | 'medium' | 'low';
  summary: string;
  suggestedResponse?: string;
} 