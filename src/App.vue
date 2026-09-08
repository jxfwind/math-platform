<template>
  <div class="container">
    <header class="header">
      <h1> 小学数学思维训练平台</h1>
      <p>三年级浅奥专题 · 动画讲解 · 轻松学懂</p>
    </header>

    <main v-if="!selectedCategory">
      <div class="category-grid">
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-card"
          @click="selectCategory(category)"
        >
          <h3>{{ category.icon }} {{ category.name }}</h3>
          <p>{{ category.description }}</p>
        </div>
      </div>
    </main>

    <main v-else>
      <button class="back-btn" @click="selectedCategory = null">← 返回分类</button>
      <h2 style="margin-bottom: 20px; color: var(--primary);">
        {{ selectedCategory.icon }} {{ selectedCategory.name }}
      </h2>
      <div class="problem-list">
        <div
          v-for="problem in filteredProblems"
          :key="problem.id"
          class="problem-card"
        >
          <div class="problem-header">
            <h3 class="problem-title">{{ problem.title }}</h3>
            <span :class="['difficulty', `difficulty-${problem.difficulty}`]">
              {{ difficultyText(problem.difficulty) }}
            </span>
          </div>
          <p style="margin-bottom: 16px; font-size: 1.05rem; line-height: 1.8;">
            {{ problem.question }}
          </p>
          <button class="explain-btn" @click="openExplanation(problem)">
            💡 讲解
          </button>

          <div v-if="activeProblem && activeProblem.id === problem.id" class="explanation-panel">
            <h4>📖 动画讲解</h4>
            <MathAnimation
              :animation-type="activeProblem.explanation.animationType"
              :steps="activeProblem.explanation.steps"
              :question="activeProblem.question"
              :answer="activeProblem.answer"
            />
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px;">
              <p style="font-weight: 600; color: var(--primary); margin-bottom: 8px;">
                答案：{{ activeProblem.answer }}
              </p>
              <div style="color: var(--text-light);">
                <p v-for="(step, index) in activeProblem.explanation.steps" :key="index" style="margin-bottom: 8px;">
                  {{ index + 1 }}. {{ step }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { categories, problems } from './data/problems.js'
import MathAnimation from './components/MathAnimation.vue'

const selectedCategory = ref(null)
const activeProblem = ref(null)

const filteredProblems = computed(() => {
  if (!selectedCategory.value) return []
  return problems.filter(p => p.categoryId === selectedCategory.value.id)
})

const selectCategory = (category) => {
  selectedCategory.value = category
  activeProblem.value = null
}

const openExplanation = (problem) => {
  activeProblem.value = activeProblem.value && activeProblem.value.id === problem.id ? null : problem
}

const difficultyText = (difficulty) => {
  const map = { easy: '简单', medium: '中等', hard: '较难' }
  return map[difficulty] || difficulty
}
</script>
