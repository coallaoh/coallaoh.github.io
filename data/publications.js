// Publications data in JSON format
const publicationsData = [
  {
    "id": "sangwoo2026selfci",
    "title": "It Takes Two: Complementary Self-Distillation for Contextual Integrity in LLMs",
    "authors": [
      "sangwoo_park",
      "woongyeong_yeo",
      "yumin_choi",
      "hyomin_lee",
      "kangsan_kim",
      "seanie_lee",
      "jinheon_baek",
      "seong_joon_oh",
      "sung_ju_hwang"
    ],
    "venue": "NeurIPS (Poster)",
    "year": "2026",
    "url": "https://arxiv.org/abs/2605.20258",
    "bibtex": "@inproceedings{sangwoo2026selfci,\n  title={It Takes Two: Complementary Self-Distillation for Contextual Integrity in LLMs},\n  author={Park, Sangwoo and Yeo, Woongyeong and Choi, Yumin and Lee, Hyomin and Kim, Kangsan and Lee, Seanie and Baek, Jinheon and Oh, Seong Joon and Hwang, Sung Ju},\n  booktitle={Advances in Neural Information Processing Systems},\n  year={2026}\n}",
    "image": "pictures/sangwoo2026selfci-summary.svg",
    "links": [],
    "abstract": "An AI assistant should use the information it needs without sharing private details unnecessarily. We train it with two teachers: one focuses on the task, the other on privacy. This helps the assistant keep useful information and limit disclosure, even as private context builds up across its work.",
    "rtai_tags": [
      "PILM",
      "LLMAG"
    ],
    "image_alt": "Two teachers guide one assistant: task usefulness and privacy"
  },
  {
    "id": "bora2026halftruths",
    "title": "Half-Truths Break Similarity-Based Retrieval",
    "authors": [
      "bora_kargi",
      "arnas_uselis",
      "seong_joon_oh"
    ],
    "venue": "NeurIPS (Poster)",
    "year": "2026",
    "url": "https://arxiv.org/abs/2602.23906",
    "bibtex": "@inproceedings{bora2026halftruths,\n  title={Half-Truths Break Similarity-Based Retrieval},\n  author={Kargi, Bora and Uselis, Arnas and Oh, Seong Joon},\n  booktitle={Advances in Neural Information Processing Systems},\n  year={2026}\n}",
    "image": "pictures/bora2026halftruths-summary.svg",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/kargibora/CS-CLIP"
      }
    ],
    "abstract": "Adding a wrong detail to an otherwise correct image description should make it a worse match. CLIP often does the opposite. We teach it to check the individual objects and relationships in a caption, rather than just the whole sentence. This helps it reject half-truths and better understand how the parts of a scene fit together.",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ],
    "image_alt": "A correct description becomes a half-truth when a false object is added"
  },
  {
    "id": "seokwon2026meme",
    "title": "MEME: Multi-Entity & Evolving Memory Evaluation",
    "authors": [
      "seokwon_jung",
      "alexander_rubinstein",
      "arnas_uselis",
      "sangdoo_yun",
      "seong_joon_oh"
    ],
    "venue": "NeurIPS Evaluations and Datasets Track (Poster)",
    "year": "2026",
    "url": "https://arxiv.org/abs/2605.12477",
    "bibtex": "@inproceedings{seokwon2026meme,\n  title={MEME: Multi-Entity \\& Evolving Memory Evaluation},\n  author={Jung, Seokwon and Rubinstein, Alexander and Uselis, Arnas and Yun, Sangdoo and Oh, Seong Joon},\n  booktitle={NeurIPS Evaluations and Datasets Track},\n  year={2026}\n}",
    "image": "pictures/seokwon2026meme.png",
    "links": [
      {
        "text": "Project",
        "url": "https://seokwonjung-jay.github.io/meme-eval/"
      }
    ],
    "abstract": "An AI assistant's memory needs to do more than recall a fact. When people, plans or relationships change, it must also work out what is no longer true. MEME tests these abilities across multiple entities and updates. Current memory systems struggle most with the consequences of a change, even when they can retrieve individual facts.",
    "rtai_tags": [
      "LLMAG"
    ],
    "workshops": [
      "SCALE@ICML 2026 (Poster)"
    ]
  },
  {
    "id": "uselis2026crisp",
    "title": "CRISP: Compositional Reasoning over Images via Stackable Programs for VLMs",
    "authors": [
      "arnas_uselis",
      "yujin_jeong",
      "yanpeng_zhao",
      "alexander_rubinstein",
      "seong_joon_oh",
      "yonatan_bitton",
      "paul_gavrikov"
    ],
    "venue": "NeurIPS Evaluations and Datasets Track (Poster)",
    "year": "2026",
    "url": "",
    "bibtex": "@inproceedings{uselis2026crisp,\n  title={CRISP: Compositional Reasoning over Images via Stackable Programs for VLMs},\n  author={Uselis, Arnas and Jeong, Yujin and Zhao, Yanpeng and Rubinstein, Alexander and Oh, Seong Joon and Bitton, Yonatan and Gavrikov, Paul},\n  booktitle={NeurIPS Evaluations and Datasets Track},\n  year={2026}\n}",
    "image": "pictures/uselis2026crisp.svg",
    "links": [],
    "abstract": "A vision-language model can give the right answer while looking at the wrong objects. CRISP builds visual questions from reusable steps and checks which objects the model uses at every stage. Across 2D characters, 3D characters and indoor scenes, models struggle as the reasoning gets longer, and correct final answers often hide mistakes along the way.",
    "image_alt": "A visual reasoning chain with a checked object bounding box at every step",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ]
  },
  {
    "id": "elena2026muppet",
    "title": "MuPPET: A Benchmark for Contextual Privacy of LLM Assistants in Multi-Party Conversations",
    "authors": [
      "elena_sofia_ruzzetti",
      "cornelius_emde",
      "sangdoo_yun",
      "seong_joon_oh",
      "martin_gubri"
    ],
    "venue": "arXiv",
    "year": "2026",
    "url": "https://arxiv.org/abs/2606.23217",
    "bibtex": "@article{elena2026muppet,\n  title={MuPPET: A Benchmark for Contextual Privacy of LLM Assistants in Multi-Party Conversations},\n  author={Ruzzetti, Elena Sofia and Emde, Cornelius and Yun, Sangdoo and Oh, Seong Joon and Gubri, Martin},\n  journal={arXiv preprint arXiv:2606.23217},\n  year={2026}\n}",
    "image": "pictures/elena2026muppet.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/elenasofia98/MuPPET"
      }
    ],
    "abstract": "Privacy benchmarks test an LLM talking to one person at a time, yet real assistants live in group chats where a single disclosure reaches everyone at once. This is structurally harder: information must be appropriate for every recipient at the same time, and one wrong audience is a leak. MuPPET measures this multi-party setting, and models leak far more than one-to-one tests suggest. A model that looks private one-on-one can fail in a crowd.",
    "rtai_tags": [
      "PILM",
      "LLMAG"
    ]
  },
  {
    "id": "evgenii2026futureprobes",
    "title": "Predicting Future Behaviors in Reasoning Models Enables Better Steering",
    "authors": [
      "evgenii_kortukov",
      "piotr_komorowski",
      "florian_klein",
      "paula_engl",
      "gabriele_sarti",
      "seong_joon_oh",
      "sebastian_lapuschkin",
      "wojciech_samek"
    ],
    "venue": "arXiv",
    "year": "2026",
    "url": "https://arxiv.org/abs/2606.11172",
    "bibtex": "@article{evgenii2026futureprobes,\n  title={Predicting Future Behaviors in Reasoning Models Enables Better Steering},\n  author={Kortukov, Evgenii and Komorowski, Piotr and Klein, Florian and Engl, Paula and Sarti, Gabriele and Oh, Seong Joon and Lapuschkin, Sebastian and Samek, Wojciech},\n  journal={arXiv preprint arXiv:2606.11172},\n  year={2026}\n}",
    "image": "pictures/evgenii2026futureprobes.png",
    "links": [],
    "abstract": "To steer a reasoning model, you have to act before it does, not after. Existing methods read internal features that merely detect behaviour in text the model has already written, which says little about what comes next. We instead train probes to forecast future behaviour from mid-reasoning, then steer by picking the sentence most likely to lead where we want. This removes almost all of the quality loss that activation steering causes, and even works in cases where activation steering fails outright.",
    "rtai_tags": [
      "LRM",
      "LLMSV"
    ]
  },
  {
    "id": "shuman2026clipgen",
    "title": "CLIP Models Generalize Less Than Compositional Benchmarks Suggest",
    "authors": [
      "shuman_peng",
      "arnas_uselis",
      "darina_koishigarina",
      "martin_ester",
      "seong_joon_oh"
    ],
    "venue": "ICML 2026 Workshop CompLearn (Poster)",
    "year": "2026",
    "url": "https://openreview.net/forum?id=C8MlQkr4bw",
    "bibtex": "@inproceedings{shuman2026clipgen,\n  title={CLIP Models Generalize Less Than Compositional Benchmarks Suggest},\n  author={Peng, Shuman and Uselis, Arnas and Koishigarina, Darina and Ester, Martin and Oh, Seong Joon},\n  booktitle={ICML 2026 Workshop on Compositional Learning: Safety, Interpretability, and Agents (CompLearn)},\n  year={2026}\n}",
    "image": "pictures/shuman2026clipgen.png",
    "links": [],
    "abstract": "Does a vision-language model understand a new combination of familiar objects and attributes, or has it seen that combination before? We find that common benchmarks often mix these cases. When we remove familiar combinations and other shortcuts, performance drops and model rankings change. Existing scores can therefore overstate how well models understand new combinations.",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ],
    "workshops": [
      "ICML 2026 Workshop on Combining Theory and Benchmarks (CTB)"
    ]
  },
  {
    "id": "fabian2026saeft",
    "title": "Sparse Autoencoders enable Robust and Interpretable Fine-tuning of CLIP models",
    "authors": [
      "fabian_morelli",
      "arnas_uselis",
      "ankit_sonthalia",
      "seong_joon_oh"
    ],
    "venue": "arXiv",
    "year": "2026",
    "url": "https://arxiv.org/abs/2605.15961",
    "bibtex": "@article{fabian2026saeft,\n  title={Sparse Autoencoders enable Robust and Interpretable Fine-tuning of CLIP models},\n  author={Morelli, Fabian and Uselis, Arnas and Sonthalia, Ankit and Oh, Seong Joon},\n  journal={arXiv preprint arXiv:2605.15961},\n  year={2026}\n}",
    "image": "pictures/fabian2026saeft.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/Fabian-Mor/sae-ft"
      }
    ],
    "abstract": "Adapting CLIP to a new task can make it less reliable on unfamiliar images. SAE-FT tracks meaningful visual features and limits how much fine-tuning changes them. This helps the model learn the new task without losing useful knowledge, and makes the changes easier to inspect.",
    "rtai_tags": [
      "VLM"
    ]
  },
  {
    "id": "cornelius2026maseval",
    "title": "MASEval: Extending Multi-Agent Evaluation from Models to Systems",
    "authors": [
      "cornelius_emde",
      "alexander_rubinstein",
      "anmol_goel",
      "ahmed_heakl",
      "sangdoo_yun",
      "seong_joon_oh",
      "martin_gubri"
    ],
    "co_first_authors": [
      "alexander_rubinstein",
      "anmol_goel",
      "ahmed_heakl"
    ],
    "venue": "ACL System Demo",
    "year": "2026",
    "url": "https://arxiv.org/abs/2603.08835",
    "bibtex": "@inproceedings{cornelius2026maseval,\n  title={MASEval: Extending Multi-Agent Evaluation from Models to Systems},\n  author={Emde, Cornelius and Rubinstein, Alexander and Goel, Anmol and Heakl, Ahmed and Yun, Sangdoo and Oh, Seong Joon and Gubri, Martin},\n  booktitle={Proceedings of the Annual Meeting of the Association for Computational Linguistics: System Demonstration Track},\n  year={2026}\n}",
    "image": "pictures/cornelius2026maseval-summary.svg",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/parameterlab/MASEval"
      }
    ],
    "abstract": "An AI agent's performance depends on more than its language model. The framework, tools and surrounding code matter too. MASEval compares complete agent systems across different tasks. We find that the choice of framework can affect results as much as the choice between similarly capable models.",
    "rtai_tags": [
      "LLMAG",
      "ELM"
    ],
    "workshops": [
      "GEM 2026 Workshop on Natural Language Generation, Evaluation, and Metrics"
    ],
    "image_alt": "Compare complete agent systems, not only the language model"
  },
  {
    "id": "emde2026lostcomm",
    "title": "Lost in Communication: Uncertainty Propagation in Multi-Agent Systems",
    "authors": [
      "cornelius_emde",
      "anmol_goel",
      "sangdoo_yun",
      "seong_joon_oh",
      "martin_gubri"
    ],
    "venue": "ICML 2026 Workshop AgenticUQ (Poster)",
    "year": "2026",
    "bibtex": "@inproceedings{emde2026lostcomm,\n  title={Lost in Communication: Uncertainty Propagation in Multi-Agent Systems},\n  author={Emde, Cornelius and Goel, Anmol and Yun, Sangdoo and Oh, Seong Joon and Gubri, Martin},\n  booktitle={ICML 2026 Workshop on Statistical Frameworks for Uncertainty in Agentic Systems (AgenticUQ)},\n  year={2026}\n}",
    "image": "pictures/emde2026lostcomm-summary.svg",
    "links": [],
    "abstract": "When one AI agent passes an answer to another, does it also pass on its uncertainty? We find that doubts can fade along the way: the receiving agent may not reflect how uncertain the original answer was. This makes confidence across a team of agents a separate problem from confidence within a single model.",
    "rtai_tags": [
      "LLMAG",
      "UQLM"
    ],
    "image_alt": "Uncertainty can disappear when one agent passes an answer to another"
  },
  {
    "id": "kim2026breakgeom",
    "title": "Break the Output Geometry for Large Language Model Unlearning",
    "authors": [
      "yejin_kim",
      "William F. Shen",
      "seokwon_jung",
      "seong_joon_oh"
    ],
    "venue": "ICML 2026 Workshop MemFM (Poster)",
    "year": "2026",
    "bibtex": "@inproceedings{kim2026breakgeom,\n  title={Break the Output Geometry for Large Language Model Unlearning},\n  author={Kim, Yejin and Shen, William F. and Jung, Seokwon and Oh, Seong Joon},\n  booktitle={ICML 2026 Workshop on Memory in Foundation Models (MemFM)},\n  year={2026}\n}",
    "image": "pictures/kim2026breakgeom.png",
    "links": [],
    "abstract": "Teaching a language model to forget selected information can also damage what it should remember. We study how answers are represented inside the model and identify a direction that controls a target output. Our method moves the information to forget along this direction, which improves the balance between forgetting and useful retained knowledge.",
    "rtai_tags": [
      "MU"
    ]
  },
  {
    "id": "arnas2026necessary",
    "title": "Compositional Generalization Requires Linear, Orthogonal Representations in Vision Embedding Models",
    "authors": [
      "arnas_uselis",
      "andrea_dittadi",
      "seong_joon_oh"
    ],
    "venue": "ICML Oral",
    "year": "2026",
    "url": "https://arxiv.org/abs/2602.24264",
    "bibtex": "@inproceedings{arnas2026necessary,\n  title={Compositional Generalization Requires Linear, Orthogonal Representations in Vision Embedding Models},\n  author={Uselis, Arnas and Dittadi, Andrea and Oh, Seong Joon},\n  booktitle={International Conference on Machine Learning (ICML)},\n  year={2026}\n}",
    "image": "pictures/arnas2026necessary.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/oshapio/necessary-compositionality"
      }
    ],
    "abstract": "How should a vision model represent familiar concepts so that it can recognise new combinations of them? We show that a set of requirements for this ability implies a particular structure: concepts must combine linearly along independent directions. Modern vision models partly follow this structure, and stronger structure goes with better performance on unseen combinations.",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ]
  },
  {
    "id": "arnas2026binding",
    "title": "How can embedding models bind concepts?",
    "authors": [
      "arnas_uselis",
      "darina_koishigarina",
      "seong_joon_oh"
    ],
    "co_first_authors": [
      "arnas_uselis",
      "darina_koishigarina"
    ],
    "venue": "ICML Spotlight",
    "year": "2026",
    "url": "https://arxiv.org/abs/2605.31503",
    "bibtex": "@inproceedings{arnas2026binding,\n  title={How can embedding models bind concepts?},\n  author={Uselis, Arnas and Koishigarina, Darina and Oh, Seong Joon},\n  booktitle={International Conference on Machine Learning (ICML)},\n  year={2026}\n}",
    "image": "pictures/arnas2026binding.png",
    "links": [],
    "abstract": "Recognising a colour and a shape is not enough: a model must know which colour belongs to which shape. We study how models combine these concepts in their image representations. CLIP struggles with new combinations, while controlled models can learn simpler, more reliable combinations when their training data covers enough examples.",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ]
  },
  {
    "id": "stefano2026implicit",
    "title": "Universal Algorithm-Implicit Learning",
    "authors": [
      "stefano_woerner",
      "seong_joon_oh",
      "christian_f_baumgartner"
    ],
    "venue": "ICML",
    "year": "2026",
    "url": "https://arxiv.org/abs/2602.14761",
    "bibtex": "@inproceedings{stefano2026implicit,\n  title={Universal Algorithm-Implicit Learning},\n  author={Woerner, Stefano and Oh, Seong Joon and Baumgartner, Christian F.},\n  booktitle={International Conference on Machine Learning (ICML)},\n  year={2026}\n}",
    "image": "pictures/stefano2026implicit-summary.svg",
    "links": [],
    "abstract": "A model that learns how to learn should cope with more than one fixed kind of task. We develop a framework for this goal and introduce TAIL, a model that can handle different input types and label sets. It learns from a few examples and can transfer to new domains and kinds of data.",
    "rtai_tags": [],
    "image_alt": "One learner handles tasks with different inputs and labels"
  },
  {
    "id": "hoyeon2026lpa",
    "title": "Dynamics Reveals Structure: Challenging the Linear Propagation Assumption",
    "authors": [
      "hoyeon_chang",
      "blint_mucsnyi",
      "seong_joon_oh"
    ],
    "venue": "ICML Spotlight",
    "year": "2026",
    "url": "https://arxiv.org/abs/2601.21601",
    "bibtex": "@inproceedings{hoyeon2026lpa,\n  title={Dynamics Reveals Structure: Challenging the Linear Propagation Assumption},\n  author={Chang, Hoyeon and Mucs\\'{a}nyi, B\\'{a}lint and Oh, Seong Joon},\n  booktitle={International Conference on Machine Learning (ICML)},\n  year={2026}\n}",
    "image": "pictures/hoyeon2026lpa-summary.svg",
    "links": [],
    "abstract": "If we change one fact inside a model, should related facts change too? Many methods assume that these changes can spread through simple linear operations. We show why relationships such as negation and chains of facts can make that impossible. These limits help explain some failures in knowledge editing and multi-step reasoning.",
    "rtai_tags": [
      "KELM",
      "MU"
    ],
    "workshops": [
      "ICLR 2026 Workshop on Unifying Concept Representation Learning (Oral)"
    ],
    "image_alt": "Changing one fact does not always update related facts correctly"
  },
  {
    "id": "yujin2026diffusion",
    "title": "When Do Diffusion Models learn to Generate Multiple Objects?",
    "authors": [
      "yujin_jeong",
      "arnas_uselis",
      "iro_laina",
      "seong_joon_oh",
      "anna_rohrbach"
    ],
    "venue": "ICML",
    "year": "2026",
    "url": "https://arxiv.org/abs/2605.00273",
    "bibtex": "@inproceedings{yujin2026diffusion,\n  title={When Do Diffusion Models learn to Generate Multiple Objects?},\n  author={Jeong, Yujin and Uselis, Arnas and Laina, Iro and Oh, Seong Joon and Rohrbach, Anna},\n  booktitle={International Conference on Machine Learning (ICML)},\n  year={2026}\n}",
    "image": "pictures/yujin2026diffusion.png",
    "links": [],
    "abstract": "Image generators can produce convincing pictures yet struggle with several objects, exact counts or unfamiliar combinations. We use controlled scenes to separate these difficulties from the effects of training-data size and balance. Scene complexity matters strongly, counting is especially difficult with little data, and unseen combinations remain a major obstacle.",
    "rtai_tags": [
      "CoGe",
      "DiffM"
    ],
    "workshops": [
      "ICML 2026 Workshop CompLearn (Poster)"
    ]
  },
  {
    "id": "alex2025disco",
    "title": "DISCO: Diversifying Sample Condensation for Efficient Model Evaluation",
    "authors": [
      "alexander_rubinstein",
      "benjamin_raible",
      "martin_gubri",
      "seong_joon_oh"
    ],
    "venue": "ICLR",
    "year": "2026",
    "url": "https://arxiv.org/abs/2510.07959",
    "bibtex": "@inproceedings{alex2025disco,\n  title={DISCO: Diversifying Sample Condensation for Efficient Model Evaluation},\n  author={Rubinstein, Alexander and Raible, Benjamin and Gubri, Martin and Oh, Seong Joon},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2026}\n}",
    "image": "pictures/alex2025disco-summary.svg",
    "links": [
      {
        "text": "Project Page",
        "url": "https://arubique.github.io/disco-site/"
      },
      {
        "text": "Code",
        "url": "https://github.com/arubique/disco-public"
      }
    ],
    "abstract": "Testing every new model on a large benchmark is expensive. DISCO chooses a small set of questions on which models disagree most. These questions reveal more about the differences between models and let us estimate full-benchmark performance with far fewer evaluations.",
    "rtai_tags": [
      "ELM"
    ],
    "workshops": [
      "ICLR 2026 Workshop on Navigating and Addressing Data Problems for Foundation Models",
      "Catch, Adapt, and Operate: Monitoring ML Models Under Drift Workshop (Oral, Best Paper Award)",
      "GEM 2026 Workshop on Natural Language Generation, Evaluation, and Metrics"
    ],
    "image_alt": "Choose a small set of test questions where models disagree"
  },
  {
    "id": "ahmed2025drllm",
    "title": "Dr.LLM: Dynamic Layer Routing for LLMs",
    "authors": [
      "ahmed_heakl",
      "martin_gubri",
      "salman_khan",
      "sangdoo_yun",
      "seong_joon_oh"
    ],
    "venue": "ICLR",
    "year": "2026",
    "url": "https://arxiv.org/abs/2510.12773",
    "bibtex": "@inproceedings{ahmed2025drllm,\n  title={Dr.LLM: Dynamic Layer Routing for LLMs},\n  author={Heakl, Ahmed and Gubri, Martin and Khan, Salman and Yun, Sangdoo and Oh, Seong Joon},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2026}\n}",
    "image": "pictures/ahmed2025drllm-summary.svg",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/parameterlab/dr-llm"
      }
    ],
    "abstract": "A language model normally uses the same sequence of layers for every problem. Dr.LLM lets it skip, use or repeat layers as needed. Small routing modules learn useful paths through the existing model, so it can reason better with less computation and apply the same approach to new tasks.",
    "rtai_tags": [
      "ReLM"
    ],
    "workshops": [
      "Third Workshop on Test-Time Updates (Main Track)"
    ],
    "image_alt": "A language model routes computation through layers: use, skip or repeat"
  },
  {
    "id": "darina2025binding",
    "title": "CLIP Behaves like a Bag-of-Words Model Cross-modally but not Uni-modally",
    "authors": [
      "darina_koishigarina",
      "arnas_uselis",
      "seong_joon_oh"
    ],
    "venue": "ICLR",
    "year": "2026",
    "url": "https://arxiv.org/abs/2502.03566",
    "bibtex": "@inproceedings{darina2025binding,\n  title={CLIP Behaves like a Bag-of-Words Model Cross-modally but not Uni-modally},\n  author={Koishigarina, Darina and Uselis, Arnas and Oh, Seong Joon},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2026}\n}",
    "image": "pictures/darina2025binding.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/kdariina/CLIP-not-BoW-unimodally"
      }
    ],
    "abstract": "CLIP can recognise the words in a description yet confuse which attribute belongs to which object. We trace part of this problem to how image and text representations are compared. A simple learned transformation of the text representation improves the match and helps distinguish scenes with the same objects but different attribute assignments.",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ]
  },
  {
    "id": "minyoung2026delimiter",
    "title": "Enhancing Multi-Image Understanding through Delimiter Token Scaling",
    "authors": [
      "minyoung_lee",
      "yeji_park",
      "dongjun_hwang",
      "yejin_kim",
      "seong_joon_oh",
      "junsuk_choe"
    ],
    "venue": "ICLR",
    "year": "2026",
    "url": "https://arxiv.org/abs/2602.01984",
    "bibtex": "@inproceedings{minyoung2026delimiter,\n  title={Enhancing Multi-Image Understanding through Delimiter Token Scaling},\n  author={Lee, Minyoung and Park, Yeji and Hwang, Dongjun and Kim, Yejin and Oh, Seong Joon and Choe, Junsuk},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2026}\n}",
    "image": "pictures/minyoung2026delimiter.png",
    "links": [
      {
        "text": "OpenReview",
        "url": "https://openreview.net/forum?id=7QFf05KrOm"
      },
      {
        "text": "Hugging Face",
        "url": "https://huggingface.co/papers/2602.01984"
      },
      {
        "text": "Code",
        "url": "https://github.com/MYMY-young/DelimScaling"
      }
    ],
    "abstract": "Vision-language models often do worse when they see several images at once. Information from different images can become mixed up inside the model. We strengthen the special tokens that separate the images, which helps preserve their boundaries and improves multi-image understanding without extra training or inference cost.",
    "rtai_tags": [
      "VLM"
    ]
  },
  {
    "id": "michael2025selfreflect",
    "title": "SelfReflect: Can LLMs Communicate Their Internal Answer Distribution?",
    "authors": [
      "michael_kirchhof",
      "luca_fuger",
      "adam_golinski",
      "eeshan_gunesh_dhekane",
      "arno_blaas",
      "seong_joon_oh",
      "sinead_williamson"
    ],
    "venue": "ICLR",
    "year": "2026",
    "url": "https://arxiv.org/abs/2505.20295",
    "bibtex": "@inproceedings{kirchhof2025selfreflect,\n  title={SelfReflect: Can LLMs Communicate Their Internal Answer Distribution?},\n  author={Kirchhof, Michael and Füger, Luca and Goliński, Adam and Dhekane, Eeshan Gunesh and Blaas, Arno and Oh, Seong Joon and Williamson, Sinead},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2026}\n}",
    "image": "pictures/michael2025selfreflect-summary.svg",
    "links": [],
    "abstract": "A model's written answer may hide how uncertain it actually is. SelfReflect measures whether a short summary represents the range of answers the model would give. We find that models often communicate this poorly. Summaries become more faithful when the model first produces several answers and then describes their variation.",
    "rtai_tags": [
      "UQLM",
      "ELM"
    ],
    "image_alt": "A written summary should reflect the model’s range of possible answers"
  },
  {
    "id": "anmol2026privacycollapse",
    "title": "Privacy Collapse: Benign Fine-Tuning Can Break Contextual Privacy in Language Models",
    "authors": [
      "anmol_goel",
      "cornelius_emde",
      "sangdoo_yun",
      "seong_joon_oh",
      "martin_gubri"
    ],
    "venue": "ACL",
    "year": "2026",
    "url": "https://arxiv.org/abs/2601.15220",
    "bibtex": "@inproceedings{anmol2026privacycollapse,\n  title={Privacy Collapse: Benign Fine-Tuning Can Break Contextual Privacy in Language Models},\n  author={Goel, Anmol and Emde, Cornelius and Yun, Sangdoo and Oh, Seong Joon and Gubri, Martin},\n  year={2026},\n  booktitle={Proceedings of the Annual Meeting of the Association for Computational Linguistics: ACL 2026}\n}",
    "image": "pictures/anmol2026privacycollapse.png",
    "links": [],
    "abstract": "A model can lose its sense of privacy after fine-tuning on apparently harmless tasks. Training for helpfulness, exposure to user information or even debugging examples can make it share private details inappropriately. Standard safety and usefulness tests may miss this change, so privacy needs its own checks after fine-tuning.",
    "rtai_tags": [
      "PILM"
    ],
    "workshops": [
      "ICLR 2026 Workshop on Principled Design for Trustworthy AI",
      "ICLR 2026 Workshop on Navigating and Addressing Data Problems for Foundation Models"
    ]
  },
  {
    "id": "philipp2026nonattrib",
    "title": "LLM Generation Novelty Through the Lens of Semantic Similarity",
    "authors": [
      "philipp_davydov",
      "ameya_prabhu",
      "matthias_bethge",
      "elisa_nguyen",
      "seong_joon_oh"
    ],
    "venue": "EMNLP Findings",
    "year": "2026",
    "url": "https://arxiv.org/abs/2510.27313",
    "bibtex": "@inproceedings{philipp2026nonattrib,\n  title={LLM Generation Novelty Through the Lens of Semantic Similarity},\n  author={Davydov, Philipp and Prabhu, Ameya and Bethge, Matthias and Nguyen, Elisa and Oh, Seong Joon},\n  year={2026},\n  booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2026},\n}",
    "image": "pictures/philipp2026nonattrib.png",
    "links": [
      {
        "text": "Dataset",
        "url": "https://huggingface.co/datasets/stai-tuebingen/faiss-smollm"
      }
    ],
    "abstract": "How much of a language model's answer is new, and how much resembles its training data? We search for close matches in the training corpus and flag outputs with no nearby match. The results reveal patterns in novelty across domains, effects of instruction tuning, and training influences that extend beyond short copied phrases.",
    "rtai_tags": [
      "TDI"
    ],
    "workshops": [
      "ICML 2026 Workshop on Foundations of Generative Models (FoGen)"
    ]
  },
  {
    "id": "heejin2025reasoning",
    "title": "What Defines Good Reasoning in LLMs? Dissecting Reasoning Steps with Multi-Aspect Evaluation",
    "authors": [
      "heejin_do",
      "jaehui_hwang",
      "dongyoon_han",
      "seong_joon_oh",
      "sangdoo_yun"
    ],
    "venue": "arXiv",
    "year": "2025",
    "url": "https://arxiv.org/abs/2510.20603",
    "bibtex": "@article{heejin2025reasoning,\n  title={What Defines Good Reasoning in LLMs? Dissecting Reasoning Steps with Multi-Aspect Evaluation},\n  author={Do, Heejin and Hwang, Jaehui and Han, Dongyoon and Oh, Seong Joon and Yun, Sangdoo},\n  journal={arXiv preprint arXiv:2510.20603},\n  year={2025}\n}",
    "image": "pictures/heejin2025reasoning.png",
    "links": [],
    "abstract": "Most people judge LLMs by their final answers. This misses the quality of the reasoning process. We break down reasoning into two dimensions: relevance and coherence. Relevance checks if each step is grounded in the problem. Coherence checks if it follows from prior steps. Our method, causal stepwise evaluation (CaSE), assesses each step without hindsight bias. We validate CaSE on two new expert-annotated benchmarks, MRa-GSM8K and MRa-MATH. Training data curated with CaSE directly improves model performance. This is a practical way to analyse, debug, and improve LLM reasoning.",
    "rtai_tags": [
      "ReLM"
    ]
  },
  {
    "id": "haritz2025cseo",
    "title": "C-SEO Bench: Does Conversational SEO Work?",
    "authors": [
      "haritz_puerto",
      "martin_gubri",
      "tommaso_green",
      "seong_joon_oh",
      "sangdoo_yun"
    ],
    "corresponding_authors": [
      "seong_joon_oh",
      "sangdoo_yun"
    ],
    "venue": "NeurIPS Datasets and Benchmarks",
    "year": "2025",
    "url": "https://arxiv.org/abs/2506.11097",
    "bibtex": "@inproceedings{haritz2025cseo,\n  title={C-SEO Bench: Does Conversational SEO Work?},\n  author={Puerto, Haritz and Gubri, Martin and Green, Tommaso and Oh, Seong Joon and Yun, Sangdoo},\n  booktitle={Advances in Neural Information Processing Systems 38 (NeurIPS 2025), Datasets and Benchmarks Track},\n  year={2025}\n}",
    "image": "pictures/haritz2025cseo.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/parameterlab/c-seo-bench"
      },
      {
        "text": "Data",
        "url": "https://huggingface.co/datasets/parameterlab/c-seo-bench"
      }
    ],
    "abstract": "Can website owners change their writing to appear more often in AI-generated search answers? C-SEO Bench tests proposed strategies across six domains and settings with competing sources. The tested strategies do not deliver reliable gains. The benchmark provides a way to measure such claims instead of relying on anecdotes.",
    "rtai_tags": [
      "RALM",
      "LLMAG"
    ]
  },
  {
    "id": "ankit2025ranking",
    "title": "On the rankability of visual embeddings",
    "authors": [
      "ankit_sonthalia",
      "arnas_uselis",
      "seong_joon_oh"
    ],
    "venue": "NeurIPS",
    "year": "2025",
    "url": "https://arxiv.org/abs/2507.03683",
    "bibtex": "@inproceedings{ankit2025ranking,\n  title={On the rankability of visual embeddings},\n  author={Sonthalia, Ankit and Uselis, Arnas and Oh, Seong Joon},\n  booktitle={Advances in Neural Information Processing Systems 38 (NeurIPS 2025)},\n  year={2025}\n}",
    "image": "pictures/ankit2025ranking.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/aktsonthalia/rankable-vision-embeddings"
      }
    ],
    "abstract": "Image representations are usually used to find similar pictures. Could they also sort pictures by age, crowd size or head direction? We test seven visual encoders across nine datasets and find that many already contain useful directions for these rankings. This could make image search support more than similarity alone.",
    "rtai_tags": [
      "VLM"
    ]
  },
  {
    "id": "yujin2025diffusion",
    "title": "Diffusion Classifiers Understand Compositionality, but Conditions Apply",
    "authors": [
      "yujin_jeong",
      "arnas_uselis",
      "seong_joon_oh",
      "anna_rohrbach"
    ],
    "co_first_authors": [
      "yujin_jeong",
      "arnas_uselis"
    ],
    "venue": "NeurIPS Datasets and Benchmarks",
    "year": "2025",
    "url": "https://arxiv.org/abs/2505.17955",
    "bibtex": "@inproceedings{yujin2025diffusion,\n  title={Diffusion Classifiers Understand Compositionality, but Conditions Apply},\n  author={Jeong, Yujin and Uselis, Arnas and Oh, Seong Joon and Rohrbach, Anna},\n  booktitle={Advances in Neural Information Processing Systems 38: Datasets and Benchmarks Track},\n  year={2025}\n}",
    "image": "pictures/yujin2025diffusion.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/eugene6923/Diffusion-Classifiers-Compositionality"
      }
    ],
    "abstract": "A model that can generate a new combination of objects does not necessarily understand it. We study when diffusion image generators can also distinguish between different combinations. The results identify conditions that affect this transfer and offer practical guidance for using generative models as image classifiers.",
    "rtai_tags": [
      "CoGe",
      "DiffM"
    ]
  },
  {
    "id": "dongjun2025ovs",
    "title": "OVS Meets Continual Learning: Towards Sustainable Open-Vocabulary Segmentation",
    "authors": [
      "dongjun_hwang",
      "yejin_kim",
      "minyoung_lee",
      "seong_joon_oh",
      "junsuk_choe"
    ],
    "venue": "NeurIPS",
    "year": "2025",
    "url": "https://arxiv.org/abs/2410.11536",
    "bibtex": "@inproceedings{dongjun2025ovs,\n  title={OVS Meets Continual Learning: Towards Sustainable Open-Vocabulary Segmentation},\n  author={Hwang, Dongjun and Kim, Yejin and Lee, Minyoung and Oh, Seong Joon and Choe, Junsuk},\n  booktitle={Advances in Neural Information Processing Systems 38 (NeurIPS 2025)},\n  year={2025}\n}",
    "image": "pictures/dongjun2025ovs.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/dongjunhwang/dwi"
      }
    ],
    "abstract": "A model that labels objects in images can improve on a new dataset but forget what it knew before. We keep both the original and adapted versions, then combine them according to the kind of image at hand. This helps the model adapt to new domains while preserving its performance on earlier ones.",
    "rtai_tags": [
      "SSeg",
      "VLM",
      "OOD"
    ]
  },
  {
    "id": "tommaso2025leakythoughts",
    "title": "Leaky Thoughts: Large Reasoning Models Are Not Private Thinkers",
    "authors": [
      "tommaso_green",
      "martin_gubri",
      "haritz_puerto",
      "sangdoo_yun",
      "seong_joon_oh"
    ],
    "corresponding_authors": [
      "sangdoo_yun",
      "seong_joon_oh"
    ],
    "venue": "EMNLP",
    "year": "2025",
    "url": "https://arxiv.org/abs/2506.15674",
    "bibtex": "@inproceedings{tommaso2025leakythoughts,\n  title={Leaky Thoughts: Large Reasoning Models Are Not Private Thinkers},\n  author={Green, Tommaso and Gubri, Martin and Puerto, Haritz and Yun, Sangdoo and Oh, Seong Joon},\n  year={2025},\n  booktitle = {Conference on Empirical Methods in Natural Language Processing (EMNLP)},\n}",
    "image": "pictures/tommaso2025leakythoughts.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/parameterlab/leaky_thoughts"
      },
      {
        "text": "Dataset",
        "url": "https://huggingface.co/datasets/parameterlab/leaky_thoughts"
      }
    ],
    "abstract": "A reasoning model may expose private information in its intermediate thoughts, even when it tries to keep the final answer safe. We find that attempts to reason about concealing a secret can themselves create opportunities to reveal it. Privacy checks therefore need to cover the reasoning process as well as the final response.",
    "rtai_tags": [
      "PILM",
      "LRM"
    ]
  },
  {
    "id": "arnas2025scaling",
    "title": "Does Data Scaling Lead to Visual Compositional Generalization?",
    "authors": [
      "arnas_uselis",
      "andrea_dittadi",
      "seong_joon_oh"
    ],
    "venue": "ICML",
    "year": "2025",
    "url": "https://arxiv.org/abs/2507.07102",
    "bibtex": "@article{arnas2025scaling,\n  title={Does Data Scaling Lead to Visual Compositional Generalization?},\n  author={Arnas Uselis and Andrea Dittadi and Seong Joon Oh},\n  journal={arXiv preprint arXiv:2507.07102},\n  year={2025}\n}",
    "image": "pictures/arnas2025scaling-summary.svg",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/oshapio/visual-compositional-generalization"
      }
    ],
    "abstract": "Will more training images teach a model to understand new combinations of familiar concepts? We find that variety matters more than sheer volume. Broad coverage encourages models to represent concepts separately, so they can recombine them in new situations. Simply adding more examples of the same combinations is not enough.",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ],
    "image_alt": "Diverse combinations of concepts matter more than repeated examples"
  },
  {
    "id": "alex2025ocl",
    "title": "Are We Done with Object-Centric Learning?",
    "authors": [
      "alexander_rubinstein",
      "ameya_prabhu",
      "matthias_bethge",
      "seong_joon_oh"
    ],
    "venue": "ICLR Workshop on Spurious Correlation and Shortcut Learning: Foundations and Solutions",
    "year": "2025",
    "url": "https://arxiv.org/abs/2504.07092",
    "bibtex": "@article{alex2025ocl,\n  title={Are We Done with Object-Centric Learning?},\n  author={Rubinstein, Alexander and Prabhu, Ameya and Bethge, Matthias and Oh, Seong Joon},\n  journal={arXiv preprint arXiv:2504.07092},\n  year={2025}\n}",
    "image": "pictures/alex2025ocl.png",
    "links": [
      {
        "text": "HuggingFace",
        "url": "https://huggingface.co/papers/2504.07092"
      },
      {
        "text": "Project Page",
        "url": "https://alexanderrubinstein.github.io/are-we-done-with-ocl/"
      },
      {
        "text": "Code",
        "url": "https://github.com/AlexanderRubinstein/OCCAM"
      }
    ],
    "abstract": "Learning to represent individual objects has long been a goal in computer vision. But strong segmentation models now solve much of the object-discovery task used to judge progress. We argue that evaluation should move towards what object-based representations enable in real applications, rather than focus mainly on finding object boundaries.",
    "rtai_tags": [
      "OCL"
    ]
  },
  {
    "id": "luca2025diffdiv",
    "title": "Mitigating Shortcut Learning with Diffusion Counterfactuals and Diverse Ensembles",
    "authors": [
      "luca_scimeca",
      "alexander_rubinstein",
      "damien_teney",
      "seong_joon_oh",
      "yoshua_bengio"
    ],
    "venue": "ICLR Workshop on Spurious Correlation and Shortcut Learning: Foundations and Solutions",
    "year": "2025",
    "url": "https://arxiv.org/abs/2311.16176",
    "bibtex": "@inproceedings{luca2025diffdiv,\n  title={Mitigating Shortcut Learning with Diffusion Counterfactuals and Diverse Ensembles},\n  author={Scimeca, Luca and Rubinstein, Alexander and Teney, Damien and Oh, Seong Joon and Bengio, Yoshua},\n  booktitle={ICLR Workshop},\n  year={2025}\n}",
    "image": "pictures/luca2025diffdiv-summary.svg",
    "links": [],
    "abstract": "Models often rely on easy shortcuts, such as a background that happens to match a label. We use diffusion models partway through training to generate unusual combinations that break these shortcuts. These examples help train groups of models with different strategies and improve their performance on unfamiliar data.",
    "rtai_tags": [
      "DiffM",
      "SyDa"
    ],
    "image_alt": "Generate unusual combinations to break shortcuts in training data"
  },
  {
    "id": "sohyun2025dicotta",
    "title": "DiCoTTA: Domain-invariant Learning for Continual Test-time Adaptation",
    "authors": [
      "sohyun_lee",
      "nayeong_kim",
      "juwon_kang",
      "seong_joon_oh",
      "suha_kwak"
    ],
    "venue": "arXiv",
    "year": "2025",
    "url": "https://arxiv.org/abs/2504.04981",
    "bibtex": "@article{sohyun2025dicotta,\n  title={DiCoTTA: Domain-invariant Learning for Continual Test-time Adaptation},\n  author={Lee, Sohyun and Kim, Nayeong and Kang, Juwon and Oh, Seong Joon and Kwak, Suha},\n  journal={arXiv preprint arXiv:2504.04981},\n  year={2025}\n}",
    "image": "pictures/sohyun2025dicotta.png",
    "links": [],
    "abstract": "A deployed model may face a stream of changing environments. Adapting to the latest one can make it forget earlier ones. DiCoTTA helps the model learn features that remain useful across environments while it processes new data. It improves continual adaptation and generalisation across four benchmarks.",
    "rtai_tags": [
      "TTA"
    ]
  },
  {
    "id": "haritz2025mia",
    "title": "Scaling Up Membership Inference: When and How Attacks Succeed on Large Language Models",
    "authors": [
      "haritz_puerto",
      "martin_gubri",
      "sangdoo_yun",
      "seong_joon_oh"
    ],
    "venue": "NAACL Findings",
    "year": "2025",
    "url": "https://arxiv.org/abs/2411.00154",
    "bibtex": "@inproceedings{haritz2025mia,\n  title={Scaling Up Membership Inference: When and How Attacks Succeed on Large Language Models},\n  author={Puerto, Haritz and Gubri, Martin and Yun, Sangdoo and Oh, Seong Joon},\n  year={2025},\n  booktitle = {Annual Conference of the North American Chapter of the Association for Computational Linguistics: NAACL 2025},\n}",
    "image": "pictures/haritz2025mia.png",
    "links": [],
    "abstract": "Can we tell whether a language model was trained on a particular text? Tests on individual sentences often find little evidence. We show that signals become more useful when combined across documents and larger collections. The scale of the material under investigation is therefore crucial to whether these tests succeed.",
    "rtai_tags": [
      "MIALM"
    ]
  },
  {
    "id": "arnas2025iclr",
    "title": "Intermediate Layer Classifiers for OOD Generalization",
    "authors": [
      "arnas_uselis",
      "seong_joon_oh"
    ],
    "venue": "ICLR",
    "year": "2025",
    "url": "https://arxiv.org/abs/2504.05461",
    "bibtex": "@inproceedings{arnas2025iclr,\ntitle = {Intermediate Layer Classifiers for OOD Generalization},\nauthor = {Uselis, Arnas and Oh, Seong Joon},\nyear = {2025},\nbooktitle = {International Conference on Learning Representations (ICLR)},\n}",
    "image": "pictures/arnas2025iclr.png",
    "links": [
      {
        "text": "OpenReview",
        "url": "https://openreview.net/forum?id=ByCV9xWfNK"
      }
    ],
    "abstract": "When adapting a vision model to new data, researchers often build a classifier on its final layer. We test features from earlier layers instead. They can transfer better to unfamiliar datasets, so the model's last representation is not always the best starting point.",
    "rtai_tags": [
      "OOD"
    ]
  },
  {
    "id": "ankit2025star",
    "title": "Do Deep Neural Network Solutions Form a Star Domain?",
    "authors": [
      "ankit_sonthalia",
      "alexander_rubinstein",
      "ehsan_abbasnejad",
      "seong_joon_oh"
    ],
    "venue": "ICLR",
    "year": "2025",
    "url": "https://arxiv.org/abs/2403.07968",
    "bibtex": "@inproceedings{ankit2025star,\ntitle = {Do Deep Neural Network Solutions Form a Star Domain?},\nauthor = {Sonthalia, Ankit and Rubinstein, Alexander and Abbasnejad, Ehsan and Oh, Seong Joon},\nyear = {2025},\nbooktitle = {International Conference on Learning Representations (ICLR)},\n}",
    "image": "pictures/ankit2025star.png",
    "links": [],
    "abstract": "Two well-trained neural networks can have very different internal weights. We ask whether useful models lie along straight paths between solutions and a shared centre. Experiments across many architectures and datasets reveal substantial connections between good solutions. This helps clarify the shape of the space in which neural networks learn.",
    "rtai_tags": [
      "MoMe"
    ]
  },
  {
    "id": "jaehyun2025iclr",
    "title": "Decoupled Finetuning for Domain Generalizable Semantic Segmentation",
    "authors": [
      "jaehyun_pahk",
      "donghyeon_kwon",
      "seong_joon_oh",
      "suha_kwak"
    ],
    "venue": "ICLR",
    "year": "2025",
    "url": "https://openreview.net/forum?id=qZEdmyqCHF",
    "bibtex": "@inproceedings{jaehyun2025iclr,\n  title = {Decoupled Finetuning for Domain Generalizable Semantic Segmentation},\n  author = {Pahk, Jaehyun and Kwon, Donghyeon and Oh, Seong Joon and Kwak, Suha},\n  year = {2025},\n  booktitle = {International Conference on Learning Representations (ICLR)},\n}",
    "image": "pictures/jaehyun2025iclr.png",
    "links": [],
    "abstract": "Adapting a model to label every pixel often means training an existing image encoder together with a new decoder. This can hurt performance on unfamiliar images. DeFT first prepares the decoder, then adapts the two parts separately. The result uses fewer trainable parameters and generalises better to new domains.",
    "rtai_tags": [
      "SSeg",
      "OOD"
    ]
  },
  {
    "id": "elisa2024tda",
    "title": "Towards User-Focused Research in Training Data Attribution for Human-Centered Explainable AI",
    "authors": [
      "elisa_nguyen",
      "johannes_bertram",
      "evgenii_kortukov",
      "jean_y_song",
      "seong_joon_oh"
    ],
    "venue": "arXiv",
    "year": "2024",
    "url": "https://arxiv.org/abs/2409.16978",
    "bibtex": "@article{nguyen2024towards,\n  title={Towards User-Focused Research in Training Data Attribution for Human-Centered Explainable AI},\n  author={Nguyen, Elisa and Bertram, Johannes and Kortukov, Evgenii and Song, Jean Y and Oh, Seong Joon},\n  journal={arXiv preprint arXiv:2409.16978},\n  year={2024}\n}",
    "image": "pictures/elisa2024tda.png",
    "links": [],
    "abstract": "Tools that trace a model's prediction back to its training data should answer questions people actually have. We interview AI practitioners to learn what they need from these explanations. Their needs reveal overlooked tasks and suggest ways to make research on training-data attribution more useful in practice.",
    "rtai_tags": [
      "TDI"
    ]
  },
  {
    "id": "alex2024diversify",
    "title": "Scalable Ensemble Diversification for OOD Generalization and Detection",
    "authors": [
      "alexander_rubinstein",
      "luca_scimeca",
      "damien_teney",
      "seong_joon_oh"
    ],
    "venue": "arXiv",
    "year": "2024",
    "url": "https://arxiv.org/abs/2409.16797",
    "bibtex": "@article{alex2024diversify,\n  title={Scalable Ensemble Diversification for OOD Generalization and Detection},\n  author={Rubinstein, Alexander and Scimeca, Luca and Teney, Damien and Oh, Seong Joon},\n  journal={arXiv preprint arXiv:2409.16797},\n  year={2024}\n}",
    "image": "pictures/alex2024diversify-summary.svg",
    "links": [],
    "abstract": "A group of models is more useful when its members do not all make the same mistakes. We make methods for encouraging this diversity practical at ImageNet scale. The approach uses difficult training examples and limits which parts of the models change. It improves performance on unfamiliar data and helps detect it.",
    "rtai_tags": [
      "OODD",
      "OOD",
      "UQCV"
    ],
    "image_alt": "Models with different strategies can make a more useful ensemble"
  },
  {
    "id": "evgenii2024ralm",
    "title": "Studying Large Language Model Behaviors Under Realistic Knowledge Conflicts",
    "authors": [
      "evgenii_kortukov",
      "alexander_rubinstein",
      "elisa_nguyen",
      "seong_joon_oh"
    ],
    "venue": "CoLM",
    "year": "2024",
    "url": "https://arxiv.org/abs/2404.16032",
    "bibtex": "@inproceedings{evgenii2024ralm,\n  title={Studying Large Language Model Behaviors Under Realistic Knowledge Conflicts},\n  author={Kortukov, Evgenii and Rubinstein, Alexander and Nguyen, Elisa and Oh, Seong Joon},\n  year={2024},\n  booktitle = {Conference on Language Modeling (CoLM)},\n}",
    "image": "pictures/evgenii2024ralm.png",
    "links": [],
    "abstract": "Giving a language model a relevant document does not guarantee that it will use it. The document may conflict with information learned during training. We study these conflicts in realistic settings to understand when a model follows the supplied evidence and when it falls back on its prior knowledge.",
    "rtai_tags": [
      "RALM"
    ]
  },
  {
    "id": "balint2024disentanglement",
    "title": "Benchmarking Uncertainty Disentanglement: Specialized Uncertainties for Specialized Tasks",
    "authors": [
      "blint_mucsnyi",
      "michael_kirchhof",
      "seong_joon_oh"
    ],
    "venue": "NeurIPS Datasets and Benchmarks Spotlight",
    "year": "2024",
    "url": "https://arxiv.org/abs/2402.19460",
    "bibtex": "@article{balint2024disentanglement,\n  title={Benchmarking Uncertainty Disentanglement: Specialized Uncertainties for Specialized Tasks},\n  author={Mucsányi, Bálint and Kirchhof, Michael and Oh, Seong Joon},\n  year={2024},\n  journal={arXiv preprint arXiv:2402.19460},\n}",
    "image": "pictures/balint2024disentanglement.png",
    "links": [],
    "abstract": "A model can be uncertain because an image is ambiguous or because it lacks relevant knowledge. Many methods claim to distinguish these sources, but those claims need testing. We compare uncertainty estimates across tasks and find that they often do not separate the sources as intended. Different tasks need carefully validated measures.",
    "rtai_tags": [
      "UD",
      "OODD",
      "UQCV"
    ]
  },
  {
    "id": "kirchhof2024pretrained",
    "title": "Pretrained Visual Uncertainties",
    "authors": [
      "michael_kirchhof",
      "mark_collier",
      "seong_joon_oh",
      "enkelejda_kasneci"
    ],
    "venue": "arXiv",
    "year": "2024",
    "url": "https://arxiv.org/abs/2402.16569",
    "bibtex": "@article{kirchhof2024pretrained,\n  title={Pretrained Visual Uncertainties},\n  author={Kirchhof, Michael and Collier, Mark and Oh, Seong Joon and Kasneci, Enkelejda},\n  year={2024},\n  journal={arXiv preprint arXiv:2402.16569},\n}",
    "image": "pictures/kirchhof2024pretrained.png",
    "links": [],
    "abstract": "Can a model learn to recognise uncertainty once and carry that skill to new tasks? We train uncertainty estimates on a large dataset, then transfer them to other settings. The approach focuses on ambiguity in the input itself and aims to make useful uncertainty estimates practical without retraining them from scratch each time.",
    "rtai_tags": [
      "UQCV"
    ]
  },
  {
    "id": "martin2024trap",
    "title": "TRAP: Targeted Random Adversarial Prompt Honeypot for Black-Box Identification",
    "authors": [
      "martin_gubri",
      "dennis_ulmer",
      "hwaran_lee",
      "sangdoo_yun",
      "seong_joon_oh"
    ],
    "venue": "ACL Findings",
    "year": "2024",
    "url": "https://arxiv.org/abs/2402.12991",
    "bibtex": "@inproceedings{martin2024trap,\n    title = {TRAP: Targeted Random Adversarial Prompt Honeypot for Black-Box Identification},\n    author = {Gubri, Martin and Ulmer, Dennis and Lee, Hwaran and Yun, Sangdoo and Oh, Seong Joon},\n    year={2024},\n    booktitle = {Findings of the Association for Computational Linguistics: ACL 2024},\n}",
    "image": "pictures/martin2024trap-summary.svg",
    "links": [],
    "abstract": "Which language model is running behind a chatbot service? TRAP creates special prompts that make a target model respond in a distinctive way. We can then check an unfamiliar service through its answers, without access to its internals. This offers a way to investigate model identity and possible unauthorised reuse.",
    "rtai_tags": [
      "MLAU",
      "SILM"
    ],
    "image_alt": "A distinctive prompt-response pattern can identify a hidden language model"
  },
  {
    "id": "dennis2024apricot",
    "title": "Calibrating Large Language Models Using Their Generations Only",
    "authors": [
      "dennis_ulmer",
      "martin_gubri",
      "hwaran_lee",
      "sangdoo_yun",
      "seong_joon_oh"
    ],
    "venue": "ACL",
    "year": "2024",
    "url": "https://arxiv.org/abs/2403.05973",
    "bibtex": "@inproceedings{dennis2024apricot,\n    title = {Calibrating Large Language Models Using Their Generations Only},\n    author = {Ulmer, Dennis and Gubri, Martin and Lee, Hwaran and Yun, Sangdoo and Oh, Seong Joon},\n    year={2024},\n    booktitle = {Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics},\n}",
    "image": "pictures/dennis2024apricot-summary.svg",
    "links": [],
    "abstract": "A chatbot's answer does not always tell us how much to trust it, and many services hide the model's internal scores. APRICOT trains a small external model to estimate reliability from the question and generated answer alone. This makes confidence estimation possible even when only a text interface is available.",
    "rtai_tags": [
      "UQLM"
    ],
    "image_alt": "Estimate confidence using only a question and a model’s answer"
  },
  {
    "id": "elisa2023neuripsxaiw",
    "title": "Exploring Practitioner Perspectives On Training Data Attribution Explanations",
    "authors": [
      "elisa_nguyen",
      "evgenii_kortukov",
      "jean_y_song",
      "seong_joon_oh"
    ],
    "venue": "NeurIPS XAI in Action Workshop",
    "year": "2023",
    "url": "https://arxiv.org/abs/2310.20477",
    "bibtex": "@inproceedings{elisa2023neuripsxaiw,\ntitle = {Exploring Practitioner Perspectives On Training Data Attribution Explanations},\nauthor = {Nguyen, Elisa and Kortukov, Evgenii and Song, Jean Y. and Oh, Seong Joon},\nbooktitle = {Conference on Neural Information Processing Systems Workshop on XAI in Action},\nyear = {2023}\n}",
    "image": "pictures/elisa2023neuripsxaiw-summary.svg",
    "links": [],
    "abstract": "Would it help practitioners to know which training examples influenced a model's prediction? We ask people who build or use machine-learning systems across different sectors. Their responses show potential uses for these explanations and highlight the need to evaluate them in real workflows, beyond mathematical measures of attribution quality.",
    "rtai_tags": [
      "TDI"
    ],
    "image_alt": "Ask practitioners which training-data explanations would help their work"
  },
  {
    "id": "balint2023tml",
    "title": "Trustworthy Machine Learning",
    "authors": [
      "blint_mucsnyi",
      "michael_kirchhof",
      "elisa_nguyen",
      "alexander_rubinstein",
      "seong_joon_oh"
    ],
    "venue": "arXiv",
    "year": "2023",
    "url": "https://trustworthyml.io/",
    "bibtex": "@misc{mucsányi2023trustworthy,\n  title={Trustworthy Machine Learning},\n  author={Bálint Mucsányi and Michael Kirchhof and Elisa Nguyen and Alexander Rubinstein and Seong Joon Oh},\n  year={2023},\n  eprint={2310.08215},\n  archivePrefix={arXiv},\n  primaryClass={cs.LG}\n}",
    "image": "pictures/balint2023tml.png",
    "links": [
      {
        "text": "Webpage",
        "url": "https://trustworthyml.io/"
      },
      {
        "text": "arXiv",
        "url": "https://arxiv.org/abs/2310.08215"
      }
    ],
    "abstract": "This textbook introduces four questions behind trustworthy machine learning: can a model handle unfamiliar data, explain its decisions, express uncertainty and be evaluated reliably? It connects foundational ideas with recent research and practical code examples. The book grew out of our teaching and can also be used as a standalone resource.",
    "rtai_tags": [
      "OOD",
      "AAML",
      "FAtt",
      "TDI",
      "BDL"
    ]
  },
  {
    "id": "elisa2023neurips",
    "title": "A Bayesian Perspective On Training Data Attribution",
    "authors": [
      "elisa_nguyen",
      "minjoon_seo",
      "seong_joon_oh"
    ],
    "venue": "NeurIPS",
    "year": "2023",
    "url": "https://arxiv.org/abs/2305.19765",
    "bibtex": "@inproceedings{elisa2023neurips,\n    title = {A Bayesian Perspective On Training Data Attribution},\n    author = {Nguyen, Elisa and Seo, Minjoon and Oh, Seong Joon},\n    year = {2023},\n    booktitle = {Conference on Neural Information Processing Systems},\n}",
    "image": "pictures/elisa2023neurips.png",
    "links": [],
    "abstract": "Removing one training example often changes a model less than simply retraining it with a different random seed. This makes claims about an individual example's influence hard to trust. We use a Bayesian perspective to study this noise and identify when training-data attribution can provide a meaningful signal.",
    "rtai_tags": [
      "TDI",
      "BDL"
    ]
  },
  {
    "id": "siwon2023neurips",
    "title": "ProPILE: Probing Privacy Leakage in Large Language Models",
    "authors": [
      "siwon_kim",
      "sangdoo_yun",
      "hwaran_lee",
      "martin_gubri",
      "sungroh_yoon",
      "seong_joon_oh"
    ],
    "corresponding_authors": [
      "sungroh_yoon",
      "seong_joon_oh"
    ],
    "venue": "NeurIPS Spotlight",
    "year": "2023",
    "url": "https://arxiv.org/abs/2307.01881",
    "bibtex": "@inproceedings{siwon2023neurips,\n    title = {ProPILE: Probing Privacy Leakage in Large Language Models},\n    author = {Kim, Siwon and Yun, Sangdoo and Lee, Hwaran and Gubri, Martin and Yoon, Sungroh and Oh, Seong Joon},\n    year = {2023},\n    booktitle = {Conference on Neural Information Processing Systems},\n}",
    "image": "pictures/siwon2023neurips.png",
    "links": [],
    "abstract": "Could a language model reveal your personal information? ProPILE tests this with prompts based on details a person already knows about themselves. It measures how readily the model discloses related information and helps people investigate their own exposure, rather than rely only on broad privacy scores.",
    "rtai_tags": [
      "PILM"
    ]
  },
  {
    "id": "teney2023neurips",
    "title": "ID and OOD Performance Are Sometimes Inversely Correlated on Real-world Datasets",
    "authors": [
      "damien_teney",
      "lin_yong",
      "seong_joon_oh",
      "ehsan_abbasnejad"
    ],
    "venue": "NeurIPS Spotlight",
    "year": "2023",
    "url": "https://arxiv.org/abs/2209.00613",
    "bibtex": "@inproceedings{teney2023neurips,\n    title = {ID and OOD Performance Are Sometimes Inversely Correlated on Real-world Datasets},\n    author = {Teney, Damien and Oh, Seong Joon and Abbasnejad, Ehsan},\n    year = {2023},\n    booktitle = {Conference on Neural Information Processing Systems},\n}",
    "image": "pictures/teney2023neurips.png",
    "links": [],
    "abstract": "Better scores on familiar test data do not always mean better performance in a new environment. We present real datasets where the two move in opposite directions. The choice of models included in a study can hide this trade-off, so progress on familiar data alone is not a reliable guide to generalisation.",
    "rtai_tags": [
      "OOD"
    ]
  },
  {
    "id": "kirchhof2023neuripsdb",
    "title": "URL: A Representation Learning Benchmark for Transferable Uncertainty Estimates",
    "authors": [
      "michael_kirchhof",
      "blint_mucsnyi",
      "seong_joon_oh",
      "enkelejda_kasneci"
    ],
    "venue": "NeurIPS Datasets and Benchmarks",
    "year": "2023",
    "url": "https://arxiv.org/abs/2307.03810",
    "bibtex": "@inproceedings{kirchhof2023neuripsdb,\ntitle = {URL: A Representation Learning Benchmark for Transferable Uncertainty Estimates},\nauthor = {Kirchhof, Michael and Mucsányi, Bálint and Oh, Seong Joon and Kasneci, Enkelejda},\nbooktitle = {Conference on Neural Information Processing Systems: Datasets and Benchmarks Track},\nyear = {2023}\n}",
    "image": "pictures/kirchhof2023neuripsdb.png",
    "links": [],
    "abstract": "An uncertainty estimate is useful only if it stays reliable when a model encounters new kinds of data. URL tests this transfer by comparing pretrained models across unfamiliar datasets. The benchmark shows that strong image representations do not automatically provide trustworthy uncertainty estimates and gives researchers a common way to measure the gap.",
    "rtai_tags": [
      "UQCV"
    ]
  },
  {
    "id": "kirchhof2023uaieai",
    "title": "URL: A Representation Learning Benchmark for Transferable Uncertainty Estimates",
    "authors": [
      "michael_kirchhof",
      "blint_mucsnyi",
      "seong_joon_oh",
      "enkelejda_kasneci"
    ],
    "venue": "UAI Epistemic AI Workshop Best Student Paper",
    "year": "2023",
    "url": "https://arxiv.org/abs/2307.03810",
    "bibtex": "@inproceedings{kirchhof2023uaieai,\ntitle = {URL: A Representation Learning Benchmark for Transferable Uncertainty Estimates},\nauthor = {Kirchhof, Michael and Mucsányi, Bálint and Oh, Seong Joon and Kasneci, Enkelejda},\nbooktitle = {Conference on Uncertainty in Artificial Intelligence Workshop on Epistemic Uncertainty in Artificial Intelligence},\nyear = {2023}\n}",
    "image": "pictures/kirchhof2023uaieai.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/mkirchhof/url"
      }
    ],
    "abstract": "Can a model carry its sense of uncertainty from its training dataset to a new one? URL makes this easy to test with a small amount of code. We compare ten models across eight datasets and find that reliable uncertainty does not transfer automatically. This workshop paper introduces the benchmark.",
    "rtai_tags": [
      "UQCV"
    ]
  },
  {
    "id": "elif2025naturehumanbehaviour",
    "title": "Playing repeated games with Large Language Models",
    "authors": [
      "elif_akata",
      "lion_schulz",
      "julian_coda_forno",
      "seong_joon_oh",
      "matthias_bethge",
      "eric_schulz"
    ],
    "venue": "Nature Human Behaviour",
    "year": "2025",
    "url": "https://arxiv.org/abs/2305.16867",
    "bibtex": "@article{elif2025naturehumanbehaviour,\ntitle = {Playing repeated games with Large Language Models},\nauthor = {Akata, Elif and Schulz, Lion and Coda-Forno, Julian and Oh, Seong Joon and Bethge, Matthias and Schulz, Eric},\njournal={Nature Human Behaviour},\nyear = {2025}\n}",
    "image": "pictures/elif2025naturehumanbehaviour.png",
    "links": [],
    "abstract": "How do language models cooperate or compete when they interact repeatedly? We put them through familiar game-theory tasks and find that they can pursue their own interests yet struggle to coordinate. Extra information or prompts about the opponent can change their behaviour. These experiments offer a way to study social decision-making in AI.",
    "rtai_tags": []
  },
  {
    "id": "han2023iccv",
    "title": "Neglected Free Lunch -- Learning Image Classifiers Using Annotation Byproducts",
    "authors": [
      "dongyoon_han",
      "junsuk_choe",
      "dante_chun",
      "john_joon_young_chung",
      "minsuk_chang",
      "sangdoo_yun",
      "jean_y_song",
      "seong_joon_oh"
    ],
    "co_first_authors": [
      "dongyoon_han",
      "junsuk_choe"
    ],
    "venue": "ICCV",
    "year": "2023",
    "url": "https://arxiv.org/abs/2303.17595",
    "bibtex": "@inproceedings{han2023iccv,\n  title = {Neglected Free Lunch – Learning Image Classifiers Using Annotation Byproducts},\n  author = {Han, Dongyoon and Choe, Junsuk and Chun, Seonghyeok and Chung, John Joon Young and Chang, Minsuk and Yun, Sangdoo and Song, Jean Y. and Oh, Seong Joon},\n  booktitle = {International Conference on Computer Vision (ICCV)},\n  year = {2023}\n}",
    "image": "pictures/han2023iccv.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/NeglectedFreeLunch"
      },
      {
        "text": "Youtube",
        "url": "https://www.youtube.com/watch?v=9HEj3Km2TWo"
      },
      {
        "text": "Poster",
        "url": "data/han2023iccv_poster.pdf"
      },
      {
        "text": "ImageNet-AB (HuggingFace)",
        "url": "https://huggingface.co/datasets/coallaoh/ImageNet-AB"
      },
      {
        "text": "COCO-AB (HuggingFace)",
        "url": "https://huggingface.co/datasets/coallaoh/COCO-AB"
      },
      {
        "text": "ImageNet annotation tool",
        "url": "https://github.com/naver-ai/imagenet-annotation-tool"
      },
      {
        "text": "COCO annotation tool",
        "url": "https://github.com/naver-ai/coco-annotation-tool"
      }
    ],
    "abstract": "People produce more than labels when they annotate images: mouse movements, clicks and corrections also contain information. We collect these traces alongside image labels and use them during training. They help models learn in ways that better match human recognition and improve robustness, without asking annotators to perform a separate task.",
    "rtai_tags": [
      "OOD"
    ]
  },
  {
    "id": "nam2023iccv",
    "title": "Scratching Visual Transformer's Back with Uniform Attention",
    "authors": [
      "hyeon_woo_nam",
      "yu_ji_kim",
      "byeongho_heo",
      "dongyoon_han",
      "seong_joon_oh",
      "tae_hyun_oh"
    ],
    "venue": "ICCV",
    "year": "2023",
    "url": "https://arxiv.org/abs/2210.08457",
    "bibtex": "@inproceedings{nam2023iccv,\ntitle = {Scratching Visual Transformer's Back with Uniform Attention},\nauthor = {Nam, Hyeon-Woo and Kim, Yu-Ji and Heo, Byeongho and Han, Doonyoon and Oh, Seong Joon and Oh, Tae-Hyun},\nbooktitle = {International Conference on Computer Vision (ICCV)},\nyear = {2022}\n}",
    "image": "pictures/nam2023iccv-summary.svg",
    "links": [
      {
        "text": "Code",
        "url": "https://uniform-attention.github.io/"
      }
    ],
    "abstract": "Vision transformers can benefit from more connections between image regions, but their usual attention mechanism may not learn these easily. We add inexpensive layers that spread attention evenly across the image. This simple change improves capacity and generalisation, especially for smaller models.",
    "rtai_tags": [],
    "image_alt": "Uniform attention adds connections between all image regions"
  },
  {
    "id": "kirchhof2023icml",
    "title": "Probabilistic Contrastive Learning Recovers the Correct Aleatoric Uncertainty of Ambiguous Inputs",
    "authors": [
      "michael_kirchhof",
      "enkelejda_kasneci",
      "seong_joon_oh"
    ],
    "venue": "ICML",
    "year": "2023",
    "url": "https://arxiv.org/abs/2302.02865",
    "bibtex": "@inproceedings{kirchhof2023icml,\ntitle = {Probabilistic Contrastive Learning Recovers the Correct Aleatoric Uncertainty of Ambiguous Inputs},\nauthor = {Kirchhof, Michael and Kasneci, Enkelejda and Oh, Seong Joon},\nbooktitle = {International Conference on Machine Learning},\nyear = {2023}\n}",
    "image": "pictures/kirchhof2023icml.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/mkirchhof/Probabilistic_Contrastive_Learning"
      }
    ],
    "abstract": "An ambiguous image should have an uncertain representation, rather than one precise point. We study a training method that learns a distribution for each image. Under stated assumptions, we prove that it can recover the underlying uncertainty. This gives a theoretical basis for representations that express ambiguity as well as content.",
    "rtai_tags": [
      "UQCV"
    ]
  },
  {
    "id": "hwang2022neurips",
    "title": "SelecMix: Debiased Learning by Contradicting-pair Sampling",
    "authors": [
      "inwoo_hwang",
      "sangjun_lee",
      "yunhyeok_kwak",
      "seong_joon_oh",
      "damien_teney",
      "jin_hwa_kim",
      "byoung_tak_zhang"
    ],
    "venue": "NeurIPS",
    "year": "2022",
    "url": "https://arxiv.org/abs/2211.02291",
    "bibtex": "@inproceedings{hwang2022neurips,\n    title={SelecMix: Debiased Learning by Contradicting-pair Sampling},\n    author = {Hwang, Inwoo and Lee, Sangjun and Kwak, Yunhyeok and Oh, Seong Joon and Teney, Damien and Kim, Jin-Hwa and Zhang, Byoung-Tak},\n    year = {2022},\n    booktitle = {Conference on Neural Information Processing Systems},\n}",
    "image": "pictures/hwang2022neurips.png",
    "links": [
      {
        "text": "Workshop paper",
        "url": "data/hwang2022neurips_workshop.pdf"
      }
    ],
    "abstract": "A classifier may rely on a shortcut instead of the feature we want it to learn. SelecMix creates training examples between ordinary cases and cases that contradict the shortcut. This helps the model learn a less biased decision rule, even when some training labels are wrong.",
    "rtai_tags": [
      "OOD"
    ]
  },
  {
    "id": "chun2022eccv",
    "title": "ECCV Caption: Correcting False Negatives by Collecting Machine-and-Human-verified Image-Caption Associations for MS-COCO",
    "authors": [
      "sanghyuk_chun",
      "wonjae_kim",
      "song_park",
      "minsuk_chang",
      "seong_joon_oh"
    ],
    "venue": "ECCV",
    "year": "2022",
    "url": "https://arxiv.org/abs/2204.03359",
    "bibtex": "@inproceedings{chun2022eccv_caption,\n    title={ECCV Caption: Correcting False Negatives by Collecting Machine-and-Human-verified Image-Caption Associations for MS-COCO},\n    author={Chun, Sanghyuk and Kim, Wonjae and Park, Song and Chang, Minsuk Chang and Oh, Seong Joon},\n    year={2022},\n    booktitle={European Conference on Computer Vision (ECCV)},\n}",
    "image": "pictures/chun2022eccv.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/eccv-caption"
      },
      {
        "text": "Slides (long)",
        "url": "https://docs.google.com/presentation/d/1OKaWPlNblepiXF57oWs2miGgYb5kuu1qxNqV_-hDddU/edit?usp=sharing"
      },
      {
        "text": "Slides (short)",
        "url": "https://docs.google.com/presentation/d/1zyLL49_2-F6mQFaMIumPfdE7el_r048XtidLnehepHo/edit?usp=sharing"
      }
    ],
    "abstract": "An image can have many correct descriptions, but a benchmark may recognise only a few of them. A retrieval model can then be penalised for a perfectly good match. ECCV Caption adds image-caption matches checked by both machines and people, which makes evaluation better reflect the quality of the model's results.",
    "rtai_tags": [
      "VLM"
    ]
  },
  {
    "id": "kim2022icml",
    "title": "Dataset Condensation via Efficient Synthetic-Data Parameterization",
    "authors": [
      "jang_hyun_kim",
      "jinuk_kim",
      "seong_joon_oh",
      "sangdoo_yun",
      "hwanjun_song",
      "joonhyun_jeong",
      "jung_woo_ha",
      "hyun_oh_song"
    ],
    "venue": "ICML",
    "year": "2022",
    "url": "https://arxiv.org/abs/2205.14959",
    "bibtex": "@inproceedings{kim2022icml,\ntitle = {Dataset Condensation via Efficient Synthetic-Data Parameterization},\nauthor = {Kim, Jang-Hyun and Kim, Junuk and  Oh, Seong Joon and Yun, Sangdoo and Song, Hwanjun and Ha, Jung-Wooa and Song, Hyun Oh},\nyear = {2022},\nbooktitle = {International Conference on Machine Learning (ICML)},\nnote = {to appear},\ntppubtype = {inproceedings}\n}",
    "image": "pictures/kim2022icml.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/snu-mllab/Efficient-Dataset-Condensation"
      }
    ],
    "abstract": "Can a tiny synthetic dataset teach a model almost as much as the full training set? We develop practical ways to compress training data while preserving useful information. The method makes dataset condensation work with larger images, beyond the small toy images that earlier approaches usually relied on.",
    "rtai_tags": [
      "DD"
    ]
  },
  {
    "id": "lee2022cvpr",
    "title": "Weakly Supervised Semantic Segmentation Using Out-of-Distribution Data",
    "authors": [
      "jungbeom_lee",
      "seong_joon_oh",
      "sangdoo_yun",
      "junsuk_choe",
      "eunji_kim",
      "sungroh_yoon"
    ],
    "venue": "CVPR",
    "year": "2022",
    "url": "https://arxiv.org/abs/2203.03860",
    "bibtex": "@inproceedings{lee2022cvpr,\ntitle = {Weakly Supervised Semantic Segmentation Using Out-of-Distribution Data},\nauthor = {Lee, Jungbeom and Oh, Seong Joon and Yun, Sangdoo and Choe, Junsuk and Kim, Eunji and Yoon, Sungroh},\nyear = {2022},\nbooktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)},\nnote = {to appear},\npubstate = {published},\ntppubtype = {inproceedings}\n}",
    "image": "pictures/lee2022cvpr.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/w-ood"
      }
    ],
    "abstract": "A model trained with image-level labels may mistake railway tracks for the train it is meant to locate. We show that images of the background alone can help it separate the two. These negative examples provide useful guidance for pixel-level segmentation without the cost of manually drawing object boundaries.",
    "rtai_tags": [
      "WSOL"
    ]
  },
  {
    "id": "scimeca2022iclr",
    "title": "Which Shortcut Cues Will DNNs Choose? A Study from the Parameter-Space Perspective",
    "authors": [
      "luca_scimeca",
      "seong_joon_oh",
      "sanghyuk_chun",
      "michael_poli",
      "sangdoo_yun"
    ],
    "co_first_authors": [
      "luca_scimeca",
      "seong_joon_oh"
    ],
    "venue": "ICLR",
    "year": "2022",
    "url": "https://arxiv.org/abs/2110.03095",
    "bibtex": "@inproceedings{scimeca2022iclr,\n    title={Which Shortcut Cues Will DNNs Choose? A Study from the Parameter-Space Perspective},\n    author={Scimeca, Luca and Oh, Seong Joon and Chun, Sanghyuk and Poli, Michael and Yun, Sangdoo},\n    year={2022},\n    booktitle = {International Conference on Learning Representations (ICLR)},\n}",
    "image": "pictures/scimeca2022iclr.png",
    "links": [],
    "abstract": "When colour and shape both predict the right label, why does a model prefer one over the other? We study this choice through the model's possible weight configurations. The results help explain why different neural-network architectures can settle on the same easy shortcut, even when another valid cue is available.",
    "rtai_tags": [
      "OOD"
    ]
  },
  {
    "id": "hazel2022aaai",
    "title": "ALP: Data Augmentation using Lexicalized PCFGs for Few-Shot Text Classification",
    "authors": [
      "hazel_kim",
      "daecheol_woo",
      "seong_joon_oh",
      "jeong_won_cha",
      "yo_sub_han"
    ],
    "venue": "AAAI",
    "year": "2022",
    "url": "https://arxiv.org/abs/2112.11916",
    "bibtex": "@inproceedings{hazel2022aaai,\n  title={ALP: Data Augmentation using Lexicalized PCFGs for Few-Shot Text Classification},\n  author={Kim, Hazel and Woo, Daecheol and Oh, Seong Joon and Cha, Jeong-Won and Han, Yo-Sub},\n  year={2022},\n  booktitle = {Association for the Advancement of Artificial Intelligence Conference (AAAI)},\n  note = {to appear},\n  pubstate = {published},\n  tppubtype = {inproceedings},\n}",
    "image": "pictures/hazel2022aaai.png",
    "links": [],
    "abstract": "Training a text classifier from a few examples is easier if we can generate useful variations. Our method uses grammar rules to produce sentences that preserve meaning while changing structure. We also study how to split the resulting data for training and validation, since that choice strongly affects whether augmentation helps.",
    "rtai_tags": []
  },
  {
    "id": "choe2022tpami",
    "title": "Evaluation for Weakly Supervised Object Localization: Protocol, Metrics, and Datasets",
    "authors": [
      "junsuk_choe",
      "seong_joon_oh",
      "sanghyuk_chun",
      "zeynep_akata",
      "hyunjung_shim"
    ],
    "co_first_authors": [
      "junsuk_choe",
      "seong_joon_oh"
    ],
    "venue": "TPAMI",
    "year": "2022",
    "url": "https://arxiv.org/abs/2007.04178",
    "bibtex": "@article{choe2022tpami,\n    title={Evaluation for Weakly Supervised Object Localization: Protocol, Metrics, and Datasets},\n    author={Choe, Junsuk and Oh, Seong Joon and Chun, Sanghyuk and Akata, Zeynepand Shim, Hyunjung},\n    journal = {IEEE Transactions on Pattern Analysis and Machine Intelligence},\n    year={2022},\n    number  = {},\n    pages   = {},\n    month   = {},\n    volume  = {}\n}",
    "image": "pictures/choe2022tpami-summary.svg",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/clovaai/wsolevaluation"
      },
      {
        "text": "Slides",
        "url": "data/choe2020cvpr_slides.pdf"
      },
      {
        "text": "Tutorial video",
        "url": "https://www.youtube.com/watch?v=D_dEkeb-fto&list=PLcD_yLvcdUll95mAnBDV0rZKhfClJMZMr&index=5"
      }
    ],
    "abstract": "A model can locate an object from an image label, but judging this ability fairly requires careful datasets and evaluation rules. This journal extension expands our study of weakly supervised localisation and examines more explanation methods. It provides protocols and metrics that distinguish real progress from advantages caused by the evaluation setup.",
    "rtai_tags": [
      "WSOL"
    ],
    "image_alt": "Separate image labels used for training from location labels used for evaluation"
  },
  {
    "id": "kim2021iccv",
    "title": "Keep CALM and Improve Visual Feature Attribution",
    "authors": [
      "jae_myung_kim",
      "junsuk_choe",
      "zeynep_akata",
      "seong_joon_oh"
    ],
    "co_first_authors": [
      "jae_myung_kim",
      "junsuk_choe"
    ],
    "venue": "ICCV",
    "year": "2021",
    "url": "https://arxiv.org/abs/2106.07861",
    "bibtex": "@inproceedings{kim2021iccv,\n  title={Keep CALM and Improve Visual Feature Attribution},\n  author={Kim, Jae Myung and Choe, Junsuk and Akata, Zeynep and Oh, Seong Joon},\n  year={2021},\n  booktitle = {International Conference on Computer Vision (ICCV)},\n  note = {to appear},\n  pubstate = {published},\n  tppubtype = {inproceedings},\n}",
    "image": "pictures/kim2021iccv.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/calm"
      }
    ],
    "abstract": "Heatmaps are often used to show which parts of an image support a model's prediction. Common class-activation maps have limitations that can make these explanations misleading. CALM treats the location of useful visual evidence as a hidden variable and learns it explicitly. This produces more precise maps of the model's evidence.",
    "rtai_tags": [
      "FAtt"
    ]
  },
  {
    "id": "heo2021iccv",
    "title": "Rethinking Spatial Dimensions of Vision Transformers",
    "authors": [
      "byeongho_heo",
      "sangdoo_yun",
      "dongyoon_han",
      "sanghyuk_chun",
      "junsuk_choe",
      "seong_joon_oh"
    ],
    "venue": "ICCV",
    "year": "2021",
    "url": "https://arxiv.org/abs/2103.16302",
    "bibtex": "@inproceedings{heo2021iccv,\n  title={Rethinking Spatial Dimensions of Vision Transformers},\n  author={Heo, Byeongho and Yun, Sangdoo and Han, Dongyoon and Chun, Sanghyuk and Choe, Junsuk and Oh, Seong Joon},\n  year={2021},\n  booktitle = {International Conference on Computer Vision (ICCV)},\n  note = {to appear},\n  pubstate = {published},\n  tppubtype = {inproceedings},\n}",
    "image": "pictures/heo2021iccv.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/pit"
      }
    ],
    "abstract": "Vision transformers often spend a similar share of their computation on image positions at every depth. PiT gradually reduces spatial detail and increases feature capacity, as many convolutional networks do. This gives the model a different balance of where and how it processes information, which improves its use of computation.",
    "rtai_tags": []
  },
  {
    "id": "poli2021neurips",
    "title": "Neural Hybrid Automata: Learning Dynamics with Multiple Modes and Stochastic Transitions",
    "authors": [
      "michael_poli",
      "stefano_massaroli",
      "luca_scimeca",
      "seong_joon_oh",
      "sanghyuk_chun",
      "atsushi_yamashita",
      "hajime_asama",
      "jinkyoo_park",
      "animesh_garg"
    ],
    "venue": "NeurIPS",
    "year": "2021",
    "url": "https://arxiv.org/abs/2106.04165",
    "bibtex": "@inproceedings{poli2021neurips,\n    title={Neural Hybrid Automata: Learning Dynamics with Multiple Modes and Stochastic Transitions},\n    author = {Poli, Michael and Massaroli, Stefano and Scimeca, Luca and Oh, Seong Joon and Chun, Sanghyuk and Yamashita, Atsushi and Asama, Hajime and Park, Jinkyoo and Garg, Animesh},\n    year = {2021},\n    booktitle = {Conference on Neural Information Processing Systems},\n}",
    "image": "pictures/poli2021neurips.png",
    "links": [],
    "abstract": "Real systems can move smoothly and then switch behaviour abruptly, such as an aircraft at touchdown. We develop a model that learns both the continuous motion and the switches between modes from time-series data. This helps describe systems whose behaviour cannot be captured by continuous or discrete dynamics alone.",
    "rtai_tags": [
      "AI4TS"
    ]
  },
  {
    "id": "yun2021cvpr",
    "title": "Re-labeling ImageNet: from Single to Multi-Labels, from Global to Localized Labels",
    "authors": [
      "sangdoo_yun",
      "seong_joon_oh",
      "byeongho_heo",
      "dongyoon_han",
      "junsuk_choe",
      "sanghyuk_chun"
    ],
    "venue": "CVPR",
    "year": "2021",
    "url": "https://arxiv.org/abs/2101.05022",
    "bibtex": "@inproceedings{yun2021cvpr,\n  title={Re-labeling ImageNet: from Single to Multi-Labels, from Global to Localized Labels},\n  author={Yun, Sangdoo and Oh, Seong Joon and Heo, Byeongho and Han, Dongyoon and Choe, Junsuk and Chun, Sanghyuk},\n  year={2021},\n  booktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)},\n}",
    "image": "pictures/yun2021cvpr.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/relabel_imagenet"
      }
    ],
    "abstract": "An ImageNet photo may contain several objects even though its training label names only one. We use a stronger classifier to supply richer labels for whole images and individual regions. Training with these improved labels helps models learn from information that the original annotations leave out.",
    "rtai_tags": []
  },
  {
    "id": "chun2021cvpr",
    "title": "Probabilistic Embeddings for Cross-Modal Retrieval",
    "authors": [
      "sanghyuk_chun",
      "seong_joon_oh",
      "rafael_sampaio_de_rezende",
      "yannis_kalantidis",
      "diane_larlus"
    ],
    "venue": "CVPR",
    "year": "2021",
    "url": "https://arxiv.org/abs/2101.05068",
    "bibtex": "@inproceedings{chun2021cvpr,\n  title={Probabilistic Embeddings for Cross-Modal Retrieval},\n  author={Chun, Sanghyuk and Oh, Seong Joon and Rezende, Rafael and Kalantidis, Yannis and Larlus, Diane},\n  year={2021},\n  booktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)},\n}",
    "image": "pictures/chun2021cvpr.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/pcme"
      }
    ],
    "abstract": "One image can match many descriptions, and one description can match many images. We represent this ambiguity with distributions instead of fixed points, which improves image-text retrieval. We also address evaluation errors caused by missing valid matches, so a model is not unfairly penalised for finding a synonymous description.",
    "rtai_tags": [
      "UQCV"
    ]
  },
  {
    "id": "heo2021iclr",
    "title": "AdamP: Slowing Down the Slowdown for Momentum Optimizers on Scale-invariant Weights",
    "authors": [
      "byeongho_heo",
      "sanghyuk_chun",
      "seong_joon_oh",
      "dongyoon_han",
      "youngjung_uh",
      "sangdoo_yun",
      "jung_woo_ha"
    ],
    "venue": "ICLR",
    "year": "2021",
    "url": "https://arxiv.org/abs/2006.08217",
    "bibtex": "@inproceedings{heo2021iclr,\n    title={AdamP: Slowing Down the Slowdown for Momentum Optimizers on Scale-invariant Weights},\n    author={Heo, Byeongho and Chun, Sanghyuk and Oh, Seong Joon and Han, Dongyoon and Yun, Sangdoo and Uh, Youngjung and Ha, Jung-Woo},\n    year={2021},\n    booktitle = {International Conference on Learning Representations},\n}",
    "image": "pictures/heo2021iclr.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/clovaai/AdamP"
      },
      {
        "text": "Project",
        "url": "https://clovaai.github.io/AdamP/"
      }
    ],
    "abstract": "Some neural-network weights can grow without changing the model's predictions. Momentum-based optimisers can push this growth and slow down useful learning. AdamP removes the part of an update that causes unnecessary growth. This simple change improves optimisation across a range of tasks.",
    "rtai_tags": [
      "ODL"
    ]
  },
  {
    "id": "yun2020videomix",
    "title": "VideoMix: Rethinking Data Augmentation for Video Classification",
    "authors": [
      "sangdoo_yun",
      "seong_joon_oh",
      "byeongho_heo",
      "dongyoon_han",
      "jinhyung_kim"
    ],
    "venue": "arXiv",
    "year": "2020",
    "url": "https://arxiv.org/abs/2012.03457",
    "bibtex": "@article{yun2020videomix,\n  title={VideoMix: Rethinking Data Augmentation for Video Classification},\n  author={Yun, Sangdoo and Oh, Seong Joon and Heo, Byeongho and Han, Dongyoon and Kim, Jinhyung},\n  year={2020},\n  journal={arXiv preprint arXiv:2012.03457},\n}",
    "image": "pictures/yun2020videomix.png",
    "links": [],
    "abstract": "Mixing parts of training images is a useful way to improve image classifiers. VideoMix asks how the same idea should work for video, where both space and time matter. We study ways to combine parts of video clips as training examples for action recognition.",
    "rtai_tags": []
  },
  {
    "id": "ferjad2020icml",
    "title": "Reliable Fidelity and Diversity Metrics for Generative Models",
    "authors": [
      "muhammad_ferjad_naeem",
      "seong_joon_oh",
      "youngjung_uh",
      "yunjey_choi",
      "jaejun_yoo"
    ],
    "co_first_authors": [
      "muhammad_ferjad_naeem",
      "seong_joon_oh"
    ],
    "venue": "ICML",
    "year": "2020",
    "url": "https://arxiv.org/abs/2002.09797",
    "bibtex": "@inproceedings{ferjad2020icml,\ntitle = {Reliable Fidelity and Diversity Metrics for Generative Models},\nauthor = {Naeem, Muhammad Ferjad and Oh, Seong Joon and Uh, Youngjung and Choi, Yunjey and Yoo, Jaejun},\nyear = {2020},\nbooktitle = {International Conference on Machine Learning},\n}",
    "image": "pictures/ferjad2020icml.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/clovaai/generative-evaluation-prdc"
      },
      {
        "text": "ICML Virtual",
        "url": "https://icml.cc/virtual/2020/poster/5832"
      },
      {
        "text": "Youtube",
        "url": "https://www.youtube.com/watch?v=_XwsGkryVpk&feature=youtu.be&ab_channel=FerjadNaeem"
      }
    ],
    "abstract": "A good image generator should produce both realistic and varied images. Existing scores can confuse these goals or miss important failures. We introduce density and coverage, two measures designed to assess sample quality and diversity more reliably. They provide a clearer view of what a generative model does well.",
    "rtai_tags": [
      "EGVM"
    ]
  },
  {
    "id": "hyojin2020icml",
    "title": "Learning De-biased Representations with Biased Representations",
    "authors": [
      "hyojin_bahng",
      "sanghyuk_chun",
      "sangdoo_yun",
      "jaegul_choo",
      "seong_joon_oh"
    ],
    "venue": "ICML",
    "year": "2020",
    "url": "https://arxiv.org/abs/1910.02806",
    "bibtex": "@inproceedings{hyojin2020icml,\ntitle = {Learning De-biased Representations with Biased Representations},\nauthor = {Bahng, Hyojin and Chun, Sanghyuk and Yun, Sangdoo and Choo, Jaegul and Oh, Seong Joon},\nyear = {2020},\nbooktitle = {International Conference on Machine Learning},\n}",
    "image": "pictures/bahng2020icml.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/clovaai/rebias"
      },
      {
        "text": "ICML Virtual",
        "url": "https://icml.cc/virtual/2020/poster/5783"
      },
      {
        "text": "Youtube",
        "url": "https://www.youtube.com/watch?v=lkjMxZDGubA"
      }
    ],
    "abstract": "A model can achieve high training accuracy by relying on the wrong visual cues. Many fixes require extra labels that identify the bias. We instead use an architecture that deliberately captures easy shortcuts, then train another model to look beyond them. This reduces reliance on unwanted correlations without costly bias annotations.",
    "rtai_tags": [
      "OOD"
    ]
  },
  {
    "id": "choe2020cvpr",
    "title": "Evaluating Weakly-Supervised Object Localization Methods Right",
    "authors": [
      "junsuk_choe",
      "seong_joon_oh",
      "sanghyuk_chun",
      "zeynep_akata",
      "hyunjung_shim"
    ],
    "co_first_authors": [
      "junsuk_choe",
      "seong_joon_oh"
    ],
    "venue": "CVPR",
    "year": "2020",
    "url": "https://arxiv.org/abs/2001.07437",
    "bibtex": "@inproceedings{choe2020cvpr,\n  title={Evaluating Weakly Supervised Object Localization Methods Right},\n  author={Choe, Junsuk and Oh, Seong Joon and Lee, Seungho and Chun, Sanghyuk and Akata, Zeynep and Shim, Hyunjung},\n  year = {2020},\n  booktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)},\n  note = {to appear},\n  pubstate = {published},\n  tppubtype = {inproceedings}\n}",
    "image": "pictures/choe2020cvpr-summary.svg",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/clovaai/wsolevaluation"
      },
      {
        "text": "Slides",
        "url": "data/choe2020cvpr_slides.pdf"
      },
      {
        "text": "Tutorial video",
        "url": "https://www.youtube.com/watch?v=D_dEkeb-fto&list=PLcD_yLvcdUll95mAnBDV0rZKhfClJMZMr&index=5"
      }
    ],
    "abstract": "Methods that claim to locate objects using only image labels often rely on detailed location labels during development. We show why this hidden supervision matters and propose a fairer evaluation protocol. Under the revised comparison, much of the apparent progress since early class-activation maps disappears.",
    "rtai_tags": [
      "WSOL"
    ],
    "image_alt": "Separate image labels used for training from location labels used for evaluation"
  },
  {
    "id": "lee2019cvprw",
    "title": "On Recognizing Texts of Arbitrary Shapes with 2D Self-Attention",
    "authors": [
      "junyeop_lee",
      "sungrae_park",
      "jeonghun_baek",
      "seong_joon_oh",
      "seonghyeon_kim",
      "hwalsuk_lee"
    ],
    "venue": "CVPR Workshop",
    "year": "2020",
    "url": "https://arxiv.org/abs/1910.04396",
    "bibtex": "@inproceedings{lee2020selfattention,\n  title={On Recognizing Texts of Arbitrary Shapes with 2D Self-Attention},\n  author={Lee, Junyeop and Park, Sungrae and Baek, Jeonghun and Oh, Seong Joon and Kim, Seonghyeon and Lee, Hwalsuk},\n  year={2020},\n  booktitle = {Workshop on Text and Documents in the Deep Learning Era},\n}",
    "image": "pictures/lee2020cvprw.png",
    "links": [],
    "abstract": "Text in photographs is not always arranged in a straight line. Curved logos and unusual layouts can confuse standard text recognisers. We use two-dimensional self-attention to help a model follow characters across these arrangements instead of assuming that every word has a simple horizontal structure.",
    "rtai_tags": []
  },
  {
    "id": "oh2018tpami",
    "title": "Person Recognition in Personal Photo Collections",
    "authors": [
      "seong_joon_oh",
      "rodrigo_benenson",
      "mario_fritz",
      "bernt_schiele"
    ],
    "venue": "TPAMI",
    "year": "2020",
    "url": "https://arxiv.org/abs/1710.03224",
    "bibtex": "@article{joon2020tpami,\n  author  = {Oh, Seong Joon and Benenson, Rodrigo and Fritz, Mario and Schiele, Bernt}, \n  title   = {Person Recognition in Personal Photo Collections},\n  journal = {IEEE Transactions on Pattern Analysis and Machine Intelligence},\n  year    = 2020,\n  number  = 1,\n  pages   = {203-220},\n  month   = 1,\n  volume  = 42\n}",
    "image": "pictures/joon2015iccv.png",
    "links": [
      {
        "text": "Journal",
        "url": "https://ieeexplore.ieee.org/document/8519337"
      }
    ],
    "abstract": "Recognising someone in a personal photo is easier when a model considers more than the face. This journal extension combines evidence from the head, body and surrounding context. It improves our earlier person-recognition system and examines how these cues work together when faces are small, hidden or turned away.",
    "rtai_tags": [
      "CVBM"
    ]
  },
  {
    "id": "oh2018iclr",
    "title": "Towards Reverse-Engineering Black-Box Neural Networks",
    "authors": [
      "seong_joon_oh",
      "mario_fritz",
      "bernt_schiele"
    ],
    "venue": "Explainable AI: Interpreting, Explaining and Visualizing Deep Learning (book chapter)",
    "year": "2019",
    "url": "https://arxiv.org/abs/1711.01768",
    "bibtex": "@Inbook{joon2019blackboxchapter,\nauthor=\"Oh, Seong Joon\nand Schiele, Bernt\nand Fritz, Mario\",\neditor=\"Samek, Wojciech\nand Montavon, Gr{'e}goire\nand Vedaldi, Andrea\nand Hansen, Lars Kai\nand Muller, Klaus-Robert\",\ntitle=\"Towards Reverse-Engineering Black-Box Neural Networks\",\nbookTitle=\"Explainable AI: Interpreting, Explaining and Visualizing Deep Learning\",\nyear=\"2019\",\npublisher=\"Springer International Publishing\",\naddress=\"Cham\",\npages=\"121--144\",\nabstract=\"Much progress in interpretable AI is built around scenarios where the user, one who interprets the model, has a full ownership of the model to be diagnosed. The user either owns the training data and computing resources to train an interpretable model herself or owns a full access to an already trained model to be interpreted post-hoc. In this chapter, we consider a less investigated scenario of diagnosing black-box neural networks, where the user can only send queries and read off outputs. Black-box access is a common deployment mode for many public and commercial models, since internal details, such as architecture, optimisation procedure, and training data, can be proprietary and aggravate their vulnerability to attacks like adversarial examples. We propose a method for exposing internals of black-box models and show that the method is surprisingly effective at inferring a diverse set of internal information. We further show how the exposed internals can be exploited to strengthen adversarial examples against the model. Our work starts an important discussion on the security implications of diagnosing deployed models with limited accessibility. The code is available at goo.gl/MbYfsv.\",\nisbn=\"978-3-030-28954-6\",\ndoi=\"10.1007/978-3-030-28954-6_7\",\nurl=\"https://doi.org/10.1007/978-3-030-28954-6_7\"\n}",
    "image": "pictures/joon2018iclr.png",
    "links": [
      {
        "text": "Book chapter",
        "url": "https://link.springer.com/chapter/10.1007/978-3-030-28954-6_7"
      }
    ],
    "abstract": "A neural network's design may be hidden, but its answers can still reveal clues about how it was built. This book chapter explains methods for inferring properties of a model through its input-output behaviour. It connects this kind of inspection with broader questions about how to understand machine-learning systems.",
    "rtai_tags": [
      "MLAU",
      "AAML"
    ]
  },
  {
    "id": "orekondy2019neuripsfl",
    "title": "Gradient-Leaks: Understanding and Controlling Deanonymization in Federated Learning",
    "authors": [
      "tribhuvanesh_orekondy",
      "seong_joon_oh",
      "yang_zhang",
      "bernt_schiele",
      "mario_fritz"
    ],
    "venue": "NeurIPS Workshop",
    "year": "2019",
    "url": "https://arxiv.org/abs/1805.05838",
    "bibtex": "@inproceedings{orekondy19neuripsfl,\n    TITLE = {Gradient-Leaks: Understanding and Controlling Deanonymization in Federated Learning},\n    AUTHOR = {Orekondy, Tribhuvanesh and Oh, Seong Joon and Zhang, Yang and Schiele, Bernt and Fritz, Mario},\n    YEAR = {2019},\n    BOOKTITLE = {NeurIPS Workshop on Federated Learning for Data Privacy and Confidentiality},\n}",
    "image": "pictures/orekondy2019neuripsfl.png",
    "links": [
      {
        "text": "Poster",
        "url": "data/orekondy2019neuripsfl_poster.pdf"
      }
    ],
    "abstract": "Federated learning keeps training data on users' devices, but the updates sent to a server can still reveal who contributed them. We study how these updates can identify and link users. The work shows why keeping raw data local does not, by itself, guarantee anonymity.",
    "rtai_tags": [
      "PICV",
      "FedML"
    ]
  },
  {
    "id": "chun2019icmlw",
    "title": "An Empirical Evaluation on Robustness and Uncertainty of Regularization Methods",
    "authors": [
      "sanghyuk_chun",
      "seong_joon_oh",
      "sangdoo_yun",
      "dongyoon_han",
      "junsuk_choe",
      "youngjoon_yoo"
    ],
    "venue": "ICML Workshop",
    "year": "2019",
    "url": "https://arxiv.org/abs/2003.03879",
    "bibtex": "@article{chun2019icmlw,\ntitle = {An Empirical Evaluation on Robustness and Uncertainty of Regularization Methods},\nauthor = {Chun, Sanghyuk and Oh, Seong Joon and Yun, Sangdoo and Han, Dongyoon and Choe, Junsuk and Yoo, Youngjoon},\njournal = {Uncertainty and Robustness in Deep Learning. ICML Workshop},\nyear = {2019},\n}",
    "image": "pictures/chun2019icmlw-summary.svg",
    "links": [],
    "abstract": "Training tricks that improve accuracy may also affect how a model handles unfamiliar inputs and expresses uncertainty. We compare common regularisation methods, including CutMix, on these questions. The study tests whether gains in ordinary classification carry over to robustness and confidence quality.",
    "rtai_tags": [
      "OOD",
      "UQCV"
    ],
    "image_alt": "Evaluate training methods on accuracy, robustness and uncertainty"
  },
  {
    "id": "yun2019iccv",
    "title": "CutMix: Regularization Strategy to Train Strong Classifiers with Localizable Features",
    "authors": [
      "sangdoo_yun",
      "dongyoon_han",
      "seong_joon_oh",
      "sanghyuk_chun",
      "junsuk_choe",
      "youngjoon_yoo"
    ],
    "venue": "ICCV Oral Talk",
    "year": "2019",
    "url": "https://arxiv.org/abs/1905.04899",
    "bibtex": "@inproceedings{yun2019cutmix,\n  title={CutMix: Regularization Strategy to Train Strong Classifiers with Localizable Features},\n  author={Yun, Sangdoo and Han, Dongyoon and Oh, Seong Joon and Chun, Sanghyuk and Choe, Junsuk and Yoo, Youngjoon},\n  booktitle = {International Conference on Computer Vision (ICCV)},\n  year={2019},\n  note={to appear},\n  pubstate={published},\n  tppubtype={inproceedings}\n}",
    "image": "pictures/yun2019iccv.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/clovaai/CutMix-PyTorch"
      },
      {
        "text": "Talk",
        "url": "data/yun2019iccv_talk.pdf"
      },
      {
        "text": "Poster",
        "url": "data/yun2019iccv_poster.pdf"
      },
      {
        "text": "Blog",
        "url": "https://clova-ai.blog/2019/07/15/cutmix-regularization-strategy-to-train-strong-classifiers-with-localizable-features/"
      },
      {
        "text": "Project",
        "url": "https://clovaai.github.io/AdamP/"
      }
    ],
    "abstract": "CutMix creates a training image by pasting a patch from one image into another and mixing their labels. The model must learn from several parts of an image instead of relying on one easy clue. This simple augmentation improves classification and helps models locate the features behind their predictions.",
    "rtai_tags": []
  },
  {
    "id": "baek2019iccv",
    "title": "What Is Wrong with Scene Text Recognition Model Comparisons? Dataset and Model Analysis",
    "authors": [
      "jeonghun_baek",
      "geewook_kim",
      "junyeop_lee",
      "sungrae_park",
      "dongyoon_han",
      "sangdoo_yun",
      "seong_joon_oh",
      "hwalsuk_lee"
    ],
    "venue": "ICCV Oral Talk",
    "year": "2019",
    "url": "https://arxiv.org/abs/1904.01906",
    "bibtex": "@inproceedings{baek2019STRcomparisons,\n  title={What is wrong with scene text recognition model comparisons? dataset and model analysis},\n  author={Baek, Jeonghun and Kim, Geewook and Lee, Junyeop and Park, Sungrae and Han, Dongyoon and Yun, Sangdoo and Oh, Seong Joon and Lee, Hwalsuk},\n  booktitle = {International Conference on Computer Vision (ICCV)},\n  year={2019},\n  note={to appear},\n  pubstate={published},\n  tppubtype={inproceedings}\n}",
    "image": "pictures/baek2019iccv.png",
    "links": [
      {
        "text": "Code",
        "url": "https://github.com/clovaai/deep-text-recognition-benchmark"
      }
    ],
    "abstract": "Comparisons between text-recognition models can be distorted by different datasets and training choices. We put common methods into one evaluation framework so those differences can be controlled. This makes comparisons fairer and reveals a strong combination of existing components.",
    "rtai_tags": []
  },
  {
    "id": "joon2019iclr",
    "title": "Modeling Uncertainty with Hedged Instance Embedding",
    "authors": [
      "seong_joon_oh",
      "kevin_murphy",
      "jiyan_pan",
      "joseph_roth",
      "florian_schroff",
      "andrew_gallagher"
    ],
    "venue": "ICLR",
    "year": "2019",
    "url": "https://arxiv.org/abs/1810.00319",
    "bibtex": "@inproceedings{joon2019iclr,\ntitle = {Modeling Uncertainty with Hedged Instance Embedding},\nauthor = {Oh, Seong Joon and Murphy, Kevin and Pan, Jiyan and Roth, Joseph and Schroff, Florian and Gallagher, Andrew},\nyear = {2019},\nbooktitle = {International Conference on Learning Representations (ICLR)},\n}",
    "image": "pictures/joon2019iclr.png",
    "links": [
      {
        "text": "Poster",
        "url": "data/oh2019iclr_poster.pdf"
      }
    ],
    "abstract": "A blurry or partly hidden object may have several plausible identities. We represent each example with a probability distribution instead of a single fixed vector. The model can then express uncertainty about which examples match, rather than force an ambiguous input into one precise location.",
    "rtai_tags": [
      "UQCV"
    ]
  },
  {
    "id": "tretschk2018cscs",
    "title": "Sequential Attacks on Agents for Long-Term Adversarial Goals",
    "authors": [
      "edgar_tretschk",
      "seong_joon_oh",
      "mario_fritz"
    ],
    "venue": "ACM CSCS",
    "year": "2018",
    "url": "https://arxiv.org/abs/1805.12487",
    "bibtex": "@inproceedings{edgar2018cscs,\ntitle = {Sequential Attacks on Agents for Long-Term Adversarial Goals},\nauthor = {Tretschk, Edgar and Oh, Seong Joon and Fritz, Mario},\nyear = {2018},\nbooktitle = {ACM Computer Science in Cars Symposium -- Future Challenges in Artificial Intelligence & Security for Autonomous Vehicles (CSCS)},\n}",
    "image": "pictures/tretschk2018cscs.png",
    "links": [],
    "abstract": "Can small changes to what a reinforcement-learning agent sees make it pursue a different goal? We construct sequences of subtle input perturbations that steer the agent over time. This studies attacks on its long-term behaviour, beyond causing a single wrong action.",
    "rtai_tags": [
      "AAML",
      "OnRL"
    ]
  },
  {
    "id": "joon2018iclr",
    "title": "Towards Reverse-Engineering Black-Box Neural Networks",
    "authors": [
      "seong_joon_oh",
      "max_augustin",
      "mario_fritz",
      "bernt_schiele"
    ],
    "venue": "ICLR",
    "year": "2018",
    "url": "https://arxiv.org/abs/1711.01768",
    "bibtex": "@inproceedings{joon2018iclr,\ntitle = {Towards Reverse-Engineering Black-Box Neural Networks},\nauthor = {Oh, Seong Joon and Augustin, Max and Schiele, Bernt and Fritz, Mario},\nyear = {2018},\nbooktitle = {International Conference on Learning Representations (ICLR)},\n}",
    "image": "pictures/joon2018iclr.png",
    "links": [
      {
        "text": "Extended abstract",
        "url": "data/oh2018iclr_abstract.pdf"
      },
      {
        "text": "Poster",
        "url": "data/oh2018iclr_poster.pdf"
      },
      {
        "text": "Code",
        "url": "https://github.com/coallaoh/WhitenBlackBox"
      }
    ],
    "abstract": "A model's architecture and training choices can be valuable secrets. We investigate how much of this information can be inferred just by sending inputs and observing outputs. The results show that a black-box interface can reveal more about a neural network's design than its owner might expect.",
    "rtai_tags": [
      "MLAU",
      "AAML"
    ]
  },
  {
    "id": "sun2018cvpr",
    "title": "Natural and Effective Obfuscation by Head Inpainting",
    "authors": [
      "qianru_sun",
      "liqian_ma",
      "seong_joon_oh",
      "luc_van_gool",
      "bernt_schiele",
      "mario_fritz"
    ],
    "venue": "CVPR",
    "year": "2018",
    "url": "https://arxiv.org/abs/1711.09001",
    "bibtex": "@inproceedings{qianru2018cvpr,\ntitle = {Natural and Effective Obfuscation by Head Inpainting},\nauthor = {Sun, Qianru and Ma, Liqian and Oh, Seong Joon and van Gool, Luc and Schiele, Bernt and Fritz, Mario},\nyear = {2018},\nbooktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)}\n}",
    "image": "pictures/sun2017cvpr.png",
    "links": [],
    "abstract": "Blurring a face can leave enough clues for a person-recognition model to identify someone. We replace the head with a plausible but different identity instead. The resulting image looks natural while protecting against a broader range of recognition systems than some methods based on tiny pixel changes.",
    "rtai_tags": [
      "PICV"
    ]
  },
  {
    "id": "joon2017cvprw",
    "title": "From Understanding to Controlling Privacy against Automatic Person Recognition in Social Media",
    "authors": [
      "seong_joon_oh",
      "mario_fritz",
      "bernt_schiele"
    ],
    "venue": "CVPR Workshop",
    "year": "2017",
    "url": "data/oh2017cvprw.pdf",
    "bibtex": "@article{joon2017cvprw,\ntitle = {From Understanding to Controlling Privacy against Automatic Person Recognition in Social Media},\nauthor = {Oh, Seong Joon and Fritz, Mario and Schiele, Bernt},\njournal = {The Bright and Dark Sides of Computer Vision: Challenges and Opportunities for Privacy and Security. CVPR Workshop},\nyear = {2017},\n}",
    "image": "pictures/joon2017cvprw.png",
    "links": [
      {
        "text": "Poster",
        "url": "data/oh2017cvprw_poster.pdf"
      }
    ],
    "abstract": "Hiding a face does not necessarily hide a person's identity in a photo. This paper reviews our work on recognition from faces, bodies and context, then considers ways to protect against it. It connects what recognition systems can infer with the control people have over their visual privacy.",
    "rtai_tags": [
      "PICV",
      "CVBM"
    ]
  },
  {
    "id": "joon2017iccv",
    "title": "Adversarial Image Perturbation for Privacy Protection -- A Game Theory Perspective",
    "authors": [
      "seong_joon_oh",
      "mario_fritz",
      "bernt_schiele"
    ],
    "venue": "ICCV",
    "year": "2017",
    "url": "https://arxiv.org/abs/1703.09471",
    "bibtex": "@inproceedings{joon2017iccv,\ntitle = {Adversarial Image Perturbation for Privacy Protection -- A Game Theory Perspective},\nauthor = {Oh, Seong Joon and Fritz, Mario and Schiele, Bernt},\nyear = {2017},\nbooktitle = {International Conference on Computer Vision (ICCV)},\nnote = {to appear},\npubstate = {published},\ntppubtype = {inproceedings},\n}",
    "image": "pictures/joon2017iccv.png",
    "links": [
      {
        "text": "Poster",
        "url": "data/oh2017iccv_poster.pdf"
      },
      {
        "text": "Code",
        "url": "https://github.com/coallaoh/AIP"
      }
    ],
    "abstract": "If blurring a face is not enough, can small changes to an image protect someone's identity? We study adversarial perturbations designed to confuse person-recognition systems. A game-theoretic evaluation considers how a recogniser might respond, rather than assume that the system stays fixed after the protection is applied.",
    "rtai_tags": [
      "PICV",
      "AAML",
      "CVBM"
    ]
  },
  {
    "id": "joon2017cvpr",
    "title": "Exploiting Saliency for Object Segmentation from Image Level Labels",
    "authors": [
      "seong_joon_oh",
      "rodrigo_benenson",
      "anna_khoreva",
      "zeynep_akata",
      "mario_fritz",
      "bernt_schiele"
    ],
    "venue": "CVPR",
    "year": "2017",
    "url": "https://arxiv.org/abs/1701.08261",
    "bibtex": "@inproceedings{joon2017cvpr,\ntitle = {Exploiting Saliency for Object Segmentation from Image Level Labels},\nauthor = {Oh, Seong Joon and Benenson, Rodrigo and Khoreva, Anna and Akata, Zeynep and Fritz, Mario and Schiele, Bernt},\nyear = {2017},\nbooktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)},\nnote = {to appear},\npubstate = {published},\ntppubtype = {inproceedings}\n}",
    "image": "pictures/joon2017cvpr.png",
    "links": [
      {
        "text": "Poster",
        "url": "data/oh2017cvpr_poster.pdf"
      },
      {
        "text": "Code",
        "url": "https://github.com/coallaoh/GuidedLabelling"
      }
    ],
    "abstract": "An image label tells a model that an object is present, but not which pixels belong to it. We study what extra guidance is needed to learn segmentation from these labels. Visual saliency provides a useful prior about object extent and helps the model go beyond the most recognisable part.",
    "rtai_tags": [
      "SSeg"
    ]
  },
  {
    "id": "rohrbach2017cvpr",
    "title": "Generating Descriptions with Grounded and Co-Referenced People",
    "authors": [
      "anna_rohrbach",
      "marcus_rohrbach",
      "siyu_tang",
      "seong_joon_oh",
      "bernt_schiele"
    ],
    "venue": "CVPR",
    "year": "2017",
    "url": "https://arxiv.org/abs/1704.01518",
    "bibtex": "@inproceedings{anja2017cvpr,\ntitle = {Generating Descriptions with Grounded and Co-Referenced People},\nauthor = {Rohrbach, Anna and Rohrbach, Marcus and Tang, Siyu and Oh, Seong Joon and Schiele, Bernt},\nyear = {2017},\nbooktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)},\nnote = {to appear},\npubstate = {published},\ntppubtype = {inproceedings}\n}",
    "image": "pictures/anja2017cvpr.png",
    "links": [],
    "abstract": "A video description should keep track of who is who across frames and use names or pronouns appropriately. We introduce data and training methods that link people to the phrases that describe them. This helps a model generate descriptions with consistent references to the same person.",
    "rtai_tags": []
  },
  {
    "id": "joon2016eccv",
    "title": "Faceless Person Recognition; Privacy Implications in Social Media",
    "authors": [
      "seong_joon_oh",
      "rodrigo_benenson",
      "mario_fritz",
      "bernt_schiele"
    ],
    "venue": "ECCV",
    "year": "2016",
    "url": "https://arxiv.org/abs/1607.08438",
    "bibtex": "@inproceedings{joon2016eccv,\ntitle = {Faceless Person Recognition; Privacy Implications in Social Media},\nauthor = {Seong Joon Oh and Rodrigo Benenson and Mario Fritz and Bernt Schiele},\nyear = {2016},\ndate = {2016-10-11},\nbooktitle = {European Conference on Computer Vision (ECCV)},\nnote = {to appear},\nkeywords = {},\npubstate = {published},\ntppubtype = {inproceedings}\n}",
    "image": "pictures/joon2016eccv.png",
    "links": [
      {
        "text": "Poster",
        "url": "data/oh2016eccv_poster.pdf"
      },
      {
        "text": "Extended abstract",
        "url": "data/oh2016eccvw.pdf"
      }
    ],
    "abstract": "Can someone still be recognised after their face is blurred? We show that clothing, body appearance and the context of other photos can provide enough clues. The work measures how person-recognition systems use these signals and why face hiding alone can give a false sense of privacy.",
    "rtai_tags": [
      "PICV",
      "CVBM"
    ]
  },
  {
    "id": "aditya2016mobisys",
    "title": "I-pic: A Platform for Privacy-Compliant Image Capture",
    "authors": [
      "paarijaat_aditya",
      "rijurekha_sen",
      "peter_druschel",
      "seong_joon_oh",
      "rodrigo_benenson",
      "mario_fritz",
      "bernt_schiele",
      "bobby_bhattacharjee",
      "tong_tong_wu"
    ],
    "venue": "MobiSys",
    "year": "2016",
    "url": "data/aditya2016mobisys.pdf",
    "bibtex": "@inproceedings{aditya2016mobisys,\n  author = {Paarijaat Aditya and Rijurekha Sen and Seong Joon Oh and Rodrigo Benenson and Bobby Bhattacharjee and Peter Druschel and Tongtong Wu and Mario Fritz and Bernt Schiele},\n  title = {I-Pic: A Platform for Privacy-Compliant Image Capture},\n  booktitle = {The 14th International Conference on Mobile Systems, Applications, and Services (MobiSys'16)},\n  location = {Singapore},\n  month = june,\n  year = 2016\n}",
    "image": "pictures/aditya2016mobisys.png",
    "links": [
      {
        "text": "Project",
        "url": "http://ipic.mpi-sws.org/"
      }
    ],
    "abstract": "People can appear in someone else's photo without choosing to be photographed. I-pic explores how a mobile image-capture system can respect their privacy preferences. It offers a way to handle consent around the moment a photo is taken, rather than leave the person to deal with it after sharing.",
    "rtai_tags": [
      "PICV"
    ]
  },
  {
    "id": "joon2015iccv",
    "title": "Person Recognition in Personal Photo Collections",
    "authors": [
      "seong_joon_oh",
      "rodrigo_benenson",
      "mario_fritz",
      "bernt_schiele"
    ],
    "venue": "ICCV",
    "year": "2015",
    "url": "https://arxiv.org/abs/1509.03502",
    "bibtex": "@INPROCEEDINGS{joon2015iccv,\n  title={Person Recognition in Personal Photo Collections},\n  author={Oh, Seong Joon and Benenson, Rodrigo and Fritz, Mario and Schiele, Bernt},\n  booktitle = {ICCV},\n  year={2015} }",
    "image": "pictures/joon2015iccv.png",
    "links": [
      {
        "text": "Poster",
        "url": "data/oh2015iccv_poster.pdf"
      },
      {
        "text": "Video",
        "url": "https://www.youtube.com/watch?v=F4Jh0f3xD0g"
      },
      {
        "text": "Project",
        "url": "https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/research/people-detection-pose-estimation-and-tracking/person-recognition-in-personal-photo-collections/"
      }
    ],
    "abstract": "People in personal photos do not always face the camera. We combine visual cues from different body regions with contextual information to recognise them anyway. The study shows how clothing, location and social context can help a model identify someone when the face alone is not enough.",
    "rtai_tags": [
      "CVBM"
    ]
  }
];

// Support both Node/CommonJS and browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = publicationsData;
} else {
  window.publicationsData = publicationsData;
}
