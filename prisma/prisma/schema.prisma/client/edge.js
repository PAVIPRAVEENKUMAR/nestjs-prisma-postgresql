
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

exports.JobOpeningStatus = exports.$Enums.JobOpeningStatus = {
  DRAFT: 'DRAFT',
  OPEN: 'OPEN',
  ON_HOLD: 'ON_HOLD',
  FILLED: 'FILLED',
  CANCELLED: 'CANCELLED',
  CLOSED: 'CLOSED'
};

exports.JobType = exports.$Enums.JobType = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  PERMANENT: 'PERMANENT',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  ANY: 'ANY'
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

exports.JobPipelineStageType = exports.$Enums.JobPipelineStageType = {
  NEW: 'NEW',
  RESUME_SHORTLIST: 'RESUME_SHORTLIST',
  PHONE_SCREEN: 'PHONE_SCREEN',
  INTERVIEW: 'INTERVIEW',
  APTITUDE_ONLIE_ASSESSMENT: 'APTITUDE_ONLIE_ASSESSMENT',
  TECHNICAL_INTERVIEW_R_1: 'TECHNICAL_INTERVIEW_R_1',
  TECHNICAL_INTERVIEW_R_2: 'TECHNICAL_INTERVIEW_R_2',
  MANAGERIAL_INTERVIEW: 'MANAGERIAL_INTERVIEW',
  HR_INTERVIEW: 'HR_INTERVIEW',
  OFFER: 'OFFER',
  HIRED: 'HIRED'
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\HP\\OneDrive\\Desktop\\Development\\Production\\Backend\\nest-prisma-app\\prisma\\prisma\\schema.prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\HP\\OneDrive\\Desktop\\Development\\Production\\Backend\\nest-prisma-app\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../..",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"prisma/schema.prisma/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id         String   @id @default(uuid())\n  name       String\n  email      String   @unique\n  password   String\n  role       UserRole\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n  isSignedUp Boolean  @default(false)\n\n  departmentsLed     Department[] @relation(\"DepartmentLead\")\n  departmentsCreated Department[] @relation(\"DepartmentCreator\")\n\n  jobOpenings JobOpening[] @relation(\"HiringManager\")\n\n  assignedJobs JobOpening[]  @relation(\"AssignedRecruiters\")\n  JobPipeline  JobPipeline[]\n}\n\nmodel Department {\n  id               String       @id @default(uuid())\n  name             String       @unique\n  departmentLeadId String\n  departmentLead   User         @relation(\"DepartmentLead\", fields: [departmentLeadId], references: [id])\n  createdById      String\n  createdBy        User         @relation(\"DepartmentCreator\", fields: [createdById], references: [id])\n  createdAt        DateTime     @default(now())\n  updatedAt        DateTime     @updatedAt\n  JobOpening       JobOpening[]\n}\n\nenum UserRole {\n  ADMIN\n  STAFF\n}\n\nmodel JobOpening {\n  id                   String                   @id @default(uuid())\n  internalJobCode      String\n  postingTitle         String                   @unique\n  jobTitleId           Int?\n  jobTitle             Jobtitle?                @relation(fields: [jobTitleId], references: [id])\n  departmentId         String\n  department           Department               @relation(fields: [departmentId], references: [id])\n  assignedRecruiters   User[]                   @relation(\"AssignedRecruiters\")\n  hiringManagerId      String\n  hiringManager        User                     @relation(\"HiringManager\", fields: [hiringManagerId], references: [id])\n  numberOfVacancies    Int?\n  industry             Industries               @default(NONE)\n  jobType              JobType                  @default(FULL_TIME)\n  initiationDate       DateTime?\n  targetDate           DateTime?\n  status               JobOpeningStatus         @default(DRAFT)\n  salaryRange          String?\n  experienceLevel      WorkExperience           @default(NONE)\n  jobLocation          JobLocation              @default(ONSITE)\n  addressId            Int?\n  address              JobAddress?              @relation(fields: [addressId], references: [id])\n  requirements         String?\n  jobDescription       String?\n  benefits             String?\n  applicationQuestions JobApplicationQuestion[]\n  pipeline             JobPipeline?\n  createdAt            DateTime                 @default(now())\n  updatedAt            DateTime                 @updatedAt\n}\n\nmodel Jobtitle {\n  id          Int          @id @default(autoincrement())\n  title       String\n  jobOpenings JobOpening[]\n}\n\nmodel JobAddress {\n  id          Int          @id @default(autoincrement())\n  addressLine String\n  province    String?\n  region      String?\n  country     String?\n  postalCode  String?\n  JobOpening  JobOpening[]\n}\n\nmodel JobApplicationQuestion {\n  id           Int        @id @default(autoincrement())\n  jobOpening   JobOpening @relation(fields: [jobOpeningId], references: [id])\n  jobOpeningId String\n\n  questionType           ApplicationQuestionType?\n  AdditionalQuestionType AppplicationAdditionalQuestionType?\n  defaultQuestionType    ApplicationDefaultQuestionType?\n\n  question   String\n  options    String[] @default([])\n  isRequired Boolean  @default(false)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel JobPipeline {\n  id           String     @id @default(uuid())\n  jobOpening   JobOpening @relation(fields: [jobOpeningId], references: [id])\n  jobOpeningId String     @unique\n\n  stages      Json\n  createdBy   User   @relation(fields: [createdById], references: [id])\n  createdById String\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nenum JobOpeningStatus {\n  DRAFT\n  OPEN\n  ON_HOLD\n  FILLED\n  CANCELLED\n  CLOSED\n}\n\nenum JobType {\n  FULL_TIME\n  PART_TIME\n  PERMANENT\n  CONTRACT\n  INTERNSHIP\n  ANY\n}\n\nenum WorkExperience {\n  NONE\n  FRESHER\n  ZERO_TO_ONE_YEAR\n  ONE_TO_TWO_YEARS\n  TWO_TO_THREE_YEARS\n  FIVE_PLUS_YEARS\n}\n\nenum JobLocation {\n  REMOTE\n  ONSITE\n  HYBRID\n}\n\nenum ApplicationQuestionType {\n  DEFAULT\n  ADDITIONAL\n}\n\nenum AppplicationAdditionalQuestionType {\n  SHORT_ANSWER\n  LONG_ANSWER\n  YES_NO\n  MULTIPLE_CHOICE\n  FILE_UPLOAD\n}\n\nenum ApplicationDefaultQuestionType {\n  RESUME\n  COVER_LETTER\n  HIGHER_EDUCATION\n  DESIRED_SALARY\n  ADDRESS\n  LINKEDIN_URL\n  COLLEGE_UNIVERSITY\n  CURRENT_COMPANY_NAME\n  REFFERED_BY\n  WEBSITE_PORTFOLIO\n}\n\nenum JobPipelineStageType {\n  NEW\n  RESUME_SHORTLIST\n  PHONE_SCREEN\n  INTERVIEW\n  APTITUDE_ONLIE_ASSESSMENT\n  TECHNICAL_INTERVIEW_R_1\n  TECHNICAL_INTERVIEW_R_2\n  MANAGERIAL_INTERVIEW\n  HR_INTERVIEW\n  OFFER\n  HIRED\n}\n\nenum Industries {\n  NONE\n  ADMINISTRATION\n  ADVERTISING\n  AGRICULTURE\n  AGRICULTURE_CONSTRUCTION\n  ARTS_GRAPHICS\n  AIRLINE_AVIATION\n  ACCOUNTING\n  AUTOMOTIVE\n  BANKING\n  BIOTECHNOLOGY\n  BROADCASTING\n  BUSINESS_MANAGEMENT\n  CHARITY\n  CATERING\n  CUSTOMER_SERVICE\n  CHEMICALS\n  CONSTRUCTION\n  COMMUNICATIONS\n  CONSULTING\n  COMPUTER\n  CONSUMER\n  COSMETICS\n  DESIGN\n  DEFENCE\n  EDUCATION\n  ELECTRONICS\n  ENGINEERING\n  EMPLOYMENT_RECRUITING_STAFFING\n  ENVIRONMENTAL\n  EXERCISE_FITNESS\n  EXPORT_IMPORT\n  FINANCIAL_SERVICES\n  FASHION\n  FMCG_FOODS_BEVERAGE\n  FERTILIZERS_PESTICIDES\n  FURNITURE\n  GROCERY\n  GAS\n  GOVERNMENT\n  GOVERNMENT_MILITARY\n  GOVERMENT_PUBLIC_SECTOR\n  GEMS_JEWELLERY\n  HEALTH_CARE\n  HUMAN_RESOURCES\n  HOSPITALITY\n  HOTELS_LODGING\n  HVAC\n  HARDWARE\n  INSURANCE\n  INSTALLATION\n  IT_SERVICES\n  INDUSTRIAL\n  INTERNET_SERVICES\n  IMPORT_EXPORT\n  LEGAL\n  LOGISTICS\n  LANDSCAPING\n  LEISURE_SPORT\n  LIBRARY_SCIENCE\n  MARKETING\n  MANUFACTURING\n  MANAGEMENT\n  MERCHANDISING\n  MEDICAL\n  MEDIA\n  METALS\n  MINING\n  MILITARY\n  MORTGAGE\n  MARINE\n  MARITIME\n  NONPROFIT_CHARITABLE_ORGANIZATIONS\n  NGO_SOCIAL_SERVICES\n  NEWSPAPER\n  OIL_GAS\n  OTHER\n  OTHER_NOT_CLASSIFIED\n  PHARMA\n  POLYMER_PLASTIC_RUBBER\n  PHARMA_BIOTECH_CLINICAL_RESEARCH\n  PUBLIC_SECTOR_GOVERNMENT\n  PRINTING_PACKAGING_PUBLISHING\n  PERSONAL_HOUSEHOLD_SERVICES\n  PROPERTY_REAL_ESTATE\n  PAPER\n  PET_STORE\n  PUBLIC_RELATIONS\n  REAL_ESTATE\n  RETAIL\n  RETAIL_WHOLESALE\n  RECREATION\n  REAL_ESTATE_PROPERTY\n  RECRUITMENT_EMPLOYMENT_FIRM\n  REAL_ESTATE_PROPERTY_MANAGEMENT\n  RESTAURANT_FOOD_SERVICES\n  RENTAL_SERVICES\n  RESEARCH_DEVELOPMENT\n  REPAIR_MAINTENANCE_SERVICES\n  SERVICES\n  SALES_MARKETING\n  SCIENCE_TECHNOLOGY\n  SECURITY_LAW_ENFORCEMENT\n  SHIPPING_MARINE\n  SECURITY_SURVEILLANCE\n  SPORTS_PHYSICAL_RECREATION\n  STAFFING_EMPLOYMENT_AGENCIES\n  SOCIAL_SERVICES\n  SPORTS_LEISURE_LIFESTYLE\n  SEMICONDUCTOR\n  TECHNOLOGY\n  SERVICES_CORPORATE_B2B\n  TRAVEL\n  TRAINING\n  TRANSPORTATION\n  TELECOMMUNICATIONS\n  TRADE_SERVICES\n  TRAVEL_TOURISM\n  TEXTILES_GARMENTS_ACCESSORIES\n  TYRES\n  UTILITIES\n  WIRELESS\n  WOOD_FIBRE_PAPER\n  WASTE_MANAGEMENT\n  WHOLESALE_TRADE_IMPORT_EXPORT\n}\n",
  "inlineSchemaHash": "69c70aa877c64df4667487ed5c98baaa8127098e430f069b6d3327c75548e96d",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserRole\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isSignedUp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departmentsLed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Department\",\"nativeType\":null,\"relationName\":\"DepartmentLead\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departmentsCreated\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Department\",\"nativeType\":null,\"relationName\":\"DepartmentCreator\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobOpenings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobOpening\",\"nativeType\":null,\"relationName\":\"HiringManager\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedJobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobOpening\",\"nativeType\":null,\"relationName\":\"AssignedRecruiters\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JobPipeline\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobPipeline\",\"nativeType\":null,\"relationName\":\"JobPipelineToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Department\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departmentLeadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departmentLead\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"DepartmentLead\",\"relationFromFields\":[\"departmentLeadId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"DepartmentCreator\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"JobOpening\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobOpening\",\"nativeType\":null,\"relationName\":\"DepartmentToJobOpening\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JobOpening\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"internalJobCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postingTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobTitleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobTitle\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Jobtitle\",\"nativeType\":null,\"relationName\":\"JobOpeningToJobtitle\",\"relationFromFields\":[\"jobTitleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Department\",\"nativeType\":null,\"relationName\":\"DepartmentToJobOpening\",\"relationFromFields\":[\"departmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedRecruiters\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"AssignedRecruiters\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hiringManagerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hiringManager\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"HiringManager\",\"relationFromFields\":[\"hiringManagerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numberOfVacancies\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Industries\",\"nativeType\":null,\"default\":\"NONE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"JobType\",\"nativeType\":null,\"default\":\"FULL_TIME\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"initiationDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"JobOpeningStatus\",\"nativeType\":null,\"default\":\"DRAFT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salaryRange\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"experienceLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WorkExperience\",\"nativeType\":null,\"default\":\"NONE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobLocation\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"JobLocation\",\"nativeType\":null,\"default\":\"ONSITE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobAddress\",\"nativeType\":null,\"relationName\":\"JobAddressToJobOpening\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requirements\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"benefits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applicationQuestions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobApplicationQuestion\",\"nativeType\":null,\"relationName\":\"JobApplicationQuestionToJobOpening\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pipeline\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobPipeline\",\"nativeType\":null,\"relationName\":\"JobOpeningToJobPipeline\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Jobtitle\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobOpenings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobOpening\",\"nativeType\":null,\"relationName\":\"JobOpeningToJobtitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JobAddress\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressLine\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postalCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JobOpening\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobOpening\",\"nativeType\":null,\"relationName\":\"JobAddressToJobOpening\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JobApplicationQuestion\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobOpening\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobOpening\",\"nativeType\":null,\"relationName\":\"JobApplicationQuestionToJobOpening\",\"relationFromFields\":[\"jobOpeningId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobOpeningId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApplicationQuestionType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AdditionalQuestionType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AppplicationAdditionalQuestionType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"defaultQuestionType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApplicationDefaultQuestionType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"options\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRequired\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"JobPipeline\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobOpening\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JobOpening\",\"nativeType\":null,\"relationName\":\"JobOpeningToJobPipeline\",\"relationFromFields\":[\"jobOpeningId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobOpeningId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stages\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"JobPipelineToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserRole\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"STAFF\",\"dbName\":null}],\"dbName\":null},\"JobOpeningStatus\":{\"values\":[{\"name\":\"DRAFT\",\"dbName\":null},{\"name\":\"OPEN\",\"dbName\":null},{\"name\":\"ON_HOLD\",\"dbName\":null},{\"name\":\"FILLED\",\"dbName\":null},{\"name\":\"CANCELLED\",\"dbName\":null},{\"name\":\"CLOSED\",\"dbName\":null}],\"dbName\":null},\"JobType\":{\"values\":[{\"name\":\"FULL_TIME\",\"dbName\":null},{\"name\":\"PART_TIME\",\"dbName\":null},{\"name\":\"PERMANENT\",\"dbName\":null},{\"name\":\"CONTRACT\",\"dbName\":null},{\"name\":\"INTERNSHIP\",\"dbName\":null},{\"name\":\"ANY\",\"dbName\":null}],\"dbName\":null},\"WorkExperience\":{\"values\":[{\"name\":\"NONE\",\"dbName\":null},{\"name\":\"FRESHER\",\"dbName\":null},{\"name\":\"ZERO_TO_ONE_YEAR\",\"dbName\":null},{\"name\":\"ONE_TO_TWO_YEARS\",\"dbName\":null},{\"name\":\"TWO_TO_THREE_YEARS\",\"dbName\":null},{\"name\":\"FIVE_PLUS_YEARS\",\"dbName\":null}],\"dbName\":null},\"JobLocation\":{\"values\":[{\"name\":\"REMOTE\",\"dbName\":null},{\"name\":\"ONSITE\",\"dbName\":null},{\"name\":\"HYBRID\",\"dbName\":null}],\"dbName\":null},\"ApplicationQuestionType\":{\"values\":[{\"name\":\"DEFAULT\",\"dbName\":null},{\"name\":\"ADDITIONAL\",\"dbName\":null}],\"dbName\":null},\"AppplicationAdditionalQuestionType\":{\"values\":[{\"name\":\"SHORT_ANSWER\",\"dbName\":null},{\"name\":\"LONG_ANSWER\",\"dbName\":null},{\"name\":\"YES_NO\",\"dbName\":null},{\"name\":\"MULTIPLE_CHOICE\",\"dbName\":null},{\"name\":\"FILE_UPLOAD\",\"dbName\":null}],\"dbName\":null},\"ApplicationDefaultQuestionType\":{\"values\":[{\"name\":\"RESUME\",\"dbName\":null},{\"name\":\"COVER_LETTER\",\"dbName\":null},{\"name\":\"HIGHER_EDUCATION\",\"dbName\":null},{\"name\":\"DESIRED_SALARY\",\"dbName\":null},{\"name\":\"ADDRESS\",\"dbName\":null},{\"name\":\"LINKEDIN_URL\",\"dbName\":null},{\"name\":\"COLLEGE_UNIVERSITY\",\"dbName\":null},{\"name\":\"CURRENT_COMPANY_NAME\",\"dbName\":null},{\"name\":\"REFFERED_BY\",\"dbName\":null},{\"name\":\"WEBSITE_PORTFOLIO\",\"dbName\":null}],\"dbName\":null},\"JobPipelineStageType\":{\"values\":[{\"name\":\"NEW\",\"dbName\":null},{\"name\":\"RESUME_SHORTLIST\",\"dbName\":null},{\"name\":\"PHONE_SCREEN\",\"dbName\":null},{\"name\":\"INTERVIEW\",\"dbName\":null},{\"name\":\"APTITUDE_ONLIE_ASSESSMENT\",\"dbName\":null},{\"name\":\"TECHNICAL_INTERVIEW_R_1\",\"dbName\":null},{\"name\":\"TECHNICAL_INTERVIEW_R_2\",\"dbName\":null},{\"name\":\"MANAGERIAL_INTERVIEW\",\"dbName\":null},{\"name\":\"HR_INTERVIEW\",\"dbName\":null},{\"name\":\"OFFER\",\"dbName\":null},{\"name\":\"HIRED\",\"dbName\":null}],\"dbName\":null},\"Industries\":{\"values\":[{\"name\":\"NONE\",\"dbName\":null},{\"name\":\"ADMINISTRATION\",\"dbName\":null},{\"name\":\"ADVERTISING\",\"dbName\":null},{\"name\":\"AGRICULTURE\",\"dbName\":null},{\"name\":\"AGRICULTURE_CONSTRUCTION\",\"dbName\":null},{\"name\":\"ARTS_GRAPHICS\",\"dbName\":null},{\"name\":\"AIRLINE_AVIATION\",\"dbName\":null},{\"name\":\"ACCOUNTING\",\"dbName\":null},{\"name\":\"AUTOMOTIVE\",\"dbName\":null},{\"name\":\"BANKING\",\"dbName\":null},{\"name\":\"BIOTECHNOLOGY\",\"dbName\":null},{\"name\":\"BROADCASTING\",\"dbName\":null},{\"name\":\"BUSINESS_MANAGEMENT\",\"dbName\":null},{\"name\":\"CHARITY\",\"dbName\":null},{\"name\":\"CATERING\",\"dbName\":null},{\"name\":\"CUSTOMER_SERVICE\",\"dbName\":null},{\"name\":\"CHEMICALS\",\"dbName\":null},{\"name\":\"CONSTRUCTION\",\"dbName\":null},{\"name\":\"COMMUNICATIONS\",\"dbName\":null},{\"name\":\"CONSULTING\",\"dbName\":null},{\"name\":\"COMPUTER\",\"dbName\":null},{\"name\":\"CONSUMER\",\"dbName\":null},{\"name\":\"COSMETICS\",\"dbName\":null},{\"name\":\"DESIGN\",\"dbName\":null},{\"name\":\"DEFENCE\",\"dbName\":null},{\"name\":\"EDUCATION\",\"dbName\":null},{\"name\":\"ELECTRONICS\",\"dbName\":null},{\"name\":\"ENGINEERING\",\"dbName\":null},{\"name\":\"EMPLOYMENT_RECRUITING_STAFFING\",\"dbName\":null},{\"name\":\"ENVIRONMENTAL\",\"dbName\":null},{\"name\":\"EXERCISE_FITNESS\",\"dbName\":null},{\"name\":\"EXPORT_IMPORT\",\"dbName\":null},{\"name\":\"FINANCIAL_SERVICES\",\"dbName\":null},{\"name\":\"FASHION\",\"dbName\":null},{\"name\":\"FMCG_FOODS_BEVERAGE\",\"dbName\":null},{\"name\":\"FERTILIZERS_PESTICIDES\",\"dbName\":null},{\"name\":\"FURNITURE\",\"dbName\":null},{\"name\":\"GROCERY\",\"dbName\":null},{\"name\":\"GAS\",\"dbName\":null},{\"name\":\"GOVERNMENT\",\"dbName\":null},{\"name\":\"GOVERNMENT_MILITARY\",\"dbName\":null},{\"name\":\"GOVERMENT_PUBLIC_SECTOR\",\"dbName\":null},{\"name\":\"GEMS_JEWELLERY\",\"dbName\":null},{\"name\":\"HEALTH_CARE\",\"dbName\":null},{\"name\":\"HUMAN_RESOURCES\",\"dbName\":null},{\"name\":\"HOSPITALITY\",\"dbName\":null},{\"name\":\"HOTELS_LODGING\",\"dbName\":null},{\"name\":\"HVAC\",\"dbName\":null},{\"name\":\"HARDWARE\",\"dbName\":null},{\"name\":\"INSURANCE\",\"dbName\":null},{\"name\":\"INSTALLATION\",\"dbName\":null},{\"name\":\"IT_SERVICES\",\"dbName\":null},{\"name\":\"INDUSTRIAL\",\"dbName\":null},{\"name\":\"INTERNET_SERVICES\",\"dbName\":null},{\"name\":\"IMPORT_EXPORT\",\"dbName\":null},{\"name\":\"LEGAL\",\"dbName\":null},{\"name\":\"LOGISTICS\",\"dbName\":null},{\"name\":\"LANDSCAPING\",\"dbName\":null},{\"name\":\"LEISURE_SPORT\",\"dbName\":null},{\"name\":\"LIBRARY_SCIENCE\",\"dbName\":null},{\"name\":\"MARKETING\",\"dbName\":null},{\"name\":\"MANUFACTURING\",\"dbName\":null},{\"name\":\"MANAGEMENT\",\"dbName\":null},{\"name\":\"MERCHANDISING\",\"dbName\":null},{\"name\":\"MEDICAL\",\"dbName\":null},{\"name\":\"MEDIA\",\"dbName\":null},{\"name\":\"METALS\",\"dbName\":null},{\"name\":\"MINING\",\"dbName\":null},{\"name\":\"MILITARY\",\"dbName\":null},{\"name\":\"MORTGAGE\",\"dbName\":null},{\"name\":\"MARINE\",\"dbName\":null},{\"name\":\"MARITIME\",\"dbName\":null},{\"name\":\"NONPROFIT_CHARITABLE_ORGANIZATIONS\",\"dbName\":null},{\"name\":\"NGO_SOCIAL_SERVICES\",\"dbName\":null},{\"name\":\"NEWSPAPER\",\"dbName\":null},{\"name\":\"OIL_GAS\",\"dbName\":null},{\"name\":\"OTHER\",\"dbName\":null},{\"name\":\"OTHER_NOT_CLASSIFIED\",\"dbName\":null},{\"name\":\"PHARMA\",\"dbName\":null},{\"name\":\"POLYMER_PLASTIC_RUBBER\",\"dbName\":null},{\"name\":\"PHARMA_BIOTECH_CLINICAL_RESEARCH\",\"dbName\":null},{\"name\":\"PUBLIC_SECTOR_GOVERNMENT\",\"dbName\":null},{\"name\":\"PRINTING_PACKAGING_PUBLISHING\",\"dbName\":null},{\"name\":\"PERSONAL_HOUSEHOLD_SERVICES\",\"dbName\":null},{\"name\":\"PROPERTY_REAL_ESTATE\",\"dbName\":null},{\"name\":\"PAPER\",\"dbName\":null},{\"name\":\"PET_STORE\",\"dbName\":null},{\"name\":\"PUBLIC_RELATIONS\",\"dbName\":null},{\"name\":\"REAL_ESTATE\",\"dbName\":null},{\"name\":\"RETAIL\",\"dbName\":null},{\"name\":\"RETAIL_WHOLESALE\",\"dbName\":null},{\"name\":\"RECREATION\",\"dbName\":null},{\"name\":\"REAL_ESTATE_PROPERTY\",\"dbName\":null},{\"name\":\"RECRUITMENT_EMPLOYMENT_FIRM\",\"dbName\":null},{\"name\":\"REAL_ESTATE_PROPERTY_MANAGEMENT\",\"dbName\":null},{\"name\":\"RESTAURANT_FOOD_SERVICES\",\"dbName\":null},{\"name\":\"RENTAL_SERVICES\",\"dbName\":null},{\"name\":\"RESEARCH_DEVELOPMENT\",\"dbName\":null},{\"name\":\"REPAIR_MAINTENANCE_SERVICES\",\"dbName\":null},{\"name\":\"SERVICES\",\"dbName\":null},{\"name\":\"SALES_MARKETING\",\"dbName\":null},{\"name\":\"SCIENCE_TECHNOLOGY\",\"dbName\":null},{\"name\":\"SECURITY_LAW_ENFORCEMENT\",\"dbName\":null},{\"name\":\"SHIPPING_MARINE\",\"dbName\":null},{\"name\":\"SECURITY_SURVEILLANCE\",\"dbName\":null},{\"name\":\"SPORTS_PHYSICAL_RECREATION\",\"dbName\":null},{\"name\":\"STAFFING_EMPLOYMENT_AGENCIES\",\"dbName\":null},{\"name\":\"SOCIAL_SERVICES\",\"dbName\":null},{\"name\":\"SPORTS_LEISURE_LIFESTYLE\",\"dbName\":null},{\"name\":\"SEMICONDUCTOR\",\"dbName\":null},{\"name\":\"TECHNOLOGY\",\"dbName\":null},{\"name\":\"SERVICES_CORPORATE_B2B\",\"dbName\":null},{\"name\":\"TRAVEL\",\"dbName\":null},{\"name\":\"TRAINING\",\"dbName\":null},{\"name\":\"TRANSPORTATION\",\"dbName\":null},{\"name\":\"TELECOMMUNICATIONS\",\"dbName\":null},{\"name\":\"TRADE_SERVICES\",\"dbName\":null},{\"name\":\"TRAVEL_TOURISM\",\"dbName\":null},{\"name\":\"TEXTILES_GARMENTS_ACCESSORIES\",\"dbName\":null},{\"name\":\"TYRES\",\"dbName\":null},{\"name\":\"UTILITIES\",\"dbName\":null},{\"name\":\"WIRELESS\",\"dbName\":null},{\"name\":\"WOOD_FIBRE_PAPER\",\"dbName\":null},{\"name\":\"WASTE_MANAGEMENT\",\"dbName\":null},{\"name\":\"WHOLESALE_TRADE_IMPORT_EXPORT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

