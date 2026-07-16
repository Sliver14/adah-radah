export interface Service {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  icon: string
  timeline: string
  price?: string
  benefits: string[]
  requirements: string[]
  documents: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
  relatedServices?: string[]
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'business-name-registration',
    title: 'Business Name Registration',
    description: 'Register your business name with the Corporate Affairs Commission (CAC) to operate legally in Nigeria.',
    shortDescription: 'Business name registration in Nigeria is the process of legally registering a business name for the purpose of trading. It can be used by either a sole proprietor or a partnership.',
    icon: 'Building2',
    timeline: '5 working days',
    price: 'From ₦40,000',
    benefits: [
      'Legal recognition of your business',
      'Exclusive rights to your business name',
      'Essential for opening a business bank account',
      'Required for government contracts and licensing',
    ],
    requirements: [
      'Proposed business name (provide 2 options)',
      'Nature of business',
      'Business address',
      'Full name details (Surname, First Name, Other Name)',
      'Residential address',
      'Email address and phone number',
      'Date of birth',
      'Recent photograph',
      'NIN Slip',
      'Signature (signed on plain white paper)',
    ],
    documents: [
      'Business Certificate',
      'CAC Status Report',
    ],
    faqs: [
      {
        question: 'How long does business name registration take?',
        answer: 'Typically 5-7 working days for standard registration.',
      },
      {
        question: 'Can I register a business name that resembles another?',
        answer: 'No, business names must be unique. Ensure your choices are distinctive.',
      },
      {
        question: 'What if my desired business name is already taken?',
        answer: 'Provide alternative names in order of preference. We\'ll register the first available one.',
      },
      {
        question: 'Is business name registration mandatory?',
        answer: 'Yes, it\'s mandatory to operate a business legally in Nigeria.',
      },
      {
        question: 'Can I change my business name later?',
        answer: 'Yes, but you\'ll need to go through the amendment process with CAC.',
      },
    ],
    relatedServices: ['limited-company-registration', 'annual-returns-filing'],
  },
  {
    id: '2',
    slug: 'limited-company-registration',
    title: 'Limited Company Registration',
    description: 'Establish your limited company with legal personality and limited liability protection.',
    shortDescription: 'A Limited Liability Company (LLC) is a Private Company Limited by Shares. It is a distinct legal entity from the owners, ensuring complete protection of personal assets.',
    icon: 'Building',
    timeline: '5 working days',
    price: 'From ₦80,000',
    benefits: [
      'Limited liability protection for shareholders',
      'Separate legal entity distinct from owners',
      'Ability to enter into contracts',
      'Access to corporate financing and loans',
      'Enhanced credibility with clients and partners',
    ],
    requirements: [
      'Proposed company name (provide 2 options)',
      'Nature of business',
      'Business address',
      'Full name details (Surname, First Name, Other Name) of directors/shareholders',
      'Shares allotment details',
      'Residential address',
      'Email address and phone number',
      'Date of birth',
      'NIN Slip (or any other valid Nigerian ID card)',
      'Signature (signed on plain white paper)',
    ],
    documents: [
      'Company Certificate',
      'CAC Status Report',
      'Memorandum of Association',
      'Articles of Association',
    ],
    faqs: [
      {
        question: 'What is the minimum number of shareholders required?',
        answer: 'You need at least 1 shareholder for a limited company.',
      },
      {
        question: 'Can a non-Nigerian be a director?',
        answer: 'Yes, but at least one director must be a Nigerian resident.',
      },
      {
        question: 'What is the share capital requirement?',
        answer: 'There\'s no minimum share capital required for limited companies in Nigeria.',
      },
      {
        question: 'How often must we file annual returns?',
        answer: 'Annual returns must be filed within 60 days of the company\'s anniversary.',
      },
    ],
    relatedServices: ['annual-returns-filing', 'tin-registration'],
  },
  {
    id: '3',
    slug: 'ngo-registration',
    title: 'NGO Registration',
    description: 'Register your non-governmental organization with full legal recognition and tax-exempt status.',
    shortDescription: 'Registration of non-profit organizations including foundations, associations, forums, clubs, charity organizations, and alumni that do not engage in trading goods or services for profit.',
    icon: 'Heart',
    timeline: '6 weeks',
    price: 'From ₦200,000',
    benefits: [
      'Legal recognition as a nonprofit organization',
      'Eligibility for tax exemption',
      'Ability to fundraise and accept donations',
      'Credibility for international partnerships',
      'Access to government grants and support',
    ],
    requirements: [
      'Proposed names (provide 2 options)',
      'List of aims and objectives',
      'Registered office address',
      'Email address',
      'Details of each trustee (First Name, Other Name, Surname, Date of Birth, Email, Phone, Address)',
      'Role designation (President or Secretary only)',
      'Trustee photograph',
      'Valid ID card (NIN/Driver\'s License/International Passport)',
      'Signature (signed on plain white paper)',
    ],
    documents: [
      'Certificate of Incorporation',
      'CAC Status Report',
      'Approved Constitution',
    ],
    faqs: [
      {
        question: 'What\'s the difference between NGO and Incorporated Trustees?',
        answer: 'NGOs operate under the CAC Act while Incorporated Trustees are registered under Trustee Law.',
      },
      {
        question: 'Can an NGO engage in commercial activities?',
        answer: 'Primarily no, but NGOs can engage in ancillary commercial activities to support their mission.',
      },
      {
        question: 'How do we obtain tax-exempt status?',
        answer: 'You must register with the Federal Inland Revenue Service (FIRS) after CAC registration.',
      },
    ],
    relatedServices: ['incorporated-trustees-registration', 'tin-registration'],
  },
  {
    id: '4',
    slug: 'incorporated-trustees-registration',
    title: 'Incorporated Trustees Registration',
    description: 'Register incorporated trustees for managing charitable or community trust purposes.',
    shortDescription: 'Registration of non-profit organizations including foundations, associations, forums, clubs, religious organisations, and alumni that do not engage in trading goods or services for profit.',
    icon: 'Users',
    timeline: '6 weeks',
    price: 'From ₦200,000',
    benefits: [
      'Legal status for managing trust assets',
      'Perpetual succession regardless of member changes',
      'Ability to own property in trust name',
      'Simplified administration of charitable work',
    ],
    requirements: [
      'Proposed names (provide 2 options)',
      'List of aims and objectives',
      'Registered office address',
      'Email address',
      'Details of each trustee (First Name, Other Name, Surname, Date of Birth, Email, Phone, Address)',
      'Role designation (President or Secretary only)',
      'Trustee photograph',
      'Valid ID card (NIN/Driver\'s License/International Passport)',
      'Signature (signed on plain white paper)',
    ],
    documents: [
      'Certificate of Incorporation',
      'CAC Status Report',
      'Approved Constitution',
    ],
    faqs: [
      {
        question: 'How many trustees are required?',
        answer: 'A minimum of 3 trustees are required for incorporated trustees registration.',
      },
      {
        question: 'Can trustees be replaced?',
        answer: 'Yes, trustees can be replaced through a formal amendment process.',
      },
    ],
    relatedServices: ['ngo-registration', 'annual-returns-filing'],
  },
  {
    id: '5',
    slug: 'trademark-registration',
    title: 'Trademark Registration',
    description: 'Protect your brand with official trademark registration from the Nigerian Intellectual Property Office.',
    shortDescription: "Trademark registration is the official process of legally protecting your brand's unique identity. It means getting the government's permission to own your brand assets so that nobody else can copy or use them.",
    icon: 'Shield',
    timeline: '4 weeks',
    price: 'From ₦70,000',
    benefits: [
      'Exclusive rights to use your trademark nationally',
      'Legal protection against infringement',
      'Brand recognition and credibility',
      'Ability to license or transfer the trademark',
      'Foundation for international trademark registration',
    ],
    requirements: [
      'Name of company',
      'Registration Number (if applicable)',
      'Address',
      'Representatives of company',
      'Phone number and email address',
      'Nature of business',
      'Trademark name or logo design',
    ],
    documents: [
      'Trademark Acceptance Letter',
    ],
    faqs: [
      {
        question: 'How long is trademark protection valid?',
        answer: 'Trademark registration is valid for 7 years and renewable for subsequent 7-year periods.',
      },
      {
        question: 'What can be trademarked?',
        answer: 'Words, logos, symbols, sounds, colors, or any distinctive mark identifying your business.',
      },
      {
        question: 'How much does trademark registration cost?',
        answer: 'Starting from ₦70,000 depending on the number of classes and complexity.',
      },
      {
        question: 'Can I register my trademark internationally?',
        answer: 'Yes, after Nigerian registration, you can apply for international trademark protection.',
      },
    ],
    relatedServices: ['business-name-registration'],
  },
  {
    id: '6',
    slug: 'annual-returns-filing',
    title: 'Annual Returns Filing',
    description: 'Stay compliant with mandatory annual returns filing to CAC and maintain your company\'s good standing.',
    shortDescription: 'Annual Returns is a compulsory yearly financial obligation remitted to the Corporate Affairs Commission. Payment is compulsory for all businesses, associations, and religious organisations in Nigeria. The Corporate Affairs Commission has the right to delist defaulting companies.',
    icon: 'FileText',
    timeline: '3 working days',
    price: 'From ₦8,000',
    benefits: [
      'Maintain legal good standing with CAC',
      'Avoid penalties and fines',
      'Keep company registration active',
      'Essential for bank and government transactions',
      'Demonstrate corporate governance',
    ],
    requirements: [
      'CAC Registration Number (RC / BN / IT Number)',
    ],
    documents: [
      'Acknowledgement Letter for filing and payment of Annual Returns (for all years paid)',
    ],
    faqs: [
      {
        question: 'When must annual returns be filed?',
        answer: 'Within 60 days from the anniversary of company incorporation.',
      },
      {
        question: 'What happens if we miss the deadline?',
        answer: 'Late filing penalties apply, starting from ₦500 per day.',
      },
      {
        question: 'Can we file annual returns ourselves?',
        answer: 'Yes, but professional assistance ensures accuracy and on-time filing.',
      },
      {
        question: 'What financial information must be included?',
        answer: 'Annual financial statements including balance sheet and income statement.',
      },
    ],
    relatedServices: ['limited-company-registration', 'annual-returns-filing'],
  },
  {
    id: '7',
    slug: 'tin-registration',
    title: 'TIN Registration',
    description: 'Obtain your Tax Identification Number from the Federal Inland Revenue Service for tax compliance.',
    shortDescription: 'Get your Tax Identification Number (TIN)',
    icon: 'Receipt',
    timeline: '2-3 working days',
    price: 'Free',
    benefits: [
      'Legal requirement for business operations',
      'Enable tax filing and compliance',
      'Required for opening business bank accounts',
      'Necessary for government contracts',
      'Enhanced business credibility',
    ],
    requirements: [
      'Business registration certificate',
      'Valid identification',
      'Business address proof',
      'Bank account details',
    ],
    documents: [
      'Business registration certificate (CAC)',
      'Valid identification',
      'Proof of address',
      'FIRS tax registration form',
    ],
    faqs: [
      {
        question: 'Is TIN registration mandatory?',
        answer: 'Yes, all businesses and individuals with taxable income must register for TIN.',
      },
      {
        question: 'How long does TIN registration take?',
        answer: 'Usually 2-3 working days from application.',
      },
      {
        question: 'Is there a cost for TIN registration?',
        answer: 'No, TIN registration is completely free.',
      },
    ],
    relatedServices: ['limited-company-registration', 'business-name-registration'],
  },
  {
    id: '8',
    slug: 'scuml-registration',
    title: 'SCUML Registration',
    description: 'Register your business under the Special Control Unit on Money Laundering framework.',
    shortDescription: 'Anti-money laundering compliance registration',
    icon: 'Lock',
    timeline: '5-7 working days',
    price: 'From ₦60,000',
    benefits: [
      'Compliance with financial regulations',
      'Access to financial services',
      'Reduced regulatory scrutiny',
      'Enhanced customer trust',
    ],
    requirements: [
      'Business registration certificate',
      'Beneficial ownership structure',
      'Business operations details',
      'Valid identification documents',
    ],
    documents: [
      'CAC registration certificate',
      'Beneficial ownership form',
      'Business operations questionnaire',
      'Director identification',
    ],
    faqs: [
      {
        question: 'Who needs SCUML registration?',
        answer: 'Financial service providers and certain business categories.',
      },
      {
        question: 'What is the registration process timeline?',
        answer: 'Typically 5-7 working days for approval.',
      },
    ],
    relatedServices: ['limited-company-registration', 'tin-registration'],
  },
  {
    id: '9',
    slug: 'nafdac-registration',
    title: 'NAFDAC Registration',
    description: 'Obtain NAFDAC registration for pharmaceutical and food products to ensure consumer safety compliance.',
    shortDescription: 'NAFDAC approval for pharma & food products',
    icon: 'Pill',
    timeline: '30-45 working days',
    price: 'From ₦50,000',
    benefits: [
      'Legal authorization to sell regulated products',
      'Consumer trust and confidence',
      'Access to retail distribution channels',
      'Compliance with health regulations',
    ],
    requirements: [
      'Valid business registration',
      'Product specifications and formulations',
      'Manufacturing facility details',
      'Quality control procedures',
    ],
    documents: [
      'CAC registration certificate',
      'Product certificate from origin country',
      'Quality control documentation',
      'Facility inspection reports',
    ],
    faqs: [
      {
        question: 'Is NAFDAC registration mandatory for all food businesses?',
        answer: 'Yes, all food and pharmaceutical businesses operating in Nigeria require NAFDAC registration.',
      },
      {
        question: 'How long is NAFDAC registration valid?',
        answer: 'NAFDAC registration is typically valid for 2 years and renewable.',
      },
    ],
    relatedServices: ['son-registration', 'business-name-registration'],
  },
  {
    id: '10',
    slug: 'son-registration',
    title: 'SON Registration',
    description: 'Get Standards Organization of Nigeria (SON) certification for compliance with Nigerian product standards.',
    shortDescription: 'SON product standards certification',
    icon: 'CheckCircle',
    timeline: '20-30 working days',
    price: 'From ₦40,000',
    benefits: [
      'Compliance with Nigerian quality standards',
      'Market access and consumer acceptance',
      'Competitive advantage in quality',
      'Reduced product liability issues',
    ],
    requirements: [
      'Business registration certificate',
      'Product samples for testing',
      'Manufacturing process documentation',
      'Quality assurance plans',
    ],
    documents: [
      'CAC registration certificate',
      'Product samples',
      'Manufacturing process documentation',
      'Certificate of Analysis',
    ],
    faqs: [
      {
        question: 'Which products require SON certification?',
        answer: 'Specific product categories require SON certification. Check with SON for your product type.',
      },
      {
        question: 'How long does SON certification take?',
        answer: 'Typically 20-30 working days depending on product category.',
      },
    ],
    relatedServices: ['nafdac-registration', 'business-name-registration'],
  },
  {
    id: '11',
    slug: 'business-advisory',
    title: 'Business Advisory',
    description: 'Get expert guidance on business strategy, compliance, and growth opportunities.',
    shortDescription: 'Expert business consulting and strategy',
    icon: 'Lightbulb',
    timeline: 'Ongoing',
    price: 'From ₦25,000/month',
    benefits: [
      'Strategic business planning',
      'Risk assessment and mitigation',
      'Operational efficiency improvement',
      'Growth strategy development',
    ],
    requirements: [
      'Business documentation',
      'Financial statements',
      'Operational details',
    ],
    documents: [
      'Financial statements',
      'Business plans',
      'Operational procedures',
    ],
    faqs: [
      {
        question: 'What does business advisory cover?',
        answer: 'Strategy development, compliance, growth planning, and operational optimization.',
      },
      {
        question: 'How is advisory structured?',
        answer: 'Monthly retainer, project-based, or on-demand consultation models available.',
      },
    ],
    relatedServices: ['corporate-compliance-services', 'tin-registration'],
  },
  {
    id: '12',
    slug: 'corporate-compliance-services',
    title: 'Corporate Compliance Services',
    description: 'Ensure your company maintains full regulatory compliance with all applicable laws and regulations.',
    shortDescription: 'Comprehensive corporate compliance management',
    icon: 'ClipboardCheck',
    timeline: 'Ongoing',
    price: 'From ₦20,000/month',
    benefits: [
      'Avoid regulatory penalties and fines',
      'Maintain good standing with authorities',
      'Professional governance structure',
      'Reduced legal and operational risks',
    ],
    requirements: [
      'Company policies and procedures',
      'Board meeting records',
      'Compliance documentation',
    ],
    documents: [
      'Company policies',
      'Board resolutions',
      'Compliance checklists',
      'Audit reports',
    ],
    faqs: [
      {
        question: 'What compliance areas do you cover?',
        answer: 'CAC compliance, tax compliance, labor compliance, and industry-specific regulations.',
      },
      {
        question: 'How often do you review compliance?',
        answer: 'Quarterly reviews are recommended, with more frequent checks for critical areas.',
      },
    ],
    relatedServices: ['annual-returns-filing', 'business-advisory'],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug)
  if (!service?.relatedServices) return []
  return service.relatedServices
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s) => s !== undefined) as Service[]
}
