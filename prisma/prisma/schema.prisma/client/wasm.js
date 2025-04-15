
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isSignedUp: 'isSignedUp'
};

exports.Prisma.DepartmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  departmentLeadId: 'departmentLeadId',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JobOpeningScalarFieldEnum = {
  id: 'id',
  internalJobCode: 'internalJobCode',
  postingTitle: 'postingTitle',
  jobTitleId: 'jobTitleId',
  departmentId: 'departmentId',
  hiringManagerId: 'hiringManagerId',
  numberOfVacancies: 'numberOfVacancies',
  industry: 'industry',
  jobType: 'jobType',
  initiationDate: 'initiationDate',
  targetDate: 'targetDate',
  status: 'status',
  salaryRange: 'salaryRange',
  experienceLevel: 'experienceLevel',
  jobLocation: 'jobLocation',
  addressId: 'addressId',
  requirements: 'requirements',
  jobDescription: 'jobDescription',
  benefits: 'benefits',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JobtitleScalarFieldEnum = {
  id: 'id',
  title: 'title'
};

exports.Prisma.JobAddressScalarFieldEnum = {
  id: 'id',
  addressLine: 'addressLine',
  province: 'province',
  region: 'region',
  country: 'country',
  postalCode: 'postalCode'
};

exports.Prisma.JobApplicationQuestionScalarFieldEnum = {
  id: 'id',
  jobOpeningId: 'jobOpeningId',
  questionType: 'questionType',
  AdditionalQuestionType: 'AdditionalQuestionType',
  defaultQuestionType: 'defaultQuestionType',
  question: 'question',
  options: 'options',
  isRequired: 'isRequired',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JobPipelineScalarFieldEnum = {
  id: 'id',
  jobOpeningId: 'jobOpeningId',
  stages: 'stages',
  createdById: 'createdById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

exports.Industries = exports.$Enums.Industries = {
  NONE: 'NONE',
  ADMINISTRATION: 'ADMINISTRATION',
  ADVERTISING: 'ADVERTISING',
  AGRICULTURE: 'AGRICULTURE',
  AGRICULTURE_CONSTRUCTION: 'AGRICULTURE_CONSTRUCTION',
  ARTS_GRAPHICS: 'ARTS_GRAPHICS',
  AIRLINE_AVIATION: 'AIRLINE_AVIATION',
  ACCOUNTING: 'ACCOUNTING',
  AUTOMOTIVE: 'AUTOMOTIVE',
  BANKING: 'BANKING',
  BIOTECHNOLOGY: 'BIOTECHNOLOGY',
  BROADCASTING: 'BROADCASTING',
  BUSINESS_MANAGEMENT: 'BUSINESS_MANAGEMENT',
  CHARITY: 'CHARITY',
  CATERING: 'CATERING',
  CUSTOMER_SERVICE: 'CUSTOMER_SERVICE',
  CHEMICALS: 'CHEMICALS',
  CONSTRUCTION: 'CONSTRUCTION',
  COMMUNICATIONS: 'COMMUNICATIONS',
  CONSULTING: 'CONSULTING',
  COMPUTER: 'COMPUTER',
  CONSUMER: 'CONSUMER',
  COSMETICS: 'COSMETICS',
  DESIGN: 'DESIGN',
  DEFENCE: 'DEFENCE',
  EDUCATION: 'EDUCATION',
  ELECTRONICS: 'ELECTRONICS',
  ENGINEERING: 'ENGINEERING',
  EMPLOYMENT_RECRUITING_STAFFING: 'EMPLOYMENT_RECRUITING_STAFFING',
  ENVIRONMENTAL: 'ENVIRONMENTAL',
  EXERCISE_FITNESS: 'EXERCISE_FITNESS',
  EXPORT_IMPORT: 'EXPORT_IMPORT',
  FINANCIAL_SERVICES: 'FINANCIAL_SERVICES',
  FASHION: 'FASHION',
  FMCG_FOODS_BEVERAGE: 'FMCG_FOODS_BEVERAGE',
  FERTILIZERS_PESTICIDES: 'FERTILIZERS_PESTICIDES',
  FURNITURE: 'FURNITURE',
  GROCERY: 'GROCERY',
  GAS: 'GAS',
  GOVERNMENT: 'GOVERNMENT',
  GOVERNMENT_MILITARY: 'GOVERNMENT_MILITARY',
  GOVERMENT_PUBLIC_SECTOR: 'GOVERMENT_PUBLIC_SECTOR',
  GEMS_JEWELLERY: 'GEMS_JEWELLERY',
  HEALTH_CARE: 'HEALTH_CARE',
  HUMAN_RESOURCES: 'HUMAN_RESOURCES',
  HOSPITALITY: 'HOSPITALITY',
  HOTELS_LODGING: 'HOTELS_LODGING',
  HVAC: 'HVAC',
  HARDWARE: 'HARDWARE',
  INSURANCE: 'INSURANCE',
  INSTALLATION: 'INSTALLATION',
  IT_SERVICES: 'IT_SERVICES',
  INDUSTRIAL: 'INDUSTRIAL',
  INTERNET_SERVICES: 'INTERNET_SERVICES',
  IMPORT_EXPORT: 'IMPORT_EXPORT',
  LEGAL: 'LEGAL',
  LOGISTICS: 'LOGISTICS',
  LANDSCAPING: 'LANDSCAPING',
  LEISURE_SPORT: 'LEISURE_SPORT',
  LIBRARY_SCIENCE: 'LIBRARY_SCIENCE',
  MARKETING: 'MARKETING',
  MANUFACTURING: 'MANUFACTURING',
  MANAGEMENT: 'MANAGEMENT',
  MERCHANDISING: 'MERCHANDISING',
  MEDICAL: 'MEDICAL',
  MEDIA: 'MEDIA',
  METALS: 'METALS',
  MINING: 'MINING',
  MILITARY: 'MILITARY',
  MORTGAGE: 'MORTGAGE',
  MARINE: 'MARINE',
  MARITIME: 'MARITIME',
  NONPROFIT_CHARITABLE_ORGANIZATIONS: 'NONPROFIT_CHARITABLE_ORGANIZATIONS',
  NGO_SOCIAL_SERVICES: 'NGO_SOCIAL_SERVICES',
  NEWSPAPER: 'NEWSPAPER',
  OIL_GAS: 'OIL_GAS',
  OTHER: 'OTHER',
  OTHER_NOT_CLASSIFIED: 'OTHER_NOT_CLASSIFIED',
  PHARMA: 'PHARMA',
  POLYMER_PLASTIC_RUBBER: 'POLYMER_PLASTIC_RUBBER',
  PHARMA_BIOTECH_CLINICAL_RESEARCH: 'PHARMA_BIOTECH_CLINICAL_RESEARCH',
  PUBLIC_SECTOR_GOVERNMENT: 'PUBLIC_SECTOR_GOVERNMENT',
  PRINTING_PACKAGING_PUBLISHING: 'PRINTING_PACKAGING_PUBLISHING',
  PERSONAL_HOUSEHOLD_SERVICES: 'PERSONAL_HOUSEHOLD_SERVICES',
  PROPERTY_REAL_ESTATE: 'PROPERTY_REAL_ESTATE',
  PAPER: 'PAPER',
  PET_STORE: 'PET_STORE',
  PUBLIC_RELATIONS: 'PUBLIC_RELATIONS',
  REAL_ESTATE: 'REAL_ESTATE',
  RETAIL: 'RETAIL',
  RETAIL_WHOLESALE: 'RETAIL_WHOLESALE',
  RECREATION: 'RECREATION',
  REAL_ESTATE_PROPERTY: 'REAL_ESTATE_PROPERTY',
  RECRUITMENT_EMPLOYMENT_FIRM: 'RECRUITMENT_EMPLOYMENT_FIRM',
  REAL_ESTATE_PROPERTY_MANAGEMENT: 'REAL_ESTATE_PROPERTY_MANAGEMENT',
  RESTAURANT_FOOD_SERVICES: 'RESTAURANT_FOOD_SERVICES',
  RENTAL_SERVICES: 'RENTAL_SERVICES',
  RESEARCH_DEVELOPMENT: 'RESEARCH_DEVELOPMENT',
  REPAIR_MAINTENANCE_SERVICES: 'REPAIR_MAINTENANCE_SERVICES',
  SERVICES: 'SERVICES',
  SALES_MARKETING: 'SALES_MARKETING',
  SCIENCE_TECHNOLOGY: 'SCIENCE_TECHNOLOGY',
  SECURITY_LAW_ENFORCEMENT: 'SECURITY_LAW_ENFORCEMENT',
  SHIPPING_MARINE: 'SHIPPING_MARINE',
  SECURITY_SURVEILLANCE: 'SECURITY_SURVEILLANCE',
  SPORTS_PHYSICAL_RECREATION: 'SPORTS_PHYSICAL_RECREATION',
  STAFFING_EMPLOYMENT_AGENCIES: 'STAFFING_EMPLOYMENT_AGENCIES',
  SOCIAL_SERVICES: 'SOCIAL_SERVICES',
  SPORTS_LEISURE_LIFESTYLE: 'SPORTS_LEISURE_LIFESTYLE',
  SEMICONDUCTOR: 'SEMICONDUCTOR',
  TECHNOLOGY: 'TECHNOLOGY',
  SERVICES_CORPORATE_B2B: 'SERVICES_CORPORATE_B2B',
  TRAVEL: 'TRAVEL',
  TRAINING: 'TRAINING',
  TRANSPORTATION: 'TRANSPORTATION',
  TELECOMMUNICATIONS: 'TELECOMMUNICATIONS',
  TRADE_SERVICES: 'TRADE_SERVICES',
  TRAVEL_TOURISM: 'TRAVEL_TOURISM',
  TEXTILES_GARMENTS_ACCESSORIES: 'TEXTILES_GARMENTS_ACCESSORIES',
  TYRES: 'TYRES',
  UTILITIES: 'UTILITIES',
  WIRELESS: 'WIRELESS',
  WOOD_FIBRE_PAPER: 'WOOD_FIBRE_PAPER',
  WASTE_MANAGEMENT: 'WASTE_MANAGEMENT',
  WHOLESALE_TRADE_IMPORT_EXPORT: 'WHOLESALE_TRADE_IMPORT_EXPORT'
};

exports.JobType = exports.$Enums.JobType = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  PERMANENT: 'PERMANENT',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  ANY: 'ANY'
};

exports.JobOpeningStatus = exports.$Enums.JobOpeningStatus = {
  DRAFT: 'DRAFT',
  OPEN: 'OPEN',
  ON_HOLD: 'ON_HOLD',
  FILLED: 'FILLED',
  CANCELLED: 'CANCELLED',
  CLOSED: 'CLOSED'
};

exports.WorkExperience = exports.$Enums.WorkExperience = {
  NONE: 'NONE',
  FRESHER: 'FRESHER',
  ZERO_TO_ONE_YEAR: 'ZERO_TO_ONE_YEAR',
  ONE_TO_TWO_YEARS: 'ONE_TO_TWO_YEARS',
  TWO_TO_THREE_YEARS: 'TWO_TO_THREE_YEARS',
  FIVE_PLUS_YEARS: 'FIVE_PLUS_YEARS'
};

exports.JobLocation = exports.$Enums.JobLocation = {
  REMOTE: 'REMOTE',
  ONSITE: 'ONSITE',
  HYBRID: 'HYBRID'
};

exports.ApplicationQuestionType = exports.$Enums.ApplicationQuestionType = {
  DEFAULT: 'DEFAULT',
  ADDITIONAL: 'ADDITIONAL'
};

exports.AppplicationAdditionalQuestionType = exports.$Enums.AppplicationAdditionalQuestionType = {
  SHORT_ANSWER: 'SHORT_ANSWER',
  LONG_ANSWER: 'LONG_ANSWER',
  YES_NO: 'YES_NO',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  FILE_UPLOAD: 'FILE_UPLOAD'
};

exports.ApplicationDefaultQuestionType = exports.$Enums.ApplicationDefaultQuestionType = {
  RESUME: 'RESUME',
  COVER_LETTER: 'COVER_LETTER',
  HIGHER_EDUCATION: 'HIGHER_EDUCATION',
  DESIRED_SALARY: 'DESIRED_SALARY',
  ADDRESS: 'ADDRESS',
  LINKEDIN_URL: 'LINKEDIN_URL',
  COLLEGE_UNIVERSITY: 'COLLEGE_UNIVERSITY',
  CURRENT_COMPANY_NAME: 'CURRENT_COMPANY_NAME',
  REFFERED_BY: 'REFFERED_BY',
  WEBSITE_PORTFOLIO: 'WEBSITE_PORTFOLIO'
};

exports.Prisma.ModelName = {
  User: 'User',
  Department: 'Department',
  JobOpening: 'JobOpening',
  Jobtitle: 'Jobtitle',
  JobAddress: 'JobAddress',
  JobApplicationQuestion: 'JobApplicationQuestion',
  JobPipeline: 'JobPipeline'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
