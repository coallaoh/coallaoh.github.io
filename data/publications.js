// Publications data in JSON format
const publicationsData = [
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2506.11097"
      },
      {
        "text": "Code",
        "url": "https://github.com/parameterlab/c-seo-bench"
      },
      {
        "text": "Data",
        "url": "https://huggingface.co/datasets/parameterlab/c-seo-bench"
      }
    ],
    "abstract": "With the rise of conversational search engines like <a href=\"https://www.perplexity.ai/\">Perplexity</a>, a new discipline of \"Conversational Search Engine Optimization\" (C-SEO) emerged in 2024-2025. These new strategies claim that writing articles in a certain way can boost their inclusion in AI-generated answers. We built C-SEO Bench, the first comprehensive benchmark covering 6 domains and multi-actor scenarios, to test these claims. The results are definitive and disappointing: none of the new C-SEO strategies are effective. We expect that traditional SEO approaches will continue to provide much more significant results, indicating that the development of effective C-SEO methods requires more work.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2507.03683"
      },
      {
        "text": "Code",
        "url": "https://github.com/aktsonthalia/rankable-vision-embeddings"
      }
    ],
    "abstract": "We use vector databases to store and retrieve visual data via embeddings. Unlike traditional databases, they typically support only similarity search, not sorting by specific attributes. We test whether modern visual embeddings can support sorting along continuous \"rank axes\" such as age, crowd count, head pose, aesthetics, and recency. Across 7 encoders and 9 datasets, we find that many embeddings are inherently rankable.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2505.17955"
      },
      {
        "text": "Code",
        "url": "https://github.com/eugene6923/Diffusion-Classifiers-Compositionality"
      }
    ],
    "abstract": "Diffusion models can generate novel compositions. But can they also understand them? Some recent methods convert diffusion models into discriminative ones (\"Diffusion Classifiers\", ICCV 2023). Yet, we lack a clear understanding of when and how their generative compositionality transfers to discriminative tasks. We also do not know which factors control this transfer or how to tune them. In this work, we study this question and offer practical insights for improving compositional transfer from generative to discriminative models.",
    "rtai_tags": [
      "CoGe",
      "DiffM"
    ]
  },
  {
    "id": "dongjun2025ovs",
    "title": "Overcoming Domain Limitations in Open-vocabulary Segmentation",
    "authors": [
      "dongjun_hwang",
      "seong_joon_oh",
      "junsuk_choe"
    ],
    "venue": "NeurIPS",
    "year": "2025",
    "url": "https://arxiv.org/abs/2410.11536",
    "bibtex": "@inproceedings{dongjun2025ovs,\n  title={Overcoming Domain Limitations in Open-vocabulary Segmentation},\n  author={Hwang, Dongjun and Oh, Seong Joon and Choe, Junsuk},\n  booktitle={Advances in Neural Information Processing Systems 38 (NeurIPS 2025)},\n  year={2025}\n}",
    "image": "pictures/dongjun2025ovs.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2410.11536"
      },
      {
        "text": "Code",
        "url": "https://github.com/dongjunhwang/dwi"
      }
    ],
    "abstract": "Open-vocabulary segmentation (OVS) models often underperform when applied to unseen domains. Fine-tuning on new datasets can improve performance but risks catastrophic forgetting. This paper introduces a method that enables OVS models to learn from new domains while preserving prior knowledge. The approach evaluates the input sample's proximity to multiple domains using precomputed multivariate normal distributions. Based on this prediction, it dynamically interpolates between the weights of the pre-trained decoder and the fine-tuned decoders. Experiments demonstrate that this method allows OVS models to adapt to new domains while maintaining performance on the original dataset.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2506.15674"
      },
      {
        "text": "Code",
        "url": "https://github.com/parameterlab/leaky_thoughts"
      },
      {
        "text": "Dataset",
        "url": "https://huggingface.co/datasets/parameterlab/leaky_thoughts"
      }
    ],
    "abstract": "A critical paradox emerges when a Large Language Model (LLM) is tasked with reasoning over private information. The model will actively attempt to conceal the sensitive data within its reasoning trace; ironically, the more complex its effort to hide the information, the greater the risk of an accidental leak. This demonstrates that the very presence of private data within an LLM's reasoning process is inherently risky.",
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
    "image": "pictures/arnas2025scaling.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2507.07102"
      },
      {
        "text": "Code",
        "url": "https://github.com/oshapio/visual-compositional-generalization"
      }
    ],
    "abstract": "Compositional understanding is key to intelligence, but its presence in vision models is unclear. We test whether scaling data helps and find that diversity, not size, drives compositional generalisation. Broad concept coverage leads models to form additive, factored representations. This structure enables efficient generalisation. Pretrained models like DINO and CLIP show partial use of it. We call for more diverse datasets and attention to representational structure..",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ]
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2504.07092"
      },
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
    "abstract": "Object-centric learning (OCL) aims to learn object-wise representations, promising robust vision and human-like perception. However, OCL evaluation remains tied to unsupervised object discovery, a problem largely solved by foundational segmentation models. We argue that both object discovery and robust vision are effectively addressed. The field must shift towards real-world applications beyond object discovery.",
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
    "image": "pictures/luca2025diffdiv.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2311.16176"
      }
    ],
    "abstract": "Did you know that diffusion models can be forced to generate novel compositions of concepts by sampling from a half-trained model? We show that this can be used to generate diverse ensembles of counterfactuals that can be used to improve out-of-distribution generalisation.",
    "rtai_tags": [
      "DiffM",
      "SyDa"
    ]
  },
  {
    "id": "darina2025binding",
    "title": "CLIP Behaves like a Bag-of-Words Model Cross-modally but not Uni-modally",
    "authors": [
      "darina_koishigarina",
      "arnas_uselis",
      "seong_joon_oh"
    ],
    "venue": "arXiv",
    "year": "2025",
    "url": "https://arxiv.org/abs/2502.03566",
    "bibtex": "@article{darina2025binding,\n  title={CLIP Behaves like a Bag-of-Words Model Cross-modally but not Uni-modally},\n  author={Koishigarina, Darina and Uselis, Arnas and Oh, Seong Joon},\n  journal={arXiv preprint arXiv:2502.03566},\n  year={2025}\n}",
    "image": "pictures/darina2025binding.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2502.03566"
      },
      {
        "text": "Code",
        "url": "https://github.com/kdariina/CLIP-not-BoW-unimodally"
      }
    ],
    "abstract": "CLIP is widely used for downstream tasks but struggles with compositional understanding. It often behaves like a bag of words model and fails to bind attributes to objects in cross-modal settings. The problem comes from the cross-modal alignment using cosine similarity. We propose LABCLIP. It applies a linear transformation to text embeddings before computing similarity. This improves attribute-object binding and strengthens compositional understanding.",
    "rtai_tags": [
      "CoGe",
      "VLM"
    ]
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2504.04981"
      }
    ],
    "abstract": "We study continual test-time adaptation (CTTA), where a model adapts to changing unseen domains while retaining past knowledge. Existing methods focus only on the current domain. We propose DiCoTTA, which learns domain-invariant features during testing. It introduces a new architecture, adaptation strategy, and data management. DiCoTTA achieves state-of-the-art performance and strong generalisation on four CTTA benchmarks.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2411.00154"
      }
    ],
    "abstract": "People have tried to check if certain copyrighted material is used by LLMs by analysing their characteristic reactions to it, a task known as Membership Inference Attack (MIA). Research so far has mostly reported negative results, finding barely any statistically significant signals. In our paper, we show that meaningful signals only appear at scale: not in sentences or paragraphs, but at the level of documents and more.",
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
    "url": "https://openreview.net/forum?id=ByCV9xWfNK",
    "bibtex": "@inproceedings{arnas2025iclr,\ntitle = {Intermediate Layer Classifiers for OOD Generalization},\nauthor = {Uselis, Arnas and Oh, Seong Joon},\nyear = {2025},\nbooktitle = {International Conference on Learning Representations (ICLR)},\n}",
    "image": "pictures/arnas2025iclr.png",
    "links": [],
    "abstract": "Retraining the last layer for target OOD dataset is a common practice for adapting to new distributions. We question the practice and consider using intermediate-layer representations. This turns out to be a good idea in many vision applications. The empirical results are quite surprising.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2403.07968"
      }
    ],
    "abstract": "The non-convexity of modern neural networks poses unique challenges for understanding and controlling them. While optima may be scattered across different regions of the parameter space, training methods are expected to find good solutions. We aim to understand the geometric structure of these solutions by investigating whether they form a star domain. We apply linear interpolation between models trained with different initialisations and examine the resulting performance. Experimental results from 11 architectures on 5 datasets reveal that in 80% of cases, the average performance on the linear interpolation path stays within 20% of the original performance. We further show that these findings are unaffected by various factors such as optimiser choice, weight averaging, or model accuracy.",
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
    "abstract": "Joint finetuning of a pretrained encoder and a new decoder is common in semantic segmentation, but it struggles with domain shifts. Our Decoupled FineTuning (DeFT) method tackles this by warming up the decoder first and then finetuning both parts separately. This approach reduces learnable parameters and boosts generalisation.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2409.16978"
      }
    ],
    "abstract": "Explainable AI (XAI) has been criticised for relying too much on formalism and solutionism, focusing more on mathematical soundness than user needs. Despite efforts to correct this through user-focused studies from the HCI communities, we observe repeating patterns of formalism solutionism in a relatively young subfield of XAI: Training Data Attribution (TDA). We set out to correct this with a needfinding study with a diverse group of AI practitioners to identify potential user needs related to TDA. Our studies have uncovered new TDA tasks that are currently largely overlooked. We invite the TDA and XAI communities to consider these novel tasks and improve the user relevance of their research outcomes.",
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
    "image": "pictures/alex2024diversify.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2409.16797"
      }
    ],
    "abstract": "Ensemble diversification has traditionally been applied at sub-ImageNet scales (e.g. Waterbirds). We present methods to make them applicable at ImageNet+ scales. (1) Instead of relying on a separate OOD dataset to diversify the ensembles on, we source them from hard samples of the training set. (2) Stochastic pair selection. (3) Diversification of last 2 layers. We show that diversified ensembles are useful at OOD generalisation and (particularly) OOD detection, where we achieve the state-of-the-art performance.",
    "rtai_tags": [
      "OODD",
      "OOD",
      "UQCV"
    ]
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2404.16032"
      }
    ],
    "abstract": "Retrieval augmented generation (RAG) promises more trustworthy outputs from large language models (LLMs). RAG first retrieves relevant documents from a DB and includes them in the context for subsequent generation. However, RAG does not come with guarantee. Eventually, LLM decides whether to use the new information in retrieved document or to stick to the original information in the pre-training data. We present a study on this knowledge conflict.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2402.19460"
      }
    ],
    "abstract": "After the Trustworthy Machine Learning course, Bálint has investigated the relationships between different types of uncertainty in machine learning models. He found that many methods claiming to measure specific uncertainties had not been thoroughly verified. After the experiments, we concluded that these methods hardly achieved their claimed goals. This revelation is crucial for the uncertainty estimation community, where they try to understand and disentangle different uncertainty types.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2402.16569"
      }
    ],
    "abstract": "Uncertainty estimation so far had to be learned from scratch for each new task. We introduce a new approach that allows us to train uncertainty estimation on a large, general dataset and then apply it to new, specific tasks. We focus on practicality and efficiency. Our approach captures inherent uncertainty in the data, separate from uncertainty due to limited knowledge.",
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
    "image": "pictures/martin2024trap.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2402.12991"
      }
    ],
    "abstract": "Large language models (LLM) and surrounding services come with their own rules about who can use them and how they should be used. These rules are important to protect the company's work and to prevent misuse. Now, given a new LLM-based chatbot service, it's important to find out the underlying LLM in order to check the compliance with the rules attached to each LLM. Here's our method for doing this: We ask the chatbot a very specific question that only one company's machine will answer in a certain way. It's like asking a friend a secret question only they would know the answer to. If the machine answers the question the way we expect, we know it's based on a specific LLM.",
    "rtai_tags": [
      "MLAU",
      "SILM"
    ]
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
    "image": "pictures/dennis2024apricot.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2403.05973"
      }
    ],
    "abstract": "We can't trust large language model (LLM) outputs. One of the reasons is that it doesn't always generate reliable confidence estimates. One could look into the model likelihoods, but even that is infeasible for many black-box models. We show here that it's possible to train a lightweight external model to infer an LLM's internal confidence based only on the prompt and answers from the LLM (purely black box).",
    "rtai_tags": [
      "UQLM"
    ]
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
    "image": "pictures/elisa2023neuripsxaiw.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2310.20477"
      }
    ],
    "abstract": "Training data attribution (TDA) provides a non-parametric viewpoint for model explanations - which training data points are blamable for this test error? Apparently useful in practice, we realised that the actual usefulness is not tested in real applications. As a first step, we approach individuals working in a diverse array of sectors, either using or developing ML models, and ask whether they would find TDA useful in practice. The answer is affirmative - read the paper for more details.",
    "rtai_tags": [
      "TDI"
    ]
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2310.08215"
      },
      {
        "text": "arXiv",
        "url": "https://arxiv.org/abs/2310.08215"
      }
    ],
    "abstract": "The challenges posed by the trustworthiness of machine learning models are increasingly significant as these models find real-world applications. Our newly-released textbook, \"Trustworthy Machine Learning,\" aims to address these challenges comprehensively. It covers four crucial dimensions: Out-of-Distribution Generalization, Explainability, Uncertainty Quantification, and Evaluation of Trustworthiness. The text offers a thorough analysis of seminal and modern research papers, elucidating the foundational theories and practices. Originating from a course first offered at the University of Tübingen in the Winter Semester of 2022/23, the book serves as a stand-alone resource and includes code snippets and additional references. For further information, please visit our dedicated website.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2305.19765"
      }
    ],
    "abstract": "Consider Training Data Attribution (TDA) as a spotlight, highlighting the role each training sample plays in the predictions a model whips up. It's a tantalizing concept, especially for human-centric XAI, where it can guide users to tweak their training samples for better results. However, it's a bit like trying to hear a whisper in a storm. That's because the impact of removing a single training sample usually pales in comparison to the cacophony of noise stirred up during model training, like the random spark of model initialization or the chaotic dance of SGD batch shuffling. To understand this better, we've adopted a Bayesian deep learning viewpoint, treating our learned model as a Bayesian posterior and TDA estimates as random variables. Our findings? TDA is like trying to tune in to a radio station that's mostly static. It's really only effective in those rare instances when the impact of a single sample isn't lost in the noise. In those cases, TDA can indeed play a sweet tune!",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2307.01881"
      }
    ],
    "abstract": "Large language models (LLMs) are like giant sponges, soaking up vast amounts of data from the web. But amidst all that data, there could be some sensitive stuff, like personally identifiable information (PII). Makes you a bit worried, right? That's where our new tool, ProPILE, comes in. Think of it as a detective, helping people investigate if their personal data might be seeping out from these LLMs. You can create your own prompts based on your personal info to check how much of your PII are likely to be exposed to millions of users. ProPILE is one of our first efforts to empower data subjects to gain awareness and control over their own PII in the era of LLMs.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2209.00613"
      }
    ],
    "abstract": "Several recent studies have reported positive correlations between in-distribution (ID) and out-of-distribution (OOD) generalisation performances. In particular, Wenzel et al. (2022) found that none of the 31k networks examined on 172 dataset pairs has shown a trade-off, or a negative correlation, between the ID and OOD performances. They further recommend that, to improve the OOD generalisation, one can instead focus on improving the ID generalisation. We argue that this may not always be true. We present counterexamples where one does observe a trade-off between ID and OOD generalisation. We point to the selection method for networks as the key reason for the contradicting observations. We alter the recommendation to the field in a more nuanced manner.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2307.03810"
      }
    ],
    "abstract": "NeurIPS D&B extension of the UAI Epistemic AI Workshop paper below.",
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
      },
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2307.03810"
      }
    ],
    "abstract": "We developed the Uncertainty-aware Representation Learning (URL) benchmark in our research. This tool evaluates the reliability of uncertainty estimates from pretrained models on unseen datasets. Its implementation is simple, requiring only four lines of code. In our experiment, we applied URL to ten models trained on ImageNet. Then, we tested these models on eight different datasets. The results showed that achieving transferable uncertainty quantification remains a challenge. We invite the community to work on this novel problem!",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2305.16867"
      }
    ],
    "abstract": "Imagine Large Language Models (LLMs) as digital diplomats, interacting with us and others in the cyber world. We set LLMs - GPT-3, GPT-3.5, and GPT-4 - against each other in games to understand their social behavior. LLMs are great when self-interest rules, like in the Prisoner's Dilemma, but stumble when coordination is key. GPT-4, for instance, acts tough in the Prisoner's Dilemma and struggles with simple conventions in the Battle of the Sexes. But, give GPT-4 more info or ask it to predict the opponent's move, and it adjusts its strategy. Our insights open up an exciting path towards a behavioral game theory for machines!",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2303.17595"
      },
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
    "abstract": "Supervised learning trains models with (X,Y) data. The (X,Y) data comes from the annotation procedure where annotators provide the correct Y for each X. But behind the scene, annotators generate much more data than the (X,Y) data themselves: they unintionally generate auxiliary information during the annotation task, such as the history of corrections and the time-series of mouse traces and clicks. We call them annotation byproducts (AB) Z. We propose the new paradigm of learning using annotation byproducts (LUAB), where models are trained with the triplets (X,Y,Z) involving the ABs. We reproduce the original annotation procedures for ImageNet and COCO to generate AB-enriched datasets: ImageNet-AB and COCO-AB. we show that the auxiliary Z may help models be better aligned with human recognition mechanisms, leading to improved model robustness.",
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
    "image": "pictures/nam2023iccv.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2210.08457"
      },
      {
        "text": "Code",
        "url": "https://uniform-attention.github.io/"
      }
    ],
    "abstract": "ViT's itchy point seems to be the uniform attention. ViTs are hungry for denser connections, yet dense connections are hard to achieve because of softmax's steep gradient around the uniform attention. We manually insert additional uniform attention layers in ViT models. This is very cheap! It turns out to be an effective trick for increasing the capacity and generalisation for ViT models, especially for the smaller versions.",
    "rtai_tags": []
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2302.02865"
      },
      {
        "text": "Code",
        "url": "https://github.com/mkirchhof/Probabilistic_Contrastive_Learning"
      }
    ],
    "abstract": "We finally came up with some theoretical guarantees for probabilistic embeddings! Given a spherical embedding space with a von-Mises-Fisher (vMF) family of true latent embedding distribution, one may identify the true latent vMF for every data point up to rotations with a Monte-Carlo version of InfoNCE (called MCInfoNCE). This result is a probabilistic extension of the work by Zimmerman et al.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2211.02291"
      },
      {
        "text": "Workshop paper",
        "url": "data/hwang2022neurips_workshop.pdf"
      }
    ],
    "abstract": "A classifier gets biased when its decision boundary separates the bias attribute (e.g. gender attribute for profession prediction). Some prior de-biasing methods correct the decision boundary by identifying the bias-conflicting samples in the training data (e.g. female mechanical engineers) and giving more weight on them. We go one step further. We argue that it's more effective to augment the whole convex hull between usual data points (e.g. male mechanical engineers) and bias-conflicting samples (e.g. female mechanical engineers). We do this through simple Mixup. It effectively de-biases a model, even in the presence of strong label noise, arguably the greatest arch-enemy for a de-biasing method.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2204.03359"
      },
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
    "abstract": "Image-captioning benchmarks such as COCO Captions contain lots of nonsense. For the same image on the left, the caption that goes \"Playing tennis with a racket\" is deemed correct, while \"Swinging a tennis racket\" is penalised. This comes from the erratic recipe for constructing the datasets: (1) let annotators write down 5 captions per image and (2) consider only those 5 captions to be correct matches. We show that this practice introduces a lot of noise in the evaluation benchmarks. We then introduce a novel image-captioning dataset based on the MS-COCO Captions that captures the model performances more precisely.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2205.14959"
      },
      {
        "text": "Code",
        "url": "https://github.com/snu-mllab/Efficient-Dataset-Condensation"
      }
    ],
    "abstract": "Dataset condensation is the art of compactifying a training dataset. The aim is that a model trained on a condensed dataset is similar to the one trained on the original dataset, most importantly in terms of model accuracy (e.g. 91%-accuracy MNIST classifier with only 1 sample per class). We introduce many practical tricks to make data condensation work beyond the toy setting. We present the first data condensation method that actually works on images with sizes as large as 224x224, instead of 32x32!",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2203.03860"
      },
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/w-ood"
      }
    ],
    "abstract": "Weakly-supervised semantic segmentation (WSSS) is the task of solving pixel-wise class assignment with only the image-level supervision. The problem is ill-posed because the image-level labels alone do not let models distinguish foreground (FG) objects (e.g. train) from spuriously-correlated background (BG) cues (e.g. rail). Researchers have sought external sources of information, such as shape prior, to address the ill-posedness. In this paper, we explore a novel source: BG images (e.g. rail images without a train). Conceptually, telling models what are not the FG cues is equivalent to telling them what actually are the FG cues; BG images are sufficient for turning the problem into a well-posed one. Collecting such BG data is cost-efficient, requiring orders of magnitude less annotation costs than the already-cheap image-level labels.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2110.03095"
      }
    ],
    "abstract": "Shortcut learning is emerging as a key limitation of the current generation of machine learning models (CVPR'20, ICML'20). In this work, instead of proposing yet another solution, we take a step back and deepen our understanding of the problem. For example, trained on a dataset where both colour and shape are valid cues for recognising the object, models of different types (MLP, CNN, and ViT) choose to use colour over shape. Why is that? We provide an explanation from the parameter-space perspective. Read the paper. Worth it!",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2112.11916"
      }
    ],
    "abstract": "This is an NLP paper. There have been many attempts at enlarging the training text data for few-shot text classification, like back-translation (e.g. En-Fr-En) and the use of pre-trained language models. Unlike those, we propose an augmentation method that is fully aware of the underlying grammatical structure of the sentence. Importantly, our method generates a set of synonymous sentences that are both grammatically correct and grammatically diverse! Here we gain quite some points in few-shot text classification benchmarks. Another contribution is viewing the train-val split as part of the method and seeking the best splitting strategy when data augmentation is being used. It turns out that splitting the few-shot labelled samples S into disjoint train-val splits (train split is then augmented) is sub-optimal; a better strategy is to use the augmented source data S' as the train split and the original S itself as the validation split!",
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
    "image": "pictures/choe2020cvpr.gif",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2007.04178"
      },
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
    "abstract": "Journal extension of CVPR'20! It now contains more analyses, including the evaluation of input gradient variants as Weakly-Supervised Object Localization (WSOL) methods.",
    "rtai_tags": [
      "WSOL"
    ]
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2106.07861"
      },
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/calm"
      }
    ],
    "abstract": "It is difficult to find a CV researcher or practitioner who hasn't used (or at least heard of) the Class Activation Maps (CAM). It is a seminal feature attribution method that has left a deep mark on the vision research and applications. Notwithstanding its popularity, we found some practical and conceptual issues that makes CAM not as interpretable as it should be. We address the issues with a probabilistic treatment of the last layers of CNNs where the latent cue variable Z is trained via Marginal Likelihood (ML) or Expectation-Maximisation (EM) algorithms. The resulting Class Activation Latent Maps, or CALM, produces more precise and interpretable score maps.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2103.16302"
      },
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/pit"
      }
    ],
    "abstract": "The Tranformer architecture has successfully been adapted to visual models (e.g. ViT). However, Transformers, originally designed for language modelling, and ViT assign a constant ratio of computational loads between spatial and channel dimensions at different depths. We postulate this as a suboptimal design choice, as CNNs assign different ratios at different depths to maximise the utility of compute. We thus present Pooling-based Vision Transformer (PiT) that does this.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2106.04165"
      }
    ],
    "abstract": "Recovering the dynamical systems, or the data generation process, behind time series data enables an effective and robust prediction, interpretation, and forecasting. There exist prior methods for recovering either continuous or discrete dynamics, but not the mixture. The underlying dynamics behind many real-world systems contain both continuous and discrete elements. For example, an aircraft essentially follows a continuous dynamics but goes through a discrete mode shift at touchdown. Such a system is referred to as a Stochastic Hybrid System (SHS). We present a framework that recovers SHS from time series data using ingredients like Neural ODEs and latent variable models.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2101.05022"
      },
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/relabel_imagenet"
      }
    ],
    "abstract": "ImageNet labels contain lots of noise (e.g. Shankar et al.). There have been efforts to fix them on the evaluation set, but not yet on the training set. We fix them on the training set (published at codebase), but with the help of a bigger image classifier, to make the task feasible at all. This is another trick that will improve the ImageNet & downstream task accuracies across the board.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2101.05068"
      },
      {
        "text": "Code",
        "url": "https://github.com/naver-ai/pcme"
      }
    ],
    "abstract": "Given an image, there are many ways to describe it in text. Given a text description, there are likewise many possible images that suits the description. Cross-model associations are of many-to-many nature. The usual deterministic embeddings cannot model this well. We introduce a probabilistic embedding scheme based on the Hedged Instance Embedding (ICLR'19) to handle the many-to-many mapping gracefully. We address another crucial issue with evaluation: your method gets either penalised or rewarded for retrieving synonymous sentences. This is because of the non-exhaustive true matches in the eval set. Since ground-up collection of such matches is too expensive, we introduce a novel surrogate measure Plausible-Match R-Precision based on the estimated true matches.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2006.08217"
      },
      {
        "text": "Code",
        "url": "https://github.com/clovaai/AdamP"
      },
      {
        "text": "Project",
        "url": "https://clovaai.github.io/AdamP/"
      }
    ],
    "abstract": "When you apply a momentum-based optimizer over scale-invariant parameters, their norms increase quite a bit. The norm increase doesn't contribute anything to the loss minimization while only slowing down the convergence. We fix this by appending a projection operation on SGD and Adam. This leads to performance improvements across the board.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2012.03457"
      }
    ],
    "abstract": "Data augmentation is not as extensively studied in the video recognition tasks as in the static image recognition domain. We study the extension of popular static-image augmentation method, such as CutMix, on video recognition tasks.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2002.09797"
      },
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
    "abstract": "Evaluating generative models is tricky. There are Inception Score and Fréchet Inception Distance measures indeed, and then (Improved) Precision and Recall metrics to separately examine the fidelity and diversity aspects. Yet, they are still not perfect. We address the issues with Improved Precision and Recall metrics and propose new metrics: Density and Coverage.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1910.02806"
      },
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
    "abstract": "Models pick up correlations, rather than causal mechanisms, between inputs and outputs. De-biasing (and fairness) researches have guided models on \"which cues to look at\" through explicit bias labels or by re-weighting or re-generating training data to remove bias. We show that, for many application scenarios, it is possible to encode the \"cues to look at\" through model architecture and such expensive strategies are no longer needed.",
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
    "image": "pictures/choe2020cvpr.gif",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2001.07437"
      },
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
    "abstract": "I have long waited for this moment since CVPR'17. Weakly-Supervised Object Localization, or WSOL, has in fact been not weakly supervised in a strict sense. Design choices and hyperparameters are validated with the localization annotations! This paper explains why researchers had to rely on localization validation -- without localization supervision, there is no way to force a model to not extract cues from background regions. We propose a new fair benchmark acknowledging the need for localization annotations and show that WSOL methods since CAM in 2016 have not introduced much gain.",
    "rtai_tags": [
      "WSOL"
    ]
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1910.04396"
      }
    ],
    "abstract": "Scene text recognition works well, but there are remaining corner cases. An example is texts with unusual orientations and arrangements (e.g. BMW logo). We focus on this corner case and propose a model based on self-attention.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1710.03224"
      },
      {
        "text": "Journal",
        "url": "https://ieeexplore.ieee.org/document/8519337"
      }
    ],
    "abstract": "Journal version of my first paper ICCV'15, after five years! We have developed the version two of the ICCV'15 system that outperforms the methods that have appeared in the meantime.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1711.01768"
      },
      {
        "text": "Book chapter",
        "url": "https://link.springer.com/chapter/10.1007/978-3-030-28954-6_7"
      }
    ],
    "abstract": "Book chapter version of ICLR'18! We build connections between our black-box inspection methodology and the explainable AI.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1805.05838"
      },
      {
        "text": "Poster",
        "url": "data/orekondy2019neuripsfl_poster.pdf"
      }
    ],
    "abstract": "Federated learning allows sensitive user data to never leave the device and still be used for training. It is considered a safer option than sending the user data directly to the server. But is it? We show that users may be identified and linked based on the model updates communicated between the device and server.",
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
    "image": "pictures/chun2019icmlw.png",
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/2003.03879"
      }
    ],
    "abstract": "There has been a line of research on simple regularization techniques like CutMix (ICCV'19) and other lines of research on robustness and uncertainty. We make a happy marriage of the two and measure how well the regularization techniques improve robustness and uncertainty of a model.",
    "rtai_tags": [
      "OOD",
      "UQCV"
    ]
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1905.04899"
      },
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
    "abstract": "A simple solution that works surprisingly well! Cut and paste patches from other images during training. Quite likely, you will see a performance boost.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1904.01906"
      },
      {
        "text": "Code",
        "url": "https://github.com/clovaai/deep-text-recognition-benchmark"
      }
    ],
    "abstract": "Scene text recognition field has long suffered from the lack of a unified agreement on the evaluation protocol. We provide a standard protocol. We also provide a unified view on the previous methods and discover a novel combination of existing modules that turns out to be the state of the art.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1810.00319"
      },
      {
        "text": "Poster",
        "url": "data/oh2019iclr_poster.pdf"
      }
    ],
    "abstract": "There has been quite some work on representing uncertainty for classification or regression tasks. Is there a way to represent uncertainty for instance embedding models too? We show that it is possible to train probabilistic representatitons for instances based on their inherent ambiguity.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1805.12487"
      }
    ],
    "abstract": "Can a bad guy hijack an RL agent? We show that it is possible to let an agent pursue an alternative reward by introducing small adversarial perturbations in the input stream.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1711.01768"
      },
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
    "abstract": "Recipes for training a high-performance model are not cheap. Think about the GPU-and-research-scientist-and-engineer hours to find the right architectural components and optimizer hyperparameters. What if they can be stolen by examining the model responses to certain inputs?",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1711.09001"
      }
    ],
    "abstract": "Adversarial perturbation solutions (ICCV'17) produce visually pleasant protections with high protection rates, but their effects may be confined to a handful of recognition systems. We propose another solution based on face inpainting that changes the face to a fictitious yet natural-looking identity. It is effective against a broader set of recognition systems.",
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
    "abstract": "We stop and look back on the visual privacy papers (ICCV'15, ECCV'16, ICCV'17).",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1703.09471"
      },
      {
        "text": "Poster",
        "url": "data/oh2017iccv_poster.pdf"
      },
      {
        "text": "Code",
        "url": "https://github.com/coallaoh/AIP"
      }
    ],
    "abstract": "If face blurring doesn't work (ECCV'16), how should we shield our personal photos online against recognition systems? We propose a solution based on adversarial perturbations and the game theoretic considerations for the evaluation therein.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1701.08261"
      },
      {
        "text": "Poster",
        "url": "data/oh2017cvpr_poster.pdf"
      },
      {
        "text": "Code",
        "url": "https://github.com/coallaoh/GuidedLabelling"
      }
    ],
    "abstract": "There has been quite some work around training models for localization tasks (e.g. semantic segmentation) from the image tag supervision only. But is this fundamentally possible without relying on extensive validation with full localization annotations? We argue that certain priors are necessary at the very least to encode the extent of objects. Saliency, we argue, is a handy prior.",
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
    "links": [
      {
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1704.01518"
      }
    ],
    "abstract": "We casually use pronouns to refer to others. For machines, however, referring to people with pronouns necessitates new types of data and training strategies to explicitly localize and link people across frames. We do that.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1607.08438"
      },
      {
        "text": "Poster",
        "url": "data/oh2016eccv_poster.pdf"
      },
      {
        "text": "Extended abstract",
        "url": "data/oh2016eccvw.pdf"
      }
    ],
    "abstract": "But can you still be recognized even with a blur on your face? Quite likely.",
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
    "abstract": "You are a janitor at Taj Mahal. Against you will, sightseers take photos with your face in the background. How can you opt out of being present in someone else's photo? We present a mobile-system based solution.",
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
        "text": "ResearchTrend.AI",
        "url": "https://researchtrend.ai/papers/1509.03502"
      },
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
    "abstract": "How well does a CNN model recognize people in personal photos? Even when people don't look at cameras, CNN finds out who they are, based on the context (e.g. location and social connections).",
    "rtai_tags": [
      "CVBM"
    ]
  }
];

module.exports = publicationsData;
