import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'ecorevive',
    slug: 'ecorevive-sustainable-thrift',
    title: 'EcoRevive — Sustainable Thrift E-Commerce Platform',
    category: 'Full Stack',
    categories: ['Full Stack'],
    summary: 'A scalable full-stack thrift e-commerce platform featuring integrated payments, customer credit mechanics, modular architecture, and an LCA-based environmental impact tracking engine with real-time data visualization.',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'LCA Models'],
    problem: 'Fast fashion and linear consumption drive catastrophic environmental degradation. While secondary markets extend product lifespans, conventional e-commerce platforms rarely quantify tangible environmental benefits or incentivize consumers with concrete sustainability metrics.',
    solution: 'EcoRevive integrates an end-to-end thrift marketplace with a scientific Life-Cycle Assessment (LCA) impact estimation engine. Users trade pre-owned apparel, earn platform credits, and track quantifiable savings in carbon emissions and conserved water in real time.',
    coreFeatures: [
      'Scalable full-stack thrift e-commerce catalog with search and faceted filters',
      'RESTful API architecture built on Node.js and Express',
      'Secure payment gateway checkout and dynamic user credit balance system',
      'Life-Cycle Assessment (LCA) computation pipeline estimating CO₂ and water conserved',
      'Asynchronous data computation pipeline processing background impact updates',
      'Time-series aggregation metrics for historical savings dashboards',
      'Interactive real-time visualization of environmental benchmarks'
    ],
    technicalImplementation: [
      'Engineered a modular multi-tier architecture separating presentation, business controllers, and data storage layers',
      'Designed REST API endpoints with robust input validation, error handling, and JWT authentication',
      'Implemented MongoDB schemas with indexed compound keys for high-performance catalog querying and ledger balance tracking',
      'Built async computation pipelines to calculate per-transaction environmental impact without blocking main request threads',
      'Applied Life-Cycle Assessment (LCA) coefficients to benchmark textile reuse savings against baseline virgin manufacturing statistics',
      'Aggregated time-series metrics to generate reactive visual reports for consumer profiles'
    ],
    architectureStages: [
      {
        step: 1,
        name: 'Frontend',
        category: 'frontend',
        description: 'React.js & TypeScript UI',
        detail: 'Responsive client interface providing catalog browsing, shopping cart state management, checkout, and live impact visualizers.'
      },
      {
        step: 2,
        name: 'REST API',
        category: 'api',
        description: 'Express Gateway & Routing',
        detail: 'Validated endpoints handling user auth, product transactions, credit updates, and impact ledger dispatches.'
      },
      {
        step: 3,
        name: 'Node.js Backend',
        category: 'backend',
        description: 'Modular Business Controllers',
        detail: 'Decoupled service layer orchestrating order lifecycle, credit balance logic, and computation tasks.'
      },
      {
        step: 4,
        name: 'MongoDB',
        category: 'database',
        description: 'Document Store & Audit Ledger',
        detail: 'Persists user profiles, catalog inventory, orders, and append-only environmental transaction histories.'
      },
      {
        step: 5,
        name: 'Impact Calculation',
        category: 'model',
        description: 'Heuristic Footprint Estimator',
        detail: 'Calculates raw resource offsets based on garment material classifications, mass, and average lifespan.'
      },
      {
        step: 6,
        name: 'LCA Model',
        category: 'model',
        description: 'Life-Cycle Assessment Engine',
        detail: 'Applies standardized cradle-to-gate LCA multipliers comparing thrift re-use against virgin textile production.'
      },
      {
        step: 7,
        name: 'Async Processing',
        category: 'backend',
        description: 'Background Worker Pipelines',
        detail: 'Asynchronous event queue handling metric computation and user badge updates without blocking API responses.'
      },
      {
        step: 8,
        name: 'Time-Series Metrics',
        category: 'analytics',
        description: 'Aggregated Impact Analytics',
        detail: 'Stores rolling cumulative statistics (liters of water conserved, kilograms of carbon offset) bucketed by date.'
      },
      {
        step: 9,
        name: 'Visualization',
        category: 'visualization',
        description: 'Interactive Dashboard Charts',
        detail: 'Renders dynamic SVG and chart components displaying user impact stats, community milestones, and credit awards.'
      }
    ],
    challenges: [
      'Maintaining API responsiveness while performing multi-factor LCA environmental impact calculations on batch purchases',
      'Handling concurrent credit balance deductions and inventory state integrity during peak checkout events',
      'Designing an intuitive data schema capable of tracking both commercial e-commerce transactions and scientific sustainability metrics'
    ],
    learnings: [
      'Mastered decoupled asynchronous background processing in Node.js to preserve sub-100ms API response latency',
      'Deepened comprehension of MongoDB indexing strategies and transaction atomicity for digital ledger integrity',
      'Gained practical experience translating formal scientific methodologies (LCA) into production-grade software formulas'
    ],
    futureImprovements: [
      'Incorporate third-party logistics tracking to integrate real transportation emission offsets into the LCA model',
      'Introduce microservice isolation for the impact aggregation engine using RabbitMQ or Kafka',
      'Implement QR-code verified garment authentication for physical drop-off validation'
    ],
    image: '/assets/project-ecorevive.svg',
    githubUrl: 'https://github.com/Heet-shah22',
    demoUrl: null,
    featured: true
  },
  {
    id: 'stock-analysis',
    slug: 'stock-market-analysis',
    title: 'Stock Market Analysis',
    category: 'AI/ML',
    categories: ['AI/ML', 'Data Analysis', 'NLP'],
    summary: 'An academic and analytical exploration of financial market trends combining Apache Spark data pipelines, linear regression modeling, financial news NLP with TF-IDF, sentiment classification, clustering, and LLM-assisted market insights.',
    technologies: ['Apache Spark', 'MongoDB', 'Python', 'Linear Regression', 'NLP', 'TF-IDF', 'Sentiment Analysis', 'LLMs', 'Matplotlib', 'Seaborn'],
    problem: 'Financial markets produce massive streams of structured numerical indicators alongside unstructured news headlines. Analyzing these heterogeneous data streams requires scalable distributed compute engines and multidimensional analytical methods.',
    solution: 'Engineered a unified exploratory analytics pipeline combining Apache Spark for scalable ETL, statistical Linear Regression trend modeling, TF-IDF NLP sentiment classification across financial news, K-Means clustering of assets, and contextual LLM insight generation.',
    coreFeatures: [
      'Scalable distributed data retrieval and transformation using Apache Spark',
      'Exploratory Data Analysis (EDA) on historical financial time-series metrics',
      'Predictive trend modeling using Linear Regression techniques',
      'Unstructured news text processing with TF-IDF vectorization',
      'Polarity and sentiment classification across financial news headlines',
      'Contextual LLM-based market insight generation for analytical summaries',
      'Multi-variable clustering algorithms identifying asset correlation patterns',
      'Comprehensive data visualizations generated with Matplotlib and Seaborn'
    ],
    technicalImplementation: [
      'Constructed distributed Apache Spark pipelines to ingest and transform historical records stored in MongoDB',
      'Performed statistical normalization, outlier trimming, and feature scaling across price-volume indicators',
      'Trained Linear Regression models to evaluate baseline mathematical trends across historical price vectors',
      'Built an NLP pipeline utilizing TF-IDF tokenization to convert financial headlines into high-dimensional feature matrices',
      'Implemented sentiment scoring to measure sentiment shifts relative to trading volume spikes',
      'Applied clustering algorithms (K-Means) to group equity instruments by volatility and volume metrics',
      'Synthesized quantitative metrics through prompt-engineered LLM interfaces to produce structured analytical commentaries'
    ],
    architectureStages: [
      {
        step: 1,
        name: 'Raw Data',
        category: 'database',
        description: 'Multi-source Data Ingestion',
        detail: 'Historical price records and unstructured financial news datasets stored across document stores.'
      },
      {
        step: 2,
        name: 'Data Retrieval (Spark)',
        category: 'backend',
        description: 'Distributed Spark Extract',
        detail: 'Leverages Spark RDD and DataFrame connectors to pull high-volume datasets in parallel partitions.'
      },
      {
        step: 3,
        name: 'Data Transformation',
        category: 'backend',
        description: 'ETL Pipeline & Feature Scaling',
        detail: 'Performs data sanitization, null imputation, timestamp alignments, and standard feature scaling.'
      },
      {
        step: 4,
        name: 'Exploratory Analysis',
        category: 'analytics',
        description: 'EDA & Statistical Analysis',
        detail: 'Computes descriptive statistics, moving averages, standard deviation bands, and Pearson correlation matrices.'
      },
      {
        step: 5,
        name: 'NLP',
        category: 'model',
        description: 'TF-IDF Text Vectorization',
        detail: 'Tokenizes financial journalism, eliminates stopwords, and calculates term frequency-inverse document frequency vectors.'
      },
      {
        step: 6,
        name: 'Sentiment Analysis',
        category: 'model',
        description: 'Headline Polarity Classification',
        detail: 'Derives positive, neutral, and negative sentiment indices mapped to specific equity timeline windows.'
      },
      {
        step: 7,
        name: 'ML (Linear Regression)',
        category: 'model',
        description: 'Baseline Predictive Modeling',
        detail: 'Fits linear regression hyperplanes to evaluate trend slopes across historical price and volume features.'
      },
      {
        step: 8,
        name: 'Clustering',
        category: 'model',
        description: 'Unsupervised Asset Grouping',
        detail: 'Executes K-Means clustering to discover latent groupings among assets sharing risk and return profiles.'
      },
      {
        step: 9,
        name: 'LLM Insights',
        category: 'model',
        description: 'Contextual Analytical Generation',
        detail: 'Feeds aggregated metrics into structured prompts to synthesize human-readable technical research summaries.'
      },
      {
        step: 10,
        name: 'Visualization',
        category: 'visualization',
        description: 'Matplotlib / Seaborn Diagnostic Plots',
        detail: 'Generates multi-panel correlation heatmaps, regression residuals, sentiment distributions, and scatter clusters.'
      }
    ],
    challenges: [
      'Synchronizing asynchronous financial news timestamps with trading hour pricing intervals',
      'Managing vocabulary noise and domain-specific financial acronyms within the TF-IDF feature space',
      'Configuring Spark partition sizes to optimize memory usage without executor overhead'
    ],
    learnings: [
      'Gained deep hands-on expertise in distributed computing architectures with Apache Spark',
      'Learned to evaluate machine learning models strictly with rigorous cross-validation and residual diagnostic plots',
      'Recognized the critical value of combining quantitative indicators with unstructured qualitative sentiment data'
    ],
    futureImprovements: [
      'Extend the pipeline to stream live WebSocket ticker updates via Apache Kafka into Spark Streaming',
      'Evaluate bidirectional Transformer models (FinBERT) alongside TF-IDF for contextual financial nuance',
      'Implement backtesting simulation frameworks to benchmark hypothetical analytical indicators against historical test sets'
    ],
    image: '/assets/project-stock.svg',
    githubUrl: 'https://github.com/Heet-shah22',
    demoUrl: null,
    featured: true,
    academicDisclaimer: 'Academic & Analytical Notice: This project was developed strictly as an educational and scientific exploration of distributed data processing, natural language processing, and machine learning techniques applied to market data. It does not provide, and must not be interpreted as, financial advice, trading signals, or reliable predictions of asset prices.'
  },
  {
    id: 'text-predictor',
    slug: 'text-predictor-nlp-deep-learning',
    title: 'Text Predictor using NLP and Deep Learning',
    category: 'AI/ML',
    categories: ['AI/ML', 'NLP'],
    summary: 'An educational exploration of language modeling principles and deep learning architectures built with TensorFlow and Keras, utilizing tokenization, embedding layers, and stacked LSTM networks for contextual next-word prediction.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'NLP', 'Deep Learning', 'Word Embeddings'],
    problem: 'Natural language possesses complex non-linear sequence patterns and long-term syntactic dependencies that simple bag-of-words or statistical N-gram approaches fail to retain over varying sentence lengths.',
    solution: 'Engineered a deep neural sequence model using stacked Long Short-Term Memory (LSTM) recurrent networks. The architecture maps tokenized corpora into continuous dense embedding spaces, propagates hidden state memory through recurrent gates, and projects candidate token probabilities through a softmax output layer.',
    coreFeatures: [
      'End-to-end text preprocessing and sub-sequence tokenization pipeline',
      'N-gram sequence matrix construction for iterative autoregressive training',
      'Dynamic post-sequence padding standardizing input batch dimensions',
      'Dense vector embedding layer learning geometric semantic representations',
      'Stacked multi-layer LSTM architecture retaining bidirectional temporal memory',
      'Dropout regularization to mitigate overfitting on specialized training texts',
      'Softmax probabilistic output layer generating discrete candidate word distributions',
      'Framed as an educational implementation exploring foundational concepts underlying modern Large Language Models'
    ],
    technicalImplementation: [
      'Implemented tokenization pipelines utilizing Keras Tokenizer to construct vocabulary indices and clean input text',
      'Generated shifted N-gram sequence subsets to serve as predictor features and target label pairs',
      'Normalized sequence vectors using pre/post padding to ensure uniform tensor shapes across batch iterations',
      'Configured dense 100-dimensional embedding layers to capture word semantic affinities',
      'Trained stacked LSTM layers with hidden states to capture contextual relationships across sentence boundaries',
      'Evaluated categorical cross-entropy loss with Adam optimizer to converge toward optimal sequence likelihoods',
      'Developed inference helper routines capable of temperature-based sampling and deterministic top-k next word output'
    ],
    architectureStages: [
      {
        step: 1,
        name: 'Text Input',
        category: 'frontend',
        description: 'Corpus Ingestion & Normalization',
        detail: 'Raw text ingestion, lowercasing, punctuation stripping, and sentence boundary identification.'
      },
      {
        step: 2,
        name: 'Tokenization',
        category: 'backend',
        description: 'Vocabulary Mapping',
        detail: 'Converts distinct word types into numeric indices and constructs vocabulary frequency lookups.'
      },
      {
        step: 3,
        name: 'N-Gram Processing',
        category: 'backend',
        description: 'Sequence Sub-Pair Generation',
        detail: 'Generates incremental token sequences [w₁, w₂] → w₃ to establish contextual autoregressive pairs.'
      },
      {
        step: 4,
        name: 'Padding',
        category: 'backend',
        description: 'Tensor Dimension Standardization',
        detail: 'Pads sequences with leading/trailing zeros to guarantee uniform matrix dimensions across batches.'
      },
      {
        step: 5,
        name: 'Embeddings',
        category: 'model',
        description: 'Dense Semantic Vector Space',
        detail: 'Maps integer indices into continuous high-dimensional vector representations capturing semantic relationships.'
      },
      {
        step: 6,
        name: 'Stacked LSTM',
        category: 'model',
        description: 'Recurrent Memory Gates',
        detail: 'Multi-layer recurrent network passing hidden states and cell states to learn long-range sequence context.'
      },
      {
        step: 7,
        name: 'Softmax',
        category: 'model',
        description: 'Output Activation Function',
        detail: 'Transforms final dense layer output logits into a normalized probability distribution across the entire vocabulary.'
      },
      {
        step: 8,
        name: 'Probability Distribution',
        category: 'analytics',
        description: 'Candidate Token Ranking',
        detail: 'Evaluates candidate probabilities across top token indices to assess confidence intervals.'
      },
      {
        step: 9,
        name: 'Next Word Prediction',
        category: 'visualization',
        description: 'Sampling & Generation Output',
        detail: 'Selects the top-ranked token or performs stochastic sampling to produce predicted continuation text.'
      }
    ],
    challenges: [
      'Managing exponential sequence matrix memory explosion as the corpus vocabulary scaled',
      'Balancing LSTM cell hidden unit capacity against vanishing gradient risks and training epoch times',
      'Calibrating sampling temperature to prevent repetitive loops while preserving syntactic coherence'
    ],
    learnings: [
      'Deepened intuitive and mathematical mastery of recurrent neural networks and gating mechanisms (input, forget, output gates)',
      'Gained direct insight into how modern Transformer architectures evolved from foundational RNN/LSTM sequence models',
      'Learned essential deep learning workflows: tensor shaping, sequence padding, regularization, and loss monitoring'
    ],
    futureImprovements: [
      'Implement Attention mechanisms to visualize which previous tokens the model prioritizes when predicting outputs',
      'Compare LSTM generation quality against a lightweight decoder-only Transformer implemented from scratch in TensorFlow',
      'Deploy the model as a lightweight ONNX runtime microservice accessible via a real-time web UI'
    ],
    image: '/assets/project-text.svg',
    githubUrl: 'https://github.com/Heet-shah22',
    demoUrl: null,
    featured: true
  }
];
