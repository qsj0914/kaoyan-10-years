{
const essays = [
  {
    id: "english1-2017-a",
    subject: "english1",
    year: 2017,
    part: "A",
    genre: "letter",
    prompt: "You are to write an email to James Cook, a newly-arrived Australian professor, recommending some tourist attractions in your city. Please give reasons for your recommendation. You should write neatly on the ANSWER SHEET. Do not sign your own name at the end of the email. Use ‘Li Ming’ instead. Do not write the address. (10 points)",
    promptImage: null,
    promptImageAlt: "",
    analysis: [
      "以邮件形式写给刚到本地的澳大利亚教授 James Cook，交际对象明确，语气应礼貌自然。",
      "核心任务是推荐本市的若干旅游景点，并说明各自吸引人的理由。",
      "题目要求不写地址，结尾必须使用 Li Ming，避免添加真实姓名。"
    ],
    outline: [
      "称呼并欢迎 James Cook，简述写信目的。",
      "推荐有代表性的历史景点、园林或街区，分别说明看点。",
      "表达希望建议有帮助，并提出陪同游览的意愿；按题目要求落款。"
    ],
    modelEssay: {
      text: `Dear Professor Cook,\n\nWelcome to our city! Since you have just arrived, I would like to recommend several places that offer a glimpse of its history and local life. The Palace Museum is an excellent first stop: its former imperial halls and collections reveal how the city developed over centuries. For a quieter visit, the Summer Palace combines classical gardens with a lakeside landscape, making it ideal for a leisurely afternoon. If you would like to sample local food and browse traditional shops, Qianmen Street is also worth exploring.\n\nI hope these suggestions help you plan an enjoyable weekend. I would be delighted to show you around if your schedule permits.\n\nYours sincerely,\nLi Ming`,
      sourceKind: "institution",
      provider: "新东方网任瑞罡（本站校订版）",
      sourceId: "english1-2017-writing-xdf"
    },
    keyExpressions: [
      { en: "offer a glimpse of", zh: "展现……的一面" },
      { en: "a former imperial residence", zh: "昔日的皇家居所" },
      { en: "classical gardens", zh: "古典园林" },
      { en: "be worth exploring", zh: "值得探访" },
      { en: "if your schedule permits", zh: "如果您的时间允许" }
    ],
    commentary: "本文采用礼貌直接的邮件语气，选择历史建筑、园林和本地街区三类景点，并为每项推荐提供具体理由。范文以北京为例，正文为本站根据机构解析独立校订的参考版本。",
    commonPitfalls: [
      "只罗列景点名称，没有解释推荐理由。",
      "忘记推荐对象是刚到当地的教授，称呼和语气过于随意。",
      "写出地址或用其他姓名署名，违反题目格式要求。"
    ],
    sourceIds: ["english1-2017-primary", "english1-2017-writing-xdf"],
    verificationStatus: "verified"
  },
  {
    id: "english1-2017-b",
    subject: "english1",
    year: 2017,
    part: "B",
    genre: "picture-essay",
    prompt: "Write an essay of 160–200 words based on the following pictures. In your essay, you should: 1) describe the pictures briefly; 2) interpret the meaning; and 3) give your comments. You should write neatly on the ANSWER SHEET. (20 points)",
    promptImage: "assets/prompts/english/2017/part-b.png",
    promptImageAlt: "两幅漫画对照阅读态度：左图一名男子靠坐在书架前，说自己有很多书；右图一名男子坐在书桌前，计划今年读完二十本书。画下方写着“有书”与“读书”。",
    analysis: [
      "左图强调拥有书籍却不阅读，右图强调设定并落实阅读目标。",
      "两幅画构成“占有”与“实践”的对比，寓意落在真正阅读及持续行动上。",
      "评论可联系阅读积累、知识更新和习惯养成，避免把主题泛化成任何目标都适用的空话。"
    ],
    outline: [
      "并列描述两幅画和“有书”与“读书”的标题。",
      "解释阅读的价值，并指出只有持续阅读才能把意愿变成收获。",
      "提出可执行的阅读习惯建议，重申行动的重要性。"
    ],
    modelEssay: {
      text: `The two pictures present contrasting attitudes toward reading. In the first, a man relaxes beside a bookcase and boasts that he owns many books, although none appears open. In the second, another reader sits at a desk with a modest pile of books and sets himself a clear goal: to finish twenty books this year. The caption, “Owning books” versus “Reading books,” highlights the difference between possession and practice.\n\nThe pictures remind us that knowledge grows through sustained reading, not through collecting books or making plans alone. Regular reading exposes us to new ideas, strengthens our ability to think, and helps us understand experiences beyond our own. Yet these benefits come only when good intentions become consistent action. A realistic target, a daily reading period, and brief notes on what we learn can turn an ambitious resolution into a lasting habit.\n\nBooks are valuable companions, but their value is realized when we open them and engage with their contents. We should therefore choose a manageable reading goal and follow it patiently.`,
      sourceKind: "institution",
      provider: "新东方网任瑞罡（本站校订版）",
      sourceId: "english1-2017-writing-xdf"
    },
    keyExpressions: [
      { en: "contrasting attitudes toward", zh: "对……截然不同的态度" },
      { en: "sustained reading", zh: "持续阅读" },
      { en: "expose us to new ideas", zh: "让我们接触新思想" },
      { en: "turn an intention into action", zh: "把意愿转化为行动" },
      { en: "a manageable reading goal", zh: "切实可行的阅读目标" }
    ],
    commentary: "范文按“描述对照—阐释阅读价值—给出可执行建议”展开，既回应漫画，也把结论落到持续阅读这一具体行动。",
    commonPitfalls: [
      "只描述画面，不解释两幅漫画的对照关系。",
      "把主题写成泛泛的“坚持目标”，忽略图片明确呈现的阅读。",
      "将 160–200 词大作文写成口号堆叠，缺少具体论证或可行建议。"
    ],
    sourceIds: ["english1-2017-primary", "english1-2017-writing-xdf"],
    verificationStatus: "verified"
  }
];

if (essays.length !== 2) throw new Error("english1-2017 must contain Part A and Part B");
window.EXAM_DB.essays.push(...essays);
}
