import { BlogPost } from '../types';

// In a real VPS setup, this data would come from a database (PostgreSQL/MySQL) or a Headless CMS (Strapi/Ghost) via an API fetch.
// Since this is a frontend-only demo, we simulate the database here.

const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'wealth',
    title: '如何不靠运气致富',
    date: '2023-10-15',
    category: '财富',
    readingTime: '5 min',
    summary: '追求财富，而不是金钱或地位。财富是你睡觉时仍在为你赚钱的资产。',
    content: `
      ### 追求财富，而不是金钱或地位
      
      财富是你睡觉时仍在为你赚钱的资产。金钱是我们转移时间和财富的方式。地位是你在社会等级体系中的位置。

      要明白，通过出租时间是发不了财的。你必须拥有股权——也就是企业的一部分——才能获得财务自由。

      ### 寻找天赋
      
      在这个世界上，没有人能在做“你”这件事情上比你更擅长。大部分生活就是寻找最需要你的人和最需要你的事。
      
      如果你在现在的工作中无法发挥你的特长，那么你就很容易被替代。
      
      ### 杠杆效应
      
      给我一根足够长的杠杆和一个支点，我就能撬动地球。
      
      现代社会的杠杆有三种：
      1. **劳动力**：也就是让人为你工作。这是最古老的杠杆形式。
      2. **资本**：也就是钱。这是上个世纪最主要的杠杆形式。
      3. **代码和媒体**：这是新富阶层的杠杆。它是无需许可的。你不需要别人的允许就可以写软件或录制播客。
    `
  },
  {
    id: '2',
    slug: 'happiness',
    title: '幸福是一种技能',
    date: '2023-11-02',
    category: '生活哲学',
    readingTime: '4 min',
    summary: '幸福不是一种发生在你身上的事情，而是一种你可以学习的技能，一种你可以做出的选择。',
    content: `
      ### 幸福是缺席的欲望
      
      当你没有什么想要的时候，你的思绪就会平静下来，活在当下。这就是幸福。
      
      我们以为幸福是通过得到我们想要的东西来实现的。实际上，幸福是通过不再想要那些我们得不到的东西来实现的。

      ### 这是一个选择
      
      你可以选择在这个时刻感到幸福。这需要训练。
      
      就像你可以通过锻炼让身体变得强壮一样，你也可以通过冥想和正念让心灵变得平静和幸福。
      
      ### 减少对自我的关注
      
      许多痛苦源于过分关注“我”。
      
      “为什么这发生在我身上？”
      “他们怎么看我？”
      
      当你减少对自我的关注，你会发现世界变得更加广阔和美好。
    `
  },
  {
    id: '3',
    slug: 'reading',
    title: '阅读的艺术',
    date: '2023-12-10',
    category: '学习',
    readingTime: '3 min',
    summary: '阅读是你给自己大脑安装新软件的方式。读什么比读得快更重要。',
    content: `
      ### 读基础知识
      
      与其读最新的商业畅销书，不如读那些经得起时间考验的书。
      
      微观经济学、博弈论、心理学、说服力、伦理学、数学和计算机。
      
      这些基础知识在一百年后依然有效。
      
      ### 不要害怕重读
      
      我宁愿把最好的100本书读在这个领域读很多遍，也不愿读1000本新书。
      
      如果一本书不值得读两遍，那么它也不值得读一遍。
      
      ### 随心所欲地读
      
      不要把阅读变成一种任务。如果你不喜欢一本书，就放下它。
      
      像对待博客文章一样对待书籍。跳读，略读，只读你感兴趣的部分。
      
      目的是为了获取知识和启发，而不是为了完成任务。
    `
  },
  {
    id: '4',
    slug: 'specific-knowledge',
    title: '建立你的专长',
    date: '2024-01-05',
    category: '职业',
    readingTime: '6 min',
    summary: '专长是那些无法通过培训获得这类知识。如果社会可以培训你，那么社会也可以培训别人来取代你。',
    content: `
      ### 什么是专长？
      
      专长（Specific Knowledge）通常具有高度的技术性或创造性。它不能被外包或自动化。
      
      专长往往是在你还是个孩子或青少年时，出于好奇和兴趣而追求的东西，而不是为了找工作而学的。
      
      ### 做你自己
      
      要在某个领域成为世界第一，最好的办法就是重新定义这个领域，直到只有你在其中。
      
      如果你在和别人竞争，那是因为你在模仿别人。
      
      ### 终身学习
      
      在这个快速变化的时代，最重要的技能不是你现在掌握了什么，而是你学习新事物的速度有多快。
      
      保持好奇心，保持在这个领域的前沿。
    `
  },
  {
    id: '5',
    slug: 'leverage',
    title: '杠杆时代',
    date: '2024-02-20',
    category: '财富',
    readingTime: '4 min',
    summary: '在这个时代，一个人的产出可以无限放大。关键在于如何使用工具。',
    content: `
      ### 边际成本为零
      
      代码和媒体的复制成本几乎为零。这意味你可以睡觉时，你的产品（代码、视频、文章）依然在为你服务数百万用户。
      
      这是人类历史上从未有过的机会。
      
      ### 不需要许可
      
      以前，如果你想建工厂，你需要资本家的钱。如果你想出书，你需要出版社的许可。
      
      现在，你只需要一台电脑和互联网连接。
      
      阻碍你的只有你的想象力和执行力。
    `
  }
];

export const dataService = {
  getAllPosts: async (): Promise<BlogPost[]> => {
    // Simulate API latency
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_POSTS), 300);
    });
  },

  getPostBySlug: async (slug: string): Promise<BlogPost | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_POSTS.find(post => post.slug === slug));
      }, 300);
    });
  },

  searchPosts: async (query: string): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
      if (!query.trim()) {
        resolve([]);
        return;
      }
      
      const lowerQuery = query.toLowerCase();
      const results = MOCK_POSTS.filter(post => {
        const inTitle = post.title.toLowerCase().includes(lowerQuery);
        const inContent = post.content.toLowerCase().includes(lowerQuery);
        const inSummary = post.summary.toLowerCase().includes(lowerQuery);
        return inTitle || inContent || inSummary;
      });
      
      resolve(results);
    });
  }
};