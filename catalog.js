/* =========================================================================
   THE ALCHEMIST CLASSROOM — CATALOG
   This is the only file you edit to add an app or a section.

   ADD A NEW APP:      copy one app block in APPS, change the details,
                       and set "section" to the id of the section it goes in.
   ADD A NEW SECTION:  copy a section block in SECTIONS and give it a new id.
                       It appears as a new glowing node on the index screen.
   "Coming soon" sections: set soon: true — they show as dim placeholder nodes.
   SHOW AN APP IN MORE THAN ONE SECTION: add  alsoIn: ["sel-behavior"]  to the app.
   SUBJECT FOLDERS: Curriculum Tools has subject folders. To put an app in one, add
                    subjects: ["math"]   (or "english", "science", "social-studies", "reading")
                    to the app. It still shows in its own section too.
   Art: put the image file in /images with the file name used below.
   Screenshots: list them in an app's "screens" — they show in a small app window.
   ========================================================================= */

var STORE = {
  name: "The Alchemist Classroom",
  tagline: "The Teacher Toolbox",
  supportEmail: "help@alchemistclassroom.com"
};

var SECTIONS = [
  {
    id: "in-class-apps",
    name: "In-Class Apps",
    short: "Quick, low-cost tools to use with students during a lesson.",
    blurb: "Small apps you open in class and use right away with your students. Download once, use all year, no internet needed. If an app emails you a report, sending it needs a connection.",
    emblem: "images/section-inclass.png",
    color: "#2DD4BF"
  },
  {
    id: "pro-apps",
    name: "Pro Apps",
    short: "Complete systems for teachers and special education teams.",
    blurb: "Bigger systems that run a part of your school day, built for whole teams. Your students' data stays on your school's computers.",
    emblem: "images/section-pro.png",
    color: "#8B5CF6"
  },
  {
    id: "free-tools",
    name: "Free Tools",
    short: "Free classroom tools to download and use right away.",
    blurb: "Small, useful tools for any classroom, free to download. Like everything here, they run offline and keep your students' information on your own computer.",
    emblem: "images/section-free.png",
    color: "#F5B942"
  },
  {
    id: "curriculum-tools",
    name: "Curriculum Tools",
    short: "Tools for teaching your core subjects, sorted into subject folders.",
    blurb: "Pick a subject to see its tools. An app can live in a subject folder and in another section at the same time.",
    emblem: "images/section-curriculum.png",
    color: "#60A5FA",
    subjects: [                       // folders inside this section; tag apps with  subjects: ["science"]
      { id: "math",           name: "Math" },
      { id: "english",        name: "English" },
      { id: "science",        name: "Science" },
      { id: "social-studies", name: "Social Studies" },
      { id: "reading",        name: "Reading" }
    ]
  },
  {
    id: "sel-behavior",
    name: "SEL & Behavior",
    short: "Social-emotional learning and behavior support tools.",
    blurb: "Tools for teaching social-emotional skills and supporting student behavior \u2014 from quick classroom activities to complete point-and-reward systems.",
    emblem: "images/section-sel.png",
    color: "#F472B6"
  }
];

var APPS = [
  {
    id: "cell-lab",
    section: "in-class-apps",
    subjects: ["science"],
    name: "Cell Lab",
    price: "$4",
    icon: "images/app-cell-lab.png",
    short: "Students explore, build and compare plant and animal cells, then send you a report.",
    description: "A Grade 7 cell lab students can do on their own. They explore each organelle's job, build an animal cell and a plant cell by dragging parts onto a detailed picture, compare the two, and take a quick check. When they finish, one click emails you their report.",
    features: [
      ["Explore", "10 animal and 12 plant cell parts, each with its job, a real-world connection and read-aloud."],
      ["Build a cell", "Drag each part onto its spot. Wrong drops just say try again, and a clue is there when students need one."],
      ["Compare + Quick check", "What plant and animal cells share and how they differ, then a short quiz."],
      ["A report for you", "Students send you their work through Gmail or Outlook: parts placed, clues used, quiz answers and time spent."],
      ["Works offline", "One file. No accounts, no internet, and nothing is sent until the student presses Send."]
    ],
    demoUrl: "demos/cell-lab/",
    screens: [
      ["images/cell-1.jpg", "Explore: pick a part to learn its job."],
      ["images/cell-2.jpg", "Build: drag each part onto the plant or animal cell."],
      ["images/cell-3.jpg", "Compare: what the two cells share and how they differ."]
    ],
    includes: ["Cell Lab app file (one offline file)", "Quick Start guide", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grade 7, NGSS MS-LS1-2.",
    buyUrl: "https://payhip.com/b/KnMmy"
  },
  {
    id: "lab-builder",
    section: "in-class-apps",
    subjects: ["science"],
    name: "Lab Builder + 3 Solo Labs",
    price: "$10",
    icon: "images/app-lab-builder.png",
    short: "Students who work alone still get a lab group: three scripted teammates guide them through a full lab.",
    description: "For the student who's absent, on a different schedule, or just works better alone. Three friendly scripted teammates talk them through predicting, variables, a fair test, data, a claim-evidence-reasoning conclusion and reflection, then the student emails you a full lab report. Comes with three ready-made Grade 6 labs, and Lab Builder lets you make your own.",
    features: [
      ["3 ready-made labs", "Paper Towel (absorbency), Water's Bond (surface tension) and Lava Lamp (density). Share and go."],
      ["A real lab group", "Maya, Deshawn and Leo disagree, ask for evidence, and help the student fix an unfair test, just like a good group."],
      ["Real or on-screen", "Students use real materials or a built-in simulation, so the lab works even without supplies."],
      ["Build your own", "Fill in Lab Builder's sections, preview as a student, and export one file or a Google Sites embed."],
      ["A report for you", "Students send predictions, data, averages, their CER conclusion, group decisions and reflection through Gmail or Outlook."]
    ],
    demoUrl: "demos/lab-builder/",
    screens: [
      ["images/labs-1.jpg", "A solo lab: the student's teammates talk them through it, with a lab sheet that fills in as they go."],
      ["images/labs-2.jpg", "Lab Builder: fill in each section, preview as a student, then export."]
    ],
    includes: ["Lab Builder (one offline file)", "3 ready-made student labs", "Quick Start guide", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grade 6 science labs; build your own for any grade.",
    buyUrl: "https://payhip.com/b/DW6Uu"
  },
  {
    id: "sel-activity-pack",
    section: "in-class-apps",
    alsoIn: ["sel-behavior"],
    name: "SEL Activity Pack",
    price: "$5",
    icon: "images/app-sel-pack.png",
    short: "Four interactive middle school SEL activities: digital citizenship, digital footprint, media balance and gratitude.",
    description: "Four short activities students can do on a Chromebook or you can project for the class. Two of them end with an exit ticket that students send to your email.",
    features: [
      ["Digital Citizenship Sort", "Students sort 16 online choices into Safe, Responsible, Respectful, or Not a Good Digital Citizen, then check their answers."],
      ["Digital Footprint Adventure", "A scored mission on what adds to a footprint, why it lasts, and the STOP check before posting, with a 4-question exit ticket."],
      ["Media Balance Mission", "Students notice how media makes them feel, take the \u201c5 more minutes\u201d test, and set one balance challenge."],
      ["Thank You, Out Loud", "A 30-minute social-awareness lesson: spot specific kindness, make a thank-you card, and practice saying it out loud."],
      ["Results in your inbox", "Students type your email once and send their exit ticket with Gmail, Outlook or their email app."]
    ],
    demoUrl: "demos/sel-activity-pack/",
    screens: [
      ["images/sel-1.jpg", "Digital Citizenship Sort"],
      ["images/sel-2.jpg", "Digital Footprint Adventure"],
      ["images/sel-3.jpg", "Media Balance Mission"],
      ["images/sel-4.jpg", "Thank You, Out Loud: teacher view with a built-in lesson clock"]
    ],
    includes: ["4 activity files (each one offline file)", "Quick Start guide", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grades 6\u20138.",
    buyUrl: "https://payhip.com/b/Imnoh"
  },
  {
    id: "equation-forge",
    section: "in-class-apps",
    subjects: ["math"],
    name: "Equation Forge",
    price: "$5",
    icon: "images/app-equation-forge.png",
    short: "Students solve equations on a glowing balance scale, so every step shows why it works.",
    description: "Students solve equations by keeping an alchemist's scale balanced. Every move happens to both sides at once, and the written algebra updates next to the scale, so students see why each step works instead of memorizing it. Five Forge Ranks run from one-step equations (Grade 6) to variables on both sides (Grade 8). There's also a Teach Mode for leading the class on the projector.",
    features: [
      ["See the balance", "x-crystals and ore stones sit on a real balance scale. Whatever students do to one side happens to the other."],
      ["Five Forge Ranks", "One-step, two-step, negatives, decimals and fractions, then variables on both sides. Score 80% to unlock the next rank."],
      ["Help without the answer", "A gentle note when a move doesn't help, a hint, then the next step only if they need it. No timer."],
      ["Check it", "Students put their answer back into the original equation and watch it balance."],
      ["Teach Mode", "Project a rank's problems or type your own equation. Ask the class, then reveal each step."],
      ["Works offline", "One file. No accounts, no internet, and no student names saved."]
    ],
    demoUrl: "demos/equation-forge/",
    screens: [
      ["images/ef-1.jpg", "Grandmaster: variables on both sides of the scale."],
      ["images/ef-2.jpg", "Every move is shown in algebra, then checked by putting x back in."],
      ["images/ef-3.jpg", "Five Forge Ranks from Grade 6 to Grade 8."]
    ],
    includes: ["Equation Forge app file (one offline file)", "Quick Start guide", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grades 6\u20138: 6.EE.B.7, 7.EE.B.4a, 8.EE.C.7.",
    buyUrl: "https://payhip.com/b/wFvO5"
  },
  {
    id: "sentence-probe",
    section: "in-class-apps",
    subjects: ["english"],
    name: "Sentence Probe",
    price: "$5",
    icon: "images/app-sentence-probe.png",
    short: "A one-sentence writing probe: students find and fix their own errors, and you get CWS and error data.",
    description: "Students write one sentence and see only how many errors it has. They get one chance to find and fix them, then see exactly what was still wrong, color-coded by type. You get a report with both tries, every error, and written-expression scores (TWW, WSC, CWS, CIWS), scored automatically and offline.",
    features: [
      ["Self-editing practice", "Students see the error count, not the answers, so they have to find each mistake themselves."],
      ["Clear results", "Fixed, still there and new errors, color-coded for capitalization, spelling, grammar and punctuation."],
      ["Progress-monitoring scores", "Total words written, words spelled correctly, correct and incorrect word sequences, CIWS and percent CWS for both tries."],
      ["The student's own writing", "Pasting and Chromebook autocorrect are blocked, and read-aloud is built in."],
      ["A report for you", "Students type your email once and send their report with Gmail, Outlook or their email app."]
    ],
    demoUrl: "demos/sentence-probe/",
    screens: [
      ["images/sentence-3.jpg", "Results: what was fixed, what's still there, and why."],
      ["images/sentence-2.jpg", "Fix round: students see how many errors, then find them."],
      ["images/sentence-1.jpg", "Write one sentence. Autocorrect and pasting are blocked."]
    ],
    includes: ["Sentence Probe app file (one offline file)", "Quick Start guide", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grades 3\u201312 writing and special education.",
    buyUrl: ""
  },
  {
    id: "claim-court",
    section: "in-class-apps",
    subjects: ["english", "reading"],
    name: "Claim Court",
    price: "$5",
    icon: "images/app-claim-court.png",
    short: "Students are the judge: find the claim, weigh the evidence and answer the other side.",
    description: "Students read short arguments on school topics and work each case like a judge. They find the claim, sort the evidence, pick the reasoning that connects them, then catch weak reasoning or answer the counterclaim. Nine original cases in three dockets build from Grade 6 to Grade 8, with a hint after every miss and an explanation for every answer.",
    features: [
      ["Find the claim", "Students click the sentence that says what the author wants them to believe."],
      ["Weigh the evidence", "Sort each fact as supporting or not, then as strong, weak or not relevant."],
      ["Check the reasoning", "Pick the sentence that explains how the evidence proves the claim."],
      ["Catch weak reasoning", "Spot bandwagon, slippery slope and \u201ceveryone knows\u201d arguments."],
      ["Answer the other side", "Find the counterclaim and choose the strongest answer to it."],
      ["Works offline", "One file. Hints, read-aloud, light and dark mode. No accounts and no student names saved."]
    ],
    demoUrl: "demos/claim-court/",
    screens: [
      ["images/cc-1.jpg", "Weigh the evidence: strong, weak or not relevant."],
      ["images/cc-2.jpg", "Grade 8: find the counterclaim, then answer it."],
      ["images/cc-3.jpg", "Three dockets from Grade 6 to Grade 8."]
    ],
    includes: ["Claim Court app file (one offline file)", "Quick Start guide", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grades 6\u20138: RI.6.8, RI.7.8, RI.8.8, W.8.1.",
    buyUrl: "https://payhip.com/b/9S6Do"
  },
  {
    id: "microscope-simulator",
    section: "in-class-apps",
    subjects: ["science"],
    name: "Microscope Simulator",
    price: "$4",
    icon: "images/app-microscope.png",
    short: "A compound microscope on the computer: slides, light, diaphragm, three powers and real focusing.",
    description: "Students learn to use a compound microscope the right way before they touch the real one. They clip a slide, set the light and diaphragm, start at low power and focus with the coarse and fine knobs, and the sim catches the classic mistakes, like cracking a slide or using coarse focus at 40\u00d7. A guided onion lab, 14 slides, 14 challenges and a parts quiz, then a report to your email.",
    features: [
      ["Real microscope skills", "Light, diaphragm, 4\u00d7/10\u00d7/40\u00d7 objectives, 10\u00d7/15\u00d7 eyepieces, coarse and fine focus, stage clips and moving the slide."],
      ["Guided onion lab", "Make a wet mount, stain it with iodine, find a nucleus and work out total magnification."],
      ["14 slides + 14 challenges", "Cheek cells, elodea, blood, pond water, cork, the letter e and more, with challenges from field of view to a mystery slide."],
      ["Parts quiz", "Find all 11 parts of the microscope, then match each part to its job."],
      ["A report for you", "Steps done, answers, quiz results and the mistakes the sim caught, sent through Gmail or Outlook."]
    ],
    demoUrl: "demos/microscope-simulator/",
    screens: [
      ["images/micro-1.jpg", "Cheek cells in focus at 400\u00d7."],
      ["images/micro-2.jpg", "Onion skin at 100\u00d7, with hint chips for light, focus and contrast."],
      ["images/micro-3.jpg", "Parts quiz: find each part on the microscope."]
    ],
    includes: ["Microscope Lab app file (one offline file)", "Quick Start guide", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grades 6\u20138 life science.",
    buyUrl: "https://payhip.com/b/yWu2q"
  },
  {
    id: "science-bundle",
    section: "in-class-apps",
    subjects: ["science"],
    name: "Science Bundle",
    price: "$14",
    short: "Cell Lab, Microscope Simulator and Lab Builder + 3 Solo Labs together, $18 if bought separately.",
    description: "Three offline science apps for middle school. Students learn the microscope, explore and build cells, and run full labs on their own with a scripted lab group. Each app sends you a report, and each works without internet.",
    features: [
      ["Microscope Simulator", "Light, focus and three powers on a compound microscope, with a guided onion lab, 14 slides and a parts quiz."],
      ["Cell Lab", "Explore, build and compare plant and animal cells, then take a quick check."],
      ["Lab Builder + 3 Solo Labs", "Three ready-made labs students run with a scripted lab group, plus a builder to make your own."],
      ["A report for you", "Every app sends you the student's work through Gmail or Outlook."],
      ["Save $4", "All three for $14 instead of $18 bought separately."]
    ],
    screens: [
      ["images/micro-1.jpg", "Microscope Simulator: cheek cells in focus at 400×."],
      ["images/cell-2.jpg", "Cell Lab: drag each part onto the plant or animal cell."],
      ["images/labs-1.jpg", "A solo lab: teammates talk the student through it."]
    ],
    includes: ["Cell Lab app file", "Microscope Lab app file", "Lab Builder + 3 ready-made student labs", "Quick Start guide for each app", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grades 6–8 science.",
    buyUrl: "https://payhip.com/b/PkUWc"
  },
  {
    id: "character-books-starter",
    section: "free-tools",
    subjects: ["reading", "english"],
    name: "Character Books Starter",
    price: "Free",
    short: "The first book of all four Character Books series, free to keep. Works offline.",
    description: "Four choose-your-own-adventure books, one from each Character Books series: sci-fi, sports, fantasy and animal adventure. Students make a character, and every choice changes who that character becomes. It's free to keep and use at your school. Enter your email at checkout to get the download, and we'll send you news when new apps come out.",
    features: [
      ["Four first books", "The Ember Frontier, Under the Lights, Oathbound and Wildborn."],
      ["Reading support", "Read-aloud, bigger or smaller text, and a high-contrast mode on every page."],
      ["No accounts", "No sign-ins and no student data sent anywhere."],
      ["Works offline", "One file that opens in Chrome or Edge, with no internet needed."]
    ],
    screens: [
      ["images/cb-1.jpg", "The library: pick a series to read."],
      ["images/cb-2.jpg", "Make a character: name, pronouns and more, step by step."],
      ["images/cb-3.jpg", "A story page, with read-aloud and text size at the top."]
    ],
    includes: ["Character Books Starter app file with 4 books", "Read Me First note", "License (free for use at your school)"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grade 6 and up.",
    buyUrl: "https://payhip.com/b/KpU3Q"
  },
  {
    id: "character-books",
    section: "in-class-apps",
    subjects: ["reading", "english"],
    name: "Character Books",
    price: "$30",
    short: "Choose-your-own-adventure books where each student's character carries into the next book. First book of every series is free to try.",
    description: "Ten choose-your-own-adventure books in four series: sci-fi, sports, fantasy and animal adventure. Students make a character, and every choice changes who that character becomes. At the end of a book they get a character code, so the same character can start the next book with everything they gained and lost. Try the first book of every series free in the demo; the full version adds the other six books.",
    features: [
      ["Four series", "The Ember Frontier (sci-fi), Under the Lights (football), Oathbound (fantasy) and Wildborn (animal adventure)."],
      ["Characters that carry on", "Each finished book gives a character code. Students enter it to carry their character into the next book."],
      ["Reading support", "Read-aloud, bigger or smaller text, and a high-contrast mode on every page."],
      ["No accounts", "No sign-ins and no student data sent anywhere. Characters are saved in the student's own browser."],
      ["Free to try", "The demo plays the first book of every series. The full version adds the other six books."]
    ],
    demoUrl: "demos/character-books/",
    screens: [
      ["images/cb-1.jpg", "The library: pick a series to read."],
      ["images/cb-2.jpg", "Make a character: name, pronouns and more, step by step."],
      ["images/cb-3.jpg", "A story page, with read-aloud and text size at the top."]
    ],
    includes: ["Character Books app file with all 10 books", "Quick Start guide", "Read Me First note", "Free updates to version 1"],
    requirements: "Chromebook, Windows or Mac with Chrome or Edge. Works offline. Grade 6 and up.",
    buyUrl: "https://payhip.com/b/0j34s"
  },
  {
    id: "essay-reviewer",
    section: "pro-apps",
    name: "Essay Reviewer",
    price: "$12",
    icon: "images/app-essay-reviewer.png",
    short: "Checks essays against your rubric, highlights what it finds, and gives a letter grade.",
    description: "A first-pass essay checker that looks for exactly what you tell it to: length, paragraphs, a thesis, transitions, citations, informal words, run-ons and spelling. Drop in a student's Word or PDF essay and get highlights, a letter grade from your rubric, and a printable report. No AI, and essays never leave your computer.",
    features: [
      ["Your rubric, your rules", "Build checks with points and pass/miss comments, or scan your existing rubric (.docx or .pdf) to start the list for you."],
      ["Reads Word and PDF", "Drop in the student's file or paste the text. Everything is read on your computer."],
      ["Highlights + grade", "Each check is color-coded in the essay, and the points become a letter grade using your cutoffs."],
      ["Your notes too", "Select any text to add your own comment, then print or save a PDF report for the student."],
      ["Private by design", "Rule-based, no AI and no internet. Essays are never uploaded or saved; only your rubric is remembered."]
    ],
    demoUrl: "demos/essay-reviewer/",
    screens: [
      ["images/essay-1.jpg", "Highlights: every check is color-coded in the student's essay."],
      ["images/essay-2.jpg", "Results: points per check, comments, and the letter grade."],
      ["images/essay-3.jpg", "Rubric setup: grade cutoffs and your IF-THEN checks."]
    ],
    includes: ["Essay Reviewer app file (one offline file)", "Quick Start guide", "Free updates to version 1"],
    requirements: "Windows, Mac or Chromebook with Chrome or Edge. Works offline. Reads .docx and .pdf essays.",
    buyUrl: "https://payhip.com/b/Mmu6z"
  },
  {
    id: "behavior-system-pro",
    section: "pro-apps",
    alsoIn: ["sel-behavior"],
    name: "Behavior System Pro",
    price: "$29",
    icon: "images/app-behavior.png",
    short: "Daily behavior points by period, goals, reports and a reward store for your whole team.",
    description: "Score each student's goals for every class period, see who is on track this week, and print reports in seconds. Students earn points they can spend in a built-in reward store. Built for special education teams, with separate logins for admins, case managers and staff.",
    features: [
      ["Points by period", "Score each student's goals for every class period, including Home Base. You set the periods and the goals."],
      ["Reports that write themselves", "Class summary, weekly report, and a tabulate view that totals a student's week. Print them or export to CSV and Excel."],
      ["Built for teams", "Separate logins for admins, case managers and staff. Each person sees only the students assigned to them."],
      ["Reward store", "Students earn a point for every goal they meet. Set up prizes with prices and stock, check out purchases, and track balances and refunds."],
      ["Quick setup", "Import your roster from a spreadsheet, and roll everything over at the end of the year."],
      ["Works offline", "One file that opens in Chrome or Edge. No accounts, no subscription, no internet needed."]
    ],
    demoUrl: "demos/behavior-system-pro/",   // free demo: made-up class, nothing saved
    install: true,                    // shows the "one computer / district server" options
    screens: [                        // screenshots shown in the app window (sample students only)
      ["images/bsp-1-entry.jpg", "Data entry: tap 0, ½ or 1 for each goal, every period."],
      ["images/bsp-2-weekly.jpg", "Weekly report: the whole class's week at a glance."],
      ["images/bsp-3-tabulate.jpg", "Tabulate: one student's week, period by period."]
    ],
    includes: ["Behavior System Pro app file", "Quick Start guide", "IT Setup Guide", "Sample roster", "Free updates to version 1"],
    requirements: "Windows, Mac or Chromebook with Chrome or Edge. Runs on one computer or from a shared network drive.",
    buyUrl: "https://payhip.com/b/g6jOH"
  }
];
