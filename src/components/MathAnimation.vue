<template>
  <div class="math-animation">
    <div class="animation-stage" ref="stage">
      <svg :width="width" :height="height" class="animation-svg">
        <!-- 植树问题：两端都种 -->
        <g v-if="animationType === 'tree-planting-both'">
          <rect x="50" y="120" :width="roadLength" height="20" fill="#e8d5b5" rx="4" />
          <g v-for="(tree, index) in treePositions" :key="index">
            <g v-if="currentStep > index" class="pop-in">
              <circle :cx="tree.x" :cy="110" r="12" fill="#2ecc71" />
              <text :x="tree.x" :y="115" text-anchor="middle" fill="white" font-size="10">🌳</text>
            </g>
          </g>
          <text x="50" y="170" font-size="14" fill="#2c3e50">
            间隔数：{{ Math.max(0, currentStep - 1) }}  树：{{ Math.max(0, currentStep) }}
          </text>
        </g>

        <!-- 植树问题：一端种 -->
        <g v-if="animationType === 'tree-planting-one'">
          <rect x="50" y="120" :width="roadLength" height="20" fill="#e8d5b5" rx="4" />
          <g v-for="(tree, index) in treePositionsOne" :key="index">
            <g v-if="currentStep > index" class="pop-in">
              <circle :cx="tree.x" :cy="110" r="12" fill="#2ecc71" />
              <text :x="tree.x" :y="115" text-anchor="middle" fill="white" font-size="10">🌳</text>
            </g>
          </g>
          <text x="50" y="170" font-size="14" fill="#2c3e50">
            间隔数：{{ Math.max(0, currentStep) }}  树：{{ Math.max(0, currentStep) }}
          </text>
        </g>

        <!-- 植树问题：两端都不种 -->
        <g v-if="animationType === 'tree-planting-none'">
          <rect x="50" y="120" :width="roadLength" height="20" fill="#e8d5b5" rx="4" />
          <g v-for="(tree, index) in treePositionsNone" :key="index">
            <g v-if="currentStep > index" class="pop-in">
              <circle :cx="tree.x" :cy="110" r="12" fill="#2ecc71" />
              <text :x="tree.x" :y="115" text-anchor="middle" fill="white" font-size="10">🌳</text>
            </g>
          </g>
          <text x="50" y="170" font-size="14" fill="#2c3e50">
            间隔数：{{ Math.max(0, currentStep + 1) }}  树：{{ Math.max(0, currentStep) }}
          </text>
        </g>

        <!-- 植树问题：求树间距 -->
        <g v-if="animationType === 'tree-planting-distance'">
          <rect x="50" y="120" :width="roadLength" height="20" fill="#e8d5b5" rx="4" />
          <g v-for="(tree, index) in treePositionsDistance" :key="index">
            <g v-if="currentStep > index" class="pop-in">
              <circle :cx="tree.x" :cy="110" r="12" fill="#2ecc71" />
              <text :x="tree.x" :y="115" text-anchor="middle" fill="white" font-size="10">{{ tree.label }}</text>
            </g>
          </g>
          <g v-if="currentStep > 1">
            <line :x1="treePositionsDistance[0].x" y1="150" :x2="treePositionsDistance[treePositionsDistance.length - 1].x" y2="150" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4" />
            <text :x="(treePositionsDistance[0].x + treePositionsDistance[treePositionsDistance.length - 1].x) / 2" y="165" text-anchor="middle" fill="#e74c3c" font-size="12">{{ dynamicDistance }}米</text>
          </g>
        </g>

        <!-- 植树问题：圆形植树 -->
        <g v-if="animationType === 'tree-planting-circle'">
          <circle :cx="width/2" :cy="height/2" :r="circleRadius" fill="none" stroke="#e8d5b5" stroke-width="20" />
          <g v-for="(flower, index) in circleFlowers" :key="index">
            <g v-if="currentStep > index" class="pop-in">
              <circle :cx="flower.x" :cy="flower.y" r="10" fill="#e91e63" />
            </g>
          </g>
          <text x="200" y="220" text-anchor="middle" fill="#2c3e50" font-size="14">圆形封闭：盆数=间隔数</text>
        </g>

        <!-- 年龄问题：年龄差 -->
        <g v-if="animationType === 'age-difference'">
          <rect x="80" y="80" width="60" height="120" fill="#3498db" rx="8" opacity="0.8" />
          <rect x="180" y="40" width="60" height="160" fill="#e91e63" rx="8" opacity="0.8" />
          <text x="110" y="140" text-anchor="middle" fill="white" font-size="14">{{ youngerName }}</text>
          <text x="210" y="140" text-anchor="middle" fill="white" font-size="14">{{ olderName }}</text>
          <text x="110" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ youngerAge }}岁</text>
          <text x="210" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ olderAge }}岁</text>
          <line x1="140" y1="100" x2="180" y2="100" stroke="#f5a623" stroke-width="3" marker-end="url(#arrow)" />
          <text x="160" y="90" text-anchor="middle" fill="#f5a623" font-size="14">差{{ ageDiff }}岁</text>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#f5a623" />
            </marker>
          </defs>
        </g>

        <!-- 年龄问题：年龄倍数 -->
        <g v-if="animationType === 'age-multiple'">
          <g v-for="(bar, index) in ageBars" :key="index">
            <rect v-if="currentStep > index" :x="bar.x" :y="bar.y" :width="bar.width" :height="bar.height" :fill="bar.fill" rx="4" class="grow-up" />
          </g>
          <text x="120" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ youngerName }}</text>
          <text x="280" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ olderName }}</text>
          <text x="200" y="60" text-anchor="middle" fill="#e74c3c" font-size="14">年龄差{{ ageDiff }}岁</text>
        </g>

        <!-- 年龄问题：年龄和 -->
        <g v-if="animationType === 'age-sum'">
          <circle cx="150" cy="120" r="50" fill="#3498db" opacity="0.8" />
          <circle cx="250" cy="120" r="40" fill="#e91e63" opacity="0.8" />
          <text x="150" y="125" text-anchor="middle" fill="white" font-size="14">{{ personA }}{{ ageA }}</text>
          <text x="250" y="125" text-anchor="middle" fill="white" font-size="14">{{ personB }}{{ ageB }}</text>
          <text x="200" y="210" text-anchor="middle" fill="#2c3e50" font-size="14">今年年龄和：{{ ageSum }}岁</text>
        </g>

        <!-- 年龄问题：过去年龄 -->
        <g v-if="animationType === 'age-past'">
          <rect x="100" y="80" width="80" height="100" fill="#3498db" rx="8" opacity="0.8" />
          <rect x="220" y="40" width="80" height="140" fill="#e91e63" rx="8" opacity="0.8" />
          <text x="140" y="130" text-anchor="middle" fill="white" font-size="14">{{ youngerName }}</text>
          <text x="260" y="130" text-anchor="middle" fill="white" font-size="14">{{ olderName }}</text>
          <text x="140" y="190" text-anchor="middle" fill="#2c3e50" font-size="12">{{ youngerAge }}岁</text>
          <text x="260" y="190" text-anchor="middle" fill="#2c3e50" font-size="12">{{ olderAge }}岁</text>
          <text x="200" y="230" text-anchor="middle" fill="#e74c3c" font-size="14">{{ multiple }}倍关系</text>
        </g>

        <!-- 差倍问题 -->
        <g v-if="animationType === 'difference-multiple'">
          <g v-for="(block, index) in diffBlocks" :key="index">
            <rect v-if="currentStep > index" :x="block.x" :y="block.y" :width="block.width" :height="block.height" :fill="block.fill" rx="4" class="pop-in" />
          </g>
          <text x="120" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ smallName }}</text>
          <text x="300" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ largeName }}</text>
          <text x="210" y="60" text-anchor="middle" fill="#e74c3c" font-size="14">{{ largeName }}比{{ smallName }}多{{ diffValue }}</text>
        </g>

        <!-- 鸡兔同笼 -->
        <g v-if="animationType === 'chicken-rabbit'">
          <g v-for="(animal, index) in animals" :key="index">
            <g v-if="currentStep > index" class="pop-in">
              <circle :cx="animal.x" :cy="animal.y" r="25" :fill="animal.type === 'chicken' ? '#f5a623' : '#9b59b6'" />
              <text :x="animal.x" :y="animal.y + 5" text-anchor="middle" font-size="20">{{ animal.type === 'chicken' ? '🐔' : '🐰' }}</text>
            </g>
          </g>
          <text x="200" y="220" text-anchor="middle" fill="#2c3e50" font-size="14">一共{{ totalAnimals }}只</text>
        </g>

        <!-- 鸡兔同笼进阶 -->
        <g v-if="animationType === 'chicken-rabbit-advanced'">
          <g v-for="(animal, index) in animalsAdvanced" :key="index">
            <g v-if="currentStep > index" class="pop-in">
              <circle :cx="animal.x" :cy="animal.y" r="25" :fill="animal.type === 'chicken' ? '#f5a623' : '#9b59b6'" />
              <text :x="animal.x" :y="animal.y + 5" text-anchor="middle" font-size="20">{{ animal.type === 'chicken' ? '🐔' : '🐰' }}</text>
            </g>
          </g>
          <text x="200" y="220" text-anchor="middle" fill="#2c3e50" font-size="14">鸡比兔多{{ chickenMore }}只</text>
        </g>

        <!-- 鸡兔同笼邮票 -->
        <g v-if="animationType === 'chicken-rabbit-stamp'">
          <g v-for="(stamp, index) in stamps" :key="index">
            <g v-if="currentStep > index" class="pop-in">
              <rect :x="stamp.x - 20" :y="stamp.y - 15" width="40" height="30" :fill="stamp.type === 'five' ? '#3498db' : '#e74c3c'" rx="4" />
              <text :x="stamp.x" :y="stamp.y + 5" text-anchor="middle" fill="white" font-size="12">{{ stamp.type === 'five' ? '5角' : '8角' }}</text>
            </g>
          </g>
          <text x="200" y="220" text-anchor="middle" fill="#2c3e50" font-size="14">共{{ totalStamps }}张邮票</text>
        </g>

        <!-- 和差问题 -->
        <g v-if="animationType === 'sum-difference'">
          <g v-for="(bar, index) in sumDiffBars" :key="index">
            <rect v-if="currentStep > index" :x="bar.x" :y="bar.y" :width="bar.width" :height="bar.height" :fill="bar.fill" rx="4" class="grow-up" />
          </g>
          <text x="120" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ smallName }}</text>
          <text x="280" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ largeName }}</text>
          <text x="200" y="60" text-anchor="middle" fill="#e74c3c" font-size="14">相差{{ diffValue }}</text>
        </g>

        <!-- 和倍问题 -->
        <g v-if="animationType === 'multiple-ratio'">
          <g v-for="(block, index) in ratioBlocks" :key="index">
            <rect v-if="currentStep > index" :x="block.x" :y="block.y" :width="block.width" :height="block.height" :fill="block.fill" rx="4" class="pop-in" />
          </g>
          <text x="120" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ smallName }}</text>
          <text x="300" y="210" text-anchor="middle" fill="#2c3e50" font-size="12">{{ largeName }}</text>
          <text x="210" y="60" text-anchor="middle" fill="#e74c3c" font-size="14">和是{{ sumValue }}</text>
        </g>
      </svg>
    </div>
    <div class="step-text">{{ currentStepText }}</div>
    <div class="controls">
      <button @click="prevStep" :disabled="currentStep === 0">上一步</button>
      <button @click="nextStep" :disabled="currentStep >= totalSteps">下一步</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  animationType: {
    type: String,
    default: 'tree-planting-both'
  },
  steps: {
    type: Array,
    default: () => []
  },
  question: {
    type: String,
    default: ''
  },
  answer: {
    type: String,
    default: ''
  }
})

const width = 400
const height = 250
const currentStep = ref(0)
const roadLength = 300
const circleRadius = 80

// 从题目中提取数字
const questionNumbers = computed(() => {
  const matches = props.question.match(/\d+/g)
  return matches ? matches.map(Number) : []
})

const answerNumbers = computed(() => {
  const matches = props.answer.match(/\d+/g)
  return matches ? matches.map(Number) : []
})

// 动态计算植树问题距离
const dynamicDistance = computed(() => {
  // 从题目中提取总距离，默认50
  const match = props.question.match(/(\d+)\s*米/)
  return match ? match[1] : '50'
})

// 动态计算年龄问题人物和数字
const youngerName = computed(() => {
  const match = props.question.match(/(小明|小红|儿子|孙子|妹妹|弟弟)/)
  return match ? match[1] : '小明'
})

const olderName = computed(() => {
  const match = props.question.match(/(妈妈|爸爸|爷爷|姐姐|哥哥)/)
  return match ? match[1] : '妈妈'
})

const youngerAge = computed(() => {
  const match = props.question.match(/(小明|小红|儿子|孙子|妹妹|弟弟).*?(\d+)岁/)
  return match ? match[2] : '8'
})

const olderAge = computed(() => {
  const match = props.question.match(/(妈妈|爸爸|爷爷|姐姐|哥哥).*?(\d+)岁/)
  return match ? match[2] : '32'
})

const ageDiff = computed(() => {
  const young = Number(youngerAge.value)
  const old = Number(olderAge.value)
  return old - young
})

const personA = computed(() => {
  const matches = props.question.match(/(姐姐|妹妹|小红|小明)/g)
  return matches && matches.length > 0 ? matches[0] : '姐姐'
})

const personB = computed(() => {
  const matches = props.question.match(/(姐姐|妹妹|小红|小明)/g)
  return matches && matches.length > 1 ? matches[1] : '妹妹'
})

const ageA = computed(() => {
  const matches = props.question.match(/(\d+)岁/g)
  return matches && matches.length > 0 ? matches[0].replace('岁', '') : '12'
})

const ageB = computed(() => {
  const matches = props.question.match(/(\d+)岁/g)
  return matches && matches.length > 1 ? matches[1].replace('岁', '') : '6'
})

const ageSum = computed(() => {
  return Number(ageA.value) + Number(ageB.value)
})

const multiple = computed(() => {
  const match = props.question.match(/(\d+)倍/)
  return match ? match[1] : '5'
})

// 差倍/和差/和倍问题动态名称和数值
const smallName = computed(() => {
  if (props.question.includes('乙')) return '乙数'
  if (props.question.includes('小筐')) return '小筐'
  if (props.question.includes('宽')) return '宽'
  if (props.question.includes('B')) return 'B'
  if (props.question.includes('弟弟')) return '弟弟'
  if (props.question.includes('小红')) return '小红'
  if (props.question.includes('小明')) return '小明'
  return '较小数'
})

const largeName = computed(() => {
  if (props.question.includes('甲')) return '甲数'
  if (props.question.includes('大筐')) return '大筐'
  if (props.question.includes('长')) return '长'
  if (props.question.includes('A')) return 'A'
  if (props.question.includes('哥哥')) return '哥哥'
  if (props.question.includes('小明')) return '小明'
  if (props.question.includes('小红')) return '小红'
  return '较大数'
})

const diffValue = computed(() => {
  const match = props.question.match(/多(\d+)|大(\d+)|相差(\d+)/)
  if (match) {
    return match[1] || match[2] || match[3]
  }
  return '8'
})

const sumValue = computed(() => {
  const match = props.question.match(/和是(\d+)|共(\d+)|周长是(\d+)/)
  if (match) {
    return match[1] || match[2] || match[3]
  }
  return '36'
})

// 鸡兔同笼动态数量
const totalAnimals = computed(() => {
  const match = props.question.match(/共(\d+)只|共(\d+)辆/)
  return match ? (match[1] || match[2]) : '8'
})

const chickenMore = computed(() => {
  const match = props.question.match(/多(\d+)只/)
  return match ? match[1] : '3'
})

const totalStamps = computed(() => {
  const match = props.question.match(/共(\d+)张/)
  return match ? match[1] : '20'
})

const treePositions = computed(() => {
  const positions = []
  for (let i = 0; i <= 5; i++) {
    positions.push({ x: 50 + (i * roadLength) / 5, label: `第${i + 1}棵` })
  }
  return positions
})

const treePositionsOne = computed(() => {
  const positions = []
  for (let i = 0; i < 6; i++) {
    positions.push({ x: 50 + (i * roadLength) / 5, label: `第${i + 1}棵` })
  }
  return positions
})

const treePositionsNone = computed(() => {
  const positions = []
  for (let i = 1; i < 8; i++) {
    positions.push({ x: 50 + (i * roadLength) / 8, label: `第${i}棵` })
  }
  return positions
})

const treePositionsDistance = computed(() => {
  const positions = []
  for (let i = 0; i <= 5; i++) {
    positions.push({ x: 50 + (i * roadLength) / 5, label: `第${i + 1}棵` })
  }
  return positions
})

const circleFlowers = computed(() => {
  const flowers = []
  for (let i = 0; i < 9; i++) {
    const angle = (i * 2 * Math.PI) / 9 - Math.PI / 2
    flowers.push({
      x: width / 2 + circleRadius * Math.cos(angle),
      y: height / 2 + circleRadius * Math.sin(angle)
    })
  }
  return flowers
})

const ageBars = computed(() => [
  { x: 80, y: 150, width: 60, height: 80, fill: '#3498db' },
  { x: 250, y: 70, width: 60, height: 160, fill: '#e91e63' }
])

const diffBlocks = computed(() => {
  const base = [
    { x: 80, y: 120, width: 80, height: 80, fill: '#3498db' },
    { x: 180, y: 120, width: 80, height: 80, fill: '#3498db' },
    { x: 280, y: 120, width: 80, height: 80, fill: '#3498db' },
    { x: 380, y: 120, width: 80, height: 80, fill: '#3498db' }
  ]
  return base
})

const animals = computed(() => {
  const list = []
  for (let i = 0; i < 8; i++) {
    list.push({
      x: 80 + (i % 4) * 80,
      y: 80 + Math.floor(i / 4) * 80,
      type: i < 5 ? 'chicken' : 'rabbit'
    })
  }
  return list
})

const animalsAdvanced = computed(() => {
  const list = []
  for (let i = 0; i < 13; i++) {
    list.push({
      x: 60 + (i % 5) * 70,
      y: 80 + Math.floor(i / 5) * 80,
      type: i < 8 ? 'chicken' : 'rabbit'
    })
  }
  return list
})

const stamps = computed(() => {
  const list = []
  for (let i = 0; i < 20; i++) {
    list.push({
      x: 60 + (i % 5) * 70,
      y: 80 + Math.floor(i / 5) * 50,
      type: i < 12 ? 'five' : 'eight'
    })
  }
  return list
})

const sumDiffBars = computed(() => [
  { x: 80, y: 120, width: 80, height: 80, fill: '#3498db' },
  { x: 180, y: 80, width: 80, height: 120, fill: '#e91e63' }
])

const ratioBlocks = computed(() => [
  { x: 80, y: 120, width: 80, height: 80, fill: '#3498db' },
  { x: 180, y: 120, width: 80, height: 80, fill: '#3498db' },
  { x: 280, y: 120, width: 80, height: 80, fill: '#3498db' },
  { x: 380, y: 120, width: 80, height: 80, fill: '#3498db' }
])

const totalSteps = computed(() => props.steps.length)

const currentStepText = computed(() => {
  if (currentStep.value === 0) return '点击"下一步"开始动画讲解'
  return props.steps[currentStep.value - 1] || ''
})

const nextStep = () => {
  if (currentStep.value < totalSteps.value) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

watch(() => props.animationType, () => {
  currentStep.value = 0
})

watch(() => props.steps, () => {
  currentStep.value = 0
})
</script>

<style scoped>
.math-animation {
  width: 100%;
}

.animation-stage {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 20px;
  min-height: 280px;
}

.animation-svg {
  max-width: 100%;
  height: auto;
}

.pop-in {
  animation: popIn 0.4s ease forwards;
}

.grow-up {
  animation: growUp 0.5s ease forwards;
  transform-origin: bottom;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes growUp {
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
