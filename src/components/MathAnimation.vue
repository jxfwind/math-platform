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
          <g class="age-bars"></g><g class="age-labels"></g><g class="diff-arrow"></g>
        </g>

        <g v-if="animationType === 'age-sum'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">年龄和</text>
          <g class="age-bars"></g><g class="age-labels"></g><g class="diff-arrow"></g>
        </g>

        <g v-if="animationType === 'age-past'" class="scene">
          <text x="200" y="30" text-anchor="middle" fill="#2c3e50" font-size="16" font-weight="bold">几年前/后的年龄</text>
          <g class="age-bars"></g><g class="age-labels"></g><g class="diff-arrow"></g>
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
// step 从 1 开始，step=n 对应 steps[n-1]
const renderAge = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q } = parseQuestion()

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

  // 从题目中提取年龄：根据人物名称匹配对应的年龄
  let youngAge = 8, oldAge = 32
  const numsInQ = extractNumbers(q)
  // 尝试匹配 "X今年N岁" 的格式
  const youngAgeMatch = q.match(new RegExp(`${youngName}今年(\\d+)岁`))
  const oldAgeMatch = q.match(new RegExp(`${oldName}今年(\\d+)岁`))
  if (youngAgeMatch && oldAgeMatch) {
    youngAge = parseInt(youngAgeMatch[1])
    oldAge = parseInt(oldAgeMatch[1])
  } else if (numsInQ.length >= 2) {
    // 兜底：通常第一个是大人的年龄，第二个是小孩的年龄
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

  // 计算线段图缩放比例，确保最大年龄条不超过画布高度
  const maxAge = Math.max(oldAge, targetOldAge || 0, targetSum || 0)
  const scale = Math.min(3, 150 / maxAge)
  const barWidth = 50
  const bar1X = 70
  const bar2X = 200
  const baseY = 200

  // ========== 年龄差问题（age-difference）==========
  // steps: [年龄差永远不变, 今年差X岁, 5年后还是差X岁]
  if (props.animationType === 'age-difference') {
    // step 1: 显示今年两人年龄柱状图
    if (step >= 1) {
      const bar1 = createSvgElement('rect', { x: bar1X, y: baseY - youngAge * scale, width: barWidth, height: youngAge * scale, fill: '#3498db', rx: 6 })
      const bar2 = createSvgElement('rect', { x: bar2X, y: baseY - oldAge * scale, width: barWidth, height: oldAge * scale, fill: '#e91e63', rx: 6 })
      barsGroup.appendChild(bar1)
      barsGroup.appendChild(bar2)
      gsap.fromTo([bar1, bar2], { scaleY: 0 }, { scaleY: 1, duration: 0.8, transformOrigin: 'bottom' })
      addText(labelsGroup, bar1X + barWidth / 2, baseY + 15, `${youngName} ${youngAge}岁`, { fill: '#3498db', size: 12 })
      addText(labelsGroup, bar2X + barWidth / 2, baseY + 15, `${oldName} ${oldAge}岁`, { fill: '#e91e63', size: 12 })
    }
    // step 2: 标注年龄差
    if (step >= 2) {
      const arrowY = baseY - oldAge * scale + 12
      const arrow = createSvgElement('line', {
        x1: bar1X + barWidth, y1: arrowY, x2: bar2X, y2: arrowY,
        stroke: '#f5a623', 'stroke-width': 3, 'marker-end': 'url(#arrow)'
      })
      diffArrowGroup.appendChild(arrow)
      gsap.fromTo(arrow, { scaleX: 0 }, { scaleX: 1, duration: 0.6, transformOrigin: 'left center' })
      const label = addText(labelsGroup, (bar1X + bar2X) / 2, arrowY - 8, `年龄差 = ${ageDiffValue}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    }
    // step 3: 显示答案
    if (step >= 3) {
      const answerText = addText(labelsGroup, 200, 240, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
      gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
    }
  }

  // ========== 年龄倍数问题（age-multiple）==========
  // steps: [年龄差, 多N倍, 那时小孩年龄, 需要多少年]
  if (props.animationType === 'age-multiple') {
    // step 1: 显示今年两人年龄 + 年龄差
    if (step >= 1) {
      const bar1 = createSvgElement('rect', { x: bar1X, y: baseY - youngAge * scale, width: barWidth, height: youngAge * scale, fill: '#3498db', rx: 6 })
      const bar2 = createSvgElement('rect', { x: bar2X, y: baseY - oldAge * scale, width: barWidth, height: oldAge * scale, fill: '#e91e63', rx: 6 })
      barsGroup.appendChild(bar1)
      barsGroup.appendChild(bar2)
      gsap.fromTo([bar1, bar2], { scaleY: 0 }, { scaleY: 1, duration: 0.8, transformOrigin: 'bottom' })
      addText(labelsGroup, bar1X + barWidth / 2, baseY + 15, `${youngName} ${youngAge}岁`, { fill: '#3498db', size: 12 })
      addText(labelsGroup, bar2X + barWidth / 2, baseY + 15, `${oldName} ${oldAge}岁`, { fill: '#e91e63', size: 12 })
      // 年龄差箭头
      const arrowY = baseY - oldAge * scale + 12
      const arrow = createSvgElement('line', {
        x1: bar1X + barWidth, y1: arrowY, x2: bar2X, y2: arrowY,
        stroke: '#f5a623', 'stroke-width': 3, 'marker-end': 'url(#arrow)'
      })
      diffArrowGroup.appendChild(arrow)
      gsap.fromTo(arrow, { scaleX: 0 }, { scaleX: 1, duration: 0.6, delay: 0.4, transformOrigin: 'left center' })
      const diffLabel = addText(labelsGroup, (bar1X + bar2X) / 2, arrowY - 8, `年龄差 = ${ageDiffValue}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(diffLabel, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.6 })
    }
    // step 2: 用线段图展示目标时刻的倍数关系
    if (step >= 2) {
      // 清除之前的柱状图，改用线段图
      barsGroup.innerHTML = ''
      diffArrowGroup.innerHTML = ''
      labelsGroup.innerHTML = ''
      // 画小孩的线段（1份）
      const segWidth = 30
      const segY1 = 100
      const youngSeg = createSvgElement('rect', { x: 20, y: segY1, width: segWidth, height: 20, fill: '#3498db', rx: 4 })
      barsGroup.appendChild(youngSeg)
      gsap.fromTo(youngSeg, { scaleX: 0 }, { scaleX: 1, duration: 0.5, transformOrigin: 'left center' })
      addText(labelsGroup, 35, segY1 - 8, `${youngName}（1份）`, { fill: '#3498db', size: 12 })
      // 画大人的线段（N份）
      const oldSegY = 140
      for (let i = 0; i < multiple; i++) {
        const seg = createSvgElement('rect', { x: 20 + i * segWidth, y: oldSegY, width: segWidth - 2, height: 20, fill: '#e91e63', rx: 4, opacity: 0.85 })
        barsGroup.appendChild(seg)
        gsap.fromTo(seg, { scaleX: 0 }, { scaleX: 1, duration: 0.3, delay: 0.2 + i * 0.15, transformOrigin: 'left center' })
      }
      addText(labelsGroup, 20 + multiple * segWidth / 2, oldSegY - 8, `${oldName}（${multiple}份）`, { fill: '#e91e63', size: 12 })
      // 标注多出的部分（N-1份 = 年龄差）
      const diffX = 20 + segWidth
      const diffWidth = (multiple - 1) * segWidth
      const diffBracket = createSvgElement('rect', {
        x: diffX, y: oldSegY - 5, width: diffWidth, height: 30,
        fill: 'none', stroke: '#f5a623', 'stroke-width': 2, 'stroke-dasharray': '4'
      })
      barsGroup.appendChild(diffBracket)
      gsap.fromTo(diffBracket, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 + multiple * 0.15 })
      const diffLabel = addText(labelsGroup, diffX + diffWidth / 2, oldSegY + 35, `多${multiple - 1}份 = ${ageDiffValue}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(diffLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.6 + multiple * 0.15 })
    }
    // step 3: 计算那时小孩的年龄
    if (step >= 3) {
      const formula = addText(labelsGroup, 200, 200, `${ageDiffValue} ÷ (${multiple} - 1) = ${targetYoungAge}岁`, { fill: '#2c3e50', size: 14, weight: 'bold' })
      gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      const targetLabel = addText(labelsGroup, 200, 220, `那时${youngName} ${targetYoungAge}岁，${oldName} ${targetOldAge}岁`, { fill: '#2c3e50', size: 12 })
      gsap.fromTo(targetLabel, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.2 })
    }
    // step 4: 计算需要多少年 + 答案
    if (step >= 4) {
      const yearsLabel = addText(labelsGroup, 200, 240, `${youngName}从${youngAge}岁到${targetYoungAge}岁，需要${Math.abs(yearsLater)}年`, { fill: '#2c3e50', size: 13 })
      gsap.fromTo(yearsLabel, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      const answerText = addText(labelsGroup, 200, 265, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
      gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.3, transformOrigin: 'center' })
    }
  }

  // ========== 过去年龄问题（age-past）==========
  // steps: [年龄差, 多N倍, 那时小孩年龄, 几年前]
  if (props.animationType === 'age-past') {
    // step 1: 显示今年两人年龄 + 年龄差
    if (step >= 1) {
      const bar1 = createSvgElement('rect', { x: bar1X, y: baseY - youngAge * scale, width: barWidth, height: youngAge * scale, fill: '#3498db', rx: 6 })
      const bar2 = createSvgElement('rect', { x: bar2X, y: baseY - oldAge * scale, width: barWidth, height: oldAge * scale, fill: '#e91e63', rx: 6 })
      barsGroup.appendChild(bar1)
      barsGroup.appendChild(bar2)
      gsap.fromTo([bar1, bar2], { scaleY: 0 }, { scaleY: 1, duration: 0.8, transformOrigin: 'bottom' })
      addText(labelsGroup, bar1X + barWidth / 2, baseY + 15, `${youngName} ${youngAge}岁`, { fill: '#3498db', size: 12 })
      addText(labelsGroup, bar2X + barWidth / 2, baseY + 15, `${oldName} ${oldAge}岁`, { fill: '#e91e63', size: 12 })
      const arrowY = baseY - oldAge * scale + 12
      const arrow = createSvgElement('line', {
        x1: bar1X + barWidth, y1: arrowY, x2: bar2X, y2: arrowY,
        stroke: '#f5a623', 'stroke-width': 3, 'marker-end': 'url(#arrow)'
      })
      diffArrowGroup.appendChild(arrow)
      gsap.fromTo(arrow, { scaleX: 0 }, { scaleX: 1, duration: 0.6, delay: 0.4, transformOrigin: 'left center' })
      const diffLabel = addText(labelsGroup, (bar1X + bar2X) / 2, arrowY - 8, `年龄差 = ${ageDiffValue}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(diffLabel, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.6 })
    }
    // step 2: 用线段图展示过去时刻的倍数关系
    if (step >= 2) {
      barsGroup.innerHTML = ''
      diffArrowGroup.innerHTML = ''
      labelsGroup.innerHTML = ''
      const segWidth = 30
      const segY1 = 100
      const youngSeg = createSvgElement('rect', { x: 20, y: segY1, width: segWidth, height: 20, fill: '#3498db', rx: 4 })
      barsGroup.appendChild(youngSeg)
      gsap.fromTo(youngSeg, { scaleX: 0 }, { scaleX: 1, duration: 0.5, transformOrigin: 'left center' })
      addText(labelsGroup, 35, segY1 - 8, `${youngName}（1份）`, { fill: '#3498db', size: 12 })
      const oldSegY = 140
      for (let i = 0; i < multiple; i++) {
        const seg = createSvgElement('rect', { x: 20 + i * segWidth, y: oldSegY, width: segWidth - 2, height: 20, fill: '#e91e63', rx: 4, opacity: 0.85 })
        barsGroup.appendChild(seg)
        gsap.fromTo(seg, { scaleX: 0 }, { scaleX: 1, duration: 0.3, delay: 0.2 + i * 0.15, transformOrigin: 'left center' })
      }
      addText(labelsGroup, 20 + multiple * segWidth / 2, oldSegY - 8, `${oldName}（${multiple}份）`, { fill: '#e91e63', size: 12 })
      const diffX = 20 + segWidth
      const diffWidth = (multiple - 1) * segWidth
      const diffBracket = createSvgElement('rect', {
        x: diffX, y: oldSegY - 5, width: diffWidth, height: 30,
        fill: 'none', stroke: '#f5a623', 'stroke-width': 2, 'stroke-dasharray': '4'
      })
      barsGroup.appendChild(diffBracket)
      gsap.fromTo(diffBracket, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 + multiple * 0.15 })
      const diffLabel = addText(labelsGroup, diffX + diffWidth / 2, oldSegY + 35, `多${multiple - 1}份 = ${ageDiffValue}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(diffLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.6 + multiple * 0.15 })
    }
    // step 3: 计算那时小孩的年龄
    if (step >= 3) {
      const formula = addText(labelsGroup, 200, 200, `${ageDiffValue} ÷ (${multiple} - 1) = ${targetYoungAge}岁`, { fill: '#2c3e50', size: 14, weight: 'bold' })
      gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      const targetLabel = addText(labelsGroup, 200, 220, `那时${youngName} ${targetYoungAge}岁，${oldName} ${targetOldAge}岁`, { fill: '#2c3e50', size: 12 })
      gsap.fromTo(targetLabel, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.2 })
    }
    // step 4: 计算几年前 + 答案
    if (step >= 4) {
      const yearsLabel = addText(labelsGroup, 200, 240, `${youngName}从${youngAge}岁回到${targetYoungAge}岁，是${Math.abs(yearsLater)}年前`, { fill: '#2c3e50', size: 13 })
      gsap.fromTo(yearsLabel, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      const answerText = addText(labelsGroup, 200, 265, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
      gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.3, transformOrigin: 'center' })
    }
  }

  // ========== 年龄和问题（age-sum）==========
  // steps: [今年年龄和, 还需增加, 每年共长2岁, 需要多少年]
  if (props.animationType === 'age-sum') {
    // step 1: 显示今年两人年龄 + 年龄和
    if (step >= 1) {
      const bar1 = createSvgElement('rect', { x: bar1X, y: baseY - youngAge * scale, width: barWidth, height: youngAge * scale, fill: '#3498db', rx: 6 })
      const bar2 = createSvgElement('rect', { x: bar2X, y: baseY - oldAge * scale, width: barWidth, height: oldAge * scale, fill: '#e91e63', rx: 6 })
      barsGroup.appendChild(bar1)
      barsGroup.appendChild(bar2)
      gsap.fromTo([bar1, bar2], { scaleY: 0 }, { scaleY: 1, duration: 0.8, transformOrigin: 'bottom' })
      addText(labelsGroup, bar1X + barWidth / 2, baseY + 15, `${youngName} ${youngAge}岁`, { fill: '#3498db', size: 12 })
      addText(labelsGroup, bar2X + barWidth / 2, baseY + 15, `${oldName} ${oldAge}岁`, { fill: '#e91e63', size: 12 })
      const sumLabel = addText(labelsGroup, 200, 100, `今年年龄和 = ${youngAge} + ${oldAge} = ${currentSum}岁`, { fill: '#f5a623', size: 13 })
      gsap.fromTo(sumLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.4 })
    }
    // step 2: 显示还需要增加多少
    if (step >= 2) {
      const needLabel = addText(labelsGroup, 200, 125, `目标和 ${targetSum}岁，还需增加：${targetSum} - ${currentSum} = ${targetSum - currentSum}岁`, { fill: '#e74c3c', size: 13 })
      gsap.fromTo(needLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })
    }
    // step 3: 解释每年共长2岁
    if (step >= 3) {
      const calcLabel = addText(labelsGroup, 200, 150, `每人每年各长1岁，两人共长2岁`, { fill: '#2c3e50', size: 13 })
      gsap.fromTo(calcLabel, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    }
    // step 4: 计算需要多少年 + 答案
    if (step >= 4) {
      const resultLabel = addText(labelsGroup, 200, 175, `${targetSum - currentSum} ÷ 2 = ${targetYears}年`, { fill: '#2c3e50', size: 14, weight: 'bold' })
      gsap.fromTo(resultLabel, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      const answerText = addText(labelsGroup, 200, 200, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
      gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.3, transformOrigin: 'center' })
    }
  }
}

// 差倍问题 - 上下垂直线段图，清晰展示差和倍的关系
const renderDifferenceMultiple = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q } = parseQuestion()
  const multipleMatch = q.match(/(\d+)倍/)
  const multiple = multipleMatch ? parseInt(multipleMatch[1]) : 3
  const diffMatch = q.match(/多(\d+)|大(\d+)/)
  const diff = diffMatch ? parseInt(diffMatch[1] || diffMatch[2]) : 18
  const smallValue = diff / (multiple - 1)
  const largeValue = smallValue * multiple

  // 根据题目内容解析大小两数的名称
  let smallName = '乙数', largeName = '甲数'
  if (q.includes('大筐') && q.includes('小筐')) {
    smallName = '小筐'
    largeName = '大筐'
  } else if (q.includes('长') && q.includes('宽')) {
    smallName = '宽'
    largeName = '长'
  } else if (q.includes('A') && q.includes('B')) {
    smallName = 'B'
    largeName = 'A'
  } else if (q.includes('哥哥') && q.includes('弟弟')) {
    smallName = '弟弟'
    largeName = '哥哥'
  }

  const segmentsGroup = scene.querySelector('.line-segments')
  const labelsGroup = scene.querySelector('.segment-labels')

  // 线段图参数
  const segWidth = 50
  const segHeight = 24
  const startX = 60
  const smallY = 70   // 小数在上方
  const largeY = 130  // 大数在下方

  // step 1: 画小数（1份）和大数（N份）的线段
  if (step >= 1) {
    // 小数：1段
    const smallSeg = createSvgElement('rect', {
      x: startX, y: smallY, width: segWidth, height: segHeight,
      fill: '#3498db', rx: 4
    })
    segmentsGroup.appendChild(smallSeg)
    gsap.fromTo(smallSeg, { scaleX: 0 }, { scaleX: 1, duration: 0.5, transformOrigin: 'left center' })
    addText(labelsGroup, startX + segWidth / 2, smallY - 10, `${smallName}（1份）`, { fill: '#3498db', size: 13 })

    // 大数：N段
    for (let i = 0; i < multiple; i++) {
      const seg = createSvgElement('rect', {
        x: startX + i * segWidth, y: largeY, width: segWidth - 2, height: segHeight,
        fill: '#e91e63', rx: 4, opacity: 0.85
      })
      segmentsGroup.appendChild(seg)
      gsap.fromTo(seg, { scaleX: 0 }, { scaleX: 1, duration: 0.3, delay: 0.3 + i * 0.15, transformOrigin: 'left center' })
    }
    addText(labelsGroup, startX + (multiple * segWidth) / 2, largeY - 10, `${largeName}（${multiple}份）`, { fill: '#e91e63', size: 13 })
  }

  // step 2: 标注大数比小数多的部分（差 = N-1 份）
  if (step >= 2) {
    // 在大数上标注多出的部分（从第2段开始）
    const diffStartX = startX + segWidth
    const diffWidth = (multiple - 1) * segWidth
    const diffBracket = createSvgElement('rect', {
      x: diffStartX, y: largeY - 8, width: diffWidth, height: segHeight + 16,
      fill: 'none', stroke: '#f5a623', 'stroke-width': 2.5, 'stroke-dasharray': '6,4'
    })
    segmentsGroup.appendChild(diffBracket)
    gsap.fromTo(diffBracket, { opacity: 0 }, { opacity: 1, duration: 0.5 })

    // 差值标注线：连接小数末端和大数多出部分
    const diffLine = createSvgElement('line', {
      x1: startX + segWidth, y1: smallY + segHeight / 2,
      x2: startX + segWidth, y2: largeY + segHeight / 2,
      stroke: '#f5a623', 'stroke-width': 2, 'stroke-dasharray': '4'
    })
    segmentsGroup.appendChild(diffLine)
    gsap.fromTo(diffLine, { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.2 })

    // 差值标签
    const diffLabel = addText(labelsGroup, diffStartX + diffWidth / 2, largeY + segHeight + 25,
      `${largeName}比${smallName}多 ${multiple - 1} 份 = ${diff}`, { fill: '#f5a623', size: 14, weight: 'bold' })
    gsap.fromTo(diffLabel, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 })
  }

  // step 3: 显示计算1份的算式
  if (step >= 3) {
    const formula = addText(labelsGroup, 200, 200,
      `1份（${smallName}）= ${diff} ÷ (${multiple} - 1) = ${smallValue}`, { fill: '#2c3e50', size: 14, weight: 'bold' })
    gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  // step 4: 显示答案
  if (step >= 4) {
    const answerText = addText(labelsGroup, 200, 230, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 和差问题 - 上下垂直线段图，体现和与差的关系
const renderSumDifference = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q } = parseQuestion()
  const sumMatch = q.match(/共(\d+)|和是(\d+)|之和是(\d+)/)
  const sum = sumMatch ? parseInt(sumMatch[1] || sumMatch[2] || sumMatch[3]) : 36
  const diffMatch = q.match(/多(\d+)|大(\d+)|相差(\d+)/)
  const diff = diffMatch ? parseInt(diffMatch[1] || diffMatch[2] || diffMatch[3]) : 8
  const large = (sum + diff) / 2
  const small = (sum - diff) / 2

  // 根据题目内容解析大小两数的名称
  let smallName = '较小数', largeName = '较大数'
  if (q.includes('小明') && q.includes('小红')) {
    smallName = '小红'
    largeName = '小明'
  } else if (q.includes('长') && q.includes('宽')) {
    smallName = '宽'
    largeName = '长'
  } else if (q.includes('甲') && q.includes('乙')) {
    smallName = '乙'
    largeName = '甲'
  } else if (q.includes('大筐') && q.includes('小筐')) {
    smallName = '小筐'
    largeName = '大筐'
  } else if (q.includes('哥哥') && q.includes('弟弟')) {
    smallName = '弟弟'
    largeName = '哥哥'
  }

  const segmentsGroup = scene.querySelector('.line-segments')
  const labelsGroup = scene.querySelector('.segment-labels')

  // 线段图参数
  const segWidth = 50
  const segHeight = 24
  const startX = 60
  const smallY = 70   // 小数在上方
  const largeY = 130  // 大数在下方

  // step 1: 画小数和大数的线段，展示"和"
  if (step >= 1) {
    // 小数：1段
    const smallSeg = createSvgElement('rect', {
      x: startX, y: smallY, width: segWidth, height: segHeight,
      fill: '#3498db', rx: 4
    })
    segmentsGroup.appendChild(smallSeg)
    gsap.fromTo(smallSeg, { scaleX: 0 }, { scaleX: 1, duration: 0.5, transformOrigin: 'left center' })
    addText(labelsGroup, startX + segWidth / 2, smallY - 10, `${smallName}`, { fill: '#3498db', size: 13 })

    // 大数：比小数多出的部分用不同颜色区分
    // 先画与小数相等的部分
    const largeEqualSeg = createSvgElement('rect', {
      x: startX, y: largeY, width: segWidth, height: segHeight,
      fill: '#e91e63', rx: 4, opacity: 0.85
    })
    segmentsGroup.appendChild(largeEqualSeg)
    gsap.fromTo(largeEqualSeg, { scaleX: 0 }, { scaleX: 1, duration: 0.5, delay: 0.2, transformOrigin: 'left center' })

    // 再画多出的部分（差）
    const largeDiffSeg = createSvgElement('rect', {
      x: startX + segWidth, y: largeY, width: segWidth * 0.6, height: segHeight,
      fill: '#f5a623', rx: 4
    })
    segmentsGroup.appendChild(largeDiffSeg)
    gsap.fromTo(largeDiffSeg, { scaleX: 0 }, { scaleX: 1, duration: 0.4, delay: 0.5, transformOrigin: 'left center' })

    addText(labelsGroup, startX + segWidth + segWidth * 0.3, largeY - 10, `${largeName}`, { fill: '#e91e63', size: 13 })

    // 标注"和"
    const sumLabel = addText(labelsGroup, 200, 40, `${smallName} + ${largeName} = ${sum}`, { fill: '#2c3e50', size: 14, weight: 'bold' })
    gsap.fromTo(sumLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.6 })
  }

  // step 2: 标注"差"
  if (step >= 2) {
    // 用虚线框标出大数比小数多的部分
    const diffBracket = createSvgElement('rect', {
      x: startX + segWidth, y: largeY - 5, width: segWidth * 0.6, height: segHeight + 10,
      fill: 'none', stroke: '#f5a623', 'stroke-width': 2.5, 'stroke-dasharray': '6,4'
    })
    segmentsGroup.appendChild(diffBracket)
    gsap.fromTo(diffBracket, { opacity: 0 }, { opacity: 1, duration: 0.5 })

    // 差值标注线
    const diffLine = createSvgElement('line', {
      x1: startX + segWidth, y1: smallY + segHeight / 2,
      x2: startX + segWidth, y2: largeY + segHeight / 2,
      stroke: '#f5a623', 'stroke-width': 2, 'stroke-dasharray': '4'
    })
    segmentsGroup.appendChild(diffLine)
    gsap.fromTo(diffLine, { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.2 })

    // 差值标签
    const diffLabel = addText(labelsGroup, startX + segWidth + segWidth * 0.3, largeY + segHeight + 20,
      `${largeName}比${smallName}多 ${diff}`, { fill: '#f5a623', size: 13, weight: 'bold' })
    gsap.fromTo(diffLabel, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 })
  }

  // step 3: 展示"补上差值后两数相等"的概念
  if (step >= 3) {
    // 在小数旁边补上差值，使其与大数相等
    const supplementSeg = createSvgElement('rect', {
      x: startX + segWidth, y: smallY, width: segWidth * 0.6, height: segHeight,
      fill: '#3498db', rx: 4, opacity: 0.4, 'stroke-dasharray': '4'
    })
    segmentsGroup.appendChild(supplementSeg)
    gsap.fromTo(supplementSeg, { scaleX: 0 }, { scaleX: 1, duration: 0.5, transformOrigin: 'left center' })

    const supplementLabel = addText(labelsGroup, startX + segWidth + segWidth * 0.3, smallY - 10,
      `补上${diff}`, { fill: '#3498db', size: 11 })
    gsap.fromTo(supplementLabel, { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.3 })

    // 显示算式
    const formula = addText(labelsGroup, 200, 200,
      `补上后两数相等：${smallName} + ${diff} = ${largeName}`, { fill: '#2c3e50', size: 13 })
    gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.4 })

    const formula2 = addText(labelsGroup, 200, 220,
      `总和变为：${sum} + ${diff} = ${sum + diff}`, { fill: '#2c3e50', size: 13 })
    gsap.fromTo(formula2, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.6 })
  }

  // step 4: 计算大数
  if (step >= 4) {
    const calcLabel = addText(labelsGroup, 200, 245,
      `${largeName} = (${sum} + ${diff}) ÷ 2 = ${large}`, { fill: '#2c3e50', size: 14, weight: 'bold' })
    gsap.fromTo(calcLabel, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  // step 5: 显示答案
  if (step >= 5) {
    const answerText = addText(labelsGroup, 200, 270, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 和倍问题 - 上下垂直线段图，体现和与倍的关系
const renderMultipleRatio = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q } = parseQuestion()
  const multipleMatch = q.match(/(\d+)倍/)
  const multiple = multipleMatch ? parseInt(multipleMatch[1]) : 3

  // 判断是否是周长问题（长方形）
  const isPerimeter = q.includes('周长')

  // 提取数值
  let sum, actualSum
  if (isPerimeter) {
    // 周长问题：周长 = 2 × (长 + 宽)，所以实际和 = 周长 ÷ 2
    const perimeterMatch = q.match(/周长是(\d+)/)
    const perimeter = perimeterMatch ? parseInt(perimeterMatch[1]) : 36
    sum = perimeter
    actualSum = perimeter / 2
  } else {
    const sumMatch = q.match(/和是(\d+)|之和是(\d+)|共(\d+)/)
    sum = sumMatch ? parseInt(sumMatch[1] || sumMatch[2] || sumMatch[3]) : 36
    actualSum = sum
  }

  const smallValue = actualSum / (multiple + 1)
  const largeValue = smallValue * multiple

  // 根据题目内容解析大小两数的名称
  let smallName = '乙数', largeName = '甲数'
  if (q.includes('苹果树') && q.includes('梨树')) {
    smallName = '梨树'
    largeName = '苹果树'
  } else if (q.includes('小红') && q.includes('小明')) {
    smallName = '小明'
    largeName = '小红'
  } else if (q.includes('长') && q.includes('宽')) {
    smallName = '宽'
    largeName = '长'
  } else if (q.includes('甲') && q.includes('乙')) {
    smallName = '乙'
    largeName = '甲'
  }

  const segmentsGroup = scene.querySelector('.line-segments')
  const labelsGroup = scene.querySelector('.segment-labels')

  // 线段图参数
  const segWidth = 50
  const segHeight = 24
  const startX = 60
  const smallY = 70   // 小数（1份）在上方
  const largeY = 130  // 大数（N份）在下方

  // step 1: 周长问题先显示周长与长和宽的关系
  if (step >= 1 && isPerimeter) {
    const perimeterLabel = addText(labelsGroup, 200, 40,
      `周长 = 2 × (${largeName} + ${smallName}) = ${sum}厘米`, { fill: '#2c3e50', size: 13, weight: 'bold' })
    gsap.fromTo(perimeterLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 })

    const sumLabel = addText(labelsGroup, 200, 60,
      `所以 ${largeName} + ${smallName} = ${sum} ÷ 2 = ${actualSum}厘米`, { fill: '#f5a623', size: 13, weight: 'bold' })
    gsap.fromTo(sumLabel, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 })
  }

  // step 1或2: 画小数（1份）和大数（N份）的线段
  const drawStep = isPerimeter ? 2 : 1
  if (step >= drawStep) {
    // 小数：1段
    const smallSeg = createSvgElement('rect', {
      x: startX, y: smallY, width: segWidth, height: segHeight,
      fill: '#3498db', rx: 4
    })
    segmentsGroup.appendChild(smallSeg)
    gsap.fromTo(smallSeg, { scaleX: 0 }, { scaleX: 1, duration: 0.5, transformOrigin: 'left center' })
    addText(labelsGroup, startX + segWidth / 2, smallY - 10, `${smallName}（1份）`, { fill: '#3498db', size: 13 })

    // 大数：N段
    for (let i = 0; i < multiple; i++) {
      const seg = createSvgElement('rect', {
        x: startX + i * segWidth, y: largeY, width: segWidth - 2, height: segHeight,
        fill: '#e91e63', rx: 4, opacity: 0.85
      })
      segmentsGroup.appendChild(seg)
      gsap.fromTo(seg, { scaleX: 0 }, { scaleX: 1, duration: 0.3, delay: 0.3 + i * 0.15, transformOrigin: 'left center' })
    }
    addText(labelsGroup, startX + (multiple * segWidth) / 2, largeY - 10, `${largeName}（${multiple}份）`, { fill: '#e91e63', size: 13 })
  }

  // step 2或3: 标注总份数和"和"
  const bracketStep = isPerimeter ? 3 : 2
  if (step >= bracketStep) {
    // 总份数标注
    const totalParts = multiple + 1
    const totalWidth = totalParts * segWidth

    // 画一条括线表示总和
    const bracketLine = createSvgElement('line', {
      x1: startX, y1: 170, x2: startX + totalWidth, y2: 170,
      stroke: '#f5a623', 'stroke-width': 2.5
    })
    segmentsGroup.appendChild(bracketLine)
    gsap.fromTo(bracketLine, { scaleX: 0 }, { scaleX: 1, duration: 0.6, transformOrigin: 'left center' })

    // 括线两端的竖线
    const leftTick = createSvgElement('line', {
      x1: startX, y1: 165, x2: startX, y2: 175,
      stroke: '#f5a623', 'stroke-width': 2.5
    })
    const rightTick = createSvgElement('line', {
      x1: startX + totalWidth, y1: 165, x2: startX + totalWidth, y2: 175,
      stroke: '#f5a623', 'stroke-width': 2.5
    })
    segmentsGroup.appendChild(leftTick)
    segmentsGroup.appendChild(rightTick)
    gsap.fromTo([leftTick, rightTick], { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.3 })

    // 总份数标签
    const totalLabel = addText(labelsGroup, startX + totalWidth / 2, 190,
      `一共 ${totalParts} 份 = ${actualSum}`, { fill: '#f5a623', size: 14, weight: 'bold' })
    gsap.fromTo(totalLabel, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.4 })
  }

  // step 3或4: 显示计算1份的算式
  const formulaStep = isPerimeter ? 4 : 3
  if (step >= formulaStep) {
    const formula = addText(labelsGroup, 200, 220,
      `1份（${smallName}）= ${actualSum} ÷ (${multiple} + 1) = ${smallValue}`, { fill: '#2c3e50', size: 14, weight: 'bold' })
    gsap.fromTo(formula, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  // step 4或5: 显示答案
  const answerStep = isPerimeter ? 5 : 4
  if (step >= answerStep) {
    const answerText = addText(labelsGroup, 200, 250, `答案：${props.answer}`, { fill: '#e74c3c', size: 16, weight: 'bold' })
    gsap.fromTo(answerText, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, transformOrigin: 'center' })
  }
}

// 鸡兔同笼 - 展示假设法和替换过程
const renderChickenRabbit = async (step) => {
  await nextTick()
  const scene = svgRef.value.querySelector('.scene')
  if (!scene) return
  const { q } = parseQuestion()
  const totalMatch = q.match(/共(\d+)只|共(\d+)辆/)
  const total = totalMatch ? parseInt(totalMatch[1] || totalMatch[2]) : 8
  const legMatch = q.match(/(\d+)条|(\d+)只脚|(\d+)个轮子/)
  const legs = legMatch ? parseInt(legMatch[1] || legMatch[2] || legMatch[3]) : 22

  const animalsGroup = scene.querySelector('.animals')
  const labelsGroup = scene.querySelector('.animal-labels')

  // 判断是鸡兔问题还是车辆问题
  const isVehicle = q.includes('汽车') || q.includes('摩托车')
  const smallName = isVehicle ? '摩托车' : '鸡'
  const largeName = isVehicle ? '汽车' : '兔'
  const smallEmoji = isVehicle ? '🏍️' : '🐔'
  const largeEmoji = isVehicle ? '🚗' : '🐰'
  const legUnit = isVehicle ? '个轮子' : '条腿'

  // step 1: 假设全是鸡/摩托车
  if (step >= 1) {
    for (let i = 0; i < total; i++) {
      const x = 80 + (i % 4) * 80
      const y = 80 + Math.floor(i / 4) * 80
      const g = createSvgElement('g', {})
      const circle = createSvgElement('circle', { cx: x, cy: y, r: 25, fill: '#f5a623' })
      const text = createSvgElement('text', { x: x, y: y + 5, 'text-anchor': 'middle', fill: 'white', 'font-size': 20 })
      text.textContent = smallEmoji
      g.appendChild(circle)
      g.appendChild(text)
      animalsGroup.appendChild(g)
      gsap.fromTo(g, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, delay: i * 0.05, transformOrigin: 'center' })
    }
    addText(labelsGroup, 200, 200, `假设${total}只全是${smallName}`, { fill: '#2c3e50', size: 14 })
  }

  // step 2: 计算假设下的腿数
  if (step >= 2) {
    const expectedLegs = total * 2
    const label = addText(labelsGroup, 200, 225, `${smallName}有 ${total} × 2 = ${expectedLegs} ${legUnit}`, { fill: '#f5a623', size: 13 })
    gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  }

  // step 3: 显示实际与假设的差距，并展示替换过程
  if (step >= 3) {
    const diff = legs - total * 2
    const label = addText(labelsGroup, 200, 245, `实际${legs}${legUnit}，少了${diff}${legUnit}`, { fill: '#e74c3c', size: 13 })
    gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 })

    // 展示替换概念：把一只鸡换成兔，多2条腿
    const swapLabel = addText(labelsGroup, 200, 265, `每把一只${smallName}换成${largeName}，多2${legUnit}`, { fill: '#2c3e50', size: 12 })
    gsap.fromTo(swapLabel, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.3 })

    // 动画演示替换过程：将部分鸡变成兔
    const rabbitCount = diff / 2
    const animalGroups = animalsGroup.querySelectorAll('g')
    for (let i = 0; i < rabbitCount && i < animalGroups.length; i++) {
      const g = animalGroups[i]
      const text = g.querySelector('text')
      const circle = g.querySelector('circle')
      // 变成兔子的颜色
      gsap.to(circle, { fill: '#e91e63', duration: 0.5, delay: 0.5 + i * 0.3 })
      // 更换emoji
      setTimeout(() => {
        text.textContent = largeEmoji
      }, 500 + i * 300)
    }
  }

  // step 4: 显示答案
  if (step >= 4) {
    const diff = legs - total * 2
    const rabbitCount = diff / 2
    const chickenCount = total - rabbitCount
    const answerText = addText(labelsGroup, 200, 285, `${largeName}${rabbitCount}只，${smallName}${chickenCount}只`, { fill: '#e74c3c', size: 16, weight: 'bold' })
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