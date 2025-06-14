// Publications data in JSON format
const publicationsData = [
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
    // "abstract": "Did you know that diffusion models can be forced to generate novel compositions of concepts by sampling from a half-trained model? We show that this can be used to generate diverse ensembles of counterfactuals that can be used to improve out-of-distribution generalisation.",
    "abstract": "TLDR: We use underfitted diffusion models to generate counterfactuals" +
    " with novel concepts compositions that can be used to diversify ensembles " +
    "and improve out-of-distribution generalisation." +
    "<details><summary>Not TLDR</summary>" +
    "We continue our exploration of functional modularity through diverse ensembles, " +
    "particularly in scenarios where available data is affected by spurious correlations. " +
    "In such settings, curating suitable data for ensemble diversification is especially " +
    "difficult, as it must avoid reinforcing these confounding patterns. To overcome this " +
    "challenge, we propose using diffusion models to synthesize cleaner, more controlled " +
    "training data. Notably, diffusion models can be guided to generate novel concept " +
    "compositions by sampling from partially trained checkpoints. We leverage this capability to produce counterfactual samples, which facilitate the training of more functionally diverse models and enhance out-of-distribution generalization." +
    "</details>",
    "rtai_tags": [
      "DiffM",
      "SyDa"
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
    "abstract": "TLDR: We scale ensemble diversification to ImageNet-scale " +
    "datasets by (1) leveraging hard training samples instead of external OOD data, " +
    "(2) approximating costly pairwise disagreement with stochastic pair selection, " +
    "and (3) enforcing diversification only for a few last layers. This yields state-of-the-art " +
    "OOD detection and strong OOD generalization results." +
    "<details><summary>Not TLDR</summary>" +
    "To explore modularity at the functional level, I aimed to train separate image " +
      "classifiers as modules specialized in detecting distinct visual features such as " +
      "texture, shape, and color. A modern and effective approach for achieving this is to " +
      "train an ensemble of neural networks with an additional objective that encourages " +
      "diversity in their predictions. While ensemble diversification has typically been " +
      "explored on smaller datasets (e.g., Waterbirds), we introduce methods that scale to " +
      "larger datasets like ImageNet and beyond. Our contributions include: (1) sourcing " +
      "difficult samples directly from the training set instead of relying on a separate " +
      "out-of-distribution (OOD) dataset, (2) employing stochastic pair selection to " +
      "encourage diverse predictions, and (3) applying diversification specifically to the " +
      "final layers of each network. We demonstrate that such diversified ensembles " +
      "significantly improve OOD generalization and, in particular, achieve state-of-the-art " +
      "performance in OOD detection when combining ensemble with a novel " +
      "uncertainty estimate - Predictive Diversity Score (PDS)." +
      "</details>",
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
    // "abstract": "Retrieval augmented generation (RAG) promises more trustworthy outputs from large language models (LLMs). RAG first retrieves relevant documents from a DB and includes them in the context for subsequent generation. However, RAG does not come with guarantee. Eventually, LLM decides whether to use the new information in retrieved document or to stick to the original information in the pre-training data. We present a study on this knowledge conflict.",
    "abstract": "TLDR: RAGs often ignore correct retrieved information due to " +
    " parametric bias — when the model's possibly incorrect parametric answer (the answer that it gives without any context) " +
    "appears as a substring in the retrieved document, the model is more likely to repeat that answer, even if it contradicts information in the document." +
    "<details><summary>Not TLDR</summary>" +
    "One approach to enforcing modularity in large language models (LLMs) is to separate memory and generation. In this setup, memory is handled by a document database, while generation is performed by an LLM that produces responses based on the original user query and the documents retrieved from the database." +
    "<br>Retrieval-augmented generation (RAG) exemplifies this approach and holds the promise of producing more trustworthy outputs. It retrieves relevant documents from a database and incorporates them into the generation context. However, RAG provides no guarantees: the LLM ultimately decides whether to incorporate the retrieved information or rely on its pre-trained knowledge." +
    "<br>In this work, we study how LLMs resolve conflicts between retrieved content and their internal (parametric) knowledge. We find that when models fail to update their answers in light of new information, it is often due to <b>parametric bias</b>: the presence of an incorrect answer in the retrieved document makes it more likely to ignore the retrieved document." +
    "</details>",
    "rtai_tags": [
      "RALM"
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
    // "abstract": "The non-convexity of modern neural networks poses unique challenges for understanding and controlling them. While optima may be scattered across different regions of the parameter space, training methods are expected to find good solutions. We aim to understand the geometric structure of these solutions by investigating whether they form a star domain. We apply linear interpolation between models trained with different initialisations and examine the resulting performance. Experimental results from 11 architectures on 5 datasets reveal that in 80% of cases, the average performance on the linear interpolation path stays within 20% of the original performance. We further show that these findings are unaffected by various factors such as optimiser choice, weight averaging, or model accuracy.",
    "abstract": "TLDR: We investigate the geometric structure of neural network solutions by " +
      "studying linear mode connectivity between independently trained models. Our findings " +
      "reveal a star-domain structure in parameter space, where a subset of solutions are " +
      "linearly connected to all others (up to weight permutation)." +
      "<details><summary>Not TLDR</summary>" +
      "As we continued exploring functional modularity through the lens of diverse ensembles, " +
      "we asked: What is the relationship between ensemble members in parameter space when " +
      "each model is viewed as a solution obtained from a different random initialization and " +
      "batch ordering during training? To investigate the geometric structure of these " +
      "solutions, we study linear mode connectivity — the existence of low-loss linear paths " +
      "between pairs of trained models. We linearly interpolate between independently trained " +
      "models and evaluate performance along these paths. Our findings reveal a subset of " +
      "solutions that are linearly connected to all others (up to weight permutation), " +
      "suggesting that the overall solution set forms a star-domain structure in parameter " +
      "space.</details>",
    "rtai_tags": [
      "MoMe"
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
    // "abstract": "TEst link [Trustworthy Machine Learning (TML)](https://trustworthyml.io/)",
    // "abstract": "TEst link <a href=\"https://trustworthyml.io/\">Trustworthy Machine Learning (TML)</a>  <details><summary>Click to expand</summary>INSIDE toggle list</details>",
    "abstract": "TLDR: Our textbook Trustworthy Machine Learning addresses key challenges in deploying ML models, covering OOD generalization, explainability, uncertainty, and evaluation. Based on a course at the University of Tübingen, it combines theory, research, and code for practical learning."  +
    "<details><summary>Not TLDR</summary>" +
    "The lecture notes for the <a href='https://scalabletrustworthyai.github.io/courses/tml_winter_2223/'>Trustworthy Machine Learning (TML)</a> " +
    "course, originally prepared by <a href='https://coallaoh.github.io/'>Joon</a>, " +
    "have been consolidated into a textbook by our exceptional Master's student " +
    "<a href='https://bmucsanyi.github.io/'>Bálint</a>. I initially served as Bálint's " +
    "Master's thesis advisor and teaching assistant for the course. After seeing the " +
    "extensive notes he had compiled while preparing for the TML exam, I encouraged him " +
    "to share them with the world. He embraced the idea with remarkable dedication and " +
    "turned his work into this excellent textbook. " +
    "Later <a href='https://scholar.google.com/citations?user=Xtgj8q0AAAAJ&hl=de'>Michael</a>, " +
    "<a href='https://elisanguyen.github.io/'>Elisa</a>, and I each reviewed the chapters " +
    "on uncertainty estimation, explainability, and robustness, respectively. " +
    "<br><br>About the " +
    "textbook: As machine-learning systems transition from research to real-world deployment, " +
    "their trustworthiness has become a pressing concern. Our textbook, " +
    "<a href='https://trustworthyml.io/'>Trustworthy Machine Learning</a>, tackles this " +
    "challenge head-on through four pillars: out-of-distribution generalisation, explainability, " +
    "uncertainty quantification, and evaluation of trustworthiness. Drawing on both seminal " +
    "and contemporary research, the book explains foundational theory, highlights practical " +
    "techniques, and includes code snippets plus further reading. Adapted from a course " +
    "first offered at the <a href='https://uni-tuebingen.de/'>University of Tübingen</a> " +
    "in the winter semester 2022/23, it now stands alone as a comprehensive reference. " +
    "<br>For more details, please visit the <a href='https://trustworthyml.io/'>accompanying website</a>." +
    "</details>",
    // "abstract": "No links",
    "rtai_tags": [
      "OOD",
      "AAML",
      "FAtt",
      "TDI",
      "BDL"
    ]
  }
];

module.exports = publicationsData;
