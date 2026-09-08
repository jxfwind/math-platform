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
  }
]
