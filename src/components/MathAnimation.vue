<template>
  <div class="math-animation">
    <div class="animation-stage" ref="stage">
      <svg :width="width" :height="height" class="animation-svg" ref="svgRef">
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#f5a623" />
          </marker>
          <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#e74c3c" />
          </marker>
        </defs>
        <g class="grid-lines" opacity="0.08">
          <line v-for="i in 10" :key="'h'+i" x1="0" :y1="i * 25" x2="400" :y2="i * 25" stroke="#ccc" stroke-width="1" />
          <line v-for="i in 16" :key="'v'+i" :x1="i * 25" y1="0" :x2="i * 25" y2="250" stroke="#ccc" stroke-width="1" />
        </g>

        <g v-if="animationType === 'tree-planting-both'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">两端都种树</text>
          <rect class="road" x="50" y="120" :width="roadLength" height="20" fill="#e8d5b5" rx="4" />
          <g class="intervals"></g><g class="trees"></g><g class="labels"></g>
        </g>

        <g v-if="animationType === 'tree-planting-one'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">一端种树</text>
          <rect class="road" x="50" y="120" :width="roadLength" height="20" fill="#e8d5b5" rx="4" />
          <g class="intervals"></g><g class="trees"></g><g class="labels"></g>
        </g>

        <g v-if="animationType === 'tree-planting-none'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">两端都不种树</text>
          <rect class="road" x="50" y="120" :width="roadLength" height="20" fill="#e8d5b5" rx="4" />
          <g class="intervals"></g><g class="trees"></g><g class="labels"></g>
        </g>

        <g v-if="animationType === 'tree-planting-distance'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">求树间距</text>
          <rect class="road" x="50" y="120" :width="roadLength" height="20" fill="#e8d5b5" rx="4" />
          <g class="trees"></g><g class="distance-line"></g><g class="labels"></g>
        </g>

        <g v-if="animationType === 'tree-planting-circle'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">圆形花坛摆花</text>
          <circle class="circle-road" :cx="width/2" :cy="height/2" :r="circleRadius" fill="none" stroke="#e8d5b5" stroke-width="20" />
          <g class="flowers"></g><g class="labels"></g>
        </g>

        <g v-if="animationType === 'age-difference'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">年龄差不变</text>
          <g class="age-bars"></g><g class="age-labels"></g><g class="diff-arrow"></g>
        </g>

        <g v-if="animationType === 'age-multiple'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">年龄倍数关系</text>
          <g class="age-bars"></g><g class="age-labels"></g>
        </g>

        <g v-if="animationType === 'age-sum'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">年龄和</text>
          <g class="age-circles"></g><g class="age-labels"></g>
        </g>

        <g v-if="animationType === 'age-past'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">几年前/后的年龄</text>
          <g class="age-bars"></g><g class="age-labels"></g>
        </g>

        <g v-if="animationType === 'difference-multiple'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">差倍问题</text>
          <g class="line-segments"></g><g class="segment-labels"></g>
        </g>

        <g v-if="animationType === 'chicken-rabbit'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">鸡兔同笼</text>
          <g class="cage"></g><g class="animals"></g><g class="animal-labels"></g>
        </g>

        <g v-if="animationType === 'chicken-rabbit-advanced'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">鸡兔同笼（鸡比兔多）</text>
          <g class="cage"></g><g class="animals"></g><g class="animal-labels"></g>
        </g>

        <g v-if="animationType === 'chicken-rabbit-stamp'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">邮票问题</text>
          <g class="stamps"></g><g class="stamp-labels"></g>
        </g>

        <g v-if="animationType === 'sum-difference'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">和差问题</text>
          <g class="line-segments"></g><g class="segment-labels"></g>
        </g>

        <g v-if="animationType === 'multiple-ratio'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">和倍问题</text>
          <g class="line-segments"></g><g class="segment-labels"></g>
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
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  animationType: { type: String, default: 'tree-planting-both' },
  steps: { type: Array, default: () => [] },
  question: { type: String, default: '' },
  answer: { type: String, default: '' }
})

const width = 400
const height = 250
const currentStep = ref(0)
const roadLength = 300
const circleRadius = 80
const svgRef = ref(null)

const totalSteps = computed(() => props.steps.length)
const currentStepText = computed(() => {
  if (currentStep.value === 0) return '点击"下一步"开始动画讲解'
  return props.steps[currentStep.value - 1] || ''
})

const nextStep = () => { if (currentStep.value < totalSteps.value) currentStep.value++ }
const prevStep = () => { if (currentStep.value > 0) currentStep.value-- }

const extractNumbers = (str) => {
  const matches = str.match(/\d+/g)
  return matches ? matches.map(Number) : []
}

const parseQuestion = () => {
  const q = props.question
  const nums = extractNumbers(q)
  return { q, nums }
}

const createSvgElement = (tag, attrs) => {
  const ns = 'http://www.w3.org/2000/svg'
  const el = document.createElementNS(ns, tag)
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value)
  }
  return el
}

const clearScene = () => {
  if (!svgRef.value) return
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const groups = scene.querySelectorAll('g')
  groups.forEach(g => { g.innerHTML = '' })
}

const addText = (group, x, y, text, options = {}) => {
  const el = createSvgElement('text', {
    x, y, 'text-anchor': options.anchor || 'middle',
    fill: options.fill || '#2c3e50',
    'font-size': options.size || 14,
    'font-weight': options.weight || 'normal'
  })
  el.textContent = text
  group.appendChild(el)
  return el
}

const animateIn = (el, delay = 0, scale = true) => {
  gsap.fromTo(el, { opacity: 0, scale: scale ? 0 : 1 }, { opacity: 1, scale: 1, duration: 0.5, delay, transformOrigin: 'center' })
}

// 植树问题
const renderTreePlanting = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q, nums } = parseQuestion()
  const totalLength = nums.find(n => n >= 10 && q.includes(n + '米')) || 20
  const interval = nums.find(n => n < 10 && n > 0) || 4
  const intervalCount = Math.floor(totalLength / interval)

  const road = scene.querySelector('.road')
  const intervalsGroup = scene.querySelector('.intervals')
  const treesGroup = scene.querySelector('.trees')
  const labelsGroup = scene.querySelector('.labels')

  if (step === 0) {
    gsap.fromTo(road, { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.6, transformOrigin: 'left center' })
  }

  if (step >= 1) {
    for (let i = 0; i < intervalCount; i++) {
      const x = 50 + (i * roadLength) / intervalCount
      const line = createSvgElement('line', {
        x1: x, y1: 110, x2: x + roadLength / intervalCount, y2: 110,
        stroke: '#f5a623', 'stroke-width': 3, 'stroke-dasharray': '5,3'
      })
      intervalsGroup.appendChild(line)
      gsap.fromTo(line, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4, delay: i * 0.08 })
    }
    const label = addText(labelsGroup, 200, 95, `${totalLength}米 ÷ ${interval}米 = ${intervalCount}个间隔`, { fill: '#f5a623', size: 13 })
    gsap.fromTo(label, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
  }

  if (step >= 2) {
    let treeCount = intervalCount + 1
    if (props.animationType === 'tree-planting-one') treeCount = intervalCount
    if (props.animationType === 'tree-planting-none') treeCount = intervalCount - 1
    if (props.animationType === 'tree-planting-distance') treeCount = 6
    if (props.animationType === 'tree-planting-circle') treeCount = intervalCount

    for (let i = 0; i < treeCount; i++) {
      let x
      if (props.animationType === 'tree-planting-none') {
        x = 50 + ((i + 1) * roadLength) / intervalCount
      } else if (props.animationType === 'tree-planting-distance') {
        x = 50 + (i * roadLength) / (treeCount - 1)
      } else {
        x = 50 + (i * roadLength) / intervalCount
      }
      const g = createSvgElement('g', {})
      const circle = createSvgElement('circle', { cx: x, cy: 110, r: 12, fill: '#2ecc71' })
      const text = createSvgElement('text', { x: x, y: 115, 'text-anchor': 'middle', fill: 'white', 'font-size': 10 })
      text.textContent = props.animationType === 'tree-planting-circle' ? '' : ''
      g.appendChild(circle)
      g.appendChild(text)
      treesGroup.appendChild(g)
      gsap.fromTo(g, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, delay: i * 0.08, transformOrigin: 'center' })
    }
  }

  if (step >= 3) {
    if (props.animationType === 'tree-planting-distance') {
      const line = createSvgElement('line', {
        x1: 50, y1: 150, x2: 350, y2: 150,
        stroke: '#e74c3c', 'stroke-width': 2, 'stroke-dasharray': '4'
      })
      scene.querySelector('.distance-line').appendChild(line)
      gsap.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.6, transformOrigin: 'left center' })
      const label = addText(labelsGroup, 200, 170, `总距离 ${totalLength}米 ÷ ${intervalCount}个间隔 = ${totalLength/intervalCount}米`, { fill: '#e74c3c', size: 12 })
      gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    } else if (props.animationType === 'tree-planting-circle') {
      const flowers = scene.querySelector('.flowers')
      for (let i = 0; i < intervalCount; i++) {
        const angle = (i * 2 * Math.PI) / intervalCount - Math.PI / 2
        const fx = width / 2 + circleRadius * Math.cos(angle)
        const fy = height / 2 + circleRadius * Math.sin(angle)
        const flower = createSvgElement('circle', { cx: fx, cy: fy, r: 10, fill: '#e91e63' })
        flowers.appendChild(flower)
        gsap.fromTo(flower, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, delay: i * 0.08, transformOrigin: 'center' })
      }
      const label = addText(labelsGroup, 200, 220, `圆形封闭：${totalLength}米 ÷ ${interval}米 = ${intervalCount}盆`, { fill: '#e74c3c', size: 13 })
      gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    } else {
      let treeCount = intervalCount + 1
      if (props.animationType === 'tree-planting-one') treeCount = intervalCount
      if (props.animationType === 'tree-planting-none') treeCount = intervalCount - 1
      const formula = props.animationType === 'tree-planting-both' ? `${intervalCount} + 1 = ${treeCount}` :
                      props.animationType === 'tree-planting-one' ? `${intervalCount} = ${treeCount}` :
                      `${intervalCount} - 1 = ${treeCount}`
      const label = addText(labelsGroup, 200, 190, `树的数量：${formula}（棵）`, { fill: '#e74c3c', size: 14, weight: 'bold' })
      gsap.fromTo(label, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
    }
  }

  if (step >= 4) {
    const answerText = addText(labelsGroup, 200, 215, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 年龄问题 - 步骤驱动，与 explanation.steps 严格对应
const renderAge = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q } = parseQuestion()
  const steps = props.steps || []
  
  // 解析人物名称
  const youngMatch = q.match(/(小明|小红|儿子|孙子|妹妹|弟弟)/)
  const oldMatch = q.match(/(妈妈|爸爸|爷爷|姐姐|哥哥)/)
  const youngName = youngMatch ? youngMatch[1] : '小孩'
  const oldName = oldMatch ? oldMatch[1] : '大人'
  
  // 判断题型
  const isMultiple = q.includes('倍')
  const isSum = q.includes('和')
  const isPast = q.includes('几年前')
  
  // 提取倍数
  const multipleMatch = q.match(/(\d+)倍/)
  const multiple = multipleMatch ? parseInt(multipleMatch[1]) : 3
  
  // 提取目标年龄和（用于年龄和问题）
  const targetSumMatch = q.match(/和是(\d+)岁/)
  const targetSum = targetSumMatch ? parseInt(targetSumMatch[1]) : 30
  
  // 从题目中提取年龄
  const ageMatches = q.match(/(\d+)岁/g)
  let youngAge = 8, oldAge = 32
  const numsInQ = extractNumbers(q)
  if (numsInQ.length >= 2) {
    // 通常第一个是大人的年龄，第二个是小孩的年龄
    oldAge = numsInQ[0]
    youngAge = numsInQ[1]
  }
  
  const ageDiffValue = oldAge - youngAge
  const currentSum = youngAge + oldAge
  const targetYears = (targetSum - currentSum) / 2
  
  // 计算倍数问题中的目标年龄
  const targetYoungAge = ageDiffValue / (multiple - 1)
  const targetOldAge = targetYoungAge * multiple
  const yearsLater = isPast ? (youngAge - targetYoungAge) : (targetYoungAge - youngAge)

  const barsGroup = scene.querySelector('.age-bars')
  const labelsGroup = scene.querySelector('.age-labels')
  const diffArrowGroup = scene.querySelector('.diff-arrow')

  // 步骤1：显示今年两个人的年龄（对应 steps[0]）
  if (step >= 1) {
    const bar1 = createSvgElement('rect', { x: 80, y: 200 - youngAge * 3, width: 60, height: youngAge * 3, fill: '#3498db', rx: 8 })
    const bar2 = createSvgElement('rect', { x: 180, y: 200 - oldAge * 3, width: 60, height: oldAge * 3, fill: '#e91e63', rx: 8 })
    barsGroup.appendChild(bar1)
    barsGroup.appendChild(bar2)
    gsap.fromTo([bar1, bar2], { scaleY: 0 }, { scaleY: 1, duration: 0.8, transformOrigin: 'bottom' })
    addText(labelsGroup, 110, 220, `${youngName} ${youngAge}岁`, { fill: '#3498db', size: 12 })
    addText(labelsGroup, 210, 220, `${oldName} ${oldAge}岁`, { fill: '#e91e63', size: 12 })
  }

  // 步骤2：显示年龄差（对应 steps[1]）
  if (step >= 2) {
    if (isMultiple || isPast) {
      // 倍数问题：强调年龄差永远不变
      const arrow = createSvgElement('line', {
        x1: 140, y1: 200 - oldAge * 3 + 10, x2: 180, y2: 200 - oldAge * 3 + 10,
        stroke: '#f5a623', 'stroke-width': 3, 'marker-end': 'url(#arrow)'
      })
      diffArrowGroup.appendChild(arrow)
      gsap.fromTo(arrow, { scaleX: 0 }, { scaleX: 1, duration: 0.6, transformOrigin: 'left center' })
      const label = addText(labelsGroup, 160, 200 - oldAge * 3 - 5, `年龄差 = ${ageDiffValue}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    } else if (isSum) {
      // 年龄和问题：显示年龄和
      const sumLabel = addText(labelsGroup, 200, 200, `今年年龄和 = ${youngAge} + ${oldAge} = ${currentSum}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(sumLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
    } else {
      // 普通年龄差问题
      const arrow = createSvgElement('line', {
        x1: 140, y1: 200 - oldAge * 3 + 10, x2: 180, y2: 200 - oldAge * 3 + 10,
        stroke: '#f5a623', 'stroke-width': 3, 'marker-end': 'url(#arrow)'
      })
      diffArrowGroup.appendChild(arrow)
      gsap.fromTo(arrow, { scaleX: 0 }, { scaleX: 1, duration: 0.6, transformOrigin: 'left center' })
      const label = addText(labelsGroup, 160, 200 - oldAge * 3 - 5, `差${ageDiffValue}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    }
  }

  // 步骤3：核心解题思路（对应 steps[2]）
  if (step >= 3) {
    if (isMultiple || isPast) {
      // 用线段图展示差倍关系
      const multipleLabel = addText(labelsGroup, 200, 140, `${oldName}的年龄是${youngName}的${multiple}倍时：`, { fill: '#e74c3c', size: 13 })
      gsap.fromTo(multipleLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
      
      // 画出目标状态的年龄条（虚线表示）
      const targetBar1 = createSvgElement('rect', { 
        x: 80, y: 200 - targetYoungAge * 3, width: 60, height: targetYoungAge * 3, 
        fill: '#3498db', rx: 8, opacity: 0.5, 'stroke-dasharray': '4' 
      })
      const targetBar2 = createSvgElement('rect', { 
        x: 180, y: 200 - targetOldAge * 3, width: 60, height: targetOldAge * 3, 
        fill: '#e91e63', rx: 8, opacity: 0.5, 'stroke-dasharray': '4' 
      })
      barsGroup.appendChild(targetBar1)
      barsGroup.appendChild(targetBar2)
      gsap.fromTo([targetBar1, targetBar2], { opacity: 0, scaleY: 0 }, { opacity: 0.5, scaleY: 1, duration: 0.8, transformOrigin: 'bottom' })
      
      // 显示差倍算式
      const formula = addText(labelsGroup, 200, 240, `那时${youngName}的年龄：${ageDiffValue} ÷ (${multiple} - 1) = ${targetYoungAge}岁`, { fill: '#2c3e50', size: 13 })
      gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    } else if (isSum) {
      // 年龄和问题：显示还需要增加的年龄
      const needLabel = addText(labelsGroup, 200, 140, `还需要增加：${targetSum} - ${currentSum} = ${targetSum - currentSum}岁`, { fill: '#e74c3c', size: 13 })
      gsap.fromTo(needLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
    } else {
      // 普通年龄差：显示答案
      const answerText = addText(labelsGroup, 200, 240, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
      gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
    }
  }

  // 步骤4：继续计算（对应 steps[3]）
  if (step >= 4) {
    if (isMultiple || isPast) {
      // 显示还需要多少年
      const yearsLabel = addText(labelsGroup, 200, 260, `${youngName}从${youngAge}岁到${targetYoungAge}岁，需要${Math.abs(yearsLater)}年`, { fill: '#2c3e50', size: 13 })
      gsap.fromTo(yearsLabel, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    } else if (isSum) {
      // 年龄和问题：显示计算过程
      const calcLabel = addText(labelsGroup, 200, 170, `每年两人共长2岁，需要：${targetSum - currentSum} ÷ 2 = ${targetYears}年`, { fill: '#2c3e50', size: 13 })
      gsap.fromTo(calcLabel, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    }
  }

  // 步骤5：最终答案
  if (step >= 5 || (isSum && step >= 4) || (!isMultiple && !isPast && !isSum && step >= 3)) {
    const answerText = addText(labelsGroup, 200, 290, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 差倍问题
const renderDifferenceMultiple = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q, nums } = parseQuestion()
  const multipleMatch = q.match(/(\d+)倍/)
  const multiple = multipleMatch ? parseInt(multipleMatch[1]) : 3
  const diffMatch = q.match(/多(\d+)|大(\d+)/)
  const diff = diffMatch ? parseInt(diffMatch[1] || diffMatch[2]) : 18
  const smallValue = diff / (multiple - 1)
  const largeValue = smallValue * multiple

  const segmentsGroup = scene.querySelector('.line-segments')
  const labelsGroup = scene.querySelector('.segment-labels')

  if (step >= 1) {
    const bar1 = createSvgElement('rect', { x: 80, y: 150, width: smallValue * 8, height: 40, fill: '#3498db', rx: 4 })
    const bar2 = createSvgElement('rect', { x: 80, y: 150, width: largeValue * 8, height: 40, fill: '#e91e63', rx: 4, opacity: 0.7 })
    segmentsGroup.appendChild(bar1)
    segmentsGroup.appendChild(bar2)
    gsap.fromTo([bar1, bar2], { scaleX: 0 }, { scaleX: 1, duration: 0.8, transformOrigin: 'left center' })
    addText(labelsGroup, 80 + smallValue * 4, 180, '乙数', { fill: '#3498db', size: 12 })
    addText(labelsGroup, 80 + largeValue * 4, 180, '甲数', { fill: '#e91e63', size: 12 })
  }

  if (step >= 2) {
    const diffBar = createSvgElement('rect', {
      x: 80 + smallValue * 8, y: 140, width: (largeValue - smallValue) * 8, height: 50,
      fill: 'none', stroke: '#f5a623', 'stroke-width': 2, 'stroke-dasharray': '4'
    })
    segmentsGroup.appendChild(diffBar)
    gsap.fromTo(diffBar, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    const label = addText(labelsGroup, 80 + smallValue * 8 + (largeValue - smallValue) * 4, 135, `多${diff}`, { fill: '#f5a623', size: 13 })
    gsap.fromTo(label, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
  }

  if (step >= 3) {
    const formula = addText(labelsGroup, 200, 220, `${diff} ÷ (${multiple} - 1) = ${smallValue}`, { fill: '#2c3e50', size: 14 })
    gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  if (step >= 4) {
    const answerText = addText(labelsGroup, 200, 240, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 和差问题
const renderSumDifference = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q, nums } = parseQuestion()
  const sumMatch = q.match(/共(\d+)|和是(\d+)/)
  const sum = sumMatch ? parseInt(sumMatch[1] || sumMatch[2]) : 36
  const diffMatch = q.match(/多(\d+)|大(\d+)|相差(\d+)/)
  const diff = diffMatch ? parseInt(diffMatch[1] || diffMatch[2] || diffMatch[3]) : 8
  const large = (sum + diff) / 2
  const small = (sum - diff) / 2

  const segmentsGroup = scene.querySelector('.line-segments')
  const labelsGroup = scene.querySelector('.segment-labels')

  if (step >= 1) {
    const bar1 = createSvgElement('rect', { x: 80, y: 150, width: small * 8, height: 40, fill: '#3498db', rx: 4 })
    const bar2 = createSvgElement('rect', { x: 80, y: 150, width: large * 8, height: 40, fill: '#e91e63', rx: 4, opacity: 0.7 })
    segmentsGroup.appendChild(bar1)
    segmentsGroup.appendChild(bar2)
    gsap.fromTo([bar1, bar2], { scaleX: 0 }, { scaleX: 1, duration: 0.8, transformOrigin: 'left center' })
    addText(labelsGroup, 80 + small * 4, 180, '较小数', { fill: '#3498db', size: 12 })
    addText(labelsGroup, 80 + large * 4, 180, '较大数', { fill: '#e91e63', size: 12 })
  }

  if (step >= 2) {
    const diffBar = createSvgElement('rect', {
      x: 80 + small * 8, y: 140, width: (large - small) * 8, height: 50,
      fill: 'none', stroke: '#f5a623', 'stroke-width': 2, 'stroke-dasharray': '4'
    })
    segmentsGroup.appendChild(diffBar)
    gsap.fromTo(diffBar, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    const label = addText(labelsGroup, 80 + small * 8 + (large - small) * 4, 135, `相差${diff}`, { fill: '#f5a623', size: 13 })
    gsap.fromTo(label, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
  }

  if (step >= 3) {
    const formula = addText(labelsGroup, 200, 220, `较大数 = (${sum} + ${diff}) ÷ 2 = ${large}`, { fill: '#2c3e50', size: 14 })
    gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  if (step >= 4) {
    const answerText = addText(labelsGroup, 200, 240, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 和倍问题
const renderMultipleRatio = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q, nums } = parseQuestion()
  const multipleMatch = q.match(/(\d+)倍/)
  const multiple = multipleMatch ? parseInt(multipleMatch[1]) : 3
  const sumMatch = q.match(/和是(\d+)|共(\d+)|周长是(\d+)/)
  const sum = sumMatch ? parseInt(sumMatch[1] || sumMatch[2] || sumMatch[3]) : 36
  const smallValue = sum / (multiple + 1)
  const largeValue = smallValue * multiple

  const segmentsGroup = scene.querySelector('.line-segments')
  const labelsGroup = scene.querySelector('.segment-labels')

  if (step >= 1) {
    const bar1 = createSvgElement('rect', { x: 80, y: 150, width: smallValue * 8, height: 40, fill: '#3498db', rx: 4 })
    const bar2 = createSvgElement('rect', { x: 80, y: 150, width: largeValue * 8, height: 40, fill: '#e91e63', rx: 4, opacity: 0.7 })
    segmentsGroup.appendChild(bar1)
    segmentsGroup.appendChild(bar2)
    gsap.fromTo([bar1, bar2], { scaleX: 0 }, { scaleX: 1, duration: 0.8, transformOrigin: 'left center' })
    addText(labelsGroup, 80 + smallValue * 4, 180, '1份', { fill: '#3498db', size: 12 })
    addText(labelsGroup, 80 + largeValue * 4, 180, `${multiple}份`, { fill: '#e91e63', size: 12 })
  }

  if (step >= 2) {
    const totalLine = createSvgElement('line', {
      x1: 80, y1: 130, x2: 80 + largeValue * 8, y2: 130,
      stroke: '#f5a623', 'stroke-width': 2
    })
    segmentsGroup.appendChild(totalLine)
    gsap.fromTo(totalLine, { scaleX: 0 }, { scaleX: 1, duration: 0.6, transformOrigin: 'left center' })
    const label = addText(labelsGroup, 80 + largeValue * 4 / 2, 120, `一共${sum}`, { fill: '#f5a623', size: 13 })
    gsap.fromTo(label, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
  }

  if (step >= 3) {
    const formula = addText(labelsGroup, 200, 220, `1份 = ${sum} ÷ (${multiple} + 1) = ${smallValue}`, { fill: '#2c3e50', size: 13 })
    gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  if (step >= 4) {
    const answerText = addText(labelsGroup, 200, 240, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 鸡兔同笼
const renderChickenRabbit = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q, nums } = parseQuestion()
  const totalMatch = q.match(/共(\d+)只|共(\d+)辆/)
  const total = totalMatch ? parseInt(totalMatch[1] || totalMatch[2]) : 8
  const legMatch = q.match(/(\d+)条|(\d+)只脚|(\d+)个轮子/)
  const legs = legMatch ? parseInt(legMatch[1] || legMatch[2] || legMatch[3]) : 22

  const animalsGroup = scene.querySelector('.animals')
  const labelsGroup = scene.querySelector('.animal-labels')

  if (step >= 1) {
    for (let i = 0; i < total; i++) {
      const x = 80 + (i % 4) * 80
      const y = 80 + Math.floor(i / 4) * 80
      const g = createSvgElement('g', {})
      const circle = createSvgElement('circle', { cx: x, cy: y, r: 25, fill: '#f5a623' })
      const text = createSvgElement('text', { x: x, y: y + 5, 'text-anchor': 'middle', fill: 'white', 'font-size': 20 })
      text.textContent = '🐔'
      g.appendChild(circle)
      g.appendChild(text)
      animalsGroup.appendChild(g)
      gsap.fromTo(g, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, delay: i * 0.05, transformOrigin: 'center' })
    }
    addText(labelsGroup, 200, 200, `假设${total}只全是鸡`, { fill: '#2c3e50', size: 14 })
  }

  if (step >= 2) {
    const expectedLegs = total * 2
    const label = addText(labelsGroup, 200, 225, `鸡腿有 ${total} × 2 = ${expectedLegs} 条`, { fill: '#f5a623', size: 13 })
    gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  if (step >= 3) {
    const diff = legs - total * 2
    const label = addText(labelsGroup, 200, 245, `实际${legs}条，少${diff}条`, { fill: '#e74c3c', size: 13 })
    gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  if (step >= 4) {
    const diff = legs - total * 2
    const rabbitCount = diff / 2
    const chickenCount = total - rabbitCount
    const answerText = addText(labelsGroup, 200, 265, `兔${rabbitCount}只，鸡${chickenCount}只`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 鸡兔同笼进阶
const renderChickenRabbitAdvanced = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q, nums } = parseQuestion()
  const moreMatch = q.match(/多(\d+)只/)
  const more = moreMatch ? parseInt(moreMatch[1]) : 3
  const legs = nums.find(n => n > 10) || 36

  const animalsGroup = scene.querySelector('.animals')
  const labelsGroup = scene.querySelector('.animal-labels')

  if (step >= 1) {
    for (let i = 0; i < more; i++) {
      const x = 60 + i * 50
      const y = 100
      const g = createSvgElement('g', {})
      const circle = createSvgElement('circle', { cx: x, cy: y, r: 20, fill: '#f5a623' })
      const text = createSvgElement('text', { x: x, y: y + 5, 'text-anchor': 'middle', fill: 'white', 'font-size': 16 })
      text.textContent = '🐔'
      g.appendChild(circle)
      g.appendChild(text)
      animalsGroup.appendChild(g)
      gsap.fromTo(g, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, delay: i * 0.08, transformOrigin: 'center' })
    }
    addText(labelsGroup, 200, 150, `先去掉多出的${more}只鸡`, { fill: '#2c3e50', size: 14 })
  }

  if (step >= 2) {
    const label = addText(labelsGroup, 200, 180, `剩下的鸡和兔数量相同，1鸡1兔一组`, { fill: '#f5a623', size: 12 })
    gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  if (step >= 3) {
    const answerText = addText(labelsGroup, 200, 210, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 鸡兔同笼邮票
const renderChickenRabbitStamp = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q, nums } = parseQuestion()
  const totalMatch = q.match(/共(\d+)张/)
  const total = totalMatch ? parseInt(totalMatch[1]) : 20

  const stampsGroup = scene.querySelector('.stamps')
  const labelsGroup = scene.querySelector('.stamp-labels')

  if (step >= 1) {
    for (let i = 0; i < total; i++) {
      const x = 60 + (i % 5) * 70
      const y = 80 + Math.floor(i / 5) * 50
      const g = createSvgElement('g', {})
      const rect = createSvgElement('rect', { x: x - 20, y: y - 15, width: 40, height: 30, fill: '#3498db', rx: 4 })
      const text = createSvgElement('text', { x: x, y: y + 5, 'text-anchor': 'middle', fill: 'white', 'font-size': 12 })
      text.textContent = '5角'
      g.appendChild(rect)
      g.appendChild(text)
      stampsGroup.appendChild(g)
      gsap.fromTo(g, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.3, delay: i * 0.03, transformOrigin: 'center' })
    }
    addText(labelsGroup, 200, 200, `假设${total}张全是5角`, { fill: '#2c3e50', size: 14 })
  }

  if (step >= 2) {
    const label = addText(labelsGroup, 200, 225, `5角 × ${total} = ${total * 5}角`, { fill: '#f5a623', size: 13 })
    gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  if (step >= 3) {
    const answerText = addText(labelsGroup, 200, 250, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 主渲染函数
const renderStep = async () => {
  clearScene()
  if (props.animationType.startsWith('tree-planting')) {
    await renderTreePlanting(currentStep.value)
  } else if (props.animationType.startsWith('age')) {
    await renderAge(currentStep.value)
  } else if (props.animationType === 'difference-multiple') {
    await renderDifferenceMultiple(currentStep.value)
  } else if (props.animationType === 'sum-difference') {
    await renderSumDifference(currentStep.value)
  } else if (props.animationType === 'multiple-ratio') {
    await renderMultipleRatio(currentStep.value)
  } else if (props.animationType === 'chicken-rabbit') {
    await renderChickenRabbit(currentStep.value)
  } else if (props.animationType === 'chicken-rabbit-advanced') {
    await renderChickenRabbitAdvanced(currentStep.value)
  } else if (props.animationType === 'chicken-rabbit-stamp') {
    await renderChickenRabbitStamp(currentStep.value)
  }
}

watch(() => currentStep.value, renderStep, { immediate: true })
watch(() => props.animationType, () => { currentStep.value = 0; renderStep() })
watch(() => props.steps, () => { currentStep.value = 0; renderStep() })
onMounted(() => { renderStep() })
</script>

<style scoped>
.math-animation { width: 100%; }
.animation-stage {
  display: flex; justify-content: center; align-items: center;
  background: white; border-radius: 12px; padding: 20px; min-height: 280px;
}
.animation-svg { max-width: 100%; height: auto; }
.step-text {
  font-size: 1.05rem; color: var(--text); margin-bottom: 16px; padding: 12px;
  background: white; border-radius: 8px; border-left: 3px solid var(--secondary);
}
.controls { display: flex; gap: 12px; justify-content: center; margin-top: 16px; }
.controls button {
  padding: 8px 20px; border-radius: 20px; border: none; cursor: pointer;
  font-size: 0.95rem; transition: all 0.2s;
}
.controls button:first-child { background: var(--primary); color: white; }
.controls button:last-child { background: white; color: var(--primary); border: 2px solid var(--primary); }
.controls button:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
