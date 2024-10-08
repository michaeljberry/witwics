const questions = {
  leg1: {
    question: `Our first clue comes from a secret agent at Acme HQ. According to our agent, Carmen Sandiego has been spotted at a luxurious hotel in a city known for its romantic canals. The agent overheard Carmen discussing plans to meet with a mysterious contact at the hotel's famous opera house.`,
    answers: {
      1: {
        option: 'Venice, Italy',
        correct: true
      },
      2: {
        option: 'Amsterdam, Netherlands'
      },
      3: {
        option: 'Copenhagen, Denmark'
      }
    }
  },
  leg2: {
    question: `I recently visited a country with a rich history and a famous landmark shaped like a pyramid. The locals were incredibly hospitable and the food was delicious. I even had the chance to explore an ancient tomb and learn about the pharaohs who ruled the land.`,
    answers: {
      1: {
        option: 'Egypt',
        correct: true
      },
      2: {
        option: 'Mexico'
      },
      3: {
        option: 'Peru'
      },
      4: {
        option: 'India'
      }
    }
  },
  leg3: {
    question: `The video shows Carmen Sandiego leaving a high-rise building in a city famous for its towering skyscrapers and bustling nightlife. The city is also known for its unique culture and delicious cuisine. In the background, you can see a famous landmark shaped like a giant bean.`,
    answers: {
      1: {
        option: 'New York City, USA'
      },
      2: {
        option: 'Tokyo, Japan',
        correct: true
      },
      3: {
        option: 'Shanghai, China'
      }
    }
  },
  lightningRound: [
    {
      question: `What is the tallest mountain in the Kanto region of Japan?`,
      answers: {
        1: {
          option: 'Mount Fuji',
          correct: true,
          explanation:
            'Mount Fuji is the tallest mountain in the Kanto region, which includes Tokyo'
        },
        2: {
          option: 'Mount Kita'
        },
        3: {
          option: 'Mount Yake'
        }
      }
    },
    {
      question: `What type of sushi is considered the most traditional and consists of vinegared rice and seafood wrapped in seaweed?`,
      answers: {
        1: {
          option: 'Nigiri',
          correct: true,
          explanation:
            'Nigiri sushi is the most traditional type, consisting of a small mound of rice topped with a piece of seafood'
        },
        2: {
          option: 'Maki'
        },
        3: {
          option: 'Uramaki'
        }
      }
    },
    {
      question: `In what month does the cherry blossom season typically begin in Tokyo?`,
      answers: {
        1: {
          option: 'March',
          correct: true,
          explanation:
            'Cherry blossom season typically begins in late March or early April in Tokyo'
        },
        2: {
          option: 'April'
        },
        3: {
          option: 'May'
        }
      }
    },
    {
      question: `What is the highest rank a sumo wrestler can achieve?`,
      answers: {
        1: {
          option: 'Yokozuna',
          correct: true,
          explanation: 'Yokozuna is the highest rank in sumo wrestling'
        },
        2: {
          option: 'Ozeki'
        },
        3: {
          option: 'Sekiwake'
        }
      }
    },
    {
      question: `What is the traditional hairstyle worn by geisha, often adorned with elaborate hair ornaments?`,
      answers: {
        1: {
          option: 'Shimada',
          correct: true,
          explanation: 'Shimada is a traditional Japanese hairstyle often worn by geisha'
        },
        2: {
          option: 'Bun'
        },
        3: {
          option: 'Ponytail'
        }
      }
    }
  ],
  wager: {
    question: `Gumshoes, I've received a tip from a reliable source. It seems our elusive crook has been spotted in a coastal city known for its beautiful beaches and vibrant nightlife. The source claims to have seen the crook at a popular tourist destination, a historic landmark that offers stunning views of the ocean.`,
    clues: {
      1: {
        option: 'The city is located on a peninsula'
      },
      2: {
        option: 'The city is home to a famous landmark that resembles a bridge'
      },
      3: {
        option: 'The city is a popular destination for surfers and beachgoers'
      }
    },
    answer: 'Sydney, Australia'
  },
  lockUp: {
    question: `The Chief Detective has provided additional information. You must find the loot, warrant, and crook hidden among these cards. Turn over one card at a time. If you uncover footsteps, your turn is over. If you uncover the loot, warrant or crook, you can flip over another. If you flip over all three, you win and will move to the next round.`,
    places: {
      1: {
        location: 'Sydney Opera House',
        description: 'Iconic landmark and performing arts center'
      },
      2: {
        location: 'Darling Harbour',
        description: 'Waterfront precinct with shops, restaurants, and attractions'
      },
      3: {
        location: 'Bondi Beach',
        description: 'Popular beach with surfing, swimming, and sunbathing'
      },
      4: {
        location: 'The Rocks',
        description: 'Historic district with cobblestone streets and shops'
      },
      5: {
        location: 'Sydney Harbour Bridge',
        description: 'Iconic bridge connecting the city center to North Sydney'
      },
      6: {
        location: 'Royal Botanic Garden',
        description: 'Beautiful gardens with diverse plant species'
      },
      7: {
        location: 'Taronga Zoo',
        description: 'Zoo with native and exotic animals'
      },
      8: {
        location: 'Circular Quay',
        description: 'Ferry terminal with stunning views of the harbor'
      },
      9: {
        location: "Mrs. Macquarie's Chair",
        description: 'Historic landmark with panoramic views of the city'
      },
      10: {
        location: 'Manly Beach',
        description: 'Popular beach with surfing and swimming'
      },
      11: {
        location: 'Luna Park',
        description: 'Amusement park with rides and attractions'
      },
      12: {
        location: 'Museum of Contemporary Art',
        description: 'Art museum showcasing contemporary Australian and international art'
      },
      13: {
        location: 'Hyde Park',
        description: 'Urban park with gardens, fountains, and monuments'
      },
      14: {
        location: 'Chinatown',
        description: 'Vibrant neighborhood with Chinese restaurants and shops'
      },
      15: {
        location: 'Australian National Maritime Museum',
        description: 'Museum dedicated to Australian maritime history'
      }
    }
  },
  headToHead: [
    {
      question: 'What is the largest country in Europe by land area?',
      answers: {
        1: {
          location: 'Russia',
          correct: true
        }
      }
    },
    {
      question: 'Which European country is known for its canals and windmills?',
      answers: {
        1: {
          location: 'Netherlands',
          correct: true
        }
      }
    },
    {
      question: 'What is the official language of Spain?',
      answers: {
        1: {
          location: 'Spanish',
          correct: true
        }
      }
    },
    {
      question: 'Which European city is home to the Eiffel Tower?',
      answers: {
        1: {
          location: 'Paris',
          correct: true
        }
      }
    },
    {
      question: 'What is the highest mountain in Europe?',
      answers: {
        1: {
          location: 'Mont Blanc',
          correct: true
        }
      }
    },
    {
      question: 'Which European country is famous for its fjords?',
      answers: {
        1: {
          location: 'Norway',
          correct: true
        }
      }
    },
    {
      question: 'What is the capital city of Italy?',
      answers: {
        1: {
          location: 'Rome',
          correct: true
        }
      }
    },
    {
      question: 'Which European country is known for its Oktoberfest celebrations?',
      answers: {
        1: {
          location: 'Germany',
          correct: true
        }
      }
    },
    {
      question: 'What is the currency used in most European countries?',
      answers: {
        1: {
          location: 'Euro',
          correct: true
        }
      }
    },
    {
      question: 'Which European country is the smallest in terms of land area?',
      answers: {
        1: {
          location: 'Vatican City',
          correct: true
        }
      }
    }
  ],
  finalChase: {
    countries: [
      'France',
      'Spain',
      'Italy',
      'Germany',
      'United Kingdom',
      'Greece',
      'Portugal',
      'Switzerland',
      'Austria',
      'Iceland',
      'Andorra',
      'Monaco',
      'Malta'
    ]
  }
}
