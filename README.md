# Date Dictionary Transformer

A JavaScript function that transforms a dictionary with date keys (YYYY-MM-DD format) into a dictionary grouped by day of the week, with intelligent handling for missing days.

## 📋 Problem Description

Given a dictionary `D` where:
- **Key**: Date in format YYYY-MM-DD (String)
- **Value**: Integer

Return a new dictionary where:
- **Key**: Day of the week [Mon, Tue, Wed, Thu, Fri, Sat, Sun] (String)
- **Value**: Sum of all values for that day (Integer)

### Special Features:
- If multiple dates fall on the same day of the week, their values are summed
- If a day is missing from input, its value is calculated as the mean of the previous and next day
- Input dictionary guaranteed to have at least Monday & Sunday

## 🚀 Usage

```javascript
// Basic usage
const input = {
    '2020-01-01': 4,   // Wednesday
    '2020-01-02': 4,   // Thursday
    '2020-01-03': 6,   // Friday
    '2020-01-04': 8,   // Saturday
    '2020-01-05': 2,   // Sunday
    '2020-01-06': -6,  // Monday
    '2020-01-07': 2,   // Tuesday
    '2020-01-08': -2   // Wednesday (will be summed with first Wednesday)
};

const result = solution(input);
console.log(result);
// Output: {'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2}
```

## 📖 Examples

### Example 1: Basic Functionality
```javascript
Input = {
    '2020-01-01': 4,  // Wed
    '2020-01-02': 4,  // Thu
    '2020-01-03': 6,  // Fri
    '2020-01-04': 8,  // Sat
    '2020-01-05': 2,  // Sun
    '2020-01-06': -6, // Mon
    '2020-01-07': 2,  // Tue
    '2020-01-08': -2  // Wed
}

Output = {'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2}

## 🔧 Algorithm

1. **Initialize**: Create result dictionary with all days set to 0
2. **Process Input**: For each date in input:
   - Convert date string to day of week
   - Add value to corresponding day in result
3. **Handle Missing Days**: For days with no original data:
   - Calculate mean of previous and next day values
   - Round to nearest integer

## ⚙️ Technical Specifications

- **Time Complexity**: O(n) where n is number of input dates
- **Space Complexity**: O(1) - fixed size output dictionary
- **Date Range**: 1970-01-01 to 2100-01-01
- **Value Range**: -1,000,000 to 1,000,000
- **Input Constraints**: At least Monday & Sunday must be presen

### Test Cases Covered:
- ✅ Basic functionality with all days present
- ✅ Missing days with interpolation
- ✅ Multiple dates on same day of week (summing)
- ✅ Edge cases with only Monday and Sunday
- ✅ Negative values handling
- ✅ Date parsing across different months/years

## 📁 File Structure

```
├── analytics.js
├── README.md           # This file

![Alt text for screenshot](Screenshot%202025-08-14%20103544.png)
![Alt text for screenshot](Screenshot%202025-08-14%20103554.png)


## 🏃‍♂️ Quick Start

1. **Clone or download** the repository
2. **Include** `solution.js` in your project
3. **Call** the function with your date dictionary
4. **Get** the transformed day-of-week dictionary


## 🛠️ Dependencies

- **None** - Pure JavaScript (ES6+)
- Works in **Browser** and **Node.js**
- No external libraries required

## 📝 Notes

- Function uses JavaScript's built-in `Date` object for date parsing
- Days of week follow standard order: Mon, Tue, Wed, Thu, Fri, Sat, Sun
- Missing day interpolation uses circular logic (Sun ↔ Mon wrapping)
- All interpolated values are rounded to nearest integer

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.
