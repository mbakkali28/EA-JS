
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
    let filteredUsers = users
        .filter(user => user.id >= 5)
        .map(user => {
            return {
                id: user.id,
                username: user.username,
                name: user.name,
                city: user.address.city
            }
        });

    filteredUsers = [
        { id: 11, username: "manolo10", name: "Manolo", city: "Barcelona" }, ...filteredUsers]
        .sort((a, b) => b.id - a.id);
      
    console.log("--- Processed Users ---");
    
    console.log(filteredUsers);

    console.log("--- Statistics ---");
    
    const totalCharacters = filteredUsers.reduce((total, user) => total + user.username.length, 0);
    
    console.log(`Total characters: ${totalCharacters}`);

  });