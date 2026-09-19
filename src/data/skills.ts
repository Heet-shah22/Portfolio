import { SkillCategoryName, SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', level: 'Working Knowledge', description: 'Core language for AI/ML, data pipelines, and automation scripting.' },
  { name: 'C', category: 'Programming Languages', level: 'Working Knowledge', description: 'Systems programming, memory management, and algorithmic foundations.' },
  { name: 'C++', category: 'Programming Languages', level: 'Working Knowledge', description: 'Object-oriented programming, data structures, and high-performance algorithms.' },
  { name: 'JavaScript', category: 'Programming Languages', level: 'Working Knowledge', description: 'Modern ES6+ development for client and server runtime environments.' },
  { name: 'HTML', category: 'Programming Languages', level: 'Working Knowledge', description: 'Semantic, accessible, and structured document markup.' },
  { name: 'CSS', category: 'Programming Languages', level: 'Working Knowledge', description: 'Responsive layouts, Flexbox, CSS Grid, and custom animations.' },

  // Frameworks & Libraries
  { name: 'React.js', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'Component-driven user interfaces, hooks, state management, and SPAs.' },
  { name: 'Node.js', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'Asynchronous event-driven server runtime for backend services.' },
  { name: 'Express.js', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'Minimalist web framework for RESTful routing and middleware pipelines.' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'Utility-first styling for fast, modern, and consistent design systems.' },
  { name: 'NumPy', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'N-dimensional array computations and numerical mathematics.' },
  { name: 'Pandas', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'Dataframe manipulation, dataset sanitization, and time-series aggregation.' },
  { name: 'Matplotlib', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'Scientific publication-quality static and interactive plots.' },
  { name: 'Seaborn', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'Statistical data visualization and correlation distribution plots.' },
  { name: 'Scikit-learn', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'Machine learning algorithms, regression, clustering, and preprocessing.' },
  { name: 'TensorFlow', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'End-to-end open-source machine learning and deep learning platform.' },
  { name: 'Keras', category: 'Frameworks & Libraries', level: 'Working Knowledge', description: 'High-level neural network API for stacked LSTMs and deep models.' },

  // Databases
  { name: 'MySQL', category: 'Databases', level: 'Working Knowledge', description: 'Relational database design, ACID transactions, complex joins, and indexing.' },
  { name: 'MongoDB', category: 'Databases', level: 'Working Knowledge', description: 'NoSQL document storage, aggregation pipelines, and flexible schema modeling.' },
  { name: 'Vector Database', category: 'Databases', level: 'Learning', description: 'High-dimensional vector storage and cosine similarity retrieval for AI embeddings.' },

  // Data & Analytics
  { name: 'Exploratory Data Analysis (EDA)', category: 'Data & Analytics', level: 'Working Knowledge', description: 'Uncovering patterns, testing hypotheses, and summary statistics.' },
  { name: 'Data Analysis', category: 'Data & Analytics', level: 'Working Knowledge', description: 'Transforming raw data into actionable insights and structured metrics.' },
  { name: 'Google Analytics', category: 'Data & Analytics', level: 'Familiar', description: 'Web traffic tracking, conversion measurement, and user behavioral funnels.' },
  { name: 'Power BI', category: 'Data & Analytics', level: 'Familiar', description: 'Interactive business intelligence dashboards and DAX metrics.' },
  { name: 'Tableau', category: 'Data & Analytics', level: 'Familiar', description: 'Visual analytics platform for enterprise data exploration and dashboards.' },
  { name: 'Excel', category: 'Data & Analytics', level: 'Working Knowledge', description: 'Advanced formulas, pivot tables, statistical modeling, and data cleansing.' },
  { name: 'NLP', category: 'Data & Analytics', level: 'Working Knowledge', description: 'Natural language tokenization, TF-IDF, sentiment analysis, and N-grams.' },
  { name: 'LLMs', category: 'Data & Analytics', level: 'Learning', description: 'Prompt engineering, context structuring, and LLM-assisted analytical synthesis.' },

  // Tools & Platforms
  { name: 'Git', category: 'Tools & Platforms', level: 'Working Knowledge', description: 'Distributed version control, branching strategies, and commit history management.' },
  { name: 'GitHub', category: 'Tools & Platforms', level: 'Working Knowledge', description: 'Repository hosting, collaboration, code reviews, and project management.' },
  { name: 'AWS', category: 'Tools & Platforms', level: 'Learning', description: 'Cloud infrastructure foundations, compute instances, and cloud storage.' },
  { name: 'VS Code', category: 'Tools & Platforms', level: 'Working Knowledge', description: 'Primary IDE configuration, linting, debugging, and terminal workflows.' },
  { name: 'Jira', category: 'Tools & Platforms', level: 'Familiar', description: 'Agile sprint planning, issue tracking, and software project workflows.' },
  { name: 'SharePoint', category: 'Tools & Platforms', level: 'Familiar', description: 'Enterprise document collaboration and organization workflows.' },
  { name: 'Microsoft Copilot', category: 'Tools & Platforms', level: 'Working Knowledge', description: 'AI-assisted coding productivity and workflow automation.' },
  { name: 'Ollama', category: 'Tools & Platforms', level: 'Working Knowledge', description: 'Local LLM runtime and inference for offline experimentation.' },

  // Techniques / Concepts
  { name: 'Machine Learning', category: 'Techniques / Concepts', level: 'Working Knowledge', description: 'Supervised and unsupervised algorithms, regression, and model evaluation.' },
  { name: 'Deep Learning', category: 'Techniques / Concepts', level: 'Working Knowledge', description: 'Neural networks, recurrent architectures (LSTM), and dense embeddings.' },
  { name: 'REST API Integration', category: 'Techniques / Concepts', level: 'Working Knowledge', description: 'Designing, consuming, and securing stateless HTTP API endpoints.' },
  { name: 'Software Development Life Cycle (SDLC)', category: 'Techniques / Concepts', level: 'Working Knowledge', description: 'Iterative agile methodologies, requirements, development, and testing.' },
  { name: 'Database Management', category: 'Techniques / Concepts', level: 'Working Knowledge', description: 'Schema normalization, indexing, query optimization, and data integrity.' },
  { name: 'Large Language Models', category: 'Techniques / Concepts', level: 'Learning', description: 'Foundational concepts of autoregressive language generation and embeddings.' },
  { name: 'Data Transformation', category: 'Techniques / Concepts', level: 'Working Knowledge', description: 'ETL pipelines, normalization, feature scaling, and distributed transforms.' },
  { name: 'Data Visualization', category: 'Techniques / Concepts', level: 'Working Knowledge', description: 'Communicating complex patterns through intuitive graphical representations.' }
];

export const skillCategories: SkillCategoryName[] = [
  'Programming Languages',
  'Frameworks & Libraries',
  'Databases',
  'Data & Analytics',
  'Tools & Platforms',
  'Techniques / Concepts'
];
