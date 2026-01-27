// Updates data: newest first. Each update has an ISO date, optional id, and HTML content.
// Keep this list sorted descending by date (newest first).
// The FE will render the latest 5 items.
const updatesData = [
  {
    date: '2026-01-27',
    id: 'update-2026-01-27-iclr26-acceptance',
    html: "27 January 2026. 5 papers accepted @ ICLR'26: <a href=\"#alex2025disco\">DISCO</a>, <a href=\"#ahmed2025drllm\">Dr.LLM</a>, <a href=\"#darina2025binding\">CLIP Bag-of-Words</a>, <a href=\"#minyoung2026delimiter\">Delimiter Token Scaling</a>, <a href=\"#michael2025selfreflect\">SelfReflect</a>."
  },
  {
    date: '2025-12-21',
    id: 'update-2025-12-21-joining-kaist',
    html: "21 December 2025. I'm joining <a href=\"https://gsai.kaist.ac.kr/\">KAIST AI</a> as an associate professor from February 2026."
  },
  {
    date: '2025-09-20',
    id: 'update-2025-09-20-neurips25-acceptance',
    html: "20 September 2025. 4 papers accepted @ NeurIPS'25: <a href=\"#haritz2025cseo\">C-SEO Bench</a>, <a href=\"#ankit2025ranking\">Visual Embedding Rankability</a>, <a href=\"#yujin2025diffusion\">Diffusion Classifier Compositionality</a>, <a href=\"#dongjun2025ovs\">Open-vocabulary Segmentation</a>."
  },
  {
    date: '2025-08-20',
    id: 'update-2025-08-20-emnlp25-acceptance',
    html: "20 August 2025. 1 paper accepted @ EMNLP'25: <a href=\"#tommaso2025leakythoughts\">Leaky Thoughts: Large Reasoning Models Are Not Private Thinkers</a>."
  },
  {
    date: '2025-05-01',
    id: 'update-icml-2025-compositional-generalisation',
    html: "1 May 2025. 1 paper on <a href=\"#arnas2025icml\">compositional generalisation</a> is accepted at ICML'25."
  },
  {
    date: '2025-04-28',
    id: 'update-website-refurbished-researchtrend',
    html: "28 April 2025. I have refurbished my website. It is now powered by <a href=\"https://www.researchtrend.ai/\">ResearchTrend.AI</a>. We'll let everyone use our template for their own research websites."
  },
  {
    date: '2025-01-23',
    id: 'update-naacl-2025-mia',
    html: "23 January 2025. 1 paper on <a href=\"#haritz2025mia\">making MIA work</a> is accepted at NAACL'25"
  },
  {
    date: '2025-01-23',
    id: 'update-iclr-2025-3-papers',
    html: "23 January 2025. We have 3 papers to be presented at ICLR'25: <a href=\"#ankit2025star\">Star Domain Hypothesis</a>, <a href=\"#arnas2025iclr\">Intermediate-Layer Classifiers</a>, <a href=\"#jaehyun2025iclr\">Finetuning Segmenter</a>."
  },
  {
    date: '2024-10-05',
    id: 'update-teaching-tml-2425',
    html: "5 October 2024. I'm teaching the <a href=\"https://scalabletrustworthyai.github.io/courses/tml_winter_2425/\">Trustworthy ML course</a> @ University of Tübingen."
  },
  {
    date: '2024-10-01',
    id: 'update-2024-10-01-researchtrend-launch',
    html: "1 October 2024. <a href=\"https://researchtrend.ai/\">ResearchTrend.AI</a> is launched - in collaboration with <a href=\"https://parameterlab.de\">Parameter Lab</a>."
  },
  {
    date: '2024-09-26',
    id: 'update-2024-09-26-neurips24-disentanglement-spotlight',
    html: "26 September 2024. 1 paper accepted @ NeurIPS'24 D&B as a spotlight: <a href=\"#balint2024disentanglement\">Benchmarking Uncertainty Disentanglement</a>."
  },
  {
    date: '2024-07-10',
    id: 'update-2024-07-10-colm24-ralm',
    html: "10 July 2024. 1 paper accepted @ CoLM'24: <a href=\"#evgenii2024ralm\">Knowledge Conflicts</a>."
  },
  {
    date: '2024-05-16',
    id: 'update-2024-05-16-acl24-apricot-trap',
    html: "16 May 2024. 2 papers accepted @ ACL'24: <a href=\"#dennis2024apricot\">Apricot</a> and <a href=\"#martin2024trap\">TRAP</a>."
  },
  {
    date: '2023-10-16',
    id: 'update-2023-10-16-teaching-2324-book',
    html: "16 October 2023. I'm teaching the <a href=\"https://scalabletrustworthyai.github.io/courses/tml_winter_2324/\">Trustworthy ML course</a> @ University of Tübingen. Materials from last year have been published as a <a href=\"https://trustworthyml.io/\">book</a>!"
  },
  {
    date: '2023-09-22',
    id: 'update-2023-09-22-neurips23-4-papers',
    html: "22 September 2023. 4 paper accepted @ NeurIPS 2023. A <a href=\"#elisa2023neurips\">poster</a> with Elisa, a <a href=\"#siwon2023neurips\">spotlight</a> with Siwon, Parameter Lab, and Naver, a <a href=\"#teney2023neurips\">spotlight</a> with Damien, and a <a href=\"#kirchhof2023neuripsdb\">poster</a> with Michael."
  },
  {
    date: '2023-07-24',
    id: 'update-2023-07-24-uai23-best-student-paper',
    html: "24 July 2023. The <a href=\"#kirchhof2023uaieai\">URL benchmark</a> has received the Best Student Paper Award at the UAI workshop on Epistemic AI."
  },
  {
    date: '2023-07-21',
    id: 'update-2023-07-21-parameter-lab-affiliation',
    html: "21 July 2023. I have started my affiliation with <a href=\"https://www.parameterlab.de/\">Parameter Lab</a>. Through this construct, I collaborate with <a href=\"https://navercorp.com/en\">Naver</a> on foundational models and bridge industrial and academic research efforts."
  },
  {
    date: '2023-07-14',
    id: 'update-2023-07-14-iccv23-two-papers',
    html: "14 July 2023. 2 papers accepted @ ICCV'23: <a href=\"#han2023iccv\">Neglected Free Lunch</a> and <a href=\"#nam2023iccv\">Scratching the Back</a>."
  },
  {
    date: '2023-06-08',
    id: 'update-2023-06-08-principles-phd',
    html: "8 June 2023. Posted <a href=\"https://github.com/coallaoh/Principles/tree/main/principles/phd\">Principles for a PhD Program</a> for current & future students in my group."
  },
  {
    date: '2023-04-25',
    id: 'update-2023-04-25-icml23-kirchhof',
    html: "25 April 2023. 1 paper accepted @ ICML'23 with Michael Kirchhof: <a href=\"#kirchhof2023icml\">A theoretical guarantee for probabilistic embeddings</a>."
  },
  {
    date: '2023-04-03',
    id: 'update-2023-04-03-postdoc-opening',
    html: "3 April 2023. We have an opening for a postdoc at STAI. See <a href=\"https://scalabletrustworthyai.github.io/#openings\">job posting</a>."
  },
  {
    date: '2023-03-29',
    id: 'update-2023-03-29-eml-slides',
    html: "29 March 2023. Here are the <a href=\"https://docs.google.com/presentation/d/19VLAJRzy13Zt2gvWpmO0Vqm5LQgvH8wbgB0-yCDwA_8/edit?usp=sharing\">slides</a> for the talk at the EML Workshop. The annotation byproducts paper is available <a href=\"#han2023iccv\">below</a>."
  },
  {
    date: '2022-10-21',
    id: 'update-2022-10-21-teaching-2223',
    html: "21 October 2022. Lecture on <a href=\"https://scalabletrustworthyai.github.io/courses/tml_winter_2223/\">Trustworthy ML</a> at the University of Tübingen starts (Winter 22/23)."
  },
  {
    date: '2022-09-15',
    id: 'update-2022-09-15-neurips22-selecmix',
    html: "15 September 2022. 1 paper accepted @ NeurIPS'22: <a href=\"#hwang2022neurips\">SelecMix</a>."
  },
  {
    date: '2022-08-03',
    id: 'update-2022-08-03-snu-talk',
    html: "3 August 2022. I'm giving a talk on Scalable Trustworthy AI @ SNU Summer School. <a href=\"https://docs.google.com/presentation/d/1BVyjRE-jq3cuVl9NM29WeFi6eUBTtPi6KzKRQufJr4g/edit?usp=sharing\">Slides</a> and <a href=\"https://www.youtube.com/watch?v=oiFS2N1ocTA\">video</a> are available."
  },
  {
    date: '2022-07-07',
    id: 'update-2022-07-07-stai-website',
    html: "7 July 2022. Our group web page is available: <a href=\"https://scalabletrustworthyai.github.io/\">Scalable Trustworthy AI (STAI)</a>. We're hiring PhD students."
  },
  {
    date: '2022-07-03',
    id: 'update-2022-07-03-eccv22-captions',
    html: "3 July 2022. 1 paper accepted @ ECCV'22: <a href=\"#chun2022eccv\">ECCV Captions</a>."
  },
  {
    date: '2022-03-24',
    id: 'update-2022-03-24-imagenet-workshop-recordings',
    html: "24 March 2022. Recordings for the NeurIPS workshop on ImageNet: Past, Present, and Future are available <a href=\"https://sites.google.com/view/imagenet-workshop/#h.nz6qoftuckhz\">here</a>."
  },
  {
    date: '2022-04-01',
    id: 'update-join-tuebingen-2022-04-01',
    html: '1 April 2022. I joined the <a href="https://tuebingen.ai/">University of Tübingen</a> as an independent group leader.'
  },
  {
    date: '2022-03-02',
    id: 'update-2022-03-02-cvpr22-w-ood',
    html: "2 March 2022. 1 paper accepted @ CVPR'22: <a href=\"#lee2022cvpr\">Weakly-Supervised Semantic Segmentation using Out-of-Distribution Data</a>."
  },
  {
    date: '2022-01-21',
    id: 'update-iclr-2022-scimeca-shortcut-parameter-space',
    html: "21 January 2022. 1 paper accepted @ ICLR'22: <a href=\"#scimeca2022iclr\">Shortcut learning from the parameter-space viewpoint</a>."
  },
  {
    date: '2021-12-13',
    id: 'update-2021-12-13-imagenet-workshop-held',
    html: "13-14 December 2021. NeurIPS'21 workshop on <a href=\"https://sites.google.com/view/imagenet-workshop/\">ImageNet: Past, Present, and Future</a> was held with 400+ attendees. Recordings will be available in January 2022."
  },
  {
    date: '2021-12-01',
    id: 'update-2021-12-01-aaai22-alp',
    html: "1 December 2021. 1 paper accepted @ AAAI'22: <a href=\"#hazel2022aaai\">ALP</a> - a data augmentation method for few-shot text classification."
  },
  {
    date: '2021-09-29',
    id: 'update-2021-09-29-neurips21-nha',
    html: "29 September 2021. 1 paper accepted @ NeurIPS'21: <a href=\"#poli2021neurips\">Neural Hybrid Automata</a>."
  },
  {
    date: '2021-09-01',
    id: 'update-2021-09-01-openreview-imagenet-workshop',
    html: "1 September 2021. The <a href=\"https://openreview.net/group?id=NeurIPS.cc/2021/Workshop/ImageNet_PPF\">OpenReview submission system</a> for the NeurIPS'21 workshop on ImageNet is now open."
  },
  {
    date: '2021-08-01',
    id: 'update-2021-08-01-cfp-imagenet-workshop',
    html: "1 August 2021. The <a href=\"https://sites.google.com/view/imagenet-workshop/#h.89pzp1djwav4\">call for papers</a> for the NeurIPS'21 workshop on ImageNet is now available."
  },
  {
    date: '2021-07-23',
    id: 'update-2021-07-23-imagenet-workshop-announce',
    html: "23 July 2021. We will organize a NeurIPS'21 workshop on <a href=\"https://sites.google.com/view/imagenet-workshop/\">ImageNet: Past, Present, and Future</a>."
  },
  {
    date: '2021-07-23',
    id: 'update-2021-07-23-iccv21-calm-pit',
    html: "23 July 2021. 2 papers accepted @ ICCV'21: <a href=\"#kim2021iccv\">CALM</a> and <a href=\"#heo2021iccv\">PiT</a>."
  }
];

// Optional: export to window for debugging
window.updatesData = updatesData;


