export const asset = (name) => `/assets/${name}`;

export const navGroups = [
  {
    label: "What We Do",
    path: "/asyv-model",
    links: [
      { label: "Our Model", path: "/asyv-model" },
      { label: "The Village's Impact", path: "/impact" },
      { label: "Our National Impact", path: "/national-impact" },
      { label: "Our Alumni", path: "/our-alumni" },
    ],
  },
  {
    label: "About Us",
    path: "/about",
    links: [
      { label: "About ASYV", path: "/about" },
      { label: "The Team", path: "/the-team" },
      { label: "Partners & Supporters", path: "/partners-supporters" },
      { label: "Reports & Financials", path: "/financials" },
      { label: "FAQs", path: "/faqs" },
      { label: "Contact Us", path: "/contact-us" },
    ],
  },
  {
    label: "Visit the Village",
    path: "/visit-the-village",
    links: [{ label: "Plan a Visit", path: "/visit-the-village" }],
  },
  {
    label: "Get Involved",
    path: "/ways-to-give",
    links: [
      { label: "Ways to Give", path: "/ways-to-give" },
      { label: "Start a Fundraiser", path: "/start-a-fundraiser" },
      { label: "Legacy Giving", path: "/legacy" },
      { label: "Become an Ambassador", path: "/become-an-ambassador" },
      { label: "Meet Our Fellows", path: "/become-a-fellow" },
      { label: "Careers & Fellowships", path: "/careers" },
      { label: "Attend an Event", path: "/events" },
    ],
  },
  {
    label: "The Latest",
    path: "/stories",
    links: [
      { label: "Stories", path: "/stories" },
      { label: "Events", path: "/events" },
      { label: "FAQs", path: "/faqs" },
    ],
  },
];

export const impactStats = [
  { value: 2100, suffix: "+", label: "Students", detail: "served since 1998" },
  { value: 100, suffix: "%", label: "National exam", detail: "pass rate" },
  { value: 92, suffix: "%", label: "Reduction", detail: "in depression symptoms" },
  { value: 65, suffix: "%", label: "Enrollment", detail: "in tertiary education" },
];

export const modelPillars = [
  {
    title: "Family",
    text: "A safe, loving home and a village that belongs.",
    icon: "home",
  },
  {
    title: "Education",
    text: "Quality learning and mentorship for bright, resilient minds.",
    icon: "book",
  },
  {
    title: "Healing",
    text: "Trauma-informed care that restores hope and well-being.",
    icon: "heart",
  },
  {
    title: "Leadership",
    text: "Values, skills, and opportunities to lead and give back.",
    icon: "compass",
  },
];

export const stories = [
  {
    slug: "celebrating-the-asyv-class-of-2026-and-our-alumni",
    title: "Celebrating the ASYV Class of 2026 and Our Alumni",
    kicker: "Stories from the Village",
    date: "June 23, 2026",
    excerpt:
      "Graduation week brings families, alumni, mentors, and students together around the futures they are building.",
    image: asset("graduates.jpg"),
    body: [
      "At ASYV, graduation is more than a ceremony. It is a village-wide promise kept over many years of learning, care, and belonging.",
      "The Class of 2026 steps into the next chapter with alumni beside them, mentors cheering them on, and a community ready to keep showing up.",
    ],
  },
  {
    slug: "the-young-entrepreneurs-of-asyv",
    title: "The Young Entrepreneurs of ASYV",
    kicker: "Student enterprise",
    date: "April 30, 2026",
    excerpt:
      "Students pitch practical ideas, prototype products, and practice the confidence to solve real problems.",
    image: asset("entrepreneurs.jpg"),
    body: [
      "The ASYV Business Plan Competition gives students a stage for imagination, rigor, and courage.",
      "Teams research community needs, test ideas, and present solutions to mentors who help them sharpen both purpose and execution.",
    ],
  },
  {
    slug: "the-young-women-of-asyv-leading-change",
    title: "The Young Women of ASYV Leading Change",
    kicker: "Leadership",
    date: "March 31, 2026",
    excerpt:
      "Young women at ASYV are shaping student life, mentoring peers, and leading with confidence.",
    image: asset("girls-leading.jpg"),
    body: [
      "Leadership at the Village starts in daily life: in family houses, classrooms, clubs, and the moments when students choose to help one another.",
      "Young women at ASYV continue to turn opportunity into service, learning into confidence, and confidence into change.",
    ],
  },
  {
    slug: "students-thriving-through-creativity-and-innovation",
    title: "Students Thriving Through Creativity and Innovation",
    kicker: "Innovation",
    date: "March 5, 2026",
    excerpt:
      "Creativity and science help students imagine practical futures for themselves and their communities.",
    image: asset("innovation.jpg"),
    body: [
      "In the classroom and beyond it, students learn to test, revise, and keep going.",
      "Their projects show what happens when education is paired with care, mentorship, and room to create.",
    ],
  },
];

export const events = [
  {
    title: "Village Family Open House",
    date: "August 14, 2026",
    location: "Rwamagana District",
    text: "A guided day for partners and friends to experience learning, family, and student life at ASYV.",
  },
  {
    title: "Alumni Leadership Forum",
    date: "September 19, 2026",
    location: "Kigali",
    text: "Alumni gather for mentorship, career conversations, and practical support for the next generation.",
  },
  {
    title: "Global Giving Circle",
    date: "October 8, 2026",
    location: "Online",
    text: "Supporters around the world meet students, staff, and alumni through a live digital program.",
  },
];

const page = ({
  path,
  title,
  kicker,
  intro,
  image,
  quote,
  sections,
  cta = "Support the Village",
}) => ({
  path,
  title,
  kicker,
  intro,
  image,
  quote,
  sections,
  cta,
});

export const pages = [
  page({
    path: "/about",
    kicker: "About ASYV",
    title: "A village built around belonging.",
    intro:
      "Agahozo-Shalom Youth Village is a safe, nurturing community where vulnerable Rwandan youth receive the education, care, and relationships they need to thrive.",
    image: asset("family.jpg"),
    quote: "Healing begins when a young person knows they are safe, known, and expected to flourish.",
    sections: [
      {
        title: "Founded for restoration",
        text: "ASYV was created to help young people rebuild after profound loss. The Village model combines family, education, enrichment, mental health care, and long-term alumni support.",
      },
      {
        title: "Designed as a real community",
        text: "Students live in family houses, learn on campus, receive mentorship, and build habits of leadership through service to one another.",
      },
      {
        title: "Connected beyond graduation",
        text: "Support continues after students leave the Village through alumni programming, career pathways, and a network that keeps showing up.",
      },
    ],
  }),
  page({
    path: "/asyv-model",
    kicker: "Our Model",
    title: "Whole-child support. Lifelong impact.",
    intro:
      "The ASYV model is intentionally holistic: home, school, healing, enrichment, and leadership work together so students can build bright futures.",
    image: asset("campus-life.jpg"),
    quote: "A student is never only a student. They are a whole person, held by a whole village.",
    sections: [
      {
        title: "A loving home",
        text: "Family houses create consistency, trust, shared responsibility, and the daily rhythms of belonging.",
      },
      {
        title: "Learning with purpose",
        text: "Academic preparation, English language growth, STEM exposure, and mentorship prepare students for tertiary education and work.",
      },
      {
        title: "Care that restores hope",
        text: "Mental health and wellness are woven into the model so students can process trauma and grow in confidence.",
      },
    ],
  }),
  page({
    path: "/impact",
    kicker: "Village Impact",
    title: "One village can change the arc of a life.",
    intro:
      "ASYV measures success through student well-being, academic achievement, alumni outcomes, and the strength of the community students build together.",
    image: asset("graduates.jpg"),
    quote: "The numbers matter because each one points back to a young person with a future.",
    sections: [
      {
        title: "Academic outcomes",
        text: "Students receive the preparation and support that helps them succeed on national exams and pursue tertiary education.",
      },
      {
        title: "Well-being outcomes",
        text: "Trauma-informed support helps reduce symptoms of depression and strengthens resilience over time.",
      },
      {
        title: "Alumni outcomes",
        text: "Graduates continue to lead in universities, workplaces, families, and communities across Rwanda and beyond.",
      },
    ],
  }),
  page({
    path: "/national-impact",
    kicker: "National Impact",
    title: "A model that reaches beyond the Village.",
    intro:
      "ASYV's work contributes to Rwanda's broader future by preparing young leaders, educators, and changemakers.",
    image: asset("village-view.jpg"),
    quote: "When students thrive, their families and communities feel the ripple.",
    sections: [
      {
        title: "Education access",
        text: "The Village creates opportunity for young people whose potential deserves a stable and excellent learning environment.",
      },
      {
        title: "Leadership pipeline",
        text: "Students practice leadership through service, entrepreneurship, mentoring, clubs, and family house responsibilities.",
      },
      {
        title: "Shared learning",
        text: "The Village model offers lessons in holistic care, youth development, and trauma-informed education.",
      },
    ],
  }),
  page({
    path: "/our-alumni",
    kicker: "Our Alumni",
    title: "Graduates who keep building.",
    intro:
      "ASYV alumni carry the Village forward through study, work, family, and service. Their journeys show what sustained care makes possible.",
    image: asset("alumni-tech.webp"),
    quote: "The Village does not end at graduation. It becomes a network.",
    sections: [
      {
        title: "Tertiary pathways",
        text: "Alumni pursue universities, technical programs, and professional training with continued guidance from the Village.",
      },
      {
        title: "Career readiness",
        text: "Mentorship, internships, and practical support help graduates move from school into meaningful work.",
      },
      {
        title: "Giving back",
        text: "Alumni mentor younger students, build community, and model possibility for the classes behind them.",
      },
    ],
  }),
  page({
    path: "/the-team",
    kicker: "The Team",
    title: "The people who hold the Village.",
    intro:
      "Educators, family mothers, wellness staff, alumni mentors, operations teams, and global supporters make the ASYV model work every day.",
    image: asset("students-walking.jpg"),
    quote: "A village is made by the people who keep choosing one another.",
    sections: [
      {
        title: "Village staff",
        text: "On-campus teams support students through daily care, learning, wellness, food, safety, enrichment, and belonging.",
      },
      {
        title: "Global team",
        text: "The US and Rwanda teams connect donors, partners, communications, finance, and long-term strategy.",
      },
      {
        title: "Board and advisors",
        text: "Leadership partners steward ASYV's mission, sustainability, and future growth.",
      },
    ],
  }),
  page({
    path: "/partners-supporters",
    kicker: "Partners & Supporters",
    title: "A global family around one Village.",
    intro:
      "ASYV is sustained by donors, institutional partners, foundations, volunteers, and ambassadors who believe in the power of holistic care.",
    image: asset("changemakers.png"),
    quote: "Support is not a transaction. It is a relationship with the future.",
    sections: [
      {
        title: "Institutional partners",
        text: "Foundations and organizations help strengthen core programs, campus life, wellness, and alumni pathways.",
      },
      {
        title: "Individual donors",
        text: "Monthly and annual giving helps provide stable support for students across the year.",
      },
      {
        title: "Ambassadors",
        text: "Ambassadors introduce ASYV to new communities and help tell the Village story with care.",
      },
    ],
  }),
  page({
    path: "/financials",
    kicker: "Reports & Financials",
    title: "Transparency that honors trust.",
    intro:
      "ASYV shares reports, financial information, and accountability materials so supporters can see how gifts serve students.",
    image: asset("village-view.jpg"),
    quote: "Clear stewardship is part of caring for the Village.",
    sections: [
      {
        title: "Annual reports",
        text: "Explore yearly updates on student life, program progress, alumni outcomes, and the people behind the work.",
      },
      {
        title: "Financials",
        text: "Review audited materials, filings, and accountability resources related to ASYV's operations.",
      },
      {
        title: "Policies",
        text: "Access governance and safeguarding information that supports a healthy, responsible organization.",
      },
    ],
  }),
  page({
    path: "/visit-the-village",
    kicker: "Visit the Village",
    title: "Come and see the Village.",
    intro:
      "Experience ASYV's beauty, student life, and daily rhythms in Rwanda through a thoughtful visit planned with the team.",
    image: asset("village-view.jpg"),
    quote: "The Village is best understood by walking through it slowly.",
    sections: [
      {
        title: "Plan a visit",
        text: "Tell us when you hope to come, who will join, and what part of the Village you would like to understand more deeply.",
      },
      {
        title: "What to expect",
        text: "Visits may include campus tours, program conversations, student activities, and time with staff when available.",
      },
      {
        title: "Travel with care",
        text: "The team will help align your visit with student privacy, safety, and the natural flow of Village life.",
      },
    ],
    cta: "Plan a Visit",
  }),
  page({
    path: "/ways-to-give",
    kicker: "Ways to Give",
    title: "Give a gift of possibility.",
    intro:
      "Your support helps provide home, education, wellness, enrichment, and long-term care for students and alumni.",
    image: asset("hero-students.jpg"),
    quote: "A gift to ASYV helps one young person heal, learn, lead, and give back.",
    sections: [
      {
        title: "Make a gift",
        text: "Give once or monthly to sustain the Village's daily care and long-term student outcomes.",
      },
      {
        title: "Sponsor student life",
        text: "Support family houses, education, wellness, enrichment, meals, campus operations, and alumni programming.",
      },
      {
        title: "Share ASYV",
        text: "Invite friends, colleagues, and communities to learn about the Village and join the family.",
      },
    ],
  }),
  page({
    path: "/start-a-fundraiser",
    kicker: "Start a Fundraiser",
    title: "Invite your circle into the Village.",
    intro:
      "Create a fundraiser around a birthday, milestone, event, or community campaign and help more people discover ASYV.",
    image: asset("family.jpg"),
    quote: "The most powerful invitation often comes from someone who already cares.",
    sections: [
      {
        title: "Choose your moment",
        text: "Birthdays, school events, workplace campaigns, and community gatherings can all become a source of support.",
      },
      {
        title: "Tell the story",
        text: "Use clear, personal language to explain why the Village matters to you.",
      },
      {
        title: "Celebrate the impact",
        text: "Keep your community updated as gifts add up and the Village family grows.",
      },
    ],
  }),
  page({
    path: "/legacy",
    kicker: "Legacy Giving",
    title: "Shape futures beyond your lifetime.",
    intro:
      "Legacy gifts help secure the Village for future generations of students who will need care, education, and belonging.",
    image: asset("village-view.jpg"),
    quote: "A legacy gift is a promise carried forward.",
    sections: [
      {
        title: "Planned gifts",
        text: "Include ASYV in your estate plans, beneficiary designations, or long-term philanthropic commitments.",
      },
      {
        title: "A lasting village",
        text: "Long-term support helps protect the stability students rely on every day.",
      },
      {
        title: "Conversation first",
        text: "The team can talk through options with you and your advisors with care and discretion.",
      },
    ],
  }),
  page({
    path: "/become-an-ambassador",
    kicker: "Ambassadors",
    title: "Carry the Village story into new rooms.",
    intro:
      "ASYV ambassadors help widen the circle of people who understand and support the Village.",
    image: asset("graduates.jpg"),
    quote: "Ambassadors make the Village visible to people who are ready to care.",
    sections: [
      {
        title: "Host gatherings",
        text: "Bring friends, colleagues, or community groups together to learn about ASYV.",
      },
      {
        title: "Share stories",
        text: "Use your platforms and relationships to introduce the Village with dignity and care.",
      },
      {
        title: "Build momentum",
        text: "Help grow campaigns, events, and giving circles that support students year-round.",
      },
    ],
  }),
  page({
    path: "/become-a-fellow",
    kicker: "Meet Our Fellows",
    title: "Serve, learn, and grow with the Village.",
    intro:
      "Fellows support student life while gaining hands-on experience in education, youth development, operations, and nonprofit leadership.",
    image: asset("campus-life.jpg"),
    quote: "A fellowship at ASYV is both contribution and formation.",
    sections: [
      {
        title: "Student-centered service",
        text: "Fellows work alongside staff in ways that support learning, enrichment, mentorship, and community life.",
      },
      {
        title: "Cross-cultural learning",
        text: "The experience asks for humility, presence, and a willingness to learn from the Village.",
      },
      {
        title: "Professional growth",
        text: "Fellows develop practical skills while contributing to meaningful work.",
      },
    ],
    cta: "Explore Fellowships",
  }),
  page({
    path: "/careers",
    kicker: "Careers & Fellowships",
    title: "Work that asks for heart and rigor.",
    intro:
      "Join ASYV in Rwanda or through global support roles to help sustain a community where students can heal, learn, and lead.",
    image: asset("students-walking.jpg"),
    quote: "Great care is built by people who bring skill, steadiness, and love to the work.",
    sections: [
      {
        title: "Open roles",
        text: "Opportunities may include education, wellness, operations, development, communications, and program support.",
      },
      {
        title: "Fellowship paths",
        text: "Fellowships create structured opportunities for service, learning, and contribution.",
      },
      {
        title: "A mission culture",
        text: "The work is practical, relational, and deeply connected to student well-being.",
      },
    ],
    cta: "Contact the Team",
  }),
  page({
    path: "/contact-us",
    kicker: "Contact",
    title: "Let us know how to reach you.",
    intro:
      "Questions about giving, visiting, partnerships, careers, or the Village can start here.",
    image: asset("family.jpg"),
    quote: "The best next step is often a simple conversation.",
    sections: [
      {
        title: "United States",
        text: "228 Park Ave S, PMB 836114, New York, NY 10003.",
      },
      {
        title: "Kigali",
        text: "Agahozo-Shalom Youth Village, P.O. Box 7299, Kigali, Rwanda.",
      },
      {
        title: "The Village",
        text: "Rwamagana District, Rubona Sector, Rwanda.",
      },
    ],
    cta: "Send a Message",
  }),
];

export const faqs = [
  {
    question: "Who does ASYV serve?",
    answer:
      "ASYV serves Rwandan youth from vulnerable backgrounds through a residential, holistic model of care and education.",
  },
  {
    question: "Can I visit the Village?",
    answer:
      "Yes. Visits are planned with the ASYV team so guests can experience the Village while respecting student privacy, safety, and daily life.",
  },
  {
    question: "How can I support ASYV?",
    answer:
      "You can give once, give monthly, start a fundraiser, become an ambassador, attend an event, or explore legacy giving.",
  },
  {
    question: "Where is ASYV located?",
    answer:
      "The Village is in Rwamagana District, Rubona Sector, Rwanda, with global support through the US and Rwanda teams.",
  },
];
