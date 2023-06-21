function solve(people, group, day) {
  let result = 0;
  switch (group) {
    case "Students":
      switch (day) {
        case "Friday":
          result = people * 8.45;
          if (people >= 30) {
            result = result * 0.85;
          }
          break;
        case "Saturday":
          result = people * 9.8;
          if (people >= 30) {
            result = result * 0.85;
          }
          break;
        case "Sunday":
          result = people * 10.46;
          if (people >= 30) {
            result = result * 0.85;
          }
          break;
      }
      break;

    case "Business":
      switch (day) {
        case "Friday":
          result = people * 10.9;
          if (people >= 100) {
            result = result - 10 * 10.9;
          }
          break;
        case "Saturday":
          result = people * 15.6;
          if (people >= 100) {
            result = result - 10 * 15.6;
          }
          break;
        case "Sunday":
          result = people * 16;
          if (people >= 100) {
            result = result - 10 * 16;
          }
          break;
      }
      break;

    case "Regular":
      switch (day) {
        case "Friday":
          result = people * 15;
          if (10 <= people && people <= 20) {
            result = result * 0.95;
          }
          break;
        case "Saturday":
          result = people * 20;
          if (10 <= people && people <= 20) {
            result = result * 0.95;
          }
          break;
        case "Sunday":
          result = people * 22.5;
          if (10 <= people && people <= 20) {
            result = result * 0.95;
          }
          break;
      }
      break;
  }

  console.log(`Total price: ${result.toFixed(2)}`)
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
