export interface Tutor {
  name: string;
  slug: string;
  title: string;
  experience: string;
  experienceColor: "green" | "pink" | "blue" | "red";
  bio: string;
  methodology: string[];
  videoPlaceholder: {
    title: string;
    duration: string;
  };
  testimonials: {
    quote: string;
    parentName: string;
    ageGroup: string;
  }[];
}

export const tutors: Tutor[] = [
  {
    name: "Tutor One",
    slug: "tutor-one",
    title: "English Tutor",
    experience: "3 years",
    experienceColor: "green",
    bio: "Specialist in conversational English and exam prep. Passionate about helping students break through speaking barriers with confidence.",
    methodology: [
      "Conversational immersion with real-world scenarios",
      "Interactive speaking drills and instant feedback",
      "Customized homework sets focused on weak areas"
    ],
    videoPlaceholder: {
      title: "Introduction to Conversational English with Tutor One",
      duration: "1:45"
    },
    testimonials: [
      {
        quote: "Tutor One made my daughter feel extremely comfortable speaking English from day one. Her confidence has soared!",
        parentName: "Min-jun's Mother",
        ageGroup: "Elementary school student"
      },
      {
        quote: "Perfect preparation for my job interview. The speaking drills were highly effective.",
        parentName: "Ji-won Kim",
        ageGroup: "Adult learner"
      }
    ]
  },
  {
    name: "Tutor Two",
    slug: "tutor-two",
    title: "English Tutor",
    experience: "8 years",
    experienceColor: "pink",
    bio: "Expert in grammar, writing, and academic English. Experienced in tutoring middle and high school students for top tier results.",
    methodology: [
      "Structural grammar decoding without rote memorization",
      "Sentence diagramming and essay-writing frameworks",
      "Academic reading comprehension strategies"
    ],
    videoPlaceholder: {
      title: "Mastering English Essay Writing with Tutor Two",
      duration: "2:15"
    },
    testimonials: [
      {
        quote: "Our son's essay writing improved dramatically. He finally understands complex sentence structures.",
        parentName: "Seo-yeon's Father",
        ageGroup: "Middle school student"
      }
    ]
  },
  {
    name: "Tutor Three",
    slug: "tutor-three",
    title: "English Tutor",
    experience: "5 years",
    experienceColor: "blue",
    bio: "Focused on children's English, beginner to intermediate levels. Creates fun, dynamic lessons designed to build a strong foundational vocabulary.",
    methodology: [
      "Gamified learning modules and interactive visual cards",
      "Phonics-first pronunciation training",
      "Storytelling-based comprehension exercises"
    ],
    videoPlaceholder: {
      title: "Fun Foundational Phonics with Tutor Three",
      duration: "2:00"
    },
    testimonials: [
      {
        quote: "My 8-year-old looks forward to English class every single week. Tutor Three is incredibly engaging!",
        parentName: "Ye-jun's Mother",
        ageGroup: "Beginner learner"
      }
    ]
  },
  {
    name: "Tutor Four",
    slug: "tutor-four",
    title: "English Tutor",
    experience: "10 years",
    experienceColor: "red",
    bio: "Senior tutor specializing in business English, IELTS preparation, and advanced academic English writing.",
    methodology: [
      "Rigorous IELTS scoring rubric analysis and mock test reviews",
      "Corporate speaking simulation and professional presentation coaching",
      "High-level vocabulary expansion and native phrasing integration"
    ],
    videoPlaceholder: {
      title: "Advanced IELTS & Speaking Prep with Tutor Four",
      duration: "3:10"
    },
    testimonials: [
      {
        quote: "Scored a 7.5 on my IELTS after just two months of targeted preparation with Tutor Four. Outstanding guidance.",
        parentName: "Woo-jin Lee",
        ageGroup: "IELTS candidate"
      },
      {
        quote: "Highly structured sessions that gave me the tools to write reports and run board meetings in English.",
        parentName: "Sae-byeok Park",
        ageGroup: "Business executive"
      }
    ]
  }
];
