{
  const essays = [
    {
      id: "english1-2021-a",
      subject: "english1",
      year: 2021,
      part: "A",
      genre: "letter",
      prompt: `A foreign friend of yours has recently graduated from college and intends to find a job in China. Write him/her an email to make some suggestions. You should write about 100 words on the ANSWER SHEET 2. Do not sign your own name at the end. Use “Li Ming” instead. You do not need to write the address. (10 points)`,
      promptImage: null,
      promptImageAlt: "",
      analysis: [
        "文体为建议信，写给刚毕业并计划来中国工作的外国朋友，兼顾祝贺、建议和鼓励。",
        "建议应具体而适合外国求职者，例如了解目标行业、准备简历、熟悉语言与职场沟通。",
        "篇幅约100词，使用邮件格式，结尾必须署名 Li Ming，不写地址。"
      ],
      outline: [
        "祝贺朋友毕业并回应其来中国求职的计划。",
        "提出两到三项可操作建议，并简要说明理由。",
        "表达祝愿和继续提供帮助的意愿，以 Li Ming 落款。"
      ],
      modelEssay: {
        text: `Dear Jack,\n\nCongratulations on your graduation! I am glad that you plan to start your career in China. Here are three suggestions.\n\nFirst, research industries and cities that match your qualifications, and use reliable recruitment websites to find openings. Second, prepare a concise résumé highlighting your education, experience and practical skills; both English and Chinese versions would be helpful. Finally, learn some workplace Chinese and become familiar with local business customs, which will make interviews and daily communication easier.\n\nWith careful preparation, I am sure you will find a suitable position. Please contact me whenever you need help.\n\nBest wishes,\nLi Ming`,
        sourceKind: "original",
        provider: "本项目原创",
        sourceId: "english1-2021-primary"
      },
      keyExpressions: [
        { en: "start your career in…", zh: "在……开启职业生涯" },
        { en: "match your qualifications", zh: "符合你的资历" },
        { en: "highlight your education and experience", zh: "突出你的教育背景和经验" },
        { en: "have both … and … versions ready", zh: "准备好……和……两个版本" },
        { en: "become familiar with local business customs", zh: "熟悉当地商业习俗" },
        { en: "an opportunity that suits you", zh: "适合你的机会" }
      ],
      commentary: "建议围绕“找工作”展开，覆盖市场调研、简历准备和沟通适应三方面，并解释每项建议的实际用途。结构符合建议信语域，信息密度适合约100词。",
      commonPitfalls: [
        "只写欢迎来中国，没有回应求职主题。",
        "建议过于笼统，缺少准备简历、了解行业等具体步骤。",
        "忘记指定署名，或加入题目未要求的地址。"
      ],
      sourceIds: ["english1-2021-primary", "english1-2021-neworiental-a"],
      verificationStatus: "verified"
    },
    {
      id: "english1-2021-b",
      subject: "english1",
      year: 2021,
      part: "B",
      genre: "picture-essay",
      prompt: `Write an essay of 160–200 words based on the pictures below. In your essay, you should: 1) describe the drawing briefly; 2) explain the intended meaning; and 3) give your comments. Write your answer on the ANSWER SHEET. (20 points)`,
      promptImage: "assets/prompts/english/2021/part-b.jpg",
      promptImageAlt: "一名穿着戏曲服饰的孩子与父亲交谈；孩子似乎在谈同学对学戏的看法，父亲举手回应。",
      analysis: [
        "图中孩子穿着传统戏曲服饰与父亲交谈，题图文字涉及同伴看法和父亲的回应。",
        "立意可聚焦在兴趣选择、坚持自我与传统文化传承之间的关系，避免将画面误读为泛泛的亲子对话。",
        "评论应说明个人兴趣如何获得支持，以及学校和社会如何让传统艺术更可亲近。"
      ],
      outline: [
        "描述孩子的装扮、父亲的回应和两人正在交谈的场景。",
        "解释坚持个人兴趣的意义，并联系传统艺术传承。",
        "建议家庭给予理解、学校提供体验机会，让传统文化持续被年轻人认识。"
      ],
      modelEssay: {
        text: `The picture shows a child dressed in traditional opera costume talking with his father. The child appears concerned about what classmates think of learning opera, while his father responds with reassurance. Their conversation points to a broader question: should young people abandon an interest simply because it is considered unfashionable?\n\nThe drawing suggests that personal choice deserves respect and that traditional arts need the participation of a new generation. A young person who is encouraged to explore a genuine interest is more likely to develop confidence and persistence. At the same time, forms such as Peking opera carry stories, music and performance skills shaped over centuries. If children encounter them only as distant relics, this cultural inheritance may gradually lose its place in everyday life.\n\nParents can support children by listening before judging their choices, while schools can offer workshops and performances that make traditional arts engaging. Cultural organizations should also create opportunities for young performers to learn and share their work. When personal enthusiasm is met with understanding and practical support, both individuals and cultural traditions can flourish.`,
        sourceKind: "original",
        provider: "本项目原创",
        sourceId: "english1-2021-primary"
      },
      keyExpressions: [
        { en: "dressed in traditional opera costume", zh: "身着传统戏曲服饰" },
        { en: "responds with reassurance", zh: "给予安慰和鼓励" },
        { en: "deserves respect", zh: "值得尊重" },
        { en: "develop confidence and persistence", zh: "培养自信与毅力" },
        { en: "a cultural inheritance", zh: "文化传承" },
        { en: "meet … with understanding and practical support", zh: "以理解和实际支持回应……" }
      ],
      commentary: "范文从孩子担忧同伴评价这一细节引出兴趣选择，再联系传统戏曲的代际传承，最后分别提出家庭、学校和文化机构可采取的支持方式。",
      commonPitfalls: [
        "只复述孩子和父亲的对话，没有解释隐含主题。",
        "把传统文化当作抽象口号，缺少与画面人物兴趣的联系。",
        "评论只要求年轻人坚持，却没有讨论周围环境怎样提供支持。"
      ],
      sourceIds: ["english1-2021-primary", "english1-2021-neworiental-b"],
      verificationStatus: "verified"
    }
  ];
  if (essays.length !== 2) throw new Error("english1-2021 must contain Part A and Part B");
  window.EXAM_DB.essays.push(...essays);
}
