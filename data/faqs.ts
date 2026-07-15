export interface FAQ {
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
  {
    question: 'How long does business registration take?',
    answer: 'Business name registration typically takes 0–2 working days after submission. Company incorporation (RC) takes 7–14 working days depending on CAC processing. We keep you updated at every stage so there are no surprises.',
    category: 'General',
  },
  {
    question: 'Do I need to visit any office in person?',
    answer: 'No. The entire process is handled online. We collect your information, file on your behalf, and deliver your certificate digitally. You can be anywhere in Nigeria or anywhere in the world.',
    category: 'General',
  },
  {
    question: 'Are your prices all-inclusive?',
    answer: 'Yes. Our prices cover government filing fees, professional handling, follow-up with the relevant agency, and digital certificate delivery. There are zero hidden charges. What you see is what you pay always.',
    category: 'General',
  },
  {
    question: 'What is the difference between a Business Name and an RC?',
    answer: 'A Business Name (BN) is a sole proprietorship or partnership registered under your personal name simple and affordable. An RC is a separate legal entity with its own TIN, bank account, and limited liability protection. If you are raising funding, onboarding partners, or want to protect your personal assets, you need an RC.',
    category: 'General',
  },
  {
    question: 'Can I register if I live outside Nigeria?',
    answer: 'Absolutely. We serve Nigerian diaspora clients across the UK, US, Canada, Germany, and beyond. Our process is entirely online your location makes no difference. We have successfully registered businesses for clients on four continents.',
    category: 'General',
  },
  {
    question: 'Can you help if I already operate informally?',
    answer: 'Yes and you should formalise as soon as possible. Many of our clients register businesses that have been operating informally for years. We assess your situation and find the cleanest, fastest path to full legal compliance.',
    category: 'General',
  },
  {
    question: 'Do you serve clients in Kano, Kaduna, and other Northern states?',
    answer: 'Yes and the North is our home. We are based in Kano and have served hundreds of entrepreneurs across Kano, Kaduna, Sokoto, Zamfara, Borno, Bauchi, Gombe, and all Northern states. We understand the Northern Nigeria business environment, and we are committed to making professional business services accessible to every MSME owner in the region no matter your state or city.',
    category: 'General',
  },
  {
    question: 'What compliance services do you offer beyond registration?',
    answer: 'We handle Annual Returns filing, NAFDAC registration, SCUML compliance, Tax registration and clearance (FIRS & state), SON certification, and various state-level permits and licences. If your business needs it, we likely handle it reach out and we\'ll confirm.',
    category: 'General',
  },
  {
    question: 'I sell in local markets in Kano or Kaduna do I still need to register?',
    answer: 'Yes and now is the right time. Even if you sell in Kantin Kwari, Wapa Market, or any local market, registering your business name gives you legal standing, makes you eligible for government contracts and bank loans, and protects your business name from being taken by someone else. A Business Name registration costs ₦35,000 and takes 0–2 days. It is one of the best investments you will make in your business.',
    category: 'General',
  },
  {
    question: 'Can I pay in instalments or use mobile money?',
    answer: 'We accept all major payment methods bank transfer, card payment, and mobile banking. We understand that cash flow matters for small business owners, so reach out to us on WhatsApp and we will work out an arrangement that suits your situation. Our goal is to make registration accessible, not a financial burden.',
    category: 'General',
  },
]

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.category === category)
}

export function getAllCategories(): string[] {
  const categories = new Set(faqs.map((faq) => faq.category))
  return Array.from(categories)
}

export const faqCategories = ['General']
