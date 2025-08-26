/**
 * Dummy API Service for Conversation Data
 * This service simulates API calls and provides console logging for development
 */

import { REVIEW_AND_FILTER_TABLE_DATA } from '../Contracts/ReviewAndFilter';
import { 
  ConversationApiResponse, 
  ApiService, 
  ConversationData, 
  ErrorLog,
  ApiConfig 
} from '../types/api';

// Default API configuration
const DEFAULT_CONFIG: ApiConfig = {
  baseUrl: 'https://api.example.com',
  timeout: 5000,
  retryAttempts: 3,
  retryDelay: 1000
};

export class DummyApiService implements ApiService {
  private config: ApiConfig;

  constructor(config: Partial<ApiConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  /**
   * Fetches conversation data from dummy API endpoint
   * Simulates real API behavior with delay and logging
   */
  async fetchConversations(): Promise<ConversationApiResponse> {
    const requestId = this.generateRequestId();
    const timestamp = new Date().toISOString();

    // Log API request initiation
    console.log(`[API Request ${requestId}] Initiating conversation data fetch`, {
      timestamp,
      endpoint: `${this.config.baseUrl}/conversations`,
      method: 'GET'
    });

    try {
      // Simulate API delay
      await this.simulateDelay(800, 1500);

      // Simulate occasional API errors for testing (10% chance)
      if (Math.random() < 0.1) {
        throw new Error('Simulated API error for testing');
      }

      // Prepare response data
      const responseData: ConversationApiResponse = {
        data: REVIEW_AND_FILTER_TABLE_DATA as ConversationData[],
        total: REVIEW_AND_FILTER_TABLE_DATA.length,
        success: true,
        message: 'Conversations fetched successfully',
        timestamp
      };

      // Log successful API response
      console.log(`[API Response ${requestId}] Successfully fetched conversation data`, {
        timestamp: new Date().toISOString(),
        dataCount: responseData.total,
        responseSize: `${JSON.stringify(responseData).length} bytes`,
        success: true
      });

      return responseData;

    } catch (error) {
      // Log API error
      const errorLog: ErrorLog = {
        timestamp: new Date(),
        errorType: 'network',
        message: error instanceof Error ? error.message : 'Unknown error',
        details: {
          requestId,
          endpoint: `${this.config.baseUrl}/conversations`,
          error: error
        },
        fallbackUsed: false
      };

      console.error(`[API Error ${requestId}] Failed to fetch conversation data`, errorLog);

      // Re-throw error to be handled by calling component
      throw error;
    }
  }

  /**
   * Simulates network delay with random variation
   */
  private async simulateDelay(minMs: number, maxMs: number): Promise<void> {
    const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  /**
   * Generates unique request ID for logging
   */
  private generateRequestId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

// Export singleton instance
export const conversationApiService = new DummyApiService();