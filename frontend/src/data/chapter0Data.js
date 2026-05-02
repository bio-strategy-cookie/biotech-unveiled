const chapter0 = {
  id: "chapter-0",
  title: "Welcome to This Mini-Course",
  subtitle: "What you'll learn and how to get started",
  estimatedTime: "20 min",
  maxXP: 80,
  overview: {
    parts: [
      {
        number: 1,
        level: "green",
        title: "Meet Zoey & the course team",
        description: "A patient story that sets up the central question of the course, and an introduction to your instructors."
      },
      {
        number: 2,
        level: "green",
        title: "Why this course exists",
        description: "Who it's for, what gap it fills, and what you'll be able to do by the end."
      },
      {
        number: 3,
        level: "green",
        title: "How to navigate the course",
        description: "Structure, time commitment, and how to set yourself up to actually finish."
      }
    ]
  },
  topics: [
    {
      id: "c0t1",
      level: "green",
      type: "video",
      contextNote: "No prior knowledge needed — start here",
      title: "Meet Zoey: a patient whose life was changed by Trikafta",
      content: "Zoey was diagnosed with cystic fibrosis (CF) shortly after birth. As recently as a few years ago, many children with CF did not survive past childhood. Watch this short video to learn about Zoey and how the new drug Trikafta has dramatically changed the course of her life. If you or someone you loved had CF, what would Trikafta be worth to you?",
      videoUrl: "https://www.youtube.com/embed/jy6rO_pA2ZY",
      xp: 10
    },
    {
      id: "c0t2",
      level: "green",
      type: "reading",
      contextNote: "Sets the stage for the whole course — read this first",
      title: "The critical questions this course will answer",
      content: "In 2019, Vertex Pharmaceuticals released Trikafta — a game-changer for many people with CF. It has significantly increased life expectancy and dramatically improved quality of life for thousands of patients. But it is also incredibly expensive. The list price of Trikafta is over $300,000 a year. Why do some drugs have such a high price tag? Are drug companies greedy? Is our healthcare system failing? How might we go about determining if the cost of developing a drug is 'worth it'? What factors contribute to a drug's price? What is a list price, and how is it different from what patients pay out of pocket? The answers to these questions are complex, and are part of what we will explore in this mini-course.",
      xp: 10
    },
    {
      id: "c0t3",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — see if this course is right for you",
      title: "Who is this mini-course for?",
      content: "This mini-course is intended for early-career professionals employed in the biotech industry, and for graduate or undergraduate students who intend to work in biotech. It is also suitable for people outside of the biotech field who'd like to better understand the drug development process and its interplay with the U.S. healthcare system. We've found that it's surprisingly common for people to complete degrees in biology, chemistry, and related fields without getting much exposure to how the biotech industry actually works. We created this course so that from early on, biotech professionals will be empowered and set up for greater success by understanding the broader context in which they operate.",
      xp: 10
    },
    {
      id: "c0t4",
      level: "green",
      type: "video",
      contextNote: "Meet the team behind the course",
      title: "About your instructor: Peter Kolchinsky, PhD",
      content: "Peter Kolchinsky is a biotechnology investor and scientist. He co-founded and runs RA Capital Management, a Boston-based investment firm. He writes and teaches about biomedical entrepreneurship and its potential to transform global health. He holds a BA from Cornell University and a PhD in Virology from Harvard University. Watch his introduction video.",
      videoUrl: "https://player.vimeo.com/video/1019938572",
      xp: 10
    },
    {
      id: "c0t5",
      level: "green",
      type: "video",
      contextNote: "What you'll be able to do by the end",
      title: "Why should you take this mini-course?",
      content: "Completing this mini-course will give you a huge leg up. By the end you will have: a solid grasp of how both the science and business aspects of the biotech ecosystem work; knowledge of how to increase the odds that the drugs you work on can benefit the greatest possible number of people; a deeper understanding of the role health insurance plays in the drug-development ecosystem; and a baseline for thinking about effective ways to change policy. Watch Peter explain what you'll learn that you're unlikely to get elsewhere.",
      videoUrl: "https://player.vimeo.com/video/1019938893",
      xp: 10
    },
    {
      id: "c0t6",
      level: "green",
      type: "reading",
      contextNote: "Read this before starting — helps you plan your time",
      title: "How this mini-course is structured",
      content: "This mini-course is broken down into 8 short chapters, plus 1 final review chapter and an optional exam for a certificate of completion. Content must be completed in order as it builds on itself. The nine chapters cover: Why Develop New Drugs; Where Do New Drugs Come From; All About the Money; Why New Drugs Are So Expensive; The Journey from Brand to Generic; Why Insurance is So Important; The Big Problems With Insurance; Confronting the Threat to US Biomedical Innovation; and Course Wrap-up. Each chapter features videos, readings, and Check Your Understanding quizzes required to advance.",
      xp: 10
    },
    {
      id: "c0t7",
      level: "green",
      type: "reading",
      contextNote: "Plan your schedule now to maximise completion",
      title: "How long will it take?",
      content: "Completing the free mini-course should take about 6–10 hours total, largely depending on how much time you spend on optional material. You can complete the course at your own pace with no time limit. Your odds of completing go up dramatically if you make a commitment now. If you complete 1 chapter per day (~1 hour each), you'll be done in just over a week. Or if you put in about 15 minutes per day, you can complete it in about a month. Decide how you want to break down your time and put it in your calendar right now!",
      xp: 10
    },
    {
      id: "c0t8",
      level: "green",
      type: "quiz",
      contextNote: "Tests your understanding of the course goals",
      title: "Check your understanding: welcome to this mini-course",
      xp: 10,
      questions: [
        {
          question: "What is the primary goal of this mini-course?",
          options: [
            "To provide insights into common healthcare decision-making processes",
            "To empower early-career professionals to navigate and succeed in the biotech ecosystem",
            "To teach complex scientific concepts in drug development",
            "To offer investment advice for biotech professionals"
          ],
          correct: 1
        },
        {
          question: "What will you be knowledgeable about after completing this mini-course?",
          options: [
            "The sequence of events that led to the creation of the FDA",
            "How drug development intersects with environmental practices",
            "The roles that investors, insurance, and government play in drug development",
            "The history of all drugs developed over the past 100 years"
          ],
          correct: 2
        },
        {
          question: "Your odds of successfully completing this mini-course go up if you:",
          options: [
            "Make a commitment to completing it",
            "Decide how you want to allocate your time and put it in your calendar",
            "Go through this mini-course together with a buddy",
            "All of the above"
          ],
          correct: 3
        }
      ]
    }
  ]
};

export default chapter0;
