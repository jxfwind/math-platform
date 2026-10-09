export const categories = [
  {
    id: 'tree-planting',
    name: '植树问题',
    description: '学习间隔与数量的关系，掌握两端都种、一端种、两端不种等情况。',
    icon: '🌳'
  },
  {
    id: 'age',
    name: '年龄问题',
    description: '抓住年龄差不变的关键，用画图法解决年龄相关的问题。',
    icon: '👦'
  },
  {
    id: 'difference-multiple',
    name: '差倍问题',
    description: '已知两数的差与倍数关系，求这两个数。',
    icon: '📏'
  },
  {
    id: 'chicken-rabbit',
    name: '鸡兔同笼',
    description: '经典的鸡兔同笼问题，学会假设法和画图法。',
    icon: '🐔🐰'
  },
  {
    id: 'sum-difference',
    name: '和差问题',
    description: '已知两数的和与差，求这两个数。',
    icon: '➕'
  },
  {
    id: 'multiple-ratio',
    name: '和倍问题',
    description: '已知两数的和与倍数关系，求这两个数。',
    icon: '✖️'
  },
  {
    id: 'period',
    name: '周期问题',
    description: '利用余数找规律，解决循环排列的问题。',
    icon: '🔁'
  },
  {
    id: 'unit-rate',
    name: '归一问题',
    description: '先求出"一份"是多少，再解决其他问题。',
    icon: '📦'
  },
  {
    id: 'reverse',
    name: '还原问题',
    description: '倒着往回推，求出原来的数。',
    icon: '⏪'
  },
  {
    id: 'profit-loss',
    name: '盈亏问题',
    description: '分东西时的"多出来"和"不够分"，藏着解题的秘密。',
    icon: '🍎'
  },
  {
    id: 'overlap',
    name: '重叠问题',
    description: '用圆圈图解决"你中有我、我中有你"的计数问题。',
    icon: '⭕'
  },
  {
    id: 'substitution',
    name: '等量代换',
    description: '用"换一换"的办法，把复杂问题变简单。',
    icon: '⚖️'
  },
  {
    id: 'stairs',
    name: '爬楼梯与锯木头',
    description: '和植树问题一样，关键都在"间隔"。',
    icon: '🪜'
  },
  {
    id: 'average',
    name: '平均数问题',
    description: '移多补少，理解平均数的真正含义。',
    icon: '📊'
  },
  {
    id: 'counting',
    name: '数图形问题',
    description: '按顺序数，不重不漏，训练有序思维。',
    icon: '🔺'
  }
]

export const problems = [
  // 植树问题
  {
    id: 1,
    categoryId: 'tree-planting',
    title: '植树问题一',
    difficulty: 'medium',
    question: '在一条长20米的小路一边种树，每隔4米种一棵，两端都种，一共要种多少棵树？',
    answer: '6棵',
    explanation: {
      steps: [
        '先算间隔数：20 ÷ 4 = 5（个间隔）',
        '两端都种时，树比间隔多1：5 + 1 = 6（棵）',
        '所以一共要种6棵树。'
      ],
      animationType: 'tree-planting-both'
    }
  },
  {
    id: 2,
    categoryId: 'tree-planting',
    title: '植树问题二',
    difficulty: 'medium',
    question: '在一条长30米的小路一边种树，每隔5米种一棵，只在一端种，一共要种多少棵树？',
    answer: '6棵',
    explanation: {
      steps: [
        '先算间隔数：30 ÷ 5 = 6（个间隔）',
        '只在一端种时，树和间隔一样多：6棵',
        '所以一共要种6棵树。'
      ],
      animationType: 'tree-planting-one'
    }
  },
  {
    id: 3,
    categoryId: 'tree-planting',
    title: '植树问题三',
    difficulty: 'hard',
    question: '在一条长24米的小路两边种树，每隔3米种一棵，两端都不种，一共要种多少棵树？',
    answer: '14棵',
    explanation: {
      steps: [
        '先算一边的间隔数：24 ÷ 3 = 8（个间隔）',
        '两端都不种时，树比间隔少1：8 - 1 = 7（棵）',
        '两边都种：7 × 2 = 14（棵）',
        '所以一共要种14棵树。'
      ],
      animationType: 'tree-planting-none'
    }
  },
  {
    id: 4,
    categoryId: 'tree-planting',
    title: '植树问题四',
    difficulty: 'medium',
    question: '从第1棵树走到第6棵树，一共走了50米，相邻两棵树之间相距多少米？',
    answer: '10米',
    explanation: {
      steps: [
        '从第1棵到第6棵，中间有：6 - 1 = 5（个间隔）',
        '总距离50米，每个间隔：50 ÷ 5 = 10（米）',
        '所以相邻两棵树相距10米。'
      ],
      animationType: 'tree-planting-distance'
    }
  },
  {
    id: 5,
    categoryId: 'tree-planting',
    title: '植树问题五',
    difficulty: 'hard',
    question: '一个圆形花坛周长是36米，每隔4米摆一盆花，一共需要多少盆花？',
    answer: '9盆',
    explanation: {
      steps: [
        '圆形是封闭的，花盆数和间隔数相等',
        '间隔数：36 ÷ 4 = 9（个）',
        '所以一共需要9盆花。'
      ],
      animationType: 'tree-planting-circle'
    }
  },
  // 年龄问题
  {
    id: 6,
    categoryId: 'age',
    title: '年龄问题一',
    difficulty: 'medium',
    question: '小明今年8岁，妈妈今年32岁。5年后，妈妈比小明大多少岁？',
    answer: '24岁',
    explanation: {
      steps: [
        '年龄差永远不变',
        '今年妈妈比小明大：32 - 8 = 24（岁）',
        '5年后，妈妈还是比小明大24岁。'
      ],
      animationType: 'age-difference'
    }
  },
  {
    id: 7,
    categoryId: 'age',
    title: '年龄问题二',
    difficulty: 'medium',
    question: '爸爸今年35岁，儿子今年5岁。几年后爸爸的年龄是儿子的3倍？',
    answer: '10年',
    explanation: {
      steps: [
        '爸爸和儿子的年龄差：35 - 5 = 30（岁）',
        '当爸爸是儿子3倍时，爸爸比儿子多2倍',
        '那时儿子的年龄：30 ÷ 2 = 15（岁）',
        '儿子现在5岁，到15岁需要：15 - 5 = 10（年）'
      ],
      animationType: 'age-multiple'
    }
  },
  {
    id: 8,
    categoryId: 'age',
    title: '年龄问题三',
    difficulty: 'hard',
    question: '姐姐今年12岁，妹妹今年6岁。几年后姐姐和妹妹的年龄和是30岁？',
    answer: '6年',
    explanation: {
      steps: [
        '今年两人年龄和：12 + 6 = 18（岁）',
        '要达到30岁，还需要增加：30 - 18 = 12（岁）',
        '每人每年各长1岁，所以每年一共长2岁',
        '需要：12 ÷ 2 = 6（年）'
      ],
      animationType: 'age-sum'
    }
  },
  {
    id: 9,
    categoryId: 'age',
    title: '年龄问题四',
    difficulty: 'hard',
    question: '爷爷今年64岁，孙子今年8岁。几年后爷爷的年龄是孙子的5倍？',
    answer: '6年',
    explanation: {
      steps: [
        '爷爷和孙子的年龄差：64 - 8 = 56（岁）',
        '当爷爷是孙子5倍时，爷爷比孙子多4倍',
        '那时孙子的年龄：56 ÷ 4 = 14（岁）',
        '14 - 8 = 6（年）'
      ],
      animationType: 'age-multiple'
    }
  },
  {
    id: 10,
    categoryId: 'age',
    title: '年龄问题五',
    difficulty: 'medium',
    question: '小红今年9岁，妈妈今年33岁。几年前妈妈的年龄是小红的5倍？',
    answer: '3年',
    explanation: {
      steps: [
        '妈妈和小红的年龄差：33 - 9 = 24（岁）',
        '当妈妈是小红5倍时，妈妈比小红多4倍',
        '那时小红的年龄：24 ÷ 4 = 6（岁）',
        '9 - 6 = 3（年）'
      ],
      animationType: 'age-past'
    }
  },
  // 差倍问题
  {
    id: 11,
    categoryId: 'difference-multiple',
    title: '差倍问题一',
    difficulty: 'medium',
    question: '甲、乙两数，甲数是乙数的4倍，甲数比乙数大18。甲、乙两数各是多少？',
    answer: '甲24，乙6',
    explanation: {
      steps: [
        '甲是乙的4倍，甲比乙多3倍',
        '多出的3倍就是18',
        '乙数：18 ÷ 3 = 6',
        '甲数：6 × 4 = 24'
      ],
      animationType: 'difference-multiple'
    }
  },
  {
    id: 12,
    categoryId: 'difference-multiple',
    title: '差倍问题二',
    difficulty: 'medium',
    question: '大筐苹果比小筐多24个，大筐苹果数是小筐的3倍。两筐各有多少个苹果？',
    answer: '大筐36个，小筐12个',
    explanation: {
      steps: [
        '大筐是小筐的3倍，大筐比小筐多2倍',
        '多出的2倍就是24个',
        '小筐：24 ÷ 2 = 12（个）',
        '大筐：12 × 3 = 36（个）'
      ],
      animationType: 'difference-multiple'
    }
  },
  {
    id: 13,
    categoryId: 'difference-multiple',
    title: '差倍问题三',
    difficulty: 'hard',
    question: '长方形的长是宽的3倍，长比宽多16厘米。这个长方形的长和宽各是多少？',
    answer: '长24厘米，宽8厘米',
    explanation: {
      steps: [
        '长是宽的3倍，长比宽多2倍',
        '多出的2倍就是16厘米',
        '宽：16 ÷ 2 = 8（厘米）',
        '长：8 × 3 = 24（厘米）'
      ],
      animationType: 'difference-multiple'
    }
  },
  {
    id: 14,
    categoryId: 'difference-multiple',
    title: '差倍问题四',
    difficulty: 'hard',
    question: 'A、B两个数，A是B的5倍，A比B大36。A、B各是多少？',
    answer: 'A是45，B是9',
    explanation: {
      steps: [
        'A是B的5倍，A比B多4倍',
        '多出的4倍就是36',
        'B：36 ÷ 4 = 9',
        'A：9 × 5 = 45'
      ],
      animationType: 'difference-multiple'
    }
  },
  {
    id: 15,
    categoryId: 'difference-multiple',
    title: '差倍问题五',
    difficulty: 'medium',
    question: '哥哥比弟弟多18元，哥哥的钱是弟弟的4倍。哥哥和弟弟各有多少钱？',
    answer: '哥哥24元，弟弟6元',
    explanation: {
      steps: [
        '哥哥是弟弟的4倍，哥哥比弟弟多3倍',
        '多出的3倍就是18元',
        '弟弟：18 ÷ 3 = 6（元）',
        '哥哥：6 × 4 = 24（元）'
      ],
      animationType: 'difference-multiple'
    }
  },
  // 鸡兔同笼
  {
    id: 16,
    categoryId: 'chicken-rabbit',
    title: '鸡兔同笼一',
    difficulty: 'medium',
    question: '笼子里有鸡和兔共8只，腿共22条。鸡和兔各有多少只？',
    answer: '鸡5只，兔3只',
    explanation: {
      steps: [
        '假设8只全是鸡，那么腿有：8 × 2 = 16（条）',
        '实际有22条腿，少了：22 - 16 = 6（条）',
        '每把一只鸡换成兔，多2条腿',
        '兔：6 ÷ 2 = 3（只），鸡：8 - 3 = 5（只）'
      ],
      animationType: 'chicken-rabbit'
    }
  },
  {
    id: 17,
    categoryId: 'chicken-rabbit',
    title: '鸡兔同笼二',
    difficulty: 'medium',
    question: '停车场里有汽车和摩托车共10辆，轮子共32个。汽车和摩托车各有多少辆？',
    answer: '汽车6辆，摩托车4辆',
    explanation: {
      steps: [
        '假设10辆全是摩托车，轮子有：10 × 2 = 20（个）',
        '实际有32个轮子，少了：32 - 20 = 12（个）',
        '每把一辆摩托车换成汽车，多2个轮子',
        '汽车：12 ÷ 2 = 6（辆），摩托车：10 - 6 = 4（辆）'
      ],
      animationType: 'chicken-rabbit'
    }
  },
  {
    id: 18,
    categoryId: 'chicken-rabbit',
    title: '鸡兔同笼三',
    difficulty: 'hard',
    question: '鸡兔同笼，鸡比兔多3只，共有腿36条。鸡和兔各有多少只？',
    answer: '鸡8只，兔5只',
    explanation: {
      steps: [
        '鸡比兔多3只，先去掉3只鸡，腿剩下：36 - 3 × 2 = 30（条）',
        '现在鸡和兔数量相同，把一只鸡和一只兔看成一组，每组6条腿',
        '30条腿可以分成：30 ÷ 6 = 5（组）',
        '所以兔有5只，鸡有 5 + 3 = 8（只）',
        '验证：5×4 + 8×2 = 20 + 16 = 36（条），正确！'
      ],
      animationType: 'chicken-rabbit-advanced'
    }
  },
  {
    id: 19,
    categoryId: 'chicken-rabbit',
    title: '鸡兔同笼四',
    difficulty: 'medium',
    question: '鸡兔同笼，头共12个，脚共34只。鸡和兔各有多少只？',
    answer: '鸡7只，兔5只',
    explanation: {
      steps: [
        '假设12只全是鸡，脚有：12 × 2 = 24（只）',
        '实际有34只脚，少了：34 - 24 = 10（只）',
        '每把一只鸡换成兔，多2只脚',
        '兔：10 ÷ 2 = 5（只），鸡：12 - 5 = 7（只）'
      ],
      animationType: 'chicken-rabbit'
    }
  },
  {
    id: 20,
    categoryId: 'chicken-rabbit',
    title: '鸡兔同笼五',
    difficulty: 'hard',
    question: '买5角和8角的邮票共20张，一共花了13元。5角和8角的邮票各买了多少张？',
    answer: '5角10张，8角10张',
    explanation: {
      steps: [
        '13元 = 130角',
        '假设20张全是5角，共：20 × 5 = 100（角）',
        '实际130角，少了：130 - 100 = 30（角）',
        '每把一张5角换成8角，多3角',
        '8角邮票：30 ÷ 3 = 10（张）',
        '5角邮票：20 - 10 = 10（张）'
      ],
      animationType: 'chicken-rabbit-stamp'
    }
  },
  // 和差问题
  {
    id: 21,
    categoryId: 'sum-difference',
    title: '和差问题一',
    difficulty: 'medium',
    question: '小明和小红共有邮票36张，小明比小红多8张。两人各有多少张邮票？',
    answer: '小明22张，小红14张',
    explanation: {
      steps: [
        '如果给小红补上8张，两人就一样多',
        '此时总数：36 + 8 = 44（张）',
        '小明：44 ÷ 2 = 22（张）',
        '小红：22 - 8 = 14（张）'
      ],
      animationType: 'sum-difference'
    }
  },
  {
    id: 22,
    categoryId: 'sum-difference',
    title: '和差问题二',
    difficulty: 'medium',
    question: '一个长方形的长和宽共18厘米，长比宽多4厘米。长和宽各是多少？',
    answer: '长11厘米，宽7厘米',
    explanation: {
      steps: [
        '长 + 宽 = 18，长 - 宽 = 4',
        '长 = (18 + 4) ÷ 2 = 11（厘米）',
        '宽 = 18 - 11 = 7（厘米）'
      ],
      animationType: 'sum-difference'
    }
  },
  {
    id: 23,
    categoryId: 'sum-difference',
    title: '和差问题三',
    difficulty: 'hard',
    question: '甲乙两数之和是50，甲数比乙数大14。甲、乙两数各是多少？',
    answer: '甲32，乙18',
    explanation: {
      steps: [
        '甲 + 乙 = 50，甲 - 乙 = 14',
        '甲 = (50 + 14) ÷ 2 = 32',
        '乙 = 50 - 32 = 18'
      ],
      animationType: 'sum-difference'
    }
  },
  {
    id: 24,
    categoryId: 'sum-difference',
    title: '和差问题四',
    difficulty: 'hard',
    question: '两筐苹果共重60千克，从大筐拿出5千克放入小筐后，两筐一样重。原来两筐各重多少千克？',
    answer: '大筐35千克，小筐25千克',
    explanation: {
      steps: [
        '大筐比小筐多：5 × 2 = 10（千克）',
        '大筐 + 小筐 = 60',
        '大筐 = (60 + 10) ÷ 2 = 35（千克）',
        '小筐 = 60 - 35 = 25（千克）'
      ],
      animationType: 'sum-difference'
    }
  },
  {
    id: 25,
    categoryId: 'sum-difference',
    title: '和差问题五',
    difficulty: 'medium',
    question: '哥哥和弟弟共有零花钱48元，哥哥比弟弟多12元。哥哥和弟弟各有多少元？',
    answer: '哥哥30元，弟弟18元',
    explanation: {
      steps: [
        '哥哥 + 弟弟 = 48，哥哥 - 弟弟 = 12',
        '哥哥 = (48 + 12) ÷ 2 = 30（元）',
        '弟弟 = 48 - 30 = 18（元）'
      ],
      animationType: 'sum-difference'
    }
  },
  // 和倍问题
  {
    id: 26,
    categoryId: 'multiple-ratio',
    title: '和倍问题一',
    difficulty: 'medium',
    question: '甲、乙两数之和是36，甲数是乙数的3倍。甲、乙两数各是多少？',
    answer: '甲27，乙9',
    explanation: {
      steps: [
        '甲是乙的3倍，把乙看成1份，甲就是3份',
        '一共是：1 + 3 = 4（份）',
        '乙：36 ÷ 4 = 9',
        '甲：9 × 3 = 27'
      ],
      animationType: 'multiple-ratio'
    }
  },
  {
    id: 27,
    categoryId: 'multiple-ratio',
    title: '和倍问题二',
    difficulty: 'medium',
    question: '果园里有苹果树和梨树共48棵，苹果树是梨树的2倍。两种树各有多少棵？',
    answer: '苹果树32棵，梨树16棵',
    explanation: {
      steps: [
        '梨树是1份，苹果树是2份',
        '一共是：1 + 2 = 3（份）',
        '梨树：48 ÷ 3 = 16（棵）',
        '苹果树：16 × 2 = 32（棵）'
      ],
      animationType: 'multiple-ratio'
    }
  },
  {
    id: 28,
    categoryId: 'multiple-ratio',
    title: '和倍问题三',
    difficulty: 'hard',
    question: '小红和小明共有图书54本，小红的图书比小明的2倍多3本。两人各有多少本？',
    answer: '小红37本，小明17本',
    explanation: {
      steps: [
        '如果小红少3本，就正好是小明的2倍',
        '此时总数：54 - 3 = 51（本）',
        '小明是1份，小红是2份，共3份',
        '小明：51 ÷ 3 = 17（本）',
        '小红：17 × 2 + 3 = 37（本）'
      ],
      animationType: 'multiple-ratio'
    }
  },
  {
    id: 29,
    categoryId: 'multiple-ratio',
    title: '和倍问题四',
    difficulty: 'hard',
    question: '一个长方形的周长是36厘米，长是宽的2倍。长和宽各是多少？',
    answer: '长12厘米，宽6厘米',
    explanation: {
      steps: [
        '周长 = 2 × (长 + 宽)，所以长 + 宽 = 36 ÷ 2 = 18（厘米）',
        '长是宽的2倍，宽是1份，长是2份',
        '宽：18 ÷ 3 = 6（厘米）',
        '长：6 × 2 = 12（厘米）'
      ],
      animationType: 'multiple-ratio'
    }
  },
  {
    id: 30,
    categoryId: 'multiple-ratio',
    title: '和倍问题五',
    difficulty: 'medium',
    question: '甲乙两数之和是45，甲数是乙数的4倍。甲、乙两数各是多少？',
    answer: '甲36，乙9',
    explanation: {
      steps: [
        '乙是1份，甲是4份',
        '一共是：1 + 4 = 5（份）',
        '乙：45 ÷ 5 = 9',
        '甲：9 × 4 = 36'
      ],
      animationType: 'multiple-ratio'
    }
  },
  // 周期问题
  {
    id: 31,
    categoryId: 'period',
    title: '周期问题一',
    difficulty: 'medium',
    question: '一串珠子按"红、黄、蓝、绿"的顺序重复排列，第38颗珠子是什么颜色？',
    answer: '黄色',
    explanation: {
      steps: [
        '每4颗珠子为一组重复：红、黄、蓝、绿',
        '38 ÷ 4 = 9（组）……2（颗）',
        '余数是2，就是每组里的第2颗',
        '所以第38颗是黄色。'
      ],
      animationType: 'period'
    }
  },
  {
    id: 32,
    categoryId: 'period',
    title: '周期问题二',
    difficulty: 'medium',
    question: '彩旗按"3面红旗、2面黄旗"的顺序重复排列，第27面彩旗是什么颜色？',
    answer: '黄色',
    explanation: {
      steps: [
        '每组有：3 + 2 = 5（面），前3面红旗，后2面黄旗',
        '27 ÷ 5 = 5（组）……2（面）',
        '余数是2，就是下一组的第2面',
        '每组第1~3面是红旗，第2面是红旗',
        '所以第27面是红色。'
      ],
      animationType: 'period'
    }
  },
  {
    id: 33,
    categoryId: 'period',
    title: '周期问题三',
    difficulty: 'hard',
    question: '有一列数：2、5、7、2、5、7……重复排列，前30个数的和是多少？',
    answer: '140',
    explanation: {
      steps: [
        '每3个数为一组：2、5、7，每组和是：2 + 5 + 7 = 14',
        '30 ÷ 3 = 10（组），正好整除',
        '总和：14 × 10 = 140',
        '所以前30个数的和是140。'
      ],
      animationType: 'period'
    }
  },
  {
    id: 34,
    categoryId: 'period',
    title: '周期问题四',
    difficulty: 'medium',
    question: '挂彩灯，按"1盏红灯、2盏绿灯、3盏黄灯"重复，第50盏是什么颜色的灯？',
    answer: '绿色',
    explanation: {
      steps: [
        '每组有：1 + 2 + 3 = 6（盏）',
        '50 ÷ 6 = 8（组）……2（盏）',
        '每组第1盏红灯，第2~3盏绿灯，第4~6盏黄灯',
        '余数2对应第2盏，是绿灯',
        '所以第50盏是绿色。'
      ],
      animationType: 'period'
    }
  },
  {
    id: 35,
    categoryId: 'period',
    title: '周期问题五',
    difficulty: 'hard',
    question: '同学们排队报数，按"1、2、3、4"循环报数，第23名同学报几？',
    answer: '3',
    explanation: {
      steps: [
        '每4名同学为一组循环：1、2、3、4',
        '23 ÷ 4 = 5（组）……3（名）',
        '余数是3，就是每组里的第3个数',
        '所以第23名同学报3。'
      ],
      animationType: 'period'
    }
  },
  // 归一问题
  {
    id: 36,
    categoryId: 'unit-rate',
    title: '归一问题一',
    difficulty: 'medium',
    question: '3只小猫4天吃12条鱼，照这样计算，1只小猫1天吃几条鱼？',
    answer: '1条',
    explanation: {
      steps: [
        '先算1只小猫4天吃几条：12 ÷ 3 = 4（条）',
        '再算1只小猫1天吃几条：4 ÷ 4 = 1（条）',
        '也可以合并：12 ÷ 3 ÷ 4 = 1（条）',
        '所以1只小猫1天吃1条鱼。'
      ],
      animationType: 'unit-rate'
    }
  },
  {
    id: 37,
    categoryId: 'unit-rate',
    title: '归一问题二',
    difficulty: 'medium',
    question: '5台机器6小时生产90个零件，照这样计算，8台机器1小时生产多少个零件？',
    answer: '24个',
    explanation: {
      steps: [
        '先求1台机器1小时生产多少个：90 ÷ 5 ÷ 6 = 3（个）',
        '再求8台机器1小时生产多少个：3 × 8 = 24（个）',
        '所以8台机器1小时生产24个零件。'
      ],
      animationType: 'unit-rate'
    }
  },
  {
    id: 38,
    categoryId: 'unit-rate',
    title: '归一问题三',
    difficulty: 'medium',
    question: '小明3天做了24道口算题，照这样的速度，做56道口算题需要几天？',
    answer: '7天',
    explanation: {
      steps: [
        '先求1天做几道：24 ÷ 3 = 8（道）',
        '再求做56道需要几天：56 ÷ 8 = 7（天）',
        '所以需要7天。'
      ],
      animationType: 'unit-rate'
    }
  },
  {
    id: 39,
    categoryId: 'unit-rate',
    title: '归一问题四',
    difficulty: 'hard',
    question: '2台织布机3小时织布48米，照这样计算，5台织布机8小时织布多少米？',
    answer: '320米',
    explanation: {
      steps: [
        '先求1台织布机1小时织布多少米：48 ÷ 2 ÷ 3 = 8（米）',
        '再求5台织布机1小时织布：8 × 5 = 40（米）',
        '最后求5台8小时织布：40 × 8 = 320（米）',
        '所以一共织布320米。'
      ],
      animationType: 'unit-rate'
    }
  },
  {
    id: 40,
    categoryId: 'unit-rate',
    title: '归一问题五',
    difficulty: 'hard',
    question: '4辆卡车5次运走120吨货物，照这样计算，3辆同样的卡车运7次，可以运走多少吨货物？',
    answer: '126吨',
    explanation: {
      steps: [
        '先求1辆卡车1次运多少吨：120 ÷ 4 ÷ 5 = 6（吨）',
        '再求3辆卡车1次运多少吨：6 × 3 = 18（吨）',
        '最后求3辆7次运多少吨：18 × 7 = 126（吨）',
        '所以可以运走126吨货物。'
      ],
      animationType: 'unit-rate'
    }
  },
  // 还原问题
  {
    id: 41,
    categoryId: 'reverse',
    title: '还原问题一',
    difficulty: 'medium',
    question: '一个数加上6，乘3，减去9，最后结果是24。这个数原来是多少？',
    answer: '5',
    explanation: {
      steps: [
        '倒着推回去，每一步都用相反的运算',
        '减去9之前：24 + 9 = 33',
        '乘3之前：33 ÷ 3 = 11',
        '加上6之前：11 - 6 = 5',
        '所以这个数原来是5。'
      ],
      animationType: 'reverse'
    }
  },
  {
    id: 42,
    categoryId: 'reverse',
    title: '还原问题二',
    difficulty: 'medium',
    question: '小明拿压岁钱，先花了一半，又花了15元，还剩25元。小明原来有多少元压岁钱？',
    answer: '80元',
    explanation: {
      steps: [
        '倒着推：花15元之前有：25 + 15 = 40（元）',
        '这40元正好是原来的一半',
        '原来有：40 × 2 = 80（元）',
        '所以小明原来有80元压岁钱。'
      ],
      animationType: 'reverse'
    }
  },
  {
    id: 43,
    categoryId: 'reverse',
    title: '还原问题三',
    difficulty: 'hard',
    question: '一个数先乘4，再加上8，然后除以2，结果是18。这个数原来是多少？',
    answer: '7',
    explanation: {
      steps: [
        '倒着推，每步用相反的运算',
        '除以2之前：18 × 2 = 36',
        '加上8之前：36 - 8 = 28',
        '乘4之前：28 ÷ 4 = 7',
        '所以这个数原来是7。'
      ],
      animationType: 'reverse'
    }
  },
  {
    id: 44,
    categoryId: 'reverse',
    title: '还原问题四',
    difficulty: 'hard',
    question: '一筐苹果，第一次卖出总数的一半，第二次卖出25个，这时还剩15个。这筐苹果原来有多少个？',
    answer: '80个',
    explanation: {
      steps: [
        '倒着推：第二次卖出之前有：15 + 25 = 40（个）',
        '这40个是第一次卖出后剩下的，正好是总数的一半',
        '总数：40 × 2 = 80（个）',
        '所以这筐苹果原来有80个。'
      ],
      animationType: 'reverse'
    }
  },
  {
    id: 45,
    categoryId: 'reverse',
    title: '还原问题五',
    difficulty: 'medium',
    question: '小红的年龄加上5，再乘2，然后减去10，结果是16岁。小红今年多少岁？',
    answer: '8岁',
    explanation: {
      steps: [
        '倒着推：减去10之前：16 + 10 = 26（岁）',
        '乘2之前：26 ÷ 2 = 13（岁）',
        '加上5之前：13 - 5 = 8（岁）',
        '所以小红今年8岁。'
      ],
      animationType: 'reverse'
    }
  },
  // 盈亏问题
  {
    id: 46,
    categoryId: 'profit-loss',
    title: '盈亏问题一',
    difficulty: 'medium',
    question: '小朋友分苹果，每人分3个就多出6个，每人分4个就少2个。有多少个小朋友？一共有多少个苹果？',
    answer: '8个小朋友，30个苹果',
    explanation: {
      steps: [
        '每人多分1个（从3个变成4个），苹果就从多6个变成少2个',
        '相差：6 + 2 = 8（个）',
        '每人多分1个，需要8个苹果，所以有：8 ÷ 1 = 8（个）小朋友',
        '苹果数：3 × 8 + 6 = 30（个）',
        '验算：4 × 8 - 2 = 30（个）✓'
      ],
      animationType: 'profit-loss'
    }
  },
  {
    id: 47,
    categoryId: 'profit-loss',
    title: '盈亏问题二',
    difficulty: 'medium',
    question: '同学们划船，每条船坐4人就多出2人，每条船坐5人就少4人。有多少条船？多少名同学？',
    answer: '6条船，26名同学',
    explanation: {
      steps: [
        '每条船多坐1人（从4人到5人），人数从多2人变成少4人',
        '相差：2 + 4 = 6（人）',
        '每条船多坐1人需要6人，所以有6条船',
        '同学数：4 × 6 + 2 = 26（名）',
        '验算：5 × 6 - 4 = 26（名）✓'
      ],
      animationType: 'profit-loss'
    }
  },
  {
    id: 48,
    categoryId: 'profit-loss',
    title: '盈亏问题三',
    difficulty: 'hard',
    question: '老师给小朋友发糖果，每人发5颗就多出10颗，每人发7颗就少6颗。有多少个小朋友？多少颗糖果？',
    answer: '8个小朋友，50颗糖果',
    explanation: {
      steps: [
        '每人多发2颗（从5颗到7颗），糖果从多10颗变成少6颗',
        '相差：10 + 6 = 16（颗）',
        '每人多发2颗需要16颗，所以有：16 ÷ 2 = 8（个）小朋友',
        '糖果数：5 × 8 + 10 = 50（颗）',
        '验算：7 × 8 - 6 = 50（颗）✓'
      ],
      animationType: 'profit-loss'
    }
  },
  {
    id: 49,
    categoryId: 'profit-loss',
    title: '盈亏问题四',
    difficulty: 'hard',
    question: '用绳子测井深，绳子对折后垂到井底，井外还多8米；绳子三折后垂到井底，井外还多2米。井深多少米？',
    answer: '井深10米',
    explanation: {
      steps: [
        '对折时绳子总长的一半比井深多8米；三折时总长的三分之一比井深多2米',
        '绳子总长比2个井深多：8 × 2 = 16（米）',
        '绳子总长比3个井深多：2 × 3 = 6（米）',
        '1个井深就是：16 - 6 = 10（米）',
        '所以井深10米（绳长36米）。'
      ],
      animationType: 'profit-loss'
    }
  },
  {
    id: 50,
    categoryId: 'profit-loss',
    title: '盈亏问题五',
    difficulty: 'medium',
    question: '同学们排队做操，每行站6人就多3人，每行站8人就少5人。有多少行？多少名同学？',
    answer: '4行，27名同学',
    explanation: {
      steps: [
        '每行多站2人（从6人到8人），人数从多3人变成少5人',
        '相差：3 + 5 = 8（人）',
        '每行多站2人需要8人，所以有：8 ÷ 2 = 4（行）',
        '同学数：6 × 4 + 3 = 27（名）',
        '验算：8 × 4 - 5 = 27（名）✓'
      ],
      animationType: 'profit-loss'
    }
  },
  // 重叠问题
  {
    id: 51,
    categoryId: 'overlap',
    title: '重叠问题一',
    difficulty: 'medium',
    question: '两块木板各长40厘米，钉在一起后总长70厘米。重叠部分长多少厘米？',
    answer: '10厘米',
    explanation: {
      steps: [
        '两块木板不重叠时总长：40 + 40 = 80（厘米）',
        '钉在一起后只有70厘米',
        '短了：80 - 70 = 10（厘米）',
        '短的部分就是重叠的部分：10厘米。'
      ],
      animationType: 'overlap'
    }
  },
  {
    id: 52,
    categoryId: 'overlap',
    title: '重叠问题二',
    difficulty: 'medium',
    question: '三（1）班有30人，参加美术班的有18人，参加音乐班的有15人，两项都参加的有8人。两项都没参加的有多少人？',
    answer: '5人',
    explanation: {
      steps: [
        '参加兴趣班的人数 = 美术 + 音乐 - 都参加（重叠部分）',
        '参加人数：18 + 15 - 8 = 25（人）',
        '全班30人，没参加的：30 - 25 = 5（人）',
        '所以两项都没参加的有5人。'
      ],
      animationType: 'overlap'
    }
  },
  {
    id: 53,
    categoryId: 'overlap',
    title: '重叠问题三',
    difficulty: 'hard',
    question: '把两根各长25厘米的纸条粘成一根长45厘米的纸条，中间重叠部分长多少厘米？',
    answer: '5厘米',
    explanation: {
      steps: [
        '不重叠时总长：25 + 25 = 50（厘米）',
        '粘好后只有45厘米',
        '短了：50 - 45 = 5（厘米）',
        '所以重叠部分长5厘米。'
      ],
      animationType: 'overlap'
    }
  },
  {
    id: 54,
    categoryId: 'overlap',
    title: '重叠问题四',
    difficulty: 'hard',
    question: '全班40人，会游泳的有25人，会骑自行车的有28人，两样都会的有17人。两样都不会的有多少人？',
    answer: '4人',
    explanation: {
      steps: [
        '会游泳或会骑车的人数 = 25 + 28 - 17 = 36（人）',
        '为什么要减17？因为两样都会的人被数了两次，要减去一次',
        '都不会的：40 - 36 = 4（人）',
        '所以两样都不会的有4人。'
      ],
      animationType: 'overlap'
    }
  },
  {
    id: 55,
    categoryId: 'overlap',
    title: '重叠问题五',
    difficulty: 'medium',
    question: '同学们站成一排，从左数小明排第8，从右数小明排第9。这一排一共有多少人？',
    answer: '16人',
    explanation: {
      steps: [
        '从左数第8，从右数第9',
        '小明被数了两次：8 + 9 = 17（人）',
        '要减去重复数的一次：17 - 1 = 16（人）',
        '所以这一排一共有16人。'
      ],
      animationType: 'overlap'
    }
  },
  // 等量代换
  {
    id: 56,
    categoryId: 'substitution',
    title: '等量代换一',
    difficulty: 'medium',
    question: '1只羊可以换2只兔，1只兔可以换3只鸡。1只羊可以换几只鸡？',
    answer: '6只',
    explanation: {
      steps: [
        '1只羊 = 2只兔',
        '2只兔 = 2 × 3 = 6只鸡',
        '把羊换成兔，再把兔换成鸡',
        '所以1只羊 = 6只鸡。'
      ],
      animationType: 'substitution'
    }
  },
  {
    id: 57,
    categoryId: 'substitution',
    title: '等量代换二',
    difficulty: 'medium',
    question: '已知：○ + ○ = △ + △ + △，△ + △ = 12。○等于多少？',
    answer: '9',
    explanation: {
      steps: [
        '先求△：△ + △ = 12，所以△ = 6',
        '再算3个△：6 + 6 + 6 = 18',
        '○ + ○ = 18，所以○ = 9',
        '答案是9。'
      ],
      animationType: 'substitution'
    }
  },
  {
    id: 58,
    categoryId: 'substitution',
    title: '等量代换三',
    difficulty: 'hard',
    question: '1个西瓜的质量等于4个菠萝，1个菠萝的质量等于3个苹果。1个西瓜的质量等于几个苹果？',
    answer: '12个',
    explanation: {
      steps: [
        '1个西瓜 = 4个菠萝',
        '4个菠萝 = 4 × 3 = 12个苹果',
        '把西瓜先换成菠萝，再把菠萝换成苹果',
        '所以1个西瓜 = 12个苹果。'
      ],
      animationType: 'substitution'
    }
  },
  {
    id: 59,
    categoryId: 'substitution',
    title: '等量代换四',
    difficulty: 'hard',
    question: '已知：苹果 + 梨 = 250克，苹果 + 苹果 + 梨 = 400克。苹果重多少克？梨重多少克？',
    answer: '苹果150克，梨100克',
    explanation: {
      steps: [
        '对比两组：第二组比第一组多了1个苹果',
        '质量多了：400 - 250 = 150（克）',
        '所以1个苹果 = 150克',
        '梨 = 250 - 150 = 100（克）',
        '验算：150 + 100 = 250 ✓'
      ],
      animationType: 'substitution'
    }
  },
  {
    id: 60,
    categoryId: 'substitution',
    title: '等量代换五',
    difficulty: 'medium',
    question: '2支钢笔的价钱等于6支铅笔，1支钢笔9元。1支铅笔多少元？',
    answer: '3元',
    explanation: {
      steps: [
        '2支钢笔：9 × 2 = 18（元）',
        '这18元等于6支铅笔的价钱',
        '1支铅笔：18 ÷ 6 = 3（元）',
        '所以1支铅笔3元。'
      ],
      animationType: 'substitution'
    }
  },
  // 爬楼梯与锯木头
  {
    id: 61,
    categoryId: 'stairs',
    title: '锯木头问题',
    difficulty: 'medium',
    question: '把一根木头锯成4段需要6分钟，照这样计算，锯成7段需要多少分钟？',
    answer: '12分钟',
    explanation: {
      steps: [
        '锯成4段需要锯：4 - 1 = 3（次）',
        '每次需要：6 ÷ 3 = 2（分钟）',
        '锯成7段需要锯：7 - 1 = 6（次）',
        '共需：6 × 2 = 12（分钟）',
        '关键：段数比次数多1！'
      ],
      animationType: 'stairs'
    }
  },
  {
    id: 62,
    categoryId: 'stairs',
    title: '爬楼梯问题',
    difficulty: 'medium',
    question: '小明从1楼爬到3楼用了40秒，照这样的速度，从1楼爬到6楼需要多少秒？',
    answer: '100秒',
    explanation: {
      steps: [
        '从1楼到3楼爬了：3 - 1 = 2（层）楼梯',
        '每层用：40 ÷ 2 = 20（秒）',
        '从1楼到6楼要爬：6 - 1 = 5（层）',
        '共需：20 × 5 = 100（秒）',
        '关键：楼层数比爬的层数多1！'
      ],
      animationType: 'stairs'
    }
  },
  {
    id: 63,
    categoryId: 'stairs',
    title: '时钟问题',
    difficulty: 'hard',
    question: '时钟敲3下用4秒，敲6下用多少秒？',
    answer: '10秒',
    explanation: {
      steps: [
        '敲3下，中间有：3 - 1 = 2（个）间隔',
        '每个间隔：4 ÷ 2 = 2（秒）',
        '敲6下，中间有：6 - 1 = 5（个）间隔',
        '共需：2 × 5 = 10（秒）',
        '关键：敲的下数比间隔数多1！'
      ],
      animationType: 'stairs'
    }
  },
  {
    id: 64,
    categoryId: 'stairs',
    title: '锯钢管问题',
    difficulty: 'hard',
    question: '一根钢管锯成5段，一共用了20分钟。如果锯成8段，需要多少分钟？',
    answer: '35分钟',
    explanation: {
      steps: [
        '锯5段需要锯：5 - 1 = 4（次）',
        '每次用：20 ÷ 4 = 5（分钟）',
        '锯8段需要锯：8 - 1 = 7（次）',
        '共需：5 × 7 = 35（分钟）'
      ],
      animationType: 'stairs'
    }
  },
  {
    id: 65,
    categoryId: 'stairs',
    title: '走楼梯比赛',
    difficulty: 'medium',
    question: '小红走2层楼梯用30秒。她从1楼走到7楼，一共需要多少秒？',
    answer: '90秒',
    explanation: {
      steps: [
        '走1层用：30 ÷ 2 = 15（秒）',
        '从1楼到7楼要走：7 - 1 = 6（层）',
        '共需：15 × 6 = 90（秒）',
        '注意：是走到7楼，不是走7层！'
      ],
      animationType: 'stairs'
    }
  },
  // 平均数问题
  {
    id: 66,
    categoryId: 'average',
    title: '平均数问题一',
    difficulty: 'medium',
    question: '小明前3次数学测验的平均分是90分，第4次考多少分才能使4次的平均分达到92分？',
    answer: '98分',
    explanation: {
      steps: [
        '4次总分需要：92 × 4 = 368（分）',
        '前3次总分：90 × 3 = 270（分）',
        '第4次需要考：368 - 270 = 98（分）',
        '所以第4次要考98分。'
      ],
      animationType: 'average'
    }
  },
  {
    id: 67,
    categoryId: 'average',
    title: '平均数问题二',
    difficulty: 'medium',
    question: '小红、小明、小刚三人的平均体重是30千克，小红重28千克，小明重31千克。小刚重多少千克？',
    answer: '31千克',
    explanation: {
      steps: [
        '三人总体重：30 × 3 = 90（千克）',
        '小红和小明共重：28 + 31 = 59（千克）',
        '小刚重：90 - 59 = 31（千克）',
        '所以小刚重31千克。'
      ],
      animationType: 'average'
    }
  },
  {
    id: 68,
    categoryId: 'average',
    title: '平均数问题三',
    difficulty: 'hard',
    question: '有4个数，它们的平均数是25。去掉一个数后，剩下3个数的平均数是23。去掉的那个数是多少？',
    answer: '31',
    explanation: {
      steps: [
        '4个数的总和：25 × 4 = 100',
        '剩下3个数的总和：23 × 3 = 69',
        '去掉的数：100 - 69 = 31',
        '所以去掉的那个数是31。'
      ],
      animationType: 'average'
    }
  },
  {
    id: 69,
    categoryId: 'average',
    title: '平均数问题四',
    difficulty: 'medium',
    question: '小芳读一本书，前4天平均每天读15页，后3天一共读了48页。这一星期平均每天读多少页？',
    answer: '约15.4页（整数算式：总108页÷7天）',
    explanation: {
      steps: [
        '前4天共读：15 × 4 = 60（页）',
        '7天共读：60 + 48 = 108（页）',
        '平均每天：108 ÷ 7 ≈ 15.4（页）',
        '注意：平均数 = 总数 ÷ 份数。'
      ],
      animationType: 'average'
    }
  },
  {
    id: 70,
    categoryId: 'average',
    title: '平均数问题五',
    difficulty: 'hard',
    question: '甲、乙、丙三个数的平均数是20，甲、乙两数的平均数是18，乙、丙两数的平均数是22。乙数是多少？',
    answer: '20',
    explanation: {
      steps: [
        '甲+乙+丙 = 20 × 3 = 60',
        '甲+乙 = 18 × 2 = 36，所以丙 = 60 - 36 = 24',
        '乙+丙 = 22 × 2 = 44，所以乙 = 44 - 24 = 20',
        '验算：甲 = 36 - 20 = 16，16 + 20 + 24 = 60 ✓'
      ],
      animationType: 'average'
    }
  },
  // 数图形问题
  {
    id: 71,
    categoryId: 'counting',
    title: '数线段',
    difficulty: 'medium',
    question: '一条直线上有5个点（包括两个端点），一共能数出多少条线段？',
    answer: '10条',
    explanation: {
      steps: [
        '给5个点标上编号：1、2、3、4、5',
        '从1号点出发：4条（1-2、1-3、1-4、1-5）',
        '从2号点出发：3条（2-3、2-4、2-5）',
        '从3号点出发：2条，从4号点出发：1条',
        '一共：4 + 3 + 2 + 1 = 10（条）'
      ],
      animationType: 'counting'
    }
  },
  {
    id: 72,
    categoryId: 'counting',
    title: '数角',
    difficulty: 'medium',
    question: '从一个顶点出发画4条射线，一共能数出多少个角？',
    answer: '6个',
    explanation: {
      steps: [
        '给4条射线标号：①、②、③、④',
        '单个的小角：3个',
        '由2个小角组成的角：2个',
        '由3个小角组成的角：1个',
        '一共：3 + 2 + 1 = 6（个）'
      ],
      animationType: 'counting'
    }
  },
  {
    id: 73,
    categoryId: 'counting',
    title: '数三角形',
    difficulty: 'hard',
    question: '一个三角形内，从顶点向对边画了2条线，把这个三角形分成了几个小三角形？图中一共有多少个三角形？',
    answer: '分成3个小三角形，共6个三角形',
    explanation: {
      steps: [
        '2条线把底边分成3段，形成3个小三角形',
        '小三角形：3个',
        '由2个小三角形组成的：2个',
        '由3个小三角形组成的（最大的）：1个',
        '一共：3 + 2 + 1 = 6（个）'
      ],
      animationType: 'counting'
    }
  },
  {
    id: 74,
    categoryId: 'counting',
    title: '数长方形',
    difficulty: 'hard',
    question: '一个大长方形被横竖各一条线分成4个小长方形。图中一共有多少个长方形？',
    answer: '9个',
    explanation: {
      steps: [
        '小长方形：4个',
        '由2个小长方形组成的：4个（上下、左右各2个）',
        '由4个小长方形组成的（最大的）：1个',
        '一共：4 + 4 + 1 = 9（个）',
        '秘诀：横向3条线段选2条，纵向3条选2条，3×3=9'
      ],
      animationType: 'counting'
    }
  },
  {
    id: 75,
    categoryId: 'counting',
    title: '数正方形',
    difficulty: 'hard',
    question: '一个"田"字格（2×2的方格），一共有多少个正方形？',
    answer: '5个',
    explanation: {
      steps: [
        '小正方形（1×1）：4个',
        '大正方形（2×2）：1个',
        '一共：4 + 1 = 5（个）',
        '想一想：如果是3×3的方格呢？9+4+1=14个'
      ],
      animationType: 'counting'
    }
  }
]
