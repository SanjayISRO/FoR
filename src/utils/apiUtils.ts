/**
 * API Utilities for Error Handling and Data Validation
 */

import { 
  ConversationData, 
  ValidationResult, 
  ErrorLog, 
  ConversationApiResponse,
  ApiErrorResponse 
} from '../types/api';

/**
 * Validates conversation data structure and content
 */
export function validateConversationData(data: any[]): ValidationResult {
  const errors: string[] = [];
  const sanitizedData: ConversationData[] = [];

  if (!Array.isArray(data)) {
    return {
      isValid: false,
      errors: ['Data must be an array']
    };
  }

  data.forEach((item, index) => {
    const itemErrors: string[] = [];

    // Required fields validation
    const requiredFields = [
      'id', 'conversationId', 'customerIntent', 'businessOutcome',
      'customerSentiment', 'predictedAgentId', 'predictedAgentName',
      'predictedAgentPersona', 'predictedAgentPersonaConfidence',
      'reasonForPrediction', 'actualAgentId', 'actualAgentName',
      'actualAgentPersona', 'actualAgentPersonaConfidence'
    ];

    requiredFields.forEach(field => {
      if (!(field in item) || item[field] === null || item[field] === undefined) {
        itemErrors.push(`Missing required field: ${field}`);
      }
    });

    // Type validation
    if (typeof item.id !== 'number') {
      itemErrors.push('id must be a number');
    }

    if (typeof item.conversationId !== 'string') {
      itemErrors.push('conversationId must be a string');
    }

    if (!Array.isArray(item.businessOutcome)) {
      itemErrors.push('businessOutcome must be an array');
    }

    // Data sanitization
    if (itemErrors.length === 0) {
      const sanitizedItem: ConversationData = {
        id: Number(item.id),
        conversationId: String(item.conversationId).trim(),
        customerIntent: String(item.customerIntent).trim(),
        businessOutcome: Array.isArray(item.businessOutcome) 
          ? item.businessOutcome.map(outcome => String(outcome).trim())
          : [],
        customerSentiment: String(item.customerSentiment).trim(),
        predictedAgentId: String(item.predictedAgentId).trim(),
        predictedAgentName: String(item.predictedAgentName).trim(),
        predictedAgentPersona: String(item.predictedAgentPersona).trim(),
        predictedAgentPersonaConfidence: String(item.predictedAgentPersonaConfidence).trim(),
        reasonForPrediction: String(item.reasonForPrediction).trim(),
        actualAgentId: String(item.actualAgentId).trim(),
        actualAgentName: String(item.actualAgentName).trim(),
        actualAgentPersona: String(item.actualAgentPersona).trim(),
        actualAgentPersonaConfidence: String(item.actualAgentPersonaConfidence).trim()
      };

      sanitizedData.push(sanitizedItem);
    } else {
      errors.push(`Item ${index}: ${itemErrors.join(', ')}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: errors.length === 0 ? sanitizedData : undefined
  };
}

/**
 * Validates API response structure
 */
export function validateApiResponse(response: any): response is ConversationApiResponse {
  if (!response || typeof response !== 'object') {
    return false;
  }

  const requiredFields = ['data', 'total', 'success'];
  return requiredFields.every(field => field in response);
}

/**
 * Creates standardized error log entry
 */
export function createErrorLog(
  errorType: ErrorLog['errorType'],
  message: string,
  details: any,
  fallbackUsed: boolean = false
): ErrorLog {
  return {
    timestamp: new Date(),
    errorType,
    message,
    details,
    fallbackUsed
  };
}

/**
 * Logs error to console with structured format
 */
export function logError(errorLog: ErrorLog): void {
  console.error('[API Error]', {
    timestamp: errorLog.timestamp.toISOString(),
    type: errorLog.errorType,
    message: errorLog.message,
    fallbackUsed: errorLog.fallbackUsed,
    details: errorLog.details
  });
}

/**
 * Logs API operation to console
 */
export function logApiOperation(
  operation: string,
  details: Record<string, any>
): void {
  console.log(`[API Operation] ${operation}`, {
    timestamp: new Date().toISOString(),
    ...details
  });
}

/**
 * Handles API errors and provides fallback behavior
 */
export function handleApiError(
  error: any,
  fallbackData?: ConversationData[]
): ConversationApiResponse | never {
  const errorLog = createErrorLog(
    'network',
    error instanceof Error ? error.message : 'Unknown API error',
    { error },
    !!fallbackData
  );

  logError(errorLog);

  if (fallbackData) {
    logApiOperation('Fallback Data Used', {
      reason: 'API error occurred',
      fallbackDataCount: fallbackData.length
    });

    return {
      data: fallbackData,
      total: fallbackData.length,
      success: true,
      message: 'Using fallback data due to API error',
      timestamp: new Date().toISOString()
    };
  }

  throw error;
}

/**
 * Checks if response is an error response
 */
export function isApiErrorResponse(response: any): response is ApiErrorResponse {
  return response && typeof response === 'object' && response.success === false;
}

/**
 * Sanitizes data to prevent XSS attacks
 */
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }

  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .substring(0, 1000); // Limit length
}

/**
 * Validates and sanitizes conversation data for safe usage
 */
export function sanitizeConversationData(data: ConversationData[]): ConversationData[] {
  return data.map(item => ({
    ...item,
    conversationId: sanitizeString(item.conversationId),
    customerIntent: sanitizeString(item.customerIntent),
    customerSentiment: sanitizeString(item.customerSentiment),
    predictedAgentName: sanitizeString(item.predictedAgentName),
    predictedAgentPersona: sanitizeString(item.predictedAgentPersona),
    reasonForPrediction: sanitizeString(item.reasonForPrediction),
    actualAgentName: sanitizeString(item.actualAgentName),
    actualAgentPersona: sanitizeString(item.actualAgentPersona),
    businessOutcome: item.businessOutcome.map(outcome => sanitizeString(outcome))
  }));
}