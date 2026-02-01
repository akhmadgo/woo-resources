export type Resource = {
  name: string;
  url: string;
  description: string;
};

export type Section = {
  id: string;
  title: string;
  resources: Resource[];
};

export const sections: Section[] = [
  {
    id: "interview-prep",
    title: "Interview Prep",
    resources: [
      { name: "NeetCode", url: "https://neetcode.io", description: "Curated coding interview problems with video explanations" },
      { name: "LeetCode", url: "https://leetcode.com", description: "Practice coding problems used in real tech interviews" },
    ],
  },
  {
    id: "system-design",
    title: "System Design",
    resources: [
      { name: "ByteByteGo", url: "https://bytebytego.com", description: "Visual system design guides by Alex Xu" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    resources: [
      { name: "Papers With Code", url: "https://paperswithcode.com", description: "ML papers with implementation code" },
      { name: "Andrej Karpathy YouTube", url: "https://www.youtube.com/@AndrejKarpathy", description: "Neural networks explained from scratch" },
      { name: "3Blue1Brown ML", url: "https://www.3blue1brown.com/topics/neural-networks", description: "Visual math intuitions for neural networks" },
    ],
  },
  {
    id: "fellowships",
    title: "Fellowships & Programs",
    resources: [
      { name: "MLH Fellowship", url: "https://fellowship.mlh.io", description: "Open source fellowship for aspiring technologists" },
      { name: "Headstart Fellowship", url: "https://www.headstartfellowship.com", description: "Fellowship connecting students with startups" },
      { name: "Neo Scholars", url: "https://neo.com/scholars", description: "Community and funding for ambitious builders" },
    ],
  },
];
