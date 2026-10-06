{
const essays = [
  {
    id: "english1-2018-a",
    subject: "english1",
    year: 2018,
    part: "A",
    genre: "letter",
    prompt: "Write an email to all international experts on campus inviting them to attend the graduation ceremony. In your email you should include time, place and other relevant information about the ceremony. You should write about 100 words neatly on the ANSWER SHEET. Do not use your own name at the end of the email. Use ‘Li Ming’ instead. (10 points)",
    promptImage: null,
    promptImageAlt: "",
    analysis: [
      "写信对象是校内所有国际专家，目的是邀请他们参加毕业典礼。",
      "必须交代典礼的时间、地点以及其他相关信息；可补充典礼流程、入场安排和回复方式。",
      "采用正式邮件格式，并严格以 Li Ming 署名。"
    ],
    outline: [
      "以学生会名义提出邀请。",
      "说明日期时间、地点、主要仪式安排和入场信息。",
      "礼貌表达期待，并请对方确认能否出席；署名 Li Ming。"
    ],
    modelEssay: {
      text: `Dear International Experts,\n\nOn behalf of the Students’ Union, I invite you to our graduation ceremony, which will be held at 9:00 a.m. next Saturday in the university auditorium. Graduates, faculty and guests will gather to celebrate the students’ completion of their studies.\n\nThe president will open the ceremony with an address, followed by the conferring of degrees and a short student speech. Your presence would mean a great deal to the graduates. Please arrive fifteen minutes early; reserved seating will be available near the front. Kindly let us know by Wednesday whether you can attend.\n\nWe hope to welcome you.\n\nYours sincerely,\nLi Ming`,
      sourceKind: "institution",
      provider: "新东方网陈冰（本站校订版）",
      sourceId: "english1-2018-writing-xdf"
    },
    keyExpressions: [
      { en: "on behalf of", zh: "代表" },
      { en: "the conferring of degrees", zh: "授予学位" },
      { en: "your presence would mean a great deal", zh: "您的出席对我们意义重大" },
      { en: "reserved seating", zh: "预留座位" },
      { en: "let us know whether you can attend", zh: "告知我们您是否能出席" }
    ],
    commentary: "邮件包含邀请目的、时间地点、典礼安排、入场提示和回复请求。所给机构页面范文超出约 100 词的考试要求，本站据其写作要点另行校订为紧凑版本。",
    commonPitfalls: [
      "漏写时间、地点或其他典礼信息。",
      "称呼只写给一位教师，没有覆盖题目要求的所有国际专家。",
      "使用自己的姓名署名，或正文过长而偏离约 100 词要求。"
    ],
    sourceIds: ["english1-2018-primary", "english1-2018-writing-xdf"],
    verificationStatus: "verified"
  },
  {
    id: "english1-2018-b",
    subject: "english1",
    year: 2018,
    part: "B",
    genre: "picture-essay",
    prompt: "Write an essay of 160–200 words based on the picture below. In your essay, you should: 1) describe the picture briefly; 2) interpret the meaning; and 3) give your comments. You should write neatly on the ANSWER SHEET. (20 points)",
    promptImage: "assets/prompts/english/2018/part-b.png",
    promptImageAlt: "漫画中，一名学生坐在电脑前选择课程。电脑屏幕列出课程信息，画面两侧的对话框分别提到课程知识新、具有创新性，以及得分高、容易通过、作业少等特点。",
    analysis: [
      "图中学生面对两类选修课：一类较容易、评分较高且作业少；另一类知识新、有创新性但更具挑战。",
      "画面呈现的是选择课程时短期便利与学习成长之间的权衡。",
      "评论应支持有目的的学习挑战，同时承认选课仍需结合个人兴趣、基础和规划。"
    ],
    outline: [
      "描述学生面对两类课程时的犹豫，并点明两者差异。",
      "解释挑战性课程如何扩展知识、训练解决问题能力。",
      "说明选课应考虑自身基础和学习目标，强调不能只以容易得分为标准。"
    ],
    modelEssay: {
      text: `The picture shows a student sitting at a computer and hesitating between two courses. One promises high marks, easy exams and little homework; the other offers new knowledge and encourages innovation, but appears more demanding. His uncertainty reflects a choice many students face: whether to pursue short-term convenience or long-term growth.\n\nA challenging course can broaden one’s knowledge and train skills that routine assignments rarely develop. By confronting unfamiliar problems, students learn to question assumptions, connect ideas and find creative solutions. These abilities matter beyond the classroom, where work and social needs continue to change. This does not mean that every difficult course is automatically worthwhile. Students should consider their interests and foundations, seek advice when necessary, and choose challenges that serve a clear learning purpose.\n\nGrades are important, but they should not be the sole measure of education. When students select courses for what they can learn rather than only for easy credits, they invest in their future competence. With thoughtful planning and steady effort, a demanding course can become an opportunity for both intellectual independence and personal growth.`,
      sourceKind: "institution",
      provider: "新东方网尹晓莉（本站校订版）",
      sourceId: "english1-2018-writing-xdf"
    },
    keyExpressions: [
      { en: "short-term convenience", zh: "短期便利" },
      { en: "broaden one’s knowledge", zh: "拓宽知识面" },
      { en: "question assumptions", zh: "质疑既有假设" },
      { en: "serve a clear learning purpose", zh: "服务于明确的学习目标" },
      { en: "the sole measure of education", zh: "衡量教育的唯一标准" }
    ],
    commentary: "范文先准确描述课程选择的对比，再说明挑战性学习带来的能力提升，最后补充选择应符合个人基础和目标，避免把“越难越好”当成简单结论。",
    commonPitfalls: [
      "把漫画主题误写成一般的大学生就业或创新口号。",
      "只主张选难课，却不解释挑战如何转化为学习收益。",
      "忽视个人兴趣和基础，写成无条件推崇难度。"
    ],
    sourceIds: ["english1-2018-primary", "english1-2018-writing-xdf"],
    verificationStatus: "verified"
  }
];

if (essays.length !== 2) throw new Error("english1-2018 must contain Part A and Part B");
window.EXAM_DB.essays.push(...essays);
}
