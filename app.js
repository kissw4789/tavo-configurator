// Tavo 数值系统配置器
// 纯前端，无需后端

// ==================== 配置数据 ====================
const DEFAULT_CONFIG = {
  schemaVersion: 296,
  packageType: 'tavo-value-system-config',
  name: '默认数值配置',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  settings: {
    confidenceThreshold: 0.6,
    maxEventsPerMessage: 3,
    maxLogs: 100,
    maxProcessed: 300
  },
  values: [],
  explicitEvents: [],
  display: {
    panelGroups: []
  }
};

// 速度预设
const SPEED_PRESETS = {
  slow: { small: [1, 1], medium: [1, 2], large: [2, 4] },
  standard: { small: [1, 3], medium: [4, 7], large: [8, 12] },
  fast: { small: [2, 5], medium: [6, 12], large: [13, 20] }
};

// 内置模板
const TEMPLATES = {
  blank: {
    name: '空白配置',
    values: [],
    explicitEvents: []
  },
  modern: {
    name: '现代日常',
    values: [
      {
        id: 'v_favor',
        name: '好感度',
        description: '角色对玩家的亲近、信任和情感投入。',
        valueKind: 'score',
        semanticType: 'relationship',
        applyScope: 'all_chat_characters',
        defaultValue: 50,
        min: 0,
        max: 100,
        unit: '',
        displayMode: 'bar',
        autoJudge: true,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'temporary_default_pending',
        repeatDecay: { enabled: true, windowMessages: 5, multiply: 0.5 },
        principle: {
          positive: '真诚帮助、尊重、理解、保护角色，或给予有意义的善意。',
          negative: '羞辱、欺骗、背叛、忽视角色，或明显伤害关系的行为。',
          noChange: '普通寒暄、礼貌互动、没有明确情绪重量的日常聊天。'
        },
        intensityRule: { small: '轻微影响。', medium: '明显影响。', large: '重大影响。' },
        stages: [
          { id: 'cold', name: '冷淡', min: 0, max: 39, guidance: '保持距离，回应克制。' },
          { id: 'normal', name: '普通', min: 40, max: 69, guidance: '正常交流，按具体情境回应。' },
          { id: 'close', name: '亲近', min: 70, max: 100, guidance: '更主动、更信任，也更在意玩家反应。' }
        ],
        aliases: ['亲密度', '关系', '信任'],
        exclude: ['普通问候', '无关闲聊']
      }
    ],
    explicitEvents: []
  },
  fantasy: {
    name: '西幻冒险',
    values: [
      {
        id: 'v_favor',
        name: '好感度',
        description: '角色对玩家的亲近、信任和情感投入。',
        valueKind: 'score',
        semanticType: 'relationship',
        applyScope: 'all_chat_characters',
        defaultValue: 50,
        min: 0,
        max: 100,
        unit: '',
        displayMode: 'bar',
        autoJudge: true,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'temporary_default_pending',
        repeatDecay: { enabled: true, windowMessages: 5, multiply: 0.5 },
        principle: {
          positive: '真诚帮助、尊重、理解、保护角色，或给予有意义的善意。',
          negative: '羞辱、欺骗、背叛、忽视角色，或明显伤害关系的行为。',
          noChange: '普通寒暄、礼貌互动、没有明确情绪重量的日常聊天。'
        },
        intensityRule: { small: '轻微影响。', medium: '明显影响。', large: '重大影响。' },
        stages: [
          { id: 'cold', name: '冷淡', min: 0, max: 39, guidance: '保持距离，回应克制。' },
          { id: 'normal', name: '普通', min: 40, max: 69, guidance: '正常交流，按具体情境回应。' },
          { id: 'close', name: '亲近', min: 70, max: 100, guidance: '更主动、更信任，也更在意玩家反应。' }
        ],
        aliases: ['亲密度', '关系', '信任'],
        exclude: ['普通问候', '无关闲聊']
      },
      {
        id: 'v_hp',
        name: '生命值',
        description: '角色当前的生命状态。',
        valueKind: 'score',
        semanticType: 'resource',
        applyScope: 'all_chat_characters',
        defaultValue: 100,
        min: 0,
        max: 100,
        unit: 'HP',
        displayMode: 'bar',
        autoJudge: false,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'fixed_default',
        repeatDecay: { enabled: false, windowMessages: 5, multiply: 0.5 },
        principle: { positive: '', negative: '', noChange: '' },
        intensityRule: { small: '', medium: '', large: '' },
        stages: [
          { id: 'critical', name: '濒死', min: 0, max: 10, guidance: '极度虚弱，需要立即治疗。' },
          { id: 'wounded', name: '受伤', min: 11, max: 50, guidance: '明显受伤，行动受限。' },
          { id: 'healthy', name: '健康', min: 51, max: 100, guidance: '状态良好，可以正常行动。' }
        ],
        aliases: ['HP', '血量', '生命'],
        exclude: []
      },
      {
        id: 'v_gold',
        name: '金币',
        description: '玩家当前持有的金钱。',
        valueKind: 'quantity',
        semanticType: 'resource',
        applyScope: 'user',
        defaultValue: 100,
        min: 0,
        max: 999999,
        unit: '金币',
        displayMode: 'number',
        autoJudge: false,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'fixed_default',
        repeatDecay: { enabled: false, windowMessages: 5, multiply: 0.5 },
        principle: { positive: '', negative: '', noChange: '' },
        intensityRule: { small: '', medium: '', large: '' },
        stages: [],
        aliases: ['金钱', '钱', '财富'],
        exclude: []
      }
    ],
    explicitEvents: []
  },
  romance: {
    name: '恋爱互动',
    values: [
      {
        id: 'v_favor',
        name: '好感度',
        description: '角色对玩家的亲近、信任和情感投入。',
        valueKind: 'score',
        semanticType: 'relationship',
        applyScope: 'all_chat_characters',
        defaultValue: 30,
        min: 0,
        max: 100,
        unit: '',
        displayMode: 'bar',
        autoJudge: true,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'temporary_default_pending',
        repeatDecay: { enabled: true, windowMessages: 5, multiply: 0.5 },
        principle: {
          positive: '真诚关心、浪漫举动、深入交流、保护支持、记住细节。',
          negative: '冷漠忽视、欺骗背叛、言语伤害、不尊重边界。',
          noChange: '普通社交、日常寒暄、无情感重量的互动。'
        },
        intensityRule: { small: '轻微好感波动。', medium: '明显情感变化。', large: '重大关系转折。' },
        stages: [
          { id: 'stranger', name: '陌生', min: 0, max: 19, guidance: '保持礼貌距离，不主动亲近。' },
          { id: 'acquaintance', name: '相识', min: 20, max: 39, guidance: '可以正常交流，但保持一定距离。' },
          { id: 'friend', name: '朋友', min: 40, max: 59, guidance: '愿意分享一些想法，偶尔主动交流。' },
          { id: 'close', name: '亲近', min: 60, max: 79, guidance: '信任玩家，愿意分享心事，在意玩家感受。' },
          { id: 'love', name: '爱慕', min: 80, max: 100, guidance: '深深爱着玩家，愿意为玩家付出一切。' }
        ],
        aliases: ['亲密度', '关系', '信任', '爱意'],
        exclude: ['普通问候', '无关闲聊']
      },
      {
        id: 'v_trust',
        name: '信任度',
        description: '角色对玩家的信任程度。',
        valueKind: 'score',
        semanticType: 'relationship',
        applyScope: 'all_chat_characters',
        defaultValue: 20,
        min: 0,
        max: 100,
        unit: '',
        displayMode: 'bar',
        autoJudge: true,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'slow',
        initStrategy: 'temporary_default_pending',
        repeatDecay: { enabled: true, windowMessages: 10, multiply: 0.3 },
        principle: {
          positive: '守信、诚实、支持、保守秘密、兑现承诺。',
          negative: '说谎、背叛、泄露秘密、食言、利用。',
          noChange: '日常交流、无承诺的互动。'
        },
        intensityRule: { small: '轻微信任波动。', medium: '明显信任变化。', large: '重大信任危机或建立。' },
        stages: [
          { id: 'distrust', name: '不信任', min: 0, max: 29, guidance: '保持警惕，不轻易相信玩家的话。' },
          { id: 'cautious', name: '谨慎', min: 30, max: 59, guidance: '愿意尝试信任，但仍有保留。' },
          { id: 'trusted', name: '信任', min: 60, max: 100, guidance: '完全信任玩家，愿意托付重要的事。' }
        ],
        aliases: ['信赖', '信用'],
        exclude: []
      }
    ],
    explicitEvents: []
  },
  survival: {
    name: '生存探索',
    values: [
      {
        id: 'v_health',
        name: '生命值',
        description: '玩家当前的生命状态。',
        valueKind: 'score',
        semanticType: 'resource',
        applyScope: 'user',
        defaultValue: 100,
        min: 0,
        max: 100,
        unit: 'HP',
        displayMode: 'bar',
        autoJudge: false,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'fixed_default',
        repeatDecay: { enabled: false, windowMessages: 5, multiply: 0.5 },
        principle: { positive: '', negative: '', noChange: '' },
        intensityRule: { small: '', medium: '', large: '' },
        stages: [
          { id: 'critical', name: '濒死', min: 0, max: 10, guidance: '极度虚弱，需要立即治疗。' },
          { id: 'wounded', name: '受伤', min: 11, max: 50, guidance: '明显受伤，行动受限。' },
          { id: 'healthy', name: '健康', min: 51, max: 100, guidance: '状态良好，可以正常行动。' }
        ],
        aliases: ['HP', '血量'],
        exclude: []
      },
      {
        id: 'v_hunger',
        name: '饱食度',
        description: '玩家当前的饥饿状态。',
        valueKind: 'score',
        semanticType: 'resource',
        applyScope: 'user',
        defaultValue: 80,
        min: 0,
        max: 100,
        unit: '',
        displayMode: 'bar',
        autoJudge: false,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'fixed_default',
        repeatDecay: { enabled: false, windowMessages: 5, multiply: 0.5 },
        principle: { positive: '', negative: '', noChange: '' },
        intensityRule: { small: '', medium: '', large: '' },
        stages: [
          { id: 'starving', name: '饥饿', min: 0, max: 20, guidance: '极度饥饿，影响行动能力。' },
          { id: 'hungry', name: '有点饿', min: 21, max: 50, guidance: '感到饥饿，需要进食。' },
          { id: 'satisfied', name: '饱腹', min: 51, max: 100, guidance: '状态良好，不需要进食。' }
        ],
        aliases: ['饥饿', '食物'],
        exclude: []
      },
      {
        id: 'v_thirst',
        name: '口渴度',
        description: '玩家当前的口渴状态。',
        valueKind: 'score',
        semanticType: 'resource',
        applyScope: 'user',
        defaultValue: 80,
        min: 0,
        max: 100,
        unit: '',
        displayMode: 'bar',
        autoJudge: false,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'fixed_default',
        repeatDecay: { enabled: false, windowMessages: 5, multiply: 0.5 },
        principle: { positive: '', negative: '', noChange: '' },
        intensityRule: { small: '', medium: '', large: '' },
        stages: [
          { id: 'dehydrated', name: '脱水', min: 0, max: 20, guidance: '极度口渴，影响行动能力。' },
          { id: 'thirsty', name: '口渴', min: 21, max: 50, guidance: '感到口渴，需要喝水。' },
          { id: 'hydrated', name: '水分充足', min: 51, max: 100, guidance: '状态良好，不需要喝水。' }
        ],
        aliases: ['水分', '口渴'],
        exclude: []
      }
    ],
    explicitEvents: []
  },
  ensemble: {
    name: '群像剧情',
    values: [
      {
        id: 'v_favor',
        name: '好感度',
        description: '角色对玩家的亲近、信任和情感投入。',
        valueKind: 'score',
        semanticType: 'relationship',
        applyScope: 'all_chat_characters',
        defaultValue: 50,
        min: 0,
        max: 100,
        unit: '',
        displayMode: 'bar',
        autoJudge: true,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'temporary_default_pending',
        repeatDecay: { enabled: true, windowMessages: 5, multiply: 0.5 },
        principle: {
          positive: '真诚帮助、尊重、理解、保护角色，或给予有意义的善意。',
          negative: '羞辱、欺骗、背叛、忽视角色，或明显伤害关系的行为。',
          noChange: '普通寒暄、礼貌互动、没有明确情绪重量的日常聊天。'
        },
        intensityRule: { small: '轻微影响。', medium: '明显影响。', large: '重大影响。' },
        stages: [
          { id: 'cold', name: '冷淡', min: 0, max: 39, guidance: '保持距离，回应克制。' },
          { id: 'normal', name: '普通', min: 40, max: 69, guidance: '正常交流，按具体情境回应。' },
          { id: 'close', name: '亲近', min: 70, max: 100, guidance: '更主动、更信任，也更在意玩家反应。' }
        ],
        aliases: ['亲密度', '关系', '信任'],
        exclude: ['普通问候', '无关闲聊']
      },
      {
        id: 'v_tension',
        name: '紧张度',
        description: '当前剧情的紧张程度。',
        valueKind: 'score',
        semanticType: 'state',
        applyScope: 'global',
        defaultValue: 30,
        min: 0,
        max: 100,
        unit: '',
        displayMode: 'bar',
        autoJudge: true,
        injectToAI: true,
        judgeStyle: 'standard',
        speedPreset: 'standard',
        initStrategy: 'fixed_default',
        repeatDecay: { enabled: true, windowMessages: 3, multiply: 0.7 },
        principle: {
          positive: '冲突升级、危机出现、秘密揭露、立场对立。',
          negative: '和解、危机解除、误会澄清、和平对话。',
          noChange: '日常互动、平静场景、无冲突对话。'
        },
        intensityRule: { small: '轻微紧张波动。', medium: '明显紧张升级。', large: '重大危机爆发。' },
        stages: [
          { id: 'calm', name: '平静', min: 0, max: 30, guidance: '氛围轻松，没有明显冲突。' },
          { id: 'tense', name: '紧张', min: 31, max: 70, guidance: '存在潜在冲突，气氛微妙。' },
          { id: 'crisis', name: '危机', min: 71, max: 100, guidance: '冲突爆发，局势紧张。' }
        ],
        aliases: ['戏剧张力', '冲突度'],
        exclude: []
      }
    ],
    explicitEvents: []
  }
};

// ==================== 全局状态 ====================
let config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
let currentEditingVariable = null;
let currentTemplate = null;

// ==================== 工具函数 ====================
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function showToast(message, type = 'info') {
  const toast = $('#toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function generateId() {
  return 'v_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// ==================== 存储 ====================
function saveToStorage() {
  try {
    localStorage.setItem('tavo-config', JSON.stringify(config));
  } catch (e) {
    console.error('保存失败:', e);
  }
}

function loadFromStorage() {
  try {
    const saved = localStorage.getItem('tavo-config');
    if (saved) {
      config = JSON.parse(saved);
      return true;
    }
  } catch (e) {
    console.error('加载失败:', e);
  }
  return false;
}

// ==================== 校验 ====================
function validateConfig() {
  const errors = [];
  const warnings = [];
  const infos = [];

  // 检查变量 ID 唯一性
  const ids = new Set();
  config.values.forEach((v, i) => {
    if (!v.id) {
      errors.push(`变量 "${v.name || i + 1}" 缺少 ID`);
    } else if (ids.has(v.id)) {
      errors.push(`变量 ID "${v.id}" 重复`);
    } else {
      ids.add(v.id);
    }
  });

  // 检查每个变量
  config.values.forEach((v, i) => {
    const name = v.name || `变量 ${i + 1}`;

    if (!v.name) {
      errors.push(`${name}: 名称不能为空`);
    }

    if (v.valueKind === 'score' || v.valueKind === 'quantity') {
      if (v.min >= v.max) {
        errors.push(`${name}: min 必须小于 max`);
      }
      if (v.defaultValue < v.min || v.defaultValue > v.max) {
        errors.push(`${name}: 默认值超出范围`);
      }

      // 检查阶段区间
      if (v.stages && v.stages.length > 0) {
        const sorted = [...v.stages].sort((a, b) => a.min - b.min);
        for (let j = 0; j < sorted.length; j++) {
          if (sorted[j].min > sorted[j].max) {
            errors.push(`${name} - 阶段 "${sorted[j].name}": min 不能大于 max`);
          }
          if (j > 0 && sorted[j].min <= sorted[j - 1].max) {
            warnings.push(`${name} - 阶段 "${sorted[j].name}" 与 "${sorted[j - 1].name}" 区间重叠`);
          }
        }

        // 检查是否覆盖完整范围
        const firstMin = sorted[0].min;
        const lastMax = sorted[sorted.length - 1].max;
        if (firstMin > v.min || lastMax < v.max) {
          infos.push(`${name}: 阶段未覆盖完整范围 (${v.min}-${v.max})`);
        }
      }
    }

    if (v.autoJudge) {
      if (!v.principle || (!v.principle.positive && !v.principle.negative)) {
        warnings.push(`${name}: 自动判断变量建议配置判断原则`);
      }
    }

    if (v.injectToAI && !v.id) {
      errors.push(`${name}: 启用注入的变量必须有 ID`);
    }
  });

  // 检查明确事件引用
  config.explicitEvents.forEach((e, i) => {
    if (!config.values.find(v => v.id === e.variableId)) {
      errors.push(`明确事件 "${e.description || i + 1}" 引用的变量不存在`);
    }
  });

  return { errors, warnings, infos };
}

// ==================== 渲染函数 ====================
function renderOverview() {
  // 更新统计
  $('#stat-variables').textContent = config.values.length;
  $('#stat-auto-judge').textContent = config.values.filter(v => v.autoJudge).length;

  const scopes = new Set(config.values.map(v => v.applyScope));
  $('#stat-objects').textContent = scopes.size;

  const validation = validateConfig();
  const statusEl = $('#stat-validation');
  if (validation.errors.length > 0) {
    statusEl.textContent = `${validation.errors.length} 错误`;
    statusEl.style.color = 'var(--danger)';
  } else if (validation.warnings.length > 0) {
    statusEl.textContent = `${validation.warnings.length} 警告`;
    statusEl.style.color = 'var(--warning)';
  } else {
    statusEl.textContent = '通过';
    statusEl.style.color = 'var(--success)';
  }

  // 渲染校验结果
  renderValidationResults(validation);
}

function renderValidationResults(validation) {
  const container = $('#validation-results');

  if (validation.errors.length === 0 && validation.warnings.length === 0 && validation.infos.length === 0) {
    container.innerHTML = '<div class="validation-empty">配置校验通过</div>';
    return;
  }

  let html = '';

  validation.errors.forEach(msg => {
    html += `<div class="validation-item error"><span class="validation-icon">❌</span><span>${msg}</span></div>`;
  });

  validation.warnings.forEach(msg => {
    html += `<div class="validation-item warning"><span class="validation-icon">⚠️</span><span>${msg}</span></div>`;
  });

  validation.infos.forEach(msg => {
    html += `<div class="validation-item info"><span class="validation-icon">ℹ️</span><span>${msg}</span></div>`;
  });

  container.innerHTML = html;
}

function renderVariableList() {
  const container = $('#variable-list');

  if (config.values.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>暂无变量，点击上方按钮添加</p>
        <p class="hint">或从模板快速开始</p>
      </div>
    `;
    return;
  }

  const kindLabels = {
    score: '分数',
    quantity: '数量',
    status: '状态',
    flag: '开关',
    text: '文本'
  };

  const scopeLabels = {
    current_reply_character: '当前角色',
    all_chat_characters: '所有角色',
    user: '玩家',
    global: '全局'
  };

  container.innerHTML = config.values.map((v, i) => `
    <div class="variable-card ${v.disabled ? 'disabled' : ''}" data-index="${i}">
      <div class="variable-info">
        <div class="variable-name">${v.name || '未命名变量'}</div>
        <div class="variable-meta">
          <span>${kindLabels[v.valueKind] || v.valueKind}</span>
          <span>${scopeLabels[v.applyScope] || v.applyScope}</span>
          ${v.autoJudge ? '<span>自动判断</span>' : ''}
          ${v.injectToAI ? '<span>注入AI</span>' : ''}
          <span>${v.stages ? v.stages.length : 0} 阶段</span>
        </div>
      </div>
      <div class="variable-actions">
        <button class="btn btn-secondary btn-sm" onclick="editVariable(${i})">编辑</button>
        <button class="btn btn-secondary btn-sm" onclick="copyVariable(${i})">复制</button>
        <button class="btn btn-secondary btn-sm" onclick="toggleVariable(${i})">${v.disabled ? '启用' : '禁用'}</button>
        <button class="btn btn-danger btn-sm" onclick="deleteVariable(${i})">删除</button>
      </div>
    </div>
  `).join('');
}

function renderObjectUsage() {
  const container = $('#object-usage');

  if (config.values.length === 0) {
    container.innerHTML = '<div class="empty-state">添加变量后显示使用统计</div>';
    return;
  }

  const scopeCounts = {};
  const scopeLabels = {
    current_reply_character: '当前回复角色',
    all_chat_characters: '所有聊天角色',
    user: '用户/玩家',
    global: '全局'
  };

  config.values.forEach(v => {
    scopeCounts[v.applyScope] = (scopeCounts[v.applyScope] || 0) + 1;
  });

  container.innerHTML = Object.entries(scopeCounts).map(([scope, count]) => `
    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border);">
      <span>${scopeLabels[scope] || scope}</span>
      <span style="font-weight: 600;">${count} 个变量</span>
    </div>
  `).join('');
}

function renderAutoJudgeList() {
  const container = $('#auto-judge-list');
  const autoJudgeVars = config.values.filter(v => v.autoJudge);

  if (autoJudgeVars.length === 0) {
    container.innerHTML = '<div class="empty-state">添加启用自动判断的变量后显示</div>';
    return;
  }

  container.innerHTML = autoJudgeVars.map(v => `
    <div class="auto-judge-item">
      <h4>${v.name}</h4>
      <div class="speed">变化速度: ${v.speedPreset || 'standard'}</div>
      <div style="margin-top: 8px; font-size: 12px; color: var(--text-secondary);">
        正面: ${v.principle?.positive || '未设置'}<br>
        负面: ${v.principle?.negative || '未设置'}
      </div>
    </div>
  `).join('');
}

function renderExplicitEvents() {
  const container = $('#explicit-events');

  if (config.explicitEvents.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>明确事件优先级高于自动判断</p>
        <button id="btn-add-explicit" class="btn btn-secondary" onclick="openExplicitModal()">+ 添加明确事件</button>
      </div>
    `;
    return;
  }

  const directionLabels = { positive: '正向', negative: '负向' };
  const intensityLabels = { small: '小', medium: '中', large: '大' };

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 8px;">
      ${config.explicitEvents.map((e, i) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: var(--bg); border-radius: var(--radius-sm);">
          <div>
            <strong>${e.description}</strong>
            <span style="margin-left: 8px; font-size: 12px; color: var(--text-secondary);">
              ${e.variableId} · ${directionLabels[e.direction]} · ${intensityLabels[e.intensity]}
            </span>
          </div>
          <button class="btn btn-danger btn-sm" onclick="deleteExplicitEvent(${i})">删除</button>
        </div>
      `).join('')}
    </div>
    <button id="btn-add-explicit" class="btn btn-secondary" style="margin-top: 12px;" onclick="openExplicitModal()">+ 添加明确事件</button>
  `;
}

function renderPreview(tab = 'panel') {
  const container = $('#preview-content');

  if (config.values.length === 0) {
    container.innerHTML = '<div class="preview-empty">添加变量后预览配置效果</div>';
    return;
  }

  if (tab === 'panel') {
    renderPreviewPanel(container);
  } else if (tab === 'worldbook') {
    renderPreviewWorldbook(container);
  } else if (tab === 'protocol') {
    renderPreviewProtocol(container);
  }
}

function renderPreviewPanel(container) {
  const visibleVars = config.values.filter(v => !v.disabled && v.injectToAI);

  container.innerHTML = `
    <div class="preview-panel">
      <div class="preview-panel-title">${config.name || '数值面板'}</div>
      ${visibleVars.map(v => {
        const percent = v.valueKind === 'score' ?
          Math.round(((v.defaultValue - v.min) / (v.max - v.min)) * 100) : null;
        const stage = v.stages?.find(s => v.defaultValue >= s.min && v.defaultValue <= s.max);

        return `
          <div class="preview-variable">
            <div class="preview-variable-header">
              <span class="preview-variable-name">${v.name}</span>
              <span class="preview-variable-value">${v.defaultValue}${v.unit ? ' ' + v.unit : ''}</span>
            </div>
            ${percent !== null ? `
              <div class="preview-bar">
                <div class="preview-bar-fill" style="width: ${percent}%"></div>
              </div>
            ` : ''}
            ${stage ? `<div class="preview-stage">${stage.name}</div>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderPreviewWorldbook(container) {
  const injectVars = config.values.filter(v => !v.disabled && v.injectToAI);

  let worldbookContent = `=== TVS-核心协议 ===\n`;
  worldbookContent += `你正在使用 Tavo 数值系统。\n`;
  worldbookContent += `当前配置: ${config.name}\n`;
  worldbookContent += `置信度阈值: ${config.settings.confidenceThreshold}\n`;
  worldbookContent += `每条消息最大事件数: ${config.settings.maxEventsPerMessage}\n\n`;
  worldbookContent += `输出格式:\n`;
  worldbookContent += `当判断到数值变化时，输出 JSON:\n`;
  worldbookContent += `{"tvs_events": [{"valueId": "xxx", "direction": "positive/negative/none", "intensity": "small/medium/large", "confidence": 0.8, "evidence": "原因"}]}\n\n`;

  injectVars.forEach(v => {
    worldbookContent += `\n=== TVS-变量-${v.name} ===\n`;
    worldbookContent += `ID: ${v.id}\n`;
    worldbookContent += `描述: ${v.description}\n`;
    worldbookContent += `当前值: ${v.defaultValue}${v.unit ? ' ' + v.unit : ''}\n`;
    worldbookContent += `范围: ${v.min} - ${v.max}\n`;

    if (v.stages && v.stages.length > 0) {
      worldbookContent += `阶段:\n`;
      v.stages.forEach(s => {
        worldbookContent += `  ${s.name} (${s.min}-${s.max}): ${s.guidance}\n`;
      });
    }

    if (v.autoJudge) {
      worldbookContent += `判断原则:\n`;
      worldbookContent += `  正面: ${v.principle?.positive || '未设置'}\n`;
      worldbookContent += `  负面: ${v.principle?.negative || '未设置'}\n`;
      worldbookContent += `  无变化: ${v.principle?.noChange || '未设置'}\n`;
    }
  });

  const tokenEstimate = Math.ceil(worldbookContent.length / 4);

  container.innerHTML = `
    <div style="margin-bottom: 12px; font-size: 13px; color: var(--text-secondary);">
      预估 token: ${tokenEstimate} ${tokenEstimate > 2000 ? '<span style="color: var(--warning);">(较高，建议精简)</span>' : ''}
    </div>
    <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: var(--radius); font-size: 12px; white-space: pre-wrap; max-height: 500px; overflow-y: auto;">${escapeHtml(worldbookContent)}</pre>
  `;
}

function renderPreviewProtocol(container) {
  const injectVars = config.values.filter(v => !v.disabled && v.autoJudge);

  if (injectVars.length === 0) {
    container.innerHTML = '<div class="preview-empty">没有启用自动判断的变量</div>';
    return;
  }

  let protocol = `你是一个数值判断助手。根据对话内容，判断以下变量是否发生变化。\n\n`;
  protocol += `对于每个变量，你需要判断:\n`;
  protocol += `1. direction: positive(正向) / negative(负向) / none(无变化)\n`;
  protocol += `2. intensity: small(小) / medium(中) / large(大)\n`;
  protocol += `3. confidence: 0-1 的置信度\n`;
  protocol += `4. evidence: 判断依据\n\n`;

  protocol += `变量列表:\n\n`;

  injectVars.forEach(v => {
    protocol += `### ${v.name} (${v.id})\n`;
    protocol += `描述: ${v.description}\n`;
    protocol += `当前值: ${v.defaultValue}\n`;
    protocol += `范围: ${v.min} - ${v.max}\n`;

    if (v.principle) {
      protocol += `正向: ${v.principle.positive}\n`;
      protocol += `负向: ${v.principle.negative}\n`;
      protocol += `无变化: ${v.principle.noChange}\n`;
    }

    protocol += `\n`;
  });

  protocol += `输出格式:\n`;
  protocol += `{"tvs_events": [...]}\n`;

  container.innerHTML = `
    <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: var(--radius); font-size: 12px; white-space: pre-wrap; max-height: 500px; overflow-y: auto;">${escapeHtml(protocol)}</pre>
  `;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ==================== 变量编辑 ====================
function openVariableModal(index = null) {
  const modal = $('#modal-variable');
  const title = $('#modal-title');

  if (index !== null && config.values[index]) {
    // 编辑模式
    currentEditingVariable = index;
    title.textContent = '编辑变量';
    const v = config.values[index];

    $('#var-id').value = v.id || '';
    $('#var-name').value = v.name || '';
    $('#var-desc').value = v.description || '';
    $('#var-kind').value = v.valueKind || 'score';
    $('#var-semantic').value = v.semanticType || 'relationship';
    $('#var-scope').value = v.applyScope || 'all_chat_characters';
    $('#var-default').value = v.defaultValue ?? 50;
    $('#var-min').value = v.min ?? 0;
    $('#var-max').value = v.max ?? 100;
    $('#var-unit').value = v.unit || '';
    $('#var-display').value = v.displayMode || 'bar';
    $('#var-auto-judge').checked = v.autoJudge ?? true;
    $('#var-inject').checked = v.injectToAI ?? true;
    $('#var-speed').value = v.speedPreset || 'standard';
    $('#var-judge-style').value = v.judgeStyle || 'standard';
    $('#var-positive').value = v.principle?.positive || '';
    $('#var-negative').value = v.principle?.negative || '';
    $('#var-nochange').value = v.principle?.noChange || '';
    $('#var-intensity-small').value = v.intensityRule?.small || '';
    $('#var-intensity-medium').value = v.intensityRule?.medium || '';
    $('#var-intensity-large').value = v.intensityRule?.large || '';
    $('#var-repeat-enabled').checked = v.repeatDecay?.enabled ?? true;
    $('#var-repeat-window').value = v.repeatDecay?.windowMessages ?? 5;
    $('#var-repeat-multiply').value = v.repeatDecay?.multiply ?? 0.5;
    $('#var-init').value = v.initStrategy || 'temporary_default_pending';
    $('#var-aliases').value = (v.aliases || []).join(',');
    $('#var-exclude').value = (v.exclude || []).join(',');

    renderStages(v.stages || []);
  } else {
    // 新增模式
    currentEditingVariable = null;
    title.textContent = '新增变量';

    $('#var-id').value = generateId();
    $('#var-name').value = '';
    $('#var-desc').value = '';
    $('#var-kind').value = 'score';
    $('#var-semantic').value = 'relationship';
    $('#var-scope').value = 'all_chat_characters';
    $('#var-default').value = 50;
    $('#var-min').value = 0;
    $('#var-max').value = 100;
    $('#var-unit').value = '';
    $('#var-display').value = 'bar';
    $('#var-auto-judge').checked = true;
    $('#var-inject').checked = true;
    $('#var-speed').value = 'standard';
    $('#var-judge-style').value = 'standard';
    $('#var-positive').value = '';
    $('#var-negative').value = '';
    $('#var-nochange').value = '';
    $('#var-intensity-small').value = '';
    $('#var-intensity-medium').value = '';
    $('#var-intensity-large').value = '';
    $('#var-repeat-enabled').checked = true;
    $('#var-repeat-window').value = 5;
    $('#var-repeat-multiply').value = 0.5;
    $('#var-init').value = 'temporary_default_pending';
    $('#var-aliases').value = '';
    $('#var-exclude').value = '';

    renderStages([]);
  }

  // 重置标签页
  $$('.modal .tab').forEach(t => t.classList.remove('active'));
  $$('.modal .tab-content').forEach(c => c.classList.remove('active'));
  $('.modal .tab[data-tab="basic"]').classList.add('active');
  $('#tab-basic').classList.add('active');

  modal.classList.add('open');
}

function renderStages(stages) {
  const container = $('#stages-list');

  if (stages.length === 0) {
    container.innerHTML = '<div class="empty-state">暂无阶段，点击上方按钮添加</div>';
    return;
  }

  container.innerHTML = stages.map((s, i) => `
    <div class="stage-item" data-index="${i}">
      <div class="stage-item-header">
        <h4>阶段 ${i + 1}</h4>
        <div class="stage-item-actions">
          <button class="btn btn-danger btn-sm" onclick="removeStage(${i})">删除</button>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>阶段 ID</label>
          <input type="text" class="input stage-id" value="${s.id || ''}">
        </div>
        <div class="form-group">
          <label>阶段名称</label>
          <input type="text" class="input stage-name" value="${s.name || ''}">
        </div>
        <div class="form-group">
          <label>最小值</label>
          <input type="number" class="input stage-min" value="${s.min ?? 0}">
        </div>
        <div class="form-group">
          <label>最大值</label>
          <input type="number" class="input stage-max" value="${s.max ?? 100}">
        </div>
        <div class="form-group full">
          <label>指导文本</label>
          <textarea class="input stage-guidance" rows="2">${s.guidance || ''}</textarea>
        </div>
      </div>
    </div>
  `).join('');
}

function addStage() {
  const container = $('#stages-list');
  const currentStages = getStagesFromForm();

  const newStage = {
    id: '',
    name: '',
    min: 0,
    max: 100,
    guidance: ''
  };

  currentStages.push(newStage);
  renderStages(currentStages);
}

function removeStage(index) {
  const currentStages = getStagesFromForm();
  currentStages.splice(index, 1);
  renderStages(currentStages);
}

function getStagesFromForm() {
  const items = $$('#stages-list .stage-item');
  return Array.from(items).map(item => ({
    id: item.querySelector('.stage-id').value,
    name: item.querySelector('.stage-name').value,
    min: parseInt(item.querySelector('.stage-min').value) || 0,
    max: parseInt(item.querySelector('.stage-max').value) || 100,
    guidance: item.querySelector('.stage-guidance').value
  }));
}

function saveVariable() {
  const id = $('#var-id').value.trim();
  const name = $('#var-name').value.trim();

  if (!id) {
    showToast('变量 ID 不能为空', 'error');
    return;
  }

  if (!name) {
    showToast('变量名称不能为空', 'error');
    return;
  }

  // 检查 ID 唯一性
  const existingIndex = config.values.findIndex(v => v.id === id);
  if (existingIndex !== -1 && existingIndex !== currentEditingVariable) {
    showToast('变量 ID 已存在', 'error');
    return;
  }

  const variable = {
    id: id,
    name: name,
    description: $('#var-desc').value,
    valueKind: $('#var-kind').value,
    semanticType: $('#var-semantic').value,
    applyScope: $('#var-scope').value,
    defaultValue: parseFloat($('#var-default').value) || 0,
    min: parseFloat($('#var-min').value) || 0,
    max: parseFloat($('#var-max').value) || 100,
    unit: $('#var-unit').value,
    displayMode: $('#var-display').value,
    autoJudge: $('#var-auto-judge').checked,
    injectToAI: $('#var-inject').checked,
    judgeStyle: $('#var-judge-style').value,
    speedPreset: $('#var-speed').value,
    initStrategy: $('#var-init').value,
    repeatDecay: {
      enabled: $('#var-repeat-enabled').checked,
      windowMessages: parseInt($('#var-repeat-window').value) || 5,
      multiply: parseFloat($('#var-repeat-multiply').value) || 0.5
    },
    principle: {
      positive: $('#var-positive').value,
      negative: $('#var-negative').value,
      noChange: $('#var-nochange').value
    },
    intensityRule: {
      small: $('#var-intensity-small').value,
      medium: $('#var-intensity-medium').value,
      large: $('#var-intensity-large').value
    },
    stages: getStagesFromForm(),
    aliases: $('#var-aliases').value.split(',').map(s => s.trim()).filter(Boolean),
    exclude: $('#var-exclude').value.split(',').map(s => s.trim()).filter(Boolean)
  };

  if (currentEditingVariable !== null) {
    // 保留禁用状态
    variable.disabled = config.values[currentEditingVariable].disabled;
    config.values[currentEditingVariable] = variable;
    showToast('变量已更新', 'success');
  } else {
    config.values.push(variable);
    showToast('变量已添加', 'success');
  }

  config.updatedAt = new Date().toISOString();
  saveToStorage();
  refreshAll();
  closeModal('modal-variable');
}

function editVariable(index) {
  openVariableModal(index);
}

function copyVariable(index) {
  const original = config.values[index];
  const copy = JSON.parse(JSON.stringify(original));
  copy.id = generateId();
  copy.name = copy.name + ' (副本)';
  config.values.push(copy);

  config.updatedAt = new Date().toISOString();
  saveToStorage();
  refreshAll();
  showToast('变量已复制', 'success');
}

function toggleVariable(index) {
  config.values[index].disabled = !config.values[index].disabled;

  config.updatedAt = new Date().toISOString();
  saveToStorage();
  refreshAll();
  showToast(config.values[index].disabled ? '变量已禁用' : '变量已启用', 'success');
}

function deleteVariable(index) {
  if (confirm('确定要删除这个变量吗？')) {
    config.values.splice(index, 1);

    config.updatedAt = new Date().toISOString();
    saveToStorage();
    refreshAll();
    showToast('变量已删除', 'success');
  }
}

// ==================== 明确事件 ====================
function openExplicitModal() {
  const modal = $('#modal-explicit');
  const select = $('#explicit-variable');

  // 填充变量选项
  select.innerHTML = config.values
    .filter(v => !v.disabled)
    .map(v => `<option value="${v.id}">${v.name} (${v.id})</option>`)
    .join('');

  $('#explicit-desc').value = '';
  $('#explicit-direction').value = 'positive';
  $('#explicit-intensity').value = 'medium';

  modal.classList.add('open');
}

function saveExplicitEvent() {
  const desc = $('#explicit-desc').value.trim();
  const variableId = $('#explicit-variable').value;
  const direction = $('#explicit-direction').value;
  const intensity = $('#explicit-intensity').value;

  if (!desc) {
    showToast('事件描述不能为空', 'error');
    return;
  }

  if (!variableId) {
    showToast('请选择关联变量', 'error');
    return;
  }

  config.explicitEvents.push({
    description: desc,
    variableId: variableId,
    direction: direction,
    intensity: intensity
  });

  config.updatedAt = new Date().toISOString();
  saveToStorage();
  refreshAll();
  closeModal('modal-explicit');
  showToast('明确事件已添加', 'success');
}

function deleteExplicitEvent(index) {
  if (confirm('确定要删除这个明确事件吗？')) {
    config.explicitEvents.splice(index, 1);

    config.updatedAt = new Date().toISOString();
    saveToStorage();
    refreshAll();
    showToast('明确事件已删除', 'success');
  }
}

// ==================== 导入导出 ====================
function exportConfig() {
  const validation = validateConfig();

  if (validation.errors.length > 0) {
    showToast(`配置有 ${validation.errors.length} 个错误，请先修复`, 'error');
    return;
  }

  if (validation.warnings.length > 0) {
    if (!confirm(`配置有 ${validation.warnings.length} 个警告，确定要导出吗？`)) {
      return;
    }
  }

  return JSON.stringify(config, null, 2);
}

function downloadConfig() {
  const json = exportConfig();
  if (!json) return;

  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${config.name || 'tavo-config'}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('配置已下载', 'success');
}

function copyConfig() {
  const json = exportConfig();
  if (!json) return;

  navigator.clipboard.writeText(json).then(() => {
    showToast('配置已复制到剪贴板', 'success');
  }).catch(() => {
    // 降级方案
    const textarea = document.createElement('textarea');
    textarea.value = json;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('配置已复制到剪贴板', 'success');
  });
}

function importFromFile() {
  const fileInput = $('#file-import');
  fileInput.click();
}

function handleFileImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      importConfig(imported);
    } catch (err) {
      showToast('文件格式错误: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);

  // 清空 input 以便重复选择同一文件
  event.target.value = '';
}

function importFromText() {
  const text = $('#import-text').value.trim();
  if (!text) {
    showToast('请粘贴 JSON 配置', 'error');
    return;
  }

  try {
    const imported = JSON.parse(text);
    importConfig(imported);
  } catch (err) {
    showToast('JSON 格式错误: ' + err.message, 'error');
  }
}

function importConfig(imported) {
  // 基本验证
  if (!imported.packageType || imported.packageType !== 'tavo-value-system-config') {
    showToast('无效的配置包类型', 'error');
    return;
  }

  if (!imported.values || !Array.isArray(imported.values)) {
    showToast('配置包缺少 values 数组', 'error');
    return;
  }

  // 合并配置
  config = {
    ...DEFAULT_CONFIG,
    ...imported,
    schemaVersion: 296,
    updatedAt: new Date().toISOString()
  };

  saveToStorage();
  refreshAll();
  showToast('配置已导入', 'success');

  // 切换到总览页面
  switchPage('overview');
}

// ==================== 模板 ====================
function applyTemplate(templateId) {
  const template = TEMPLATES[templateId];
  if (!template) {
    showToast('模板不存在', 'error');
    return;
  }

  if (config.values.length > 0) {
    currentTemplate = templateId;
    $('#modal-template').classList.add('open');
    return;
  }

  doApplyTemplate(templateId);
}

function doApplyTemplate(templateId) {
  const template = TEMPLATES[templateId];

  config = {
    ...JSON.parse(JSON.stringify(DEFAULT_CONFIG)),
    name: template.name + '配置',
    values: JSON.parse(JSON.stringify(template.values)),
    explicitEvents: JSON.parse(JSON.stringify(template.explicitEvents)),
    updatedAt: new Date().toISOString()
  };

  saveToStorage();
  refreshAll();
  showToast(`已应用模板: ${template.name}`, 'success');
}

// ==================== 页面切换 ====================
function switchPage(pageId) {
  // 更新导航
  $$('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === pageId);
  });

  // 更新页面
  $$('.page').forEach(page => {
    page.classList.toggle('active', page.id === `page-${pageId}`);
  });

  // 刷新页面内容
  if (pageId === 'overview') {
    renderOverview();
  } else if (pageId === 'variables') {
    renderVariableList();
  } else if (pageId === 'objects') {
    renderObjectUsage();
  } else if (pageId === 'rules') {
    renderAutoJudgeList();
    renderExplicitEvents();
  } else if (pageId === 'preview') {
    renderPreview();
  } else if (pageId === 'export') {
    renderExportPage();
  }
}

function renderExportPage() {
  const json = JSON.stringify(config, null, 2);
  $('#json-preview').textContent = json;
}

// ==================== 刷新所有 ====================
function refreshAll() {
  renderOverview();
  renderVariableList();
  renderObjectUsage();
  renderAutoJudgeList();
  renderExplicitEvents();
  renderExportPage();

  const activePage = $('.page.active');
  if (activePage) {
    const pageId = activePage.id.replace('page-', '');
    if (pageId === 'preview') {
      renderPreview();
    }
  }
}

// ==================== 关闭模态框 ====================
function closeModal(modalId) {
  $(`#${modalId}`).classList.remove('open');
}

// ==================== 新建配置 ====================
function newConfig() {
  if (config.values.length > 0) {
    if (!confirm('确定要新建配置吗？当前未保存的更改将丢失。')) {
      return;
    }
  }

  config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  config.createdAt = new Date().toISOString();
  config.updatedAt = new Date().toISOString();

  saveToStorage();
  refreshAll();
  switchPage('overview');
  showToast('已创建新配置', 'success');
}

// ==================== 事件绑定 ====================
document.addEventListener('DOMContentLoaded', function() {
  // 加载保存的配置
  loadFromStorage();

  // 初始渲染
  refreshAll();

  // 导航切换
  $$('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchPage(item.dataset.page));
  });

  // 模板选择
  $$('.template-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTemplate(btn.dataset.template));
  });

  // 新增变量
  $('#btn-add-variable').addEventListener('click', () => openVariableModal());

  // 保存变量
  $('#btn-save-variable').addEventListener('click', saveVariable);

  // 添加阶段
  $('#btn-add-stage').addEventListener('click', addStage);

  // 保存明确事件
  $('#btn-save-explicit').addEventListener('click', saveExplicitEvent);

  // 确认模板
  $('#btn-confirm-template').addEventListener('click', function() {
    if (currentTemplate) {
      doApplyTemplate(currentTemplate);
      closeModal('modal-template');
      currentTemplate = null;
    }
  });

  // 导出按钮
  $('#btn-export-quick').addEventListener('click', downloadConfig);
  $('#btn-download').addEventListener('click', downloadConfig);
  $('#btn-copy').addEventListener('click', copyConfig);

  // 导入按钮
  $('#btn-import').addEventListener('click', importFromFile);
  $('#btn-import-file').addEventListener('click', importFromFile);
  $('#file-import').addEventListener('change', handleFileImport);
  $('#btn-import-text').addEventListener('click', importFromText);

  // 新建配置
  $('#btn-new').addEventListener('click', newConfig);

  // 移动端按钮
  const btnNewMobile = $('#btn-new-mobile');
  const btnImportMobile = $('#btn-import-mobile');
  const btnSaveMobile = $('#btn-save-mobile');
  const btnExportMobile = $('#btn-export-mobile');

  if (btnNewMobile) btnNewMobile.addEventListener('click', newConfig);
  if (btnImportMobile) btnImportMobile.addEventListener('click', importFromFile);
  if (btnSaveMobile) btnSaveMobile.addEventListener('click', function() {
    saveToStorage();
    showToast('草稿已保存', 'success');
  });
  if (btnExportMobile) btnExportMobile.addEventListener('click', downloadConfig);

  // 保存草稿
  $('#btn-save-draft').addEventListener('click', function() {
    saveToStorage();
    showToast('草稿已保存', 'success');
  });

  // 配置名称和题材变化时自动保存
  $('#config-name').addEventListener('change', function() {
    config.name = this.value;
    config.updatedAt = new Date().toISOString();
    saveToStorage();
  });

  $('#config-genre').addEventListener('change', function() {
    config.genre = this.value;
    config.updatedAt = new Date().toISOString();
    saveToStorage();
  });

  // 全局设置变化
  $('#confidence-threshold').addEventListener('input', function() {
    config.settings.confidenceThreshold = parseFloat(this.value);
    $('#confidence-value').textContent = this.value;
    saveToStorage();
  });

  $('#max-events').addEventListener('change', function() {
    config.settings.maxEventsPerMessage = parseInt(this.value) || 3;
    saveToStorage();
  });

  $('#max-logs').addEventListener('change', function() {
    config.settings.maxLogs = parseInt(this.value) || 100;
    saveToStorage();
  });

  // 预览标签切换
  $$('.preview-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      $$('.preview-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderPreview(this.dataset.tab);
    });
  });

  // 模态框标签切换
  $$('.modal .tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      modal.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      $(`#tab-${this.dataset.tab}`).classList.add('active');
    });
  });

  // 折叠面板
  $$('.collapse-header').forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('open');
      const target = $(`#${this.dataset.target}`);
      target.classList.toggle('open');
    });
  });

  // 模态框关闭
  $$('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').classList.remove('open');
    });
  });

  $$('.modal-cancel').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').classList.remove('open');
    });
  });

  // 点击模态框背景关闭
  $$('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('open');
      }
    });
  });

  // 数据形态变化时更新相关字段
  $('#var-kind').addEventListener('change', function() {
    const kind = this.value;
    const minInput = $('#var-min');
    const maxInput = $('#var-max');
    const displaySelect = $('#var-display');

    if (kind === 'flag') {
      minInput.value = 0;
      maxInput.value = 1;
      displaySelect.value = 'number';
    } else if (kind === 'text') {
      displaySelect.value = 'text';
    }
  });
});
