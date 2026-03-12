//Obselete file that contains the data for the streaming services and their movies.
const streamingServices = [
  {
    name: "Stream It",
    minOrder: 5.98,
    serviceFee: 1.49,
    genres: {
      Romance: [
        { id: 1, title: "Love on Schedule", description: "Two commuters fall in love after missing the same train.", price: 3.49, year: 2023 },
        { id: 2, title: "Summer in Bloom", description: "A gardener and an architect rebuild a park and their hearts.", price: 3.99, year: 2024 },
        { id: 3, title: "Café Melancholy", description: "A writer finds inspiration and romance at a seaside café.", price: 4.49, year: 2025 },
        { id: 4, title: "Parallel Hearts", description: "Two strangers dream about each other every night.", price: 4.79, year: 2025 },
        { id: 5, title: "The Reunion List", description: "Old classmates reconnect at a ten-year reunion.", price: 3.29, year: 2023 }
      ],
      Drama: [
        { id: 6, title: "Fading Echoes", description: "A retired musician rediscovers his passion through teaching.", price: 3.49, year: 2023 },
        { id: 7, title: "Winter’s End", description: "A family confronts long-buried secrets during a snowstorm.", price: 4.49, year: 2024 },
        { id: 8, title: "The Last Testament", description: "A lawyer finds his late father’s journal and learns the truth.", price: 4.99, year: 2025 },
        { id: 9, title: "Letters to Nowhere", description: "A postman delivers messages that change lives.", price: 3.99, year: 2023 },
        { id: 10, title: "The Stillness", description: "A photographer returns to his hometown after decades away.", price: 4.29, year: 2024 }
      ],
      Comedy: [
        { id: 11, title: "Laugh Track", description: "A stand-up comedian’s life spirals into chaos before his big break.", price: 3.49, year: 2023 },
        { id: 12, title: "Office Chaos", description: "When the boss goes missing, the interns take over.", price: 3.99, year: 2024 },
        { id: 13, title: "Roommate Roulette", description: "Five strangers, one apartment, zero compatibility.", price: 2.99, year: 2023 },
        { id: 14, title: "Vacation Miscalculation", description: "A family trip turns into an accidental corporate takeover.", price: 4.49, year: 2025 },
        { id: 15, title: "The Laughing Plan", description: "An undercover detective must pose as a clown.", price: 3.79, year: 2024 },
        { id: 16, title: "Punchline Paradise", description: "A comedy club feud escalates to national television.", price: 4.99, year: 2025 }
      ],
      Action: [
        { id: 17, title: "Red Horizon", description: "Elite pilots race against time to stop an orbital threat.", price: 5.49, year: 2025 },
        { id: 18, title: "Steel Division", description: "Mercenaries must protect a scientist with dangerous knowledge.", price: 4.99, year: 2024 },
        { id: 19, title: "Urban Heat", description: "Cops, robbers, and a ticking bomb in downtown Miami.", price: 3.99, year: 2023 },
        { id: 20, title: "Vortex Run", description: "Street racers uncover a conspiracy behind an energy project.", price: 5.29, year: 2025 },
        { id: 21, title: "Zero Protocol", description: "A rogue agent breaks into his own agency to save the world.", price: 4.49, year: 2024 },
        { id: 22, title: "Afterburn", description: "An ex-firefighter becomes a reluctant hero during a city blackout.", price: 3.99, year: 2023 }
      ],
      SciFi: [
        { id: 23, title: "Nebula Drift", description: "A stranded crew discovers life on a forgotten planet.", price: 5.49, year: 2025 },
        { id: 24, title: "Quantum Divide", description: "A physicist risks everything to reverse a temporal collapse.", price: 4.99, year: 2024 },
        { id: 25, title: "Ecliptic Dawn", description: "An astronaut’s final transmission holds a secret.", price: 4.49, year: 2023 },
        { id: 26, title: "The Core Directive", description: "AI soldiers begin to question their orders.", price: 5.29, year: 2025 },
        { id: 27, title: "Astera", description: "Humanity’s last city orbits a dying star.", price: 4.79, year: 2024 }
      ]
    }
  },

  {
    name: "Movie Verse",
    minOrder: 4.50,
    serviceFee: 2.25,
    genres: {
      Action: [
        { id: 28, title: "Blacksite Zero", description: "A covert mission goes wrong beneath Antarctica.", price: 5.29, year: 2025 },
        { id: 29, title: "Midnight Surge", description: "A hacker targets corrupt corporations under the cover of night.", price: 4.79, year: 2024 },
        { id: 30, title: "The Brink Protocol", description: "An elite task force must stop an AI uprising.", price: 5.49, year: 2025 },
        { id: 31, title: "Stormbreaker", description: "A rogue pilot fights to prevent a weather-control weapon launch.", price: 4.99, year: 2024 },
        { id: 32, title: "Iron Cross", description: "An ex-soldier uncovers a conspiracy in the global arms trade.", price: 4.29, year: 2023 }
      ],
      Comedy: [
        { id: 33, title: "The Pranksters", description: "A group of pranksters take on a billionaire’s security system.", price: 4.49, year: 2024 },
        { id: 34, title: "Social Climber", description: "A small-town influencer accidentally becomes famous worldwide.", price: 4.79, year: 2025 },
        { id: 35, title: "Suburban Legends", description: "Neighbors feud over the title of best Halloween house.", price: 3.29, year: 2023 },
        { id: 36, title: "Bloopers Forever", description: "A failed sitcom gets revived in the strangest way possible.", price: 3.99, year: 2024 },
        { id: 37, title: "Parent Trapdoor", description: "A single dad joins a parenting reality show for the wrong reasons.", price: 4.99, year: 2025 },
        { id: 38, title: "Instant Roommates", description: "A housing app glitch pairs complete opposites together.", price: 3.79, year: 2023 }
      ],
      Drama: [
        { id: 39, title: "Crimson Line", description: "A detective confronts her past in a city divided by corruption.", price: 4.99, year: 2024 },
        { id: 40, title: "Falling Leaves", description: "A widower reopens his late wife’s bookstore.", price: 3.99, year: 2023 },
        { id: 41, title: "North of Winter", description: "Siblings reunite to sell their family cabin, but memories intervene.", price: 4.79, year: 2025 },
        { id: 42, title: "Unwritten Pages", description: "A novelist struggles between truth and fiction.", price: 4.49, year: 2024 },
        { id: 43, title: "The River’s Silence", description: "A fisherman faces an environmental disaster in his hometown.", price: 3.99, year: 2023 },
        { id: 44, title: "The Last Candle", description: "Hope flickers in a small town during a nationwide blackout.", price: 4.99, year: 2025 }
      ],
      Romance: [
        { id: 45, title: "Love Algorithm", description: "An AI matchmaker develops feelings for a user.", price: 5.29, year: 2025 },
        { id: 46, title: "Harbor Lights", description: "Two sailors’ paths cross under the Northern Lights.", price: 4.49, year: 2024 },
        { id: 47, title: "Postmarked", description: "Two pen pals discover they’ve been living next door.", price: 3.79, year: 2023 },
        { id: 48, title: "Painted Skies", description: "An artist and a pilot fall in love through murals and maps.", price: 4.79, year: 2024 },
        { id: 49, title: "Moonset Café", description: "Late-night diners find more than coffee in common.", price: 3.99, year: 2023 }
      ]
    }
  },

  {
    name: "Cinema Time",
    minOrder: 3.99,
    serviceFee: 1.79,
    genres: {
      Romance: [
        { id: 50, title: "Paper Stars", description: "Two authors fall in love while co-writing a book.", price: 3.99, year: 2023 },
        { id: 51, title: "Digital Hearts", description: "A VR romance becomes all too real.", price: 4.79, year: 2025 },
        { id: 52, title: "The Lighthouse Promise", description: "A love rekindled by letters found in a lighthouse.", price: 4.49, year: 2024 },
        { id: 53, title: "Sweet Distraction", description: "A baker and a lawyer’s worlds collide over cupcakes.", price: 3.49, year: 2023 },
        { id: 54, title: "Orbit of You", description: "Two scientists fall in love while building a satellite.", price: 4.99, year: 2025 }
      ],
      Comedy: [
        { id: 55, title: "Chef’s Disaster", description: "A cooking show goes viral for all the wrong reasons.", price: 3.49, year: 2023 },
        { id: 56, title: "Going Corporate", description: "A musician accidentally becomes a financial analyst.", price: 4.29, year: 2024 },
        { id: 57, title: "Mall Madness", description: "Black Friday turns into a wild adventure for two friends.", price: 3.79, year: 2023 },
        { id: 58, title: "Retirement Roadtrip", description: "Three retirees take one last joyride across the country.", price: 4.49, year: 2025 },
        { id: 59, title: "Pet Project", description: "A group of zookeepers start a dating app for pet owners.", price: 4.79, year: 2025 },
        { id: 60, title: "Podcast Wars", description: "Two rival hosts accidentally collaborate on a hit show.", price: 3.99, year: 2024 }
      ],
      Action: [
        { id: 61, title: "Delta Strike", description: "A special ops team is framed for an international incident.", price: 5.29, year: 2025 },
        { id: 62, title: "Railgun", description: "A stolen weapon prototype ignites global conflict.", price: 4.99, year: 2024 },
        { id: 63, title: "Crimson Tide", description: "A submarine crew must decide who to trust in deep waters.", price: 4.29, year: 2023 },
        { id: 64, title: "Shadow Protocol", description: "A spy is forced to protect the criminal he once hunted.", price: 4.99, year: 2024 },
        { id: 65, title: "Nightfall", description: "A mercenary discovers the war he’s fighting doesn’t exist.", price: 5.49, year: 2025 },
        { id: 66, title: "High Impact", description: "An ex-athlete uses his skills to take down a cartel.", price: 3.99, year: 2023 }
      ],
      SciFi: [
        { id: 67, title: "Deep Signal", description: "Divers uncover an alien structure beneath the ocean.", price: 4.79, year: 2024 },
        { id: 68, title: "Echo Grid", description: "Reality fractures after a failed teleportation experiment.", price: 5.29, year: 2025 },
        { id: 69, title: "Zero Matter", description: "A scientist unlocks a new element that defies physics.", price: 4.49, year: 2023 },
        { id: 70, title: "Red Shift", description: "A space captain relives the same day across galaxies.", price: 4.99, year: 2024 },
        { id: 71, title: "The Synthetic Horizon", description: "Human clones begin remembering other lives.", price: 5.49, year: 2025 },
        { id: 72, title: "Project Paradox", description: "A time experiment threatens to erase the inventor’s timeline.", price: 4.99, year: 2024 }
      ]
    }
  }
];
