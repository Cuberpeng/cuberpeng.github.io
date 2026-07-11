---
permalink: /
author_profile: true
stylesheets:
  - /assets/css/home.css
redirect_from:
  - /about/
  - /about.html
---
<div class="lang-en">
<p>I am <strong>Pengrui Xiang (向鹏睿)</strong>, an undergraduate student in the Information Security Experimental Program at Beijing University of Technology. My broader interests lie in <strong>large language models, agents, and multimodal intelligence</strong>, with current research spanning trustworthy AI, model behavior, safety alignment, and vision-language learning.</p>
</div>
<div class="lang-zh">
<p>我是<strong>向鹏睿（Pengrui Xiang）</strong>，现就读于北京工业大学计算机学院信息安全实验班。我的研究兴趣主要包括<strong>大语言模型、智能体与多模态智能</strong>，目前关注可信人工智能、模型行为、安全对齐与视觉语言学习等问题。</p>
</div>

<div class="profile-highlights">
  <span><strong><span class="lang-en">GPA</span><span class="lang-zh">绩点</span></strong> 3.99 / 4.00</span>
  <span><strong><span class="lang-en">Average</span><span class="lang-zh">加权平均分</span></strong> 91.84</span>
  <span><strong><span class="lang-en">Rank</span><span class="lang-zh">专业排名</span></strong> 8 / 66</span>
  <span><strong><span class="lang-en">English</span><span class="lang-zh">英语</span></strong> CET-4 590 · CET-6 554</span>
</div>

<h2 id="news"><span class="lang-en">News</span><span class="lang-zh">动态</span></h2>
<div class="news-box"><ul class="news-list">
  <li><span class="news-date"><em>2026.07</em></span> 🎉 <span class="lang-en">EviGuard was accepted by <a href="https://2026.acmmm.org/" target="_blank" rel="noreferrer"><strong>ACM Multimedia 2026</strong></a>.</span><span class="lang-zh">EviGuard 被 <a href="https://2026.acmmm.org/" target="_blank" rel="noreferrer"><strong>ACM Multimedia 2026</strong></a> 录用。</span></li>
  <li><span class="news-date"><em>2026.05</em></span> 🎉 <span class="lang-en">BEACON was accepted by <a href="https://2026.ijcai.org/" target="_blank" rel="noreferrer"><strong>IJCAI 2026</strong></a>.</span><span class="lang-zh">BEACON 被 <a href="https://2026.ijcai.org/" target="_blank" rel="noreferrer"><strong>IJCAI 2026</strong></a> 录用。</span></li>
  <li><span class="news-date"><em>2026.04</em></span> 🎤 <span class="lang-en">BRACE was accepted as an <strong>oral paper</strong> at <a href="https://ic-icc.cn/" target="_blank" rel="noreferrer">ICIC 2026</a>.</span><span class="lang-zh">BRACE 被 <a href="https://ic-icc.cn/" target="_blank" rel="noreferrer">ICIC 2026</a> 录用为<strong>口头报告论文</strong>。</span></li>
  <li><span class="news-date"><em>2025.09</em></span> 🏆 <span class="lang-en">Won First Prize in the Beijing Division of the National College Students Mathematical Modeling Competition.</span><span class="lang-zh">获全国大学生数学建模竞赛北京赛区一等奖。</span></li>
  <li><span class="news-date"><em>2025.06</em></span> 🤖 <span class="lang-en">Won Third Prize in the Beijing Division of the China Robot and Artificial Intelligence Competition.</span><span class="lang-zh">获中国机器人及人工智能大赛北京赛区三等奖。</span></li>
</ul></div>

<h2 id="publications"><span class="lang-en">Research Works</span><span class="lang-zh">研究成果</span></h2>
<div class="pub-button-container">
  <button class="pub-button active" onclick="filterPublications(event, 'all')"><span class="lang-en">Selected Works</span><span class="lang-zh">精选工作</span></button>
  <button class="pub-button" onclick="filterPublications(event, 'list')"><span class="lang-en">Full Publication List</span><span class="lang-zh">完整论文列表</span></button>
</div>
<div class="publication-note"><span class="lang-en">My name is highlighted in bold. <sup>†</sup> denotes corresponding authors.</span><span class="lang-zh">我的姓名以粗体标出，<sup>†</sup> 表示通讯作者。</span></div>

<div id="core-publications" class="publication-view" data-publication-view="core">
  <div class="publication-card featured"><div class="publication-inner"><div class="pub-media-rotator"><img src="images/eviguard.png" alt="EviGuard framework"></div><div class="publication-content">
    <strong>EviGuard: Evidence-Guided Connector Intervention for Cross-Modal Safety Unlearning in Multimodal LLMs</strong><br><i>Xinyi Huang, <strong>Pengrui Xiang</strong>, Jie Wang, Xuchen Zhai, Jinduo Liu<sup>†</sup>, Honggui Han<sup>†</sup></i><br>
    <span class="lang-en">EviGuard estimates an evidence-weighted low-rank risk subspace at the multimodal connector, selectively suppressing risk-aligned directions while preserving benign capability and improving generalization to unseen cross-modal threats.</span><span class="lang-zh">EviGuard 在多模态连接器处估计证据加权的低秩风险子空间，仅抑制风险相关方向，在保留正常能力的同时提升对未见跨模态威胁的泛化防御能力。</span><br>
    <b><i class="venue-line"><a href="https://2026.acmmm.org/" target="_blank" rel="noreferrer">ACM Multimedia 2026</a> · CCF A · <span class="lang-en">Accepted</span><span class="lang-zh">已录用</span></i></b> <a href="files/EviGuard_ACMMM2026.pdf"><em>[<span class="lang-en">paper</span><span class="lang-zh">论文</span>]</em></a>
  </div></div></div>

  <div class="publication-card"><div class="publication-inner"><div class="pub-media-rotator"><img src="images/brace.png" alt="BRACE framework"></div><div class="publication-content">
    <strong>BRACE: A Benign-History Robust Anchored Calibration and Evaluation Framework for Large Language Model Refusal</strong><br><i><strong>Pengrui Xiang</strong>, Xinyi Huang, Kunyi Zhou, Bokai Cheng, Jinduo Liu<sup>†</sup>, Honggui Han<sup>†</sup></i><br>
    <span class="lang-en">BRACE identifies benign-history-induced refusal drift, constructs History-XSTest with no-history anchors, and uses rank-1 LoRA calibration to reduce false refusals while preserving unsafe-query refusal and improving cross-history consistency.</span><span class="lang-zh">BRACE 建模良性历史诱导的拒答漂移，构建带无历史锚点的 History-XSTest，并使用 Rank-1 LoRA 进行锚定校准，在保持危险请求拒答能力的同时降低误拒答并提升跨历史一致性。</span><br>
    <span class="result-line"><span class="lang-en">Highlights: FR5 29.8% → 17.8%; RSS 0.269 → 0.381, with unsafe-query refusal retained.</span><span class="lang-zh">主要结果：FR5 从 29.8% 降至 17.8%，RSS 从 0.269 提升至 0.381，同时保持危险请求拒答能力。</span></span><br>
    <b><i class="venue-line"><a href="https://ic-icc.cn/" target="_blank" rel="noreferrer">ICIC 2026</a> · Oral · CCF C · <span class="lang-en">Accepted</span><span class="lang-zh">已录用</span></i></b> <a href="files/BRACE_ICIC2026.pdf"><em>[<span class="lang-en">paper</span><span class="lang-zh">论文</span>]</em></a> <a href="https://doi.org/10.1007/978-981-92-3435-6_19" target="_blank" rel="noreferrer"><em>[DOI]</em></a>
  </div></div></div>

  <div class="publication-card"><div class="publication-inner"><div class="pub-media-rotator"><img src="images/beacon.png" alt="BEACON framework"></div><div class="publication-content">
    <strong>BEACON: Budget-Efficient Discovery of Policy Violations in Large Language Models via Cognitive-Guided Monte Carlo Tree Search</strong><br><i>Xinyi Huang, Jie Wang, <strong>Pengrui Xiang</strong>, Yifan Wang, Yu Fu, Jinduo Liu<sup>†</sup></i><br>
    <span class="lang-en">BEACON reframes LLM red teaming as budget-constrained failure discovery and combines cognitive profiling, diversity-aware MCTS, Q-learning, and memory retrieval to discover diverse safety failures earlier with fewer target-model queries.</span><span class="lang-zh">BEACON 将大模型红队测试重新建模为预算约束下的风险发现问题，结合认知画像、多样性感知 MCTS、Q-learning 与经验检索，以更少查询更早发现更多类型的安全失败。</span><br>
    <span class="result-line"><span class="lang-en">Highlights: k-FDQ reduced from 95 to 26 on StrongREJECT and from 120 to 40 on HarmBench.</span><span class="lang-zh">主要结果：StrongREJECT 上 k-FDQ 从 95 降至 26，HarmBench 上从 120 降至 40。</span></span><br>
    <b><i class="venue-line"><a href="https://2026.ijcai.org/" target="_blank" rel="noreferrer">IJCAI 2026</a> · CCF A-B · <span class="lang-en">Accepted</span><span class="lang-zh">已录用</span></i></b> <a href="files/BEACON_IJCAI2026.pdf"><em>[<span class="lang-en">paper</span><span class="lang-zh">论文</span>]</em></a>
  </div></div></div>

  <div class="publication-card"><div class="publication-inner"><div class="pub-media-rotator"><img src="images/marsclip.png" alt="Mars-CLIP framework"></div><div class="publication-content">
    <strong>Mars-CLIP: Global-Local Semantic Bridging for Remote Sensing Vision-Language Learning</strong><br><i>Kunyi Zhou<sup>†</sup>, Zimo Han, Yuxuan Wang, <strong>Pengrui Xiang</strong>, Shangqing Li, Bokai Cheng, Xifan Yin</i><br>
    <span class="lang-en">A remote-sensing vision-language pre-training study exploring global-local semantic supervision and visual adaptation for zero-shot classification.</span><span class="lang-zh">一项面向遥感视觉语言预训练的研究，探索全局与局部语义监督及视觉适配，以提升零样本分类能力。</span><br>
    <b><i class="venue-line"><span class="lang-en">In preparation for</span><span class="lang-zh">计划投稿至</span> <a href="https://aaai.org/conference/aaai/aaai-27/" target="_blank" rel="noreferrer">AAAI 2027</a></i></b>
  </div></div></div>
</div>

<div id="full-publications" class="publication-view" data-publication-view="list" hidden>
  <ul class="full-publication-list">
    <li><a class="pub-list-badge" href="https://2026.acmmm.org/" target="_blank" rel="noreferrer">ACM MM 2026</a> <span class="pub-list-title">EviGuard: Evidence-Guided Connector Intervention for Cross-Modal Safety Unlearning in Multimodal LLMs</span><br><span class="pub-list-authors">Xinyi Huang, <strong>Pengrui Xiang</strong>, Jie Wang, Xuchen Zhai, Jinduo Liu<sup>†</sup>, Honggui Han<sup>†</sup></span> <span class="pub-list-note"><span class="lang-en">Accepted, CCF A.</span><span class="lang-zh">已录用，CCF A。</span></span> <span class="pub-list-links"><a href="files/EviGuard_ACMMM2026.pdf">[<span class="lang-en">paper</span><span class="lang-zh">论文</span>]</a></span></li>
    <li><a class="pub-list-badge" href="https://ic-icc.cn/" target="_blank" rel="noreferrer">ICIC 2026</a> <span class="pub-list-title">BRACE: A Benign-History Robust Anchored Calibration and Evaluation Framework for Large Language Model Refusal</span><br><span class="pub-list-authors"><strong>Pengrui Xiang</strong>, Xinyi Huang, Kunyi Zhou, Bokai Cheng, Jinduo Liu<sup>†</sup>, Honggui Han<sup>†</sup>.</span> <span class="pub-list-note"><span class="lang-en">Oral, accepted, CCF C.</span><span class="lang-zh">口头报告，已录用，CCF C。</span></span> <span class="pub-list-links"><a href="files/BRACE_ICIC2026.pdf">[<span class="lang-en">paper</span><span class="lang-zh">论文</span>]</a> <a href="https://doi.org/10.1007/978-981-92-3435-6_19" target="_blank" rel="noreferrer">[DOI]</a></span></li>
    <li><a class="pub-list-badge" href="https://2026.ijcai.org/" target="_blank" rel="noreferrer">IJCAI 2026</a> <span class="pub-list-title">BEACON: Budget-Efficient Discovery of Policy Violations in Large Language Models via Cognitive-Guided Monte Carlo Tree Search</span><br><span class="pub-list-authors">Xinyi Huang, Jie Wang, <strong>Pengrui Xiang</strong>, Yifan Wang, Yu Fu, Jinduo Liu<sup>†</sup></span> <span class="pub-list-note"><span class="lang-en">Accepted, CCF A-B.</span><span class="lang-zh">已录用，CCF A-B。</span></span> <span class="pub-list-links"><a href="files/BEACON_IJCAI2026.pdf">[<span class="lang-en">paper</span><span class="lang-zh">论文</span>]</a></span></li>
    <li><a class="pub-list-badge" href="https://icvrv2025.aconf.org/" target="_blank" rel="noreferrer">ICVRV 2025</a> <span class="pub-list-title">GundamQ: Multi-Scale Spatio-Temporal Representation Learning for Robust Robot Path Planning</span><br><span class="pub-list-authors">Yutong Shen<sup>†</sup>, Ruizhe Xia<sup>†</sup>, Bokai Yan, Shunqi Zhang, <strong>Pengrui Xiang</strong>, Sicheng He, Yixin Xu</span> <span class="pub-list-note"><span class="lang-en">Accepted.</span><span class="lang-zh">已录用。</span></span> <span class="pub-list-links"><a href="https://ieeexplore.ieee.org/abstract/document/11410184" target="_blank" rel="noreferrer">[IEEE Xplore]</a></span></li>
  </ul>
</div>

<h2 id="experience"><span class="lang-en">Experience</span><span class="lang-zh">经历</span></h2>
<div class="experience-container">
  <div class="experience-card">
    <a href="https://www.bjut.edu.cn/" target="_blank" rel="noreferrer" class="experience-logo-link"><img src="images/bjut-user.png" alt="Beijing University of Technology official logo" class="experience-logo official-logo"></a>
    <div class="experience-info"><strong><span class="lang-en">Beijing University of Technology</span><span class="lang-zh">北京工业大学</span></strong><br><em>2023.09 - <span class="lang-en">Present</span><span class="lang-zh">至今</span></em><br>
      <span class="lang-en">B.E. candidate in Information Security (Experimental Program), College of Computer Science.</span><span class="lang-zh">计算机学院信息安全（实验班）本科生。</span><br>
      <span class="muted-line lang-en">Weighted average 91.84 · GPA 3.99/4.00 · Rank 8/66. Core courses: Cryptography 100, Network Protocol Analysis and Design 100, Network Attack and Defense 99, Data Structures and Algorithms 98.</span><span class="muted-line lang-zh">加权平均分 91.84 · GPA 3.99/4.00 · 专业排名 8/66。主要课程：密码学 100、网络协议分析与设计 100、网络攻击与防护 99、数据结构与算法 98。</span>
    </div>
  </div>
  <div class="experience-card">
    <a href="https://home.baidu.com/" target="_blank" rel="noreferrer" class="experience-logo-link experience-logo-link--wide"><img src="images/baidu-user.jpg" alt="Baidu official logo" class="experience-logo experience-logo--wide official-logo"></a>
    <div class="experience-info"><strong><span class="lang-en">Baidu · Multi-Agent World Website Design & Development Intern</span><span class="lang-zh">百度 · 多智能体世界网站设计与开发实习生</span></strong><br><em>2026.07 - <span class="lang-en">Present</span><span class="lang-zh">至今</span></em><br>
      <span class="lang-en">Participating in the design and development of an interactive multi-agent world website through three connected subprojects:</span><span class="lang-zh">围绕交互式多智能体世界网站开展设计与开发，主要包括三个相互衔接的子课题：</span>
      <ul class="compact-bullets"><li><span class="lang-en">multi-agent role definitions and world-rule design;</span><span class="lang-zh">多智能体角色设定与世界规则设计；</span></li><li><span class="lang-en">agent dialogue, task flows, and behavioral-logic orchestration;</span><span class="lang-zh">Agent 对话、任务流程与行为逻辑编排；</span></li><li><span class="lang-en">website front-end pages and interactive presentation.</span><span class="lang-zh">网站前端页面与交互展示开发。</span></li></ul>
    </div>
  </div>
  <div class="experience-card">
    <a href="https://www.nankai.edu.cn/" target="_blank" rel="noreferrer" class="experience-logo-link"><img src="images/nankai-user.jpg" alt="Nankai University logo" class="experience-logo official-logo"></a>
    <div class="experience-info"><strong><span class="lang-en">Nankai University · Research Collaboration</span><span class="lang-zh">南开大学 · 科研合作</span></strong><br><em>2025.11 - 2026.03</em><br><span class="lang-en">Participated in the Omni-IRSTD dataset and fisheye-simulation research collaboration, supporting dataset organization, annotation, and exploratory experiments.</span><span class="lang-zh">参与 Omni-IRSTD 数据集与鱼眼仿真研究合作，支持数据集整理、标注与探索性实验。</span></div>
  </div>
  <div class="experience-card">
    <img src="images/shield.svg" alt="Cybersecurity exercise" class="experience-logo">
    <div class="experience-info"><strong><span class="lang-en">Beijing Education System Cybersecurity Exercise</span><span class="lang-zh">北京市教育系统网络安全攻防演习</span></strong><br><em>2025.10 - 2025.11</em><br><span class="lang-en">Served on the university attack team, identified three weak-password vulnerabilities and several personal-information exposure issues, and represented the team at the final review meeting.</span><span class="lang-zh">作为学校攻击队成员，发现三处弱口令漏洞及若干个人信息泄露问题，并代表队伍参加总结会。</span></div>
  </div>
  <div class="experience-card">
    <a href="https://www.ericsson.com/" target="_blank" rel="noreferrer" class="experience-logo-link"><img src="images/ericsson-official.png" alt="Ericsson official logo" class="experience-logo official-logo"></a>
    <div class="experience-info"><strong><span class="lang-en">Ericsson (China), Software Development Intern</span><span class="lang-zh">爱立信（中国）· 软件开发实习生</span></strong><br><em>2025.01 - 2025.02</em><br><span class="lang-en">Developed a utility for resolving project code-refactoring conflicts and gained practical experience in software engineering and collaborative development.</span><span class="lang-zh">开发用于解决项目代码重构冲突的工具，积累软件工程与协作开发实践经验。</span></div>
  </div>
</div>

<h2 id="other-research"><span class="lang-en">Other Research</span><span class="lang-zh">其他研究</span></h2>
<div class="research-list">
  <article class="research-item"><div class="research-date">2025.11 - 2026.03</div><div><strong><span class="lang-en">Omni-IRSTD Dataset and Fisheye Simulation Research</span><span class="lang-zh">Omni-IRSTD 数据集与鱼眼仿真研究</span></strong><div class="research-meta"><span class="lang-en">Research collaboration</span><span class="lang-zh">科研合作</span></div><p class="lang-en">Collected and categorized multiple infrared small-target datasets, organized annotations and quality checks, and supported exploratory experiments for infrared small-target detection and fisheye simulation.</p><p class="lang-zh">搜集并分类整理多组红外弱小目标数据集，完成标注与质量检查，并支持红外弱小目标检测及鱼眼仿真的探索性实验。</p></div></article>
  <article class="research-item"><div class="research-date">2024.02 - 2025.04</div><div><strong><span class="lang-en">Few-shot IoT Traffic Classification with Pre-trained Models</span><span class="lang-zh">小样本条件下基于预训练模型的物联网流量分类</span></strong><div class="research-meta"><span class="lang-en">BJUT Spark Fund Project</span><span class="lang-zh">北京工业大学星火基金项目</span></div><p class="lang-en">Studied few-shot network traffic classification, reviewed related literature, explored feature pipelines and traditional machine-learning baselines, and completed the transition from coursework to research practice.</p><p class="lang-zh">围绕小样本网络流量分类开展文献调研与实验探索，尝试特征处理流程及传统机器学习基线，完成从课程学习到科研实践的初步过渡。</p></div></article>
  <article class="research-item"><div class="research-date">2025.02 - 2025.05</div><div><strong><span class="lang-en">Vision-Language Models, Acceleration, and Efficient Fine-tuning</span><span class="lang-zh">视觉语言模型、模型加速与高效微调</span></strong><div class="research-meta">CCF SPP GrokCV <span class="lang-en">Sprouts Training Program</span><span class="lang-zh">新芽训练计划</span></div><p class="lang-en">Systematically read classic and recent papers, summarized core methods, strengthened deep-learning foundations, and reproduced selected techniques in model acceleration and parameter-efficient adaptation.</p><p class="lang-zh">系统阅读相关经典与前沿论文，整理核心方法，补充深度学习基础，并尝试复现模型加速与参数高效适配方向的部分技术。</p></div></article>
</div>

<h2 id="projects"><span class="lang-en">Projects</span><span class="lang-zh">项目</span></h2>
<div class="project-card software-project"><div class="publication-inner"><div class="pub-media-rotator"><img src="images/garden-dash.png" alt="Garden Dash gameplay" class="project-image"></div><div class="publication-content"><strong><span class="lang-en">Garden Dash: A Feature-Rich 2D Runner</span><span class="lang-zh">花园疾跑：功能丰富的二维跑酷游戏</span></strong><br><i><span class="lang-en">Independent C / EasyX software project</span><span class="lang-zh">C / EasyX 独立软件项目</span> · 2024.05</i><br><span class="lang-en">Built a complete desktop runner game with an account system, persistent player data, a three-lane real-time game loop, animated obstacles and power-ups, collision detection, scoring, coins, rankings, a store, unlockable skins, an in-game encyclopedia, music and sound effects, and multi-page mouse/keyboard interaction.</span><span class="lang-zh">开发一款完整的桌面跑酷游戏，包含账号系统、玩家数据持久化、三轨实时游戏循环、动态障碍物与道具、碰撞检测、计分与金币、排行榜、商城、可解锁皮肤、图鉴、音乐音效，以及多页面鼠标与键盘交互。</span><div class="tech-tags"><span>C</span><span>EasyX</span><span>File I/O</span><span>Linked Lists</span><span>Windows Multimedia API</span></div></div></div></div>
<div class="project-card software-project"><div class="publication-inner"><div class="pub-media-rotator"><img src="images/structura.png" alt="Structura data structure visualizer" class="project-image"></div><div class="publication-content"><strong><span class="lang-en">Structura: An Interactive Data Structure Visualizer</span><span class="lang-zh">Structura：交互式数据结构可视化平台</span></strong><br><i><span class="lang-en">Open-source C++ / Qt software project</span><span class="lang-zh">开源 C++ / Qt 软件项目</span> · 2025.12</i><br><span class="lang-en">Designed a beginner-oriented visual simulator for sequence lists, linked lists, stacks, binary trees, binary search trees, Huffman trees, and AVL trees. The system includes a unified step-queue animation engine with pause, replay, and speed control; pan and zoom; animated insertion, deletion, traversal, search, and tree rotation; DSL batch scripts; natural-language-to-DSL execution through an LLM interface; JSON-based save and restore; GIF export; and customizable colors.</span><span class="lang-zh">设计面向初学者的数据结构可视化模拟器，支持顺序表、链表、栈、二叉树、二叉搜索树、哈夫曼树与 AVL 树。系统包含统一步骤队列动画引擎及暂停、重播、调速功能，支持画布缩放平移、插入删除遍历查找与树旋转动画、DSL 批处理脚本、通过大模型接口实现自然语言转 DSL、基于 JSON 的保存恢复、GIF 导出及配色自定义。</span><div class="project-links"><a href="https://github.com/Cuberpeng/DSCourseDesign" target="_blank" rel="noreferrer"><span class="lang-en">GitHub Repository</span><span class="lang-zh">GitHub 开源仓库</span></a></div><div class="tech-tags"><span>C++20</span><span>Qt</span><span>CMake</span><span>Algorithms</span><span>DSL</span><span>LLM Interface</span></div></div></div></div>

<div class="project-card software-project"><div class="publication-inner"><div class="pub-media-rotator"><img src="images/faceguard.png" alt="FaceGuard security platform" class="project-image"></div><div class="publication-content"><strong><span class="lang-en">FaceGuard: A Defense and Traceability Platform for Face Recognition Inversion Attacks</span><span class="lang-zh">FaceGuard：人脸识别反演攻击防御与追踪平台</span></strong><br><i><span class="lang-en">Team Python / FastAPI machine-learning security project</span><span class="lang-zh">Python / FastAPI 机器学习安全团队项目</span> · 2026.06</i><br><span class="lang-en">Built an ArcFace-based black-box face recognition security platform that combines administrator face verification and short-lived tokens, clean/protected gallery management, embedding watermarking, score-transformation defense, post-attack watermark detection, and audit logging. A browser front end communicates with a FastAPI backend through an API proxy, while model weights, templates, watermark keys, thresholds, and logs remain isolated on the server. In evaluation, the combined watermark and score-defense setting reduced the inversion-image threshold pass rate from 95.63% to 12.50% while preserving 100% ID accuracy and threshold pass rate on genuine images; watermark detection accuracy reached 98.75%.</span><span class="lang-zh">构建基于 ArcFace 的黑盒人脸识别安全平台，集成管理员人脸验证与短期令牌、clean/protected Gallery 管理、特征水印、分数变换防御、攻击后水印检测与日志审计。浏览器前端通过 API 代理连接 FastAPI 后端，模型权重、模板、水印密钥、阈值和日志均隔离保存在服务端。实验中，同时启用水印与分数防御后，反演图阈值通过率由 95.63% 降至 12.50%，正常原图的 ID 准确率与阈值通过率仍保持 100%，水印检测准确率达到 98.75%。</span><div class="tech-tags"><span>Python</span><span>FastAPI</span><span>ArcFace</span><span>HTML/CSS/JavaScript</span><span>Feature Watermarking</span><span>Audit Logging</span></div></div></div></div>

<h2 id="awards"><span class="lang-en">Awards & Honors</span><span class="lang-zh">奖项与荣誉</span></h2>
<ul class="award-list">
  <li><em>2025.09</em>, <span class="lang-en">First Prize, Beijing Division, National College Students Mathematical Modeling Competition.</span><span class="lang-zh">全国大学生数学建模竞赛北京赛区一等奖。</span></li>
  <li><em>2025.06</em>, <span class="lang-en">Third Prize, Beijing Division, China Robot and Artificial Intelligence Competition.</span><span class="lang-zh">中国机器人及人工智能大赛北京赛区三等奖。</span></li>
  <li><em>2025.05</em>, <span class="lang-en">Second Prize, BJUT ACM-ICPC Programming Contest.</span><span class="lang-zh">北京工业大学 ACM-ICPC 程序设计竞赛二等奖。</span></li>
  <li><em>2024.10</em>, <span class="lang-en">Second Prize, BJUT Team Programming Ladder Tournament.</span><span class="lang-zh">中国高校计算机大赛团队程序设计天梯赛校级二等奖。</span></li>
  <li><em>2025.10</em>, <span class="lang-en">Third Prize, BJUT Network Technology Challenge.</span><span class="lang-zh">中国高校计算机大赛网络技术挑战赛校级三等奖。</span></li>
  <li><em>2025</em>, <span class="lang-en">Merit Student, Beijing University of Technology.</span><span class="lang-zh">北京工业大学校级三好学生。</span></li>
  <li><em>2024 & 2025</em>, <span class="lang-en">Academic Excellence Scholarship, Beijing University of Technology.</span><span class="lang-zh">北京工业大学校级学习优秀奖（奖学金）。</span></li>
  <li><em>2025</em>, <span class="lang-en">Innovation and Entrepreneurship Award, Beijing University of Technology.</span><span class="lang-zh">北京工业大学校级创新创业奖。</span></li>
</ul>

<h2 id="leadership"><span class="lang-en">Leadership & Campus Activities</span><span class="lang-zh">学生工作与校园活动</span></h2>
<ul class="award-list"><li><strong><span class="lang-en">Founder and President</span><span class="lang-zh">创办人兼社长</span></strong>, <span class="lang-en">Morefun Rubik's Cube Club, Beijing University of Technology.</span><span class="lang-zh">北京工业大学 Morefun 魔方社。</span></li><li><span class="lang-en">Member, Xinyuan Volunteer Group, directly affiliated with the School Youth League Committee.</span><span class="lang-zh">学院团委直属学生机构心缘志愿团部员。</span></li><li><span class="lang-en">Technical Department Member, School New Media Center.</span><span class="lang-zh">学院新媒体中心技术部部员。</span></li></ul>

<h2 id="skills"><span class="lang-en">Skills</span><span class="lang-zh">技能</span></h2>
<div class="skills-grid">
  <div><strong><span class="lang-en">Programming</span><span class="lang-zh">编程语言</span></strong><span>Python, C, C++, Java, Rust, Verilog</span></div>
  <div><strong><span class="lang-en">Development & Research</span><span class="lang-zh">开发与科研</span></strong><span>PyTorch, Hugging Face, Transformers, Qt, CMake, EasyX, Git, <span class="lang-en">Linux servers, API-based evaluation</span><span class="lang-zh">Linux 服务器、基于 API 的评测</span></span></div>
  <div><strong><span class="lang-en">Tools</span><span class="lang-zh">工具</span></strong><span>GitHub, LaTeX, Draw.io, Adobe Photoshop, Adobe Illustrator</span></div>
  <div><strong><span class="lang-en">Languages</span><span class="lang-zh">语言能力</span></strong><span><span class="lang-en">Chinese (native), English (CET-4 590, CET-6 554)</span><span class="lang-zh">中文（母语），英语（CET-4 590，CET-6 554）</span></span></div>
</div>

<h2 id="miscellaneous"><span class="lang-en">Miscellaneous</span><span class="lang-zh">其他</span></h2>
<div class="misc-grid">
  <div class="misc-card"><span class="misc-icon">🧊</span><div><strong><span class="lang-en">Speedcubing</span><span class="lang-zh">魔方速拧</span></strong><p class="lang-en">I am a Rubik's Cube speedcubing enthusiast. At my peak, I reached China's top 200 in a combined World Cube Association ranking. <a href="https://www.worldcubeassociation.org/persons/2017XIAN07" target="_blank" rel="noreferrer">View my WCA profile</a>.</p><p class="lang-zh">我是魔方速拧爱好者，曾在世界魔方协会综合排名中达到中国前 200。<a href="https://www.worldcubeassociation.org/persons/2017XIAN07" target="_blank" rel="noreferrer">查看我的 WCA 个人主页</a>。</p></div></div>
  <div class="misc-card"><span class="misc-icon">📺</span><div><strong><span class="lang-en">Video Creation</span><span class="lang-zh">视频创作</span></strong><p class="lang-en">I create videos on Bilibili, mainly sharing Rubik's Cube news, competition updates, and community topics. <a href="https://space.bilibili.com/548243474" target="_blank" rel="noreferrer">Visit my Bilibili channel</a>.</p><p class="lang-zh">我在 Bilibili 更新视频，主要分享魔方资讯、赛事动态与社群话题。<a href="https://space.bilibili.com/548243474" target="_blank" rel="noreferrer">访问我的 Bilibili 主页</a>。</p></div></div>
  <div class="misc-card"><span class="misc-icon">🚇</span><div><strong><span class="lang-en">Transport, Photography & Music</span><span class="lang-zh">交通、摄影与音乐</span></strong><p class="lang-en">I am fascinated by transport systems around the world, especially urban rail transit and civil aviation. I am also a beginner photographer who enjoys roaming through Beijing and cities across the world. Music is another long-running interest: I previously studied piano and erhu, and currently listen most often to <a href="https://en.wikipedia.org/wiki/G.E.M." target="_blank" rel="noreferrer">G.E.M.</a> and <a href="https://en.wikipedia.org/wiki/JJ_Lin" target="_blank" rel="noreferrer">JJ Lin</a>.</p><p class="lang-zh">我对世界各地的交通系统很感兴趣，尤其关注城市轨道交通与民航。我也是摄影初学者和爱好者，喜欢在北京及世界各地转悠。音乐同样是我长期的兴趣，我曾学习钢琴和二胡，目前经常听 <a href="https://zh.wikipedia.org/wiki/%E9%84%A7%E7%B4%AB%E6%A3%8B" target="_blank" rel="noreferrer">邓紫棋</a> 与 <a href="https://zh.wikipedia.org/wiki/%E6%9E%97%E4%BF%8A%E5%82%91" target="_blank" rel="noreferrer">林俊杰</a> 的歌曲。</p></div></div>
</div>
