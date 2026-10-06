{
  const essays = [
    {
      id: "english1-2019-a",
      subject: "english1",
      year: 2019,
      part: "A",
      genre: "letter",
      prompt: `Suppose you are working for the “Aiding Rural Primary School” project of your university. Write an email to answer the inquiry from an international student volunteer, specifying details of the project. Do not sign your own name at the end of the email. Use “Li Ming” instead. (10 points)`,
      promptImage: null,
      promptImageAlt: "",
      analysis: [
        "文体是回复咨询的邮件，写给有意参加项目的国际学生志愿者，语气礼貌、信息具体。",
        "须回应对方询问并介绍项目细节；可交代项目目的、教学内容、时间安排及志愿者准备事项。",
        "控制在约100词，结尾用 Li Ming 署名，不写真实姓名。"
      ],
      outline: [
        "称呼并感谢对方关注项目，说明写信目的。",
        "介绍项目目标、服务对象、教学工作和参加前的准备。",
        "表达欢迎并邀请对方继续联系，以 Li Ming 落款。"
      ],
      modelEssay: {
        text: `Dear Tom,\n\nThank you for your interest in our university’s Aiding Rural Primary School project. I am writing to explain what the volunteer work involves.\n\nThe project aims to give children in rural communities more opportunities to learn English. Volunteers will teach basic lessons and help pupils practise simple conversations. It runs for two weeks in June. Before arriving, please prepare one short lesson for beginners and bring comfortable clothes and daily necessities. Learning a few basic Chinese expressions would also help you communicate with local residents.\n\nWe would be delighted to have you join us. Please let me know if you need further information.\n\nYours sincerely,\nLi Ming`,
        sourceKind: "original",
        provider: "本项目原创",
        sourceId: "english1-2019-primary"
      },
      keyExpressions: [
        { en: "Thank you for your interest in…", zh: "感谢你对……感兴趣" },
        { en: "answer your questions", zh: "回答你的问题" },
        { en: "aim to give someone more opportunities to…", zh: "旨在为某人提供更多……机会" },
        { en: "lessons for beginners", zh: "面向初学者的课程" },
        { en: "daily necessities", zh: "日常必需品" },
        { en: "Please let me know if…", zh: "如有……请告诉我" }
      ],
      commentary: "回复信逐项交代服务目标、教学任务、时间和准备事项，使“说明项目细节”落到可执行信息上。语气正式友善，称呼、正文和落款完整。",
      commonPitfalls: [
        "只表达欢迎，却没有真正回答志愿者关于项目的询问。",
        "项目时间、教学对象或志愿者任务交代含糊。",
        "忘记使用指定署名 Li Ming，或把语气写得过于随意。"
      ],
      sourceIds: ["english1-2019-primary", "english1-2019-neworiental"],
      verificationStatus: "verified"
    },
    {
      id: "english1-2019-b",
      subject: "english1",
      year: 2019,
      part: "B",
      genre: "picture-essay",
      prompt: `Write an essay of 160–200 words based on the following pictures. In your essay, you should: 1) describe the pictures briefly; 2) interpret the meaning; and 3) give your comments. Write neatly on the ANSWER SHEET. (20 points)`,
      promptImage: "assets/prompts/english/2019/part-b.jpg",
      promptImageAlt: "两名登山者在途中休息：一人坐在山路上说自己累了、不想爬；另一人背着行囊递水并鼓励他休息后继续。图下写着“途中”。",
      analysis: [
        "画面呈现登山途中两人的不同选择：一人疲惫想停下，另一人递水并鼓励继续。",
        "核心立意可落在坚持与同伴支持上；描述应准确呈现对比，不把休息误写成放弃。",
        "议论部分解释坚持如何帮助人克服困难、逐步实现目标，并给出个人或社会层面的建议。"
      ],
      outline: [
        "第一段客观描述山路、两名登山者及其言行差异。",
        "第二段点明坚持的意义，并说明持续努力与支持如何帮助人走过困难。",
        "第三段提出培养毅力、互相鼓励的做法，并以面向未来的句子收束。"
      ],
      modelEssay: {
        text: `The cartoon shows two hikers taking a break on a mountain path. One, tired and discouraged, says that he no longer wants to climb. The other offers him water and suggests resting before moving on. The word “journey” beneath them reminds us that progress is made along the way, not only at the destination.\n\nThe scene highlights perseverance, as well as the value of encouragement. Important goals rarely come without setbacks: a student may struggle with a difficult subject, and a young professional may face repeated rejection. In either case, steady effort turns a distant ambition into a series of manageable steps. Yet perseverance does not mean ignoring fatigue. A brief rest, or a timely word from a companion, can restore confidence and make continued effort possible.\n\nWe should therefore learn to stay committed to worthwhile goals while allowing ourselves to pause and adjust our plans. Families, schools and workplaces can also create an environment in which people support rather than ridicule one another. With persistence and mutual encouragement, more people can continue their journey and reach meaningful destinations.`,
        sourceKind: "original",
        provider: "本项目原创",
        sourceId: "english1-2019-primary"
      },
      keyExpressions: [
        { en: "on a mountain path", zh: "在山路上" },
        { en: "moving on", zh: "继续前进" },
        { en: "along the way", zh: "在途中" },
        { en: "face repeated rejection", zh: "屡遭拒绝" },
        { en: "a series of manageable steps", zh: "一系列可处理的小步骤" },
        { en: "stay committed to worthwhile goals", zh: "坚持有价值的目标" }
      ],
      commentary: "范文先准确写出画面差异，再把立意落到坚持与互助，并补充“坚持不等于不休息”的细节，使评论更贴近图画而非空喊口号。",
      commonPitfalls: [
        "只写坚持的重要性，没有简要描述图中两人的动作和对话。",
        "把适当休息写成消极放弃，忽略同伴鼓励这一画面信息。",
        "堆砌名言或模板句，却没有解释观点如何对应现实。"
      ],
      sourceIds: ["english1-2019-primary", "english1-2019-neworiental"],
      verificationStatus: "verified"
    }
  ];
  if (essays.length !== 2) throw new Error("english1-2019 must contain Part A and Part B");
  window.EXAM_DB.essays.push(...essays);
}
