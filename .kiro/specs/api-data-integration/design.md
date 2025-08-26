# Design Document

## Overview

This design outlines the refactoring of the conversation data architecture to centralize API data fetching in the FilterAndReview component while implementing intent-based filtering functionality. The solution maintains backward compatibility with existing static data during the transition period and provides a template structure for easy API replacement.

## Architecture

### Current Architecture
- **TableData.tsx**: Directly imports and uses static data from `REVIEW_AND_FILTER_TABLE_DATA`
- **FilterAndReview.tsx**: Manages filter state but doesn't handle data fetching
- **ReviewAndFilter.ts**: Contains static conversation data

### New Architecture
- **FilterAndReview.tsx**: Centralized data fetching, filtering logic, and state management
- **TableData.tsx**: Pure presentation component receiving data via props
- **API Service Layer**: Abstracted API calls with fallback mechanisms
- **ReviewAndFilter.ts**: Maintained as fallback data source

### Data Flow
```
FilterAndReview (Parent)
├── API Service Call
├── Data Processing & Filtering
├── State Management
└── Props to TableData (Child)
    └── Data Rendering
```

## Components and Interfaces

### 1. API Service Interface

```typescript
interface ConversationApiResponse {
  data: ConversationData[];
  total: number;
  success: boolean;
}

interface ApiService {
  fetchConversations(): Promise<ConversationApiResponse>;
}
```

### 2. Enhanced FilterAndReview Component

**New State Management:**
```typescript
interface FilterAndReviewState {
  // Existing state
  intents: string[];
  outcomes: string[];
  
  // New state
  conversationData: ConversationData[];
  filteredData: ConversationData[];
  isLoading: boolean;
  apiError: string | null;
  dataSource: 'api' | 'static';
}
```

**Key Methods:**
- `fetchConversationData()`: API call with error handling
- `applyIntentFilter()`: Filter data based on selected intents
- `handleFilterClick()`: Apply all active filters
- `resetFilters()`: Clear all filters and show all data

### 3. Enhanced TableData Component

**New Props Interface:**
```typescript
interface TableDataProps {
  conversationData: ConversationData[];
  isLoading?: boolean;
  dataSource?: 'api' | 'static';
}
```

**Backward Compatibility:**
- If no props provided, falls back to static data
- Maintains all existing functionality and UI

### 4. Dummy API Service

**Implementation:**
```typescript
class DummyApiService implements ApiService {
  async fetchConversations(): Promise<ConversationApiResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return static data in API format
    return {
      data: REVIEW_AND_FILTER_TABLE_DATA,
      total: REVIEW_AND_FILTER_TABLE_DATA.length,
      success: true
    };
  }
}
```

## Data Models

### ConversationData Interface
The existing interface remains unchanged to maintain compatibility:

```typescript
interface ConversationData {
  id: number;
  conversationId: string;
  customerIntent: string;
  businessOutcome: string[];
  customerSentiment: string;
  predictedAgentPersona: string;
  predictedAgent: string;
  reasonForPrediction?: string;
  actualAgentPersona?: string;
  actualAgent: string;
  actualAgentPersonaConfidence: string;
  predictedAgentName: string;
  actualAgentName: string;
  predictedAgentPersonaConfidence: string;
}
```

### Filter State Interface
```typescript
interface FilterState {
  selectedIntents: string[];
  selectedOutcomes: string[];
  searchQuery: string;
}
```

## Error Handling

### API Error Scenarios
1. **Network Failure**: Fall back to static data, log error
2. **Invalid Response Format**: Validate and sanitize data, use static fallback if needed
3. **Timeout**: Implement retry logic with exponential backoff
4. **Server Error (5xx)**: Log error details, use static data
5. **Client Error (4xx)**: Log error, use static data

### Error Logging Strategy
```typescript
interface ErrorLog {
  timestamp: Date;
  errorType: 'network' | 'validation' | 'timeout' | 'server' | 'client';
  message: string;
  details: any;
  fallbackUsed: boolean;
}
```

### Graceful Degradation
- Always maintain functionality even when API fails
- Clear user feedback about data source (API vs static)
- Seamless transition between data sources

## Testing Strategy

### Unit Tests
1. **FilterAndReview Component**
   - API call success/failure scenarios
   - Filter application logic
   - State management
   - Props passing to TableData

2. **TableData Component**
   - Props-based rendering
   - Backward compatibility with no props
   - Loading state display

3. **API Service**
   - Successful API responses
   - Error handling scenarios
   - Data validation

### Integration Tests
1. **Parent-Child Communication**
   - Data flow from FilterAndReview to TableData
   - Filter state synchronization
   - Loading state propagation

2. **API Integration**
   - End-to-end API call flow
   - Fallback mechanism testing
   - Error boundary testing

### Manual Testing Scenarios
1. **Normal Operation**: API available, filters working
2. **API Failure**: Network down, fallback to static data
3. **Partial Data**: API returns incomplete data
4. **Filter Combinations**: Multiple intent selections
5. **Performance**: Large dataset filtering

## Implementation Phases

### Phase 1: API Service Layer
- Create dummy API service
- Implement error handling and logging
- Add data validation

### Phase 2: FilterAndReview Refactoring
- Add state management for API data
- Implement data fetching logic
- Add loading states and error handling

### Phase 3: TableData Props Integration
- Modify TableData to accept props
- Maintain backward compatibility
- Update data rendering logic

### Phase 4: Filter Implementation
- Implement intent-based filtering
- Connect filter UI to data processing
- Add filter state management

### Phase 5: Testing and Optimization
- Comprehensive testing
- Performance optimization
- Documentation updates

## Performance Considerations

### Data Processing
- Implement efficient filtering algorithms
- Use React.useMemo for expensive computations
- Debounce filter operations to prevent excessive re-renders

### API Optimization
- Implement request caching
- Add request deduplication
- Consider pagination for large datasets

### Memory Management
- Clean up API subscriptions on component unmount
- Optimize re-renders with React.memo where appropriate
- Manage large dataset memory usage

## Security Considerations

### API Security
- Validate all API responses before processing
- Sanitize data to prevent XSS attacks
- Implement proper error handling to avoid information leakage

### Data Handling
- Ensure sensitive data is not logged to console in production
- Implement proper data validation and sanitization
- Handle API keys and endpoints securely

## Migration Strategy

### Backward Compatibility
- Maintain existing functionality during transition
- Provide feature flags for gradual rollout
- Ensure fallback mechanisms are robust

### API Replacement Process
1. Replace dummy API endpoint URL
2. Update data validation if needed
3. Test with real API responses
4. Monitor error rates and performance
5. Remove static data fallback when stable