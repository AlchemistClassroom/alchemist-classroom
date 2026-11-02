/* =========================================================================
   THE ALCHEMIST CLASSROOM — CATALOG
   This is the only file you edit to add an app or a section.

   ADD A NEW APP:      copy one app block in APPS, change the details,
                       and set "section" to the id of the section it goes in.
   ADD A NEW SECTION:  copy a section block in SECTIONS and give it a new id.
                       It appears as a new glowing node on the index screen.
   "Coming soon" sections: set soon: true — they show as dim placeholder nodes.
   Art: put the image file in /images with the file name used below.
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
    blurb: "Small apps you open in class and use right away with your students. Download once, use all year, no internet needed.",
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
  { id: "soon-1", name: "Coming soon", short: "A new section is on its way.", emblem: "images/section-soon.png", soon: true },
  { id: "soon-2", name: "Coming soon", short: "A new section is on its way.", emblem: "images/section-soon.png", soon: true }
];

var APPS = [
  {
    id: "microscope-simulator",
    section: "in-class-apps",
    name: "Microscope Simulator",
    price: "$4",                      // PLACEHOLDER price — Riley to confirm
    icon: "images/app-microscope.png",
    short: "A virtual microscope for exploring slides in class.",   // PLACEHOLDER
    description: "Full description coming soon.",                   // PLACEHOLDER
    features: [],
    includes: ["The app file (opens in Chrome or Edge)", "A one-page how-to guide"],
    requirements: "Windows, Mac or Chromebook with Chrome or Edge. Works offline.",
    buyUrl: ""                        // paste the checkout link when the store is live
  },
  {
    id: "behavior-system-pro",
    section: "pro-apps",
    name: "Behavior System Pro",
    price: "$29",
    icon: "images/app-behavior.png",
    short: "Daily behavior points by period, with goals and reports for your whole team.",
    description: "Score each student's goals for every class period, see who is on track this week, and print reports in seconds. Built for special education teams, with separate logins for admins, case managers and staff.",
    features: [
      ["Points by period", "Score each student's goals for every class period, including Home Base. You set the periods and the goals."],
      ["Reports that write themselves", "Class summary, weekly report, and a tabulate view that totals a student's week. Print them or export to CSV and Excel."],
      ["Built for teams", "Separate logins for admins, case managers and staff. Each person sees only the students assigned to them."],
      ["Quick setup", "Import your roster from a spreadsheet, and roll everything over at the end of the year."],
      ["Works offline", "One file that opens in Chrome or Edge. No accounts, no subscription, no internet needed."]
    ],
    install: true,                    // shows the "one computer / district server" options
    includes: ["Behavior System Pro app file", "Quick Start guide", "IT Setup Guide", "Sample roster", "Free updates to version 1"],
    requirements: "Windows, Mac or Chromebook with Chrome or Edge. Runs on one computer or from a shared network drive.",
    buyUrl: ""
  }
];
