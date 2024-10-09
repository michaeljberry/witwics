function getStageInfo(stage) {
  return questions[stage]
}

const questions = {
  leg1: {
    type: 'leg',
    question: `Our first clue comes from a secret agent at Acme HQ. According to our agent, Carmen 
    Sandiego has been spotted at a luxurious hotel in a city known for its romantic canals. The 
    agent overheard Carmen discussing plans to meet with a mysterious contact at the hotel's 
    famous opera house.`,
    clues: ['A city known for its romantic canals', 'Hotel has a famous opera house'],
    image: '/carmen-sandiego-graphics_europe-1.jpg',
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
    type: 'leg',
    question: `I recently visited a country with a rich history and a famous landmark shaped like a 
    pyramid. The locals were incredibly hospitable and the food was delicious. I even had the chance
    to explore an ancient tomb and learn about the pharaohs who ruled the land.`,
    guest: 'David Beckham',
    image: '/carmen-sandiego-graphics_celebrity.jpg',
    clues: [
      'Country with a rich history',
      'Famous landmark shaped like a pyramid',
      'Locals were hospitable and the food was delicious',
      'Ancient tomb and learned about pharaohs'
    ],
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
    type: 'leg',
    question: `The video shows Carmen Sandiego leaving a high-rise building in a city famous for 
    its towering skyscrapers and bustling nightlife. The city is also known for its unique culture 
    and delicious cuisine. In the background, you can see a famous landmark shaped like a giant bean.`,
    guest: '',
    image: '/carmen-sandiego-graphics_tokyo.jpg',
    clues: [
      'City famous for its towering skyscrapers and bustling nightlife',
      'Unique culture and delicious cuisine',
      'Famous landmark shaped like a giant bean'
    ],
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
  lightningRound: {
    type: 'lightningRound',
    questions: [
      {
        question: `What is the tallest mountain in the Kanto region of Japan?`,
        image: '/carmen-sandiego-graphics_fuji.jpg',
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
        image: '/carmen-sandiego-graphics_sushi.jpg',
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
        image: '/carmen-sandiego-graphics_cherry.jpg',
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
        image: '/carmen-sandiego-graphics_Sumo.jpg',
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
        image: '/carmen-sandiego-graphics_Geisha.jpg',
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
    ]
  },
  wager: {
    type: 'wager',
    question: `Gumshoes, I've received a tip from a reliable source. It seems our elusive crook has
    been spotted in a coastal city known for its beautiful beaches and vibrant nightlife. The
    source claims to have seen the crook at a popular tourist destination, a historic landmark that
    offers stunning views of the ocean.`,
    image: '/carmen-sandiego-graphics_Australia-1.jpg',
    clues: [
      'The city is located on a peninsula',
      'The city is home to a famous landmark that resembles a bridge',
      'The city is a popular destination for surfers and beachgoers'
    ],
    answer: 'Sydney, Australia'
  },
  lockUp: {
    type: 'lockUp',
    question: `The Chief Detective has provided additional information. You must find the loot, 
    warrant, and crook hidden among these cards. Turn over one card at a time. If you uncover 
    footsteps, your turn is over. If you uncover the loot, warrant or crook, you can flip over 
    another. If you flip over all three, you win and will move to the next round.`,
    places: {
      1: {
        location: 'Sydney Opera House',
        description: 'Iconic landmark and performing arts center',
        image: '/carmen-sandiego-graphics_Opera.jpg'
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
        location: 'Sydney Harbour Bridge',
        description: 'Iconic bridge connecting the city center to North Sydney',
        item: 'warrant'
      },
      5: {
        location: 'Royal Botanic Garden',
        description: 'Beautiful gardens with diverse plant species'
      },
      6: {
        location: 'The Rocks',
        description: 'Historic district with cobblestone streets and shops',
        image: '/carmen-sandiego-graphics_Rocks.jpg'
      },
      7: {
        location: 'Taronga Zoo',
        description: 'Zoo with native and exotic animals'
      },
      8: {
        location: "Mrs. Macquarie's Chair",
        description: 'Historic landmark with panoramic views of the city'
      },
      9: {
        location: 'Manly Beach',
        description: 'Popular beach with surfing and swimming',
        item: 'loot'
      },
      10: {
        location: 'Luna Park',
        description: 'Amusement park with rides and attractions',
        item: 'crook'
      },
      11: {
        location: 'Museum of Contemporary Art',
        description: 'Art museum showcasing contemporary Australian and international art'
      },
      12: {
        location: 'Circular Quay',
        description: 'Ferry terminal with stunning views of the harbor',
        image: '/carmen-sandiego-graphics_Quay.jpg'
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
      },
      16: {
        location: 'Coogee Beach',
        description: 'Popular beach with coastal walks and rock pools'
      }
    }
  },
  headToHead: {
    type: 'headToHead',
    questions: [
      {
        question: 'What is the largest country in Europe by land area?',
        answers: {
          1: {
            option: 'Russia',
            correct: true
          }
        }
      },
      {
        question: 'Which European country is known for its canals and windmills?',
        answers: {
          1: {
            option: 'Netherlands',
            correct: true
          }
        }
      },
      {
        question: 'What is the official language of Spain?',
        answers: {
          1: {
            option: 'Spanish',
            correct: true
          }
        }
      },
      {
        question: 'Which European city is home to the Eiffel Tower?',
        answers: {
          1: {
            option: 'Paris',
            correct: true
          }
        }
      },
      {
        question: 'What is the highest mountain in Europe?',
        answers: {
          1: {
            option: 'Mont Blanc',
            correct: true
          }
        }
      },
      {
        question: 'Which European country is famous for its fjords?',
        answers: {
          1: {
            option: 'Norway',
            correct: true
          }
        }
      },
      {
        question: 'What is the capital city of Italy?',
        answers: {
          1: {
            option: 'Rome',
            correct: true
          }
        }
      },
      {
        question: 'Which European country is known for its Oktoberfest celebrations?',
        answers: {
          1: {
            option: 'Germany',
            correct: true
          }
        }
      },
      {
        question: 'What is the currency used in most European countries?',
        answers: {
          1: {
            option: 'Euro',
            correct: true
          }
        }
      },
      {
        question: 'Which European country is the smallest in terms of land area?',
        answers: {
          1: {
            option: 'Vatican City',
            correct: true
          }
        }
      }
    ]
  },
  finalChase: {
    type: 'finalChase',
    image: '/carmen-sandiego-graphics_Europe-2.jpg',
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

export { questions, getStageInfo }
