const tasksArray = [
    {
        "id": 1,
        "title": "Design Homepage",
        "description": "Create the initial design for the homepage.",
        "completed": false,
        "people_assigned": [
            "Alice",
            "Bob"
        ]
    },
    {
        "id": 2,
        "title": "Develop Login Feature",
        "description": "Implement the login functionality for the application.",
        "completed": false,
        "people_assigned": [
            "Charlie"
        ]
    },
    {
        "id": 3,
        "title": "Set Up Database",
        "description": "Initialize the database and create necessary tables.",
        "completed": true,
        "people_assigned": [
            "Dave",
            "Eve"
        ]
    },
    {
        "id": 4,
        "title": "Write Documentation",
        "description": "Document the API endpoints and usage.",
        "completed": false,
        "people_assigned": [
            "Frank"
        ]
    },
    {
        "id": 5,
        "title": "Test Payment Gateway",
        "description": "Perform integration tests on the payment gateway.",
        "completed": true,
        "people_assigned": [
            "Grace",
            "Heidi"
        ]
    },
    {
        "id": 6,
        "title": "Deploy to Production",
        "description": "Deploy the application to the production environment.",
        "completed": false,
        "people_assigned": [
            "Ivan",
            "Judy"
        ]
    },
    {
        "id": 7,
        "title": "User Feedback Survey",
        "description": "Create and distribute a survey to gather user feedback.",
        "completed": false,
        "people_assigned": [
            "Mallory"
        ]
    },
    {
        "id": 8,
        "title": "Optimize Performance",
        "description": "Improve the performance of the application.",
        "completed": true,
        "people_assigned": [
            "Niaj",
            "Olivia"
        ]
    },
    {
        "id": 9,
        "title": "Fix Security Bugs",
        "description": "Identify and fix security vulnerabilities.",
        "completed": false,
        "people_assigned": [
            "Peggy",
            "Quentin"
        ]
    },
    {
        "id": 10,
        "title": "Update UI/UX",
        "description": "Revamp the UI/UX based on recent user feedback.",
        "completed": false,
        "people_assigned": [
            "Rupert",
            "Sybil"
        ]
    }
]

const result = tasksArray.reduce((acc, cur) => {
  if (cur.completed) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);

console.log(result);
