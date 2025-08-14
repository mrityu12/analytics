function solution(D) {

  const result = {
    'Mon': 0,
    'Tue': 0,
    'Wed': 0,
    'Thu': 0,
    'Fri': 0,
    'Sat': 0,
    'Sun': 0
  };
  

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  

  for (const dateStr in D) {
    const date = new Date(dateStr);
    const dayOfWeek = dayNames[date.getDay()];
    result[dayOfWeek] += D[dateStr];
  }
  

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const originalSums = { ...result };
  
  for (let i = 0; i < days.length; i++) {
    const currentDay = days[i];
    
    // Check if this day had any entries in the original input
    let hasOriginalData = false;
    for (const dateStr in D) {
      const date = new Date(dateStr);
      const dayOfWeek = dayNames[date.getDay()];
      if (dayOfWeek === currentDay) {
        hasOriginalData = true;
        break;
      }
    }
    
  
    if (!hasOriginalData) {
      const prevDay = days[(i - 1 + days.length) % days.length];
      const nextDay = days[(i + 1) % days.length];
      result[currentDay] = Math.round((originalSums[prevDay] + originalSums[nextDay]) / 2);
    }
  }
  
  return result;
}

// tests
function runTests() {
  console.log("Running tests...\n");
  
  // Test 1:
  const input1 = {
    '2020-01-01': 4,   // Wed
    '2020-01-02': 4,   // Thu  
    '2020-01-03': 6,   // Fri
    '2020-01-04': 8,   // Sat
    '2020-01-05': 2,   // Sun
    '2020-01-06': -6,  // Mon
    '2020-01-07': 2,   // Tue
    '2020-01-08': -2   // Wed
  };
  
  const expected1 = {
    'Mon': -6,
    'Tue': 2,
    'Wed': 2,  // 4 + (-2) = 2
    'Thu': 4,
    'Fri': 6,
    'Sat': 8,
    'Sun': 2
  };
  
  const result1 = solution(input1);
  console.log("Test 1 - Basic functionality:");
  console.log("Input:", input1);
  console.log("Expected:", expected1);
  console.log("Result:", result1);
  console.log("Pass:", JSON.stringify(result1) === JSON.stringify(expected1), "\n");
  
  // Test 2:
  const input2 = {
    '2020-01-01': 6,   // Wed
    '2020-01-04': 12,  // Sat (skipping Thu & Fri)
    '2020-01-05': 14,  // Sun
    '2020-01-06': 2,   // Mon
    '2020-01-07': 4    // Tue
  };
  
  const expected2 = {
    'Mon': 2,
    'Tue': 4,
    'Wed': 6,
    'Thu': 8,   // Mean of Wed(6) and Fri(10) = 8
    'Fri': 10,  // Mean of Thu(8) and Sat(12) = 10  
    'Sat': 12,
    'Sun': 14
  };
  
  const result2 = solution(input2);
  console.log("Test 2 - Missing days:");
  console.log("Input:", input2);
  console.log("Expected:", expected2);
  console.log("Result:", result2);
  console.log("Pass:", JSON.stringify(result2) === JSON.stringify(expected2), "\n");
  
  // Test 3:
  const input3 = {
    '2020-01-01': 5,   // Wed
    '2020-01-08': 3,   // Wed (same day of week)
    '2020-01-02': 2,   // Thu
    '2020-01-03': 4,   // Fri
    '2020-01-04': 6,   // Sat
    '2020-01-05': 1,   // Sun
    '2020-01-06': 7,   // Mon
    '2020-01-07': 9    // Tue
  };
  
  const expected3 = {
    'Mon': 7,
    'Tue': 9,
    'Wed': 8,  // 5 + 3 = 8
    'Thu': 2,
    'Fri': 4,
    'Sat': 6,
    'Sun': 1
  };
  
  const result3 = solution(input3);
  console.log("Test 3 - Multiple dates on same day:");
  console.log("Input:", input3);
  console.log("Expected:", expected3);
  console.log("Result:", result3);
  console.log("Pass:", JSON.stringify(result3) === JSON.stringify(expected3), "\n");
  
  
  const input4 = {
    '2020-01-06': 10,  // Mon
    '2020-01-05': 20   // Sun
  };
  

  const result4 = solution(input4);
  console.log("Test 4 - Only Mon and Sun:");
  console.log("Input:", input4);
  console.log("Result:", result4);
  
  console.log("All tests completed!");
}

// Run the tests
runTests();
