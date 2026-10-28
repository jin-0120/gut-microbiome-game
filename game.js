const initialMetrics = {
  good: 62,
  diversity: 54,
  barrier: 60,
  stress: 38,
};

const metricMeta = {
  good: { label: "有益菌活跃", color: "#3c8b78", prefer: "high" },
  diversity: { label: "菌群多样性", color: "#d79b3e", prefer: "high" },
  barrier: { label: "肠道屏障", color: "#597e96", prefer: "high" },
  stress: { label: "失衡压力", color: "#c7654d", prefer: "low" },
};

const scenarios = [
  {
    day: "DAY 01",
    category: "早餐",
    tag: "早餐选择",
    title: "赶时间的早晨",
    narrative:
      "早高峰只剩十分钟。你路过早餐店，准备给肠道花园“投喂”今天的第一餐。",
    question: "今天的第一口，你会怎么选？",
    choices: [
      {
        icon: "leaf",
        title: "燕麦酸奶杯 + 一小把坚果",
        note: "兼顾全谷物、发酵食物和坚果",
        effects: { good: 12, diversity: 10, barrier: 5, stress: -4 },
        feedbackTitle: "多样食物，比单一“补品”更重要",
        feedback:
          "燕麦等全谷物可以提供膳食纤维；酸奶属于发酵食物，坚果则增加食物种类。它们可以成为多样饮食的一部分，但没有哪一种食物能单独决定菌群好坏。",
        footnote: "饮食对菌群的影响与长期习惯关系更大，单次选择只是游戏中的简化呈现。",
      },
      {
        icon: "utensils",
        title: "油条 + 甜豆浆",
        note: "快速、熟悉，也能补充能量",
        effects: { good: -6, diversity: -4, barrier: -2, stress: 9 },
        feedbackTitle: "偶尔吃一次，不会决定整个生态",
        feedback:
          "油条和甜豆浆可以提供能量，但这一餐的膳食纤维和食物种类较少。真正值得关注的是经常吃什么，而不是把某一顿饭当成“好”或“坏”的标签。",
        footnote: "均衡饮食看整体模式，不需要因为一次选择产生饮食焦虑。",
      },
      {
        icon: "coffee",
        title: "只喝一杯咖啡就走",
        note: "先赶路，早餐之后再说",
        effects: { good: -4, diversity: -5, barrier: -5, stress: 7 },
        feedbackTitle: "规律吃饭，也是在照顾生态节律",
        feedback:
          "如果经常跳过早餐，可能更难从全天饮食中获得足够的能量、蛋白质和膳食纤维。咖啡不是问题，关键是有没有为身体补上需要的食物。",
        footnote: "如果早晨不饿，可以从少量、易接受的食物开始，找到适合自己的规律。",
      },
    ],
  },
  {
    day: "DAY 02",
    category: "夜宵",
    tag: "睡眠与饮食",
    title: "夜宵时刻",
    narrative:
      "项目刚结束，已经晚上十一点。你有点饿，也有点想用一顿重口味夜宵犒劳自己。",
    question: "今晚，你更想怎么安排？",
    choices: [
      {
        icon: "moon",
        title: "少量杂粮粥，吃完早些休息",
        note: "照顾饥饿感，也给睡眠留出时间",
        effects: { good: 5, diversity: 3, barrier: 4, stress: -3 },
        feedbackTitle: "夜宵的重点是“适量”和“不影响睡眠”",
        feedback:
          "如果确实饥饿，少量、温和、不过量的食物通常比硬扛更可持续。同时，固定作息与充足睡眠，是支持身心状态的重要基础。",
        footnote: "夜间进食与睡眠的关系因人而异；如果经常反酸、胃胀或失眠，建议咨询专业人员。",
      },
      {
        icon: "utensils",
        title: "烧烤配冰啤，彻底放松",
        note: "今天很累，想吃点痛快的",
        effects: { good: -4, diversity: -3, barrier: -8, stress: 13 },
        feedbackTitle: "偶尔聚餐不等于生态崩盘",
        feedback:
          "高油、高盐和酒精的频繁组合，可能让夜间消化和睡眠更不舒服。偶尔一次不必自责，但可以在第二天回到更规律的饮食和作息。",
        footnote: "酒精与高脂饮食并非人人反应相同，重要的是观察自己的感受和频率。",
      },
      {
        icon: "coffee",
        title: "饿着睡，明天再补回来",
        note: "省事，也避免夜里进食",
        effects: { good: -1, diversity: -2, barrier: -2, stress: 4 },
        feedbackTitle: "补偿式饮食很难完全“补回来”",
        feedback:
          "如果饥饿影响入睡，完全不吃未必是更好的选择。与其依靠第二天补偿，不如尽量让每天的饮食和作息保持稳定。",
        footnote: "游戏只在呈现一般规律，不针对任何个体的胃肠状况。",
      },
    ],
  },
  {
    day: "DAY 03",
    category: "用药",
    tag: "合理用药",
    title: "药箱里的选择",
    narrative:
      "你喉咙有点痛，还有些鼻塞。打开药箱时，你发现上次剩下的抗生素还放在里面。",
    question: "面对这盒剩药，你会怎么做？",
    choices: [
      {
        icon: "pill",
        title: "按上次经验先吃抗生素",
        note: "希望症状能快点好",
        effects: { good: -10, diversity: -13, barrier: -6, stress: 18 },
        feedbackTitle: "抗生素不是“感冒药”",
        feedback:
          "抗生素只针对细菌感染，对普通病毒性感冒没有治疗作用。自行使用剩余抗生素既可能无效，也可能带来不良反应和耐药风险。",
        footnote: "抗生素应在医生评估后使用；如果医生开具，请按要求完成疗程，不要自行停药或分享给他人。",
      },
      {
        icon: "stethoscope",
        title: "先休息补水，加重时就医",
        note: "观察症状，必要时寻求专业帮助",
        effects: { good: 2, diversity: 1, barrier: 6, stress: -4 },
        feedbackTitle: "合理用药的第一步，是判断需不需要用药",
        feedback:
          "普通感冒多以休息、补水和症状管理为主。若高热不退、呼吸困难、症状明显加重或持续不缓解，应及时就医，由专业人员判断是否需要药物。",
        footnote: "如果本身有基础疾病、免疫功能低下，或属于婴幼儿、孕产妇等特殊人群，应更早咨询医生。",
      },
      {
        icon: "sparkles",
        title: "吃点益生菌，应该不用就医",
        note: "想用“补菌”代替看医生",
        effects: { good: 4, diversity: 2, barrier: 0, stress: 3 },
        feedbackTitle: "益生菌不能替代治疗或就医",
        feedback:
          "不同益生菌产品的作用并不相同，也不适合被当作急性感染的治疗手段。是否使用、使用哪种，需要结合具体情况并咨询专业人员。",
        footnote: "免疫低下人群、危重症患者等使用益生菌需要格外谨慎，不应自行决定。",
      },
    ],
  },
];

const levels = [
  {
    shortTitle: "日常选择",
    name: "第一关 · 日常选择",
    nextName: "菌群分类挑战",
    completeSummary:
      "你完成了饮食、作息与用药情境中的三个选择。生态指标已经记录，接下来看看能不能更准确地认识这些微生物。",
  },
  {
    shortTitle: "菌群分类",
    name: "第二关 · 菌群分类",
    nextName: "三列证据连线",
    completeSummary:
      "你完成了菌群角色分类。微生物不是非黑即白，菌株、数量、位置和人体状态共同决定它们在特定情境中的意义。",
  },
  {
    shortTitle: "三列连线",
    name: "第三关 · 三列连线",
    nextName: "最终观察报告",
    completeSummary:
      "你完成了菌群、健康问题与合理应对的连线。三关已经结束，现在查看综合报告。",
  },
];

const categoryLabels = {
  beneficial: "有益 / 互助型",
  neutral: "中性 / 情境相关",
  risk: "需警惕 / 机会型",
};

const classificationItems = [
  {
    name: "双歧杆菌",
    latin: "Bifidobacterium",
    answer: "beneficial",
    hint: "常见于婴幼儿肠道，也被用于部分益生菌产品。",
    title: "常见的共生菌，但功效要看菌株",
    explanation:
      "双歧杆菌是人体肠道常见的共生菌，部分菌株参与发酵碳水化合物，也被用于特定益生菌产品。不同菌株的作用并不相同，不能把“双歧杆菌”四个字等同于一种万能功效。",
    note: "分类题的“有益”是游戏化标签；实际健康作用取决于具体菌株、剂量和人群。",
  },
  {
    name: "拟杆菌属",
    latin: "Bacteroides",
    answer: "neutral",
    hint: "肠道常驻菌，参与分解复杂碳水化合物。",
    title: "常驻并不等于永远无害，也不等于有害",
    explanation:
      "拟杆菌属是肠道中常见的一类共生菌，部分成员能帮助分解复杂碳水化合物。但在肠道屏障受损、菌群严重失衡或进入其他部位时，它们也可能成为机会性病原。",
    note: "同一个微生物在不同位置和不同人体状态下，角色可能发生变化。",
  },
  {
    name: "艰难梭菌",
    latin: "Clostridioides difficile",
    answer: "risk",
    hint: "抗生素使用后生态失衡时值得重点关注。",
    title: "可能无症状携带，也可能引起严重腹泻",
    explanation:
      "艰难梭菌可以在部分人肠道中无症状存在，但在抗生素打乱菌群后，产毒菌株可能大量繁殖并引起腹泻或结肠炎。它不是“碰见就一定生病”，却是临床上需要警惕的机会性病原。",
    note: "疑似艰难梭菌感染需要专业检测和评估，不能靠自行补充益生菌代替治疗。",
  },
  {
    name: "乳酸杆菌",
    latin: "Lactobacillus",
    answer: "beneficial",
    hint: "许多菌株参与发酵，也常见于发酵食品和益生菌。",
    title: "多数菌株是好朋友，但“乳酸杆菌”不是单一身份",
    explanation:
      "许多乳酸杆菌菌株参与糖类发酵，是发酵食品和部分益生菌中的常见成员。它们的作用高度依赖具体菌株。对免疫严重低下等人群，使用活菌产品还需要专业评估。",
    note: "看益生菌产品时，菌株和证据比只看“菌种大类”更重要。",
  },
  {
    name: "大肠杆菌",
    latin: "Escherichia coli",
    answer: "neutral",
    hint: "同一个物种里，既有常驻成员，也有致病型。",
    title: "一个物种，可以有完全不同的菌株",
    explanation:
      "多数大肠杆菌是人体肠道中的常驻成员，但某些致病型可以引起腹泻等疾病。不能只凭“大肠杆菌”这个名字判断它一定有益或一定有害，需要结合菌株、毒力基因和感染部位。",
    note: "这也是游戏分类必须看语境的典型例子。",
  },
];

const matchingPairs = [
  {
    id: "hp",
    microbe: "幽门螺杆菌",
    microbeDetail: "Helicobacter pylori",
    condition: "胃溃疡 / 慢性胃炎相关",
    treatment: "由医生评估是否需要根除治疗",
    title: "幽门螺杆菌与胃部疾病相关，但不是人人需要治疗",
    explanation:
      "幽门螺杆菌可在胃内定植，与慢性胃炎、胃溃疡及部分胃癌风险相关。是否检测和治疗，要结合症状、病史、年龄和风险因素，由医生判断。",
    note: "不要自行组合抗生素“根除”；不规范用药会增加耐药和失败风险。",
    wrongFeedback:
      "幽门螺杆菌感染很常见，也可能没有症状。是否需要治疗不是根据“查出菌”三个字自动决定，而要看具体风险和医生评估。",
  },
  {
    id: "cdiff",
    microbe: "艰难梭菌",
    microbeDetail: "Clostridioides difficile",
    condition: "抗生素相关腹泻 / 结肠炎",
    treatment: "停用不必要抗生素并遵医嘱治疗",
    title: "艰难梭菌常与抗生素后的生态失衡有关",
    explanation:
      "使用抗生素可能打乱正常肠道菌群，使艰难梭菌更容易繁殖并产生毒素。轻症到重症的处理不同，需要检测和医生评估，不能只靠止泻药或益生菌自行处理。",
    note: "出现高热、剧烈腹痛、明显脱水或血便时，应尽快就医。",
    wrongFeedback:
      "艰难梭菌不是普通“吃坏肚子”。当抗生素使用后出现持续腹泻，尤其伴随发热或腹痛时，需要专业检测和评估。",
  },
  {
    id: "probiotic",
    microbe: "特定益生菌菌株",
    microbeDetail: "Selected probiotic strains",
    condition: "部分抗生素相关腹泻风险",
    treatment: "在专业人员指导下选择有证据的菌株",
    title: "益生菌不是一种产品，也不是通用疗法",
    explanation:
      "部分特定益生菌菌株在特定人群和场景中与较低抗生素相关腹泻风险相关，但效果不能从一个菌株外推到所有产品。是否使用要结合证据、人群和安全性。",
    note: "免疫严重低下、危重症或留置中心静脉导管等人群，不应自行使用活菌产品。",
    wrongFeedback:
      "益生菌并不是“细菌越多越好”。不同菌株、剂量和人群的证据不同，也不能替代针对疾病的规范治疗。",
  },
];

const state = {
  metrics: { ...initialMetrics },
  dayIndex: 0,
  levelIndex: 0,
  answered: false,
  history: [],
  classificationIndex: 0,
  classificationAnswered: false,
  classificationCorrect: 0,
  knowledge: { correct: 0, total: 0 },
  matchingSolved: [],
  matchingSelection: { microbe: null, condition: null, treatment: null },
  matchingFeedbackMode: null,
  screen: "start",
};

const dom = {
  startScreen: document.querySelector("#startScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  classificationScreen: document.querySelector("#classificationScreen"),
  matchingScreen: document.querySelector("#matchingScreen"),
  levelScreen: document.querySelector("#levelScreen"),
  resultScreen: document.querySelector("#resultScreen"),
  startButton: document.querySelector("#startButton"),
  restartButton: document.querySelector("#restartButton"),
  brandButton: document.querySelector("#brandButton"),
  dayKicker: document.querySelector("#dayKicker"),
  progressLabel: document.querySelector("#progressLabel"),
  progressBar: document.querySelector("#progressBar"),
  classProgressLabel: document.querySelector("#classProgressLabel"),
  classProgressBar: document.querySelector("#classProgressBar"),
  classificationCounter: document.querySelector("#classificationCounter"),
  classMicrobeName: document.querySelector("#classMicrobeName"),
  classMicrobeLatin: document.querySelector("#classMicrobeLatin"),
  classMicrobeHint: document.querySelector("#classMicrobeHint"),
  microbePortrait: document.querySelector("#microbePortrait"),
  classOptions: [...document.querySelectorAll(".class-option")],
  classFeedback: document.querySelector("#classFeedback"),
  classVerdict: document.querySelector("#classVerdict"),
  classAnswerLabel: document.querySelector("#classAnswerLabel"),
  classFeedbackTitle: document.querySelector("#classFeedbackTitle"),
  classFeedbackBody: document.querySelector("#classFeedbackBody"),
  classKnowledgeNote: document.querySelector("#classKnowledgeNote"),
  classNextButton: document.querySelector("#classNextButton"),
  classNextText: document.querySelector("#classNextText"),
  matchingProgressLabel: document.querySelector("#matchingProgressLabel"),
  matchingProgressBar: document.querySelector("#matchingProgressBar"),
  matchingBoard: document.querySelector("#matchingBoard"),
  matchingLines: document.querySelector("#matchingLines"),
  matchMicrobes: document.querySelector("#matchMicrobes"),
  matchConditions: document.querySelector("#matchConditions"),
  matchTreatments: document.querySelector("#matchTreatments"),
  checkMatchingButton: document.querySelector("#checkMatchingButton"),
  matchingInstruction: document.querySelector("#matchingInstruction"),
  matchingFeedback: document.querySelector("#matchingFeedback"),
  matchingVerdict: document.querySelector("#matchingVerdict"),
  matchingAnswerLabel: document.querySelector("#matchingAnswerLabel"),
  matchingFeedbackTitle: document.querySelector("#matchingFeedbackTitle"),
  matchingFeedbackBody: document.querySelector("#matchingFeedbackBody"),
  matchingKnowledgeNote: document.querySelector("#matchingKnowledgeNote"),
  matchingNextButton: document.querySelector("#matchingNextButton"),
  matchingNextText: document.querySelector("#matchingNextText"),
  scenarioNumber: document.querySelector("#scenarioNumber"),
  scenarioTag: document.querySelector("#scenarioTag"),
  scenarioTitle: document.querySelector("#scenarioTitle"),
  scenarioNarrative: document.querySelector("#scenarioNarrative"),
  scenarioQuestion: document.querySelector("#scenarioQuestion"),
  choiceList: document.querySelector("#choiceList"),
  feedbackPanel: document.querySelector("#feedbackPanel"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackBody: document.querySelector("#feedbackBody"),
  effectList: document.querySelector("#effectList"),
  scienceFootnote: document.querySelector("#scienceFootnote"),
  nextButton: document.querySelector("#nextButton"),
  nextButtonText: document.querySelector("#nextButtonText"),
  ecoStatus: document.querySelector("#ecoStatus"),
  goodLayer: document.querySelector("#goodMicrobeLayer"),
  diverseLayer: document.querySelector("#diverseMicrobeLayer"),
  riskLayer: document.querySelector("#riskMicrobeLayer"),
  barrierLayer: document.querySelector("#barrierLayer"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  scoreValue: document.querySelector("#scoreValue"),
  scoreRing: document.querySelector("#scoreRing"),
  bestScore: document.querySelector("#bestScore"),
  reportMetrics: document.querySelector("#reportMetrics"),
  knowledgeSummary: document.querySelector("#knowledgeSummary"),
  historyList: document.querySelector("#historyList"),
  tipList: document.querySelector("#tipList"),
  playAgainButton: document.querySelector("#playAgainButton"),
  copyButton: document.querySelector("#copyButton"),
  levelCompleteKicker: document.querySelector("#levelCompleteKicker"),
  levelCompleteTitle: document.querySelector("#levelCompleteTitle"),
  levelCompleteSummary: document.querySelector("#levelCompleteSummary"),
  levelStatRow: document.querySelector("#levelStatRow"),
  nextLevelName: document.querySelector("#nextLevelName"),
  continueLevelButton: document.querySelector("#continueLevelButton"),
  continueLevelText: document.querySelector("#continueLevelText"),
  toast: document.querySelector("#toast"),
};

let toastTimer;

function icon(name, className = "") {
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function renderLevelStrips() {
  document.querySelectorAll("[data-level-strip]").forEach((container) => {
    container.innerHTML = levels
      .map((level, index) => {
        const status =
          index < state.levelIndex ? "is-complete" : index === state.levelIndex ? "is-current" : "is-upcoming";
        const marker =
          index < state.levelIndex ? icon("check") : String(index + 1).padStart(2, "0");
        return `
          <div class="level-step ${status}">
            <span class="level-step-marker">${marker}</span>
            <span class="level-step-copy">
              <small>第${index + 1}关</small>
              <strong>${level.shortTitle}</strong>
            </span>
          </div>
        `;
      })
      .join("");
  });
}

function showScreen(name) {
  state.screen = name;
  [
    dom.startScreen,
    dom.gameScreen,
    dom.classificationScreen,
    dom.matchingScreen,
    dom.levelScreen,
    dom.resultScreen,
  ].forEach((screen) => {
    screen.classList.remove("is-active");
    screen.hidden = true;
  });

  const screen = dom[`${name}Screen`];
  screen.hidden = false;
  screen.classList.add("is-active");
  dom.restartButton.hidden = name === "start";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetGame() {
  state.metrics = { ...initialMetrics };
  state.dayIndex = 0;
  state.levelIndex = 0;
  state.answered = false;
  state.history = [];
  state.classificationIndex = 0;
  state.classificationAnswered = false;
  state.classificationCorrect = 0;
  state.knowledge = { correct: 0, total: 0 };
  state.matchingSolved = [];
  state.matchingSelection = { microbe: null, condition: null, treatment: null };
  state.matchingFeedbackMode = null;
}

function startGame() {
  resetGame();
  showScreen("game");
  renderDay();
}

function renderDay() {
  const scenario = scenarios[state.dayIndex];
  state.answered = false;

  state.levelIndex = 0;
  dom.dayKicker.textContent = `第一关 · ${scenario.day} · ${scenario.category}`;
  dom.progressLabel.textContent = `${state.dayIndex + 1} / ${scenarios.length}`;
  dom.progressBar.style.width = `${((state.dayIndex + 1) / scenarios.length) * 100}%`;
  renderLevelStrips();
  dom.scenarioNumber.textContent = String(state.dayIndex + 1).padStart(2, "0");
  dom.scenarioTag.textContent = scenario.tag;
  dom.scenarioTitle.textContent = scenario.title;
  dom.scenarioNarrative.textContent = scenario.narrative;
  dom.scenarioQuestion.textContent = scenario.question;
  dom.feedbackPanel.hidden = true;
  dom.choiceList.innerHTML = "";

  scenario.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.dataset.choice = String(index);
    button.innerHTML = `
      <span class="choice-icon">${icon(choice.icon)}</span>
      <span class="choice-copy">
        <strong>${choice.title}</strong>
        <small>${choice.note}</small>
      </span>
      ${icon("arrow-right", "choice-arrow")}
    `;
    button.addEventListener("click", () => chooseOption(index, button));
    dom.choiceList.append(button);
  });

  renderMetrics();
  renderEcosystem();
}

function chooseOption(index, selectedButton) {
  if (state.answered) return;
  state.answered = true;

  const scenario = scenarios[state.dayIndex];
  const choice = scenario.choices[index];
  const allButtons = [...dom.choiceList.querySelectorAll(".choice-button")];

  allButtons.forEach((button) => {
    button.disabled = true;
    if (button === selectedButton) {
      button.classList.add("is-selected");
    } else {
      button.classList.add("is-muted");
    }
  });

  Object.entries(choice.effects).forEach(([key, value]) => {
    state.metrics[key] = clamp(state.metrics[key] + value);
  });

  state.history.push({
    day: `${state.dayIndex + 1}`.padStart(2, "0"),
    title: choice.title,
    tag: scenario.tag,
    choiceIndex: index,
  });

  renderMetrics(choice.effects);
  renderEcosystem();
  renderFeedback(choice);
}

function renderFeedback(choice) {
  dom.feedbackTitle.textContent = choice.feedbackTitle;
  dom.feedbackBody.textContent = choice.feedback;
  dom.scienceFootnote.textContent = choice.footnote;
  dom.effectList.innerHTML = Object.entries(choice.effects)
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => {
      const meta = metricMeta[key];
      const isBeneficial = key === "stress" ? value < 0 : value > 0;
      const direction = value > 0 ? "up" : "down";
      return `
        <span class="effect-chip ${isBeneficial ? "positive" : "negative"}">
          ${meta.label} ${direction === "up" ? "+" : ""}${value}
        </span>
      `;
    })
    .join("");

  dom.nextButtonText.textContent =
    state.dayIndex === scenarios.length - 1 ? "完成第一关" : `进入第${state.dayIndex + 2}天`;
  dom.feedbackPanel.hidden = false;
}

function renderMetrics(effects = null) {
  Object.entries(state.metrics).forEach(([key, value]) => {
    const card = document.querySelector(`[data-metric="${key}"]`);
    const valueElement = card.querySelector("[data-value]");
    const bar = card.querySelector(".metric-track");
    const fill = card.querySelector(".metric-fill");
    const note = card.querySelector("[data-note]");

    valueElement.textContent = String(value);
    fill.style.width = `${value}%`;
    bar.setAttribute("aria-valuenow", String(value));
    note.textContent = metricNote(key, value);

    if (effects && Object.hasOwn(effects, key)) {
      card.classList.remove("is-changing");
      void card.offsetWidth;
      card.classList.add("is-changing");
    }
  });
}

function metricNote(key, value) {
  if (key === "good") {
    if (value >= 75) return "群落活跃且稳定";
    if (value >= 55) return "正在建立稳定群落";
    return "有益菌活跃度偏低";
  }
  if (key === "diversity") {
    if (value >= 75) return "食物种类带来了变化";
    if (value >= 55) return "还可以更丰富";
    return "食物多样性有待增加";
  }
  if (key === "barrier") {
    if (value >= 75) return "屏障状态较稳定";
    if (value >= 55) return "状态平稳";
    return "需要更多休息与规律饮食";
  }
  if (value <= 25) return "压力较低";
  if (value <= 50) return "存在一些波动";
  return "压力偏高";
}

function ecoMessage() {
  const { good, diversity, barrier, stress } = state.metrics;
  if (stress >= 65 || barrier <= 42) return "花园正在经历波动，给它一点恢复时间";
  if (good >= 76 && diversity >= 70 && barrier >= 70) return "不同菌群正在形成更丰富的群落";
  if (diversity >= 68) return "食物多样性正在丰富这片花园";
  if (barrier >= 70) return "屏障状态正在趋于稳定";
  return "群落正在适应今天的选择";
}

function renderEcosystem() {
  const { good, diversity, barrier, stress } = state.metrics;
  dom.goodLayer.style.opacity = String(0.28 + (good / 100) * 0.72);
  dom.diverseLayer.style.opacity = String(0.16 + (diversity / 100) * 0.84);
  dom.riskLayer.style.opacity = String(0.06 + (stress / 100) * 0.9);
  dom.barrierLayer.style.opacity = String(0.18 + (barrier / 100) * 0.82);
  dom.goodLayer.style.transform = `scale(${0.94 + good / 1600})`;
  dom.diverseLayer.style.transform = `scale(${0.94 + diversity / 1600})`;
  dom.ecoStatus.textContent = ecoMessage();
}

function createMicrobe(type, x, y, rotation, scale = 1) {
  const transform = `translate(${x} ${y}) rotate(${rotation}) scale(${scale})`;
  if (type === "round") {
    return `
      <g transform="${transform}">
        <path d="M-12 0h-9M12 0h9M0-12v-9" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
        <circle r="12" fill="currentColor" />
        <circle cx="-4" cy="-2" r="1.6" fill="#fffaf0" />
        <circle cx="4" cy="-2" r="1.6" fill="#fffaf0" />
      </g>
    `;
  }
  if (type === "rod") {
    return `
      <g transform="${transform}">
        <path d="M-10 8-18 16M10 8 18 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
        <rect x="-10" y="-17" width="20" height="34" rx="10" fill="currentColor" />
        <circle cx="-3" cy="-3" r="1.5" fill="#fffaf0" />
        <circle cx="4" cy="-3" r="1.5" fill="#fffaf0" />
      </g>
    `;
  }
  return `
    <g transform="${transform}">
      <path d="M0-17 5-6 17-4 8 5 10 17 0 10-10 17-8 5-17-4-5-6Z" fill="currentColor" />
      <circle cx="-4" cy="-2" r="1.5" fill="#fffaf0" />
      <circle cx="4" cy="-2" r="1.5" fill="#fffaf0" />
    </g>
  `;
}

function buildEcosystem() {
  const goodPositions = [
    [126, 182, -11, 0.9, "round"],
    [212, 151, 18, 0.72, "rod"],
    [276, 169, -18, 0.8, "round"],
    [360, 242, 18, 0.86, "rod"],
    [447, 287, -12, 0.72, "round"],
    [530, 260, 21, 0.8, "rod"],
    [593, 190, -19, 0.68, "round"],
  ];
  const diversePositions = [
    [159, 243, 23, 0.62, "star"],
    [247, 221, -19, 0.58, "rod"],
    [325, 208, 8, 0.66, "round"],
    [404, 286, -22, 0.6, "star"],
    [488, 335, 15, 0.55, "rod"],
    [571, 287, -9, 0.58, "star"],
  ];
  const riskPositions = [
    [184, 166, 18, 0.58, "star"],
    [301, 239, -17, 0.55, "star"],
    [477, 300, 21, 0.52, "star"],
    [554, 228, -12, 0.56, "star"],
    [621, 166, 24, 0.5, "star"],
  ];

  dom.goodLayer.innerHTML = goodPositions
    .map(([x, y, rotation, scale, type]) =>
      createMicrobe(type, x, y, rotation, scale).replaceAll("currentColor", "#347e70"),
    )
    .join("");

  const diversityColors = ["#d79b3e", "#5e8194", "#b96d54", "#7c9053", "#408b83", "#b18454"];
  dom.diverseLayer.innerHTML = diversePositions
    .map(([x, y, rotation, scale, type], index) =>
      createMicrobe(type, x, y, rotation, scale).replaceAll(
        "currentColor",
        diversityColors[index % diversityColors.length],
      ),
    )
    .join("");

  dom.riskLayer.innerHTML = riskPositions
    .map(([x, y, rotation, scale, type]) =>
      createMicrobe(type, x, y, rotation, scale).replaceAll("currentColor", "#c7654d"),
    )
    .join("");

  const barrierPaths = [
    "M85 187c17-20 37-20 55-5",
    "M148 139c18-21 40-23 61-9",
    "M218 112c20-17 43-13 61 3",
    "M287 149c18 7 35 22 46 42",
    "M341 211c17 12 30 29 37 50",
    "M401 284c17 9 34 14 54 12",
    "M468 319c17 2 34-3 49-14",
    "M526 295c18-5 34-16 46-31",
    "M578 238c14-15 24-33 27-52",
    "M603 151c12-15 27-23 47-22",
  ];
  dom.barrierLayer.innerHTML = barrierPaths.map((path) => `<path d="${path}" />`).join("");
}

function calculateEcologyScore() {
  const { good, diversity, barrier, stress } = state.metrics;
  return Math.round(
    good * 0.28 + diversity * 0.25 + barrier * 0.25 + (100 - stress) * 0.22,
  );
}

function knowledgeAccuracy() {
  if (!state.knowledge.total) return 0;
  return Math.round((state.knowledge.correct / state.knowledge.total) * 100);
}

function calculateScore() {
  return Math.round(calculateEcologyScore() * 0.6 + knowledgeAccuracy() * 0.4);
}

function resultContent(score) {
  if (score >= 70) {
    return {
      title: "三关通关，花园正盛",
      summary:
        "你完成了生活选择、菌群分类与证据连线，游戏里的生态和知识挑战都表现良好。真正的微生态管理不是追求某一种“神奇食物”，而是长期保持饮食多样、规律作息和合理用药。",
    };
  }
  if (score >= 55) {
    return {
      title: "三关通关，花园仍在生长",
      summary:
        "你已经建立了关于肠道微生态的基础认识，也有继续调整的空间。游戏里的选择和分类都是简化呈现，不能替代医生对个人情况的判断。",
    };
  }
  return {
    title: "三关完成，先给花园一点时间",
    summary:
      "这一局里，生态指标或知识挑战出现了较多波动。别把游戏结果当成健康诊断，从下一餐、今晚的睡眠或一次谨慎的用药选择开始调整就好。",
  };
}

function weakestTip() {
  const { good, diversity, barrier, stress } = state.metrics;
  const items = [
    { key: "good", value: good, tip: "下一餐加入一种全谷物、豆类或蔬果，让有益菌有更稳定的“口粮”。" },
    { key: "diversity", value: diversity, tip: "试着让一周内的食物颜色和种类更多一些，不必追求每顿都完美。" },
    { key: "barrier", value: barrier, tip: "优先把睡眠和吃饭时间规律起来；持续腹痛、腹泻或便血时应就医。" },
    { key: "stress", value: stress, tip: "减少频繁的高油高糖夜宵和酒精摄入；需要用药时先咨询医生或药师。" },
  ];
  if (stress >= 60) return items[3].tip;
  return [...items].sort((a, b) => a.value - b.value)[0].tip;
}

function levelStat(label, value, color = "#3c8b78") {
  return `
    <div class="level-stat" style="--stat-color: ${color}">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function showLevelComplete(levelIndex) {
  state.levelIndex = levelIndex;
  const level = levels[levelIndex];
  const isFinalLevel = levelIndex === levels.length - 1;

  dom.levelCompleteKicker.textContent = isFinalLevel ? "全部关卡完成" : `第${levelIndex + 1}关完成`;
  dom.levelCompleteTitle.textContent = level.shortTitle;
  dom.levelCompleteSummary.textContent = level.completeSummary;
  dom.nextLevelName.textContent = level.nextName;
  dom.continueLevelText.textContent = isFinalLevel ? "查看最终报告" : `进入${levels[levelIndex + 1].name}`;

  if (levelIndex === 0) {
    dom.levelStatRow.innerHTML = [
      ["有益菌活跃", state.metrics.good, metricMeta.good.color],
      ["菌群多样性", state.metrics.diversity, metricMeta.diversity.color],
      ["肠道屏障", state.metrics.barrier, metricMeta.barrier.color],
      ["失衡压力", state.metrics.stress, metricMeta.stress.color],
    ]
      .map(([label, value, color]) => levelStat(label, `${value}/100`, color))
      .join("");
  } else if (levelIndex === 1) {
    dom.levelStatRow.innerHTML = [
      levelStat("分类正确", `${state.classificationCorrect} / ${classificationItems.length}`),
      levelStat("知识准确率", `${knowledgeAccuracy()}%`, "#d79b3e"),
      levelStat("当前关卡", "2 / 3", "#597e96"),
    ].join("");
  } else {
    dom.levelStatRow.innerHTML = [
      levelStat("连线完成", `${state.matchingSolved.length} / ${matchingPairs.length}`),
      levelStat("知识挑战", `${state.knowledge.correct} / ${state.knowledge.total}`, "#d79b3e"),
      levelStat("综合得分", calculateScore(), "#597e96"),
    ].join("");
  }

  showScreen("level");
}

function startClassification() {
  state.levelIndex = 1;
  state.classificationIndex = 0;
  state.classificationAnswered = false;
  showScreen("classification");
  renderClassification();
}

function renderClassification() {
  const item = classificationItems[state.classificationIndex];
  state.classificationAnswered = false;
  dom.classificationCounter.textContent = `菌群卡 ${String(state.classificationIndex + 1).padStart(2, "0")}`;
  dom.classMicrobeName.textContent = item.name;
  dom.classMicrobeLatin.textContent = item.latin;
  dom.classMicrobeHint.textContent = `提示：${item.hint}`;
  dom.classProgressLabel.textContent = `${state.classificationIndex + 1} / ${classificationItems.length}`;
  dom.classProgressBar.style.width = `${((state.classificationIndex + 1) / classificationItems.length) * 100}%`;
  dom.classFeedback.hidden = true;
  dom.classFeedback.classList.remove("is-wrong");
  dom.microbePortrait.removeAttribute("data-category");
  dom.classOptions.forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-correct", "is-wrong");
  });
  renderLevelStrips();
}

function answerClassification(category) {
  if (state.classificationAnswered) return;
  state.classificationAnswered = true;

  const item = classificationItems[state.classificationIndex];
  const isCorrect = category === item.answer;
  state.knowledge.total += 1;
  if (isCorrect) {
    state.knowledge.correct += 1;
    state.classificationCorrect += 1;
  }

  dom.classOptions.forEach((button) => {
    button.disabled = true;
    button.classList.toggle("is-correct", button.dataset.category === item.answer);
    button.classList.toggle(
      "is-wrong",
      button.dataset.category === category && !isCorrect,
    );
  });

  dom.microbePortrait.dataset.category = item.answer;
  dom.classVerdict.textContent = isCorrect ? "回答正确" : "这次没选对";
  dom.classAnswerLabel.textContent = `正确分类：${categoryLabels[item.answer]}`;
  dom.classFeedbackTitle.textContent = item.title;
  dom.classFeedbackBody.textContent = item.explanation;
  dom.classKnowledgeNote.textContent = item.note;
  dom.classFeedback.classList.toggle("is-wrong", !isCorrect);
  dom.classFeedback.hidden = false;
  dom.classNextText.textContent =
    state.classificationIndex === classificationItems.length - 1
      ? "完成第二关"
      : "下一张菌群卡";
}

function nextClassification() {
  if (!state.classificationAnswered) return;
  state.classificationIndex += 1;
  if (state.classificationIndex >= classificationItems.length) {
    showLevelComplete(1);
    return;
  }
  renderClassification();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMatchColumn(container, kind, order) {
  container.innerHTML = order
    .map((pairIndex) => {
      const pair = matchingPairs[pairIndex];
      const label = kind === "microbe" ? pair.microbe : kind === "condition" ? pair.condition : pair.treatment;
      const detail = kind === "microbe" ? pair.microbeDetail : "";
      return `
        <button class="match-card" type="button" data-kind="${kind}" data-pair-id="${pair.id}">
          <strong>${label}</strong>
          ${detail ? `<small>${detail}</small>` : ""}
        </button>
      `;
    })
    .join("");

  container.querySelectorAll(".match-card").forEach((button) => {
    button.addEventListener("click", () => selectMatchCard(kind, button.dataset.pairId));
  });
}

function startMatching() {
  state.levelIndex = 2;
  state.matchingSolved = [];
  state.matchingSelection = { microbe: null, condition: null, treatment: null };
  state.matchingFeedbackMode = null;
  renderMatchingBoard();
  showScreen("matching");
}

function renderMatchingBoard() {
  renderMatchColumn(dom.matchMicrobes, "microbe", [1, 0, 2]);
  renderMatchColumn(dom.matchConditions, "condition", [2, 1, 0]);
  renderMatchColumn(dom.matchTreatments, "treatment", [0, 2, 1]);
  dom.matchingLines.innerHTML = "";
  dom.matchingFeedback.hidden = true;
  dom.matchingFeedback.classList.remove("is-wrong");
  updateMatchingControls();
  renderLevelStrips();
}

function selectMatchCard(kind, pairId) {
  if (!dom.matchingFeedback.hidden) return;
  state.matchingSelection[kind] =
    state.matchingSelection[kind] === pairId ? null : pairId;
  document.querySelectorAll(".match-card").forEach((button) => {
    const selected =
      button.dataset.kind === kind &&
      button.dataset.pairId === state.matchingSelection[kind];
    button.classList.toggle("is-selected", selected);
  });
  updateMatchingControls();
}

function updateMatchingControls() {
  const selectedCount = Object.values(state.matchingSelection).filter(Boolean).length;
  dom.checkMatchingButton.disabled = selectedCount < 3 || !dom.matchingFeedback.hidden;
  dom.matchingProgressLabel.textContent = `${state.matchingSolved.length} / ${matchingPairs.length}`;
  dom.matchingProgressBar.style.width = `${(state.matchingSolved.length / matchingPairs.length) * 100}%`;
  dom.matchingInstruction.textContent =
    selectedCount === 3
      ? "三张卡已选好，检查它们是否属于同一组。"
      : `已选择 ${selectedCount} / 3 张卡。从每一列各选一张。`;
}

function showMatchingFeedback(isCorrect, pair) {
  state.matchingFeedbackMode = isCorrect ? "correct" : "wrong";
  dom.matchingFeedback.classList.toggle("is-wrong", !isCorrect);
  dom.matchingVerdict.textContent = isCorrect ? "连线正确" : "这组还不匹配";
  dom.matchingAnswerLabel.textContent = isCorrect
    ? `${pair.microbe} ↔ ${pair.condition}`
    : "换一种组合再试";
  dom.matchingFeedbackTitle.textContent = isCorrect ? pair.title : "三列之间还没有形成同一条证据链";
  dom.matchingFeedbackBody.textContent = isCorrect
    ? pair.explanation
    : pair.wrongFeedback;
  dom.matchingKnowledgeNote.textContent = isCorrect
    ? pair.note
    : `知识点：${pair.note}`;
  dom.matchingNextText.textContent =
    isCorrect && state.matchingSolved.length === matchingPairs.length
      ? "完成第三关"
      : isCorrect
        ? "继续下一组"
        : "重新选择";
  dom.matchingFeedback.hidden = false;
  dom.checkMatchingButton.disabled = true;
}

function checkMatching() {
  const ids = Object.values(state.matchingSelection);
  if (ids.some((id) => !id)) return;

  state.knowledge.total += 1;
  const samePair = new Set(ids).size === 1;
  const pair = matchingPairs.find((item) => item.id === ids[0]);
  const selectedCards = [...document.querySelectorAll(".match-card.is-selected")];

  if (samePair) {
    state.knowledge.correct += 1;
    if (!state.matchingSolved.includes(pair.id)) {
      state.matchingSolved.push(pair.id);
    }
    selectedCards.forEach((card) => {
      card.classList.add("is-matched");
      card.classList.remove("is-selected");
      card.disabled = true;
    });
    drawMatchingLines();
    dom.matchingProgressLabel.textContent = `${state.matchingSolved.length} / ${matchingPairs.length}`;
    dom.matchingProgressBar.style.width = `${(state.matchingSolved.length / matchingPairs.length) * 100}%`;
    showMatchingFeedback(true, pair);
    return;
  }

  selectedCards.forEach((card) => card.classList.add("is-wrong"));
  showMatchingFeedback(false, pair);
}

function nextMatching() {
  if (state.matchingFeedbackMode === "correct") {
    if (state.matchingSolved.length === matchingPairs.length) {
      showLevelComplete(2);
      return;
    }
    document.querySelectorAll(".match-card").forEach((card) => {
      card.classList.remove("is-selected");
    });
    state.matchingSelection = { microbe: null, condition: null, treatment: null };
    state.matchingFeedbackMode = null;
    dom.matchingFeedback.hidden = true;
    updateMatchingControls();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.querySelectorAll(".match-card.is-wrong").forEach((card) => {
    card.classList.remove("is-wrong");
  });
  document.querySelectorAll(".match-card.is-selected").forEach((card) => {
    card.classList.remove("is-selected");
  });
  state.matchingSelection = { microbe: null, condition: null, treatment: null };
  state.matchingFeedbackMode = null;
  dom.matchingFeedback.hidden = true;
  updateMatchingControls();
}

function drawMatchingLines() {
  const boardRect = dom.matchingBoard.getBoundingClientRect();
  if (!boardRect.width) return;
  dom.matchingLines.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);
  dom.matchingLines.innerHTML = "";
  const colors = ["#3c8b78", "#c7654d", "#597e96"];

  state.matchingSolved.forEach((id, index) => {
    const microbe = dom.matchingBoard.querySelector(
      `.match-card[data-kind="microbe"][data-pair-id="${id}"]`,
    );
    const condition = dom.matchingBoard.querySelector(
      `.match-card[data-kind="condition"][data-pair-id="${id}"]`,
    );
    const treatment = dom.matchingBoard.querySelector(
      `.match-card[data-kind="treatment"][data-pair-id="${id}"]`,
    );
    if (!microbe || !condition || !treatment) return;

    const microbeRect = microbe.getBoundingClientRect();
    const conditionRect = condition.getBoundingClientRect();
    const treatmentRect = treatment.getBoundingClientRect();
    const first = {
      x1: microbeRect.right - boardRect.left,
      y1: microbeRect.top + microbeRect.height / 2 - boardRect.top,
      x2: conditionRect.left - boardRect.left,
      y2: conditionRect.top + conditionRect.height / 2 - boardRect.top,
    };
    const second = {
      x1: conditionRect.right - boardRect.left,
      y1: first.y2,
      x2: treatmentRect.left - boardRect.left,
      y2: treatmentRect.top + treatmentRect.height / 2 - boardRect.top,
    };
    const mid1 = (first.x1 + first.x2) / 2;
    const mid2 = (second.x1 + second.x2) / 2;
    dom.matchingLines.insertAdjacentHTML(
      "beforeend",
      `<path class="match-line" style="--line-color: ${colors[index % colors.length]}" d="M${first.x1} ${first.y1} C${mid1} ${first.y1} ${mid1} ${first.y2} ${first.x2} ${first.y2}" />
       <path class="match-line" style="--line-color: ${colors[index % colors.length]}" d="M${second.x1} ${second.y1} C${mid2} ${second.y1} ${mid2} ${second.y2} ${second.x2} ${second.y2}" />`,
    );
  });
}

function continueLevel() {
  if (state.levelIndex === 0) {
    startClassification();
  } else if (state.levelIndex === 1) {
    startMatching();
  } else {
    showResults();
  }
}

function showResults() {
  const score = calculateScore();
  const result = resultContent(score);
  const ringLength = 351.86;
  const previousBest = Number(localStorage.getItem("gut-game-best-v2") || 0);
  const best = Math.max(previousBest, score);
  localStorage.setItem("gut-game-best-v2", String(best));

  dom.resultTitle.textContent = result.title;
  dom.resultSummary.textContent = result.summary;
  dom.scoreValue.textContent = String(score);
  dom.scoreRing.style.strokeDashoffset = String(ringLength * (1 - score / 100));
  dom.bestScore.textContent = best > previousBest ? `新纪录 · ${best}` : `最佳纪录 · ${best}`;

  dom.reportMetrics.innerHTML = Object.entries(state.metrics)
    .map(([key, value]) => {
      const meta = metricMeta[key];
      return `
        <article class="report-metric" style="--report-color: ${meta.color}">
          <div class="report-metric-head">
            <span>${meta.label}</span>
            <strong>${value}</strong>
          </div>
          <div class="metric-track" role="progressbar" aria-label="${meta.label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}">
            <span class="metric-fill" style="width: ${value}%"></span>
          </div>
        </article>
      `;
    })
    .join("");

  dom.knowledgeSummary.innerHTML = `
    <div class="knowledge-summary-copy">
      <div>
        <span>知识挑战</span>
        <strong>${state.knowledge.correct} / ${state.knowledge.total}</strong>
      </div>
      <p>两次挑战的综合准确率 ${knowledgeAccuracy()}%</p>
    </div>
    <div class="metric-track" role="progressbar" aria-label="知识挑战准确率" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${knowledgeAccuracy()}">
      <span class="metric-fill" style="width: ${knowledgeAccuracy()}%"></span>
    </div>
  `;

  dom.historyList.innerHTML =
    state.history
      .map(
        (item) => `
        <div class="history-item">
          <span class="history-day">DAY ${item.day}</span>
          <span class="history-choice">${item.title}</span>
          <span class="history-tag">${item.tag}</span>
        </div>
      `,
      )
      .join("") +
    `
      <div class="history-item">
        <span class="history-day">LEVEL 2</span>
        <span class="history-choice">菌群分类挑战</span>
        <span class="history-tag">答对 ${state.classificationCorrect} / ${classificationItems.length}</span>
      </div>
      <div class="history-item">
        <span class="history-day">LEVEL 3</span>
        <span class="history-choice">菌群 × 健康问题 × 合理应对</span>
        <span class="history-tag">连线 ${state.matchingSolved.length} / ${matchingPairs.length}</span>
      </div>
    `;

  const accuracy = knowledgeAccuracy();
  const tips = [
    weakestTip(),
    accuracy < 75
      ? "回到答错的知识卡，重点分清“菌株差异”和“宿主状态”，比记住绝对好坏标签更有用。"
      : "你已经能区分菌群分类中的语境差异，可以继续学习具体菌株和适用人群的证据。",
    "把“食物多样、规律作息、合理用药”当成长期方向，而不是一次必须满分的考试。",
    "没有一种食物或益生菌能替代均衡饮食和正规医疗；特殊人群使用益生菌前应先咨询医生。",
  ];
  dom.tipList.innerHTML = tips
    .map((tip) => `<li><span>${icon("check")}</span><p>${tip}</p></li>`)
    .join("");

  showScreen("result");
  requestAnimationFrame(() => {
    dom.scoreRing.style.strokeDashoffset = String(ringLength * (1 - score / 100));
  });
}

function goNext() {
  if (!state.answered) return;
  if (state.dayIndex >= scenarios.length - 1) {
    showLevelComplete(0);
    return;
  }
  state.dayIndex += 1;
  renderDay();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => dom.toast.classList.remove("is-visible"), 2400);
}

async function copyReport() {
  const { good, diversity, barrier, stress } = state.metrics;
  const report = [
    `我在《肠道小宇宙》完成了三关生态挑战`,
    `游戏内综合得分：${calculateScore()}`,
    `有益菌活跃 ${good} · 菌群多样性 ${diversity} · 肠道屏障 ${barrier} · 失衡压力 ${stress}`,
    `知识挑战答对 ${state.knowledge.correct} / ${state.knowledge.total}`,
    `这是一个科普小游戏，不构成健康评估。`,
  ].join("\n");

  try {
    await navigator.clipboard.writeText(report);
    showToast("报告已复制，可以分享给朋友");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = report;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("报告已复制，可以分享给朋友");
  }
}

buildEcosystem();
renderMetrics();
renderEcosystem();
renderLevelStrips();

dom.startButton.addEventListener("click", startGame);
dom.restartButton.addEventListener("click", startGame);
dom.playAgainButton.addEventListener("click", startGame);
dom.nextButton.addEventListener("click", goNext);
dom.continueLevelButton.addEventListener("click", continueLevel);
dom.classOptions.forEach((button) => {
  button.addEventListener("click", () => answerClassification(button.dataset.category));
});
dom.classNextButton.addEventListener("click", nextClassification);
dom.checkMatchingButton.addEventListener("click", checkMatching);
dom.matchingNextButton.addEventListener("click", nextMatching);
dom.copyButton.addEventListener("click", copyReport);
dom.brandButton.addEventListener("click", () => {
  if (state.screen === "start") return;
  showScreen("start");
});

window.addEventListener("resize", () => {
  if (state.screen === "matching") drawMatchingLines();
});
