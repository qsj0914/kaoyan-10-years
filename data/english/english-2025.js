{
const essays = [
  {
    id: "english1-2025-a",
    subject: "english1",
    year: 2025,
    part: "A",
    genre: "letter",
    prompt: `47. Directions:\nRead the following email from your classmate Paul and write him a reply.\n\nDear Li Ming,\nI was really excited to hear that you'd invite some craftsmen to demonstrate their innovative craft-making on campus. May I know more about what they'll show? Also, I'd like to help with your preparation work. Please let me know what I can do.\nYours,\nPaul\n\nWrite your answer in about 100 words on the ANSWER SHEET.\nDo not use your own name in the letter. Use “Li Ming” instead. (10 points)`,
    promptImage: null,
    promptImageAlt: "",
    analysis: [
      "回复必须同时说明工匠将展示什么以及Paul能承担哪些准备工作。",
      "活动内容要具体，最好兼顾传统技艺、创新方法和现场体验。",
      "语气应热情并回应同学主动帮忙的意愿。"
    ],
    outline: [
      "感谢Paul关注并简要介绍展示安排。",
      "说明展示内容及参与者可获得的体验。",
      "明确分配布置场地和宣传等准备任务。"
    ],
    modelEssay: {
      text: `Dear Paul,\n\nThank you for your enthusiastic response. The craftsmen will demonstrate pottery, wood carving and paper cutting, explaining how traditional skills can be combined with modern designs. After each demonstration, students will also be invited to try a simple step themselves, so the event should be both informative and enjoyable.\n\nSince you have kindly offered to help, could you assist us in arranging the display tables and tools before the event? It would also be wonderful if you could design a bilingual poster and share it with international students.\n\nI look forward to working with you.\n\nYours sincerely,\nLi Ming`,
      sourceKind: "institution",
      provider: "启航教育机构范文校订版",
      sourceId: "english1-2025-primary"
    },
    keyExpressions: [
      { en: "demonstrate pottery", zh: "演示陶艺制作" },
      { en: "combined with modern designs", zh: "与现代设计结合" },
      { en: "both informative and enjoyable", zh: "兼具知识性和趣味性" },
      { en: "arranging the display tables", zh: "布置展示台" },
      { en: "a bilingual poster", zh: "双语海报" }
    ],
    commentary: "校订版保留机构范文的活动介绍与协助请求两条主线，同时压缩到考场合理字数，并用具体工艺、体验环节、场地和宣传任务完整回应来信。",
    commonPitfalls: ["只介绍活动而未回应能帮什么", "工艺示例过多导致主线分散", "请求帮助时语气生硬像命令"],
    sourceIds: ["english1-2025-primary", "english1-2025-crosscheck-tianren"],
    verificationStatus: "verified"
  },
  {
    id: "english1-2025-b",
    subject: "english1",
    year: 2025,
    part: "B",
    genre: "chart-essay",
    prompt: `48. Directions:\nWrite an essay based on the chart below. In your essay, you should\n1) describe the chart briefly,\n2) interpret the implied meaning, and\n3) give your comments.\nWrite your answer in 160-200 words on the ANSWER SHEET. (20 points)`,
    promptImage: "assets/prompts/english/2025/part-b.png",
    promptImageAlt: "表格展示2014、2017、2020和2023年全国居民平均每百户年末空调、洗衣机和电冰箱拥有量；三类家电均增加，其中空调由75.2台升至145.9台，增幅最大。",
    analysis: [
      "概述三类耐用消费品共同上升，并突出空调增长最明显。",
      "解释可从收入提高、技术进步、消费升级和生活舒适度需求切入。",
      "评论既肯定生活水平改善，也应关注能效、更新与绿色消费。"
    ],
    outline: [
      "第一段用起止数据概括总体趋势和主要差异。",
      "第二段解释经济、技术和需求变化。",
      "第三段评价生活改善并提出绿色升级方向。"
    ],
    modelEssay: {
      text: `The table shows a steady increase in the ownership of three durable household appliances in China from 2014 to 2023. Air conditioners rose most sharply, from 75.2 to 145.9 units per 100 households. Washing machines increased from 83.7 to 98.2, while refrigerators went from 85.5 to 103.4.\n\nThis upward trend reflects several changes. Sustained economic growth and higher household incomes have made quality appliances affordable to more families. Meanwhile, technological progress has lowered production costs and offered consumers safer, smarter and more energy-efficient products. The exceptional growth of air conditioners also suggests a stronger demand for comfort as living standards improve.\n\nOverall, the figures point to better material conditions and an upgraded pattern of consumption. Yet future growth should not simply mean replacing appliances more frequently. Manufacturers need to improve durability and energy efficiency, while consumers should choose products according to real needs and recycle old equipment properly. In this way, improved living standards can go hand in hand with responsible and sustainable consumption.`,
      sourceKind: "institution",
      provider: "启航教育机构范文校订版",
      sourceId: "english1-2025-primary"
    },
    keyExpressions: [
      { en: "durable household appliances", zh: "家庭耐用消费品" },
      { en: "rose most sharply", zh: "增长最为显著" },
      { en: "an upgraded pattern of consumption", zh: "升级的消费结构" },
      { en: "according to real needs", zh: "根据实际需要" },
      { en: "go hand in hand with", zh: "与……并行不悖" }
    ],
    commentary: "校订稿保留机构范文的核心论证，删去重复原因并控制在160—200词。首段数据以原卷表格为准，结尾加入耐用、节能和回收，使评论更有层次。",
    commonPitfalls: ["误抄空调或冰箱数据", "逐项罗列全部年份而缺少概括", "只写消费增长而忽略绿色和理性消费"],
    sourceIds: ["english1-2025-primary", "english1-2025-crosscheck-tianren"],
    verificationStatus: "verified"
  }
];

if (essays.length !== 2) throw new Error("english1-2025 must contain Part A and Part B");
window.EXAM_DB.essays.push(...essays);
}
