export type Book = {
  slug: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  summary: string;
  description: string;
  pdfUrl: string;
  epubUrl: string;
  readOnlineUrl: string;
  coverGradient: string;
  featured?: boolean;
};

export const books: Book[] = [
  {
    slug: "the-great-gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Jazz Age Fiction",
    summary:
      "Jay Gatsby's obsessive pursuit of Daisy Buchanan across the glittering, hollow world of 1920s Long Island.",
    description:
      "F. Scott Fitzgerald's shimmering, tragic portrait of the American Dream at its brightest and most brittle. Narrated by Nick Carraway, the novel follows the mysterious millionaire Jay Gatsby as he throws lavish parties in the hope of winning back Daisy Buchanan. A cornerstone of American literature taught in nearly every U.S. high school.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/64317/pg64317.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/64317.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/64317/64317-h/64317-h.htm",
    coverGradient: "linear-gradient(135deg,#1a3a5c,#0a1a2f)",
    featured: true,
  },
  {
    slug: "adventures-of-huckleberry-finn",
    title: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
    genre: "American Frontier",
    summary:
      "A runaway boy and an escaped slave raft down the Mississippi River in Twain's defining American novel.",
    description:
      "Mark Twain's masterpiece of vernacular American storytelling. Huck Finn and Jim navigate the Mississippi, confronting the moral contradictions of the antebellum South. Hemingway called it the book from which 'all modern American literature comes.'",
    pdfUrl: "https://www.gutenberg.org/cache/epub/76/pg76.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/76.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/76/76-h/76-h.htm",
    coverGradient: "linear-gradient(135deg,#6b4423,#2b1810)",
    featured: true,
  },
  {
    slug: "moby-dick",
    title: "Moby-Dick; or, The Whale",
    author: "Herman Melville",
    year: 1851,
    genre: "Sea Epic",
    summary:
      "Captain Ahab's monomaniacal hunt for the white whale that took his leg — and the sailor who lives to tell it.",
    description:
      "Melville's sprawling, philosophical sea epic. Ishmael signs onto the Pequod and finds himself bound to Captain Ahab's obsessive quest for the white whale. A vast, strange, and endlessly rewarding pillar of American literature.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/2701/pg2701.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/2701.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/2701/2701-h/2701-h.htm",
    coverGradient: "linear-gradient(135deg,#0d2b3e,#000)",
    featured: true,
  },
  {
    slug: "the-scarlet-letter",
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    year: 1850,
    genre: "Puritan New England",
    summary:
      "Hester Prynne wears her sin as an embroidered letter in Puritan Boston — but she is not the guiltiest one.",
    description:
      "Hawthorne's foundational American novel of guilt, hypocrisy, and public shame. Set in 17th-century Boston, it follows Hester Prynne, her daughter Pearl, and the tormented minister Arthur Dimmesdale.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/25344/pg25344.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/25344.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/25344/25344-h/25344-h.htm",
    coverGradient: "linear-gradient(135deg,#8b1a1a,#2b0505)",
  },
  {
    slug: "little-women",
    title: "Little Women",
    author: "Louisa May Alcott",
    year: 1868,
    genre: "Coming of Age",
    summary:
      "The four March sisters — Meg, Jo, Beth, and Amy — come of age in Civil War-era New England.",
    description:
      "Louisa May Alcott's beloved semi-autobiographical novel of the March family. Warm, funny, and quietly radical about what women's lives could be.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/514/pg514.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/514.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/514/514-h/514-h.htm",
    coverGradient: "linear-gradient(135deg,#5c3a5c,#2a1a2a)",
  },
  {
    slug: "the-adventures-of-tom-sawyer",
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    year: 1876,
    genre: "American Frontier",
    summary:
      "Tom, Huck, and Becky Thatcher get into every kind of trouble a small Missouri river town can offer.",
    description:
      "Mark Twain's sunlit companion to Huckleberry Finn. Whitewashed fences, cave adventures, and the fleeting freedom of an American boyhood along the Mississippi.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/74/pg74.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/74.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/74/74-h/74-h.htm",
    coverGradient: "linear-gradient(135deg,#a86b32,#4a2810)",
  },
  {
    slug: "the-call-of-the-wild",
    title: "The Call of the Wild",
    author: "Jack London",
    year: 1903,
    genre: "Adventure",
    summary:
      "Buck, a domesticated dog stolen and sold into the Yukon gold rush, rediscovers his ancestral wildness.",
    description:
      "Jack London's short, ferocious novel of survival during the Klondike Gold Rush. One of the most-read American adventure novels ever written.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/215/pg215.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/215.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/215/215-h/215-h.htm",
    coverGradient: "linear-gradient(135deg,#2f4a2f,#0f1f0f)",
  },
  {
    slug: "walden",
    title: "Walden; or, Life in the Woods",
    author: "Henry David Thoreau",
    year: 1854,
    genre: "Transcendentalism",
    summary:
      "Two years, two months, and two days alone in a cabin on Walden Pond — and the philosophy that came out of it.",
    description:
      "Thoreau's reflective account of his experiment in simple living outside Concord, Massachusetts. A founding text of American environmental thought.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/205/pg205.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/205.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/205/205-h/205-h.htm",
    coverGradient: "linear-gradient(135deg,#3a5a2f,#1a2a15)",
  },
  {
    slug: "the-awakening",
    title: "The Awakening",
    author: "Kate Chopin",
    year: 1899,
    genre: "Southern Fiction",
    summary:
      "Edna Pontellier's summer on the Louisiana coast awakens desires her marriage cannot contain.",
    description:
      "Kate Chopin's Louisiana novel was banned and buried for decades before being recognized as a landmark of early American feminist literature.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/160/pg160.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/160.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/160/160-h/160-h.htm",
    coverGradient: "linear-gradient(135deg,#3c6478,#122430)",
  },
  {
    slug: "the-age-of-innocence",
    title: "The Age of Innocence",
    author: "Edith Wharton",
    year: 1920,
    genre: "Gilded Age",
    summary:
      "Newland Archer's polite Gilded Age engagement collides with the arrival of the scandalous Countess Olenska.",
    description:
      "The first novel by a woman to win the Pulitzer Prize. Wharton's precise, cutting portrait of Old New York society.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/541/pg541.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/541.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/541/541-h/541-h.htm",
    coverGradient: "linear-gradient(135deg,#6b3a5c,#2b1525)",
  },
  {
    slug: "narrative-of-the-life-of-frederick-douglass",
    title: "Narrative of the Life of Frederick Douglass",
    author: "Frederick Douglass",
    year: 1845,
    genre: "Memoir",
    summary:
      "Frederick Douglass's own account of his birth into slavery in Maryland and his escape to freedom.",
    description:
      "One of the most influential first-person accounts of American slavery, written by the abolitionist orator and statesman himself.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/23/pg23.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/23.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/23/23-h/23-h.htm",
    coverGradient: "linear-gradient(135deg,#4a4a4a,#1a1a1a)",
  },
  {
    slug: "leaves-of-grass",
    title: "Leaves of Grass",
    author: "Walt Whitman",
    year: 1855,
    genre: "Poetry",
    summary:
      "Walt Whitman's endlessly expanding book of poems — a democratic epic of the American self.",
    description:
      "Whitman rewrote and expanded Leaves of Grass for the rest of his life. Includes 'Song of Myself,' the poem that reset the possibilities of American verse.",
    pdfUrl: "https://www.gutenberg.org/cache/epub/1322/pg1322.pdf",
    epubUrl: "https://www.gutenberg.org/ebooks/1322.epub3.images",
    readOnlineUrl: "https://www.gutenberg.org/files/1322/1322-h/1322-h.htm",
    coverGradient: "linear-gradient(135deg,#5c7a3a,#1f2a15)",
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const genres = Array.from(new Set(books.map((b) => b.genre))).sort();