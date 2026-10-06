// Prompts checked against the archived paper and cross-checked with the CDEDU copy.
(function () {
  const essays = [
    {
      id: "english1-2022-a",
      subject: "english1",
      year: 2022,
      part: "A",
      genre: "letter",
      prompt: "51. Directions: Write an email to a professor at a British university, inviting him/her to organize a team for the international innovation contest to be held at your university. You should write about 100 words on the ANSWER SHEET. Do not use your own name in the email; use “Li Ming” instead. (10 points)",
      promptImage: null,
      promptImageAlt: "",
      analysis: [
        "体裁为正式邀请邮件，收件人是英国某大学教授，交际目的必须明确写出邀请其组织队伍参赛。",
        "题干只给出比赛地点在本校，没有指定比赛日期、场地或评审职责，不应编造为确定事实。",
        "约100词，使用礼貌称呼、简洁介绍赛事、说明邀请价值并期待回复；署名按题意使用 Li Ming。"
      ],
      outline: [
        "称呼后开门见山：说明写信身份及邀请教授组队参加本校国际创新大赛。",
        "补充赛事面向对象、团队展示创新项目等一般性信息，表达教授的参与将带来交流价值。",
        "礼貌期待回复，以 Yours sincerely 和 Li Ming 结束。"
      ],
      modelEssay: {
        text: "Dear Professor Smith,\n\nI am writing on behalf of our university to invite you to organize a team for the upcoming International Innovation Contest on our campus. Students will present creative projects and exchange ideas. Given your experience in guiding young researchers, your team would make a valuable contribution.\n\nWe would be delighted if you could encourage interested students at your university to form a team and join us. Please let us know whether you may be available, and we will send further information about the schedule and registration.\n\nWe sincerely hope you will accept our invitation. I look forward to hearing from you.\n\nYours sincerely,\nLi Ming",
        sourceKind: "institution",
        provider: "新东方在线（在其考后范文基础上校订）",
        sourceId: "english1-2022-model-koolearn"
      },
      keyExpressions: [
        { en: "on behalf of our university", zh: "代表我校" },
        { en: "organize a team for", zh: "组织一支队伍参加" },
        { en: "exchange ideas", zh: "交流想法" },
        { en: "make a valuable contribution", zh: "作出有价值的贡献" },
        { en: "encourage interested students", zh: "鼓励有兴趣的学生" },
        { en: "I look forward to hearing from you", zh: "期待您的回复" }
      ],
      commentary: "邀请信的得分关键是清楚完成邀请并给出足够的赛事信息。参考机构版本中出现了题干没有提供的日期和评审职责，本版删去这些臆定细节，改为邀请教授组织学生团队并期待确认。",
      commonPitfalls: [
        "把题目改写成邀请教授本人到场评审，而没有请其组织参赛队伍。",
        "擅自添加具体日期、地点或比赛规则，让邀请内容与题干事实脱节。",
        "忽略正式邮件格式或忘记按要求以 Li Ming 署名。"
      ],
      sourceIds: ["english1-2022-primary", "english1-2022-crosscheck-cde", "english1-2022-model-koolearn"],
      verificationStatus: "verified"
    },
    {
      id: "english1-2022-b",
      subject: "english1",
      year: 2022,
      part: "B",
      genre: "picture-essay",
      prompt: "52. Directions: Write an essay of 160–200 words based on the picture below. In your essay, you should: 1) describe the picture briefly; 2) interpret the implied meaning; and 3) give your comments. Write your answer on the ANSWER SHEET. (20 points)",
      promptImage: "assets/prompts/english/2022/part-b.png",
      promptImageAlt: "布告栏上贴着校园讲座海报，两位女学生对是否参加讲座持不同看法；左侧学生认为讲座与专业无关，右侧学生认为去听会有收获。",
      analysis: [
        "图中两名学生面对校园讲座海报表达相反态度，核心不是评价某一场讲座，而是对专业边界之外学习的不同看法。",
        "寓意可落在开放学习与功利化、狭窄学习观的对照，并说明跨领域知识如何拓宽视野或激发创造力。",
        "按题目三项要求组织内容：简述图画、解释寓意、给出评论；控制在160—200词。"
      ],
      outline: [
        "第一段客观描述海报、两名学生及其相反对话。",
        "第二段点明功利狭隘的学习观与开放求知态度的差异，解释跨领域学习的意义。",
        "第三段表达个人立场，建议学生主动接触专业之外的讲座和知识。"
      ],
      modelEssay: {
        text: "Clearly, the picture above shows students' different attitudes toward campus lectures. As is vividly depicted, the girl on the left complains that they will not benefit much from a lecture unrelated to their major, while the girl on the right believes that attending it will surely be worthwhile.\n\nApparently, the picture reminds us that college students should not focus exclusively on their own fields. On the one hand, people with broad knowledge and diverse skills are better prepared for a changing job market. Compared with those who master only one subject, they can draw on ideas from different disciplines and have greater potential to solve unfamiliar problems. On the other hand, if students ignore everything beyond their majors, they may miss opportunities to discover new interests and develop creative thinking.\n\nIn my view, learning should remain open and curious. A lecture outside one's specialty may seem irrelevant today, yet its ideas could prove valuable in future study or work. Therefore, students should make good use of campus lectures and embrace the chance to broaden their horizons.",
        sourceKind: "institution",
        provider: "新东方在线（考后参考范文，文字作校订）",
        sourceId: "english1-2022-model-koolearn"
      },
      keyExpressions: [
        { en: "different attitudes toward", zh: "对……的不同态度" },
        { en: "focus exclusively on", zh: "只专注于" },
        { en: "be better prepared for", zh: "为……做好更充分准备" },
        { en: "draw on ideas from different disciplines", zh: "借鉴不同学科的观点" },
        { en: "develop creative thinking", zh: "培养创造性思维" },
        { en: "broaden their horizons", zh: "拓宽视野" }
      ],
      commentary: "文章先准确呈现两种态度，再把图意概括为狭隘功利的学习方式与开放求知之间的对照，随后从就业适应力、解决新问题和发现兴趣展开评论，回应题目三项要求。",
      commonPitfalls: [
        "只重复对话，没有解释人物态度所象征的学习观。",
        "把寓意写成空泛的“知识很重要”，缺少跨专业学习的具体意义。",
        "评论段提出与图意无关的泛泛建议，或超出规定词数。"
      ],
      sourceIds: ["english1-2022-primary", "english1-2022-crosscheck-cde", "english1-2022-model-koolearn"],
      verificationStatus: "verified"
    }
  ];
  window.EXAM_DB.essays.push(...essays);
})();
