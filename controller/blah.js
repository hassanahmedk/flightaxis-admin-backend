const packages = [
    // leaving_from: Newcastle, going_to: Abidjan
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Abidjan', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Abidjan', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Abidjan', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Abidjan', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Abidjan', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Abidjan', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Abidjan', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Abidjan', total_fare: '1000.99' },
  
    // leaving_from: Newcastle, going_to: Accra
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Accra', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Accra', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Accra', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Accra', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Accra', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Accra', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Accra', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Accra', total_fare: '1000.99' },
  
    // leaving_from: Newcastle, going_to: lagos
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Lagos', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Lagos', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Lagos', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Lagos', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Lagos', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Lagos', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Lagos', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Lagos', total_fare: '1000.99' },
  
    // Repeat the above objects for each combination of leaving_from and going_to
  
    // leaving_from: Newcastle, going_to: Kathmandu
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Kathmandu', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Kathmandu', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Kathmandu', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Kathmandu', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Kathmandu', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Kathmandu', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Kathmandu', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Kathmandu', total_fare: '1000.99' },
  
    // leaving_from: Newcastle, going_to: Addis Ababa
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Addis Ababa', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Addis Ababa', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Addis Ababa', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Addis Ababa', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Addis Ababa', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Addis Ababa', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Addis Ababa', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Addis Ababa', total_fare: '1000.99' },
  
    // Repeat the above objects for each combination of leaving_from and going_to
  
    // leaving_from: Newcastle, going_to: Dar es Salaam
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Dar es Salaam', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Dar es Salaam', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Dar es Salaam', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Dar es Salaam', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Dar es Salaam', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Dar es Salaam', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Dar es Salaam', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Dar es Salaam', total_fare: '1000.99' },
  
    // Repeat the above objects for each combination of leaving_from and going_to
  
    // leaving_from: Newcastle, going_to: Entebbe
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Entebbe', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Entebbe', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Entebbe', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Entebbe', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Entebbe', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Entebbe', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Entebbe', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Entebbe', total_fare: '1000.99' },
  
    // Repeat the above objects for each combination of leaving_from and going_to
  
    // leaving_from: Newcastle, going_to: Harare
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Harare', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Harare', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Harare', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Harare', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Harare', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Harare', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Harare', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Harare', total_fare: '1000.99' },
  
    // Repeat the above objects for each combination of leaving_from and going_to
  
    // leaving_from: Newcastle, going_to: Mombasa
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Mombasa', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Mombasa', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Mombasa', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Mombasa', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Mombasa', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Mombasa', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Mombasa', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Mombasa', total_fare: '1000.99' },
  
    // Repeat the above objects for each combination of leaving_from and going_to
  
    // leaving_from: Newcastle, going_to: Nairobi
    { airline: 'Air France', leaving_from: 'Newcastle', going_to: 'Nairobi', total_fare: '1000.99' },
    { airline: 'KLM', leaving_from: 'Newcastle', going_to: 'Nairobi', total_fare: '1000.99' },
    { airline: 'Lufthansa', leaving_from: 'Newcastle', going_to: 'Nairobi', total_fare: '1000.99' },
    { airline: 'Qatar Airways', leaving_from: 'Newcastle', going_to: 'Nairobi', total_fare: '1000.99' },
    { airline: 'Virgin Atlantic', leaving_from: 'Newcastle', going_to: 'Nairobi', total_fare: '1000.99' },
    { airline: 'Royal Air Maroc', leaving_from: 'Newcastle', going_to: 'Nairobi', total_fare: '1000.99' },
    { airline: 'British Airways', leaving_from: 'Newcastle', going_to: 'Nairobi', total_fare: '1000.99' },
    { airline: 'ryanair', leaving_from: 'Newcastle', going_to: 'Nairobi', total_fare: '1000.99' },
  ];
  