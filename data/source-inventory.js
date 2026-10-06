// Raw papers stay in the user's Desktop archives so the site itself stays small.
// Each local primary URL points to its downloadable PDF; notes identify the listing and its provenance limits.
const sourceArchive = "";
const sourceFiles = [
  ["politics", 2017, "2017年考研政治真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAgoPyQigYoq6q6ugM.pdf", "c3f68c0e8ead16085bf7b2738e556a2594a97590e66a5c80b06bc1ccda37aa58", "扫描版；领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此下载件，直链 SHA-256 与本地一致；编者及答案权威性未核实。"],
  ["politics", 2018, "2018年考研政治真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAgi-yQigYo9u-w6QI.pdf", "a546f6299f100d9a8c8ddb9ea65a14b2210fda862108aba9020cf2e20540dc03", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；前段试题为扫描页，编者未核实，不可当作官方答案。"],
  ["politics", 2019, "2019年考研政治真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAg8vuQigYovN_FuAU.pdf", "7cb46c0466e82a06a657cf6a9b1ba0a7d5885ac16354587794655754eeb64da4", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；试题和参考答案可读，编者未署名。"],
  ["politics", 2020, "2020年考研政治真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAg8-uQigYogOKAwAQ.pdf", "27e105535ae54a5548ae98fbfdfdd36d9f14db7326e6876ae651c1d3f775087d", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；试题和参考答案可读，编者未署名。"],
  ["politics", 2021, "2021年考研政治真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAgpPyQigYowKuMigI.pdf", "ed6255c3386472dec7f6ba223fa9f1809780901b0b94faf9632f35d83ef9343f", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；试题和参考答案可读，编者未署名。"],
  ["politics", 2022, "2022年考研政治真题及答案解析.pdf", "华东文理教育（文件托管；编者未核实）", "institution", "https://hdwlpx.com/upload/default/20240713/bf3a13a4484da4f7a691fcd913699db8.pdf", "82d1bc141d2be8c24661652df811bbe71d8b447ddd564b55ee05f425e44934e5", "已核对归档31页PDF前20页选择题区域的1—33题、答案和解析；原件注明仅供参考。第17题答案、第19题数值、第20题选项印字与交叉来源有差异；编者未核实，非官方答案。"],
  ["politics", 2023, "2023年考研政治真题及答案解析.pdf", "考研之家（转载；编者未核实）", "post-exam-recall", "https://31202860.s21i.faiusr.com/61/ABUIABA9GAAg0OyMvQYo6OiH2QQ.pdf", "6da21a6ffcbe6dae3f6a88b63dbd4db475c4f77d13dbe4d55ce3c216e5ee95ab", "考研之家下载页 https://www.yanbbs.com/nd.jsp?id=63 链接此考后转载件；已核对1—33题题面和第14—18页答案解析。第11—14题题干缩写或省略，第17题题面与答案页串题；非官方答案。"],
  ["politics", 2024, "2024年考研政治真题及答案解析.pdf", "启航教育", "institution", "https://aged-jixun-cdn.iqihang.com/2024/0830/20240830060446466.pdf", "c526d33b4000fb02a254d77f2995904754ddb56d5e56d2a6d3bcc2fa20a87a81", "已核对归档36页PDF第1—25页的1—33题题面、选项、答案和解析；第29题题干混入第31题文字，另有排版/OCR错字；机构整理件，非官方答案。"],
  ["politics", 2025, "2025年考研政治真题及答案解析.pdf", "启航教育", "institution", "https://aged-jixun-cdn.iqihang.com/2024/1222/20241222110425481.pdf", "19625aafa129d2bcbeb749a5081ec558542854401549a6c5e36af4c6ddca5cc4", "已核对归档20页PDF第1—14页的1—33题和参考答案；第1、7、9、12、14、15、23—25题题干缩成提要，第31题解析误贴第30题内容；机构答案非官方。"],
  ["politics", 2026, "2026年考研政治真题及答案解析（考后整理版）.pdf", "环球网校", "post-exam-recall", "https://oss-hqwx-video.hqwx.com/%E3%80%90%E5%AE%8C%E6%95%B4%E3%80%912026%E5%B9%B4%E8%80%83%E7%A0%94%E6%94%BF%E6%B2%BB%E7%9C%9F%E9%A2%98%E5%8F%8A%E7%AD%94%E6%A1%88%E8%A7%A3%E6%9E%90_a9cf001610f9228b13f0439b3632e9dbe83ddc4b.pdf", "267e24c8c928b2c84c68c7ff1f6ad9bae697ebbe450b5e233f4f2eb2cd3b8d6c", "已用于考后整理版1—33题题面与答案；多题有题面或答案版本差异。第三方回忆材料，不代表官方原卷或标准答案；与掌上考研PDF可见文字高度相同，不能视为独立核验。"],
  ["english1", 2017, "2017年考研英语一真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAgivC0igYo7Z2q2AE.pdf", "d361b4b53ad36c680264c87b34135f1efb78247f14a45055cbab75706dd54758", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；含写作题与参考范文，编者未核实。"],
  ["english1", 2018, "2018年考研英语一真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAgzu_0igYojL2h6wc.pdf", "fbfffbb3a5fca3b97092327eeaf030ffc5fea09b6539f9c31ef5c0a38b557d5b", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；含写作题与参考范文，编者未署名。"],
  ["english1", 2019, "2019年考研英语一真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAg_e_0igYowYSlYg.pdf", "122d9e8f50f6d453b324399ce025006a83d6088265df1cdd60078aa4922f8c7d", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；含写作题与参考范文，编者未署名。"],
  ["english1", 2020, "2020年考研英语一真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAg7u_0igYo_aLenwQ.pdf", "b582bd033c2844a0e6e23eca317260c40b9cd9ec3431993717c78b4e32443d4a", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；含写作题与参考范文，编者未署名。"],
  ["english1", 2021, "2021年考研英语一真题及答案解析（机构整理）.pdf", "领先教育（发布/托管；编者未核实）", "institution", "https://27812730.s21i.faiusr.com/61/ABUIABA9GAAg9u_0igYooKuzqwY.pdf", "147053f1aa1226bb6d5396d93642c1d610e70a1205328c7a5897159c41e69fcf", "领先教育题库目录 https://www.lingxian.com.cn/kaoyantiku.html 链接此文件；一题多卷、答案顺序需核对，编者未署名。"],
  ["english1", 2022, "2022年考研英语一真题及答案解析（考研之家转载）.pdf", "考研之家（转载；编者未核实）", "post-exam-recall", "https://31202860.s21i.faiusr.com/61/ABUIABA9GAAg64G3vQYo2IXnwQY.pdf", "68fba3c7f020843afd28a8ac8f18066f4f1de205fb36212090ed00b2c688253e", "下载页 https://www.yanbbs.com/nd.jsp?id=68 链接此文件；扫描版含试题及参考答案。写作页分值标注不一致，录题时须另源复核；编者未核实。"],
  ["english1", 2023, "2023年考研英语一真题及答案解析（考研之家转载）.pdf", "考研之家（转载；编者未核实）", "post-exam-recall", "https://31202860.s21i.faiusr.com/61/ABUIABA9GAAg0vO2vQYokPygygI.pdf", "f919d9c950821723f00fa94f3854204b457b3fefc364ac42ec71f54a215cd489", "下载页 https://www.yanbbs.com/nd.jsp?id=67 链接此文件；含试题、答案和写作参考范文，编者未核实。"],
  ["english1", 2024, "2024年考研英语一真题及答案解析（考研之家转载）.pdf", "考研之家（转载；编者未核实）", "post-exam-recall", "https://31202860.s21i.faiusr.com/61/ABUIABA9GAAg6PK2vQYoyIrQYA.pdf", "22d17b05dde86a51d339ba00324cf6c53fce24498f5f50e4b5baa191e337f9d0", "下载页 https://www.yanbbs.com/nd.jsp?id=66 链接此文件；含试题及参考答案，未附写作范文，编者未核实。"],
  ["english1", 2025, "2025年考研英语一真题及答案解析（机构整理）.pdf", "启航教育", "institution", "https://aged-jixun-cdn.iqihang.com/2024/1222/20241222103355621.pdf", "3da4c7fa8be0216aac5cd66ccf698b091943ade27da8c55141b80deda78faa39", "含原题、解析和机构参考范文；非官方范文。"],
  ["english1", 2026, "2026年考研英语一真题及答案解析（考后整理版）.pdf", "环球网校", "post-exam-recall", "https://m.hqwx.com/kaoyan-kaoshi/ziliaolm/1297047.html", "f2836dfcc9b4e40be27a8efbcb38f40f5ad077a4ce91c594fc5695f36f8c5cb5", "第三方考后整理版；本地件出自该页 ZIP，非官方原卷。"],
];

for (const [subject, year, filename, publisher, level, url, sha256, notes] of sourceFiles) {
  const period = year <= 2021 ? "2017-2021" : "2022-2026";
  const folder = subject === "politics" ? "政治" : "英语一";
  window.EXAM_DB.sources.push({
    id: `${subject}-${year}-primary`, subject, year,
    title: `${year}年考研${folder}真题及答案解析`, publisher, level, url,
    localPath: null,
    retrievedAt: "2026-09-26", sha256, notes
  });
}

// These are leads for the later question-by-question comparison, not completed verification.
for (let year = 2017; year <= 2024; year += 1) {
  window.EXAM_DB.sources.push({
    id: `politics-${year}-crosscheck-youlu`, subject: "politics", year,
    title: `${year}年考研政治真题及答案解析（优路资料包目录）`, publisher: "优路教育",
    level: "institution", url: "https://www.youlu.com/ziliao/detail/pack-37888",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "仅登记独立来源目录；尚未下载并逐题核对其内容。"
  });
}
window.EXAM_DB.sources.push(
  {
    id: "politics-2017-crosscheck-eol", subject: "politics", year: 2017,
    title: "2017年考研政治真题及答案（完整版）", publisher: "跨考教育政治教研室（中国教育在线转载）",
    level: "institution", url: "https://kaoyan.eol.cn/shiti/zhengzhi/201612/t20161224_1478683.shtml",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "单选1—16见本页，多选17—33见 https://kaoyan.eol.cn/shiti/zhengzhi/201612/t20161224_1478683_1.shtml；网页选项顺序与归档PDF不同，须按选项内容核对；第24题网页ABCD与归档PDF的BCD有争议。"
  },
  {
    id: "politics-2018-crosscheck-eol", subject: "politics", year: 2018,
    title: "2018考研政治真题加答案及解析（完整版）", publisher: "文都教育（中国教育在线转载）",
    level: "institution", url: "https://kaoyan.eol.cn/shiti/zhengzhi/201712/t20171224_1575677.shtml",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "本页为单选1—16；多选17—33见 https://kaoyan.eol.cn/shiti/zhengzhi/201712/t20171224_1575677_1.shtml。按选项内容核对归档PDF；第5、23、24、30题存在答案或印刷内容分歧。"
  },
  {
    id: "politics-2019-crosscheck-kaoyan", subject: "politics", year: 2019,
    title: "2019考研政治真题完整答案解析（考研帮版）", publisher: "考研帮（作者署名佚名）",
    level: "institution", url: "https://m.kaoyan.com/www/zhengzhi/zhenti/5c1f54be4adec.html",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "考研帮考后整理的1—33题及解析，非官方答案；第21题归档PDF的D项印刷语义相反，第26题答案与归档PDF不一致。"
  },
  {
    id: "politics-2020-crosscheck-xdf", subject: "politics", year: 2020,
    title: "2020考研政治试卷答案及解析(沈阳新东方)", publisher: "沈阳新东方（新东方网发布）",
    level: "institution", url: "https://kaoyan.xdf.cn/201912/11011816.html",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "机构考后1—33题及逐题解析，非官方答案；第19、22、30、31题与归档PDF答案或印刷内容存在分歧。第32题选项顺序/文字与归档件不同，且误给ABCD，不作为该题核对来源。"
  },
  {
    id: "politics-2020-crosscheck-eol", subject: "politics", year: 2020,
    title: "2020考研政治真题及答案解析（多选题）", publisher: "中国教育在线转载机构整理版",
    level: "institution", url: "https://kaoyan.eol.cn/shiti/zhengzhi/201912/t20191221_1700451_2.shtml",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "第32题选项A软着陆、B太空站、C中继通信、D月球探测新篇章与归档题面相符，答案ACD；用于替代该题不匹配的新东方版本。"
  },
  {
    id: "politics-2021-crosscheck-qihang", subject: "politics", year: 2021,
    title: "2021年考研政治真题及答案（单选题、多选题）", publisher: "启航教育",
    level: "institution", url: "https://jixun.iqihang.com/kyzt/zhengzhi/202226562.html",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "单选1—16见本页，多选17—33见 https://m-jixun.iqihang.com/index.php?a=show&c=index&catid=203&id=26564&m=content；多选答案图 https://jixun.iqihang.com/uploadfile/2022/0323/20220323045613952.png 实列第23题ABC、第24题ABD、第33题ABD。机构整理答案，非官方标准答案；第11题及第24题与归档PDF存在实质题面差异，见题目discrepancy。"
  },
  {
    id: "politics-2021-crosscheck-booklet", subject: "politics", year: 2021,
    title: "2021政治试题册式整理件及机构解析", publisher: "考研之家（转载；编者未核实）",
    level: "post-exam-recall", url: "https://31202860.s21i.faiusr.com/61/ABUIABA9GAAgjNiNvQYooJrhqwc.pdf",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "考研之家下载页 https://www.yanbbs.com/nd.jsp?id=65 链接此PDF，并声明为研友收集整理；属于非官方考后转载资料，编者及答案权威性未核实。用于核对第1—3、11—13、23—24、33题完整题面和选项；后半部答案解析出现与前半部选项次序不一致之处，不作为官方标准答案。"
  }
);

window.EXAM_DB.sources.push(
  {
    id: "english1-2017-writing-xdf", subject: "english1", year: 2017,
    title: "新东方2017考研英语一作文解析（附范文）", publisher: "新东方网（任瑞罡）",
    level: "institution", url: "https://kaoyan.xdf.cn/201612/10592309.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "署名任瑞罡，含Part A和Part B题目分析及机构参考范文；本站正文为按考试字数和任务要求校订的版本，不是官方范文。"
  },
  {
    id: "english1-2018-writing-xdf", subject: "english1", year: 2018,
    title: "2018考研英语一真题写作解析（重庆新东方）", publisher: "新东方网（尹晓莉）",
    level: "institution", url: "https://kaoyan.xdf.cn/201712/10746196.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "署名尹晓莉，含大小作文分析和机构参考范文；原样文超出相应考试字数，本站据任务要点校订至规定范围，不能标为官方范文。"
  },
  {
    id: "english1-2019-neworiental", subject: "english1", year: 2019,
    title: "2019考研英语一真题解析点评（成都新东方）", publisher: "新东方网考研频道（成都新东方）",
    level: "institution", url: "https://kaoyan.xdf.cn/201812/10837450.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "含2019英语一大小作文题目分析和机构参考范文，用于核对写作要点和审题方向；本站范文为独立原创，非官方范文。"
  },
  {
    id: "english1-2020-gaodun", subject: "english1", year: 2020,
    title: "2020年考研英语一翻译真题解析（含写作解析与范文）", publisher: "高顿教育（高顿考研）",
    level: "institution", url: "https://wwwupload.gaodunwangxiao.com/uploads/soft/170103/6011-1912231HA6.pdf",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "PDF含2020英语一小作文告示题解析与参考范文、大作文写作解析；机构资料，非官方范文。本站作文为独立原创。"
  },
  {
    id: "english1-2020-wendu", subject: "english1", year: 2020,
    title: "2020考研英语（一）真题大作文参考范文（良好的时间管理习惯）", publisher: "文都教育（中国教育在线转载）",
    level: "institution", url: "https://kaoyan.eol.cn/shiti/yingyu/201912/t20191221_1700458.shtml",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "中国教育在线页面标注原发布方为文都教育，含2020英语一大作文范文及解析；机构范文，非官方。本站作文为独立原创。"
  },
  {
    id: "english1-2021-neworiental-a", subject: "english1", year: 2021,
    title: "2021考研英语一小作文解析+范文（郑州新东方）", publisher: "新东方网考研频道（郑州新东方）",
    level: "institution", url: "https://kaoyan.xdf.cn/202101/11140041.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "含2021英语一Part A完整要求、建议信参考范文及解析；机构发布，非官方范文。本站作文为独立原创。"
  },
  {
    id: "english1-2021-neworiental-b", subject: "english1", year: 2021,
    title: "2021年考研英语一大作文试题及范文（新东方版）", publisher: "新东方网考研频道",
    level: "institution", url: "https://file.xdf.cn/uploads/201227/145_201227105508UK4Ez4Jxpq0antf1.pdf",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "两页PDF含2021英语一Part B写作要求与参考范文；机构资料，非官方范文。本站作文为独立原创。"
  },
  {
    id: "english1-2022-crosscheck-cde", subject: "english1", year: 2022,
    title: "2022年考研英语（一）试题及答案解析", publisher: "正保考研教育网",
    level: "institution", url: "https://www.cdeledu.com/zcms/contentcore/resource/download?ID=48374",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "由正保考研试题页链接的PDF，用于复核Part A/B完整Directions，并从第12页提取Part B原图；第三方机构分发件，不是考试机构官方发布。"
  },
  {
    id: "english1-2022-model-koolearn", subject: "english1", year: 2022,
    title: "2022年考研英语一大作文原文及范文", publisher: "新东方在线",
    level: "institution", url: "https://kaoyan.koolearn.com/20211225/1483405.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "新东方在线考后整理的Part A/B机构参考范文，非官方范文。本站文字经校订；Part A删除原版本中题干未给出的日期和评审职责。"
  },
  {
    id: "english1-2023-model-koolearn", subject: "english1", year: 2023,
    title: "2023年考研英语一作文原文及范文", publisher: "新东方在线",
    level: "institution", url: "https://kaoyan.koolearn.com/20221224/1578637.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "新东方在线考后整理的Part A/B机构参考范文，非官方范文；本站范文作语言与任务覆盖校订。该页面Directions与归档题册存在措辞差异。"
  },
  {
    id: "english1-2024-model-gaokzx", subject: "english1", year: 2024,
    title: "2024考研英语一答案（写作A节参考范文）", publisher: "北京高考在线（发布方未署名）",
    level: "institution", url: "https://cdn.gaokzx.com/zixunzhan/202403/dcd23bce-7974-4018-a9e8-bbb1603d8ef0.pdf",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "PDF第22—23页提供两版应用文参考范文；本站采用有具体科学家版本。发布方未署名且并非考试机构官方范文，故只标为机构整理件。"
  },
  {
    id: "english1-2025-crosscheck-tianren", subject: "english1", year: 2025,
    title: "2025考研英语（一）作文试题原文及答案解析", publisher: "天任教育",
    level: "institution", url: "https://m.tianrenedu.com.cn/bkzl/23604.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "用于交叉核对应用文任务、图表主题与主要数据；网页中的个别数据与本地启航PDF存在差异，本站数据以本地归档表格为准。非官方试题或范文。"
  },
  {
    id: "english1-2026-model-xdf", subject: "english1", year: 2026,
    title: "厦门新东方发布：2026年考研英语（一）真题及解析", publisher: "厦门新东方（新东方网发布）",
    level: "post-exam-recall", url: "https://mtoutiao.xdf.cn/kaoyan/202512/15065818.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "网页写作部分含Part A和Part B完整机构范文，并与环球网校本地件的题意、图表数据交叉核对一致；仍属考后整理，不是考试机构官方范文或官方原卷。"
  }
);
window.EXAM_DB.sources.push(
  {
    id: "politics-2022-crosscheck-huatu", subject: "politics", year: 2022,
    title: "2022年考研政治真题及答案（完整版）", publisher: "华图教育（研究生考试网）",
    level: "institution", url: "https://m.ah.huatu.com/2021/1230/2208080.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "仅核对第19题题面，网页作58.3厘米；机构考后整理，非官方答案，仅作为该题第三来源。"
  },
  {
    id: "politics-2022-crosscheck-qihang", subject: "politics", year: 2022,
    title: "2022考研政治单选及多选题参考答案解析", publisher: "启航教育",
    level: "institution", url: "https://jixun.iqihang.com/html/info/zzd/2023302451.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "已核对单选1—16题题干、选项、答案及解析；多选17—33题见 https://jixun.iqihang.com/info/zzd/2023331328.html。第17题答案与归档件冲突，第20题选项可核查归档件错排；机构参考答案，非官方。"
  },
  {
    id: "politics-2023-crosscheck-ztbu", subject: "politics", year: 2023,
    title: "2023年考研政治题册", publisher: "郑州工商学院马克思主义学院（转载）",
    level: "institution", url: "https://szb.ztbu.edu.cn/attachment/sites/item/2025_06/03_17/148ebcad6cdfd251.pdf",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "学院目录 https://szb.ztbu.edu.cn/2025_05/08_17/content-63733.html；已核对11页题册的1—33题完整题面和A—D选项，补足归档件第11—14题并核对第17、32题。题册不是官方发布，且没有逐题标准答案。"
  },
  {
    id: "politics-2023-crosscheck-juying", subject: "politics", year: 2023,
    title: "2023年考研政治考后题册及参考答案", publisher: "聚英考研网",
    level: "post-exam-recall", url: "https://m.juyingonline.com/upload/202212/25/202212251815044553.pdf",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "已核对14页考后PDF中1—33题题面与参考答案；第4、26题答案与归档件不同，第17题题面与郑州工商学院题册一致。非官方标准答案。"
  },
  {
    id: "politics-2024-crosscheck-kaoyan", subject: "politics", year: 2024,
    title: "2024年考研政治题册及参考答案", publisher: "掌上考研",
    level: "institution", url: "https://static.kaoyan.cn/file/question/2024/12/02/37bb218e8d79c4e88dc5a8ce8909c774.pdf",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "已打开35页PDF，核对前8页1—33题完整题面与选项，并核对第17、29题等答案页；可恢复归档件第29题题干及第17题措辞。非官方试卷或答案。"
  },
  {
    id: "politics-2024-crosscheck-zalize", subject: "politics", year: 2024,
    title: "2024年考研政治第29题参考题面与答案", publisher: "真题营（Zalize）",
    level: "institution", url: "https://zhenti.zalize.com/zhenti/2024",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "仅核对第29题完整题面、四个选项及答案ABD；站点本年只列32道客观题，缺第17题，不作为全卷交叉核验。非官方答案。"
  },
  {
    id: "politics-2025-crosscheck-xdf", subject: "politics", year: 2025,
    title: "2025年考研政治选择题参考答案", publisher: "新东方在线",
    level: "institution", url: "https://kaoyan.koolearn.com/20250103/1795512.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "已核对1—33题答案表及第16、19、20、27题题面和选项；第16题答案C与另外两份来源的D冲突，其余三题亦有机构答案差异。非官方参考答案。"
  },
  {
    id: "politics-2025-crosscheck-kaoyan", subject: "politics", year: 2025,
    title: "2025年考研政治试题交叉核对件", publisher: "掌上考研",
    level: "institution", url: "https://static.kaoyan.cn/file/question/2024/12/21/91b7a7b452c6b960d9259771b7812992.pdf",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "已打开38页PDF并核对前24页的1—33题完整题面、四选项及答案，补足启航件缩写题干；机构整理的参考答案，非官方。"
  },
  {
    id: "politics-2026-crosscheck-kaoyan", subject: "politics", year: 2026,
    title: "2026年考研政治试题交叉核对件", publisher: "掌上考研",
    level: "post-exam-recall", url: "https://static.kaoyan.cn/file/question/2025/12/20/e42f4c7191a84bde7b9688900c790a1a.pdf",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "已用于核对考后回忆版1—33题；与环球网校PDF可见题文高度相同，按同源或互相转录材料看待，不作为独立答案核验，也不是官方原卷或标准答案。"
  },
  {
    id: "politics-2026-crosscheck-noobdream", subject: "politics", year: 2026,
    title: "2026年考研政治考后题面与答题页", publisher: "N诺考研",
    level: "post-exam-recall", url: "https://noobdream.com/Practice/exam_solution/44251/",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "已用于1—33题题面补全及答案交叉比对；平台答题页为第三方考后回忆材料，非官方标准答案。"
  },
  {
    id: "politics-2026-crosscheck-xdf-early", subject: "politics", year: 2026,
    title: "2026考研政治选择题早期参考答案", publisher: "新东方在线",
    level: "post-exam-recall", url: "https://kaoyan.koolearn.com/20251220/1915030.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "12月20日早期考后页面，已核对单选1—16、多选17—24题答案；与同发布方更新版不算独立来源。非官方答案。"
  },
  {
    id: "politics-2026-crosscheck-xdf-revised", subject: "politics", year: 2026,
    title: "2026考研政治单选更新参考答案", publisher: "新东方在线",
    level: "post-exam-recall", url: "https://kaoyan.koolearn.com/20251220/1915036.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "同一发布方更新的考后页面，已核对单选1—16题答案；不作相对于早期版的独立核验。非官方答案。"
  },
  {
    id: "politics-2026-crosscheck-xdf-stems", subject: "politics", year: 2026,
    title: "2026考研政治单选考后题面", publisher: "新东方考研网",
    level: "post-exam-recall", url: "https://kaoyan.xdf.cn/202512/15062842.html",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "已核对单选1—16题题面、选项、答案，特别用于第11题题面校勘；与新东方在线属同一来源体系。非官方考后整理。"
  },
  {
    id: "politics-2026-crosscheck-wsyu", subject: "politics", year: 2026,
    title: "26考研政治估分试卷", publisher: "武昌首义学院马克思主义学院（发布考后估分材料）",
    level: "post-exam-recall", url: "https://szkb.wsyu.edu.cn/2026/0902/c882a170494/pagem.htm",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "仅用于第18、20、22、33题题面/答案差异比对；学院网站托管的考后估分资料，非考试机构官方答案。"
  },
  {
    id: "politics-2026-crosscheck-zalize-22", subject: "politics", year: 2026,
    title: "2026考研政治第22题考后答案", publisher: "真题营（Zalize）",
    level: "post-exam-recall", url: "https://zhenti.zalize.com/zhenti/2026/22",
    localPath: null, retrievedAt: "2026-09-27", sha256: null,
    notes: "仅用于第22题；考后页面列ABCD并注明机构答案有分歧。第三方回忆与参考答案，非官方。"
  },
  {
    id: "english1-2025-crosscheck-kaoyan", subject: "english1", year: 2025,
    title: "2025年考研英语一试题交叉核对件", publisher: "掌上考研",
    level: "institution", url: "https://static.kaoyan.cn/file/question/2024/12/21/18ded45bae038369e4c066a786618ec2.pdf",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "仅登记独立试题 PDF；本站尚未采用其范文。"
  },
  {
    id: "english1-2026-crosscheck-kaoyan", subject: "english1", year: 2026,
    title: "2026年考研英语一试题交叉核对件", publisher: "掌上考研",
    level: "post-exam-recall", url: "https://static.kaoyan.cn/file/question/2025/12/27/4644ae5c80a12b9a2135e54dc56c0724.pdf",
    localPath: null, retrievedAt: "2026-09-26", sha256: null,
    notes: "第三方考后试题；写作题图和要求仍需与本地件逐项核对。"
  }
);
