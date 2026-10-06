{
  const essays = [
    {
      id: "english1-2020-a",
      subject: "english1",
      year: 2020,
      part: "A",
      genre: "notice",
      prompt: `The Student Union of your university has assigned you to inform international students of an upcoming singing contest. Write a notice in about 100 words. Write your answer on the ANSWER SHEET. Do not use your own name in the notice. (10 points)`,
      promptImage: null,
      promptImageAlt: "",
      analysis: [
        "文体为告示，面向本校国际学生，信息应直接、清楚，使用醒目的标题和组织方落款。",
        "题目只给出歌唱比赛这一活动，需补充合理的时间地点、报名方式、参加对象和曲目要求。",
        "约100词即可；正文避免私人邮件式称呼和个人署名。"
      ],
      outline: [
        "用 Notice 作标题，开头告知比赛活动及面向对象。",
        "列出时间、地点、报名截止日期和参赛要求。",
        "鼓励参与，并以 Student Union 落款。"
      ],
      modelEssay: {
        text: `Notice\n\nTo celebrate the 70th anniversary of the founding of the People’s Republic of China, the Student Union will hold a singing contest for international students.\n\nThe contest will take place in the university auditorium at 7 p.m. on October 1. Students who wish to participate should register at the Student Union office by September 25 and submit the title of their song. Both Chinese and foreign songs are welcome. Each performance should last no longer than five minutes, and contestants may perform alone or in a group.\n\nAll international students are warmly invited to join us. We look forward to an evening of music and cultural exchange.\n\nStudent Union`,
        sourceKind: "original",
        provider: "本项目原创",
        sourceId: "english1-2020-primary"
      },
      keyExpressions: [
        { en: "hold a singing contest", zh: "举办歌唱比赛" },
        { en: "take place in…", zh: "在……举行" },
        { en: "register at the… office", zh: "在……办公室报名" },
        { en: "submit the title of…", zh: "提交……的标题/曲目名称" },
        { en: "no longer than five minutes", zh: "不超过五分钟" },
        { en: "cultural exchange", zh: "文化交流" }
      ],
      commentary: "告示覆盖活动目的、对象、时间地点、报名截止和表演要求，并以组织方落款。活动细节是为完成开放式题目而作的合理设定，正式使用时可按实际情况替换。",
      commonPitfalls: [
        "遗漏报名时间、地点或方式，导致通知无法指导行动。",
        "使用邮件称呼和个人署名，忽略告示格式。",
        "活动细节互相矛盾，或把约100词写成冗长宣传稿。"
      ],
      sourceIds: ["english1-2020-primary", "english1-2020-gaodun"],
      verificationStatus: "verified"
    },
    {
      id: "english1-2020-b",
      subject: "english1",
      year: 2020,
      part: "B",
      genre: "picture-essay",
      prompt: `Write an essay of 160–200 words based on the picture below. In your essay, you should: 1) describe the picture briefly; 2) interpret the implied meaning; and 3) give your comments. Write neatly on the ANSWER SHEET. (20 points)`,
      promptImage: "assets/prompts/english/2020/part-b.jpg",
      promptImageAlt: "两幅对照图：左图女孩在书桌前写作业，气泡写着“尽早完成才放心”；右图男孩坐靠在椅子上，桌上放着书和笔，气泡写着“不到最后不动手”。图下标题为“习惯”。",
      analysis: [
        "两幅画对比及时完成作业与拖到最后才行动，图下注明主题为“习惯”。",
        "立意可聚焦时间管理和日常习惯对效率的影响，避免把漫画泛化为单纯的勤奋赞美。",
        "评论可说明计划、及时行动如何减少压力，并给出可落实的习惯养成方法。"
      ],
      outline: [
        "第一段简述左右两图及两种相反的做事习惯。",
        "第二段解释良好时间管理对学习、工作和压力控制的益处。",
        "第三段提出设定小目标、分段完成任务等建议，并总结其长期价值。"
      ],
      modelEssay: {
        text: `The two pictures present sharply different study habits. In the first, a girl is working at her desk and believes that finishing early will put her mind at ease. In the second, a boy relaxes beside an open book, saying that he will not start until the last minute. Together, the scenes invite us to reflect on how we use our time.\n\nGood habits are built through repeated choices, and time management is one of the most useful. A student who begins an assignment early can divide it into smaller tasks, ask for help when needed and revise the final work. By contrast, delaying everything creates unnecessary pressure and leaves little room to correct mistakes. The same principle applies at work: planning ahead makes it easier to meet deadlines and cooperate with others.\n\nTo develop a better routine, we can set realistic goals, make a simple schedule and begin with one manageable task instead of waiting for motivation. Families and schools should encourage consistency while allowing room for rest. When timely action becomes a habit, we gain greater control over our studies and our future.`,
        sourceKind: "original",
        provider: "本项目原创",
        sourceId: "english1-2020-primary"
      },
      keyExpressions: [
        { en: "put one’s mind at ease", zh: "使某人安心" },
        { en: "reflect on how we use our time", zh: "反思如何利用时间" },
        { en: "divide it into smaller tasks", zh: "把它拆分为较小任务" },
        { en: "leave little room to correct mistakes", zh: "几乎没有纠正错误的余地" },
        { en: "meet deadlines", zh: "按期完成" },
        { en: "a manageable task", zh: "一项可处理的任务" }
      ],
      commentary: "范文紧扣图画中的“尽早完成”和“临近截止才开始”，具体说明时间管理如何改善任务质量、减轻压力，并给出可实行的习惯养成步骤。",
      commonPitfalls: [
        "没有识别两幅图的对比关系，只逐一罗列人物。",
        "将主题写成抽象的“好习惯”，却不联系时间管理和拖延。",
        "建议停留在口号层面，没有给出计划或分解任务等做法。"
      ],
      sourceIds: ["english1-2020-primary", "english1-2020-wendu"],
      verificationStatus: "verified"
    }
  ];
  if (essays.length !== 2) throw new Error("english1-2020 must contain Part A and Part B");
  window.EXAM_DB.essays.push(...essays);
}
