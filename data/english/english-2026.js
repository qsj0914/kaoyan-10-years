{
const essays = [
  {
    id: "english1-2026-a",
    subject: "english1",
    year: 2026,
    part: "A",
    genre: "letter",
    prompt: `51. Directions:\nRead the following email from your friend Paul and write him a reply.\n\nHi Li Ming,\nI was really moved by the Chinese families' handwritten letters you posted yesterday. They are priceless! Could you please tell me a bit more about them? And are they currently on public display somewhere? I'm very keen to see them in person. Thanks.\n\nYou should write about 100 words on the ANSWER SHEET.\nDo not use your own name in the email; use “Li Ming” instead. (10 points)`,
    promptImage: null,
    promptImageAlt: "",
    analysis: [
      "回复须介绍家书的来源或内容，并明确回答是否及在哪里公开展出。",
      "可补充展期、文化意义或参观体验，但不要虚构过多细节。",
      "保持朋友间热情自然的语气，格式完整。"
    ],
    outline: [
      "开头回应Paul对家书的兴趣。",
      "主体说明展览主题、家书价值和公开展示信息。",
      "结尾鼓励参观并点出家庭情感与文化意义。"
    ],
    modelEssay: {
      text: `Dear Paul,\n\nI cannot tell you how thrilled I am to hear from you! Those handwritten letters you mentioned are from a recent exhibition called “Letters from Home,” showcasing heartfelt messages from Chinese families across generations. They're indeed treasures, capturing emotions and histories. Currently, the exhibition is being held at the National Museum, and it will run for another two weeks. I am sure you will be deeply touched by them in person. It is also a great chance to learn more about Chinese culture and feel the warmth of family bonds. You can even try writing a letter yourself after the visit!\n\nHave a great time at the exhibition.\n\nYours sincerely,\nLi Ming`,
      sourceKind: "institution",
      provider: "厦门新东方（新东方网发布）",
      sourceId: "english1-2026-model-xdf"
    },
    keyExpressions: [
      { en: "handwritten letters", zh: "手写家书" },
      { en: "across generations", zh: "跨越数代人" },
      { en: "capturing emotions and histories", zh: "承载情感与历史" },
      { en: "be deeply touched by", zh: "深受……感动" },
      { en: "the warmth of family bonds", zh: "亲情的温度" }
    ],
    commentary: "新东方范文完整回答了家书是什么、展览在哪里以及参观能获得什么，语域自然、细节连贯。由于2026材料为考后整理件，展名与地点属于示范性设定，不应当作真实展讯。",
    commonPitfalls: ["只赞美家书而不回答展览地点", "把示范性展名写成可核实的真实新闻", "篇幅过长导致小作文失衡"],
    sourceIds: ["english1-2026-primary", "english1-2026-model-xdf"],
    verificationStatus: "disputed",
    verificationNote: "题目来自环球网校考后整理PDF，并与厦门新东方发布版本交叉核对；未获得考试机构公开原卷，故不标记为官方定稿。"
  },
  {
    id: "english1-2026-b",
    subject: "english1",
    year: 2026,
    part: "B",
    genre: "chart-essay",
    prompt: `52. Directions:\nWrite an essay based on the charts below. In your essay, you should\n1) describe the charts briefly,\n2) interpret the charts, and\n3) give your comments.\nWrite your answer in 160-200 words on the ANSWER SHEET. (20 points)`,
    promptImage: "assets/prompts/english/2026/part-b.png",
    promptImageAlt: "养老机器人消费者调查：39.3%完全接受、32.8%部分接受、27.9%不接受；首要关注点中安全占46.3%、价格占24.9%、便利占10.7%。",
    analysis: [
      "两图要合并描述：超过七成受访者至少部分接受养老机器人，同时安全是首要顾虑。",
      "解释可联系人口老龄化、照护资源缺口及老年使用者的脆弱性。",
      "评论应在认可应用前景的同时强调安全、透明和可靠性。"
    ],
    outline: [
      "首段准确概述接受度与关注点百分比。",
      "第二段解释需求增长与安全顾虑并存的原因。",
      "末段判断市场前景并提出开发重点。"
    ],
    modelEssay: {
      text: `The combined charts illustrate two key aspects of public attitudes toward elderly care robots: acceptance levels and top concerns. Over 70% of consumers either fully (39.3%) or partially (32.8%) embrace the technology, while 27.9% remain unaccepting. When it comes to priorities, safety tops the list (46.3%), far outstripping price (24.9%) and convenience (10.7%).\n\nThese trends stem from two intertwined realities. As societies age, the gap in caregiving resources has pushed many to view robots as a practical supplement to human support—hence the broad openness. Yet safety dominates concerns because elderly users are often more vulnerable to technical glitches; a robot's reliability directly impacts their well-being, making it non-negotiable for most consumers. The smaller share of those focused on price or convenience reflects that, in the context of elderly care, functionality and security take precedence over cost or ease of use.\n\nThis pattern reveals a market poised for growth but anchored in caution. As technology matures to address safety worries, acceptance of elderly care robots will likely rise further. For developers, prioritizing safety and transparency will be key to turning tentative interest into widespread trust—and in turn, helping these tools fulfill their potential in supporting aging populations.`,
      sourceKind: "institution",
      provider: "厦门新东方（新东方网发布）",
      sourceId: "english1-2026-model-xdf"
    },
    keyExpressions: [
      { en: "public attitudes toward", zh: "公众对……的态度" },
      { en: "far outstripping", zh: "远高于" },
      { en: "a practical supplement to", zh: "对……的现实补充" },
      { en: "take precedence over", zh: "优先于" },
      { en: "anchored in caution", zh: "以谨慎为基础" }
    ],
    commentary: "新东方范文在196词内完整呈现两图数据，并用老龄化和照护缺口解释接受度，用技术故障风险解释安全顾虑，结论兼顾发展潜力与审慎治理。",
    commonPitfalls: ["把39.3%误写成不接受", "只描述接受度而漏写安全、价格、便利", "把机器人写成人类照护的完全替代品"],
    sourceIds: ["english1-2026-primary", "english1-2026-model-xdf"],
    verificationStatus: "disputed",
    verificationNote: "题图及文字来自考后整理件，并与新东方网版本一致；因无官方公开原卷，保留来源不确定性。"
  }
];

if (essays.length !== 2) throw new Error("english1-2026 must contain Part A and Part B");
window.EXAM_DB.essays.push(...essays);
}
