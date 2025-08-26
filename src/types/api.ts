/**
 * API Types and Interfaces for Conversation Data Integration
 */

// Base conversation data interface matching existing data structure
export interface ConversationData {
  id: number;
  conversationId: string;
  customerIntent: string;
  businessOutcome: string[];
  customerSentiment: string;
  predictedAgentId: string;
  predictedAgentName: string;
  predictedAgentPersona: string;
  predictedAgentPersonaConfidence: string;
  reasonForPrediction: string;
  actualAgentId: string;
  actualAgentName: string;
  actualAgentPersona: string;
  actualAgentPersonaConfidence: string;
}

// API response interface for conversation data
export interface ConversationApiResponse {
  data: ConversationData[];
  total: number;
  success: boolean;
  message?: string;
  timestamp?: string;
}

// Error response interface
export interface ApiErrorResponse {
  success: false;
  error: string;
  message: string;
  statusCode?: number;
  timestamp: string;
}

// API service interface
export interface ApiService {
  fetchConversations(): Promise<ConversationApiResponse>;
}

// Error logging interface
export interface ErrorLog {
  timestamp: Date;
  errorType: 'network' | 'validation' | 'timeout' | 'server' | 'client';
  message: string;
  details: any;
  fallbackUsed: boolean;
}

// API request configuration
export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
}

// Data validation result interface
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedData?: ConversationData[];
}