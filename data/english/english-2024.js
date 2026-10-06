{
const essays = [
  {
    id: "english1-2024-a",
    subject: "english1",
    year: 2024,
    part: "A",
    genre: "letter",
    prompt: `51. Directions:\nRead the following email from an international student and write a reply.\n\nDear Li Ming,\nI've got a class assignment to make an oral report on an ancient Chinese scientist, but I'm not sure how to prepare for it. Can you give me some advice? Thank you for your help.\nYours,\nPaul\n\nWrite your answer in about 100 words on the ANSWER SHEET.\nDo not use your own name in the letter. Use “Li Ming” instead. (10 points)`,
    promptImage: null,
    promptImageAlt: "",
    analysis: [
      "邮件须直接回应如何选择人物和准备口头报告，不能只介绍科学家生平。",
      "建议应具体可执行，包括可靠资料、内容结构和口头练习。",
      "使用朋友间自然但得体的语气，并保留称呼、祝福和署名。"
    ],
    outline: [
      "开头回应来信并点明推荐对象。",
      "主体给出资料搜集、贡献说明和演讲组织建议。",
      "结尾提醒练习并送上鼓励。"
    ],
    modelEssay: {
      text: `Dear Paul,\n\nIt's great to hear about your assignment on an ancient Chinese scientist! I'd recommend starting with some well-known figures like Zhang Heng, who invented the first seismoscope, or Shen Kuo, known for his work in geology and astronomy. You can find valuable information in academic journals or reliable online sources focusing on ancient Chinese science. It's also helpful to include how their inventions or theories contributed to modern science. For your oral report, practicing your speech to ensure clarity and confidence will be crucial.\n\nGood luck, and I'm sure you'll do wonderfully!\n\nBest regards,\nLi Ming`,
      sourceKind: "institution",
      provider: "北京高考在线整理件（发布方未署名）",
      sourceId: "english1-2024-model-gaokzx"
    },
    keyExpressions: [
      { en: "I'd recommend starting with", zh: "我建议从……入手" },
      { en: "reliable online sources", zh: "可靠的网络资料" },
      { en: "contributed to modern science", zh: "对现代科学作出贡献" },
      { en: "ensure clarity and confidence", zh: "确保表达清晰而自信" },
      { en: "I'm sure you'll do wonderfully", zh: "我相信你会完成得很出色" }
    ],
    commentary: "范文覆盖了选人、查资料、解释贡献和口头练习四个任务点，信息密度高且语气自然。考场上还可把两位候选人缩为一位，以便更集中地展开。",
    commonPitfalls: ["只介绍科学家而没有给准备建议", "使用不可靠的百科式资料却不说明筛选", "遗漏邮件称呼或署名"],
    sourceIds: ["english1-2024-primary", "english1-2024-model-gaokzx"],
    verificationStatus: "verified"
  },
  {
    id: "english1-2024-b",
    subject: "english1",
    year: 2024,
    part: "B",
    genre: "chart-essay",
    prompt: `52. Directions:\nWrite an essay based on the picture below. In your essay, you should\n1) describe the picture and the chart briefly,\n2) interpret the implied meaning, and\n3) give your comments.\nWrite your answer in 160-200 words on the ANSWER SHEET. (20 points)`,
    promptImage: "assets/prompts/english/2024/part-b.png",
    promptImageAlt: "左侧图画中市民在新建公园的健身区散步和锻炼，一名青年称赞家门口新修的公园；右侧柱状图显示某市公园数量从2020年的406座增至2021年的532座、2022年的670座。",
    analysis: [
      "描述时必须同时覆盖图画场景和柱状图的三年数据趋势。",
      "寓意可落在公共文化体育设施改善、健康生活方式和民生福祉。",
      "评论段应提出让公园可达、好用并长期维护的具体主张。"
    ],
    outline: [
      "第一段概述公园健身场景和公园数量连续增长。",
      "第二段解释公共空间建设怎样促进健康与社区交往。",
      "第三段提出规划、维护和公众参与建议。"
    ],
    modelEssay: {
      text: `The picture shows residents exercising in a newly built neighborhood park, while a young man remarks that the park near his home is excellent. Beside it, the bar chart records a rapid rise in the number of parks in a city: from 406 in 2020 to 532 in 2021 and 670 in 2022.\n\nTogether, the two images highlight the growing importance of accessible public space. More parks do more than improve a city's appearance. They give people convenient places to walk, exercise and meet their neighbors, thereby encouraging healthier routines and stronger community ties. The steady increase also reflects continued investment in public services and a people-centered approach to urban development.\n\nHowever, quantity alone is not enough. New parks should be distributed fairly, especially in densely populated neighborhoods, and their paths, lighting and exercise equipment must be maintained carefully. Residents, for their part, should use these facilities responsibly and help keep them clean. With sound planning and shared care, every additional park can translate into genuine improvements in health and everyday life.`,
      sourceKind: "original",
      provider: "本项目原创（依据原题独立撰写）",
      sourceId: "english1-2024-primary"
    },
    keyExpressions: [
      { en: "records a rapid rise in", zh: "记录了……的快速增长" },
      { en: "accessible public space", zh: "便利可达的公共空间" },
      { en: "stronger community ties", zh: "更紧密的社区联系" },
      { en: "a people-centered approach", zh: "以人民为中心的理念" },
      { en: "quantity alone is not enough", zh: "仅有数量并不足够" }
    ],
    commentary: "这篇原创范文严格按描述、解释、评论三步展开，准确写出406、532、670三组数据，并把立意落实到健康、社区交往和公共服务，避免空泛赞美。",
    commonPitfalls: ["只写图画而漏掉柱状图", "把公园数量写成面积或游客数", "结尾只喊口号而没有维护与公平布局建议"],
    sourceIds: ["english1-2024-primary"],
    verificationStatus: "verified"
  }
];

if (essays.length !== 2) throw new Error("english1-2024 must contain Part A and Part B");
window.EXAM_DB.essays.push(...essays);
}
