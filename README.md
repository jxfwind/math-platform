# 小学数学思维训练平台

一个适合小学三年级学生的数学思维训练平台，题目难度相当于浅奥水平，包含植树问题、年龄问题、差倍问题、鸡兔同笼问题、和差问题、和倍问题等分类。每道题目都配有动画讲解，帮助学生理解解题思路。

## 功能特点

- 📚 分类组织：植树问题、年龄问题、差倍问题、鸡兔同笼、和差问题、和倍问题
- 🎯 难度分级：简单、中等、较难
- 🎬 动画讲解：每道题目都有分步动画演示
- 📱 响应式设计：适配电脑和平板

## 技术栈

- Vue 3
- Vite
- SVG 动画

## 项目结构

```
math-platform/
├── index.html              # 入口 HTML
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置
├── README.md               # 项目说明
├── dist/                   # 构建产物
└── src/
    ├── main.js             # 入口 JS
    ├── App.vue             # 根组件
    ├── style.css           # 全局样式
    ├── data/
    │   └── problems.js     # 题目数据
    └── components/
        └── MathAnimation.vue  # 动画组件
```

## 安装与运行

由于当前环境网络受限，项目依赖通过软链接方式复用本地已有的 node_modules。

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

构建产物在 `dist` 目录下。

## 题目数据

题目数据存储在 `src/data/problems.js` 中，可以方便地添加、修改题目。每个题目包含以下字段：

- `id`: 题目唯一标识
- `categoryId`: 所属分类 ID
- `title`: 题目标题
- `difficulty`: 难度（easy/medium/hard）
- `question`: 题目内容
- `answer`: 答案
- `explanation`: 讲解内容
  - `steps`: 分步讲解文字
  - `animationType`: 动画类型

## 动画类型

- `tree-planting-both`: 两端都种树
- `tree-planting-one`: 一端种树
- `tree-planting-none`: 两端都不种树
- `tree-planting-distance`: 求树间距
- `tree-planting-circle`: 圆形植树
- `age-difference`: 年龄差
- `age-multiple`: 年龄倍数
- `age-sum`: 年龄和
- `age-past`: 过去年龄
- `difference-multiple`: 差倍问题
- `chicken-rabbit`: 鸡兔同笼
- `chicken-rabbit-advanced`: 鸡兔同笼进阶
- `chicken-rabbit-stamp`: 邮票问题
- `sum-difference`: 和差问题
- `multiple-ratio`: 和倍问题
