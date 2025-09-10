// Updates data: newest first. Each update has an ISO date, optional id, and HTML content.
// Keep this list sorted descending by date (newest first).
// The FE will render the latest 5 items.
const updatesData = [
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
  }
];

// Optional: export to window for debugging
window.updatesData = updatesData;


