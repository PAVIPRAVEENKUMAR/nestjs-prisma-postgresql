
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model JobOpening
 * 
 */
export type JobOpening = $Result.DefaultSelection<Prisma.$JobOpeningPayload>
/**
 * Model Jobtitle
 * 
 */
export type Jobtitle = $Result.DefaultSelection<Prisma.$JobtitlePayload>
/**
 * Model JobAddress
 * 
 */
export type JobAddress = $Result.DefaultSelection<Prisma.$JobAddressPayload>
/**
 * Model JobApplicationQuestion
 * 
 */
export type JobApplicationQuestion = $Result.DefaultSelection<Prisma.$JobApplicationQuestionPayload>
/**
 * Model JobPipeline
 * 
 */
export type JobPipeline = $Result.DefaultSelection<Prisma.$JobPipelinePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const JobOpeningStatus: {
  DRAFT: 'DRAFT',
  OPEN: 'OPEN',
  ON_HOLD: 'ON_HOLD',
  FILLED: 'FILLED',
  CANCELLED: 'CANCELLED',
  CLOSED: 'CLOSED'
};

export type JobOpeningStatus = (typeof JobOpeningStatus)[keyof typeof JobOpeningStatus]


export const JobType: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  PERMANENT: 'PERMANENT',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  ANY: 'ANY'
};

export type JobType = (typeof JobType)[keyof typeof JobType]


export const WorkExperience: {
  NONE: 'NONE',
  FRESHER: 'FRESHER',
  ZERO_TO_ONE_YEAR: 'ZERO_TO_ONE_YEAR',
  ONE_TO_TWO_YEARS: 'ONE_TO_TWO_YEARS',
  TWO_TO_THREE_YEARS: 'TWO_TO_THREE_YEARS',
  FIVE_PLUS_YEARS: 'FIVE_PLUS_YEARS'
};

export type WorkExperience = (typeof WorkExperience)[keyof typeof WorkExperience]


export const JobLocation: {
  REMOTE: 'REMOTE',
  ONSITE: 'ONSITE',
  HYBRID: 'HYBRID'
};

export type JobLocation = (typeof JobLocation)[keyof typeof JobLocation]


export const ApplicationQuestionType: {
  DEFAULT: 'DEFAULT',
  ADDITIONAL: 'ADDITIONAL'
};

export type ApplicationQuestionType = (typeof ApplicationQuestionType)[keyof typeof ApplicationQuestionType]


export const AppplicationAdditionalQuestionType: {
  SHORT_ANSWER: 'SHORT_ANSWER',
  LONG_ANSWER: 'LONG_ANSWER',
  YES_NO: 'YES_NO',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  FILE_UPLOAD: 'FILE_UPLOAD'
};

export type AppplicationAdditionalQuestionType = (typeof AppplicationAdditionalQuestionType)[keyof typeof AppplicationAdditionalQuestionType]


export const ApplicationDefaultQuestionType: {
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

export type ApplicationDefaultQuestionType = (typeof ApplicationDefaultQuestionType)[keyof typeof ApplicationDefaultQuestionType]


export const JobPipelineStageType: {
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

export type JobPipelineStageType = (typeof JobPipelineStageType)[keyof typeof JobPipelineStageType]


export const Industries: {
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

export type Industries = (typeof Industries)[keyof typeof Industries]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type JobOpeningStatus = $Enums.JobOpeningStatus

export const JobOpeningStatus: typeof $Enums.JobOpeningStatus

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

export type WorkExperience = $Enums.WorkExperience

export const WorkExperience: typeof $Enums.WorkExperience

export type JobLocation = $Enums.JobLocation

export const JobLocation: typeof $Enums.JobLocation

export type ApplicationQuestionType = $Enums.ApplicationQuestionType

export const ApplicationQuestionType: typeof $Enums.ApplicationQuestionType

export type AppplicationAdditionalQuestionType = $Enums.AppplicationAdditionalQuestionType

export const AppplicationAdditionalQuestionType: typeof $Enums.AppplicationAdditionalQuestionType

export type ApplicationDefaultQuestionType = $Enums.ApplicationDefaultQuestionType

export const ApplicationDefaultQuestionType: typeof $Enums.ApplicationDefaultQuestionType

export type JobPipelineStageType = $Enums.JobPipelineStageType

export const JobPipelineStageType: typeof $Enums.JobPipelineStageType

export type Industries = $Enums.Industries

export const Industries: typeof $Enums.Industries

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobOpening`: Exposes CRUD operations for the **JobOpening** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobOpenings
    * const jobOpenings = await prisma.jobOpening.findMany()
    * ```
    */
  get jobOpening(): Prisma.JobOpeningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobtitle`: Exposes CRUD operations for the **Jobtitle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobtitles
    * const jobtitles = await prisma.jobtitle.findMany()
    * ```
    */
  get jobtitle(): Prisma.JobtitleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobAddress`: Exposes CRUD operations for the **JobAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobAddresses
    * const jobAddresses = await prisma.jobAddress.findMany()
    * ```
    */
  get jobAddress(): Prisma.JobAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplicationQuestion`: Exposes CRUD operations for the **JobApplicationQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplicationQuestions
    * const jobApplicationQuestions = await prisma.jobApplicationQuestion.findMany()
    * ```
    */
  get jobApplicationQuestion(): Prisma.JobApplicationQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobPipeline`: Exposes CRUD operations for the **JobPipeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPipelines
    * const jobPipelines = await prisma.jobPipeline.findMany()
    * ```
    */
  get jobPipeline(): Prisma.JobPipelineDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Department: 'Department',
    JobOpening: 'JobOpening',
    Jobtitle: 'Jobtitle',
    JobAddress: 'JobAddress',
    JobApplicationQuestion: 'JobApplicationQuestion',
    JobPipeline: 'JobPipeline'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "department" | "jobOpening" | "jobtitle" | "jobAddress" | "jobApplicationQuestion" | "jobPipeline"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      JobOpening: {
        payload: Prisma.$JobOpeningPayload<ExtArgs>
        fields: Prisma.JobOpeningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobOpeningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobOpeningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>
          }
          findFirst: {
            args: Prisma.JobOpeningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobOpeningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>
          }
          findMany: {
            args: Prisma.JobOpeningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>[]
          }
          create: {
            args: Prisma.JobOpeningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>
          }
          createMany: {
            args: Prisma.JobOpeningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobOpeningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>[]
          }
          delete: {
            args: Prisma.JobOpeningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>
          }
          update: {
            args: Prisma.JobOpeningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>
          }
          deleteMany: {
            args: Prisma.JobOpeningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobOpeningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobOpeningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>[]
          }
          upsert: {
            args: Prisma.JobOpeningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOpeningPayload>
          }
          aggregate: {
            args: Prisma.JobOpeningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobOpening>
          }
          groupBy: {
            args: Prisma.JobOpeningGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobOpeningGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobOpeningCountArgs<ExtArgs>
            result: $Utils.Optional<JobOpeningCountAggregateOutputType> | number
          }
        }
      }
      Jobtitle: {
        payload: Prisma.$JobtitlePayload<ExtArgs>
        fields: Prisma.JobtitleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobtitleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobtitleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>
          }
          findFirst: {
            args: Prisma.JobtitleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobtitleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>
          }
          findMany: {
            args: Prisma.JobtitleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>[]
          }
          create: {
            args: Prisma.JobtitleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>
          }
          createMany: {
            args: Prisma.JobtitleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobtitleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>[]
          }
          delete: {
            args: Prisma.JobtitleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>
          }
          update: {
            args: Prisma.JobtitleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>
          }
          deleteMany: {
            args: Prisma.JobtitleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobtitleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobtitleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>[]
          }
          upsert: {
            args: Prisma.JobtitleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobtitlePayload>
          }
          aggregate: {
            args: Prisma.JobtitleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobtitle>
          }
          groupBy: {
            args: Prisma.JobtitleGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobtitleGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobtitleCountArgs<ExtArgs>
            result: $Utils.Optional<JobtitleCountAggregateOutputType> | number
          }
        }
      }
      JobAddress: {
        payload: Prisma.$JobAddressPayload<ExtArgs>
        fields: Prisma.JobAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>
          }
          findFirst: {
            args: Prisma.JobAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>
          }
          findMany: {
            args: Prisma.JobAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>[]
          }
          create: {
            args: Prisma.JobAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>
          }
          createMany: {
            args: Prisma.JobAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>[]
          }
          delete: {
            args: Prisma.JobAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>
          }
          update: {
            args: Prisma.JobAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>
          }
          deleteMany: {
            args: Prisma.JobAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>[]
          }
          upsert: {
            args: Prisma.JobAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobAddressPayload>
          }
          aggregate: {
            args: Prisma.JobAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobAddress>
          }
          groupBy: {
            args: Prisma.JobAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobAddressCountArgs<ExtArgs>
            result: $Utils.Optional<JobAddressCountAggregateOutputType> | number
          }
        }
      }
      JobApplicationQuestion: {
        payload: Prisma.$JobApplicationQuestionPayload<ExtArgs>
        fields: Prisma.JobApplicationQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>
          }
          findMany: {
            args: Prisma.JobApplicationQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>[]
          }
          create: {
            args: Prisma.JobApplicationQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>
          }
          createMany: {
            args: Prisma.JobApplicationQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>
          }
          update: {
            args: Prisma.JobApplicationQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationQuestionPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplicationQuestion>
          }
          groupBy: {
            args: Prisma.JobApplicationQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationQuestionCountAggregateOutputType> | number
          }
        }
      }
      JobPipeline: {
        payload: Prisma.$JobPipelinePayload<ExtArgs>
        fields: Prisma.JobPipelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPipelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPipelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>
          }
          findFirst: {
            args: Prisma.JobPipelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPipelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>
          }
          findMany: {
            args: Prisma.JobPipelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>[]
          }
          create: {
            args: Prisma.JobPipelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>
          }
          createMany: {
            args: Prisma.JobPipelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobPipelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>[]
          }
          delete: {
            args: Prisma.JobPipelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>
          }
          update: {
            args: Prisma.JobPipelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>
          }
          deleteMany: {
            args: Prisma.JobPipelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobPipelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobPipelineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>[]
          }
          upsert: {
            args: Prisma.JobPipelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPipelinePayload>
          }
          aggregate: {
            args: Prisma.JobPipelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobPipeline>
          }
          groupBy: {
            args: Prisma.JobPipelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobPipelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPipelineCountArgs<ExtArgs>
            result: $Utils.Optional<JobPipelineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    department?: DepartmentOmit
    jobOpening?: JobOpeningOmit
    jobtitle?: JobtitleOmit
    jobAddress?: JobAddressOmit
    jobApplicationQuestion?: JobApplicationQuestionOmit
    jobPipeline?: JobPipelineOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    departmentsLed: number
    departmentsCreated: number
    jobOpenings: number
    assignedJobs: number
    JobPipeline: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentsLed?: boolean | UserCountOutputTypeCountDepartmentsLedArgs
    departmentsCreated?: boolean | UserCountOutputTypeCountDepartmentsCreatedArgs
    jobOpenings?: boolean | UserCountOutputTypeCountJobOpeningsArgs
    assignedJobs?: boolean | UserCountOutputTypeCountAssignedJobsArgs
    JobPipeline?: boolean | UserCountOutputTypeCountJobPipelineArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepartmentsLedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepartmentsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobOpeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOpeningWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOpeningWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobPipelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPipelineWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    JobOpening: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JobOpening?: boolean | DepartmentCountOutputTypeCountJobOpeningArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountJobOpeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOpeningWhereInput
  }


  /**
   * Count Type JobOpeningCountOutputType
   */

  export type JobOpeningCountOutputType = {
    assignedRecruiters: number
    applicationQuestions: number
  }

  export type JobOpeningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedRecruiters?: boolean | JobOpeningCountOutputTypeCountAssignedRecruitersArgs
    applicationQuestions?: boolean | JobOpeningCountOutputTypeCountApplicationQuestionsArgs
  }

  // Custom InputTypes
  /**
   * JobOpeningCountOutputType without action
   */
  export type JobOpeningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpeningCountOutputType
     */
    select?: JobOpeningCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobOpeningCountOutputType without action
   */
  export type JobOpeningCountOutputTypeCountAssignedRecruitersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * JobOpeningCountOutputType without action
   */
  export type JobOpeningCountOutputTypeCountApplicationQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationQuestionWhereInput
  }


  /**
   * Count Type JobtitleCountOutputType
   */

  export type JobtitleCountOutputType = {
    jobOpenings: number
  }

  export type JobtitleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOpenings?: boolean | JobtitleCountOutputTypeCountJobOpeningsArgs
  }

  // Custom InputTypes
  /**
   * JobtitleCountOutputType without action
   */
  export type JobtitleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobtitleCountOutputType
     */
    select?: JobtitleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobtitleCountOutputType without action
   */
  export type JobtitleCountOutputTypeCountJobOpeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOpeningWhereInput
  }


  /**
   * Count Type JobAddressCountOutputType
   */

  export type JobAddressCountOutputType = {
    JobOpening: number
  }

  export type JobAddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JobOpening?: boolean | JobAddressCountOutputTypeCountJobOpeningArgs
  }

  // Custom InputTypes
  /**
   * JobAddressCountOutputType without action
   */
  export type JobAddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddressCountOutputType
     */
    select?: JobAddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobAddressCountOutputType without action
   */
  export type JobAddressCountOutputTypeCountJobOpeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOpeningWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    isSignedUp: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    isSignedUp: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    isSignedUp: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isSignedUp?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isSignedUp?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isSignedUp?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    isSignedUp: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isSignedUp?: boolean
    departmentsLed?: boolean | User$departmentsLedArgs<ExtArgs>
    departmentsCreated?: boolean | User$departmentsCreatedArgs<ExtArgs>
    jobOpenings?: boolean | User$jobOpeningsArgs<ExtArgs>
    assignedJobs?: boolean | User$assignedJobsArgs<ExtArgs>
    JobPipeline?: boolean | User$JobPipelineArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isSignedUp?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isSignedUp?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isSignedUp?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "isSignedUp", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentsLed?: boolean | User$departmentsLedArgs<ExtArgs>
    departmentsCreated?: boolean | User$departmentsCreatedArgs<ExtArgs>
    jobOpenings?: boolean | User$jobOpeningsArgs<ExtArgs>
    assignedJobs?: boolean | User$assignedJobsArgs<ExtArgs>
    JobPipeline?: boolean | User$JobPipelineArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      departmentsLed: Prisma.$DepartmentPayload<ExtArgs>[]
      departmentsCreated: Prisma.$DepartmentPayload<ExtArgs>[]
      jobOpenings: Prisma.$JobOpeningPayload<ExtArgs>[]
      assignedJobs: Prisma.$JobOpeningPayload<ExtArgs>[]
      JobPipeline: Prisma.$JobPipelinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      isSignedUp: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departmentsLed<T extends User$departmentsLedArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentsLedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departmentsCreated<T extends User$departmentsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobOpenings<T extends User$jobOpeningsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobOpeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedJobs<T extends User$assignedJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    JobPipeline<T extends User$JobPipelineArgs<ExtArgs> = {}>(args?: Subset<T, User$JobPipelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isSignedUp: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.departmentsLed
   */
  export type User$departmentsLedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * User.departmentsCreated
   */
  export type User$departmentsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * User.jobOpenings
   */
  export type User$jobOpeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    where?: JobOpeningWhereInput
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    cursor?: JobOpeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOpeningScalarFieldEnum | JobOpeningScalarFieldEnum[]
  }

  /**
   * User.assignedJobs
   */
  export type User$assignedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    where?: JobOpeningWhereInput
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    cursor?: JobOpeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOpeningScalarFieldEnum | JobOpeningScalarFieldEnum[]
  }

  /**
   * User.JobPipeline
   */
  export type User$JobPipelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    where?: JobPipelineWhereInput
    orderBy?: JobPipelineOrderByWithRelationInput | JobPipelineOrderByWithRelationInput[]
    cursor?: JobPipelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobPipelineScalarFieldEnum | JobPipelineScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    departmentLeadId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    departmentLeadId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    departmentLeadId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    departmentLeadId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    departmentLeadId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    departmentLeadId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    departmentLeadId: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentLeadId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentLead?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    JobOpening?: boolean | Department$JobOpeningArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentLeadId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentLead?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentLeadId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departmentLead?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    departmentLeadId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "departmentLeadId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentLead?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    JobOpening?: boolean | Department$JobOpeningArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentLead?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentLead?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      departmentLead: Prisma.$UserPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      JobOpening: Prisma.$JobOpeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      departmentLeadId: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departmentLead<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    JobOpening<T extends Department$JobOpeningArgs<ExtArgs> = {}>(args?: Subset<T, Department$JobOpeningArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly departmentLeadId: FieldRef<"Department", 'String'>
    readonly createdById: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.JobOpening
   */
  export type Department$JobOpeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    where?: JobOpeningWhereInput
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    cursor?: JobOpeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOpeningScalarFieldEnum | JobOpeningScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model JobOpening
   */

  export type AggregateJobOpening = {
    _count: JobOpeningCountAggregateOutputType | null
    _avg: JobOpeningAvgAggregateOutputType | null
    _sum: JobOpeningSumAggregateOutputType | null
    _min: JobOpeningMinAggregateOutputType | null
    _max: JobOpeningMaxAggregateOutputType | null
  }

  export type JobOpeningAvgAggregateOutputType = {
    jobTitleId: number | null
    numberOfVacancies: number | null
    addressId: number | null
  }

  export type JobOpeningSumAggregateOutputType = {
    jobTitleId: number | null
    numberOfVacancies: number | null
    addressId: number | null
  }

  export type JobOpeningMinAggregateOutputType = {
    id: string | null
    internalJobCode: string | null
    postingTitle: string | null
    jobTitleId: number | null
    departmentId: string | null
    hiringManagerId: string | null
    numberOfVacancies: number | null
    industry: $Enums.Industries | null
    jobType: $Enums.JobType | null
    initiationDate: Date | null
    targetDate: Date | null
    status: $Enums.JobOpeningStatus | null
    salaryRange: string | null
    experienceLevel: $Enums.WorkExperience | null
    jobLocation: $Enums.JobLocation | null
    addressId: number | null
    requirements: string | null
    jobDescription: string | null
    benefits: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobOpeningMaxAggregateOutputType = {
    id: string | null
    internalJobCode: string | null
    postingTitle: string | null
    jobTitleId: number | null
    departmentId: string | null
    hiringManagerId: string | null
    numberOfVacancies: number | null
    industry: $Enums.Industries | null
    jobType: $Enums.JobType | null
    initiationDate: Date | null
    targetDate: Date | null
    status: $Enums.JobOpeningStatus | null
    salaryRange: string | null
    experienceLevel: $Enums.WorkExperience | null
    jobLocation: $Enums.JobLocation | null
    addressId: number | null
    requirements: string | null
    jobDescription: string | null
    benefits: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobOpeningCountAggregateOutputType = {
    id: number
    internalJobCode: number
    postingTitle: number
    jobTitleId: number
    departmentId: number
    hiringManagerId: number
    numberOfVacancies: number
    industry: number
    jobType: number
    initiationDate: number
    targetDate: number
    status: number
    salaryRange: number
    experienceLevel: number
    jobLocation: number
    addressId: number
    requirements: number
    jobDescription: number
    benefits: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobOpeningAvgAggregateInputType = {
    jobTitleId?: true
    numberOfVacancies?: true
    addressId?: true
  }

  export type JobOpeningSumAggregateInputType = {
    jobTitleId?: true
    numberOfVacancies?: true
    addressId?: true
  }

  export type JobOpeningMinAggregateInputType = {
    id?: true
    internalJobCode?: true
    postingTitle?: true
    jobTitleId?: true
    departmentId?: true
    hiringManagerId?: true
    numberOfVacancies?: true
    industry?: true
    jobType?: true
    initiationDate?: true
    targetDate?: true
    status?: true
    salaryRange?: true
    experienceLevel?: true
    jobLocation?: true
    addressId?: true
    requirements?: true
    jobDescription?: true
    benefits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobOpeningMaxAggregateInputType = {
    id?: true
    internalJobCode?: true
    postingTitle?: true
    jobTitleId?: true
    departmentId?: true
    hiringManagerId?: true
    numberOfVacancies?: true
    industry?: true
    jobType?: true
    initiationDate?: true
    targetDate?: true
    status?: true
    salaryRange?: true
    experienceLevel?: true
    jobLocation?: true
    addressId?: true
    requirements?: true
    jobDescription?: true
    benefits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobOpeningCountAggregateInputType = {
    id?: true
    internalJobCode?: true
    postingTitle?: true
    jobTitleId?: true
    departmentId?: true
    hiringManagerId?: true
    numberOfVacancies?: true
    industry?: true
    jobType?: true
    initiationDate?: true
    targetDate?: true
    status?: true
    salaryRange?: true
    experienceLevel?: true
    jobLocation?: true
    addressId?: true
    requirements?: true
    jobDescription?: true
    benefits?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobOpeningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOpening to aggregate.
     */
    where?: JobOpeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOpenings to fetch.
     */
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobOpeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOpenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOpenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobOpenings
    **/
    _count?: true | JobOpeningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobOpeningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobOpeningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobOpeningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobOpeningMaxAggregateInputType
  }

  export type GetJobOpeningAggregateType<T extends JobOpeningAggregateArgs> = {
        [P in keyof T & keyof AggregateJobOpening]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobOpening[P]>
      : GetScalarType<T[P], AggregateJobOpening[P]>
  }




  export type JobOpeningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOpeningWhereInput
    orderBy?: JobOpeningOrderByWithAggregationInput | JobOpeningOrderByWithAggregationInput[]
    by: JobOpeningScalarFieldEnum[] | JobOpeningScalarFieldEnum
    having?: JobOpeningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobOpeningCountAggregateInputType | true
    _avg?: JobOpeningAvgAggregateInputType
    _sum?: JobOpeningSumAggregateInputType
    _min?: JobOpeningMinAggregateInputType
    _max?: JobOpeningMaxAggregateInputType
  }

  export type JobOpeningGroupByOutputType = {
    id: string
    internalJobCode: string
    postingTitle: string
    jobTitleId: number | null
    departmentId: string
    hiringManagerId: string
    numberOfVacancies: number | null
    industry: $Enums.Industries
    jobType: $Enums.JobType
    initiationDate: Date | null
    targetDate: Date | null
    status: $Enums.JobOpeningStatus
    salaryRange: string | null
    experienceLevel: $Enums.WorkExperience
    jobLocation: $Enums.JobLocation
    addressId: number | null
    requirements: string | null
    jobDescription: string | null
    benefits: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobOpeningCountAggregateOutputType | null
    _avg: JobOpeningAvgAggregateOutputType | null
    _sum: JobOpeningSumAggregateOutputType | null
    _min: JobOpeningMinAggregateOutputType | null
    _max: JobOpeningMaxAggregateOutputType | null
  }

  type GetJobOpeningGroupByPayload<T extends JobOpeningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobOpeningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobOpeningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobOpeningGroupByOutputType[P]>
            : GetScalarType<T[P], JobOpeningGroupByOutputType[P]>
        }
      >
    >


  export type JobOpeningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internalJobCode?: boolean
    postingTitle?: boolean
    jobTitleId?: boolean
    departmentId?: boolean
    hiringManagerId?: boolean
    numberOfVacancies?: boolean
    industry?: boolean
    jobType?: boolean
    initiationDate?: boolean
    targetDate?: boolean
    status?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    jobLocation?: boolean
    addressId?: boolean
    requirements?: boolean
    jobDescription?: boolean
    benefits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobTitle?: boolean | JobOpening$jobTitleArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    assignedRecruiters?: boolean | JobOpening$assignedRecruitersArgs<ExtArgs>
    hiringManager?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | JobOpening$addressArgs<ExtArgs>
    applicationQuestions?: boolean | JobOpening$applicationQuestionsArgs<ExtArgs>
    pipeline?: boolean | JobOpening$pipelineArgs<ExtArgs>
    _count?: boolean | JobOpeningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobOpening"]>

  export type JobOpeningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internalJobCode?: boolean
    postingTitle?: boolean
    jobTitleId?: boolean
    departmentId?: boolean
    hiringManagerId?: boolean
    numberOfVacancies?: boolean
    industry?: boolean
    jobType?: boolean
    initiationDate?: boolean
    targetDate?: boolean
    status?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    jobLocation?: boolean
    addressId?: boolean
    requirements?: boolean
    jobDescription?: boolean
    benefits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobTitle?: boolean | JobOpening$jobTitleArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    hiringManager?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | JobOpening$addressArgs<ExtArgs>
  }, ExtArgs["result"]["jobOpening"]>

  export type JobOpeningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internalJobCode?: boolean
    postingTitle?: boolean
    jobTitleId?: boolean
    departmentId?: boolean
    hiringManagerId?: boolean
    numberOfVacancies?: boolean
    industry?: boolean
    jobType?: boolean
    initiationDate?: boolean
    targetDate?: boolean
    status?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    jobLocation?: boolean
    addressId?: boolean
    requirements?: boolean
    jobDescription?: boolean
    benefits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobTitle?: boolean | JobOpening$jobTitleArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    hiringManager?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | JobOpening$addressArgs<ExtArgs>
  }, ExtArgs["result"]["jobOpening"]>

  export type JobOpeningSelectScalar = {
    id?: boolean
    internalJobCode?: boolean
    postingTitle?: boolean
    jobTitleId?: boolean
    departmentId?: boolean
    hiringManagerId?: boolean
    numberOfVacancies?: boolean
    industry?: boolean
    jobType?: boolean
    initiationDate?: boolean
    targetDate?: boolean
    status?: boolean
    salaryRange?: boolean
    experienceLevel?: boolean
    jobLocation?: boolean
    addressId?: boolean
    requirements?: boolean
    jobDescription?: boolean
    benefits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOpeningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "internalJobCode" | "postingTitle" | "jobTitleId" | "departmentId" | "hiringManagerId" | "numberOfVacancies" | "industry" | "jobType" | "initiationDate" | "targetDate" | "status" | "salaryRange" | "experienceLevel" | "jobLocation" | "addressId" | "requirements" | "jobDescription" | "benefits" | "createdAt" | "updatedAt", ExtArgs["result"]["jobOpening"]>
  export type JobOpeningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitle?: boolean | JobOpening$jobTitleArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    assignedRecruiters?: boolean | JobOpening$assignedRecruitersArgs<ExtArgs>
    hiringManager?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | JobOpening$addressArgs<ExtArgs>
    applicationQuestions?: boolean | JobOpening$applicationQuestionsArgs<ExtArgs>
    pipeline?: boolean | JobOpening$pipelineArgs<ExtArgs>
    _count?: boolean | JobOpeningCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobOpeningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitle?: boolean | JobOpening$jobTitleArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    hiringManager?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | JobOpening$addressArgs<ExtArgs>
  }
  export type JobOpeningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTitle?: boolean | JobOpening$jobTitleArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    hiringManager?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | JobOpening$addressArgs<ExtArgs>
  }

  export type $JobOpeningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobOpening"
    objects: {
      jobTitle: Prisma.$JobtitlePayload<ExtArgs> | null
      department: Prisma.$DepartmentPayload<ExtArgs>
      assignedRecruiters: Prisma.$UserPayload<ExtArgs>[]
      hiringManager: Prisma.$UserPayload<ExtArgs>
      address: Prisma.$JobAddressPayload<ExtArgs> | null
      applicationQuestions: Prisma.$JobApplicationQuestionPayload<ExtArgs>[]
      pipeline: Prisma.$JobPipelinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      internalJobCode: string
      postingTitle: string
      jobTitleId: number | null
      departmentId: string
      hiringManagerId: string
      numberOfVacancies: number | null
      industry: $Enums.Industries
      jobType: $Enums.JobType
      initiationDate: Date | null
      targetDate: Date | null
      status: $Enums.JobOpeningStatus
      salaryRange: string | null
      experienceLevel: $Enums.WorkExperience
      jobLocation: $Enums.JobLocation
      addressId: number | null
      requirements: string | null
      jobDescription: string | null
      benefits: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobOpening"]>
    composites: {}
  }

  type JobOpeningGetPayload<S extends boolean | null | undefined | JobOpeningDefaultArgs> = $Result.GetResult<Prisma.$JobOpeningPayload, S>

  type JobOpeningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobOpeningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobOpeningCountAggregateInputType | true
    }

  export interface JobOpeningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobOpening'], meta: { name: 'JobOpening' } }
    /**
     * Find zero or one JobOpening that matches the filter.
     * @param {JobOpeningFindUniqueArgs} args - Arguments to find a JobOpening
     * @example
     * // Get one JobOpening
     * const jobOpening = await prisma.jobOpening.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobOpeningFindUniqueArgs>(args: SelectSubset<T, JobOpeningFindUniqueArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobOpening that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobOpeningFindUniqueOrThrowArgs} args - Arguments to find a JobOpening
     * @example
     * // Get one JobOpening
     * const jobOpening = await prisma.jobOpening.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobOpeningFindUniqueOrThrowArgs>(args: SelectSubset<T, JobOpeningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOpening that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpeningFindFirstArgs} args - Arguments to find a JobOpening
     * @example
     * // Get one JobOpening
     * const jobOpening = await prisma.jobOpening.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobOpeningFindFirstArgs>(args?: SelectSubset<T, JobOpeningFindFirstArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOpening that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpeningFindFirstOrThrowArgs} args - Arguments to find a JobOpening
     * @example
     * // Get one JobOpening
     * const jobOpening = await prisma.jobOpening.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobOpeningFindFirstOrThrowArgs>(args?: SelectSubset<T, JobOpeningFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobOpenings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpeningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobOpenings
     * const jobOpenings = await prisma.jobOpening.findMany()
     * 
     * // Get first 10 JobOpenings
     * const jobOpenings = await prisma.jobOpening.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobOpeningWithIdOnly = await prisma.jobOpening.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobOpeningFindManyArgs>(args?: SelectSubset<T, JobOpeningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobOpening.
     * @param {JobOpeningCreateArgs} args - Arguments to create a JobOpening.
     * @example
     * // Create one JobOpening
     * const JobOpening = await prisma.jobOpening.create({
     *   data: {
     *     // ... data to create a JobOpening
     *   }
     * })
     * 
     */
    create<T extends JobOpeningCreateArgs>(args: SelectSubset<T, JobOpeningCreateArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobOpenings.
     * @param {JobOpeningCreateManyArgs} args - Arguments to create many JobOpenings.
     * @example
     * // Create many JobOpenings
     * const jobOpening = await prisma.jobOpening.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobOpeningCreateManyArgs>(args?: SelectSubset<T, JobOpeningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobOpenings and returns the data saved in the database.
     * @param {JobOpeningCreateManyAndReturnArgs} args - Arguments to create many JobOpenings.
     * @example
     * // Create many JobOpenings
     * const jobOpening = await prisma.jobOpening.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobOpenings and only return the `id`
     * const jobOpeningWithIdOnly = await prisma.jobOpening.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobOpeningCreateManyAndReturnArgs>(args?: SelectSubset<T, JobOpeningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobOpening.
     * @param {JobOpeningDeleteArgs} args - Arguments to delete one JobOpening.
     * @example
     * // Delete one JobOpening
     * const JobOpening = await prisma.jobOpening.delete({
     *   where: {
     *     // ... filter to delete one JobOpening
     *   }
     * })
     * 
     */
    delete<T extends JobOpeningDeleteArgs>(args: SelectSubset<T, JobOpeningDeleteArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobOpening.
     * @param {JobOpeningUpdateArgs} args - Arguments to update one JobOpening.
     * @example
     * // Update one JobOpening
     * const jobOpening = await prisma.jobOpening.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobOpeningUpdateArgs>(args: SelectSubset<T, JobOpeningUpdateArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobOpenings.
     * @param {JobOpeningDeleteManyArgs} args - Arguments to filter JobOpenings to delete.
     * @example
     * // Delete a few JobOpenings
     * const { count } = await prisma.jobOpening.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobOpeningDeleteManyArgs>(args?: SelectSubset<T, JobOpeningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOpenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpeningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobOpenings
     * const jobOpening = await prisma.jobOpening.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobOpeningUpdateManyArgs>(args: SelectSubset<T, JobOpeningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOpenings and returns the data updated in the database.
     * @param {JobOpeningUpdateManyAndReturnArgs} args - Arguments to update many JobOpenings.
     * @example
     * // Update many JobOpenings
     * const jobOpening = await prisma.jobOpening.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobOpenings and only return the `id`
     * const jobOpeningWithIdOnly = await prisma.jobOpening.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobOpeningUpdateManyAndReturnArgs>(args: SelectSubset<T, JobOpeningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobOpening.
     * @param {JobOpeningUpsertArgs} args - Arguments to update or create a JobOpening.
     * @example
     * // Update or create a JobOpening
     * const jobOpening = await prisma.jobOpening.upsert({
     *   create: {
     *     // ... data to create a JobOpening
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobOpening we want to update
     *   }
     * })
     */
    upsert<T extends JobOpeningUpsertArgs>(args: SelectSubset<T, JobOpeningUpsertArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobOpenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpeningCountArgs} args - Arguments to filter JobOpenings to count.
     * @example
     * // Count the number of JobOpenings
     * const count = await prisma.jobOpening.count({
     *   where: {
     *     // ... the filter for the JobOpenings we want to count
     *   }
     * })
    **/
    count<T extends JobOpeningCountArgs>(
      args?: Subset<T, JobOpeningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobOpeningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobOpening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpeningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobOpeningAggregateArgs>(args: Subset<T, JobOpeningAggregateArgs>): Prisma.PrismaPromise<GetJobOpeningAggregateType<T>>

    /**
     * Group by JobOpening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOpeningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobOpeningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobOpeningGroupByArgs['orderBy'] }
        : { orderBy?: JobOpeningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobOpeningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobOpeningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobOpening model
   */
  readonly fields: JobOpeningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobOpening.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobOpeningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobTitle<T extends JobOpening$jobTitleArgs<ExtArgs> = {}>(args?: Subset<T, JobOpening$jobTitleArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedRecruiters<T extends JobOpening$assignedRecruitersArgs<ExtArgs> = {}>(args?: Subset<T, JobOpening$assignedRecruitersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hiringManager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends JobOpening$addressArgs<ExtArgs> = {}>(args?: Subset<T, JobOpening$addressArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applicationQuestions<T extends JobOpening$applicationQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, JobOpening$applicationQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pipeline<T extends JobOpening$pipelineArgs<ExtArgs> = {}>(args?: Subset<T, JobOpening$pipelineArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobOpening model
   */
  interface JobOpeningFieldRefs {
    readonly id: FieldRef<"JobOpening", 'String'>
    readonly internalJobCode: FieldRef<"JobOpening", 'String'>
    readonly postingTitle: FieldRef<"JobOpening", 'String'>
    readonly jobTitleId: FieldRef<"JobOpening", 'Int'>
    readonly departmentId: FieldRef<"JobOpening", 'String'>
    readonly hiringManagerId: FieldRef<"JobOpening", 'String'>
    readonly numberOfVacancies: FieldRef<"JobOpening", 'Int'>
    readonly industry: FieldRef<"JobOpening", 'Industries'>
    readonly jobType: FieldRef<"JobOpening", 'JobType'>
    readonly initiationDate: FieldRef<"JobOpening", 'DateTime'>
    readonly targetDate: FieldRef<"JobOpening", 'DateTime'>
    readonly status: FieldRef<"JobOpening", 'JobOpeningStatus'>
    readonly salaryRange: FieldRef<"JobOpening", 'String'>
    readonly experienceLevel: FieldRef<"JobOpening", 'WorkExperience'>
    readonly jobLocation: FieldRef<"JobOpening", 'JobLocation'>
    readonly addressId: FieldRef<"JobOpening", 'Int'>
    readonly requirements: FieldRef<"JobOpening", 'String'>
    readonly jobDescription: FieldRef<"JobOpening", 'String'>
    readonly benefits: FieldRef<"JobOpening", 'String'>
    readonly createdAt: FieldRef<"JobOpening", 'DateTime'>
    readonly updatedAt: FieldRef<"JobOpening", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobOpening findUnique
   */
  export type JobOpeningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * Filter, which JobOpening to fetch.
     */
    where: JobOpeningWhereUniqueInput
  }

  /**
   * JobOpening findUniqueOrThrow
   */
  export type JobOpeningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * Filter, which JobOpening to fetch.
     */
    where: JobOpeningWhereUniqueInput
  }

  /**
   * JobOpening findFirst
   */
  export type JobOpeningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * Filter, which JobOpening to fetch.
     */
    where?: JobOpeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOpenings to fetch.
     */
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOpenings.
     */
    cursor?: JobOpeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOpenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOpenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOpenings.
     */
    distinct?: JobOpeningScalarFieldEnum | JobOpeningScalarFieldEnum[]
  }

  /**
   * JobOpening findFirstOrThrow
   */
  export type JobOpeningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * Filter, which JobOpening to fetch.
     */
    where?: JobOpeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOpenings to fetch.
     */
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOpenings.
     */
    cursor?: JobOpeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOpenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOpenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOpenings.
     */
    distinct?: JobOpeningScalarFieldEnum | JobOpeningScalarFieldEnum[]
  }

  /**
   * JobOpening findMany
   */
  export type JobOpeningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * Filter, which JobOpenings to fetch.
     */
    where?: JobOpeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOpenings to fetch.
     */
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobOpenings.
     */
    cursor?: JobOpeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOpenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOpenings.
     */
    skip?: number
    distinct?: JobOpeningScalarFieldEnum | JobOpeningScalarFieldEnum[]
  }

  /**
   * JobOpening create
   */
  export type JobOpeningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * The data needed to create a JobOpening.
     */
    data: XOR<JobOpeningCreateInput, JobOpeningUncheckedCreateInput>
  }

  /**
   * JobOpening createMany
   */
  export type JobOpeningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobOpenings.
     */
    data: JobOpeningCreateManyInput | JobOpeningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobOpening createManyAndReturn
   */
  export type JobOpeningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * The data used to create many JobOpenings.
     */
    data: JobOpeningCreateManyInput | JobOpeningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobOpening update
   */
  export type JobOpeningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * The data needed to update a JobOpening.
     */
    data: XOR<JobOpeningUpdateInput, JobOpeningUncheckedUpdateInput>
    /**
     * Choose, which JobOpening to update.
     */
    where: JobOpeningWhereUniqueInput
  }

  /**
   * JobOpening updateMany
   */
  export type JobOpeningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobOpenings.
     */
    data: XOR<JobOpeningUpdateManyMutationInput, JobOpeningUncheckedUpdateManyInput>
    /**
     * Filter which JobOpenings to update
     */
    where?: JobOpeningWhereInput
    /**
     * Limit how many JobOpenings to update.
     */
    limit?: number
  }

  /**
   * JobOpening updateManyAndReturn
   */
  export type JobOpeningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * The data used to update JobOpenings.
     */
    data: XOR<JobOpeningUpdateManyMutationInput, JobOpeningUncheckedUpdateManyInput>
    /**
     * Filter which JobOpenings to update
     */
    where?: JobOpeningWhereInput
    /**
     * Limit how many JobOpenings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobOpening upsert
   */
  export type JobOpeningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * The filter to search for the JobOpening to update in case it exists.
     */
    where: JobOpeningWhereUniqueInput
    /**
     * In case the JobOpening found by the `where` argument doesn't exist, create a new JobOpening with this data.
     */
    create: XOR<JobOpeningCreateInput, JobOpeningUncheckedCreateInput>
    /**
     * In case the JobOpening was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobOpeningUpdateInput, JobOpeningUncheckedUpdateInput>
  }

  /**
   * JobOpening delete
   */
  export type JobOpeningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    /**
     * Filter which JobOpening to delete.
     */
    where: JobOpeningWhereUniqueInput
  }

  /**
   * JobOpening deleteMany
   */
  export type JobOpeningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOpenings to delete
     */
    where?: JobOpeningWhereInput
    /**
     * Limit how many JobOpenings to delete.
     */
    limit?: number
  }

  /**
   * JobOpening.jobTitle
   */
  export type JobOpening$jobTitleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    where?: JobtitleWhereInput
  }

  /**
   * JobOpening.assignedRecruiters
   */
  export type JobOpening$assignedRecruitersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * JobOpening.address
   */
  export type JobOpening$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    where?: JobAddressWhereInput
  }

  /**
   * JobOpening.applicationQuestions
   */
  export type JobOpening$applicationQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    where?: JobApplicationQuestionWhereInput
    orderBy?: JobApplicationQuestionOrderByWithRelationInput | JobApplicationQuestionOrderByWithRelationInput[]
    cursor?: JobApplicationQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationQuestionScalarFieldEnum | JobApplicationQuestionScalarFieldEnum[]
  }

  /**
   * JobOpening.pipeline
   */
  export type JobOpening$pipelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    where?: JobPipelineWhereInput
  }

  /**
   * JobOpening without action
   */
  export type JobOpeningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
  }


  /**
   * Model Jobtitle
   */

  export type AggregateJobtitle = {
    _count: JobtitleCountAggregateOutputType | null
    _avg: JobtitleAvgAggregateOutputType | null
    _sum: JobtitleSumAggregateOutputType | null
    _min: JobtitleMinAggregateOutputType | null
    _max: JobtitleMaxAggregateOutputType | null
  }

  export type JobtitleAvgAggregateOutputType = {
    id: number | null
  }

  export type JobtitleSumAggregateOutputType = {
    id: number | null
  }

  export type JobtitleMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type JobtitleMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type JobtitleCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type JobtitleAvgAggregateInputType = {
    id?: true
  }

  export type JobtitleSumAggregateInputType = {
    id?: true
  }

  export type JobtitleMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type JobtitleMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type JobtitleCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type JobtitleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobtitle to aggregate.
     */
    where?: JobtitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobtitles to fetch.
     */
    orderBy?: JobtitleOrderByWithRelationInput | JobtitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobtitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobtitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobtitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobtitles
    **/
    _count?: true | JobtitleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobtitleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobtitleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobtitleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobtitleMaxAggregateInputType
  }

  export type GetJobtitleAggregateType<T extends JobtitleAggregateArgs> = {
        [P in keyof T & keyof AggregateJobtitle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobtitle[P]>
      : GetScalarType<T[P], AggregateJobtitle[P]>
  }




  export type JobtitleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobtitleWhereInput
    orderBy?: JobtitleOrderByWithAggregationInput | JobtitleOrderByWithAggregationInput[]
    by: JobtitleScalarFieldEnum[] | JobtitleScalarFieldEnum
    having?: JobtitleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobtitleCountAggregateInputType | true
    _avg?: JobtitleAvgAggregateInputType
    _sum?: JobtitleSumAggregateInputType
    _min?: JobtitleMinAggregateInputType
    _max?: JobtitleMaxAggregateInputType
  }

  export type JobtitleGroupByOutputType = {
    id: number
    title: string
    _count: JobtitleCountAggregateOutputType | null
    _avg: JobtitleAvgAggregateOutputType | null
    _sum: JobtitleSumAggregateOutputType | null
    _min: JobtitleMinAggregateOutputType | null
    _max: JobtitleMaxAggregateOutputType | null
  }

  type GetJobtitleGroupByPayload<T extends JobtitleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobtitleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobtitleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobtitleGroupByOutputType[P]>
            : GetScalarType<T[P], JobtitleGroupByOutputType[P]>
        }
      >
    >


  export type JobtitleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    jobOpenings?: boolean | Jobtitle$jobOpeningsArgs<ExtArgs>
    _count?: boolean | JobtitleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobtitle"]>

  export type JobtitleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["jobtitle"]>

  export type JobtitleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["jobtitle"]>

  export type JobtitleSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type JobtitleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["jobtitle"]>
  export type JobtitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOpenings?: boolean | Jobtitle$jobOpeningsArgs<ExtArgs>
    _count?: boolean | JobtitleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobtitleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobtitleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobtitlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jobtitle"
    objects: {
      jobOpenings: Prisma.$JobOpeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["jobtitle"]>
    composites: {}
  }

  type JobtitleGetPayload<S extends boolean | null | undefined | JobtitleDefaultArgs> = $Result.GetResult<Prisma.$JobtitlePayload, S>

  type JobtitleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobtitleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobtitleCountAggregateInputType | true
    }

  export interface JobtitleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jobtitle'], meta: { name: 'Jobtitle' } }
    /**
     * Find zero or one Jobtitle that matches the filter.
     * @param {JobtitleFindUniqueArgs} args - Arguments to find a Jobtitle
     * @example
     * // Get one Jobtitle
     * const jobtitle = await prisma.jobtitle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobtitleFindUniqueArgs>(args: SelectSubset<T, JobtitleFindUniqueArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobtitle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobtitleFindUniqueOrThrowArgs} args - Arguments to find a Jobtitle
     * @example
     * // Get one Jobtitle
     * const jobtitle = await prisma.jobtitle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobtitleFindUniqueOrThrowArgs>(args: SelectSubset<T, JobtitleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobtitle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobtitleFindFirstArgs} args - Arguments to find a Jobtitle
     * @example
     * // Get one Jobtitle
     * const jobtitle = await prisma.jobtitle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobtitleFindFirstArgs>(args?: SelectSubset<T, JobtitleFindFirstArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobtitle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobtitleFindFirstOrThrowArgs} args - Arguments to find a Jobtitle
     * @example
     * // Get one Jobtitle
     * const jobtitle = await prisma.jobtitle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobtitleFindFirstOrThrowArgs>(args?: SelectSubset<T, JobtitleFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobtitles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobtitleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobtitles
     * const jobtitles = await prisma.jobtitle.findMany()
     * 
     * // Get first 10 Jobtitles
     * const jobtitles = await prisma.jobtitle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobtitleWithIdOnly = await prisma.jobtitle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobtitleFindManyArgs>(args?: SelectSubset<T, JobtitleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobtitle.
     * @param {JobtitleCreateArgs} args - Arguments to create a Jobtitle.
     * @example
     * // Create one Jobtitle
     * const Jobtitle = await prisma.jobtitle.create({
     *   data: {
     *     // ... data to create a Jobtitle
     *   }
     * })
     * 
     */
    create<T extends JobtitleCreateArgs>(args: SelectSubset<T, JobtitleCreateArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobtitles.
     * @param {JobtitleCreateManyArgs} args - Arguments to create many Jobtitles.
     * @example
     * // Create many Jobtitles
     * const jobtitle = await prisma.jobtitle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobtitleCreateManyArgs>(args?: SelectSubset<T, JobtitleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobtitles and returns the data saved in the database.
     * @param {JobtitleCreateManyAndReturnArgs} args - Arguments to create many Jobtitles.
     * @example
     * // Create many Jobtitles
     * const jobtitle = await prisma.jobtitle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobtitles and only return the `id`
     * const jobtitleWithIdOnly = await prisma.jobtitle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobtitleCreateManyAndReturnArgs>(args?: SelectSubset<T, JobtitleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jobtitle.
     * @param {JobtitleDeleteArgs} args - Arguments to delete one Jobtitle.
     * @example
     * // Delete one Jobtitle
     * const Jobtitle = await prisma.jobtitle.delete({
     *   where: {
     *     // ... filter to delete one Jobtitle
     *   }
     * })
     * 
     */
    delete<T extends JobtitleDeleteArgs>(args: SelectSubset<T, JobtitleDeleteArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobtitle.
     * @param {JobtitleUpdateArgs} args - Arguments to update one Jobtitle.
     * @example
     * // Update one Jobtitle
     * const jobtitle = await prisma.jobtitle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobtitleUpdateArgs>(args: SelectSubset<T, JobtitleUpdateArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobtitles.
     * @param {JobtitleDeleteManyArgs} args - Arguments to filter Jobtitles to delete.
     * @example
     * // Delete a few Jobtitles
     * const { count } = await prisma.jobtitle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobtitleDeleteManyArgs>(args?: SelectSubset<T, JobtitleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobtitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobtitleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobtitles
     * const jobtitle = await prisma.jobtitle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobtitleUpdateManyArgs>(args: SelectSubset<T, JobtitleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobtitles and returns the data updated in the database.
     * @param {JobtitleUpdateManyAndReturnArgs} args - Arguments to update many Jobtitles.
     * @example
     * // Update many Jobtitles
     * const jobtitle = await prisma.jobtitle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobtitles and only return the `id`
     * const jobtitleWithIdOnly = await prisma.jobtitle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobtitleUpdateManyAndReturnArgs>(args: SelectSubset<T, JobtitleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jobtitle.
     * @param {JobtitleUpsertArgs} args - Arguments to update or create a Jobtitle.
     * @example
     * // Update or create a Jobtitle
     * const jobtitle = await prisma.jobtitle.upsert({
     *   create: {
     *     // ... data to create a Jobtitle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobtitle we want to update
     *   }
     * })
     */
    upsert<T extends JobtitleUpsertArgs>(args: SelectSubset<T, JobtitleUpsertArgs<ExtArgs>>): Prisma__JobtitleClient<$Result.GetResult<Prisma.$JobtitlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobtitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobtitleCountArgs} args - Arguments to filter Jobtitles to count.
     * @example
     * // Count the number of Jobtitles
     * const count = await prisma.jobtitle.count({
     *   where: {
     *     // ... the filter for the Jobtitles we want to count
     *   }
     * })
    **/
    count<T extends JobtitleCountArgs>(
      args?: Subset<T, JobtitleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobtitleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobtitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobtitleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobtitleAggregateArgs>(args: Subset<T, JobtitleAggregateArgs>): Prisma.PrismaPromise<GetJobtitleAggregateType<T>>

    /**
     * Group by Jobtitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobtitleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobtitleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobtitleGroupByArgs['orderBy'] }
        : { orderBy?: JobtitleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobtitleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobtitleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jobtitle model
   */
  readonly fields: JobtitleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jobtitle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobtitleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOpenings<T extends Jobtitle$jobOpeningsArgs<ExtArgs> = {}>(args?: Subset<T, Jobtitle$jobOpeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jobtitle model
   */
  interface JobtitleFieldRefs {
    readonly id: FieldRef<"Jobtitle", 'Int'>
    readonly title: FieldRef<"Jobtitle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jobtitle findUnique
   */
  export type JobtitleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * Filter, which Jobtitle to fetch.
     */
    where: JobtitleWhereUniqueInput
  }

  /**
   * Jobtitle findUniqueOrThrow
   */
  export type JobtitleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * Filter, which Jobtitle to fetch.
     */
    where: JobtitleWhereUniqueInput
  }

  /**
   * Jobtitle findFirst
   */
  export type JobtitleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * Filter, which Jobtitle to fetch.
     */
    where?: JobtitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobtitles to fetch.
     */
    orderBy?: JobtitleOrderByWithRelationInput | JobtitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobtitles.
     */
    cursor?: JobtitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobtitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobtitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobtitles.
     */
    distinct?: JobtitleScalarFieldEnum | JobtitleScalarFieldEnum[]
  }

  /**
   * Jobtitle findFirstOrThrow
   */
  export type JobtitleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * Filter, which Jobtitle to fetch.
     */
    where?: JobtitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobtitles to fetch.
     */
    orderBy?: JobtitleOrderByWithRelationInput | JobtitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobtitles.
     */
    cursor?: JobtitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobtitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobtitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobtitles.
     */
    distinct?: JobtitleScalarFieldEnum | JobtitleScalarFieldEnum[]
  }

  /**
   * Jobtitle findMany
   */
  export type JobtitleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * Filter, which Jobtitles to fetch.
     */
    where?: JobtitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobtitles to fetch.
     */
    orderBy?: JobtitleOrderByWithRelationInput | JobtitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobtitles.
     */
    cursor?: JobtitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobtitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobtitles.
     */
    skip?: number
    distinct?: JobtitleScalarFieldEnum | JobtitleScalarFieldEnum[]
  }

  /**
   * Jobtitle create
   */
  export type JobtitleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * The data needed to create a Jobtitle.
     */
    data: XOR<JobtitleCreateInput, JobtitleUncheckedCreateInput>
  }

  /**
   * Jobtitle createMany
   */
  export type JobtitleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobtitles.
     */
    data: JobtitleCreateManyInput | JobtitleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jobtitle createManyAndReturn
   */
  export type JobtitleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * The data used to create many Jobtitles.
     */
    data: JobtitleCreateManyInput | JobtitleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jobtitle update
   */
  export type JobtitleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * The data needed to update a Jobtitle.
     */
    data: XOR<JobtitleUpdateInput, JobtitleUncheckedUpdateInput>
    /**
     * Choose, which Jobtitle to update.
     */
    where: JobtitleWhereUniqueInput
  }

  /**
   * Jobtitle updateMany
   */
  export type JobtitleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobtitles.
     */
    data: XOR<JobtitleUpdateManyMutationInput, JobtitleUncheckedUpdateManyInput>
    /**
     * Filter which Jobtitles to update
     */
    where?: JobtitleWhereInput
    /**
     * Limit how many Jobtitles to update.
     */
    limit?: number
  }

  /**
   * Jobtitle updateManyAndReturn
   */
  export type JobtitleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * The data used to update Jobtitles.
     */
    data: XOR<JobtitleUpdateManyMutationInput, JobtitleUncheckedUpdateManyInput>
    /**
     * Filter which Jobtitles to update
     */
    where?: JobtitleWhereInput
    /**
     * Limit how many Jobtitles to update.
     */
    limit?: number
  }

  /**
   * Jobtitle upsert
   */
  export type JobtitleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * The filter to search for the Jobtitle to update in case it exists.
     */
    where: JobtitleWhereUniqueInput
    /**
     * In case the Jobtitle found by the `where` argument doesn't exist, create a new Jobtitle with this data.
     */
    create: XOR<JobtitleCreateInput, JobtitleUncheckedCreateInput>
    /**
     * In case the Jobtitle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobtitleUpdateInput, JobtitleUncheckedUpdateInput>
  }

  /**
   * Jobtitle delete
   */
  export type JobtitleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
    /**
     * Filter which Jobtitle to delete.
     */
    where: JobtitleWhereUniqueInput
  }

  /**
   * Jobtitle deleteMany
   */
  export type JobtitleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobtitles to delete
     */
    where?: JobtitleWhereInput
    /**
     * Limit how many Jobtitles to delete.
     */
    limit?: number
  }

  /**
   * Jobtitle.jobOpenings
   */
  export type Jobtitle$jobOpeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    where?: JobOpeningWhereInput
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    cursor?: JobOpeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOpeningScalarFieldEnum | JobOpeningScalarFieldEnum[]
  }

  /**
   * Jobtitle without action
   */
  export type JobtitleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobtitle
     */
    select?: JobtitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobtitle
     */
    omit?: JobtitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobtitleInclude<ExtArgs> | null
  }


  /**
   * Model JobAddress
   */

  export type AggregateJobAddress = {
    _count: JobAddressCountAggregateOutputType | null
    _avg: JobAddressAvgAggregateOutputType | null
    _sum: JobAddressSumAggregateOutputType | null
    _min: JobAddressMinAggregateOutputType | null
    _max: JobAddressMaxAggregateOutputType | null
  }

  export type JobAddressAvgAggregateOutputType = {
    id: number | null
  }

  export type JobAddressSumAggregateOutputType = {
    id: number | null
  }

  export type JobAddressMinAggregateOutputType = {
    id: number | null
    addressLine: string | null
    province: string | null
    region: string | null
    country: string | null
    postalCode: string | null
  }

  export type JobAddressMaxAggregateOutputType = {
    id: number | null
    addressLine: string | null
    province: string | null
    region: string | null
    country: string | null
    postalCode: string | null
  }

  export type JobAddressCountAggregateOutputType = {
    id: number
    addressLine: number
    province: number
    region: number
    country: number
    postalCode: number
    _all: number
  }


  export type JobAddressAvgAggregateInputType = {
    id?: true
  }

  export type JobAddressSumAggregateInputType = {
    id?: true
  }

  export type JobAddressMinAggregateInputType = {
    id?: true
    addressLine?: true
    province?: true
    region?: true
    country?: true
    postalCode?: true
  }

  export type JobAddressMaxAggregateInputType = {
    id?: true
    addressLine?: true
    province?: true
    region?: true
    country?: true
    postalCode?: true
  }

  export type JobAddressCountAggregateInputType = {
    id?: true
    addressLine?: true
    province?: true
    region?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type JobAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobAddress to aggregate.
     */
    where?: JobAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobAddresses to fetch.
     */
    orderBy?: JobAddressOrderByWithRelationInput | JobAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobAddresses
    **/
    _count?: true | JobAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobAddressMaxAggregateInputType
  }

  export type GetJobAddressAggregateType<T extends JobAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateJobAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobAddress[P]>
      : GetScalarType<T[P], AggregateJobAddress[P]>
  }




  export type JobAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobAddressWhereInput
    orderBy?: JobAddressOrderByWithAggregationInput | JobAddressOrderByWithAggregationInput[]
    by: JobAddressScalarFieldEnum[] | JobAddressScalarFieldEnum
    having?: JobAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobAddressCountAggregateInputType | true
    _avg?: JobAddressAvgAggregateInputType
    _sum?: JobAddressSumAggregateInputType
    _min?: JobAddressMinAggregateInputType
    _max?: JobAddressMaxAggregateInputType
  }

  export type JobAddressGroupByOutputType = {
    id: number
    addressLine: string
    province: string | null
    region: string | null
    country: string | null
    postalCode: string | null
    _count: JobAddressCountAggregateOutputType | null
    _avg: JobAddressAvgAggregateOutputType | null
    _sum: JobAddressSumAggregateOutputType | null
    _min: JobAddressMinAggregateOutputType | null
    _max: JobAddressMaxAggregateOutputType | null
  }

  type GetJobAddressGroupByPayload<T extends JobAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobAddressGroupByOutputType[P]>
            : GetScalarType<T[P], JobAddressGroupByOutputType[P]>
        }
      >
    >


  export type JobAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addressLine?: boolean
    province?: boolean
    region?: boolean
    country?: boolean
    postalCode?: boolean
    JobOpening?: boolean | JobAddress$JobOpeningArgs<ExtArgs>
    _count?: boolean | JobAddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobAddress"]>

  export type JobAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addressLine?: boolean
    province?: boolean
    region?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["jobAddress"]>

  export type JobAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addressLine?: boolean
    province?: boolean
    region?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["jobAddress"]>

  export type JobAddressSelectScalar = {
    id?: boolean
    addressLine?: boolean
    province?: boolean
    region?: boolean
    country?: boolean
    postalCode?: boolean
  }

  export type JobAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "addressLine" | "province" | "region" | "country" | "postalCode", ExtArgs["result"]["jobAddress"]>
  export type JobAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    JobOpening?: boolean | JobAddress$JobOpeningArgs<ExtArgs>
    _count?: boolean | JobAddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobAddress"
    objects: {
      JobOpening: Prisma.$JobOpeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      addressLine: string
      province: string | null
      region: string | null
      country: string | null
      postalCode: string | null
    }, ExtArgs["result"]["jobAddress"]>
    composites: {}
  }

  type JobAddressGetPayload<S extends boolean | null | undefined | JobAddressDefaultArgs> = $Result.GetResult<Prisma.$JobAddressPayload, S>

  type JobAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobAddressCountAggregateInputType | true
    }

  export interface JobAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobAddress'], meta: { name: 'JobAddress' } }
    /**
     * Find zero or one JobAddress that matches the filter.
     * @param {JobAddressFindUniqueArgs} args - Arguments to find a JobAddress
     * @example
     * // Get one JobAddress
     * const jobAddress = await prisma.jobAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobAddressFindUniqueArgs>(args: SelectSubset<T, JobAddressFindUniqueArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobAddressFindUniqueOrThrowArgs} args - Arguments to find a JobAddress
     * @example
     * // Get one JobAddress
     * const jobAddress = await prisma.jobAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, JobAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAddressFindFirstArgs} args - Arguments to find a JobAddress
     * @example
     * // Get one JobAddress
     * const jobAddress = await prisma.jobAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobAddressFindFirstArgs>(args?: SelectSubset<T, JobAddressFindFirstArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAddressFindFirstOrThrowArgs} args - Arguments to find a JobAddress
     * @example
     * // Get one JobAddress
     * const jobAddress = await prisma.jobAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, JobAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobAddresses
     * const jobAddresses = await prisma.jobAddress.findMany()
     * 
     * // Get first 10 JobAddresses
     * const jobAddresses = await prisma.jobAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobAddressWithIdOnly = await prisma.jobAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobAddressFindManyArgs>(args?: SelectSubset<T, JobAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobAddress.
     * @param {JobAddressCreateArgs} args - Arguments to create a JobAddress.
     * @example
     * // Create one JobAddress
     * const JobAddress = await prisma.jobAddress.create({
     *   data: {
     *     // ... data to create a JobAddress
     *   }
     * })
     * 
     */
    create<T extends JobAddressCreateArgs>(args: SelectSubset<T, JobAddressCreateArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobAddresses.
     * @param {JobAddressCreateManyArgs} args - Arguments to create many JobAddresses.
     * @example
     * // Create many JobAddresses
     * const jobAddress = await prisma.jobAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobAddressCreateManyArgs>(args?: SelectSubset<T, JobAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobAddresses and returns the data saved in the database.
     * @param {JobAddressCreateManyAndReturnArgs} args - Arguments to create many JobAddresses.
     * @example
     * // Create many JobAddresses
     * const jobAddress = await prisma.jobAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobAddresses and only return the `id`
     * const jobAddressWithIdOnly = await prisma.jobAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, JobAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobAddress.
     * @param {JobAddressDeleteArgs} args - Arguments to delete one JobAddress.
     * @example
     * // Delete one JobAddress
     * const JobAddress = await prisma.jobAddress.delete({
     *   where: {
     *     // ... filter to delete one JobAddress
     *   }
     * })
     * 
     */
    delete<T extends JobAddressDeleteArgs>(args: SelectSubset<T, JobAddressDeleteArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobAddress.
     * @param {JobAddressUpdateArgs} args - Arguments to update one JobAddress.
     * @example
     * // Update one JobAddress
     * const jobAddress = await prisma.jobAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobAddressUpdateArgs>(args: SelectSubset<T, JobAddressUpdateArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobAddresses.
     * @param {JobAddressDeleteManyArgs} args - Arguments to filter JobAddresses to delete.
     * @example
     * // Delete a few JobAddresses
     * const { count } = await prisma.jobAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobAddressDeleteManyArgs>(args?: SelectSubset<T, JobAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobAddresses
     * const jobAddress = await prisma.jobAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobAddressUpdateManyArgs>(args: SelectSubset<T, JobAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobAddresses and returns the data updated in the database.
     * @param {JobAddressUpdateManyAndReturnArgs} args - Arguments to update many JobAddresses.
     * @example
     * // Update many JobAddresses
     * const jobAddress = await prisma.jobAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobAddresses and only return the `id`
     * const jobAddressWithIdOnly = await prisma.jobAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, JobAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobAddress.
     * @param {JobAddressUpsertArgs} args - Arguments to update or create a JobAddress.
     * @example
     * // Update or create a JobAddress
     * const jobAddress = await prisma.jobAddress.upsert({
     *   create: {
     *     // ... data to create a JobAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobAddress we want to update
     *   }
     * })
     */
    upsert<T extends JobAddressUpsertArgs>(args: SelectSubset<T, JobAddressUpsertArgs<ExtArgs>>): Prisma__JobAddressClient<$Result.GetResult<Prisma.$JobAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAddressCountArgs} args - Arguments to filter JobAddresses to count.
     * @example
     * // Count the number of JobAddresses
     * const count = await prisma.jobAddress.count({
     *   where: {
     *     // ... the filter for the JobAddresses we want to count
     *   }
     * })
    **/
    count<T extends JobAddressCountArgs>(
      args?: Subset<T, JobAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAddressAggregateArgs>(args: Subset<T, JobAddressAggregateArgs>): Prisma.PrismaPromise<GetJobAddressAggregateType<T>>

    /**
     * Group by JobAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobAddressGroupByArgs['orderBy'] }
        : { orderBy?: JobAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobAddress model
   */
  readonly fields: JobAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    JobOpening<T extends JobAddress$JobOpeningArgs<ExtArgs> = {}>(args?: Subset<T, JobAddress$JobOpeningArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobAddress model
   */
  interface JobAddressFieldRefs {
    readonly id: FieldRef<"JobAddress", 'Int'>
    readonly addressLine: FieldRef<"JobAddress", 'String'>
    readonly province: FieldRef<"JobAddress", 'String'>
    readonly region: FieldRef<"JobAddress", 'String'>
    readonly country: FieldRef<"JobAddress", 'String'>
    readonly postalCode: FieldRef<"JobAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobAddress findUnique
   */
  export type JobAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * Filter, which JobAddress to fetch.
     */
    where: JobAddressWhereUniqueInput
  }

  /**
   * JobAddress findUniqueOrThrow
   */
  export type JobAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * Filter, which JobAddress to fetch.
     */
    where: JobAddressWhereUniqueInput
  }

  /**
   * JobAddress findFirst
   */
  export type JobAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * Filter, which JobAddress to fetch.
     */
    where?: JobAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobAddresses to fetch.
     */
    orderBy?: JobAddressOrderByWithRelationInput | JobAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobAddresses.
     */
    cursor?: JobAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobAddresses.
     */
    distinct?: JobAddressScalarFieldEnum | JobAddressScalarFieldEnum[]
  }

  /**
   * JobAddress findFirstOrThrow
   */
  export type JobAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * Filter, which JobAddress to fetch.
     */
    where?: JobAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobAddresses to fetch.
     */
    orderBy?: JobAddressOrderByWithRelationInput | JobAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobAddresses.
     */
    cursor?: JobAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobAddresses.
     */
    distinct?: JobAddressScalarFieldEnum | JobAddressScalarFieldEnum[]
  }

  /**
   * JobAddress findMany
   */
  export type JobAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * Filter, which JobAddresses to fetch.
     */
    where?: JobAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobAddresses to fetch.
     */
    orderBy?: JobAddressOrderByWithRelationInput | JobAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobAddresses.
     */
    cursor?: JobAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobAddresses.
     */
    skip?: number
    distinct?: JobAddressScalarFieldEnum | JobAddressScalarFieldEnum[]
  }

  /**
   * JobAddress create
   */
  export type JobAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a JobAddress.
     */
    data: XOR<JobAddressCreateInput, JobAddressUncheckedCreateInput>
  }

  /**
   * JobAddress createMany
   */
  export type JobAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobAddresses.
     */
    data: JobAddressCreateManyInput | JobAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobAddress createManyAndReturn
   */
  export type JobAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * The data used to create many JobAddresses.
     */
    data: JobAddressCreateManyInput | JobAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobAddress update
   */
  export type JobAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a JobAddress.
     */
    data: XOR<JobAddressUpdateInput, JobAddressUncheckedUpdateInput>
    /**
     * Choose, which JobAddress to update.
     */
    where: JobAddressWhereUniqueInput
  }

  /**
   * JobAddress updateMany
   */
  export type JobAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobAddresses.
     */
    data: XOR<JobAddressUpdateManyMutationInput, JobAddressUncheckedUpdateManyInput>
    /**
     * Filter which JobAddresses to update
     */
    where?: JobAddressWhereInput
    /**
     * Limit how many JobAddresses to update.
     */
    limit?: number
  }

  /**
   * JobAddress updateManyAndReturn
   */
  export type JobAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * The data used to update JobAddresses.
     */
    data: XOR<JobAddressUpdateManyMutationInput, JobAddressUncheckedUpdateManyInput>
    /**
     * Filter which JobAddresses to update
     */
    where?: JobAddressWhereInput
    /**
     * Limit how many JobAddresses to update.
     */
    limit?: number
  }

  /**
   * JobAddress upsert
   */
  export type JobAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the JobAddress to update in case it exists.
     */
    where: JobAddressWhereUniqueInput
    /**
     * In case the JobAddress found by the `where` argument doesn't exist, create a new JobAddress with this data.
     */
    create: XOR<JobAddressCreateInput, JobAddressUncheckedCreateInput>
    /**
     * In case the JobAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobAddressUpdateInput, JobAddressUncheckedUpdateInput>
  }

  /**
   * JobAddress delete
   */
  export type JobAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
    /**
     * Filter which JobAddress to delete.
     */
    where: JobAddressWhereUniqueInput
  }

  /**
   * JobAddress deleteMany
   */
  export type JobAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobAddresses to delete
     */
    where?: JobAddressWhereInput
    /**
     * Limit how many JobAddresses to delete.
     */
    limit?: number
  }

  /**
   * JobAddress.JobOpening
   */
  export type JobAddress$JobOpeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOpening
     */
    select?: JobOpeningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOpening
     */
    omit?: JobOpeningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobOpeningInclude<ExtArgs> | null
    where?: JobOpeningWhereInput
    orderBy?: JobOpeningOrderByWithRelationInput | JobOpeningOrderByWithRelationInput[]
    cursor?: JobOpeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobOpeningScalarFieldEnum | JobOpeningScalarFieldEnum[]
  }

  /**
   * JobAddress without action
   */
  export type JobAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobAddress
     */
    select?: JobAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobAddress
     */
    omit?: JobAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobAddressInclude<ExtArgs> | null
  }


  /**
   * Model JobApplicationQuestion
   */

  export type AggregateJobApplicationQuestion = {
    _count: JobApplicationQuestionCountAggregateOutputType | null
    _avg: JobApplicationQuestionAvgAggregateOutputType | null
    _sum: JobApplicationQuestionSumAggregateOutputType | null
    _min: JobApplicationQuestionMinAggregateOutputType | null
    _max: JobApplicationQuestionMaxAggregateOutputType | null
  }

  export type JobApplicationQuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type JobApplicationQuestionSumAggregateOutputType = {
    id: number | null
  }

  export type JobApplicationQuestionMinAggregateOutputType = {
    id: number | null
    jobOpeningId: string | null
    questionType: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType: $Enums.ApplicationDefaultQuestionType | null
    question: string | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationQuestionMaxAggregateOutputType = {
    id: number | null
    jobOpeningId: string | null
    questionType: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType: $Enums.ApplicationDefaultQuestionType | null
    question: string | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationQuestionCountAggregateOutputType = {
    id: number
    jobOpeningId: number
    questionType: number
    AdditionalQuestionType: number
    defaultQuestionType: number
    question: number
    options: number
    isRequired: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobApplicationQuestionAvgAggregateInputType = {
    id?: true
  }

  export type JobApplicationQuestionSumAggregateInputType = {
    id?: true
  }

  export type JobApplicationQuestionMinAggregateInputType = {
    id?: true
    jobOpeningId?: true
    questionType?: true
    AdditionalQuestionType?: true
    defaultQuestionType?: true
    question?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationQuestionMaxAggregateInputType = {
    id?: true
    jobOpeningId?: true
    questionType?: true
    AdditionalQuestionType?: true
    defaultQuestionType?: true
    question?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationQuestionCountAggregateInputType = {
    id?: true
    jobOpeningId?: true
    questionType?: true
    AdditionalQuestionType?: true
    defaultQuestionType?: true
    question?: true
    options?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobApplicationQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplicationQuestion to aggregate.
     */
    where?: JobApplicationQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplicationQuestions to fetch.
     */
    orderBy?: JobApplicationQuestionOrderByWithRelationInput | JobApplicationQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplicationQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplicationQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplicationQuestions
    **/
    _count?: true | JobApplicationQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobApplicationQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobApplicationQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationQuestionMaxAggregateInputType
  }

  export type GetJobApplicationQuestionAggregateType<T extends JobApplicationQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplicationQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplicationQuestion[P]>
      : GetScalarType<T[P], AggregateJobApplicationQuestion[P]>
  }




  export type JobApplicationQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationQuestionWhereInput
    orderBy?: JobApplicationQuestionOrderByWithAggregationInput | JobApplicationQuestionOrderByWithAggregationInput[]
    by: JobApplicationQuestionScalarFieldEnum[] | JobApplicationQuestionScalarFieldEnum
    having?: JobApplicationQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationQuestionCountAggregateInputType | true
    _avg?: JobApplicationQuestionAvgAggregateInputType
    _sum?: JobApplicationQuestionSumAggregateInputType
    _min?: JobApplicationQuestionMinAggregateInputType
    _max?: JobApplicationQuestionMaxAggregateInputType
  }

  export type JobApplicationQuestionGroupByOutputType = {
    id: number
    jobOpeningId: string
    questionType: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType: $Enums.ApplicationDefaultQuestionType | null
    question: string
    options: string[]
    isRequired: boolean
    createdAt: Date
    updatedAt: Date
    _count: JobApplicationQuestionCountAggregateOutputType | null
    _avg: JobApplicationQuestionAvgAggregateOutputType | null
    _sum: JobApplicationQuestionSumAggregateOutputType | null
    _min: JobApplicationQuestionMinAggregateOutputType | null
    _max: JobApplicationQuestionMaxAggregateOutputType | null
  }

  type GetJobApplicationQuestionGroupByPayload<T extends JobApplicationQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationQuestionGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOpeningId?: boolean
    questionType?: boolean
    AdditionalQuestionType?: boolean
    defaultQuestionType?: boolean
    question?: boolean
    options?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplicationQuestion"]>

  export type JobApplicationQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOpeningId?: boolean
    questionType?: boolean
    AdditionalQuestionType?: boolean
    defaultQuestionType?: boolean
    question?: boolean
    options?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplicationQuestion"]>

  export type JobApplicationQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOpeningId?: boolean
    questionType?: boolean
    AdditionalQuestionType?: boolean
    defaultQuestionType?: boolean
    question?: boolean
    options?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplicationQuestion"]>

  export type JobApplicationQuestionSelectScalar = {
    id?: boolean
    jobOpeningId?: boolean
    questionType?: boolean
    AdditionalQuestionType?: boolean
    defaultQuestionType?: boolean
    question?: boolean
    options?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobApplicationQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOpeningId" | "questionType" | "AdditionalQuestionType" | "defaultQuestionType" | "question" | "options" | "isRequired" | "createdAt" | "updatedAt", ExtArgs["result"]["jobApplicationQuestion"]>
  export type JobApplicationQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
  }
  export type JobApplicationQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
  }
  export type JobApplicationQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
  }

  export type $JobApplicationQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplicationQuestion"
    objects: {
      jobOpening: Prisma.$JobOpeningPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobOpeningId: string
      questionType: $Enums.ApplicationQuestionType | null
      AdditionalQuestionType: $Enums.AppplicationAdditionalQuestionType | null
      defaultQuestionType: $Enums.ApplicationDefaultQuestionType | null
      question: string
      options: string[]
      isRequired: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobApplicationQuestion"]>
    composites: {}
  }

  type JobApplicationQuestionGetPayload<S extends boolean | null | undefined | JobApplicationQuestionDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationQuestionPayload, S>

  type JobApplicationQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationQuestionCountAggregateInputType | true
    }

  export interface JobApplicationQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplicationQuestion'], meta: { name: 'JobApplicationQuestion' } }
    /**
     * Find zero or one JobApplicationQuestion that matches the filter.
     * @param {JobApplicationQuestionFindUniqueArgs} args - Arguments to find a JobApplicationQuestion
     * @example
     * // Get one JobApplicationQuestion
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationQuestionFindUniqueArgs>(args: SelectSubset<T, JobApplicationQuestionFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationQuestionClient<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplicationQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationQuestionFindUniqueOrThrowArgs} args - Arguments to find a JobApplicationQuestion
     * @example
     * // Get one JobApplicationQuestion
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationQuestionClient<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplicationQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationQuestionFindFirstArgs} args - Arguments to find a JobApplicationQuestion
     * @example
     * // Get one JobApplicationQuestion
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationQuestionFindFirstArgs>(args?: SelectSubset<T, JobApplicationQuestionFindFirstArgs<ExtArgs>>): Prisma__JobApplicationQuestionClient<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplicationQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationQuestionFindFirstOrThrowArgs} args - Arguments to find a JobApplicationQuestion
     * @example
     * // Get one JobApplicationQuestion
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationQuestionClient<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplicationQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplicationQuestions
     * const jobApplicationQuestions = await prisma.jobApplicationQuestion.findMany()
     * 
     * // Get first 10 JobApplicationQuestions
     * const jobApplicationQuestions = await prisma.jobApplicationQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationQuestionWithIdOnly = await prisma.jobApplicationQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationQuestionFindManyArgs>(args?: SelectSubset<T, JobApplicationQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplicationQuestion.
     * @param {JobApplicationQuestionCreateArgs} args - Arguments to create a JobApplicationQuestion.
     * @example
     * // Create one JobApplicationQuestion
     * const JobApplicationQuestion = await prisma.jobApplicationQuestion.create({
     *   data: {
     *     // ... data to create a JobApplicationQuestion
     *   }
     * })
     * 
     */
    create<T extends JobApplicationQuestionCreateArgs>(args: SelectSubset<T, JobApplicationQuestionCreateArgs<ExtArgs>>): Prisma__JobApplicationQuestionClient<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplicationQuestions.
     * @param {JobApplicationQuestionCreateManyArgs} args - Arguments to create many JobApplicationQuestions.
     * @example
     * // Create many JobApplicationQuestions
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationQuestionCreateManyArgs>(args?: SelectSubset<T, JobApplicationQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplicationQuestions and returns the data saved in the database.
     * @param {JobApplicationQuestionCreateManyAndReturnArgs} args - Arguments to create many JobApplicationQuestions.
     * @example
     * // Create many JobApplicationQuestions
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplicationQuestions and only return the `id`
     * const jobApplicationQuestionWithIdOnly = await prisma.jobApplicationQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplicationQuestion.
     * @param {JobApplicationQuestionDeleteArgs} args - Arguments to delete one JobApplicationQuestion.
     * @example
     * // Delete one JobApplicationQuestion
     * const JobApplicationQuestion = await prisma.jobApplicationQuestion.delete({
     *   where: {
     *     // ... filter to delete one JobApplicationQuestion
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationQuestionDeleteArgs>(args: SelectSubset<T, JobApplicationQuestionDeleteArgs<ExtArgs>>): Prisma__JobApplicationQuestionClient<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplicationQuestion.
     * @param {JobApplicationQuestionUpdateArgs} args - Arguments to update one JobApplicationQuestion.
     * @example
     * // Update one JobApplicationQuestion
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationQuestionUpdateArgs>(args: SelectSubset<T, JobApplicationQuestionUpdateArgs<ExtArgs>>): Prisma__JobApplicationQuestionClient<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplicationQuestions.
     * @param {JobApplicationQuestionDeleteManyArgs} args - Arguments to filter JobApplicationQuestions to delete.
     * @example
     * // Delete a few JobApplicationQuestions
     * const { count } = await prisma.jobApplicationQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationQuestionDeleteManyArgs>(args?: SelectSubset<T, JobApplicationQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplicationQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplicationQuestions
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationQuestionUpdateManyArgs>(args: SelectSubset<T, JobApplicationQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplicationQuestions and returns the data updated in the database.
     * @param {JobApplicationQuestionUpdateManyAndReturnArgs} args - Arguments to update many JobApplicationQuestions.
     * @example
     * // Update many JobApplicationQuestions
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplicationQuestions and only return the `id`
     * const jobApplicationQuestionWithIdOnly = await prisma.jobApplicationQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobApplicationQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplicationQuestion.
     * @param {JobApplicationQuestionUpsertArgs} args - Arguments to update or create a JobApplicationQuestion.
     * @example
     * // Update or create a JobApplicationQuestion
     * const jobApplicationQuestion = await prisma.jobApplicationQuestion.upsert({
     *   create: {
     *     // ... data to create a JobApplicationQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplicationQuestion we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationQuestionUpsertArgs>(args: SelectSubset<T, JobApplicationQuestionUpsertArgs<ExtArgs>>): Prisma__JobApplicationQuestionClient<$Result.GetResult<Prisma.$JobApplicationQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplicationQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationQuestionCountArgs} args - Arguments to filter JobApplicationQuestions to count.
     * @example
     * // Count the number of JobApplicationQuestions
     * const count = await prisma.jobApplicationQuestion.count({
     *   where: {
     *     // ... the filter for the JobApplicationQuestions we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationQuestionCountArgs>(
      args?: Subset<T, JobApplicationQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplicationQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationQuestionAggregateArgs>(args: Subset<T, JobApplicationQuestionAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationQuestionAggregateType<T>>

    /**
     * Group by JobApplicationQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationQuestionGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplicationQuestion model
   */
  readonly fields: JobApplicationQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplicationQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOpening<T extends JobOpeningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOpeningDefaultArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobApplicationQuestion model
   */
  interface JobApplicationQuestionFieldRefs {
    readonly id: FieldRef<"JobApplicationQuestion", 'Int'>
    readonly jobOpeningId: FieldRef<"JobApplicationQuestion", 'String'>
    readonly questionType: FieldRef<"JobApplicationQuestion", 'ApplicationQuestionType'>
    readonly AdditionalQuestionType: FieldRef<"JobApplicationQuestion", 'AppplicationAdditionalQuestionType'>
    readonly defaultQuestionType: FieldRef<"JobApplicationQuestion", 'ApplicationDefaultQuestionType'>
    readonly question: FieldRef<"JobApplicationQuestion", 'String'>
    readonly options: FieldRef<"JobApplicationQuestion", 'String[]'>
    readonly isRequired: FieldRef<"JobApplicationQuestion", 'Boolean'>
    readonly createdAt: FieldRef<"JobApplicationQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"JobApplicationQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplicationQuestion findUnique
   */
  export type JobApplicationQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * Filter, which JobApplicationQuestion to fetch.
     */
    where: JobApplicationQuestionWhereUniqueInput
  }

  /**
   * JobApplicationQuestion findUniqueOrThrow
   */
  export type JobApplicationQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * Filter, which JobApplicationQuestion to fetch.
     */
    where: JobApplicationQuestionWhereUniqueInput
  }

  /**
   * JobApplicationQuestion findFirst
   */
  export type JobApplicationQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * Filter, which JobApplicationQuestion to fetch.
     */
    where?: JobApplicationQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplicationQuestions to fetch.
     */
    orderBy?: JobApplicationQuestionOrderByWithRelationInput | JobApplicationQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplicationQuestions.
     */
    cursor?: JobApplicationQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplicationQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplicationQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplicationQuestions.
     */
    distinct?: JobApplicationQuestionScalarFieldEnum | JobApplicationQuestionScalarFieldEnum[]
  }

  /**
   * JobApplicationQuestion findFirstOrThrow
   */
  export type JobApplicationQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * Filter, which JobApplicationQuestion to fetch.
     */
    where?: JobApplicationQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplicationQuestions to fetch.
     */
    orderBy?: JobApplicationQuestionOrderByWithRelationInput | JobApplicationQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplicationQuestions.
     */
    cursor?: JobApplicationQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplicationQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplicationQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplicationQuestions.
     */
    distinct?: JobApplicationQuestionScalarFieldEnum | JobApplicationQuestionScalarFieldEnum[]
  }

  /**
   * JobApplicationQuestion findMany
   */
  export type JobApplicationQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * Filter, which JobApplicationQuestions to fetch.
     */
    where?: JobApplicationQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplicationQuestions to fetch.
     */
    orderBy?: JobApplicationQuestionOrderByWithRelationInput | JobApplicationQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplicationQuestions.
     */
    cursor?: JobApplicationQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplicationQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplicationQuestions.
     */
    skip?: number
    distinct?: JobApplicationQuestionScalarFieldEnum | JobApplicationQuestionScalarFieldEnum[]
  }

  /**
   * JobApplicationQuestion create
   */
  export type JobApplicationQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplicationQuestion.
     */
    data: XOR<JobApplicationQuestionCreateInput, JobApplicationQuestionUncheckedCreateInput>
  }

  /**
   * JobApplicationQuestion createMany
   */
  export type JobApplicationQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplicationQuestions.
     */
    data: JobApplicationQuestionCreateManyInput | JobApplicationQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplicationQuestion createManyAndReturn
   */
  export type JobApplicationQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplicationQuestions.
     */
    data: JobApplicationQuestionCreateManyInput | JobApplicationQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplicationQuestion update
   */
  export type JobApplicationQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplicationQuestion.
     */
    data: XOR<JobApplicationQuestionUpdateInput, JobApplicationQuestionUncheckedUpdateInput>
    /**
     * Choose, which JobApplicationQuestion to update.
     */
    where: JobApplicationQuestionWhereUniqueInput
  }

  /**
   * JobApplicationQuestion updateMany
   */
  export type JobApplicationQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplicationQuestions.
     */
    data: XOR<JobApplicationQuestionUpdateManyMutationInput, JobApplicationQuestionUncheckedUpdateManyInput>
    /**
     * Filter which JobApplicationQuestions to update
     */
    where?: JobApplicationQuestionWhereInput
    /**
     * Limit how many JobApplicationQuestions to update.
     */
    limit?: number
  }

  /**
   * JobApplicationQuestion updateManyAndReturn
   */
  export type JobApplicationQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * The data used to update JobApplicationQuestions.
     */
    data: XOR<JobApplicationQuestionUpdateManyMutationInput, JobApplicationQuestionUncheckedUpdateManyInput>
    /**
     * Filter which JobApplicationQuestions to update
     */
    where?: JobApplicationQuestionWhereInput
    /**
     * Limit how many JobApplicationQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplicationQuestion upsert
   */
  export type JobApplicationQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplicationQuestion to update in case it exists.
     */
    where: JobApplicationQuestionWhereUniqueInput
    /**
     * In case the JobApplicationQuestion found by the `where` argument doesn't exist, create a new JobApplicationQuestion with this data.
     */
    create: XOR<JobApplicationQuestionCreateInput, JobApplicationQuestionUncheckedCreateInput>
    /**
     * In case the JobApplicationQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationQuestionUpdateInput, JobApplicationQuestionUncheckedUpdateInput>
  }

  /**
   * JobApplicationQuestion delete
   */
  export type JobApplicationQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
    /**
     * Filter which JobApplicationQuestion to delete.
     */
    where: JobApplicationQuestionWhereUniqueInput
  }

  /**
   * JobApplicationQuestion deleteMany
   */
  export type JobApplicationQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplicationQuestions to delete
     */
    where?: JobApplicationQuestionWhereInput
    /**
     * Limit how many JobApplicationQuestions to delete.
     */
    limit?: number
  }

  /**
   * JobApplicationQuestion without action
   */
  export type JobApplicationQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationQuestion
     */
    select?: JobApplicationQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplicationQuestion
     */
    omit?: JobApplicationQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationQuestionInclude<ExtArgs> | null
  }


  /**
   * Model JobPipeline
   */

  export type AggregateJobPipeline = {
    _count: JobPipelineCountAggregateOutputType | null
    _min: JobPipelineMinAggregateOutputType | null
    _max: JobPipelineMaxAggregateOutputType | null
  }

  export type JobPipelineMinAggregateOutputType = {
    id: string | null
    jobOpeningId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobPipelineMaxAggregateOutputType = {
    id: string | null
    jobOpeningId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobPipelineCountAggregateOutputType = {
    id: number
    jobOpeningId: number
    stages: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobPipelineMinAggregateInputType = {
    id?: true
    jobOpeningId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobPipelineMaxAggregateInputType = {
    id?: true
    jobOpeningId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobPipelineCountAggregateInputType = {
    id?: true
    jobOpeningId?: true
    stages?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobPipelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPipeline to aggregate.
     */
    where?: JobPipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPipelines to fetch.
     */
    orderBy?: JobPipelineOrderByWithRelationInput | JobPipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPipelines
    **/
    _count?: true | JobPipelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPipelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPipelineMaxAggregateInputType
  }

  export type GetJobPipelineAggregateType<T extends JobPipelineAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPipeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPipeline[P]>
      : GetScalarType<T[P], AggregateJobPipeline[P]>
  }




  export type JobPipelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPipelineWhereInput
    orderBy?: JobPipelineOrderByWithAggregationInput | JobPipelineOrderByWithAggregationInput[]
    by: JobPipelineScalarFieldEnum[] | JobPipelineScalarFieldEnum
    having?: JobPipelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPipelineCountAggregateInputType | true
    _min?: JobPipelineMinAggregateInputType
    _max?: JobPipelineMaxAggregateInputType
  }

  export type JobPipelineGroupByOutputType = {
    id: string
    jobOpeningId: string
    stages: JsonValue
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: JobPipelineCountAggregateOutputType | null
    _min: JobPipelineMinAggregateOutputType | null
    _max: JobPipelineMaxAggregateOutputType | null
  }

  type GetJobPipelineGroupByPayload<T extends JobPipelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPipelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPipelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPipelineGroupByOutputType[P]>
            : GetScalarType<T[P], JobPipelineGroupByOutputType[P]>
        }
      >
    >


  export type JobPipelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOpeningId?: boolean
    stages?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPipeline"]>

  export type JobPipelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOpeningId?: boolean
    stages?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPipeline"]>

  export type JobPipelineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobOpeningId?: boolean
    stages?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPipeline"]>

  export type JobPipelineSelectScalar = {
    id?: boolean
    jobOpeningId?: boolean
    stages?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobPipelineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobOpeningId" | "stages" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["jobPipeline"]>
  export type JobPipelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobPipelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobPipelineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobOpening?: boolean | JobOpeningDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobPipelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPipeline"
    objects: {
      jobOpening: Prisma.$JobOpeningPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobOpeningId: string
      stages: Prisma.JsonValue
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobPipeline"]>
    composites: {}
  }

  type JobPipelineGetPayload<S extends boolean | null | undefined | JobPipelineDefaultArgs> = $Result.GetResult<Prisma.$JobPipelinePayload, S>

  type JobPipelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobPipelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobPipelineCountAggregateInputType | true
    }

  export interface JobPipelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPipeline'], meta: { name: 'JobPipeline' } }
    /**
     * Find zero or one JobPipeline that matches the filter.
     * @param {JobPipelineFindUniqueArgs} args - Arguments to find a JobPipeline
     * @example
     * // Get one JobPipeline
     * const jobPipeline = await prisma.jobPipeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPipelineFindUniqueArgs>(args: SelectSubset<T, JobPipelineFindUniqueArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobPipeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPipelineFindUniqueOrThrowArgs} args - Arguments to find a JobPipeline
     * @example
     * // Get one JobPipeline
     * const jobPipeline = await prisma.jobPipeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPipelineFindUniqueOrThrowArgs>(args: SelectSubset<T, JobPipelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPipeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPipelineFindFirstArgs} args - Arguments to find a JobPipeline
     * @example
     * // Get one JobPipeline
     * const jobPipeline = await prisma.jobPipeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPipelineFindFirstArgs>(args?: SelectSubset<T, JobPipelineFindFirstArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPipeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPipelineFindFirstOrThrowArgs} args - Arguments to find a JobPipeline
     * @example
     * // Get one JobPipeline
     * const jobPipeline = await prisma.jobPipeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPipelineFindFirstOrThrowArgs>(args?: SelectSubset<T, JobPipelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPipelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPipelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPipelines
     * const jobPipelines = await prisma.jobPipeline.findMany()
     * 
     * // Get first 10 JobPipelines
     * const jobPipelines = await prisma.jobPipeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPipelineWithIdOnly = await prisma.jobPipeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobPipelineFindManyArgs>(args?: SelectSubset<T, JobPipelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobPipeline.
     * @param {JobPipelineCreateArgs} args - Arguments to create a JobPipeline.
     * @example
     * // Create one JobPipeline
     * const JobPipeline = await prisma.jobPipeline.create({
     *   data: {
     *     // ... data to create a JobPipeline
     *   }
     * })
     * 
     */
    create<T extends JobPipelineCreateArgs>(args: SelectSubset<T, JobPipelineCreateArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobPipelines.
     * @param {JobPipelineCreateManyArgs} args - Arguments to create many JobPipelines.
     * @example
     * // Create many JobPipelines
     * const jobPipeline = await prisma.jobPipeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobPipelineCreateManyArgs>(args?: SelectSubset<T, JobPipelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobPipelines and returns the data saved in the database.
     * @param {JobPipelineCreateManyAndReturnArgs} args - Arguments to create many JobPipelines.
     * @example
     * // Create many JobPipelines
     * const jobPipeline = await prisma.jobPipeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobPipelines and only return the `id`
     * const jobPipelineWithIdOnly = await prisma.jobPipeline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobPipelineCreateManyAndReturnArgs>(args?: SelectSubset<T, JobPipelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobPipeline.
     * @param {JobPipelineDeleteArgs} args - Arguments to delete one JobPipeline.
     * @example
     * // Delete one JobPipeline
     * const JobPipeline = await prisma.jobPipeline.delete({
     *   where: {
     *     // ... filter to delete one JobPipeline
     *   }
     * })
     * 
     */
    delete<T extends JobPipelineDeleteArgs>(args: SelectSubset<T, JobPipelineDeleteArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobPipeline.
     * @param {JobPipelineUpdateArgs} args - Arguments to update one JobPipeline.
     * @example
     * // Update one JobPipeline
     * const jobPipeline = await prisma.jobPipeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobPipelineUpdateArgs>(args: SelectSubset<T, JobPipelineUpdateArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobPipelines.
     * @param {JobPipelineDeleteManyArgs} args - Arguments to filter JobPipelines to delete.
     * @example
     * // Delete a few JobPipelines
     * const { count } = await prisma.jobPipeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobPipelineDeleteManyArgs>(args?: SelectSubset<T, JobPipelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPipelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPipelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPipelines
     * const jobPipeline = await prisma.jobPipeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobPipelineUpdateManyArgs>(args: SelectSubset<T, JobPipelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPipelines and returns the data updated in the database.
     * @param {JobPipelineUpdateManyAndReturnArgs} args - Arguments to update many JobPipelines.
     * @example
     * // Update many JobPipelines
     * const jobPipeline = await prisma.jobPipeline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobPipelines and only return the `id`
     * const jobPipelineWithIdOnly = await prisma.jobPipeline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobPipelineUpdateManyAndReturnArgs>(args: SelectSubset<T, JobPipelineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobPipeline.
     * @param {JobPipelineUpsertArgs} args - Arguments to update or create a JobPipeline.
     * @example
     * // Update or create a JobPipeline
     * const jobPipeline = await prisma.jobPipeline.upsert({
     *   create: {
     *     // ... data to create a JobPipeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPipeline we want to update
     *   }
     * })
     */
    upsert<T extends JobPipelineUpsertArgs>(args: SelectSubset<T, JobPipelineUpsertArgs<ExtArgs>>): Prisma__JobPipelineClient<$Result.GetResult<Prisma.$JobPipelinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobPipelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPipelineCountArgs} args - Arguments to filter JobPipelines to count.
     * @example
     * // Count the number of JobPipelines
     * const count = await prisma.jobPipeline.count({
     *   where: {
     *     // ... the filter for the JobPipelines we want to count
     *   }
     * })
    **/
    count<T extends JobPipelineCountArgs>(
      args?: Subset<T, JobPipelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPipelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPipeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPipelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobPipelineAggregateArgs>(args: Subset<T, JobPipelineAggregateArgs>): Prisma.PrismaPromise<GetJobPipelineAggregateType<T>>

    /**
     * Group by JobPipeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPipelineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobPipelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPipelineGroupByArgs['orderBy'] }
        : { orderBy?: JobPipelineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobPipelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPipelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPipeline model
   */
  readonly fields: JobPipelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPipeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPipelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobOpening<T extends JobOpeningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobOpeningDefaultArgs<ExtArgs>>): Prisma__JobOpeningClient<$Result.GetResult<Prisma.$JobOpeningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobPipeline model
   */
  interface JobPipelineFieldRefs {
    readonly id: FieldRef<"JobPipeline", 'String'>
    readonly jobOpeningId: FieldRef<"JobPipeline", 'String'>
    readonly stages: FieldRef<"JobPipeline", 'Json'>
    readonly createdById: FieldRef<"JobPipeline", 'String'>
    readonly createdAt: FieldRef<"JobPipeline", 'DateTime'>
    readonly updatedAt: FieldRef<"JobPipeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobPipeline findUnique
   */
  export type JobPipelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * Filter, which JobPipeline to fetch.
     */
    where: JobPipelineWhereUniqueInput
  }

  /**
   * JobPipeline findUniqueOrThrow
   */
  export type JobPipelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * Filter, which JobPipeline to fetch.
     */
    where: JobPipelineWhereUniqueInput
  }

  /**
   * JobPipeline findFirst
   */
  export type JobPipelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * Filter, which JobPipeline to fetch.
     */
    where?: JobPipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPipelines to fetch.
     */
    orderBy?: JobPipelineOrderByWithRelationInput | JobPipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPipelines.
     */
    cursor?: JobPipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPipelines.
     */
    distinct?: JobPipelineScalarFieldEnum | JobPipelineScalarFieldEnum[]
  }

  /**
   * JobPipeline findFirstOrThrow
   */
  export type JobPipelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * Filter, which JobPipeline to fetch.
     */
    where?: JobPipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPipelines to fetch.
     */
    orderBy?: JobPipelineOrderByWithRelationInput | JobPipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPipelines.
     */
    cursor?: JobPipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPipelines.
     */
    distinct?: JobPipelineScalarFieldEnum | JobPipelineScalarFieldEnum[]
  }

  /**
   * JobPipeline findMany
   */
  export type JobPipelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * Filter, which JobPipelines to fetch.
     */
    where?: JobPipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPipelines to fetch.
     */
    orderBy?: JobPipelineOrderByWithRelationInput | JobPipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPipelines.
     */
    cursor?: JobPipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPipelines.
     */
    skip?: number
    distinct?: JobPipelineScalarFieldEnum | JobPipelineScalarFieldEnum[]
  }

  /**
   * JobPipeline create
   */
  export type JobPipelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPipeline.
     */
    data: XOR<JobPipelineCreateInput, JobPipelineUncheckedCreateInput>
  }

  /**
   * JobPipeline createMany
   */
  export type JobPipelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPipelines.
     */
    data: JobPipelineCreateManyInput | JobPipelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPipeline createManyAndReturn
   */
  export type JobPipelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * The data used to create many JobPipelines.
     */
    data: JobPipelineCreateManyInput | JobPipelineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobPipeline update
   */
  export type JobPipelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPipeline.
     */
    data: XOR<JobPipelineUpdateInput, JobPipelineUncheckedUpdateInput>
    /**
     * Choose, which JobPipeline to update.
     */
    where: JobPipelineWhereUniqueInput
  }

  /**
   * JobPipeline updateMany
   */
  export type JobPipelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPipelines.
     */
    data: XOR<JobPipelineUpdateManyMutationInput, JobPipelineUncheckedUpdateManyInput>
    /**
     * Filter which JobPipelines to update
     */
    where?: JobPipelineWhereInput
    /**
     * Limit how many JobPipelines to update.
     */
    limit?: number
  }

  /**
   * JobPipeline updateManyAndReturn
   */
  export type JobPipelineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * The data used to update JobPipelines.
     */
    data: XOR<JobPipelineUpdateManyMutationInput, JobPipelineUncheckedUpdateManyInput>
    /**
     * Filter which JobPipelines to update
     */
    where?: JobPipelineWhereInput
    /**
     * Limit how many JobPipelines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobPipeline upsert
   */
  export type JobPipelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPipeline to update in case it exists.
     */
    where: JobPipelineWhereUniqueInput
    /**
     * In case the JobPipeline found by the `where` argument doesn't exist, create a new JobPipeline with this data.
     */
    create: XOR<JobPipelineCreateInput, JobPipelineUncheckedCreateInput>
    /**
     * In case the JobPipeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPipelineUpdateInput, JobPipelineUncheckedUpdateInput>
  }

  /**
   * JobPipeline delete
   */
  export type JobPipelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
    /**
     * Filter which JobPipeline to delete.
     */
    where: JobPipelineWhereUniqueInput
  }

  /**
   * JobPipeline deleteMany
   */
  export type JobPipelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPipelines to delete
     */
    where?: JobPipelineWhereInput
    /**
     * Limit how many JobPipelines to delete.
     */
    limit?: number
  }

  /**
   * JobPipeline without action
   */
  export type JobPipelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPipeline
     */
    select?: JobPipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPipeline
     */
    omit?: JobPipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPipelineInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isSignedUp: 'isSignedUp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    departmentLeadId: 'departmentLeadId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const JobOpeningScalarFieldEnum: {
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

  export type JobOpeningScalarFieldEnum = (typeof JobOpeningScalarFieldEnum)[keyof typeof JobOpeningScalarFieldEnum]


  export const JobtitleScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type JobtitleScalarFieldEnum = (typeof JobtitleScalarFieldEnum)[keyof typeof JobtitleScalarFieldEnum]


  export const JobAddressScalarFieldEnum: {
    id: 'id',
    addressLine: 'addressLine',
    province: 'province',
    region: 'region',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type JobAddressScalarFieldEnum = (typeof JobAddressScalarFieldEnum)[keyof typeof JobAddressScalarFieldEnum]


  export const JobApplicationQuestionScalarFieldEnum: {
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

  export type JobApplicationQuestionScalarFieldEnum = (typeof JobApplicationQuestionScalarFieldEnum)[keyof typeof JobApplicationQuestionScalarFieldEnum]


  export const JobPipelineScalarFieldEnum: {
    id: 'id',
    jobOpeningId: 'jobOpeningId',
    stages: 'stages',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobPipelineScalarFieldEnum = (typeof JobPipelineScalarFieldEnum)[keyof typeof JobPipelineScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Industries'
   */
  export type EnumIndustriesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Industries'>
    


  /**
   * Reference to a field of type 'Industries[]'
   */
  export type ListEnumIndustriesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Industries[]'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType[]'>
    


  /**
   * Reference to a field of type 'JobOpeningStatus'
   */
  export type EnumJobOpeningStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobOpeningStatus'>
    


  /**
   * Reference to a field of type 'JobOpeningStatus[]'
   */
  export type ListEnumJobOpeningStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobOpeningStatus[]'>
    


  /**
   * Reference to a field of type 'WorkExperience'
   */
  export type EnumWorkExperienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkExperience'>
    


  /**
   * Reference to a field of type 'WorkExperience[]'
   */
  export type ListEnumWorkExperienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkExperience[]'>
    


  /**
   * Reference to a field of type 'JobLocation'
   */
  export type EnumJobLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobLocation'>
    


  /**
   * Reference to a field of type 'JobLocation[]'
   */
  export type ListEnumJobLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobLocation[]'>
    


  /**
   * Reference to a field of type 'ApplicationQuestionType'
   */
  export type EnumApplicationQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationQuestionType'>
    


  /**
   * Reference to a field of type 'ApplicationQuestionType[]'
   */
  export type ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationQuestionType[]'>
    


  /**
   * Reference to a field of type 'AppplicationAdditionalQuestionType'
   */
  export type EnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppplicationAdditionalQuestionType'>
    


  /**
   * Reference to a field of type 'AppplicationAdditionalQuestionType[]'
   */
  export type ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppplicationAdditionalQuestionType[]'>
    


  /**
   * Reference to a field of type 'ApplicationDefaultQuestionType'
   */
  export type EnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationDefaultQuestionType'>
    


  /**
   * Reference to a field of type 'ApplicationDefaultQuestionType[]'
   */
  export type ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationDefaultQuestionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isSignedUp?: BoolFilter<"User"> | boolean
    departmentsLed?: DepartmentListRelationFilter
    departmentsCreated?: DepartmentListRelationFilter
    jobOpenings?: JobOpeningListRelationFilter
    assignedJobs?: JobOpeningListRelationFilter
    JobPipeline?: JobPipelineListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isSignedUp?: SortOrder
    departmentsLed?: DepartmentOrderByRelationAggregateInput
    departmentsCreated?: DepartmentOrderByRelationAggregateInput
    jobOpenings?: JobOpeningOrderByRelationAggregateInput
    assignedJobs?: JobOpeningOrderByRelationAggregateInput
    JobPipeline?: JobPipelineOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isSignedUp?: BoolFilter<"User"> | boolean
    departmentsLed?: DepartmentListRelationFilter
    departmentsCreated?: DepartmentListRelationFilter
    jobOpenings?: JobOpeningListRelationFilter
    assignedJobs?: JobOpeningListRelationFilter
    JobPipeline?: JobPipelineListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isSignedUp?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isSignedUp?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    departmentLeadId?: StringFilter<"Department"> | string
    createdById?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    departmentLead?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    JobOpening?: JobOpeningListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentLeadId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departmentLead?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    JobOpening?: JobOpeningOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    departmentLeadId?: StringFilter<"Department"> | string
    createdById?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    departmentLead?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    JobOpening?: JobOpeningListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentLeadId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    departmentLeadId?: StringWithAggregatesFilter<"Department"> | string
    createdById?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type JobOpeningWhereInput = {
    AND?: JobOpeningWhereInput | JobOpeningWhereInput[]
    OR?: JobOpeningWhereInput[]
    NOT?: JobOpeningWhereInput | JobOpeningWhereInput[]
    id?: StringFilter<"JobOpening"> | string
    internalJobCode?: StringFilter<"JobOpening"> | string
    postingTitle?: StringFilter<"JobOpening"> | string
    jobTitleId?: IntNullableFilter<"JobOpening"> | number | null
    departmentId?: StringFilter<"JobOpening"> | string
    hiringManagerId?: StringFilter<"JobOpening"> | string
    numberOfVacancies?: IntNullableFilter<"JobOpening"> | number | null
    industry?: EnumIndustriesFilter<"JobOpening"> | $Enums.Industries
    jobType?: EnumJobTypeFilter<"JobOpening"> | $Enums.JobType
    initiationDate?: DateTimeNullableFilter<"JobOpening"> | Date | string | null
    targetDate?: DateTimeNullableFilter<"JobOpening"> | Date | string | null
    status?: EnumJobOpeningStatusFilter<"JobOpening"> | $Enums.JobOpeningStatus
    salaryRange?: StringNullableFilter<"JobOpening"> | string | null
    experienceLevel?: EnumWorkExperienceFilter<"JobOpening"> | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFilter<"JobOpening"> | $Enums.JobLocation
    addressId?: IntNullableFilter<"JobOpening"> | number | null
    requirements?: StringNullableFilter<"JobOpening"> | string | null
    jobDescription?: StringNullableFilter<"JobOpening"> | string | null
    benefits?: StringNullableFilter<"JobOpening"> | string | null
    createdAt?: DateTimeFilter<"JobOpening"> | Date | string
    updatedAt?: DateTimeFilter<"JobOpening"> | Date | string
    jobTitle?: XOR<JobtitleNullableScalarRelationFilter, JobtitleWhereInput> | null
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    assignedRecruiters?: UserListRelationFilter
    hiringManager?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<JobAddressNullableScalarRelationFilter, JobAddressWhereInput> | null
    applicationQuestions?: JobApplicationQuestionListRelationFilter
    pipeline?: XOR<JobPipelineNullableScalarRelationFilter, JobPipelineWhereInput> | null
  }

  export type JobOpeningOrderByWithRelationInput = {
    id?: SortOrder
    internalJobCode?: SortOrder
    postingTitle?: SortOrder
    jobTitleId?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    hiringManagerId?: SortOrder
    numberOfVacancies?: SortOrderInput | SortOrder
    industry?: SortOrder
    jobType?: SortOrder
    initiationDate?: SortOrderInput | SortOrder
    targetDate?: SortOrderInput | SortOrder
    status?: SortOrder
    salaryRange?: SortOrderInput | SortOrder
    experienceLevel?: SortOrder
    jobLocation?: SortOrder
    addressId?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobTitle?: JobtitleOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    assignedRecruiters?: UserOrderByRelationAggregateInput
    hiringManager?: UserOrderByWithRelationInput
    address?: JobAddressOrderByWithRelationInput
    applicationQuestions?: JobApplicationQuestionOrderByRelationAggregateInput
    pipeline?: JobPipelineOrderByWithRelationInput
  }

  export type JobOpeningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postingTitle?: string
    AND?: JobOpeningWhereInput | JobOpeningWhereInput[]
    OR?: JobOpeningWhereInput[]
    NOT?: JobOpeningWhereInput | JobOpeningWhereInput[]
    internalJobCode?: StringFilter<"JobOpening"> | string
    jobTitleId?: IntNullableFilter<"JobOpening"> | number | null
    departmentId?: StringFilter<"JobOpening"> | string
    hiringManagerId?: StringFilter<"JobOpening"> | string
    numberOfVacancies?: IntNullableFilter<"JobOpening"> | number | null
    industry?: EnumIndustriesFilter<"JobOpening"> | $Enums.Industries
    jobType?: EnumJobTypeFilter<"JobOpening"> | $Enums.JobType
    initiationDate?: DateTimeNullableFilter<"JobOpening"> | Date | string | null
    targetDate?: DateTimeNullableFilter<"JobOpening"> | Date | string | null
    status?: EnumJobOpeningStatusFilter<"JobOpening"> | $Enums.JobOpeningStatus
    salaryRange?: StringNullableFilter<"JobOpening"> | string | null
    experienceLevel?: EnumWorkExperienceFilter<"JobOpening"> | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFilter<"JobOpening"> | $Enums.JobLocation
    addressId?: IntNullableFilter<"JobOpening"> | number | null
    requirements?: StringNullableFilter<"JobOpening"> | string | null
    jobDescription?: StringNullableFilter<"JobOpening"> | string | null
    benefits?: StringNullableFilter<"JobOpening"> | string | null
    createdAt?: DateTimeFilter<"JobOpening"> | Date | string
    updatedAt?: DateTimeFilter<"JobOpening"> | Date | string
    jobTitle?: XOR<JobtitleNullableScalarRelationFilter, JobtitleWhereInput> | null
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    assignedRecruiters?: UserListRelationFilter
    hiringManager?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<JobAddressNullableScalarRelationFilter, JobAddressWhereInput> | null
    applicationQuestions?: JobApplicationQuestionListRelationFilter
    pipeline?: XOR<JobPipelineNullableScalarRelationFilter, JobPipelineWhereInput> | null
  }, "id" | "postingTitle">

  export type JobOpeningOrderByWithAggregationInput = {
    id?: SortOrder
    internalJobCode?: SortOrder
    postingTitle?: SortOrder
    jobTitleId?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    hiringManagerId?: SortOrder
    numberOfVacancies?: SortOrderInput | SortOrder
    industry?: SortOrder
    jobType?: SortOrder
    initiationDate?: SortOrderInput | SortOrder
    targetDate?: SortOrderInput | SortOrder
    status?: SortOrder
    salaryRange?: SortOrderInput | SortOrder
    experienceLevel?: SortOrder
    jobLocation?: SortOrder
    addressId?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobOpeningCountOrderByAggregateInput
    _avg?: JobOpeningAvgOrderByAggregateInput
    _max?: JobOpeningMaxOrderByAggregateInput
    _min?: JobOpeningMinOrderByAggregateInput
    _sum?: JobOpeningSumOrderByAggregateInput
  }

  export type JobOpeningScalarWhereWithAggregatesInput = {
    AND?: JobOpeningScalarWhereWithAggregatesInput | JobOpeningScalarWhereWithAggregatesInput[]
    OR?: JobOpeningScalarWhereWithAggregatesInput[]
    NOT?: JobOpeningScalarWhereWithAggregatesInput | JobOpeningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobOpening"> | string
    internalJobCode?: StringWithAggregatesFilter<"JobOpening"> | string
    postingTitle?: StringWithAggregatesFilter<"JobOpening"> | string
    jobTitleId?: IntNullableWithAggregatesFilter<"JobOpening"> | number | null
    departmentId?: StringWithAggregatesFilter<"JobOpening"> | string
    hiringManagerId?: StringWithAggregatesFilter<"JobOpening"> | string
    numberOfVacancies?: IntNullableWithAggregatesFilter<"JobOpening"> | number | null
    industry?: EnumIndustriesWithAggregatesFilter<"JobOpening"> | $Enums.Industries
    jobType?: EnumJobTypeWithAggregatesFilter<"JobOpening"> | $Enums.JobType
    initiationDate?: DateTimeNullableWithAggregatesFilter<"JobOpening"> | Date | string | null
    targetDate?: DateTimeNullableWithAggregatesFilter<"JobOpening"> | Date | string | null
    status?: EnumJobOpeningStatusWithAggregatesFilter<"JobOpening"> | $Enums.JobOpeningStatus
    salaryRange?: StringNullableWithAggregatesFilter<"JobOpening"> | string | null
    experienceLevel?: EnumWorkExperienceWithAggregatesFilter<"JobOpening"> | $Enums.WorkExperience
    jobLocation?: EnumJobLocationWithAggregatesFilter<"JobOpening"> | $Enums.JobLocation
    addressId?: IntNullableWithAggregatesFilter<"JobOpening"> | number | null
    requirements?: StringNullableWithAggregatesFilter<"JobOpening"> | string | null
    jobDescription?: StringNullableWithAggregatesFilter<"JobOpening"> | string | null
    benefits?: StringNullableWithAggregatesFilter<"JobOpening"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobOpening"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobOpening"> | Date | string
  }

  export type JobtitleWhereInput = {
    AND?: JobtitleWhereInput | JobtitleWhereInput[]
    OR?: JobtitleWhereInput[]
    NOT?: JobtitleWhereInput | JobtitleWhereInput[]
    id?: IntFilter<"Jobtitle"> | number
    title?: StringFilter<"Jobtitle"> | string
    jobOpenings?: JobOpeningListRelationFilter
  }

  export type JobtitleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    jobOpenings?: JobOpeningOrderByRelationAggregateInput
  }

  export type JobtitleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobtitleWhereInput | JobtitleWhereInput[]
    OR?: JobtitleWhereInput[]
    NOT?: JobtitleWhereInput | JobtitleWhereInput[]
    title?: StringFilter<"Jobtitle"> | string
    jobOpenings?: JobOpeningListRelationFilter
  }, "id">

  export type JobtitleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: JobtitleCountOrderByAggregateInput
    _avg?: JobtitleAvgOrderByAggregateInput
    _max?: JobtitleMaxOrderByAggregateInput
    _min?: JobtitleMinOrderByAggregateInput
    _sum?: JobtitleSumOrderByAggregateInput
  }

  export type JobtitleScalarWhereWithAggregatesInput = {
    AND?: JobtitleScalarWhereWithAggregatesInput | JobtitleScalarWhereWithAggregatesInput[]
    OR?: JobtitleScalarWhereWithAggregatesInput[]
    NOT?: JobtitleScalarWhereWithAggregatesInput | JobtitleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jobtitle"> | number
    title?: StringWithAggregatesFilter<"Jobtitle"> | string
  }

  export type JobAddressWhereInput = {
    AND?: JobAddressWhereInput | JobAddressWhereInput[]
    OR?: JobAddressWhereInput[]
    NOT?: JobAddressWhereInput | JobAddressWhereInput[]
    id?: IntFilter<"JobAddress"> | number
    addressLine?: StringFilter<"JobAddress"> | string
    province?: StringNullableFilter<"JobAddress"> | string | null
    region?: StringNullableFilter<"JobAddress"> | string | null
    country?: StringNullableFilter<"JobAddress"> | string | null
    postalCode?: StringNullableFilter<"JobAddress"> | string | null
    JobOpening?: JobOpeningListRelationFilter
  }

  export type JobAddressOrderByWithRelationInput = {
    id?: SortOrder
    addressLine?: SortOrder
    province?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    JobOpening?: JobOpeningOrderByRelationAggregateInput
  }

  export type JobAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobAddressWhereInput | JobAddressWhereInput[]
    OR?: JobAddressWhereInput[]
    NOT?: JobAddressWhereInput | JobAddressWhereInput[]
    addressLine?: StringFilter<"JobAddress"> | string
    province?: StringNullableFilter<"JobAddress"> | string | null
    region?: StringNullableFilter<"JobAddress"> | string | null
    country?: StringNullableFilter<"JobAddress"> | string | null
    postalCode?: StringNullableFilter<"JobAddress"> | string | null
    JobOpening?: JobOpeningListRelationFilter
  }, "id">

  export type JobAddressOrderByWithAggregationInput = {
    id?: SortOrder
    addressLine?: SortOrder
    province?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    _count?: JobAddressCountOrderByAggregateInput
    _avg?: JobAddressAvgOrderByAggregateInput
    _max?: JobAddressMaxOrderByAggregateInput
    _min?: JobAddressMinOrderByAggregateInput
    _sum?: JobAddressSumOrderByAggregateInput
  }

  export type JobAddressScalarWhereWithAggregatesInput = {
    AND?: JobAddressScalarWhereWithAggregatesInput | JobAddressScalarWhereWithAggregatesInput[]
    OR?: JobAddressScalarWhereWithAggregatesInput[]
    NOT?: JobAddressScalarWhereWithAggregatesInput | JobAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobAddress"> | number
    addressLine?: StringWithAggregatesFilter<"JobAddress"> | string
    province?: StringNullableWithAggregatesFilter<"JobAddress"> | string | null
    region?: StringNullableWithAggregatesFilter<"JobAddress"> | string | null
    country?: StringNullableWithAggregatesFilter<"JobAddress"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"JobAddress"> | string | null
  }

  export type JobApplicationQuestionWhereInput = {
    AND?: JobApplicationQuestionWhereInput | JobApplicationQuestionWhereInput[]
    OR?: JobApplicationQuestionWhereInput[]
    NOT?: JobApplicationQuestionWhereInput | JobApplicationQuestionWhereInput[]
    id?: IntFilter<"JobApplicationQuestion"> | number
    jobOpeningId?: StringFilter<"JobApplicationQuestion"> | string
    questionType?: EnumApplicationQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: EnumAppplicationAdditionalQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: EnumApplicationDefaultQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFilter<"JobApplicationQuestion"> | string
    options?: StringNullableListFilter<"JobApplicationQuestion">
    isRequired?: BoolFilter<"JobApplicationQuestion"> | boolean
    createdAt?: DateTimeFilter<"JobApplicationQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplicationQuestion"> | Date | string
    jobOpening?: XOR<JobOpeningScalarRelationFilter, JobOpeningWhereInput>
  }

  export type JobApplicationQuestionOrderByWithRelationInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    questionType?: SortOrderInput | SortOrder
    AdditionalQuestionType?: SortOrderInput | SortOrder
    defaultQuestionType?: SortOrderInput | SortOrder
    question?: SortOrder
    options?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOpening?: JobOpeningOrderByWithRelationInput
  }

  export type JobApplicationQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobApplicationQuestionWhereInput | JobApplicationQuestionWhereInput[]
    OR?: JobApplicationQuestionWhereInput[]
    NOT?: JobApplicationQuestionWhereInput | JobApplicationQuestionWhereInput[]
    jobOpeningId?: StringFilter<"JobApplicationQuestion"> | string
    questionType?: EnumApplicationQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: EnumAppplicationAdditionalQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: EnumApplicationDefaultQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFilter<"JobApplicationQuestion"> | string
    options?: StringNullableListFilter<"JobApplicationQuestion">
    isRequired?: BoolFilter<"JobApplicationQuestion"> | boolean
    createdAt?: DateTimeFilter<"JobApplicationQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplicationQuestion"> | Date | string
    jobOpening?: XOR<JobOpeningScalarRelationFilter, JobOpeningWhereInput>
  }, "id">

  export type JobApplicationQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    questionType?: SortOrderInput | SortOrder
    AdditionalQuestionType?: SortOrderInput | SortOrder
    defaultQuestionType?: SortOrderInput | SortOrder
    question?: SortOrder
    options?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobApplicationQuestionCountOrderByAggregateInput
    _avg?: JobApplicationQuestionAvgOrderByAggregateInput
    _max?: JobApplicationQuestionMaxOrderByAggregateInput
    _min?: JobApplicationQuestionMinOrderByAggregateInput
    _sum?: JobApplicationQuestionSumOrderByAggregateInput
  }

  export type JobApplicationQuestionScalarWhereWithAggregatesInput = {
    AND?: JobApplicationQuestionScalarWhereWithAggregatesInput | JobApplicationQuestionScalarWhereWithAggregatesInput[]
    OR?: JobApplicationQuestionScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationQuestionScalarWhereWithAggregatesInput | JobApplicationQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobApplicationQuestion"> | number
    jobOpeningId?: StringWithAggregatesFilter<"JobApplicationQuestion"> | string
    questionType?: EnumApplicationQuestionTypeNullableWithAggregatesFilter<"JobApplicationQuestion"> | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: EnumAppplicationAdditionalQuestionTypeNullableWithAggregatesFilter<"JobApplicationQuestion"> | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: EnumApplicationDefaultQuestionTypeNullableWithAggregatesFilter<"JobApplicationQuestion"> | $Enums.ApplicationDefaultQuestionType | null
    question?: StringWithAggregatesFilter<"JobApplicationQuestion"> | string
    options?: StringNullableListFilter<"JobApplicationQuestion">
    isRequired?: BoolWithAggregatesFilter<"JobApplicationQuestion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"JobApplicationQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobApplicationQuestion"> | Date | string
  }

  export type JobPipelineWhereInput = {
    AND?: JobPipelineWhereInput | JobPipelineWhereInput[]
    OR?: JobPipelineWhereInput[]
    NOT?: JobPipelineWhereInput | JobPipelineWhereInput[]
    id?: StringFilter<"JobPipeline"> | string
    jobOpeningId?: StringFilter<"JobPipeline"> | string
    stages?: JsonFilter<"JobPipeline">
    createdById?: StringFilter<"JobPipeline"> | string
    createdAt?: DateTimeFilter<"JobPipeline"> | Date | string
    updatedAt?: DateTimeFilter<"JobPipeline"> | Date | string
    jobOpening?: XOR<JobOpeningScalarRelationFilter, JobOpeningWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JobPipelineOrderByWithRelationInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    stages?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobOpening?: JobOpeningOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type JobPipelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobOpeningId?: string
    AND?: JobPipelineWhereInput | JobPipelineWhereInput[]
    OR?: JobPipelineWhereInput[]
    NOT?: JobPipelineWhereInput | JobPipelineWhereInput[]
    stages?: JsonFilter<"JobPipeline">
    createdById?: StringFilter<"JobPipeline"> | string
    createdAt?: DateTimeFilter<"JobPipeline"> | Date | string
    updatedAt?: DateTimeFilter<"JobPipeline"> | Date | string
    jobOpening?: XOR<JobOpeningScalarRelationFilter, JobOpeningWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "jobOpeningId">

  export type JobPipelineOrderByWithAggregationInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    stages?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobPipelineCountOrderByAggregateInput
    _max?: JobPipelineMaxOrderByAggregateInput
    _min?: JobPipelineMinOrderByAggregateInput
  }

  export type JobPipelineScalarWhereWithAggregatesInput = {
    AND?: JobPipelineScalarWhereWithAggregatesInput | JobPipelineScalarWhereWithAggregatesInput[]
    OR?: JobPipelineScalarWhereWithAggregatesInput[]
    NOT?: JobPipelineScalarWhereWithAggregatesInput | JobPipelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobPipeline"> | string
    jobOpeningId?: StringWithAggregatesFilter<"JobPipeline"> | string
    stages?: JsonWithAggregatesFilter<"JobPipeline">
    createdById?: StringWithAggregatesFilter<"JobPipeline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JobPipeline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobPipeline"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentCreateNestedManyWithoutDepartmentLeadInput
    departmentsCreated?: DepartmentCreateNestedManyWithoutCreatedByInput
    jobOpenings?: JobOpeningCreateNestedManyWithoutHiringManagerInput
    assignedJobs?: JobOpeningCreateNestedManyWithoutAssignedRecruitersInput
    JobPipeline?: JobPipelineCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentUncheckedCreateNestedManyWithoutDepartmentLeadInput
    departmentsCreated?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    jobOpenings?: JobOpeningUncheckedCreateNestedManyWithoutHiringManagerInput
    assignedJobs?: JobOpeningUncheckedCreateNestedManyWithoutAssignedRecruitersInput
    JobPipeline?: JobPipelineUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUpdateManyWithoutDepartmentLeadNestedInput
    departmentsCreated?: DepartmentUpdateManyWithoutCreatedByNestedInput
    jobOpenings?: JobOpeningUpdateManyWithoutHiringManagerNestedInput
    assignedJobs?: JobOpeningUpdateManyWithoutAssignedRecruitersNestedInput
    JobPipeline?: JobPipelineUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUncheckedUpdateManyWithoutDepartmentLeadNestedInput
    departmentsCreated?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    jobOpenings?: JobOpeningUncheckedUpdateManyWithoutHiringManagerNestedInput
    assignedJobs?: JobOpeningUncheckedUpdateManyWithoutAssignedRecruitersNestedInput
    JobPipeline?: JobPipelineUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentLead: UserCreateNestedOneWithoutDepartmentsLedInput
    createdBy: UserCreateNestedOneWithoutDepartmentsCreatedInput
    JobOpening?: JobOpeningCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    departmentLeadId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    JobOpening?: JobOpeningUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentLead?: UserUpdateOneRequiredWithoutDepartmentsLedNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDepartmentsCreatedNestedInput
    JobOpening?: JobOpeningUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentLeadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JobOpening?: JobOpeningUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    departmentLeadId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentLeadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpeningCreateInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle?: JobtitleCreateNestedOneWithoutJobOpeningsInput
    department: DepartmentCreateNestedOneWithoutJobOpeningInput
    assignedRecruiters?: UserCreateNestedManyWithoutAssignedJobsInput
    hiringManager: UserCreateNestedOneWithoutJobOpeningsInput
    address?: JobAddressCreateNestedOneWithoutJobOpeningInput
    applicationQuestions?: JobApplicationQuestionCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningUncheckedCreateInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRecruiters?: UserUncheckedCreateNestedManyWithoutAssignedJobsInput
    applicationQuestions?: JobApplicationQuestionUncheckedCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineUncheckedCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobtitleUpdateOneWithoutJobOpeningsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutJobOpeningNestedInput
    assignedRecruiters?: UserUpdateManyWithoutAssignedJobsNestedInput
    hiringManager?: UserUpdateOneRequiredWithoutJobOpeningsNestedInput
    address?: JobAddressUpdateOneWithoutJobOpeningNestedInput
    applicationQuestions?: JobApplicationQuestionUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRecruiters?: UserUncheckedUpdateManyWithoutAssignedJobsNestedInput
    applicationQuestions?: JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUncheckedUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningCreateManyInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOpeningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpeningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobtitleCreateInput = {
    title: string
    jobOpenings?: JobOpeningCreateNestedManyWithoutJobTitleInput
  }

  export type JobtitleUncheckedCreateInput = {
    id?: number
    title: string
    jobOpenings?: JobOpeningUncheckedCreateNestedManyWithoutJobTitleInput
  }

  export type JobtitleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    jobOpenings?: JobOpeningUpdateManyWithoutJobTitleNestedInput
  }

  export type JobtitleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    jobOpenings?: JobOpeningUncheckedUpdateManyWithoutJobTitleNestedInput
  }

  export type JobtitleCreateManyInput = {
    id?: number
    title: string
  }

  export type JobtitleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type JobtitleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type JobAddressCreateInput = {
    addressLine: string
    province?: string | null
    region?: string | null
    country?: string | null
    postalCode?: string | null
    JobOpening?: JobOpeningCreateNestedManyWithoutAddressInput
  }

  export type JobAddressUncheckedCreateInput = {
    id?: number
    addressLine: string
    province?: string | null
    region?: string | null
    country?: string | null
    postalCode?: string | null
    JobOpening?: JobOpeningUncheckedCreateNestedManyWithoutAddressInput
  }

  export type JobAddressUpdateInput = {
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    JobOpening?: JobOpeningUpdateManyWithoutAddressNestedInput
  }

  export type JobAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    JobOpening?: JobOpeningUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type JobAddressCreateManyInput = {
    id?: number
    addressLine: string
    province?: string | null
    region?: string | null
    country?: string | null
    postalCode?: string | null
  }

  export type JobAddressUpdateManyMutationInput = {
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobApplicationQuestionCreateInput = {
    questionType?: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: $Enums.ApplicationDefaultQuestionType | null
    question: string
    options?: JobApplicationQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOpening: JobOpeningCreateNestedOneWithoutApplicationQuestionsInput
  }

  export type JobApplicationQuestionUncheckedCreateInput = {
    id?: number
    jobOpeningId: string
    questionType?: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: $Enums.ApplicationDefaultQuestionType | null
    question: string
    options?: JobApplicationQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationQuestionUpdateInput = {
    questionType?: NullableEnumApplicationQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: NullableEnumAppplicationAdditionalQuestionTypeFieldUpdateOperationsInput | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: NullableEnumApplicationDefaultQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFieldUpdateOperationsInput | string
    options?: JobApplicationQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOpening?: JobOpeningUpdateOneRequiredWithoutApplicationQuestionsNestedInput
  }

  export type JobApplicationQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobOpeningId?: StringFieldUpdateOperationsInput | string
    questionType?: NullableEnumApplicationQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: NullableEnumAppplicationAdditionalQuestionTypeFieldUpdateOperationsInput | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: NullableEnumApplicationDefaultQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFieldUpdateOperationsInput | string
    options?: JobApplicationQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationQuestionCreateManyInput = {
    id?: number
    jobOpeningId: string
    questionType?: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: $Enums.ApplicationDefaultQuestionType | null
    question: string
    options?: JobApplicationQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationQuestionUpdateManyMutationInput = {
    questionType?: NullableEnumApplicationQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: NullableEnumAppplicationAdditionalQuestionTypeFieldUpdateOperationsInput | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: NullableEnumApplicationDefaultQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFieldUpdateOperationsInput | string
    options?: JobApplicationQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobOpeningId?: StringFieldUpdateOperationsInput | string
    questionType?: NullableEnumApplicationQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: NullableEnumAppplicationAdditionalQuestionTypeFieldUpdateOperationsInput | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: NullableEnumApplicationDefaultQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFieldUpdateOperationsInput | string
    options?: JobApplicationQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPipelineCreateInput = {
    id?: string
    stages: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOpening: JobOpeningCreateNestedOneWithoutPipelineInput
    createdBy: UserCreateNestedOneWithoutJobPipelineInput
  }

  export type JobPipelineUncheckedCreateInput = {
    id?: string
    jobOpeningId: string
    stages: JsonNullValueInput | InputJsonValue
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPipelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOpening?: JobOpeningUpdateOneRequiredWithoutPipelineNestedInput
    createdBy?: UserUpdateOneRequiredWithoutJobPipelineNestedInput
  }

  export type JobPipelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOpeningId?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPipelineCreateManyInput = {
    id?: string
    jobOpeningId: string
    stages: JsonNullValueInput | InputJsonValue
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPipelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPipelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOpeningId?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type JobOpeningListRelationFilter = {
    every?: JobOpeningWhereInput
    some?: JobOpeningWhereInput
    none?: JobOpeningWhereInput
  }

  export type JobPipelineListRelationFilter = {
    every?: JobPipelineWhereInput
    some?: JobPipelineWhereInput
    none?: JobPipelineWhereInput
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOpeningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobPipelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isSignedUp?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isSignedUp?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isSignedUp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentLeadId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentLeadId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentLeadId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumIndustriesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industries | EnumIndustriesFieldRefInput<$PrismaModel>
    in?: $Enums.Industries[] | ListEnumIndustriesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industries[] | ListEnumIndustriesFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustriesFilter<$PrismaModel> | $Enums.Industries
  }

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumJobOpeningStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobOpeningStatus | EnumJobOpeningStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobOpeningStatus[] | ListEnumJobOpeningStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobOpeningStatus[] | ListEnumJobOpeningStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobOpeningStatusFilter<$PrismaModel> | $Enums.JobOpeningStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumWorkExperienceFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkExperience | EnumWorkExperienceFieldRefInput<$PrismaModel>
    in?: $Enums.WorkExperience[] | ListEnumWorkExperienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkExperience[] | ListEnumWorkExperienceFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkExperienceFilter<$PrismaModel> | $Enums.WorkExperience
  }

  export type EnumJobLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocation | EnumJobLocationFieldRefInput<$PrismaModel>
    in?: $Enums.JobLocation[] | ListEnumJobLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobLocation[] | ListEnumJobLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumJobLocationFilter<$PrismaModel> | $Enums.JobLocation
  }

  export type JobtitleNullableScalarRelationFilter = {
    is?: JobtitleWhereInput | null
    isNot?: JobtitleWhereInput | null
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type JobAddressNullableScalarRelationFilter = {
    is?: JobAddressWhereInput | null
    isNot?: JobAddressWhereInput | null
  }

  export type JobApplicationQuestionListRelationFilter = {
    every?: JobApplicationQuestionWhereInput
    some?: JobApplicationQuestionWhereInput
    none?: JobApplicationQuestionWhereInput
  }

  export type JobPipelineNullableScalarRelationFilter = {
    is?: JobPipelineWhereInput | null
    isNot?: JobPipelineWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobApplicationQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOpeningCountOrderByAggregateInput = {
    id?: SortOrder
    internalJobCode?: SortOrder
    postingTitle?: SortOrder
    jobTitleId?: SortOrder
    departmentId?: SortOrder
    hiringManagerId?: SortOrder
    numberOfVacancies?: SortOrder
    industry?: SortOrder
    jobType?: SortOrder
    initiationDate?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    jobLocation?: SortOrder
    addressId?: SortOrder
    requirements?: SortOrder
    jobDescription?: SortOrder
    benefits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOpeningAvgOrderByAggregateInput = {
    jobTitleId?: SortOrder
    numberOfVacancies?: SortOrder
    addressId?: SortOrder
  }

  export type JobOpeningMaxOrderByAggregateInput = {
    id?: SortOrder
    internalJobCode?: SortOrder
    postingTitle?: SortOrder
    jobTitleId?: SortOrder
    departmentId?: SortOrder
    hiringManagerId?: SortOrder
    numberOfVacancies?: SortOrder
    industry?: SortOrder
    jobType?: SortOrder
    initiationDate?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    jobLocation?: SortOrder
    addressId?: SortOrder
    requirements?: SortOrder
    jobDescription?: SortOrder
    benefits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOpeningMinOrderByAggregateInput = {
    id?: SortOrder
    internalJobCode?: SortOrder
    postingTitle?: SortOrder
    jobTitleId?: SortOrder
    departmentId?: SortOrder
    hiringManagerId?: SortOrder
    numberOfVacancies?: SortOrder
    industry?: SortOrder
    jobType?: SortOrder
    initiationDate?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    salaryRange?: SortOrder
    experienceLevel?: SortOrder
    jobLocation?: SortOrder
    addressId?: SortOrder
    requirements?: SortOrder
    jobDescription?: SortOrder
    benefits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOpeningSumOrderByAggregateInput = {
    jobTitleId?: SortOrder
    numberOfVacancies?: SortOrder
    addressId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumIndustriesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industries | EnumIndustriesFieldRefInput<$PrismaModel>
    in?: $Enums.Industries[] | ListEnumIndustriesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industries[] | ListEnumIndustriesFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustriesWithAggregatesFilter<$PrismaModel> | $Enums.Industries
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndustriesFilter<$PrismaModel>
    _max?: NestedEnumIndustriesFilter<$PrismaModel>
  }

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumJobOpeningStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobOpeningStatus | EnumJobOpeningStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobOpeningStatus[] | ListEnumJobOpeningStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobOpeningStatus[] | ListEnumJobOpeningStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobOpeningStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobOpeningStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobOpeningStatusFilter<$PrismaModel>
    _max?: NestedEnumJobOpeningStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumWorkExperienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkExperience | EnumWorkExperienceFieldRefInput<$PrismaModel>
    in?: $Enums.WorkExperience[] | ListEnumWorkExperienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkExperience[] | ListEnumWorkExperienceFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkExperienceWithAggregatesFilter<$PrismaModel> | $Enums.WorkExperience
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkExperienceFilter<$PrismaModel>
    _max?: NestedEnumWorkExperienceFilter<$PrismaModel>
  }

  export type EnumJobLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocation | EnumJobLocationFieldRefInput<$PrismaModel>
    in?: $Enums.JobLocation[] | ListEnumJobLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobLocation[] | ListEnumJobLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumJobLocationWithAggregatesFilter<$PrismaModel> | $Enums.JobLocation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobLocationFilter<$PrismaModel>
    _max?: NestedEnumJobLocationFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type JobtitleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type JobtitleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobtitleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type JobtitleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type JobtitleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type JobAddressCountOrderByAggregateInput = {
    id?: SortOrder
    addressLine?: SortOrder
    province?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type JobAddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    addressLine?: SortOrder
    province?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type JobAddressMinOrderByAggregateInput = {
    id?: SortOrder
    addressLine?: SortOrder
    province?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type JobAddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumApplicationQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationQuestionType | EnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationQuestionType[] | ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationQuestionType[] | ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationQuestionTypeNullableFilter<$PrismaModel> | $Enums.ApplicationQuestionType | null
  }

  export type EnumAppplicationAdditionalQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AppplicationAdditionalQuestionType | EnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppplicationAdditionalQuestionType[] | ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AppplicationAdditionalQuestionType[] | ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAppplicationAdditionalQuestionTypeNullableFilter<$PrismaModel> | $Enums.AppplicationAdditionalQuestionType | null
  }

  export type EnumApplicationDefaultQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationDefaultQuestionType | EnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationDefaultQuestionType[] | ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationDefaultQuestionType[] | ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationDefaultQuestionTypeNullableFilter<$PrismaModel> | $Enums.ApplicationDefaultQuestionType | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type JobOpeningScalarRelationFilter = {
    is?: JobOpeningWhereInput
    isNot?: JobOpeningWhereInput
  }

  export type JobApplicationQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    questionType?: SortOrder
    AdditionalQuestionType?: SortOrder
    defaultQuestionType?: SortOrder
    question?: SortOrder
    options?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobApplicationQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    questionType?: SortOrder
    AdditionalQuestionType?: SortOrder
    defaultQuestionType?: SortOrder
    question?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    questionType?: SortOrder
    AdditionalQuestionType?: SortOrder
    defaultQuestionType?: SortOrder
    question?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationQuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumApplicationQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationQuestionType | EnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationQuestionType[] | ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationQuestionType[] | ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationQuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationQuestionTypeNullableFilter<$PrismaModel>
  }

  export type EnumAppplicationAdditionalQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppplicationAdditionalQuestionType | EnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppplicationAdditionalQuestionType[] | ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AppplicationAdditionalQuestionType[] | ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAppplicationAdditionalQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AppplicationAdditionalQuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAppplicationAdditionalQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAppplicationAdditionalQuestionTypeNullableFilter<$PrismaModel>
  }

  export type EnumApplicationDefaultQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationDefaultQuestionType | EnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationDefaultQuestionType[] | ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationDefaultQuestionType[] | ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationDefaultQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationDefaultQuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationDefaultQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationDefaultQuestionTypeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type JobPipelineCountOrderByAggregateInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    stages?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPipelineMaxOrderByAggregateInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPipelineMinOrderByAggregateInput = {
    id?: SortOrder
    jobOpeningId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DepartmentCreateNestedManyWithoutDepartmentLeadInput = {
    create?: XOR<DepartmentCreateWithoutDepartmentLeadInput, DepartmentUncheckedCreateWithoutDepartmentLeadInput> | DepartmentCreateWithoutDepartmentLeadInput[] | DepartmentUncheckedCreateWithoutDepartmentLeadInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutDepartmentLeadInput | DepartmentCreateOrConnectWithoutDepartmentLeadInput[]
    createMany?: DepartmentCreateManyDepartmentLeadInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput> | DepartmentCreateWithoutCreatedByInput[] | DepartmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedByInput | DepartmentCreateOrConnectWithoutCreatedByInput[]
    createMany?: DepartmentCreateManyCreatedByInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type JobOpeningCreateNestedManyWithoutHiringManagerInput = {
    create?: XOR<JobOpeningCreateWithoutHiringManagerInput, JobOpeningUncheckedCreateWithoutHiringManagerInput> | JobOpeningCreateWithoutHiringManagerInput[] | JobOpeningUncheckedCreateWithoutHiringManagerInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutHiringManagerInput | JobOpeningCreateOrConnectWithoutHiringManagerInput[]
    createMany?: JobOpeningCreateManyHiringManagerInputEnvelope
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobOpeningCreateNestedManyWithoutAssignedRecruitersInput = {
    create?: XOR<JobOpeningCreateWithoutAssignedRecruitersInput, JobOpeningUncheckedCreateWithoutAssignedRecruitersInput> | JobOpeningCreateWithoutAssignedRecruitersInput[] | JobOpeningUncheckedCreateWithoutAssignedRecruitersInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutAssignedRecruitersInput | JobOpeningCreateOrConnectWithoutAssignedRecruitersInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobPipelineCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<JobPipelineCreateWithoutCreatedByInput, JobPipelineUncheckedCreateWithoutCreatedByInput> | JobPipelineCreateWithoutCreatedByInput[] | JobPipelineUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: JobPipelineCreateOrConnectWithoutCreatedByInput | JobPipelineCreateOrConnectWithoutCreatedByInput[]
    createMany?: JobPipelineCreateManyCreatedByInputEnvelope
    connect?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutDepartmentLeadInput = {
    create?: XOR<DepartmentCreateWithoutDepartmentLeadInput, DepartmentUncheckedCreateWithoutDepartmentLeadInput> | DepartmentCreateWithoutDepartmentLeadInput[] | DepartmentUncheckedCreateWithoutDepartmentLeadInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutDepartmentLeadInput | DepartmentCreateOrConnectWithoutDepartmentLeadInput[]
    createMany?: DepartmentCreateManyDepartmentLeadInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput> | DepartmentCreateWithoutCreatedByInput[] | DepartmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedByInput | DepartmentCreateOrConnectWithoutCreatedByInput[]
    createMany?: DepartmentCreateManyCreatedByInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type JobOpeningUncheckedCreateNestedManyWithoutHiringManagerInput = {
    create?: XOR<JobOpeningCreateWithoutHiringManagerInput, JobOpeningUncheckedCreateWithoutHiringManagerInput> | JobOpeningCreateWithoutHiringManagerInput[] | JobOpeningUncheckedCreateWithoutHiringManagerInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutHiringManagerInput | JobOpeningCreateOrConnectWithoutHiringManagerInput[]
    createMany?: JobOpeningCreateManyHiringManagerInputEnvelope
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobOpeningUncheckedCreateNestedManyWithoutAssignedRecruitersInput = {
    create?: XOR<JobOpeningCreateWithoutAssignedRecruitersInput, JobOpeningUncheckedCreateWithoutAssignedRecruitersInput> | JobOpeningCreateWithoutAssignedRecruitersInput[] | JobOpeningUncheckedCreateWithoutAssignedRecruitersInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutAssignedRecruitersInput | JobOpeningCreateOrConnectWithoutAssignedRecruitersInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobPipelineUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<JobPipelineCreateWithoutCreatedByInput, JobPipelineUncheckedCreateWithoutCreatedByInput> | JobPipelineCreateWithoutCreatedByInput[] | JobPipelineUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: JobPipelineCreateOrConnectWithoutCreatedByInput | JobPipelineCreateOrConnectWithoutCreatedByInput[]
    createMany?: JobPipelineCreateManyCreatedByInputEnvelope
    connect?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DepartmentUpdateManyWithoutDepartmentLeadNestedInput = {
    create?: XOR<DepartmentCreateWithoutDepartmentLeadInput, DepartmentUncheckedCreateWithoutDepartmentLeadInput> | DepartmentCreateWithoutDepartmentLeadInput[] | DepartmentUncheckedCreateWithoutDepartmentLeadInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutDepartmentLeadInput | DepartmentCreateOrConnectWithoutDepartmentLeadInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutDepartmentLeadInput | DepartmentUpsertWithWhereUniqueWithoutDepartmentLeadInput[]
    createMany?: DepartmentCreateManyDepartmentLeadInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutDepartmentLeadInput | DepartmentUpdateWithWhereUniqueWithoutDepartmentLeadInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutDepartmentLeadInput | DepartmentUpdateManyWithWhereWithoutDepartmentLeadInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput> | DepartmentCreateWithoutCreatedByInput[] | DepartmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedByInput | DepartmentCreateOrConnectWithoutCreatedByInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutCreatedByInput | DepartmentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DepartmentCreateManyCreatedByInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutCreatedByInput | DepartmentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutCreatedByInput | DepartmentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type JobOpeningUpdateManyWithoutHiringManagerNestedInput = {
    create?: XOR<JobOpeningCreateWithoutHiringManagerInput, JobOpeningUncheckedCreateWithoutHiringManagerInput> | JobOpeningCreateWithoutHiringManagerInput[] | JobOpeningUncheckedCreateWithoutHiringManagerInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutHiringManagerInput | JobOpeningCreateOrConnectWithoutHiringManagerInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutHiringManagerInput | JobOpeningUpsertWithWhereUniqueWithoutHiringManagerInput[]
    createMany?: JobOpeningCreateManyHiringManagerInputEnvelope
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutHiringManagerInput | JobOpeningUpdateWithWhereUniqueWithoutHiringManagerInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutHiringManagerInput | JobOpeningUpdateManyWithWhereWithoutHiringManagerInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobOpeningUpdateManyWithoutAssignedRecruitersNestedInput = {
    create?: XOR<JobOpeningCreateWithoutAssignedRecruitersInput, JobOpeningUncheckedCreateWithoutAssignedRecruitersInput> | JobOpeningCreateWithoutAssignedRecruitersInput[] | JobOpeningUncheckedCreateWithoutAssignedRecruitersInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutAssignedRecruitersInput | JobOpeningCreateOrConnectWithoutAssignedRecruitersInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutAssignedRecruitersInput | JobOpeningUpsertWithWhereUniqueWithoutAssignedRecruitersInput[]
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutAssignedRecruitersInput | JobOpeningUpdateWithWhereUniqueWithoutAssignedRecruitersInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutAssignedRecruitersInput | JobOpeningUpdateManyWithWhereWithoutAssignedRecruitersInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobPipelineUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<JobPipelineCreateWithoutCreatedByInput, JobPipelineUncheckedCreateWithoutCreatedByInput> | JobPipelineCreateWithoutCreatedByInput[] | JobPipelineUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: JobPipelineCreateOrConnectWithoutCreatedByInput | JobPipelineCreateOrConnectWithoutCreatedByInput[]
    upsert?: JobPipelineUpsertWithWhereUniqueWithoutCreatedByInput | JobPipelineUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: JobPipelineCreateManyCreatedByInputEnvelope
    set?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
    disconnect?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
    delete?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
    connect?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
    update?: JobPipelineUpdateWithWhereUniqueWithoutCreatedByInput | JobPipelineUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: JobPipelineUpdateManyWithWhereWithoutCreatedByInput | JobPipelineUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: JobPipelineScalarWhereInput | JobPipelineScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutDepartmentLeadNestedInput = {
    create?: XOR<DepartmentCreateWithoutDepartmentLeadInput, DepartmentUncheckedCreateWithoutDepartmentLeadInput> | DepartmentCreateWithoutDepartmentLeadInput[] | DepartmentUncheckedCreateWithoutDepartmentLeadInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutDepartmentLeadInput | DepartmentCreateOrConnectWithoutDepartmentLeadInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutDepartmentLeadInput | DepartmentUpsertWithWhereUniqueWithoutDepartmentLeadInput[]
    createMany?: DepartmentCreateManyDepartmentLeadInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutDepartmentLeadInput | DepartmentUpdateWithWhereUniqueWithoutDepartmentLeadInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutDepartmentLeadInput | DepartmentUpdateManyWithWhereWithoutDepartmentLeadInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput> | DepartmentCreateWithoutCreatedByInput[] | DepartmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedByInput | DepartmentCreateOrConnectWithoutCreatedByInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutCreatedByInput | DepartmentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DepartmentCreateManyCreatedByInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutCreatedByInput | DepartmentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutCreatedByInput | DepartmentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type JobOpeningUncheckedUpdateManyWithoutHiringManagerNestedInput = {
    create?: XOR<JobOpeningCreateWithoutHiringManagerInput, JobOpeningUncheckedCreateWithoutHiringManagerInput> | JobOpeningCreateWithoutHiringManagerInput[] | JobOpeningUncheckedCreateWithoutHiringManagerInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutHiringManagerInput | JobOpeningCreateOrConnectWithoutHiringManagerInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutHiringManagerInput | JobOpeningUpsertWithWhereUniqueWithoutHiringManagerInput[]
    createMany?: JobOpeningCreateManyHiringManagerInputEnvelope
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutHiringManagerInput | JobOpeningUpdateWithWhereUniqueWithoutHiringManagerInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutHiringManagerInput | JobOpeningUpdateManyWithWhereWithoutHiringManagerInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobOpeningUncheckedUpdateManyWithoutAssignedRecruitersNestedInput = {
    create?: XOR<JobOpeningCreateWithoutAssignedRecruitersInput, JobOpeningUncheckedCreateWithoutAssignedRecruitersInput> | JobOpeningCreateWithoutAssignedRecruitersInput[] | JobOpeningUncheckedCreateWithoutAssignedRecruitersInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutAssignedRecruitersInput | JobOpeningCreateOrConnectWithoutAssignedRecruitersInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutAssignedRecruitersInput | JobOpeningUpsertWithWhereUniqueWithoutAssignedRecruitersInput[]
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutAssignedRecruitersInput | JobOpeningUpdateWithWhereUniqueWithoutAssignedRecruitersInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutAssignedRecruitersInput | JobOpeningUpdateManyWithWhereWithoutAssignedRecruitersInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobPipelineUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<JobPipelineCreateWithoutCreatedByInput, JobPipelineUncheckedCreateWithoutCreatedByInput> | JobPipelineCreateWithoutCreatedByInput[] | JobPipelineUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: JobPipelineCreateOrConnectWithoutCreatedByInput | JobPipelineCreateOrConnectWithoutCreatedByInput[]
    upsert?: JobPipelineUpsertWithWhereUniqueWithoutCreatedByInput | JobPipelineUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: JobPipelineCreateManyCreatedByInputEnvelope
    set?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
    disconnect?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
    delete?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
    connect?: JobPipelineWhereUniqueInput | JobPipelineWhereUniqueInput[]
    update?: JobPipelineUpdateWithWhereUniqueWithoutCreatedByInput | JobPipelineUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: JobPipelineUpdateManyWithWhereWithoutCreatedByInput | JobPipelineUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: JobPipelineScalarWhereInput | JobPipelineScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDepartmentsLedInput = {
    create?: XOR<UserCreateWithoutDepartmentsLedInput, UserUncheckedCreateWithoutDepartmentsLedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentsLedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDepartmentsCreatedInput = {
    create?: XOR<UserCreateWithoutDepartmentsCreatedInput, UserUncheckedCreateWithoutDepartmentsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type JobOpeningCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<JobOpeningCreateWithoutDepartmentInput, JobOpeningUncheckedCreateWithoutDepartmentInput> | JobOpeningCreateWithoutDepartmentInput[] | JobOpeningUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutDepartmentInput | JobOpeningCreateOrConnectWithoutDepartmentInput[]
    createMany?: JobOpeningCreateManyDepartmentInputEnvelope
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobOpeningUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<JobOpeningCreateWithoutDepartmentInput, JobOpeningUncheckedCreateWithoutDepartmentInput> | JobOpeningCreateWithoutDepartmentInput[] | JobOpeningUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutDepartmentInput | JobOpeningCreateOrConnectWithoutDepartmentInput[]
    createMany?: JobOpeningCreateManyDepartmentInputEnvelope
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDepartmentsLedNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentsLedInput, UserUncheckedCreateWithoutDepartmentsLedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentsLedInput
    upsert?: UserUpsertWithoutDepartmentsLedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepartmentsLedInput, UserUpdateWithoutDepartmentsLedInput>, UserUncheckedUpdateWithoutDepartmentsLedInput>
  }

  export type UserUpdateOneRequiredWithoutDepartmentsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentsCreatedInput, UserUncheckedCreateWithoutDepartmentsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentsCreatedInput
    upsert?: UserUpsertWithoutDepartmentsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepartmentsCreatedInput, UserUpdateWithoutDepartmentsCreatedInput>, UserUncheckedUpdateWithoutDepartmentsCreatedInput>
  }

  export type JobOpeningUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<JobOpeningCreateWithoutDepartmentInput, JobOpeningUncheckedCreateWithoutDepartmentInput> | JobOpeningCreateWithoutDepartmentInput[] | JobOpeningUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutDepartmentInput | JobOpeningCreateOrConnectWithoutDepartmentInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutDepartmentInput | JobOpeningUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: JobOpeningCreateManyDepartmentInputEnvelope
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutDepartmentInput | JobOpeningUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutDepartmentInput | JobOpeningUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobOpeningUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<JobOpeningCreateWithoutDepartmentInput, JobOpeningUncheckedCreateWithoutDepartmentInput> | JobOpeningCreateWithoutDepartmentInput[] | JobOpeningUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutDepartmentInput | JobOpeningCreateOrConnectWithoutDepartmentInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutDepartmentInput | JobOpeningUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: JobOpeningCreateManyDepartmentInputEnvelope
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutDepartmentInput | JobOpeningUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutDepartmentInput | JobOpeningUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobtitleCreateNestedOneWithoutJobOpeningsInput = {
    create?: XOR<JobtitleCreateWithoutJobOpeningsInput, JobtitleUncheckedCreateWithoutJobOpeningsInput>
    connectOrCreate?: JobtitleCreateOrConnectWithoutJobOpeningsInput
    connect?: JobtitleWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutJobOpeningInput = {
    create?: XOR<DepartmentCreateWithoutJobOpeningInput, DepartmentUncheckedCreateWithoutJobOpeningInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutJobOpeningInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutAssignedJobsInput = {
    create?: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput> | UserCreateWithoutAssignedJobsInput[] | UserUncheckedCreateWithoutAssignedJobsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAssignedJobsInput | UserCreateOrConnectWithoutAssignedJobsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutJobOpeningsInput = {
    create?: XOR<UserCreateWithoutJobOpeningsInput, UserUncheckedCreateWithoutJobOpeningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobOpeningsInput
    connect?: UserWhereUniqueInput
  }

  export type JobAddressCreateNestedOneWithoutJobOpeningInput = {
    create?: XOR<JobAddressCreateWithoutJobOpeningInput, JobAddressUncheckedCreateWithoutJobOpeningInput>
    connectOrCreate?: JobAddressCreateOrConnectWithoutJobOpeningInput
    connect?: JobAddressWhereUniqueInput
  }

  export type JobApplicationQuestionCreateNestedManyWithoutJobOpeningInput = {
    create?: XOR<JobApplicationQuestionCreateWithoutJobOpeningInput, JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput> | JobApplicationQuestionCreateWithoutJobOpeningInput[] | JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput[]
    connectOrCreate?: JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput | JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput[]
    createMany?: JobApplicationQuestionCreateManyJobOpeningInputEnvelope
    connect?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
  }

  export type JobPipelineCreateNestedOneWithoutJobOpeningInput = {
    create?: XOR<JobPipelineCreateWithoutJobOpeningInput, JobPipelineUncheckedCreateWithoutJobOpeningInput>
    connectOrCreate?: JobPipelineCreateOrConnectWithoutJobOpeningInput
    connect?: JobPipelineWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutAssignedJobsInput = {
    create?: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput> | UserCreateWithoutAssignedJobsInput[] | UserUncheckedCreateWithoutAssignedJobsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAssignedJobsInput | UserCreateOrConnectWithoutAssignedJobsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type JobApplicationQuestionUncheckedCreateNestedManyWithoutJobOpeningInput = {
    create?: XOR<JobApplicationQuestionCreateWithoutJobOpeningInput, JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput> | JobApplicationQuestionCreateWithoutJobOpeningInput[] | JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput[]
    connectOrCreate?: JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput | JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput[]
    createMany?: JobApplicationQuestionCreateManyJobOpeningInputEnvelope
    connect?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
  }

  export type JobPipelineUncheckedCreateNestedOneWithoutJobOpeningInput = {
    create?: XOR<JobPipelineCreateWithoutJobOpeningInput, JobPipelineUncheckedCreateWithoutJobOpeningInput>
    connectOrCreate?: JobPipelineCreateOrConnectWithoutJobOpeningInput
    connect?: JobPipelineWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumIndustriesFieldUpdateOperationsInput = {
    set?: $Enums.Industries
  }

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumJobOpeningStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobOpeningStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumWorkExperienceFieldUpdateOperationsInput = {
    set?: $Enums.WorkExperience
  }

  export type EnumJobLocationFieldUpdateOperationsInput = {
    set?: $Enums.JobLocation
  }

  export type JobtitleUpdateOneWithoutJobOpeningsNestedInput = {
    create?: XOR<JobtitleCreateWithoutJobOpeningsInput, JobtitleUncheckedCreateWithoutJobOpeningsInput>
    connectOrCreate?: JobtitleCreateOrConnectWithoutJobOpeningsInput
    upsert?: JobtitleUpsertWithoutJobOpeningsInput
    disconnect?: JobtitleWhereInput | boolean
    delete?: JobtitleWhereInput | boolean
    connect?: JobtitleWhereUniqueInput
    update?: XOR<XOR<JobtitleUpdateToOneWithWhereWithoutJobOpeningsInput, JobtitleUpdateWithoutJobOpeningsInput>, JobtitleUncheckedUpdateWithoutJobOpeningsInput>
  }

  export type DepartmentUpdateOneRequiredWithoutJobOpeningNestedInput = {
    create?: XOR<DepartmentCreateWithoutJobOpeningInput, DepartmentUncheckedCreateWithoutJobOpeningInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutJobOpeningInput
    upsert?: DepartmentUpsertWithoutJobOpeningInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutJobOpeningInput, DepartmentUpdateWithoutJobOpeningInput>, DepartmentUncheckedUpdateWithoutJobOpeningInput>
  }

  export type UserUpdateManyWithoutAssignedJobsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput> | UserCreateWithoutAssignedJobsInput[] | UserUncheckedCreateWithoutAssignedJobsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAssignedJobsInput | UserCreateOrConnectWithoutAssignedJobsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAssignedJobsInput | UserUpsertWithWhereUniqueWithoutAssignedJobsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAssignedJobsInput | UserUpdateWithWhereUniqueWithoutAssignedJobsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAssignedJobsInput | UserUpdateManyWithWhereWithoutAssignedJobsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutJobOpeningsNestedInput = {
    create?: XOR<UserCreateWithoutJobOpeningsInput, UserUncheckedCreateWithoutJobOpeningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobOpeningsInput
    upsert?: UserUpsertWithoutJobOpeningsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobOpeningsInput, UserUpdateWithoutJobOpeningsInput>, UserUncheckedUpdateWithoutJobOpeningsInput>
  }

  export type JobAddressUpdateOneWithoutJobOpeningNestedInput = {
    create?: XOR<JobAddressCreateWithoutJobOpeningInput, JobAddressUncheckedCreateWithoutJobOpeningInput>
    connectOrCreate?: JobAddressCreateOrConnectWithoutJobOpeningInput
    upsert?: JobAddressUpsertWithoutJobOpeningInput
    disconnect?: JobAddressWhereInput | boolean
    delete?: JobAddressWhereInput | boolean
    connect?: JobAddressWhereUniqueInput
    update?: XOR<XOR<JobAddressUpdateToOneWithWhereWithoutJobOpeningInput, JobAddressUpdateWithoutJobOpeningInput>, JobAddressUncheckedUpdateWithoutJobOpeningInput>
  }

  export type JobApplicationQuestionUpdateManyWithoutJobOpeningNestedInput = {
    create?: XOR<JobApplicationQuestionCreateWithoutJobOpeningInput, JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput> | JobApplicationQuestionCreateWithoutJobOpeningInput[] | JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput[]
    connectOrCreate?: JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput | JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput[]
    upsert?: JobApplicationQuestionUpsertWithWhereUniqueWithoutJobOpeningInput | JobApplicationQuestionUpsertWithWhereUniqueWithoutJobOpeningInput[]
    createMany?: JobApplicationQuestionCreateManyJobOpeningInputEnvelope
    set?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
    disconnect?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
    delete?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
    connect?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
    update?: JobApplicationQuestionUpdateWithWhereUniqueWithoutJobOpeningInput | JobApplicationQuestionUpdateWithWhereUniqueWithoutJobOpeningInput[]
    updateMany?: JobApplicationQuestionUpdateManyWithWhereWithoutJobOpeningInput | JobApplicationQuestionUpdateManyWithWhereWithoutJobOpeningInput[]
    deleteMany?: JobApplicationQuestionScalarWhereInput | JobApplicationQuestionScalarWhereInput[]
  }

  export type JobPipelineUpdateOneWithoutJobOpeningNestedInput = {
    create?: XOR<JobPipelineCreateWithoutJobOpeningInput, JobPipelineUncheckedCreateWithoutJobOpeningInput>
    connectOrCreate?: JobPipelineCreateOrConnectWithoutJobOpeningInput
    upsert?: JobPipelineUpsertWithoutJobOpeningInput
    disconnect?: JobPipelineWhereInput | boolean
    delete?: JobPipelineWhereInput | boolean
    connect?: JobPipelineWhereUniqueInput
    update?: XOR<XOR<JobPipelineUpdateToOneWithWhereWithoutJobOpeningInput, JobPipelineUpdateWithoutJobOpeningInput>, JobPipelineUncheckedUpdateWithoutJobOpeningInput>
  }

  export type UserUncheckedUpdateManyWithoutAssignedJobsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput> | UserCreateWithoutAssignedJobsInput[] | UserUncheckedCreateWithoutAssignedJobsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAssignedJobsInput | UserCreateOrConnectWithoutAssignedJobsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAssignedJobsInput | UserUpsertWithWhereUniqueWithoutAssignedJobsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAssignedJobsInput | UserUpdateWithWhereUniqueWithoutAssignedJobsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAssignedJobsInput | UserUpdateManyWithWhereWithoutAssignedJobsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningNestedInput = {
    create?: XOR<JobApplicationQuestionCreateWithoutJobOpeningInput, JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput> | JobApplicationQuestionCreateWithoutJobOpeningInput[] | JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput[]
    connectOrCreate?: JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput | JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput[]
    upsert?: JobApplicationQuestionUpsertWithWhereUniqueWithoutJobOpeningInput | JobApplicationQuestionUpsertWithWhereUniqueWithoutJobOpeningInput[]
    createMany?: JobApplicationQuestionCreateManyJobOpeningInputEnvelope
    set?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
    disconnect?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
    delete?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
    connect?: JobApplicationQuestionWhereUniqueInput | JobApplicationQuestionWhereUniqueInput[]
    update?: JobApplicationQuestionUpdateWithWhereUniqueWithoutJobOpeningInput | JobApplicationQuestionUpdateWithWhereUniqueWithoutJobOpeningInput[]
    updateMany?: JobApplicationQuestionUpdateManyWithWhereWithoutJobOpeningInput | JobApplicationQuestionUpdateManyWithWhereWithoutJobOpeningInput[]
    deleteMany?: JobApplicationQuestionScalarWhereInput | JobApplicationQuestionScalarWhereInput[]
  }

  export type JobPipelineUncheckedUpdateOneWithoutJobOpeningNestedInput = {
    create?: XOR<JobPipelineCreateWithoutJobOpeningInput, JobPipelineUncheckedCreateWithoutJobOpeningInput>
    connectOrCreate?: JobPipelineCreateOrConnectWithoutJobOpeningInput
    upsert?: JobPipelineUpsertWithoutJobOpeningInput
    disconnect?: JobPipelineWhereInput | boolean
    delete?: JobPipelineWhereInput | boolean
    connect?: JobPipelineWhereUniqueInput
    update?: XOR<XOR<JobPipelineUpdateToOneWithWhereWithoutJobOpeningInput, JobPipelineUpdateWithoutJobOpeningInput>, JobPipelineUncheckedUpdateWithoutJobOpeningInput>
  }

  export type JobOpeningCreateNestedManyWithoutJobTitleInput = {
    create?: XOR<JobOpeningCreateWithoutJobTitleInput, JobOpeningUncheckedCreateWithoutJobTitleInput> | JobOpeningCreateWithoutJobTitleInput[] | JobOpeningUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutJobTitleInput | JobOpeningCreateOrConnectWithoutJobTitleInput[]
    createMany?: JobOpeningCreateManyJobTitleInputEnvelope
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobOpeningUncheckedCreateNestedManyWithoutJobTitleInput = {
    create?: XOR<JobOpeningCreateWithoutJobTitleInput, JobOpeningUncheckedCreateWithoutJobTitleInput> | JobOpeningCreateWithoutJobTitleInput[] | JobOpeningUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutJobTitleInput | JobOpeningCreateOrConnectWithoutJobTitleInput[]
    createMany?: JobOpeningCreateManyJobTitleInputEnvelope
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobOpeningUpdateManyWithoutJobTitleNestedInput = {
    create?: XOR<JobOpeningCreateWithoutJobTitleInput, JobOpeningUncheckedCreateWithoutJobTitleInput> | JobOpeningCreateWithoutJobTitleInput[] | JobOpeningUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutJobTitleInput | JobOpeningCreateOrConnectWithoutJobTitleInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutJobTitleInput | JobOpeningUpsertWithWhereUniqueWithoutJobTitleInput[]
    createMany?: JobOpeningCreateManyJobTitleInputEnvelope
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutJobTitleInput | JobOpeningUpdateWithWhereUniqueWithoutJobTitleInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutJobTitleInput | JobOpeningUpdateManyWithWhereWithoutJobTitleInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobOpeningUncheckedUpdateManyWithoutJobTitleNestedInput = {
    create?: XOR<JobOpeningCreateWithoutJobTitleInput, JobOpeningUncheckedCreateWithoutJobTitleInput> | JobOpeningCreateWithoutJobTitleInput[] | JobOpeningUncheckedCreateWithoutJobTitleInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutJobTitleInput | JobOpeningCreateOrConnectWithoutJobTitleInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutJobTitleInput | JobOpeningUpsertWithWhereUniqueWithoutJobTitleInput[]
    createMany?: JobOpeningCreateManyJobTitleInputEnvelope
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutJobTitleInput | JobOpeningUpdateWithWhereUniqueWithoutJobTitleInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutJobTitleInput | JobOpeningUpdateManyWithWhereWithoutJobTitleInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobOpeningCreateNestedManyWithoutAddressInput = {
    create?: XOR<JobOpeningCreateWithoutAddressInput, JobOpeningUncheckedCreateWithoutAddressInput> | JobOpeningCreateWithoutAddressInput[] | JobOpeningUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutAddressInput | JobOpeningCreateOrConnectWithoutAddressInput[]
    createMany?: JobOpeningCreateManyAddressInputEnvelope
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobOpeningUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<JobOpeningCreateWithoutAddressInput, JobOpeningUncheckedCreateWithoutAddressInput> | JobOpeningCreateWithoutAddressInput[] | JobOpeningUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutAddressInput | JobOpeningCreateOrConnectWithoutAddressInput[]
    createMany?: JobOpeningCreateManyAddressInputEnvelope
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
  }

  export type JobOpeningUpdateManyWithoutAddressNestedInput = {
    create?: XOR<JobOpeningCreateWithoutAddressInput, JobOpeningUncheckedCreateWithoutAddressInput> | JobOpeningCreateWithoutAddressInput[] | JobOpeningUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutAddressInput | JobOpeningCreateOrConnectWithoutAddressInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutAddressInput | JobOpeningUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: JobOpeningCreateManyAddressInputEnvelope
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutAddressInput | JobOpeningUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutAddressInput | JobOpeningUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobOpeningUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<JobOpeningCreateWithoutAddressInput, JobOpeningUncheckedCreateWithoutAddressInput> | JobOpeningCreateWithoutAddressInput[] | JobOpeningUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: JobOpeningCreateOrConnectWithoutAddressInput | JobOpeningCreateOrConnectWithoutAddressInput[]
    upsert?: JobOpeningUpsertWithWhereUniqueWithoutAddressInput | JobOpeningUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: JobOpeningCreateManyAddressInputEnvelope
    set?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    disconnect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    delete?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    connect?: JobOpeningWhereUniqueInput | JobOpeningWhereUniqueInput[]
    update?: JobOpeningUpdateWithWhereUniqueWithoutAddressInput | JobOpeningUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: JobOpeningUpdateManyWithWhereWithoutAddressInput | JobOpeningUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
  }

  export type JobApplicationQuestionCreateoptionsInput = {
    set: string[]
  }

  export type JobOpeningCreateNestedOneWithoutApplicationQuestionsInput = {
    create?: XOR<JobOpeningCreateWithoutApplicationQuestionsInput, JobOpeningUncheckedCreateWithoutApplicationQuestionsInput>
    connectOrCreate?: JobOpeningCreateOrConnectWithoutApplicationQuestionsInput
    connect?: JobOpeningWhereUniqueInput
  }

  export type NullableEnumApplicationQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationQuestionType | null
  }

  export type NullableEnumAppplicationAdditionalQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppplicationAdditionalQuestionType | null
  }

  export type NullableEnumApplicationDefaultQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationDefaultQuestionType | null
  }

  export type JobApplicationQuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobOpeningUpdateOneRequiredWithoutApplicationQuestionsNestedInput = {
    create?: XOR<JobOpeningCreateWithoutApplicationQuestionsInput, JobOpeningUncheckedCreateWithoutApplicationQuestionsInput>
    connectOrCreate?: JobOpeningCreateOrConnectWithoutApplicationQuestionsInput
    upsert?: JobOpeningUpsertWithoutApplicationQuestionsInput
    connect?: JobOpeningWhereUniqueInput
    update?: XOR<XOR<JobOpeningUpdateToOneWithWhereWithoutApplicationQuestionsInput, JobOpeningUpdateWithoutApplicationQuestionsInput>, JobOpeningUncheckedUpdateWithoutApplicationQuestionsInput>
  }

  export type JobOpeningCreateNestedOneWithoutPipelineInput = {
    create?: XOR<JobOpeningCreateWithoutPipelineInput, JobOpeningUncheckedCreateWithoutPipelineInput>
    connectOrCreate?: JobOpeningCreateOrConnectWithoutPipelineInput
    connect?: JobOpeningWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJobPipelineInput = {
    create?: XOR<UserCreateWithoutJobPipelineInput, UserUncheckedCreateWithoutJobPipelineInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobPipelineInput
    connect?: UserWhereUniqueInput
  }

  export type JobOpeningUpdateOneRequiredWithoutPipelineNestedInput = {
    create?: XOR<JobOpeningCreateWithoutPipelineInput, JobOpeningUncheckedCreateWithoutPipelineInput>
    connectOrCreate?: JobOpeningCreateOrConnectWithoutPipelineInput
    upsert?: JobOpeningUpsertWithoutPipelineInput
    connect?: JobOpeningWhereUniqueInput
    update?: XOR<XOR<JobOpeningUpdateToOneWithWhereWithoutPipelineInput, JobOpeningUpdateWithoutPipelineInput>, JobOpeningUncheckedUpdateWithoutPipelineInput>
  }

  export type UserUpdateOneRequiredWithoutJobPipelineNestedInput = {
    create?: XOR<UserCreateWithoutJobPipelineInput, UserUncheckedCreateWithoutJobPipelineInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobPipelineInput
    upsert?: UserUpsertWithoutJobPipelineInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobPipelineInput, UserUpdateWithoutJobPipelineInput>, UserUncheckedUpdateWithoutJobPipelineInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIndustriesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industries | EnumIndustriesFieldRefInput<$PrismaModel>
    in?: $Enums.Industries[] | ListEnumIndustriesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industries[] | ListEnumIndustriesFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustriesFilter<$PrismaModel> | $Enums.Industries
  }

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumJobOpeningStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobOpeningStatus | EnumJobOpeningStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobOpeningStatus[] | ListEnumJobOpeningStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobOpeningStatus[] | ListEnumJobOpeningStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobOpeningStatusFilter<$PrismaModel> | $Enums.JobOpeningStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumWorkExperienceFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkExperience | EnumWorkExperienceFieldRefInput<$PrismaModel>
    in?: $Enums.WorkExperience[] | ListEnumWorkExperienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkExperience[] | ListEnumWorkExperienceFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkExperienceFilter<$PrismaModel> | $Enums.WorkExperience
  }

  export type NestedEnumJobLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocation | EnumJobLocationFieldRefInput<$PrismaModel>
    in?: $Enums.JobLocation[] | ListEnumJobLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobLocation[] | ListEnumJobLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumJobLocationFilter<$PrismaModel> | $Enums.JobLocation
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIndustriesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Industries | EnumIndustriesFieldRefInput<$PrismaModel>
    in?: $Enums.Industries[] | ListEnumIndustriesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Industries[] | ListEnumIndustriesFieldRefInput<$PrismaModel>
    not?: NestedEnumIndustriesWithAggregatesFilter<$PrismaModel> | $Enums.Industries
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIndustriesFilter<$PrismaModel>
    _max?: NestedEnumIndustriesFilter<$PrismaModel>
  }

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobOpeningStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobOpeningStatus | EnumJobOpeningStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobOpeningStatus[] | ListEnumJobOpeningStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobOpeningStatus[] | ListEnumJobOpeningStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobOpeningStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobOpeningStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobOpeningStatusFilter<$PrismaModel>
    _max?: NestedEnumJobOpeningStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumWorkExperienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkExperience | EnumWorkExperienceFieldRefInput<$PrismaModel>
    in?: $Enums.WorkExperience[] | ListEnumWorkExperienceFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkExperience[] | ListEnumWorkExperienceFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkExperienceWithAggregatesFilter<$PrismaModel> | $Enums.WorkExperience
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkExperienceFilter<$PrismaModel>
    _max?: NestedEnumWorkExperienceFilter<$PrismaModel>
  }

  export type NestedEnumJobLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocation | EnumJobLocationFieldRefInput<$PrismaModel>
    in?: $Enums.JobLocation[] | ListEnumJobLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobLocation[] | ListEnumJobLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumJobLocationWithAggregatesFilter<$PrismaModel> | $Enums.JobLocation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobLocationFilter<$PrismaModel>
    _max?: NestedEnumJobLocationFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumApplicationQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationQuestionType | EnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationQuestionType[] | ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationQuestionType[] | ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationQuestionTypeNullableFilter<$PrismaModel> | $Enums.ApplicationQuestionType | null
  }

  export type NestedEnumAppplicationAdditionalQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AppplicationAdditionalQuestionType | EnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppplicationAdditionalQuestionType[] | ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AppplicationAdditionalQuestionType[] | ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAppplicationAdditionalQuestionTypeNullableFilter<$PrismaModel> | $Enums.AppplicationAdditionalQuestionType | null
  }

  export type NestedEnumApplicationDefaultQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationDefaultQuestionType | EnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationDefaultQuestionType[] | ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationDefaultQuestionType[] | ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationDefaultQuestionTypeNullableFilter<$PrismaModel> | $Enums.ApplicationDefaultQuestionType | null
  }

  export type NestedEnumApplicationQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationQuestionType | EnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationQuestionType[] | ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationQuestionType[] | ListEnumApplicationQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationQuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationQuestionTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppplicationAdditionalQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppplicationAdditionalQuestionType | EnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppplicationAdditionalQuestionType[] | ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AppplicationAdditionalQuestionType[] | ListEnumAppplicationAdditionalQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAppplicationAdditionalQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AppplicationAdditionalQuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAppplicationAdditionalQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAppplicationAdditionalQuestionTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumApplicationDefaultQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationDefaultQuestionType | EnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationDefaultQuestionType[] | ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationDefaultQuestionType[] | ListEnumApplicationDefaultQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationDefaultQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationDefaultQuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationDefaultQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationDefaultQuestionTypeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DepartmentCreateWithoutDepartmentLeadInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDepartmentsCreatedInput
    JobOpening?: JobOpeningCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutDepartmentLeadInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    JobOpening?: JobOpeningUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutDepartmentLeadInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutDepartmentLeadInput, DepartmentUncheckedCreateWithoutDepartmentLeadInput>
  }

  export type DepartmentCreateManyDepartmentLeadInputEnvelope = {
    data: DepartmentCreateManyDepartmentLeadInput | DepartmentCreateManyDepartmentLeadInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentLead: UserCreateNestedOneWithoutDepartmentsLedInput
    JobOpening?: JobOpeningCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    departmentLeadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    JobOpening?: JobOpeningUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCreatedByInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput>
  }

  export type DepartmentCreateManyCreatedByInputEnvelope = {
    data: DepartmentCreateManyCreatedByInput | DepartmentCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type JobOpeningCreateWithoutHiringManagerInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle?: JobtitleCreateNestedOneWithoutJobOpeningsInput
    department: DepartmentCreateNestedOneWithoutJobOpeningInput
    assignedRecruiters?: UserCreateNestedManyWithoutAssignedJobsInput
    address?: JobAddressCreateNestedOneWithoutJobOpeningInput
    applicationQuestions?: JobApplicationQuestionCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningUncheckedCreateWithoutHiringManagerInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRecruiters?: UserUncheckedCreateNestedManyWithoutAssignedJobsInput
    applicationQuestions?: JobApplicationQuestionUncheckedCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineUncheckedCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningCreateOrConnectWithoutHiringManagerInput = {
    where: JobOpeningWhereUniqueInput
    create: XOR<JobOpeningCreateWithoutHiringManagerInput, JobOpeningUncheckedCreateWithoutHiringManagerInput>
  }

  export type JobOpeningCreateManyHiringManagerInputEnvelope = {
    data: JobOpeningCreateManyHiringManagerInput | JobOpeningCreateManyHiringManagerInput[]
    skipDuplicates?: boolean
  }

  export type JobOpeningCreateWithoutAssignedRecruitersInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle?: JobtitleCreateNestedOneWithoutJobOpeningsInput
    department: DepartmentCreateNestedOneWithoutJobOpeningInput
    hiringManager: UserCreateNestedOneWithoutJobOpeningsInput
    address?: JobAddressCreateNestedOneWithoutJobOpeningInput
    applicationQuestions?: JobApplicationQuestionCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningUncheckedCreateWithoutAssignedRecruitersInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicationQuestions?: JobApplicationQuestionUncheckedCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineUncheckedCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningCreateOrConnectWithoutAssignedRecruitersInput = {
    where: JobOpeningWhereUniqueInput
    create: XOR<JobOpeningCreateWithoutAssignedRecruitersInput, JobOpeningUncheckedCreateWithoutAssignedRecruitersInput>
  }

  export type JobPipelineCreateWithoutCreatedByInput = {
    id?: string
    stages: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    jobOpening: JobOpeningCreateNestedOneWithoutPipelineInput
  }

  export type JobPipelineUncheckedCreateWithoutCreatedByInput = {
    id?: string
    jobOpeningId: string
    stages: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPipelineCreateOrConnectWithoutCreatedByInput = {
    where: JobPipelineWhereUniqueInput
    create: XOR<JobPipelineCreateWithoutCreatedByInput, JobPipelineUncheckedCreateWithoutCreatedByInput>
  }

  export type JobPipelineCreateManyCreatedByInputEnvelope = {
    data: JobPipelineCreateManyCreatedByInput | JobPipelineCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithWhereUniqueWithoutDepartmentLeadInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutDepartmentLeadInput, DepartmentUncheckedUpdateWithoutDepartmentLeadInput>
    create: XOR<DepartmentCreateWithoutDepartmentLeadInput, DepartmentUncheckedCreateWithoutDepartmentLeadInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutDepartmentLeadInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutDepartmentLeadInput, DepartmentUncheckedUpdateWithoutDepartmentLeadInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutDepartmentLeadInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutDepartmentLeadInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    departmentLeadId?: StringFilter<"Department"> | string
    createdById?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type DepartmentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutCreatedByInput, DepartmentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutCreatedByInput, DepartmentUncheckedUpdateWithoutCreatedByInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutCreatedByInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type JobOpeningUpsertWithWhereUniqueWithoutHiringManagerInput = {
    where: JobOpeningWhereUniqueInput
    update: XOR<JobOpeningUpdateWithoutHiringManagerInput, JobOpeningUncheckedUpdateWithoutHiringManagerInput>
    create: XOR<JobOpeningCreateWithoutHiringManagerInput, JobOpeningUncheckedCreateWithoutHiringManagerInput>
  }

  export type JobOpeningUpdateWithWhereUniqueWithoutHiringManagerInput = {
    where: JobOpeningWhereUniqueInput
    data: XOR<JobOpeningUpdateWithoutHiringManagerInput, JobOpeningUncheckedUpdateWithoutHiringManagerInput>
  }

  export type JobOpeningUpdateManyWithWhereWithoutHiringManagerInput = {
    where: JobOpeningScalarWhereInput
    data: XOR<JobOpeningUpdateManyMutationInput, JobOpeningUncheckedUpdateManyWithoutHiringManagerInput>
  }

  export type JobOpeningScalarWhereInput = {
    AND?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
    OR?: JobOpeningScalarWhereInput[]
    NOT?: JobOpeningScalarWhereInput | JobOpeningScalarWhereInput[]
    id?: StringFilter<"JobOpening"> | string
    internalJobCode?: StringFilter<"JobOpening"> | string
    postingTitle?: StringFilter<"JobOpening"> | string
    jobTitleId?: IntNullableFilter<"JobOpening"> | number | null
    departmentId?: StringFilter<"JobOpening"> | string
    hiringManagerId?: StringFilter<"JobOpening"> | string
    numberOfVacancies?: IntNullableFilter<"JobOpening"> | number | null
    industry?: EnumIndustriesFilter<"JobOpening"> | $Enums.Industries
    jobType?: EnumJobTypeFilter<"JobOpening"> | $Enums.JobType
    initiationDate?: DateTimeNullableFilter<"JobOpening"> | Date | string | null
    targetDate?: DateTimeNullableFilter<"JobOpening"> | Date | string | null
    status?: EnumJobOpeningStatusFilter<"JobOpening"> | $Enums.JobOpeningStatus
    salaryRange?: StringNullableFilter<"JobOpening"> | string | null
    experienceLevel?: EnumWorkExperienceFilter<"JobOpening"> | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFilter<"JobOpening"> | $Enums.JobLocation
    addressId?: IntNullableFilter<"JobOpening"> | number | null
    requirements?: StringNullableFilter<"JobOpening"> | string | null
    jobDescription?: StringNullableFilter<"JobOpening"> | string | null
    benefits?: StringNullableFilter<"JobOpening"> | string | null
    createdAt?: DateTimeFilter<"JobOpening"> | Date | string
    updatedAt?: DateTimeFilter<"JobOpening"> | Date | string
  }

  export type JobOpeningUpsertWithWhereUniqueWithoutAssignedRecruitersInput = {
    where: JobOpeningWhereUniqueInput
    update: XOR<JobOpeningUpdateWithoutAssignedRecruitersInput, JobOpeningUncheckedUpdateWithoutAssignedRecruitersInput>
    create: XOR<JobOpeningCreateWithoutAssignedRecruitersInput, JobOpeningUncheckedCreateWithoutAssignedRecruitersInput>
  }

  export type JobOpeningUpdateWithWhereUniqueWithoutAssignedRecruitersInput = {
    where: JobOpeningWhereUniqueInput
    data: XOR<JobOpeningUpdateWithoutAssignedRecruitersInput, JobOpeningUncheckedUpdateWithoutAssignedRecruitersInput>
  }

  export type JobOpeningUpdateManyWithWhereWithoutAssignedRecruitersInput = {
    where: JobOpeningScalarWhereInput
    data: XOR<JobOpeningUpdateManyMutationInput, JobOpeningUncheckedUpdateManyWithoutAssignedRecruitersInput>
  }

  export type JobPipelineUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: JobPipelineWhereUniqueInput
    update: XOR<JobPipelineUpdateWithoutCreatedByInput, JobPipelineUncheckedUpdateWithoutCreatedByInput>
    create: XOR<JobPipelineCreateWithoutCreatedByInput, JobPipelineUncheckedCreateWithoutCreatedByInput>
  }

  export type JobPipelineUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: JobPipelineWhereUniqueInput
    data: XOR<JobPipelineUpdateWithoutCreatedByInput, JobPipelineUncheckedUpdateWithoutCreatedByInput>
  }

  export type JobPipelineUpdateManyWithWhereWithoutCreatedByInput = {
    where: JobPipelineScalarWhereInput
    data: XOR<JobPipelineUpdateManyMutationInput, JobPipelineUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type JobPipelineScalarWhereInput = {
    AND?: JobPipelineScalarWhereInput | JobPipelineScalarWhereInput[]
    OR?: JobPipelineScalarWhereInput[]
    NOT?: JobPipelineScalarWhereInput | JobPipelineScalarWhereInput[]
    id?: StringFilter<"JobPipeline"> | string
    jobOpeningId?: StringFilter<"JobPipeline"> | string
    stages?: JsonFilter<"JobPipeline">
    createdById?: StringFilter<"JobPipeline"> | string
    createdAt?: DateTimeFilter<"JobPipeline"> | Date | string
    updatedAt?: DateTimeFilter<"JobPipeline"> | Date | string
  }

  export type UserCreateWithoutDepartmentsLedInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsCreated?: DepartmentCreateNestedManyWithoutCreatedByInput
    jobOpenings?: JobOpeningCreateNestedManyWithoutHiringManagerInput
    assignedJobs?: JobOpeningCreateNestedManyWithoutAssignedRecruitersInput
    JobPipeline?: JobPipelineCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDepartmentsLedInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsCreated?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    jobOpenings?: JobOpeningUncheckedCreateNestedManyWithoutHiringManagerInput
    assignedJobs?: JobOpeningUncheckedCreateNestedManyWithoutAssignedRecruitersInput
    JobPipeline?: JobPipelineUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDepartmentsLedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentsLedInput, UserUncheckedCreateWithoutDepartmentsLedInput>
  }

  export type UserCreateWithoutDepartmentsCreatedInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentCreateNestedManyWithoutDepartmentLeadInput
    jobOpenings?: JobOpeningCreateNestedManyWithoutHiringManagerInput
    assignedJobs?: JobOpeningCreateNestedManyWithoutAssignedRecruitersInput
    JobPipeline?: JobPipelineCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDepartmentsCreatedInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentUncheckedCreateNestedManyWithoutDepartmentLeadInput
    jobOpenings?: JobOpeningUncheckedCreateNestedManyWithoutHiringManagerInput
    assignedJobs?: JobOpeningUncheckedCreateNestedManyWithoutAssignedRecruitersInput
    JobPipeline?: JobPipelineUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDepartmentsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentsCreatedInput, UserUncheckedCreateWithoutDepartmentsCreatedInput>
  }

  export type JobOpeningCreateWithoutDepartmentInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle?: JobtitleCreateNestedOneWithoutJobOpeningsInput
    assignedRecruiters?: UserCreateNestedManyWithoutAssignedJobsInput
    hiringManager: UserCreateNestedOneWithoutJobOpeningsInput
    address?: JobAddressCreateNestedOneWithoutJobOpeningInput
    applicationQuestions?: JobApplicationQuestionCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningUncheckedCreateWithoutDepartmentInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRecruiters?: UserUncheckedCreateNestedManyWithoutAssignedJobsInput
    applicationQuestions?: JobApplicationQuestionUncheckedCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineUncheckedCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningCreateOrConnectWithoutDepartmentInput = {
    where: JobOpeningWhereUniqueInput
    create: XOR<JobOpeningCreateWithoutDepartmentInput, JobOpeningUncheckedCreateWithoutDepartmentInput>
  }

  export type JobOpeningCreateManyDepartmentInputEnvelope = {
    data: JobOpeningCreateManyDepartmentInput | JobOpeningCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDepartmentsLedInput = {
    update: XOR<UserUpdateWithoutDepartmentsLedInput, UserUncheckedUpdateWithoutDepartmentsLedInput>
    create: XOR<UserCreateWithoutDepartmentsLedInput, UserUncheckedCreateWithoutDepartmentsLedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepartmentsLedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepartmentsLedInput, UserUncheckedUpdateWithoutDepartmentsLedInput>
  }

  export type UserUpdateWithoutDepartmentsLedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsCreated?: DepartmentUpdateManyWithoutCreatedByNestedInput
    jobOpenings?: JobOpeningUpdateManyWithoutHiringManagerNestedInput
    assignedJobs?: JobOpeningUpdateManyWithoutAssignedRecruitersNestedInput
    JobPipeline?: JobPipelineUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentsLedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsCreated?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    jobOpenings?: JobOpeningUncheckedUpdateManyWithoutHiringManagerNestedInput
    assignedJobs?: JobOpeningUncheckedUpdateManyWithoutAssignedRecruitersNestedInput
    JobPipeline?: JobPipelineUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutDepartmentsCreatedInput = {
    update: XOR<UserUpdateWithoutDepartmentsCreatedInput, UserUncheckedUpdateWithoutDepartmentsCreatedInput>
    create: XOR<UserCreateWithoutDepartmentsCreatedInput, UserUncheckedCreateWithoutDepartmentsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepartmentsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepartmentsCreatedInput, UserUncheckedUpdateWithoutDepartmentsCreatedInput>
  }

  export type UserUpdateWithoutDepartmentsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUpdateManyWithoutDepartmentLeadNestedInput
    jobOpenings?: JobOpeningUpdateManyWithoutHiringManagerNestedInput
    assignedJobs?: JobOpeningUpdateManyWithoutAssignedRecruitersNestedInput
    JobPipeline?: JobPipelineUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUncheckedUpdateManyWithoutDepartmentLeadNestedInput
    jobOpenings?: JobOpeningUncheckedUpdateManyWithoutHiringManagerNestedInput
    assignedJobs?: JobOpeningUncheckedUpdateManyWithoutAssignedRecruitersNestedInput
    JobPipeline?: JobPipelineUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type JobOpeningUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: JobOpeningWhereUniqueInput
    update: XOR<JobOpeningUpdateWithoutDepartmentInput, JobOpeningUncheckedUpdateWithoutDepartmentInput>
    create: XOR<JobOpeningCreateWithoutDepartmentInput, JobOpeningUncheckedCreateWithoutDepartmentInput>
  }

  export type JobOpeningUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: JobOpeningWhereUniqueInput
    data: XOR<JobOpeningUpdateWithoutDepartmentInput, JobOpeningUncheckedUpdateWithoutDepartmentInput>
  }

  export type JobOpeningUpdateManyWithWhereWithoutDepartmentInput = {
    where: JobOpeningScalarWhereInput
    data: XOR<JobOpeningUpdateManyMutationInput, JobOpeningUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type JobtitleCreateWithoutJobOpeningsInput = {
    title: string
  }

  export type JobtitleUncheckedCreateWithoutJobOpeningsInput = {
    id?: number
    title: string
  }

  export type JobtitleCreateOrConnectWithoutJobOpeningsInput = {
    where: JobtitleWhereUniqueInput
    create: XOR<JobtitleCreateWithoutJobOpeningsInput, JobtitleUncheckedCreateWithoutJobOpeningsInput>
  }

  export type DepartmentCreateWithoutJobOpeningInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departmentLead: UserCreateNestedOneWithoutDepartmentsLedInput
    createdBy: UserCreateNestedOneWithoutDepartmentsCreatedInput
  }

  export type DepartmentUncheckedCreateWithoutJobOpeningInput = {
    id?: string
    name: string
    departmentLeadId: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutJobOpeningInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutJobOpeningInput, DepartmentUncheckedCreateWithoutJobOpeningInput>
  }

  export type UserCreateWithoutAssignedJobsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentCreateNestedManyWithoutDepartmentLeadInput
    departmentsCreated?: DepartmentCreateNestedManyWithoutCreatedByInput
    jobOpenings?: JobOpeningCreateNestedManyWithoutHiringManagerInput
    JobPipeline?: JobPipelineCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAssignedJobsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentUncheckedCreateNestedManyWithoutDepartmentLeadInput
    departmentsCreated?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    jobOpenings?: JobOpeningUncheckedCreateNestedManyWithoutHiringManagerInput
    JobPipeline?: JobPipelineUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAssignedJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>
  }

  export type UserCreateWithoutJobOpeningsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentCreateNestedManyWithoutDepartmentLeadInput
    departmentsCreated?: DepartmentCreateNestedManyWithoutCreatedByInput
    assignedJobs?: JobOpeningCreateNestedManyWithoutAssignedRecruitersInput
    JobPipeline?: JobPipelineCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutJobOpeningsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentUncheckedCreateNestedManyWithoutDepartmentLeadInput
    departmentsCreated?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedJobs?: JobOpeningUncheckedCreateNestedManyWithoutAssignedRecruitersInput
    JobPipeline?: JobPipelineUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutJobOpeningsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobOpeningsInput, UserUncheckedCreateWithoutJobOpeningsInput>
  }

  export type JobAddressCreateWithoutJobOpeningInput = {
    addressLine: string
    province?: string | null
    region?: string | null
    country?: string | null
    postalCode?: string | null
  }

  export type JobAddressUncheckedCreateWithoutJobOpeningInput = {
    id?: number
    addressLine: string
    province?: string | null
    region?: string | null
    country?: string | null
    postalCode?: string | null
  }

  export type JobAddressCreateOrConnectWithoutJobOpeningInput = {
    where: JobAddressWhereUniqueInput
    create: XOR<JobAddressCreateWithoutJobOpeningInput, JobAddressUncheckedCreateWithoutJobOpeningInput>
  }

  export type JobApplicationQuestionCreateWithoutJobOpeningInput = {
    questionType?: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: $Enums.ApplicationDefaultQuestionType | null
    question: string
    options?: JobApplicationQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput = {
    id?: number
    questionType?: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: $Enums.ApplicationDefaultQuestionType | null
    question: string
    options?: JobApplicationQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationQuestionCreateOrConnectWithoutJobOpeningInput = {
    where: JobApplicationQuestionWhereUniqueInput
    create: XOR<JobApplicationQuestionCreateWithoutJobOpeningInput, JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput>
  }

  export type JobApplicationQuestionCreateManyJobOpeningInputEnvelope = {
    data: JobApplicationQuestionCreateManyJobOpeningInput | JobApplicationQuestionCreateManyJobOpeningInput[]
    skipDuplicates?: boolean
  }

  export type JobPipelineCreateWithoutJobOpeningInput = {
    id?: string
    stages: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutJobPipelineInput
  }

  export type JobPipelineUncheckedCreateWithoutJobOpeningInput = {
    id?: string
    stages: JsonNullValueInput | InputJsonValue
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPipelineCreateOrConnectWithoutJobOpeningInput = {
    where: JobPipelineWhereUniqueInput
    create: XOR<JobPipelineCreateWithoutJobOpeningInput, JobPipelineUncheckedCreateWithoutJobOpeningInput>
  }

  export type JobtitleUpsertWithoutJobOpeningsInput = {
    update: XOR<JobtitleUpdateWithoutJobOpeningsInput, JobtitleUncheckedUpdateWithoutJobOpeningsInput>
    create: XOR<JobtitleCreateWithoutJobOpeningsInput, JobtitleUncheckedCreateWithoutJobOpeningsInput>
    where?: JobtitleWhereInput
  }

  export type JobtitleUpdateToOneWithWhereWithoutJobOpeningsInput = {
    where?: JobtitleWhereInput
    data: XOR<JobtitleUpdateWithoutJobOpeningsInput, JobtitleUncheckedUpdateWithoutJobOpeningsInput>
  }

  export type JobtitleUpdateWithoutJobOpeningsInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type JobtitleUncheckedUpdateWithoutJobOpeningsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUpsertWithoutJobOpeningInput = {
    update: XOR<DepartmentUpdateWithoutJobOpeningInput, DepartmentUncheckedUpdateWithoutJobOpeningInput>
    create: XOR<DepartmentCreateWithoutJobOpeningInput, DepartmentUncheckedCreateWithoutJobOpeningInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutJobOpeningInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutJobOpeningInput, DepartmentUncheckedUpdateWithoutJobOpeningInput>
  }

  export type DepartmentUpdateWithoutJobOpeningInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentLead?: UserUpdateOneRequiredWithoutDepartmentsLedNestedInput
    createdBy?: UserUpdateOneRequiredWithoutDepartmentsCreatedNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutJobOpeningInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentLeadId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutAssignedJobsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAssignedJobsInput, UserUncheckedUpdateWithoutAssignedJobsInput>
    create: XOR<UserCreateWithoutAssignedJobsInput, UserUncheckedCreateWithoutAssignedJobsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAssignedJobsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAssignedJobsInput, UserUncheckedUpdateWithoutAssignedJobsInput>
  }

  export type UserUpdateManyWithWhereWithoutAssignedJobsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAssignedJobsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isSignedUp?: BoolFilter<"User"> | boolean
  }

  export type UserUpsertWithoutJobOpeningsInput = {
    update: XOR<UserUpdateWithoutJobOpeningsInput, UserUncheckedUpdateWithoutJobOpeningsInput>
    create: XOR<UserCreateWithoutJobOpeningsInput, UserUncheckedCreateWithoutJobOpeningsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobOpeningsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobOpeningsInput, UserUncheckedUpdateWithoutJobOpeningsInput>
  }

  export type UserUpdateWithoutJobOpeningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUpdateManyWithoutDepartmentLeadNestedInput
    departmentsCreated?: DepartmentUpdateManyWithoutCreatedByNestedInput
    assignedJobs?: JobOpeningUpdateManyWithoutAssignedRecruitersNestedInput
    JobPipeline?: JobPipelineUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutJobOpeningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUncheckedUpdateManyWithoutDepartmentLeadNestedInput
    departmentsCreated?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedJobs?: JobOpeningUncheckedUpdateManyWithoutAssignedRecruitersNestedInput
    JobPipeline?: JobPipelineUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type JobAddressUpsertWithoutJobOpeningInput = {
    update: XOR<JobAddressUpdateWithoutJobOpeningInput, JobAddressUncheckedUpdateWithoutJobOpeningInput>
    create: XOR<JobAddressCreateWithoutJobOpeningInput, JobAddressUncheckedCreateWithoutJobOpeningInput>
    where?: JobAddressWhereInput
  }

  export type JobAddressUpdateToOneWithWhereWithoutJobOpeningInput = {
    where?: JobAddressWhereInput
    data: XOR<JobAddressUpdateWithoutJobOpeningInput, JobAddressUncheckedUpdateWithoutJobOpeningInput>
  }

  export type JobAddressUpdateWithoutJobOpeningInput = {
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobAddressUncheckedUpdateWithoutJobOpeningInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressLine?: StringFieldUpdateOperationsInput | string
    province?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobApplicationQuestionUpsertWithWhereUniqueWithoutJobOpeningInput = {
    where: JobApplicationQuestionWhereUniqueInput
    update: XOR<JobApplicationQuestionUpdateWithoutJobOpeningInput, JobApplicationQuestionUncheckedUpdateWithoutJobOpeningInput>
    create: XOR<JobApplicationQuestionCreateWithoutJobOpeningInput, JobApplicationQuestionUncheckedCreateWithoutJobOpeningInput>
  }

  export type JobApplicationQuestionUpdateWithWhereUniqueWithoutJobOpeningInput = {
    where: JobApplicationQuestionWhereUniqueInput
    data: XOR<JobApplicationQuestionUpdateWithoutJobOpeningInput, JobApplicationQuestionUncheckedUpdateWithoutJobOpeningInput>
  }

  export type JobApplicationQuestionUpdateManyWithWhereWithoutJobOpeningInput = {
    where: JobApplicationQuestionScalarWhereInput
    data: XOR<JobApplicationQuestionUpdateManyMutationInput, JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningInput>
  }

  export type JobApplicationQuestionScalarWhereInput = {
    AND?: JobApplicationQuestionScalarWhereInput | JobApplicationQuestionScalarWhereInput[]
    OR?: JobApplicationQuestionScalarWhereInput[]
    NOT?: JobApplicationQuestionScalarWhereInput | JobApplicationQuestionScalarWhereInput[]
    id?: IntFilter<"JobApplicationQuestion"> | number
    jobOpeningId?: StringFilter<"JobApplicationQuestion"> | string
    questionType?: EnumApplicationQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: EnumAppplicationAdditionalQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: EnumApplicationDefaultQuestionTypeNullableFilter<"JobApplicationQuestion"> | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFilter<"JobApplicationQuestion"> | string
    options?: StringNullableListFilter<"JobApplicationQuestion">
    isRequired?: BoolFilter<"JobApplicationQuestion"> | boolean
    createdAt?: DateTimeFilter<"JobApplicationQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplicationQuestion"> | Date | string
  }

  export type JobPipelineUpsertWithoutJobOpeningInput = {
    update: XOR<JobPipelineUpdateWithoutJobOpeningInput, JobPipelineUncheckedUpdateWithoutJobOpeningInput>
    create: XOR<JobPipelineCreateWithoutJobOpeningInput, JobPipelineUncheckedCreateWithoutJobOpeningInput>
    where?: JobPipelineWhereInput
  }

  export type JobPipelineUpdateToOneWithWhereWithoutJobOpeningInput = {
    where?: JobPipelineWhereInput
    data: XOR<JobPipelineUpdateWithoutJobOpeningInput, JobPipelineUncheckedUpdateWithoutJobOpeningInput>
  }

  export type JobPipelineUpdateWithoutJobOpeningInput = {
    id?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutJobPipelineNestedInput
  }

  export type JobPipelineUncheckedUpdateWithoutJobOpeningInput = {
    id?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpeningCreateWithoutJobTitleInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutJobOpeningInput
    assignedRecruiters?: UserCreateNestedManyWithoutAssignedJobsInput
    hiringManager: UserCreateNestedOneWithoutJobOpeningsInput
    address?: JobAddressCreateNestedOneWithoutJobOpeningInput
    applicationQuestions?: JobApplicationQuestionCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningUncheckedCreateWithoutJobTitleInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRecruiters?: UserUncheckedCreateNestedManyWithoutAssignedJobsInput
    applicationQuestions?: JobApplicationQuestionUncheckedCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineUncheckedCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningCreateOrConnectWithoutJobTitleInput = {
    where: JobOpeningWhereUniqueInput
    create: XOR<JobOpeningCreateWithoutJobTitleInput, JobOpeningUncheckedCreateWithoutJobTitleInput>
  }

  export type JobOpeningCreateManyJobTitleInputEnvelope = {
    data: JobOpeningCreateManyJobTitleInput | JobOpeningCreateManyJobTitleInput[]
    skipDuplicates?: boolean
  }

  export type JobOpeningUpsertWithWhereUniqueWithoutJobTitleInput = {
    where: JobOpeningWhereUniqueInput
    update: XOR<JobOpeningUpdateWithoutJobTitleInput, JobOpeningUncheckedUpdateWithoutJobTitleInput>
    create: XOR<JobOpeningCreateWithoutJobTitleInput, JobOpeningUncheckedCreateWithoutJobTitleInput>
  }

  export type JobOpeningUpdateWithWhereUniqueWithoutJobTitleInput = {
    where: JobOpeningWhereUniqueInput
    data: XOR<JobOpeningUpdateWithoutJobTitleInput, JobOpeningUncheckedUpdateWithoutJobTitleInput>
  }

  export type JobOpeningUpdateManyWithWhereWithoutJobTitleInput = {
    where: JobOpeningScalarWhereInput
    data: XOR<JobOpeningUpdateManyMutationInput, JobOpeningUncheckedUpdateManyWithoutJobTitleInput>
  }

  export type JobOpeningCreateWithoutAddressInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle?: JobtitleCreateNestedOneWithoutJobOpeningsInput
    department: DepartmentCreateNestedOneWithoutJobOpeningInput
    assignedRecruiters?: UserCreateNestedManyWithoutAssignedJobsInput
    hiringManager: UserCreateNestedOneWithoutJobOpeningsInput
    applicationQuestions?: JobApplicationQuestionCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningUncheckedCreateWithoutAddressInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRecruiters?: UserUncheckedCreateNestedManyWithoutAssignedJobsInput
    applicationQuestions?: JobApplicationQuestionUncheckedCreateNestedManyWithoutJobOpeningInput
    pipeline?: JobPipelineUncheckedCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningCreateOrConnectWithoutAddressInput = {
    where: JobOpeningWhereUniqueInput
    create: XOR<JobOpeningCreateWithoutAddressInput, JobOpeningUncheckedCreateWithoutAddressInput>
  }

  export type JobOpeningCreateManyAddressInputEnvelope = {
    data: JobOpeningCreateManyAddressInput | JobOpeningCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type JobOpeningUpsertWithWhereUniqueWithoutAddressInput = {
    where: JobOpeningWhereUniqueInput
    update: XOR<JobOpeningUpdateWithoutAddressInput, JobOpeningUncheckedUpdateWithoutAddressInput>
    create: XOR<JobOpeningCreateWithoutAddressInput, JobOpeningUncheckedCreateWithoutAddressInput>
  }

  export type JobOpeningUpdateWithWhereUniqueWithoutAddressInput = {
    where: JobOpeningWhereUniqueInput
    data: XOR<JobOpeningUpdateWithoutAddressInput, JobOpeningUncheckedUpdateWithoutAddressInput>
  }

  export type JobOpeningUpdateManyWithWhereWithoutAddressInput = {
    where: JobOpeningScalarWhereInput
    data: XOR<JobOpeningUpdateManyMutationInput, JobOpeningUncheckedUpdateManyWithoutAddressInput>
  }

  export type JobOpeningCreateWithoutApplicationQuestionsInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle?: JobtitleCreateNestedOneWithoutJobOpeningsInput
    department: DepartmentCreateNestedOneWithoutJobOpeningInput
    assignedRecruiters?: UserCreateNestedManyWithoutAssignedJobsInput
    hiringManager: UserCreateNestedOneWithoutJobOpeningsInput
    address?: JobAddressCreateNestedOneWithoutJobOpeningInput
    pipeline?: JobPipelineCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningUncheckedCreateWithoutApplicationQuestionsInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRecruiters?: UserUncheckedCreateNestedManyWithoutAssignedJobsInput
    pipeline?: JobPipelineUncheckedCreateNestedOneWithoutJobOpeningInput
  }

  export type JobOpeningCreateOrConnectWithoutApplicationQuestionsInput = {
    where: JobOpeningWhereUniqueInput
    create: XOR<JobOpeningCreateWithoutApplicationQuestionsInput, JobOpeningUncheckedCreateWithoutApplicationQuestionsInput>
  }

  export type JobOpeningUpsertWithoutApplicationQuestionsInput = {
    update: XOR<JobOpeningUpdateWithoutApplicationQuestionsInput, JobOpeningUncheckedUpdateWithoutApplicationQuestionsInput>
    create: XOR<JobOpeningCreateWithoutApplicationQuestionsInput, JobOpeningUncheckedCreateWithoutApplicationQuestionsInput>
    where?: JobOpeningWhereInput
  }

  export type JobOpeningUpdateToOneWithWhereWithoutApplicationQuestionsInput = {
    where?: JobOpeningWhereInput
    data: XOR<JobOpeningUpdateWithoutApplicationQuestionsInput, JobOpeningUncheckedUpdateWithoutApplicationQuestionsInput>
  }

  export type JobOpeningUpdateWithoutApplicationQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobtitleUpdateOneWithoutJobOpeningsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutJobOpeningNestedInput
    assignedRecruiters?: UserUpdateManyWithoutAssignedJobsNestedInput
    hiringManager?: UserUpdateOneRequiredWithoutJobOpeningsNestedInput
    address?: JobAddressUpdateOneWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateWithoutApplicationQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRecruiters?: UserUncheckedUpdateManyWithoutAssignedJobsNestedInput
    pipeline?: JobPipelineUncheckedUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningCreateWithoutPipelineInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobTitle?: JobtitleCreateNestedOneWithoutJobOpeningsInput
    department: DepartmentCreateNestedOneWithoutJobOpeningInput
    assignedRecruiters?: UserCreateNestedManyWithoutAssignedJobsInput
    hiringManager: UserCreateNestedOneWithoutJobOpeningsInput
    address?: JobAddressCreateNestedOneWithoutJobOpeningInput
    applicationQuestions?: JobApplicationQuestionCreateNestedManyWithoutJobOpeningInput
  }

  export type JobOpeningUncheckedCreateWithoutPipelineInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRecruiters?: UserUncheckedCreateNestedManyWithoutAssignedJobsInput
    applicationQuestions?: JobApplicationQuestionUncheckedCreateNestedManyWithoutJobOpeningInput
  }

  export type JobOpeningCreateOrConnectWithoutPipelineInput = {
    where: JobOpeningWhereUniqueInput
    create: XOR<JobOpeningCreateWithoutPipelineInput, JobOpeningUncheckedCreateWithoutPipelineInput>
  }

  export type UserCreateWithoutJobPipelineInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentCreateNestedManyWithoutDepartmentLeadInput
    departmentsCreated?: DepartmentCreateNestedManyWithoutCreatedByInput
    jobOpenings?: JobOpeningCreateNestedManyWithoutHiringManagerInput
    assignedJobs?: JobOpeningCreateNestedManyWithoutAssignedRecruitersInput
  }

  export type UserUncheckedCreateWithoutJobPipelineInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    isSignedUp?: boolean
    departmentsLed?: DepartmentUncheckedCreateNestedManyWithoutDepartmentLeadInput
    departmentsCreated?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    jobOpenings?: JobOpeningUncheckedCreateNestedManyWithoutHiringManagerInput
    assignedJobs?: JobOpeningUncheckedCreateNestedManyWithoutAssignedRecruitersInput
  }

  export type UserCreateOrConnectWithoutJobPipelineInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobPipelineInput, UserUncheckedCreateWithoutJobPipelineInput>
  }

  export type JobOpeningUpsertWithoutPipelineInput = {
    update: XOR<JobOpeningUpdateWithoutPipelineInput, JobOpeningUncheckedUpdateWithoutPipelineInput>
    create: XOR<JobOpeningCreateWithoutPipelineInput, JobOpeningUncheckedCreateWithoutPipelineInput>
    where?: JobOpeningWhereInput
  }

  export type JobOpeningUpdateToOneWithWhereWithoutPipelineInput = {
    where?: JobOpeningWhereInput
    data: XOR<JobOpeningUpdateWithoutPipelineInput, JobOpeningUncheckedUpdateWithoutPipelineInput>
  }

  export type JobOpeningUpdateWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobtitleUpdateOneWithoutJobOpeningsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutJobOpeningNestedInput
    assignedRecruiters?: UserUpdateManyWithoutAssignedJobsNestedInput
    hiringManager?: UserUpdateOneRequiredWithoutJobOpeningsNestedInput
    address?: JobAddressUpdateOneWithoutJobOpeningNestedInput
    applicationQuestions?: JobApplicationQuestionUpdateManyWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRecruiters?: UserUncheckedUpdateManyWithoutAssignedJobsNestedInput
    applicationQuestions?: JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningNestedInput
  }

  export type UserUpsertWithoutJobPipelineInput = {
    update: XOR<UserUpdateWithoutJobPipelineInput, UserUncheckedUpdateWithoutJobPipelineInput>
    create: XOR<UserCreateWithoutJobPipelineInput, UserUncheckedCreateWithoutJobPipelineInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobPipelineInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobPipelineInput, UserUncheckedUpdateWithoutJobPipelineInput>
  }

  export type UserUpdateWithoutJobPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUpdateManyWithoutDepartmentLeadNestedInput
    departmentsCreated?: DepartmentUpdateManyWithoutCreatedByNestedInput
    jobOpenings?: JobOpeningUpdateManyWithoutHiringManagerNestedInput
    assignedJobs?: JobOpeningUpdateManyWithoutAssignedRecruitersNestedInput
  }

  export type UserUncheckedUpdateWithoutJobPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUncheckedUpdateManyWithoutDepartmentLeadNestedInput
    departmentsCreated?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    jobOpenings?: JobOpeningUncheckedUpdateManyWithoutHiringManagerNestedInput
    assignedJobs?: JobOpeningUncheckedUpdateManyWithoutAssignedRecruitersNestedInput
  }

  export type DepartmentCreateManyDepartmentLeadInput = {
    id?: string
    name: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateManyCreatedByInput = {
    id?: string
    name: string
    departmentLeadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOpeningCreateManyHiringManagerInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPipelineCreateManyCreatedByInput = {
    id?: string
    jobOpeningId: string
    stages: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateWithoutDepartmentLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDepartmentsCreatedNestedInput
    JobOpening?: JobOpeningUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutDepartmentLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JobOpening?: JobOpeningUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutDepartmentLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentLead?: UserUpdateOneRequiredWithoutDepartmentsLedNestedInput
    JobOpening?: JobOpeningUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentLeadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JobOpening?: JobOpeningUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentLeadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpeningUpdateWithoutHiringManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobtitleUpdateOneWithoutJobOpeningsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutJobOpeningNestedInput
    assignedRecruiters?: UserUpdateManyWithoutAssignedJobsNestedInput
    address?: JobAddressUpdateOneWithoutJobOpeningNestedInput
    applicationQuestions?: JobApplicationQuestionUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateWithoutHiringManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRecruiters?: UserUncheckedUpdateManyWithoutAssignedJobsNestedInput
    applicationQuestions?: JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUncheckedUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateManyWithoutHiringManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpeningUpdateWithoutAssignedRecruitersInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobtitleUpdateOneWithoutJobOpeningsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutJobOpeningNestedInput
    hiringManager?: UserUpdateOneRequiredWithoutJobOpeningsNestedInput
    address?: JobAddressUpdateOneWithoutJobOpeningNestedInput
    applicationQuestions?: JobApplicationQuestionUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateWithoutAssignedRecruitersInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicationQuestions?: JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUncheckedUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateManyWithoutAssignedRecruitersInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPipelineUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobOpening?: JobOpeningUpdateOneRequiredWithoutPipelineNestedInput
  }

  export type JobPipelineUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOpeningId?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPipelineUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobOpeningId?: StringFieldUpdateOperationsInput | string
    stages?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpeningCreateManyDepartmentInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOpeningUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobtitleUpdateOneWithoutJobOpeningsNestedInput
    assignedRecruiters?: UserUpdateManyWithoutAssignedJobsNestedInput
    hiringManager?: UserUpdateOneRequiredWithoutJobOpeningsNestedInput
    address?: JobAddressUpdateOneWithoutJobOpeningNestedInput
    applicationQuestions?: JobApplicationQuestionUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRecruiters?: UserUncheckedUpdateManyWithoutAssignedJobsNestedInput
    applicationQuestions?: JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUncheckedUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationQuestionCreateManyJobOpeningInput = {
    id?: number
    questionType?: $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: $Enums.ApplicationDefaultQuestionType | null
    question: string
    options?: JobApplicationQuestionCreateoptionsInput | string[]
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutAssignedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUpdateManyWithoutDepartmentLeadNestedInput
    departmentsCreated?: DepartmentUpdateManyWithoutCreatedByNestedInput
    jobOpenings?: JobOpeningUpdateManyWithoutHiringManagerNestedInput
    JobPipeline?: JobPipelineUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
    departmentsLed?: DepartmentUncheckedUpdateManyWithoutDepartmentLeadNestedInput
    departmentsCreated?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    jobOpenings?: JobOpeningUncheckedUpdateManyWithoutHiringManagerNestedInput
    JobPipeline?: JobPipelineUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAssignedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSignedUp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobApplicationQuestionUpdateWithoutJobOpeningInput = {
    questionType?: NullableEnumApplicationQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: NullableEnumAppplicationAdditionalQuestionTypeFieldUpdateOperationsInput | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: NullableEnumApplicationDefaultQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFieldUpdateOperationsInput | string
    options?: JobApplicationQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationQuestionUncheckedUpdateWithoutJobOpeningInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumApplicationQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: NullableEnumAppplicationAdditionalQuestionTypeFieldUpdateOperationsInput | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: NullableEnumApplicationDefaultQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFieldUpdateOperationsInput | string
    options?: JobApplicationQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumApplicationQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationQuestionType | null
    AdditionalQuestionType?: NullableEnumAppplicationAdditionalQuestionTypeFieldUpdateOperationsInput | $Enums.AppplicationAdditionalQuestionType | null
    defaultQuestionType?: NullableEnumApplicationDefaultQuestionTypeFieldUpdateOperationsInput | $Enums.ApplicationDefaultQuestionType | null
    question?: StringFieldUpdateOperationsInput | string
    options?: JobApplicationQuestionUpdateoptionsInput | string[]
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpeningCreateManyJobTitleInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    addressId?: number | null
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOpeningUpdateWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutJobOpeningNestedInput
    assignedRecruiters?: UserUpdateManyWithoutAssignedJobsNestedInput
    hiringManager?: UserUpdateOneRequiredWithoutJobOpeningsNestedInput
    address?: JobAddressUpdateOneWithoutJobOpeningNestedInput
    applicationQuestions?: JobApplicationQuestionUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRecruiters?: UserUncheckedUpdateManyWithoutAssignedJobsNestedInput
    applicationQuestions?: JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUncheckedUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateManyWithoutJobTitleInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    addressId?: NullableIntFieldUpdateOperationsInput | number | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOpeningCreateManyAddressInput = {
    id?: string
    internalJobCode: string
    postingTitle: string
    jobTitleId?: number | null
    departmentId: string
    hiringManagerId: string
    numberOfVacancies?: number | null
    industry?: $Enums.Industries
    jobType?: $Enums.JobType
    initiationDate?: Date | string | null
    targetDate?: Date | string | null
    status?: $Enums.JobOpeningStatus
    salaryRange?: string | null
    experienceLevel?: $Enums.WorkExperience
    jobLocation?: $Enums.JobLocation
    requirements?: string | null
    jobDescription?: string | null
    benefits?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOpeningUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobTitle?: JobtitleUpdateOneWithoutJobOpeningsNestedInput
    department?: DepartmentUpdateOneRequiredWithoutJobOpeningNestedInput
    assignedRecruiters?: UserUpdateManyWithoutAssignedJobsNestedInput
    hiringManager?: UserUpdateOneRequiredWithoutJobOpeningsNestedInput
    applicationQuestions?: JobApplicationQuestionUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRecruiters?: UserUncheckedUpdateManyWithoutAssignedJobsNestedInput
    applicationQuestions?: JobApplicationQuestionUncheckedUpdateManyWithoutJobOpeningNestedInput
    pipeline?: JobPipelineUncheckedUpdateOneWithoutJobOpeningNestedInput
  }

  export type JobOpeningUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalJobCode?: StringFieldUpdateOperationsInput | string
    postingTitle?: StringFieldUpdateOperationsInput | string
    jobTitleId?: NullableIntFieldUpdateOperationsInput | number | null
    departmentId?: StringFieldUpdateOperationsInput | string
    hiringManagerId?: StringFieldUpdateOperationsInput | string
    numberOfVacancies?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: EnumIndustriesFieldUpdateOperationsInput | $Enums.Industries
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    initiationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobOpeningStatusFieldUpdateOperationsInput | $Enums.JobOpeningStatus
    salaryRange?: NullableStringFieldUpdateOperationsInput | string | null
    experienceLevel?: EnumWorkExperienceFieldUpdateOperationsInput | $Enums.WorkExperience
    jobLocation?: EnumJobLocationFieldUpdateOperationsInput | $Enums.JobLocation
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}