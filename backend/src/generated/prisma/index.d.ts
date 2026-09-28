
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model UserGenre
 * 
 */
export type UserGenre = $Result.DefaultSelection<Prisma.$UserGenrePayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Share
 * 
 */
export type Share = $Result.DefaultSelection<Prisma.$SharePayload>
/**
 * Model Relationship
 * 
 */
export type Relationship = $Result.DefaultSelection<Prisma.$RelationshipPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model UserChallenge
 * 
 */
export type UserChallenge = $Result.DefaultSelection<Prisma.$UserChallengePayload>
/**
 * Model ProductivityCount
 * 
 */
export type ProductivityCount = $Result.DefaultSelection<Prisma.$ProductivityCountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  NORMAL: 'NORMAL',
  CREATOR: 'CREATOR',
  ADMIN: 'ADMIN'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const ContentType: {
  ARTICLE: 'ARTICLE',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const FollowStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type FollowStatus = (typeof FollowStatus)[keyof typeof FollowStatus]


export const ChallengeStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED'
};

export type ChallengeStatus = (typeof ChallengeStatus)[keyof typeof ChallengeStatus]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type FollowStatus = $Enums.FollowStatus

export const FollowStatus: typeof $Enums.FollowStatus

export type ChallengeStatus = $Enums.ChallengeStatus

export const ChallengeStatus: typeof $Enums.ChallengeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGenre`: Exposes CRUD operations for the **UserGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGenres
    * const userGenres = await prisma.userGenre.findMany()
    * ```
    */
  get userGenre(): Prisma.UserGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.share`: Exposes CRUD operations for the **Share** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shares
    * const shares = await prisma.share.findMany()
    * ```
    */
  get share(): Prisma.ShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relationship`: Exposes CRUD operations for the **Relationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relationships
    * const relationships = await prisma.relationship.findMany()
    * ```
    */
  get relationship(): Prisma.RelationshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userChallenge`: Exposes CRUD operations for the **UserChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserChallenges
    * const userChallenges = await prisma.userChallenge.findMany()
    * ```
    */
  get userChallenge(): Prisma.UserChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productivityCount`: Exposes CRUD operations for the **ProductivityCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductivityCounts
    * const productivityCounts = await prisma.productivityCount.findMany()
    * ```
    */
  get productivityCount(): Prisma.ProductivityCountDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Genre: 'Genre',
    UserGenre: 'UserGenre',
    Content: 'Content',
    Post: 'Post',
    Like: 'Like',
    Share: 'Share',
    Relationship: 'Relationship',
    Challenge: 'Challenge',
    UserChallenge: 'UserChallenge',
    ProductivityCount: 'ProductivityCount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "genre" | "userGenre" | "content" | "post" | "like" | "share" | "relationship" | "challenge" | "userChallenge" | "productivityCount"
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
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      UserGenre: {
        payload: Prisma.$UserGenrePayload<ExtArgs>
        fields: Prisma.UserGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>
          }
          findFirst: {
            args: Prisma.UserGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>
          }
          findMany: {
            args: Prisma.UserGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>[]
          }
          create: {
            args: Prisma.UserGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>
          }
          createMany: {
            args: Prisma.UserGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>[]
          }
          delete: {
            args: Prisma.UserGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>
          }
          update: {
            args: Prisma.UserGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>
          }
          deleteMany: {
            args: Prisma.UserGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>[]
          }
          upsert: {
            args: Prisma.UserGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGenrePayload>
          }
          aggregate: {
            args: Prisma.UserGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGenre>
          }
          groupBy: {
            args: Prisma.UserGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGenreCountArgs<ExtArgs>
            result: $Utils.Optional<UserGenreCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Share: {
        payload: Prisma.$SharePayload<ExtArgs>
        fields: Prisma.ShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          findFirst: {
            args: Prisma.ShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          findMany: {
            args: Prisma.ShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          create: {
            args: Prisma.ShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          createMany: {
            args: Prisma.ShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          delete: {
            args: Prisma.ShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          update: {
            args: Prisma.ShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          deleteMany: {
            args: Prisma.ShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>[]
          }
          upsert: {
            args: Prisma.ShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharePayload>
          }
          aggregate: {
            args: Prisma.ShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShare>
          }
          groupBy: {
            args: Prisma.ShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareCountArgs<ExtArgs>
            result: $Utils.Optional<ShareCountAggregateOutputType> | number
          }
        }
      }
      Relationship: {
        payload: Prisma.$RelationshipPayload<ExtArgs>
        fields: Prisma.RelationshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          findFirst: {
            args: Prisma.RelationshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          findMany: {
            args: Prisma.RelationshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          create: {
            args: Prisma.RelationshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          createMany: {
            args: Prisma.RelationshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          delete: {
            args: Prisma.RelationshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          update: {
            args: Prisma.RelationshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          deleteMany: {
            args: Prisma.RelationshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelationshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          upsert: {
            args: Prisma.RelationshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          aggregate: {
            args: Prisma.RelationshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelationship>
          }
          groupBy: {
            args: Prisma.RelationshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationshipCountArgs<ExtArgs>
            result: $Utils.Optional<RelationshipCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      UserChallenge: {
        payload: Prisma.$UserChallengePayload<ExtArgs>
        fields: Prisma.UserChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findFirst: {
            args: Prisma.UserChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findMany: {
            args: Prisma.UserChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          create: {
            args: Prisma.UserChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          createMany: {
            args: Prisma.UserChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          delete: {
            args: Prisma.UserChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          update: {
            args: Prisma.UserChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          deleteMany: {
            args: Prisma.UserChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          upsert: {
            args: Prisma.UserChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          aggregate: {
            args: Prisma.UserChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserChallenge>
          }
          groupBy: {
            args: Prisma.UserChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeCountAggregateOutputType> | number
          }
        }
      }
      ProductivityCount: {
        payload: Prisma.$ProductivityCountPayload<ExtArgs>
        fields: Prisma.ProductivityCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductivityCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductivityCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>
          }
          findFirst: {
            args: Prisma.ProductivityCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductivityCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>
          }
          findMany: {
            args: Prisma.ProductivityCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>[]
          }
          create: {
            args: Prisma.ProductivityCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>
          }
          createMany: {
            args: Prisma.ProductivityCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductivityCountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>[]
          }
          delete: {
            args: Prisma.ProductivityCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>
          }
          update: {
            args: Prisma.ProductivityCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>
          }
          deleteMany: {
            args: Prisma.ProductivityCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductivityCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductivityCountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>[]
          }
          upsert: {
            args: Prisma.ProductivityCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductivityCountPayload>
          }
          aggregate: {
            args: Prisma.ProductivityCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductivityCount>
          }
          groupBy: {
            args: Prisma.ProductivityCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductivityCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductivityCountCountArgs<ExtArgs>
            result: $Utils.Optional<ProductivityCountCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    genre?: GenreOmit
    userGenre?: UserGenreOmit
    content?: ContentOmit
    post?: PostOmit
    like?: LikeOmit
    share?: ShareOmit
    relationship?: RelationshipOmit
    challenge?: ChallengeOmit
    userChallenge?: UserChallengeOmit
    productivityCount?: ProductivityCountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    selectedGenres: number
    contents: number
    posts: number
    taggedInPosts: number
    likes: number
    shares: number
    sentRelationships: number
    receivedRelationships: number
    createdChallenges: number
    userChallenges: number
    productivityCounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selectedGenres?: boolean | UserCountOutputTypeCountSelectedGenresArgs
    contents?: boolean | UserCountOutputTypeCountContentsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    taggedInPosts?: boolean | UserCountOutputTypeCountTaggedInPostsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    shares?: boolean | UserCountOutputTypeCountSharesArgs
    sentRelationships?: boolean | UserCountOutputTypeCountSentRelationshipsArgs
    receivedRelationships?: boolean | UserCountOutputTypeCountReceivedRelationshipsArgs
    createdChallenges?: boolean | UserCountOutputTypeCountCreatedChallengesArgs
    userChallenges?: boolean | UserCountOutputTypeCountUserChallengesArgs
    productivityCounts?: boolean | UserCountOutputTypeCountProductivityCountsArgs
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
  export type UserCountOutputTypeCountSelectedGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGenreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaggedInPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductivityCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductivityCountWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    users: number
    contents: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GenreCountOutputTypeCountUsersArgs
    contents?: boolean | GenreCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGenreWhereInput
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    likes: number
    shares: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | ContentCountOutputTypeCountLikesArgs
    shares?: boolean | ContentCountOutputTypeCountSharesArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    userChallenges: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userChallenges?: boolean | ChallengeCountOutputTypeCountUserChallengesArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountUserChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    streak: number | null
  }

  export type UserSumAggregateOutputType = {
    streak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    accountType: $Enums.AccountType | null
    bio: string | null
    profileImage: string | null
    streak: number | null
    lastActiveAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    accountType: $Enums.AccountType | null
    bio: string | null
    profileImage: string | null
    streak: number | null
    lastActiveAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    passwordHash: number
    accountType: number
    bio: number
    profileImage: number
    streak: number
    lastActiveAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    streak?: true
  }

  export type UserSumAggregateInputType = {
    streak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    passwordHash?: true
    accountType?: true
    bio?: true
    profileImage?: true
    streak?: true
    lastActiveAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    passwordHash?: true
    accountType?: true
    bio?: true
    profileImage?: true
    streak?: true
    lastActiveAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    passwordHash?: true
    accountType?: true
    bio?: true
    profileImage?: true
    streak?: true
    lastActiveAt?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType: $Enums.AccountType
    bio: string | null
    profileImage: string | null
    streak: number
    lastActiveAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    accountType?: boolean
    bio?: boolean
    profileImage?: boolean
    streak?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    selectedGenres?: boolean | User$selectedGenresArgs<ExtArgs>
    contents?: boolean | User$contentsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    taggedInPosts?: boolean | User$taggedInPostsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    shares?: boolean | User$sharesArgs<ExtArgs>
    sentRelationships?: boolean | User$sentRelationshipsArgs<ExtArgs>
    receivedRelationships?: boolean | User$receivedRelationshipsArgs<ExtArgs>
    createdChallenges?: boolean | User$createdChallengesArgs<ExtArgs>
    userChallenges?: boolean | User$userChallengesArgs<ExtArgs>
    productivityCounts?: boolean | User$productivityCountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    accountType?: boolean
    bio?: boolean
    profileImage?: boolean
    streak?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    accountType?: boolean
    bio?: boolean
    profileImage?: boolean
    streak?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    accountType?: boolean
    bio?: boolean
    profileImage?: boolean
    streak?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "passwordHash" | "accountType" | "bio" | "profileImage" | "streak" | "lastActiveAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selectedGenres?: boolean | User$selectedGenresArgs<ExtArgs>
    contents?: boolean | User$contentsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    taggedInPosts?: boolean | User$taggedInPostsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    shares?: boolean | User$sharesArgs<ExtArgs>
    sentRelationships?: boolean | User$sentRelationshipsArgs<ExtArgs>
    receivedRelationships?: boolean | User$receivedRelationshipsArgs<ExtArgs>
    createdChallenges?: boolean | User$createdChallengesArgs<ExtArgs>
    userChallenges?: boolean | User$userChallengesArgs<ExtArgs>
    productivityCounts?: boolean | User$productivityCountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      selectedGenres: Prisma.$UserGenrePayload<ExtArgs>[]
      contents: Prisma.$ContentPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      taggedInPosts: Prisma.$PostPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      shares: Prisma.$SharePayload<ExtArgs>[]
      sentRelationships: Prisma.$RelationshipPayload<ExtArgs>[]
      receivedRelationships: Prisma.$RelationshipPayload<ExtArgs>[]
      createdChallenges: Prisma.$ChallengePayload<ExtArgs>[]
      userChallenges: Prisma.$UserChallengePayload<ExtArgs>[]
      productivityCounts: Prisma.$ProductivityCountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      passwordHash: string
      accountType: $Enums.AccountType
      bio: string | null
      profileImage: string | null
      streak: number
      lastActiveAt: Date | null
      createdAt: Date
      updatedAt: Date
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
    selectedGenres<T extends User$selectedGenresArgs<ExtArgs> = {}>(args?: Subset<T, User$selectedGenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents<T extends User$contentsArgs<ExtArgs> = {}>(args?: Subset<T, User$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taggedInPosts<T extends User$taggedInPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$taggedInPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends User$sharesArgs<ExtArgs> = {}>(args?: Subset<T, User$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentRelationships<T extends User$sentRelationshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRelationshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRelationships<T extends User$receivedRelationshipsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRelationshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdChallenges<T extends User$createdChallengesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userChallenges<T extends User$userChallengesArgs<ExtArgs> = {}>(args?: Subset<T, User$userChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productivityCounts<T extends User$productivityCountsArgs<ExtArgs> = {}>(args?: Subset<T, User$productivityCountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly accountType: FieldRef<"User", 'AccountType'>
    readonly bio: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly streak: FieldRef<"User", 'Int'>
    readonly lastActiveAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.selectedGenres
   */
  export type User$selectedGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    where?: UserGenreWhereInput
    orderBy?: UserGenreOrderByWithRelationInput | UserGenreOrderByWithRelationInput[]
    cursor?: UserGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGenreScalarFieldEnum | UserGenreScalarFieldEnum[]
  }

  /**
   * User.contents
   */
  export type User$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.taggedInPosts
   */
  export type User$taggedInPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.shares
   */
  export type User$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    where?: ShareWhereInput
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    cursor?: ShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * User.sentRelationships
   */
  export type User$sentRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * User.receivedRelationships
   */
  export type User$receivedRelationshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * User.createdChallenges
   */
  export type User$createdChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    cursor?: ChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * User.userChallenges
   */
  export type User$userChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    cursor?: UserChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * User.productivityCounts
   */
  export type User$productivityCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    where?: ProductivityCountWhereInput
    orderBy?: ProductivityCountOrderByWithRelationInput | ProductivityCountOrderByWithRelationInput[]
    cursor?: ProductivityCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductivityCountScalarFieldEnum | ProductivityCountScalarFieldEnum[]
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
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    users?: boolean | Genre$usersArgs<ExtArgs>
    contents?: boolean | Genre$contentsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Genre$usersArgs<ExtArgs>
    contents?: boolean | Genre$contentsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      users: Prisma.$UserGenrePayload<ExtArgs>[]
      contents: Prisma.$ContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
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
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Genre$usersArgs<ExtArgs> = {}>(args?: Subset<T, Genre$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents<T extends Genre$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly slug: FieldRef<"Genre", 'String'>
    readonly createdAt: FieldRef<"Genre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.users
   */
  export type Genre$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    where?: UserGenreWhereInput
    orderBy?: UserGenreOrderByWithRelationInput | UserGenreOrderByWithRelationInput[]
    cursor?: UserGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGenreScalarFieldEnum | UserGenreScalarFieldEnum[]
  }

  /**
   * Genre.contents
   */
  export type Genre$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model UserGenre
   */

  export type AggregateUserGenre = {
    _count: UserGenreCountAggregateOutputType | null
    _min: UserGenreMinAggregateOutputType | null
    _max: UserGenreMaxAggregateOutputType | null
  }

  export type UserGenreMinAggregateOutputType = {
    id: string | null
    userId: string | null
    genreId: string | null
    createdAt: Date | null
  }

  export type UserGenreMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    genreId: string | null
    createdAt: Date | null
  }

  export type UserGenreCountAggregateOutputType = {
    id: number
    userId: number
    genreId: number
    createdAt: number
    _all: number
  }


  export type UserGenreMinAggregateInputType = {
    id?: true
    userId?: true
    genreId?: true
    createdAt?: true
  }

  export type UserGenreMaxAggregateInputType = {
    id?: true
    userId?: true
    genreId?: true
    createdAt?: true
  }

  export type UserGenreCountAggregateInputType = {
    id?: true
    userId?: true
    genreId?: true
    createdAt?: true
    _all?: true
  }

  export type UserGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGenre to aggregate.
     */
    where?: UserGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGenres to fetch.
     */
    orderBy?: UserGenreOrderByWithRelationInput | UserGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGenres
    **/
    _count?: true | UserGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGenreMaxAggregateInputType
  }

  export type GetUserGenreAggregateType<T extends UserGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGenre[P]>
      : GetScalarType<T[P], AggregateUserGenre[P]>
  }




  export type UserGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGenreWhereInput
    orderBy?: UserGenreOrderByWithAggregationInput | UserGenreOrderByWithAggregationInput[]
    by: UserGenreScalarFieldEnum[] | UserGenreScalarFieldEnum
    having?: UserGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGenreCountAggregateInputType | true
    _min?: UserGenreMinAggregateInputType
    _max?: UserGenreMaxAggregateInputType
  }

  export type UserGenreGroupByOutputType = {
    id: string
    userId: string
    genreId: string
    createdAt: Date
    _count: UserGenreCountAggregateOutputType | null
    _min: UserGenreMinAggregateOutputType | null
    _max: UserGenreMaxAggregateOutputType | null
  }

  type GetUserGenreGroupByPayload<T extends UserGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGenreGroupByOutputType[P]>
            : GetScalarType<T[P], UserGenreGroupByOutputType[P]>
        }
      >
    >


  export type UserGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    genreId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGenre"]>

  export type UserGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    genreId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGenre"]>

  export type UserGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    genreId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGenre"]>

  export type UserGenreSelectScalar = {
    id?: boolean
    userId?: boolean
    genreId?: boolean
    createdAt?: boolean
  }

  export type UserGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "genreId" | "createdAt", ExtArgs["result"]["userGenre"]>
  export type UserGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type UserGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type UserGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }

  export type $UserGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGenre"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      genreId: string
      createdAt: Date
    }, ExtArgs["result"]["userGenre"]>
    composites: {}
  }

  type UserGenreGetPayload<S extends boolean | null | undefined | UserGenreDefaultArgs> = $Result.GetResult<Prisma.$UserGenrePayload, S>

  type UserGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGenreCountAggregateInputType | true
    }

  export interface UserGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGenre'], meta: { name: 'UserGenre' } }
    /**
     * Find zero or one UserGenre that matches the filter.
     * @param {UserGenreFindUniqueArgs} args - Arguments to find a UserGenre
     * @example
     * // Get one UserGenre
     * const userGenre = await prisma.userGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGenreFindUniqueArgs>(args: SelectSubset<T, UserGenreFindUniqueArgs<ExtArgs>>): Prisma__UserGenreClient<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGenreFindUniqueOrThrowArgs} args - Arguments to find a UserGenre
     * @example
     * // Get one UserGenre
     * const userGenre = await prisma.userGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGenreClient<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenreFindFirstArgs} args - Arguments to find a UserGenre
     * @example
     * // Get one UserGenre
     * const userGenre = await prisma.userGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGenreFindFirstArgs>(args?: SelectSubset<T, UserGenreFindFirstArgs<ExtArgs>>): Prisma__UserGenreClient<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenreFindFirstOrThrowArgs} args - Arguments to find a UserGenre
     * @example
     * // Get one UserGenre
     * const userGenre = await prisma.userGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGenreClient<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGenres
     * const userGenres = await prisma.userGenre.findMany()
     * 
     * // Get first 10 UserGenres
     * const userGenres = await prisma.userGenre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGenreWithIdOnly = await prisma.userGenre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGenreFindManyArgs>(args?: SelectSubset<T, UserGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGenre.
     * @param {UserGenreCreateArgs} args - Arguments to create a UserGenre.
     * @example
     * // Create one UserGenre
     * const UserGenre = await prisma.userGenre.create({
     *   data: {
     *     // ... data to create a UserGenre
     *   }
     * })
     * 
     */
    create<T extends UserGenreCreateArgs>(args: SelectSubset<T, UserGenreCreateArgs<ExtArgs>>): Prisma__UserGenreClient<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGenres.
     * @param {UserGenreCreateManyArgs} args - Arguments to create many UserGenres.
     * @example
     * // Create many UserGenres
     * const userGenre = await prisma.userGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGenreCreateManyArgs>(args?: SelectSubset<T, UserGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGenres and returns the data saved in the database.
     * @param {UserGenreCreateManyAndReturnArgs} args - Arguments to create many UserGenres.
     * @example
     * // Create many UserGenres
     * const userGenre = await prisma.userGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGenres and only return the `id`
     * const userGenreWithIdOnly = await prisma.userGenre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGenre.
     * @param {UserGenreDeleteArgs} args - Arguments to delete one UserGenre.
     * @example
     * // Delete one UserGenre
     * const UserGenre = await prisma.userGenre.delete({
     *   where: {
     *     // ... filter to delete one UserGenre
     *   }
     * })
     * 
     */
    delete<T extends UserGenreDeleteArgs>(args: SelectSubset<T, UserGenreDeleteArgs<ExtArgs>>): Prisma__UserGenreClient<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGenre.
     * @param {UserGenreUpdateArgs} args - Arguments to update one UserGenre.
     * @example
     * // Update one UserGenre
     * const userGenre = await prisma.userGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGenreUpdateArgs>(args: SelectSubset<T, UserGenreUpdateArgs<ExtArgs>>): Prisma__UserGenreClient<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGenres.
     * @param {UserGenreDeleteManyArgs} args - Arguments to filter UserGenres to delete.
     * @example
     * // Delete a few UserGenres
     * const { count } = await prisma.userGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGenreDeleteManyArgs>(args?: SelectSubset<T, UserGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGenres
     * const userGenre = await prisma.userGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGenreUpdateManyArgs>(args: SelectSubset<T, UserGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGenres and returns the data updated in the database.
     * @param {UserGenreUpdateManyAndReturnArgs} args - Arguments to update many UserGenres.
     * @example
     * // Update many UserGenres
     * const userGenre = await prisma.userGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGenres and only return the `id`
     * const userGenreWithIdOnly = await prisma.userGenre.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGenre.
     * @param {UserGenreUpsertArgs} args - Arguments to update or create a UserGenre.
     * @example
     * // Update or create a UserGenre
     * const userGenre = await prisma.userGenre.upsert({
     *   create: {
     *     // ... data to create a UserGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGenre we want to update
     *   }
     * })
     */
    upsert<T extends UserGenreUpsertArgs>(args: SelectSubset<T, UserGenreUpsertArgs<ExtArgs>>): Prisma__UserGenreClient<$Result.GetResult<Prisma.$UserGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenreCountArgs} args - Arguments to filter UserGenres to count.
     * @example
     * // Count the number of UserGenres
     * const count = await prisma.userGenre.count({
     *   where: {
     *     // ... the filter for the UserGenres we want to count
     *   }
     * })
    **/
    count<T extends UserGenreCountArgs>(
      args?: Subset<T, UserGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGenreAggregateArgs>(args: Subset<T, UserGenreAggregateArgs>): Prisma.PrismaPromise<GetUserGenreAggregateType<T>>

    /**
     * Group by UserGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGenreGroupByArgs} args - Group by arguments.
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
      T extends UserGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGenreGroupByArgs['orderBy'] }
        : { orderBy?: UserGenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGenre model
   */
  readonly fields: UserGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserGenre model
   */
  interface UserGenreFieldRefs {
    readonly id: FieldRef<"UserGenre", 'String'>
    readonly userId: FieldRef<"UserGenre", 'String'>
    readonly genreId: FieldRef<"UserGenre", 'String'>
    readonly createdAt: FieldRef<"UserGenre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGenre findUnique
   */
  export type UserGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * Filter, which UserGenre to fetch.
     */
    where: UserGenreWhereUniqueInput
  }

  /**
   * UserGenre findUniqueOrThrow
   */
  export type UserGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * Filter, which UserGenre to fetch.
     */
    where: UserGenreWhereUniqueInput
  }

  /**
   * UserGenre findFirst
   */
  export type UserGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * Filter, which UserGenre to fetch.
     */
    where?: UserGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGenres to fetch.
     */
    orderBy?: UserGenreOrderByWithRelationInput | UserGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGenres.
     */
    cursor?: UserGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGenres.
     */
    distinct?: UserGenreScalarFieldEnum | UserGenreScalarFieldEnum[]
  }

  /**
   * UserGenre findFirstOrThrow
   */
  export type UserGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * Filter, which UserGenre to fetch.
     */
    where?: UserGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGenres to fetch.
     */
    orderBy?: UserGenreOrderByWithRelationInput | UserGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGenres.
     */
    cursor?: UserGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGenres.
     */
    distinct?: UserGenreScalarFieldEnum | UserGenreScalarFieldEnum[]
  }

  /**
   * UserGenre findMany
   */
  export type UserGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * Filter, which UserGenres to fetch.
     */
    where?: UserGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGenres to fetch.
     */
    orderBy?: UserGenreOrderByWithRelationInput | UserGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGenres.
     */
    cursor?: UserGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGenres.
     */
    distinct?: UserGenreScalarFieldEnum | UserGenreScalarFieldEnum[]
  }

  /**
   * UserGenre create
   */
  export type UserGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGenre.
     */
    data: XOR<UserGenreCreateInput, UserGenreUncheckedCreateInput>
  }

  /**
   * UserGenre createMany
   */
  export type UserGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGenres.
     */
    data: UserGenreCreateManyInput | UserGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGenre createManyAndReturn
   */
  export type UserGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * The data used to create many UserGenres.
     */
    data: UserGenreCreateManyInput | UserGenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGenre update
   */
  export type UserGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGenre.
     */
    data: XOR<UserGenreUpdateInput, UserGenreUncheckedUpdateInput>
    /**
     * Choose, which UserGenre to update.
     */
    where: UserGenreWhereUniqueInput
  }

  /**
   * UserGenre updateMany
   */
  export type UserGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGenres.
     */
    data: XOR<UserGenreUpdateManyMutationInput, UserGenreUncheckedUpdateManyInput>
    /**
     * Filter which UserGenres to update
     */
    where?: UserGenreWhereInput
    /**
     * Limit how many UserGenres to update.
     */
    limit?: number
  }

  /**
   * UserGenre updateManyAndReturn
   */
  export type UserGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * The data used to update UserGenres.
     */
    data: XOR<UserGenreUpdateManyMutationInput, UserGenreUncheckedUpdateManyInput>
    /**
     * Filter which UserGenres to update
     */
    where?: UserGenreWhereInput
    /**
     * Limit how many UserGenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGenre upsert
   */
  export type UserGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGenre to update in case it exists.
     */
    where: UserGenreWhereUniqueInput
    /**
     * In case the UserGenre found by the `where` argument doesn't exist, create a new UserGenre with this data.
     */
    create: XOR<UserGenreCreateInput, UserGenreUncheckedCreateInput>
    /**
     * In case the UserGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGenreUpdateInput, UserGenreUncheckedUpdateInput>
  }

  /**
   * UserGenre delete
   */
  export type UserGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
    /**
     * Filter which UserGenre to delete.
     */
    where: UserGenreWhereUniqueInput
  }

  /**
   * UserGenre deleteMany
   */
  export type UserGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGenres to delete
     */
    where?: UserGenreWhereInput
    /**
     * Limit how many UserGenres to delete.
     */
    limit?: number
  }

  /**
   * UserGenre without action
   */
  export type UserGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGenre
     */
    select?: UserGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGenre
     */
    omit?: UserGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGenreInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    body: string | null
    type: $Enums.ContentType | null
    externalUrl: string | null
    mediaUrl: string | null
    genreId: string | null
    creatorId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    body: string | null
    type: $Enums.ContentType | null
    externalUrl: string | null
    mediaUrl: string | null
    genreId: string | null
    creatorId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    body: number
    type: number
    externalUrl: number
    mediaUrl: number
    genreId: number
    creatorId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    body?: true
    type?: true
    externalUrl?: true
    mediaUrl?: true
    genreId?: true
    creatorId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    body?: true
    type?: true
    externalUrl?: true
    mediaUrl?: true
    genreId?: true
    creatorId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    body?: true
    type?: true
    externalUrl?: true
    mediaUrl?: true
    genreId?: true
    creatorId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    title: string
    description: string | null
    body: string | null
    type: $Enums.ContentType
    externalUrl: string | null
    mediaUrl: string | null
    genreId: string
    creatorId: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ContentCountAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    body?: boolean
    type?: boolean
    externalUrl?: boolean
    mediaUrl?: boolean
    genreId?: boolean
    creatorId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | Content$likesArgs<ExtArgs>
    shares?: boolean | Content$sharesArgs<ExtArgs>
    challenge?: boolean | Content$challengeArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    body?: boolean
    type?: boolean
    externalUrl?: boolean
    mediaUrl?: boolean
    genreId?: boolean
    creatorId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    body?: boolean
    type?: boolean
    externalUrl?: boolean
    mediaUrl?: boolean
    genreId?: boolean
    creatorId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    body?: boolean
    type?: boolean
    externalUrl?: boolean
    mediaUrl?: boolean
    genreId?: boolean
    creatorId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "body" | "type" | "externalUrl" | "mediaUrl" | "genreId" | "creatorId" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | Content$likesArgs<ExtArgs>
    shares?: boolean | Content$sharesArgs<ExtArgs>
    challenge?: boolean | Content$challengeArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      genre: Prisma.$GenrePayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      likes: Prisma.$LikePayload<ExtArgs>[]
      shares: Prisma.$SharePayload<ExtArgs>[]
      challenge: Prisma.$ChallengePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      body: string | null
      type: $Enums.ContentType
      externalUrl: string | null
      mediaUrl: string | null
      genreId: string
      creatorId: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
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
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends Content$likesArgs<ExtArgs> = {}>(args?: Subset<T, Content$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends Content$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Content$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challenge<T extends Content$challengeArgs<ExtArgs> = {}>(args?: Subset<T, Content$challengeArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly title: FieldRef<"Content", 'String'>
    readonly description: FieldRef<"Content", 'String'>
    readonly body: FieldRef<"Content", 'String'>
    readonly type: FieldRef<"Content", 'ContentType'>
    readonly externalUrl: FieldRef<"Content", 'String'>
    readonly mediaUrl: FieldRef<"Content", 'String'>
    readonly genreId: FieldRef<"Content", 'String'>
    readonly creatorId: FieldRef<"Content", 'String'>
    readonly deletedAt: FieldRef<"Content", 'DateTime'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.likes
   */
  export type Content$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Content.shares
   */
  export type Content$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    where?: ShareWhereInput
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    cursor?: ShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Content.challenge
   */
  export type Content$challengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    where?: ChallengeWhereInput
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    content: string | null
    mediaUrl: string | null
    authorId: string | null
    challengeId: string | null
    taggedCreatorId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    content: string | null
    mediaUrl: string | null
    authorId: string | null
    challengeId: string | null
    taggedCreatorId: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    content: number
    mediaUrl: number
    authorId: number
    challengeId: number
    taggedCreatorId: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    content?: true
    mediaUrl?: true
    authorId?: true
    challengeId?: true
    taggedCreatorId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    content?: true
    mediaUrl?: true
    authorId?: true
    challengeId?: true
    taggedCreatorId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    content?: true
    mediaUrl?: true
    authorId?: true
    challengeId?: true
    taggedCreatorId?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    content: string
    mediaUrl: string | null
    authorId: string
    challengeId: string | null
    taggedCreatorId: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    mediaUrl?: boolean
    authorId?: boolean
    challengeId?: boolean
    taggedCreatorId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | Post$challengeArgs<ExtArgs>
    taggedCreator?: boolean | Post$taggedCreatorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    mediaUrl?: boolean
    authorId?: boolean
    challengeId?: boolean
    taggedCreatorId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | Post$challengeArgs<ExtArgs>
    taggedCreator?: boolean | Post$taggedCreatorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    mediaUrl?: boolean
    authorId?: boolean
    challengeId?: boolean
    taggedCreatorId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | Post$challengeArgs<ExtArgs>
    taggedCreator?: boolean | Post$taggedCreatorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    content?: boolean
    mediaUrl?: boolean
    authorId?: boolean
    challengeId?: boolean
    taggedCreatorId?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "mediaUrl" | "authorId" | "challengeId" | "taggedCreatorId" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | Post$challengeArgs<ExtArgs>
    taggedCreator?: boolean | Post$taggedCreatorArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | Post$challengeArgs<ExtArgs>
    taggedCreator?: boolean | Post$taggedCreatorArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | Post$challengeArgs<ExtArgs>
    taggedCreator?: boolean | Post$taggedCreatorArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      challenge: Prisma.$UserChallengePayload<ExtArgs> | null
      taggedCreator: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      mediaUrl: string | null
      authorId: string
      challengeId: string | null
      taggedCreatorId: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends Post$challengeArgs<ExtArgs> = {}>(args?: Subset<T, Post$challengeArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    taggedCreator<T extends Post$taggedCreatorArgs<ExtArgs> = {}>(args?: Subset<T, Post$taggedCreatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly mediaUrl: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly challengeId: FieldRef<"Post", 'String'>
    readonly taggedCreatorId: FieldRef<"Post", 'String'>
    readonly deletedAt: FieldRef<"Post", 'DateTime'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.challenge
   */
  export type Post$challengeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
  }

  /**
   * Post.taggedCreator
   */
  export type Post$taggedCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userId: number
    contentId: number
    createdAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    userId: string
    contentId: string
    createdAt: Date
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contentId" | "createdAt", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contentId: string
      createdAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly contentId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Share
   */

  export type AggregateShare = {
    _count: ShareCountAggregateOutputType | null
    _min: ShareMinAggregateOutputType | null
    _max: ShareMaxAggregateOutputType | null
  }

  export type ShareMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type ShareMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contentId: string | null
    createdAt: Date | null
  }

  export type ShareCountAggregateOutputType = {
    id: number
    userId: number
    contentId: number
    createdAt: number
    _all: number
  }


  export type ShareMinAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type ShareMaxAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
  }

  export type ShareCountAggregateInputType = {
    id?: true
    userId?: true
    contentId?: true
    createdAt?: true
    _all?: true
  }

  export type ShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Share to aggregate.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shares
    **/
    _count?: true | ShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareMaxAggregateInputType
  }

  export type GetShareAggregateType<T extends ShareAggregateArgs> = {
        [P in keyof T & keyof AggregateShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShare[P]>
      : GetScalarType<T[P], AggregateShare[P]>
  }




  export type ShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareWhereInput
    orderBy?: ShareOrderByWithAggregationInput | ShareOrderByWithAggregationInput[]
    by: ShareScalarFieldEnum[] | ShareScalarFieldEnum
    having?: ShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareCountAggregateInputType | true
    _min?: ShareMinAggregateInputType
    _max?: ShareMaxAggregateInputType
  }

  export type ShareGroupByOutputType = {
    id: string
    userId: string
    contentId: string
    createdAt: Date
    _count: ShareCountAggregateOutputType | null
    _min: ShareMinAggregateOutputType | null
    _max: ShareMaxAggregateOutputType | null
  }

  type GetShareGroupByPayload<T extends ShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareGroupByOutputType[P]>
            : GetScalarType<T[P], ShareGroupByOutputType[P]>
        }
      >
    >


  export type ShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["share"]>

  export type ShareSelectScalar = {
    id?: boolean
    userId?: boolean
    contentId?: boolean
    createdAt?: boolean
  }

  export type ShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contentId" | "createdAt", ExtArgs["result"]["share"]>
  export type ShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type ShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type ShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $SharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Share"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contentId: string
      createdAt: Date
    }, ExtArgs["result"]["share"]>
    composites: {}
  }

  type ShareGetPayload<S extends boolean | null | undefined | ShareDefaultArgs> = $Result.GetResult<Prisma.$SharePayload, S>

  type ShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareCountAggregateInputType | true
    }

  export interface ShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Share'], meta: { name: 'Share' } }
    /**
     * Find zero or one Share that matches the filter.
     * @param {ShareFindUniqueArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareFindUniqueArgs>(args: SelectSubset<T, ShareFindUniqueArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Share that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareFindUniqueOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Share that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindFirstArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareFindFirstArgs>(args?: SelectSubset<T, ShareFindFirstArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Share that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindFirstOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shares
     * const shares = await prisma.share.findMany()
     * 
     * // Get first 10 Shares
     * const shares = await prisma.share.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareWithIdOnly = await prisma.share.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareFindManyArgs>(args?: SelectSubset<T, ShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Share.
     * @param {ShareCreateArgs} args - Arguments to create a Share.
     * @example
     * // Create one Share
     * const Share = await prisma.share.create({
     *   data: {
     *     // ... data to create a Share
     *   }
     * })
     * 
     */
    create<T extends ShareCreateArgs>(args: SelectSubset<T, ShareCreateArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shares.
     * @param {ShareCreateManyArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareCreateManyArgs>(args?: SelectSubset<T, ShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shares and returns the data saved in the database.
     * @param {ShareCreateManyAndReturnArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shares and only return the `id`
     * const shareWithIdOnly = await prisma.share.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Share.
     * @param {ShareDeleteArgs} args - Arguments to delete one Share.
     * @example
     * // Delete one Share
     * const Share = await prisma.share.delete({
     *   where: {
     *     // ... filter to delete one Share
     *   }
     * })
     * 
     */
    delete<T extends ShareDeleteArgs>(args: SelectSubset<T, ShareDeleteArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Share.
     * @param {ShareUpdateArgs} args - Arguments to update one Share.
     * @example
     * // Update one Share
     * const share = await prisma.share.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareUpdateArgs>(args: SelectSubset<T, ShareUpdateArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shares.
     * @param {ShareDeleteManyArgs} args - Arguments to filter Shares to delete.
     * @example
     * // Delete a few Shares
     * const { count } = await prisma.share.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareDeleteManyArgs>(args?: SelectSubset<T, ShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareUpdateManyArgs>(args: SelectSubset<T, ShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shares and returns the data updated in the database.
     * @param {ShareUpdateManyAndReturnArgs} args - Arguments to update many Shares.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shares and only return the `id`
     * const shareWithIdOnly = await prisma.share.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShareUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Share.
     * @param {ShareUpsertArgs} args - Arguments to update or create a Share.
     * @example
     * // Update or create a Share
     * const share = await prisma.share.upsert({
     *   create: {
     *     // ... data to create a Share
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Share we want to update
     *   }
     * })
     */
    upsert<T extends ShareUpsertArgs>(args: SelectSubset<T, ShareUpsertArgs<ExtArgs>>): Prisma__ShareClient<$Result.GetResult<Prisma.$SharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareCountArgs} args - Arguments to filter Shares to count.
     * @example
     * // Count the number of Shares
     * const count = await prisma.share.count({
     *   where: {
     *     // ... the filter for the Shares we want to count
     *   }
     * })
    **/
    count<T extends ShareCountArgs>(
      args?: Subset<T, ShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShareAggregateArgs>(args: Subset<T, ShareAggregateArgs>): Prisma.PrismaPromise<GetShareAggregateType<T>>

    /**
     * Group by Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareGroupByArgs} args - Group by arguments.
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
      T extends ShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareGroupByArgs['orderBy'] }
        : { orderBy?: ShareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Share model
   */
  readonly fields: ShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Share.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Share model
   */
  interface ShareFieldRefs {
    readonly id: FieldRef<"Share", 'String'>
    readonly userId: FieldRef<"Share", 'String'>
    readonly contentId: FieldRef<"Share", 'String'>
    readonly createdAt: FieldRef<"Share", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Share findUnique
   */
  export type ShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share findUniqueOrThrow
   */
  export type ShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share findFirst
   */
  export type ShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share findFirstOrThrow
   */
  export type ShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Share to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share findMany
   */
  export type ShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter, which Shares to fetch.
     */
    where?: ShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shares to fetch.
     */
    orderBy?: ShareOrderByWithRelationInput | ShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shares.
     */
    cursor?: ShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[]
  }

  /**
   * Share create
   */
  export type ShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The data needed to create a Share.
     */
    data: XOR<ShareCreateInput, ShareUncheckedCreateInput>
  }

  /**
   * Share createMany
   */
  export type ShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shares.
     */
    data: ShareCreateManyInput | ShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Share createManyAndReturn
   */
  export type ShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * The data used to create many Shares.
     */
    data: ShareCreateManyInput | ShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Share update
   */
  export type ShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The data needed to update a Share.
     */
    data: XOR<ShareUpdateInput, ShareUncheckedUpdateInput>
    /**
     * Choose, which Share to update.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share updateMany
   */
  export type ShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shares.
     */
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyInput>
    /**
     * Filter which Shares to update
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to update.
     */
    limit?: number
  }

  /**
   * Share updateManyAndReturn
   */
  export type ShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * The data used to update Shares.
     */
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyInput>
    /**
     * Filter which Shares to update
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Share upsert
   */
  export type ShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * The filter to search for the Share to update in case it exists.
     */
    where: ShareWhereUniqueInput
    /**
     * In case the Share found by the `where` argument doesn't exist, create a new Share with this data.
     */
    create: XOR<ShareCreateInput, ShareUncheckedCreateInput>
    /**
     * In case the Share was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareUpdateInput, ShareUncheckedUpdateInput>
  }

  /**
   * Share delete
   */
  export type ShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
    /**
     * Filter which Share to delete.
     */
    where: ShareWhereUniqueInput
  }

  /**
   * Share deleteMany
   */
  export type ShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shares to delete
     */
    where?: ShareWhereInput
    /**
     * Limit how many Shares to delete.
     */
    limit?: number
  }

  /**
   * Share without action
   */
  export type ShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Share
     */
    select?: ShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Share
     */
    omit?: ShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareInclude<ExtArgs> | null
  }


  /**
   * Model Relationship
   */

  export type AggregateRelationship = {
    _count: RelationshipCountAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  export type RelationshipMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: $Enums.FollowStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelationshipMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: $Enums.FollowStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelationshipCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RelationshipMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelationshipMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelationshipCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RelationshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationship to aggregate.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relationships
    **/
    _count?: true | RelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationshipMaxAggregateInputType
  }

  export type GetRelationshipAggregateType<T extends RelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationship[P]>
      : GetScalarType<T[P], AggregateRelationship[P]>
  }




  export type RelationshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithAggregationInput | RelationshipOrderByWithAggregationInput[]
    by: RelationshipScalarFieldEnum[] | RelationshipScalarFieldEnum
    having?: RelationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationshipCountAggregateInputType | true
    _min?: RelationshipMinAggregateInputType
    _max?: RelationshipMaxAggregateInputType
  }

  export type RelationshipGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    status: $Enums.FollowStatus
    createdAt: Date
    updatedAt: Date
    _count: RelationshipCountAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  type GetRelationshipGroupByPayload<T extends RelationshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
        }
      >
    >


  export type RelationshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RelationshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["relationship"]>
  export type RelationshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RelationshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RelationshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RelationshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relationship"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      status: $Enums.FollowStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["relationship"]>
    composites: {}
  }

  type RelationshipGetPayload<S extends boolean | null | undefined | RelationshipDefaultArgs> = $Result.GetResult<Prisma.$RelationshipPayload, S>

  type RelationshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelationshipCountAggregateInputType | true
    }

  export interface RelationshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relationship'], meta: { name: 'Relationship' } }
    /**
     * Find zero or one Relationship that matches the filter.
     * @param {RelationshipFindUniqueArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationshipFindUniqueArgs>(args: SelectSubset<T, RelationshipFindUniqueArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relationship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationshipFindUniqueOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationshipFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindFirstArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationshipFindFirstArgs>(args?: SelectSubset<T, RelationshipFindFirstArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindFirstOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationshipFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relationships
     * const relationships = await prisma.relationship.findMany()
     * 
     * // Get first 10 Relationships
     * const relationships = await prisma.relationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationshipWithIdOnly = await prisma.relationship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelationshipFindManyArgs>(args?: SelectSubset<T, RelationshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relationship.
     * @param {RelationshipCreateArgs} args - Arguments to create a Relationship.
     * @example
     * // Create one Relationship
     * const Relationship = await prisma.relationship.create({
     *   data: {
     *     // ... data to create a Relationship
     *   }
     * })
     * 
     */
    create<T extends RelationshipCreateArgs>(args: SelectSubset<T, RelationshipCreateArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relationships.
     * @param {RelationshipCreateManyArgs} args - Arguments to create many Relationships.
     * @example
     * // Create many Relationships
     * const relationship = await prisma.relationship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationshipCreateManyArgs>(args?: SelectSubset<T, RelationshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relationships and returns the data saved in the database.
     * @param {RelationshipCreateManyAndReturnArgs} args - Arguments to create many Relationships.
     * @example
     * // Create many Relationships
     * const relationship = await prisma.relationship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relationships and only return the `id`
     * const relationshipWithIdOnly = await prisma.relationship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationshipCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relationship.
     * @param {RelationshipDeleteArgs} args - Arguments to delete one Relationship.
     * @example
     * // Delete one Relationship
     * const Relationship = await prisma.relationship.delete({
     *   where: {
     *     // ... filter to delete one Relationship
     *   }
     * })
     * 
     */
    delete<T extends RelationshipDeleteArgs>(args: SelectSubset<T, RelationshipDeleteArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relationship.
     * @param {RelationshipUpdateArgs} args - Arguments to update one Relationship.
     * @example
     * // Update one Relationship
     * const relationship = await prisma.relationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationshipUpdateArgs>(args: SelectSubset<T, RelationshipUpdateArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relationships.
     * @param {RelationshipDeleteManyArgs} args - Arguments to filter Relationships to delete.
     * @example
     * // Delete a few Relationships
     * const { count } = await prisma.relationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationshipDeleteManyArgs>(args?: SelectSubset<T, RelationshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relationships
     * const relationship = await prisma.relationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationshipUpdateManyArgs>(args: SelectSubset<T, RelationshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationships and returns the data updated in the database.
     * @param {RelationshipUpdateManyAndReturnArgs} args - Arguments to update many Relationships.
     * @example
     * // Update many Relationships
     * const relationship = await prisma.relationship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relationships and only return the `id`
     * const relationshipWithIdOnly = await prisma.relationship.updateManyAndReturn({
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
    updateManyAndReturn<T extends RelationshipUpdateManyAndReturnArgs>(args: SelectSubset<T, RelationshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relationship.
     * @param {RelationshipUpsertArgs} args - Arguments to update or create a Relationship.
     * @example
     * // Update or create a Relationship
     * const relationship = await prisma.relationship.upsert({
     *   create: {
     *     // ... data to create a Relationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relationship we want to update
     *   }
     * })
     */
    upsert<T extends RelationshipUpsertArgs>(args: SelectSubset<T, RelationshipUpsertArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipCountArgs} args - Arguments to filter Relationships to count.
     * @example
     * // Count the number of Relationships
     * const count = await prisma.relationship.count({
     *   where: {
     *     // ... the filter for the Relationships we want to count
     *   }
     * })
    **/
    count<T extends RelationshipCountArgs>(
      args?: Subset<T, RelationshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelationshipAggregateArgs>(args: Subset<T, RelationshipAggregateArgs>): Prisma.PrismaPromise<GetRelationshipAggregateType<T>>

    /**
     * Group by Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipGroupByArgs} args - Group by arguments.
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
      T extends RelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationshipGroupByArgs['orderBy'] }
        : { orderBy?: RelationshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relationship model
   */
  readonly fields: RelationshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Relationship model
   */
  interface RelationshipFieldRefs {
    readonly id: FieldRef<"Relationship", 'String'>
    readonly senderId: FieldRef<"Relationship", 'String'>
    readonly receiverId: FieldRef<"Relationship", 'String'>
    readonly status: FieldRef<"Relationship", 'FollowStatus'>
    readonly createdAt: FieldRef<"Relationship", 'DateTime'>
    readonly updatedAt: FieldRef<"Relationship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Relationship findUnique
   */
  export type RelationshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship findUniqueOrThrow
   */
  export type RelationshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship findFirst
   */
  export type RelationshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship findFirstOrThrow
   */
  export type RelationshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship findMany
   */
  export type RelationshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationships to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship create
   */
  export type RelationshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Relationship.
     */
    data: XOR<RelationshipCreateInput, RelationshipUncheckedCreateInput>
  }

  /**
   * Relationship createMany
   */
  export type RelationshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relationships.
     */
    data: RelationshipCreateManyInput | RelationshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relationship createManyAndReturn
   */
  export type RelationshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * The data used to create many Relationships.
     */
    data: RelationshipCreateManyInput | RelationshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship update
   */
  export type RelationshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Relationship.
     */
    data: XOR<RelationshipUpdateInput, RelationshipUncheckedUpdateInput>
    /**
     * Choose, which Relationship to update.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship updateMany
   */
  export type RelationshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relationships.
     */
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyInput>
    /**
     * Filter which Relationships to update
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to update.
     */
    limit?: number
  }

  /**
   * Relationship updateManyAndReturn
   */
  export type RelationshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * The data used to update Relationships.
     */
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyInput>
    /**
     * Filter which Relationships to update
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship upsert
   */
  export type RelationshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Relationship to update in case it exists.
     */
    where: RelationshipWhereUniqueInput
    /**
     * In case the Relationship found by the `where` argument doesn't exist, create a new Relationship with this data.
     */
    create: XOR<RelationshipCreateInput, RelationshipUncheckedCreateInput>
    /**
     * In case the Relationship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationshipUpdateInput, RelationshipUncheckedUpdateInput>
  }

  /**
   * Relationship delete
   */
  export type RelationshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter which Relationship to delete.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship deleteMany
   */
  export type RelationshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationships to delete
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to delete.
     */
    limit?: number
  }

  /**
   * Relationship without action
   */
  export type RelationshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    contentId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    contentId: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    contentId: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type ChallengeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentId?: true
    createdById?: true
    createdAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentId?: true
    createdById?: true
    createdAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    contentId?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    title: string
    description: string
    contentId: string
    createdById: string
    createdAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contentId?: boolean
    createdById?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    userChallenges?: boolean | Challenge$userChallengesArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contentId?: boolean
    createdById?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    contentId?: boolean
    createdById?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    contentId?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "contentId" | "createdById" | "createdAt", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    userChallenges?: boolean | Challenge$userChallengesArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      userChallenges: Prisma.$UserChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      contentId: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
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
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userChallenges<T extends Challenge$userChallengesArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$userChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly title: FieldRef<"Challenge", 'String'>
    readonly description: FieldRef<"Challenge", 'String'>
    readonly contentId: FieldRef<"Challenge", 'String'>
    readonly createdById: FieldRef<"Challenge", 'String'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.userChallenges
   */
  export type Challenge$userChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    cursor?: UserChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model UserChallenge
   */

  export type AggregateUserChallenge = {
    _count: UserChallengeCountAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  export type UserChallengeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    status: $Enums.ChallengeStatus | null
    offeredAt: Date | null
    acceptedAt: Date | null
    completedAt: Date | null
  }

  export type UserChallengeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    challengeId: string | null
    status: $Enums.ChallengeStatus | null
    offeredAt: Date | null
    acceptedAt: Date | null
    completedAt: Date | null
  }

  export type UserChallengeCountAggregateOutputType = {
    id: number
    userId: number
    challengeId: number
    status: number
    offeredAt: number
    acceptedAt: number
    completedAt: number
    _all: number
  }


  export type UserChallengeMinAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    status?: true
    offeredAt?: true
    acceptedAt?: true
    completedAt?: true
  }

  export type UserChallengeMaxAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    status?: true
    offeredAt?: true
    acceptedAt?: true
    completedAt?: true
  }

  export type UserChallengeCountAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    status?: true
    offeredAt?: true
    acceptedAt?: true
    completedAt?: true
    _all?: true
  }

  export type UserChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenge to aggregate.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserChallenges
    **/
    _count?: true | UserChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserChallengeMaxAggregateInputType
  }

  export type GetUserChallengeAggregateType<T extends UserChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserChallenge[P]>
      : GetScalarType<T[P], AggregateUserChallenge[P]>
  }




  export type UserChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithAggregationInput | UserChallengeOrderByWithAggregationInput[]
    by: UserChallengeScalarFieldEnum[] | UserChallengeScalarFieldEnum
    having?: UserChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserChallengeCountAggregateInputType | true
    _min?: UserChallengeMinAggregateInputType
    _max?: UserChallengeMaxAggregateInputType
  }

  export type UserChallengeGroupByOutputType = {
    id: string
    userId: string
    challengeId: string
    status: $Enums.ChallengeStatus
    offeredAt: Date
    acceptedAt: Date | null
    completedAt: Date | null
    _count: UserChallengeCountAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  type GetUserChallengeGroupByPayload<T extends UserChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
        }
      >
    >


  export type UserChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    status?: boolean
    offeredAt?: boolean
    acceptedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    resultPost?: boolean | UserChallenge$resultPostArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    status?: boolean
    offeredAt?: boolean
    acceptedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    status?: boolean
    offeredAt?: boolean
    acceptedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectScalar = {
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    status?: boolean
    offeredAt?: boolean
    acceptedAt?: boolean
    completedAt?: boolean
  }

  export type UserChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "challengeId" | "status" | "offeredAt" | "acceptedAt" | "completedAt", ExtArgs["result"]["userChallenge"]>
  export type UserChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    resultPost?: boolean | UserChallenge$resultPostArgs<ExtArgs>
  }
  export type UserChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type UserChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $UserChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserChallenge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
      resultPost: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      challengeId: string
      status: $Enums.ChallengeStatus
      offeredAt: Date
      acceptedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["userChallenge"]>
    composites: {}
  }

  type UserChallengeGetPayload<S extends boolean | null | undefined | UserChallengeDefaultArgs> = $Result.GetResult<Prisma.$UserChallengePayload, S>

  type UserChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserChallengeCountAggregateInputType | true
    }

  export interface UserChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserChallenge'], meta: { name: 'UserChallenge' } }
    /**
     * Find zero or one UserChallenge that matches the filter.
     * @param {UserChallengeFindUniqueArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserChallengeFindUniqueArgs>(args: SelectSubset<T, UserChallengeFindUniqueArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserChallengeFindUniqueOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserChallengeFindFirstArgs>(args?: SelectSubset<T, UserChallengeFindFirstArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany()
     * 
     * // Get first 10 UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserChallengeFindManyArgs>(args?: SelectSubset<T, UserChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserChallenge.
     * @param {UserChallengeCreateArgs} args - Arguments to create a UserChallenge.
     * @example
     * // Create one UserChallenge
     * const UserChallenge = await prisma.userChallenge.create({
     *   data: {
     *     // ... data to create a UserChallenge
     *   }
     * })
     * 
     */
    create<T extends UserChallengeCreateArgs>(args: SelectSubset<T, UserChallengeCreateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserChallenges.
     * @param {UserChallengeCreateManyArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserChallengeCreateManyArgs>(args?: SelectSubset<T, UserChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserChallenges and returns the data saved in the database.
     * @param {UserChallengeCreateManyAndReturnArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserChallenge.
     * @param {UserChallengeDeleteArgs} args - Arguments to delete one UserChallenge.
     * @example
     * // Delete one UserChallenge
     * const UserChallenge = await prisma.userChallenge.delete({
     *   where: {
     *     // ... filter to delete one UserChallenge
     *   }
     * })
     * 
     */
    delete<T extends UserChallengeDeleteArgs>(args: SelectSubset<T, UserChallengeDeleteArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserChallenge.
     * @param {UserChallengeUpdateArgs} args - Arguments to update one UserChallenge.
     * @example
     * // Update one UserChallenge
     * const userChallenge = await prisma.userChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserChallengeUpdateArgs>(args: SelectSubset<T, UserChallengeUpdateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserChallenges.
     * @param {UserChallengeDeleteManyArgs} args - Arguments to filter UserChallenges to delete.
     * @example
     * // Delete a few UserChallenges
     * const { count } = await prisma.userChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserChallengeDeleteManyArgs>(args?: SelectSubset<T, UserChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserChallengeUpdateManyArgs>(args: SelectSubset<T, UserChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges and returns the data updated in the database.
     * @param {UserChallengeUpdateManyAndReturnArgs} args - Arguments to update many UserChallenges.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserChallenge.
     * @param {UserChallengeUpsertArgs} args - Arguments to update or create a UserChallenge.
     * @example
     * // Update or create a UserChallenge
     * const userChallenge = await prisma.userChallenge.upsert({
     *   create: {
     *     // ... data to create a UserChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserChallenge we want to update
     *   }
     * })
     */
    upsert<T extends UserChallengeUpsertArgs>(args: SelectSubset<T, UserChallengeUpsertArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeCountArgs} args - Arguments to filter UserChallenges to count.
     * @example
     * // Count the number of UserChallenges
     * const count = await prisma.userChallenge.count({
     *   where: {
     *     // ... the filter for the UserChallenges we want to count
     *   }
     * })
    **/
    count<T extends UserChallengeCountArgs>(
      args?: Subset<T, UserChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserChallengeAggregateArgs>(args: Subset<T, UserChallengeAggregateArgs>): Prisma.PrismaPromise<GetUserChallengeAggregateType<T>>

    /**
     * Group by UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeGroupByArgs} args - Group by arguments.
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
      T extends UserChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserChallengeGroupByArgs['orderBy'] }
        : { orderBy?: UserChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserChallenge model
   */
  readonly fields: UserChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resultPost<T extends UserChallenge$resultPostArgs<ExtArgs> = {}>(args?: Subset<T, UserChallenge$resultPostArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserChallenge model
   */
  interface UserChallengeFieldRefs {
    readonly id: FieldRef<"UserChallenge", 'String'>
    readonly userId: FieldRef<"UserChallenge", 'String'>
    readonly challengeId: FieldRef<"UserChallenge", 'String'>
    readonly status: FieldRef<"UserChallenge", 'ChallengeStatus'>
    readonly offeredAt: FieldRef<"UserChallenge", 'DateTime'>
    readonly acceptedAt: FieldRef<"UserChallenge", 'DateTime'>
    readonly completedAt: FieldRef<"UserChallenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserChallenge findUnique
   */
  export type UserChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findUniqueOrThrow
   */
  export type UserChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findFirst
   */
  export type UserChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findFirstOrThrow
   */
  export type UserChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findMany
   */
  export type UserChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenges to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge create
   */
  export type UserChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserChallenge.
     */
    data: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
  }

  /**
   * UserChallenge createMany
   */
  export type UserChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserChallenge createManyAndReturn
   */
  export type UserChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserChallenge update
   */
  export type UserChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserChallenge.
     */
    data: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
    /**
     * Choose, which UserChallenge to update.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge updateMany
   */
  export type UserChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to update.
     */
    limit?: number
  }

  /**
   * UserChallenge updateManyAndReturn
   */
  export type UserChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserChallenge upsert
   */
  export type UserChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserChallenge to update in case it exists.
     */
    where: UserChallengeWhereUniqueInput
    /**
     * In case the UserChallenge found by the `where` argument doesn't exist, create a new UserChallenge with this data.
     */
    create: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
    /**
     * In case the UserChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
  }

  /**
   * UserChallenge delete
   */
  export type UserChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter which UserChallenge to delete.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge deleteMany
   */
  export type UserChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenges to delete
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to delete.
     */
    limit?: number
  }

  /**
   * UserChallenge.resultPost
   */
  export type UserChallenge$resultPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * UserChallenge without action
   */
  export type UserChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
  }


  /**
   * Model ProductivityCount
   */

  export type AggregateProductivityCount = {
    _count: ProductivityCountCountAggregateOutputType | null
    _avg: ProductivityCountAvgAggregateOutputType | null
    _sum: ProductivityCountSumAggregateOutputType | null
    _min: ProductivityCountMinAggregateOutputType | null
    _max: ProductivityCountMaxAggregateOutputType | null
  }

  export type ProductivityCountAvgAggregateOutputType = {
    count: number | null
  }

  export type ProductivityCountSumAggregateOutputType = {
    count: number | null
  }

  export type ProductivityCountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    count: number | null
  }

  export type ProductivityCountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    count: number | null
  }

  export type ProductivityCountCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    count: number
    _all: number
  }


  export type ProductivityCountAvgAggregateInputType = {
    count?: true
  }

  export type ProductivityCountSumAggregateInputType = {
    count?: true
  }

  export type ProductivityCountMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    count?: true
  }

  export type ProductivityCountMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    count?: true
  }

  export type ProductivityCountCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    count?: true
    _all?: true
  }

  export type ProductivityCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductivityCount to aggregate.
     */
    where?: ProductivityCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductivityCounts to fetch.
     */
    orderBy?: ProductivityCountOrderByWithRelationInput | ProductivityCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductivityCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductivityCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductivityCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductivityCounts
    **/
    _count?: true | ProductivityCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductivityCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductivityCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductivityCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductivityCountMaxAggregateInputType
  }

  export type GetProductivityCountAggregateType<T extends ProductivityCountAggregateArgs> = {
        [P in keyof T & keyof AggregateProductivityCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductivityCount[P]>
      : GetScalarType<T[P], AggregateProductivityCount[P]>
  }




  export type ProductivityCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductivityCountWhereInput
    orderBy?: ProductivityCountOrderByWithAggregationInput | ProductivityCountOrderByWithAggregationInput[]
    by: ProductivityCountScalarFieldEnum[] | ProductivityCountScalarFieldEnum
    having?: ProductivityCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductivityCountCountAggregateInputType | true
    _avg?: ProductivityCountAvgAggregateInputType
    _sum?: ProductivityCountSumAggregateInputType
    _min?: ProductivityCountMinAggregateInputType
    _max?: ProductivityCountMaxAggregateInputType
  }

  export type ProductivityCountGroupByOutputType = {
    id: string
    userId: string
    date: Date
    count: number
    _count: ProductivityCountCountAggregateOutputType | null
    _avg: ProductivityCountAvgAggregateOutputType | null
    _sum: ProductivityCountSumAggregateOutputType | null
    _min: ProductivityCountMinAggregateOutputType | null
    _max: ProductivityCountMaxAggregateOutputType | null
  }

  type GetProductivityCountGroupByPayload<T extends ProductivityCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductivityCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductivityCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductivityCountGroupByOutputType[P]>
            : GetScalarType<T[P], ProductivityCountGroupByOutputType[P]>
        }
      >
    >


  export type ProductivityCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    count?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productivityCount"]>

  export type ProductivityCountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    count?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productivityCount"]>

  export type ProductivityCountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    count?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productivityCount"]>

  export type ProductivityCountSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    count?: boolean
  }

  export type ProductivityCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "count", ExtArgs["result"]["productivityCount"]>
  export type ProductivityCountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductivityCountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductivityCountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductivityCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductivityCount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      count: number
    }, ExtArgs["result"]["productivityCount"]>
    composites: {}
  }

  type ProductivityCountGetPayload<S extends boolean | null | undefined | ProductivityCountDefaultArgs> = $Result.GetResult<Prisma.$ProductivityCountPayload, S>

  type ProductivityCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductivityCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductivityCountCountAggregateInputType | true
    }

  export interface ProductivityCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductivityCount'], meta: { name: 'ProductivityCount' } }
    /**
     * Find zero or one ProductivityCount that matches the filter.
     * @param {ProductivityCountFindUniqueArgs} args - Arguments to find a ProductivityCount
     * @example
     * // Get one ProductivityCount
     * const productivityCount = await prisma.productivityCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductivityCountFindUniqueArgs>(args: SelectSubset<T, ProductivityCountFindUniqueArgs<ExtArgs>>): Prisma__ProductivityCountClient<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductivityCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductivityCountFindUniqueOrThrowArgs} args - Arguments to find a ProductivityCount
     * @example
     * // Get one ProductivityCount
     * const productivityCount = await prisma.productivityCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductivityCountFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductivityCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductivityCountClient<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductivityCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityCountFindFirstArgs} args - Arguments to find a ProductivityCount
     * @example
     * // Get one ProductivityCount
     * const productivityCount = await prisma.productivityCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductivityCountFindFirstArgs>(args?: SelectSubset<T, ProductivityCountFindFirstArgs<ExtArgs>>): Prisma__ProductivityCountClient<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductivityCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityCountFindFirstOrThrowArgs} args - Arguments to find a ProductivityCount
     * @example
     * // Get one ProductivityCount
     * const productivityCount = await prisma.productivityCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductivityCountFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductivityCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductivityCountClient<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductivityCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductivityCounts
     * const productivityCounts = await prisma.productivityCount.findMany()
     * 
     * // Get first 10 ProductivityCounts
     * const productivityCounts = await prisma.productivityCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productivityCountWithIdOnly = await prisma.productivityCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductivityCountFindManyArgs>(args?: SelectSubset<T, ProductivityCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductivityCount.
     * @param {ProductivityCountCreateArgs} args - Arguments to create a ProductivityCount.
     * @example
     * // Create one ProductivityCount
     * const ProductivityCount = await prisma.productivityCount.create({
     *   data: {
     *     // ... data to create a ProductivityCount
     *   }
     * })
     * 
     */
    create<T extends ProductivityCountCreateArgs>(args: SelectSubset<T, ProductivityCountCreateArgs<ExtArgs>>): Prisma__ProductivityCountClient<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductivityCounts.
     * @param {ProductivityCountCreateManyArgs} args - Arguments to create many ProductivityCounts.
     * @example
     * // Create many ProductivityCounts
     * const productivityCount = await prisma.productivityCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductivityCountCreateManyArgs>(args?: SelectSubset<T, ProductivityCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductivityCounts and returns the data saved in the database.
     * @param {ProductivityCountCreateManyAndReturnArgs} args - Arguments to create many ProductivityCounts.
     * @example
     * // Create many ProductivityCounts
     * const productivityCount = await prisma.productivityCount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductivityCounts and only return the `id`
     * const productivityCountWithIdOnly = await prisma.productivityCount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductivityCountCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductivityCountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductivityCount.
     * @param {ProductivityCountDeleteArgs} args - Arguments to delete one ProductivityCount.
     * @example
     * // Delete one ProductivityCount
     * const ProductivityCount = await prisma.productivityCount.delete({
     *   where: {
     *     // ... filter to delete one ProductivityCount
     *   }
     * })
     * 
     */
    delete<T extends ProductivityCountDeleteArgs>(args: SelectSubset<T, ProductivityCountDeleteArgs<ExtArgs>>): Prisma__ProductivityCountClient<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductivityCount.
     * @param {ProductivityCountUpdateArgs} args - Arguments to update one ProductivityCount.
     * @example
     * // Update one ProductivityCount
     * const productivityCount = await prisma.productivityCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductivityCountUpdateArgs>(args: SelectSubset<T, ProductivityCountUpdateArgs<ExtArgs>>): Prisma__ProductivityCountClient<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductivityCounts.
     * @param {ProductivityCountDeleteManyArgs} args - Arguments to filter ProductivityCounts to delete.
     * @example
     * // Delete a few ProductivityCounts
     * const { count } = await prisma.productivityCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductivityCountDeleteManyArgs>(args?: SelectSubset<T, ProductivityCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductivityCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductivityCounts
     * const productivityCount = await prisma.productivityCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductivityCountUpdateManyArgs>(args: SelectSubset<T, ProductivityCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductivityCounts and returns the data updated in the database.
     * @param {ProductivityCountUpdateManyAndReturnArgs} args - Arguments to update many ProductivityCounts.
     * @example
     * // Update many ProductivityCounts
     * const productivityCount = await prisma.productivityCount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductivityCounts and only return the `id`
     * const productivityCountWithIdOnly = await prisma.productivityCount.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductivityCountUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductivityCountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductivityCount.
     * @param {ProductivityCountUpsertArgs} args - Arguments to update or create a ProductivityCount.
     * @example
     * // Update or create a ProductivityCount
     * const productivityCount = await prisma.productivityCount.upsert({
     *   create: {
     *     // ... data to create a ProductivityCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductivityCount we want to update
     *   }
     * })
     */
    upsert<T extends ProductivityCountUpsertArgs>(args: SelectSubset<T, ProductivityCountUpsertArgs<ExtArgs>>): Prisma__ProductivityCountClient<$Result.GetResult<Prisma.$ProductivityCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductivityCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityCountCountArgs} args - Arguments to filter ProductivityCounts to count.
     * @example
     * // Count the number of ProductivityCounts
     * const count = await prisma.productivityCount.count({
     *   where: {
     *     // ... the filter for the ProductivityCounts we want to count
     *   }
     * })
    **/
    count<T extends ProductivityCountCountArgs>(
      args?: Subset<T, ProductivityCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductivityCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductivityCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductivityCountAggregateArgs>(args: Subset<T, ProductivityCountAggregateArgs>): Prisma.PrismaPromise<GetProductivityCountAggregateType<T>>

    /**
     * Group by ProductivityCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityCountGroupByArgs} args - Group by arguments.
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
      T extends ProductivityCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductivityCountGroupByArgs['orderBy'] }
        : { orderBy?: ProductivityCountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductivityCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductivityCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductivityCount model
   */
  readonly fields: ProductivityCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductivityCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductivityCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductivityCount model
   */
  interface ProductivityCountFieldRefs {
    readonly id: FieldRef<"ProductivityCount", 'String'>
    readonly userId: FieldRef<"ProductivityCount", 'String'>
    readonly date: FieldRef<"ProductivityCount", 'DateTime'>
    readonly count: FieldRef<"ProductivityCount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductivityCount findUnique
   */
  export type ProductivityCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityCount to fetch.
     */
    where: ProductivityCountWhereUniqueInput
  }

  /**
   * ProductivityCount findUniqueOrThrow
   */
  export type ProductivityCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityCount to fetch.
     */
    where: ProductivityCountWhereUniqueInput
  }

  /**
   * ProductivityCount findFirst
   */
  export type ProductivityCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityCount to fetch.
     */
    where?: ProductivityCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductivityCounts to fetch.
     */
    orderBy?: ProductivityCountOrderByWithRelationInput | ProductivityCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductivityCounts.
     */
    cursor?: ProductivityCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductivityCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductivityCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductivityCounts.
     */
    distinct?: ProductivityCountScalarFieldEnum | ProductivityCountScalarFieldEnum[]
  }

  /**
   * ProductivityCount findFirstOrThrow
   */
  export type ProductivityCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityCount to fetch.
     */
    where?: ProductivityCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductivityCounts to fetch.
     */
    orderBy?: ProductivityCountOrderByWithRelationInput | ProductivityCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductivityCounts.
     */
    cursor?: ProductivityCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductivityCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductivityCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductivityCounts.
     */
    distinct?: ProductivityCountScalarFieldEnum | ProductivityCountScalarFieldEnum[]
  }

  /**
   * ProductivityCount findMany
   */
  export type ProductivityCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityCounts to fetch.
     */
    where?: ProductivityCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductivityCounts to fetch.
     */
    orderBy?: ProductivityCountOrderByWithRelationInput | ProductivityCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductivityCounts.
     */
    cursor?: ProductivityCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductivityCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductivityCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductivityCounts.
     */
    distinct?: ProductivityCountScalarFieldEnum | ProductivityCountScalarFieldEnum[]
  }

  /**
   * ProductivityCount create
   */
  export type ProductivityCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductivityCount.
     */
    data: XOR<ProductivityCountCreateInput, ProductivityCountUncheckedCreateInput>
  }

  /**
   * ProductivityCount createMany
   */
  export type ProductivityCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductivityCounts.
     */
    data: ProductivityCountCreateManyInput | ProductivityCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductivityCount createManyAndReturn
   */
  export type ProductivityCountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * The data used to create many ProductivityCounts.
     */
    data: ProductivityCountCreateManyInput | ProductivityCountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductivityCount update
   */
  export type ProductivityCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductivityCount.
     */
    data: XOR<ProductivityCountUpdateInput, ProductivityCountUncheckedUpdateInput>
    /**
     * Choose, which ProductivityCount to update.
     */
    where: ProductivityCountWhereUniqueInput
  }

  /**
   * ProductivityCount updateMany
   */
  export type ProductivityCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductivityCounts.
     */
    data: XOR<ProductivityCountUpdateManyMutationInput, ProductivityCountUncheckedUpdateManyInput>
    /**
     * Filter which ProductivityCounts to update
     */
    where?: ProductivityCountWhereInput
    /**
     * Limit how many ProductivityCounts to update.
     */
    limit?: number
  }

  /**
   * ProductivityCount updateManyAndReturn
   */
  export type ProductivityCountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * The data used to update ProductivityCounts.
     */
    data: XOR<ProductivityCountUpdateManyMutationInput, ProductivityCountUncheckedUpdateManyInput>
    /**
     * Filter which ProductivityCounts to update
     */
    where?: ProductivityCountWhereInput
    /**
     * Limit how many ProductivityCounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductivityCount upsert
   */
  export type ProductivityCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductivityCount to update in case it exists.
     */
    where: ProductivityCountWhereUniqueInput
    /**
     * In case the ProductivityCount found by the `where` argument doesn't exist, create a new ProductivityCount with this data.
     */
    create: XOR<ProductivityCountCreateInput, ProductivityCountUncheckedCreateInput>
    /**
     * In case the ProductivityCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductivityCountUpdateInput, ProductivityCountUncheckedUpdateInput>
  }

  /**
   * ProductivityCount delete
   */
  export type ProductivityCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
    /**
     * Filter which ProductivityCount to delete.
     */
    where: ProductivityCountWhereUniqueInput
  }

  /**
   * ProductivityCount deleteMany
   */
  export type ProductivityCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductivityCounts to delete
     */
    where?: ProductivityCountWhereInput
    /**
     * Limit how many ProductivityCounts to delete.
     */
    limit?: number
  }

  /**
   * ProductivityCount without action
   */
  export type ProductivityCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityCount
     */
    select?: ProductivityCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductivityCount
     */
    omit?: ProductivityCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityCountInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    accountType: 'accountType',
    bio: 'bio',
    profileImage: 'profileImage',
    streak: 'streak',
    lastActiveAt: 'lastActiveAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const UserGenreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    genreId: 'genreId',
    createdAt: 'createdAt'
  };

  export type UserGenreScalarFieldEnum = (typeof UserGenreScalarFieldEnum)[keyof typeof UserGenreScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    body: 'body',
    type: 'type',
    externalUrl: 'externalUrl',
    mediaUrl: 'mediaUrl',
    genreId: 'genreId',
    creatorId: 'creatorId',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    content: 'content',
    mediaUrl: 'mediaUrl',
    authorId: 'authorId',
    challengeId: 'challengeId',
    taggedCreatorId: 'taggedCreatorId',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const ShareScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt'
  };

  export type ShareScalarFieldEnum = (typeof ShareScalarFieldEnum)[keyof typeof ShareScalarFieldEnum]


  export const RelationshipScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RelationshipScalarFieldEnum = (typeof RelationshipScalarFieldEnum)[keyof typeof RelationshipScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    contentId: 'contentId',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const UserChallengeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    challengeId: 'challengeId',
    status: 'status',
    offeredAt: 'offeredAt',
    acceptedAt: 'acceptedAt',
    completedAt: 'completedAt'
  };

  export type UserChallengeScalarFieldEnum = (typeof UserChallengeScalarFieldEnum)[keyof typeof UserChallengeScalarFieldEnum]


  export const ProductivityCountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    count: 'count'
  };

  export type ProductivityCountScalarFieldEnum = (typeof ProductivityCountScalarFieldEnum)[keyof typeof ProductivityCountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'FollowStatus'
   */
  export type EnumFollowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowStatus'>
    


  /**
   * Reference to a field of type 'FollowStatus[]'
   */
  export type ListEnumFollowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowStatus[]'>
    


  /**
   * Reference to a field of type 'ChallengeStatus'
   */
  export type EnumChallengeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengeStatus'>
    


  /**
   * Reference to a field of type 'ChallengeStatus[]'
   */
  export type ListEnumChallengeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengeStatus[]'>
    


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
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    accountType?: EnumAccountTypeFilter<"User"> | $Enums.AccountType
    bio?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    streak?: IntFilter<"User"> | number
    lastActiveAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    selectedGenres?: UserGenreListRelationFilter
    contents?: ContentListRelationFilter
    posts?: PostListRelationFilter
    taggedInPosts?: PostListRelationFilter
    likes?: LikeListRelationFilter
    shares?: ShareListRelationFilter
    sentRelationships?: RelationshipListRelationFilter
    receivedRelationships?: RelationshipListRelationFilter
    createdChallenges?: ChallengeListRelationFilter
    userChallenges?: UserChallengeListRelationFilter
    productivityCounts?: ProductivityCountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    accountType?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    streak?: SortOrder
    lastActiveAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    selectedGenres?: UserGenreOrderByRelationAggregateInput
    contents?: ContentOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    taggedInPosts?: PostOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    shares?: ShareOrderByRelationAggregateInput
    sentRelationships?: RelationshipOrderByRelationAggregateInput
    receivedRelationships?: RelationshipOrderByRelationAggregateInput
    createdChallenges?: ChallengeOrderByRelationAggregateInput
    userChallenges?: UserChallengeOrderByRelationAggregateInput
    productivityCounts?: ProductivityCountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    accountType?: EnumAccountTypeFilter<"User"> | $Enums.AccountType
    bio?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    streak?: IntFilter<"User"> | number
    lastActiveAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    selectedGenres?: UserGenreListRelationFilter
    contents?: ContentListRelationFilter
    posts?: PostListRelationFilter
    taggedInPosts?: PostListRelationFilter
    likes?: LikeListRelationFilter
    shares?: ShareListRelationFilter
    sentRelationships?: RelationshipListRelationFilter
    receivedRelationships?: RelationshipListRelationFilter
    createdChallenges?: ChallengeListRelationFilter
    userChallenges?: UserChallengeListRelationFilter
    productivityCounts?: ProductivityCountListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    accountType?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    streak?: SortOrder
    lastActiveAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    accountType?: EnumAccountTypeWithAggregatesFilter<"User"> | $Enums.AccountType
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    streak?: IntWithAggregatesFilter<"User"> | number
    lastActiveAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    slug?: StringFilter<"Genre"> | string
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    users?: UserGenreListRelationFilter
    contents?: ContentListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    users?: UserGenreOrderByRelationAggregateInput
    contents?: ContentOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    users?: UserGenreListRelationFilter
    contents?: ContentListRelationFilter
  }, "id" | "name" | "slug">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    slug?: StringWithAggregatesFilter<"Genre"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
  }

  export type UserGenreWhereInput = {
    AND?: UserGenreWhereInput | UserGenreWhereInput[]
    OR?: UserGenreWhereInput[]
    NOT?: UserGenreWhereInput | UserGenreWhereInput[]
    id?: StringFilter<"UserGenre"> | string
    userId?: StringFilter<"UserGenre"> | string
    genreId?: StringFilter<"UserGenre"> | string
    createdAt?: DateTimeFilter<"UserGenre"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }

  export type UserGenreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type UserGenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_genreId?: UserGenreUserIdGenreIdCompoundUniqueInput
    AND?: UserGenreWhereInput | UserGenreWhereInput[]
    OR?: UserGenreWhereInput[]
    NOT?: UserGenreWhereInput | UserGenreWhereInput[]
    userId?: StringFilter<"UserGenre"> | string
    genreId?: StringFilter<"UserGenre"> | string
    createdAt?: DateTimeFilter<"UserGenre"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }, "id" | "userId_genreId">

  export type UserGenreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    _count?: UserGenreCountOrderByAggregateInput
    _max?: UserGenreMaxOrderByAggregateInput
    _min?: UserGenreMinOrderByAggregateInput
  }

  export type UserGenreScalarWhereWithAggregatesInput = {
    AND?: UserGenreScalarWhereWithAggregatesInput | UserGenreScalarWhereWithAggregatesInput[]
    OR?: UserGenreScalarWhereWithAggregatesInput[]
    NOT?: UserGenreScalarWhereWithAggregatesInput | UserGenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGenre"> | string
    userId?: StringWithAggregatesFilter<"UserGenre"> | string
    genreId?: StringWithAggregatesFilter<"UserGenre"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserGenre"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    body?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    externalUrl?: StringNullableFilter<"Content"> | string | null
    mediaUrl?: StringNullableFilter<"Content"> | string | null
    genreId?: StringFilter<"Content"> | string
    creatorId?: StringFilter<"Content"> | string
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
    shares?: ShareListRelationFilter
    challenge?: XOR<ChallengeNullableScalarRelationFilter, ChallengeWhereInput> | null
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    type?: SortOrder
    externalUrl?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    genreId?: SortOrder
    creatorId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genre?: GenreOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    likes?: LikeOrderByRelationAggregateInput
    shares?: ShareOrderByRelationAggregateInput
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    body?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    externalUrl?: StringNullableFilter<"Content"> | string | null
    mediaUrl?: StringNullableFilter<"Content"> | string | null
    genreId?: StringFilter<"Content"> | string
    creatorId?: StringFilter<"Content"> | string
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
    shares?: ShareListRelationFilter
    challenge?: XOR<ChallengeNullableScalarRelationFilter, ChallengeWhereInput> | null
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    type?: SortOrder
    externalUrl?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    genreId?: SortOrder
    creatorId?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    title?: StringWithAggregatesFilter<"Content"> | string
    description?: StringNullableWithAggregatesFilter<"Content"> | string | null
    body?: StringNullableWithAggregatesFilter<"Content"> | string | null
    type?: EnumContentTypeWithAggregatesFilter<"Content"> | $Enums.ContentType
    externalUrl?: StringNullableWithAggregatesFilter<"Content"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"Content"> | string | null
    genreId?: StringWithAggregatesFilter<"Content"> | string
    creatorId?: StringWithAggregatesFilter<"Content"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Content"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    mediaUrl?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    challengeId?: StringNullableFilter<"Post"> | string | null
    taggedCreatorId?: StringNullableFilter<"Post"> | string | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<UserChallengeNullableScalarRelationFilter, UserChallengeWhereInput> | null
    taggedCreator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    authorId?: SortOrder
    challengeId?: SortOrderInput | SortOrder
    taggedCreatorId?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    challenge?: UserChallengeOrderByWithRelationInput
    taggedCreator?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    challengeId?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    content?: StringFilter<"Post"> | string
    mediaUrl?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    taggedCreatorId?: StringNullableFilter<"Post"> | string | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<UserChallengeNullableScalarRelationFilter, UserChallengeWhereInput> | null
    taggedCreator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "challengeId">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    authorId?: SortOrder
    challengeId?: SortOrderInput | SortOrder
    taggedCreatorId?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    mediaUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    authorId?: StringWithAggregatesFilter<"Post"> | string
    challengeId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    taggedCreatorId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    contentId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_contentId?: LikeUserIdContentIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userId?: StringFilter<"Like"> | string
    contentId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id" | "userId_contentId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Like"> | string
    userId?: StringWithAggregatesFilter<"Like"> | string
    contentId?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type ShareWhereInput = {
    AND?: ShareWhereInput | ShareWhereInput[]
    OR?: ShareWhereInput[]
    NOT?: ShareWhereInput | ShareWhereInput[]
    id?: StringFilter<"Share"> | string
    userId?: StringFilter<"Share"> | string
    contentId?: StringFilter<"Share"> | string
    createdAt?: DateTimeFilter<"Share"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type ShareOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    content?: ContentOrderByWithRelationInput
  }

  export type ShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShareWhereInput | ShareWhereInput[]
    OR?: ShareWhereInput[]
    NOT?: ShareWhereInput | ShareWhereInput[]
    userId?: StringFilter<"Share"> | string
    contentId?: StringFilter<"Share"> | string
    createdAt?: DateTimeFilter<"Share"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id">

  export type ShareOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
    _count?: ShareCountOrderByAggregateInput
    _max?: ShareMaxOrderByAggregateInput
    _min?: ShareMinOrderByAggregateInput
  }

  export type ShareScalarWhereWithAggregatesInput = {
    AND?: ShareScalarWhereWithAggregatesInput | ShareScalarWhereWithAggregatesInput[]
    OR?: ShareScalarWhereWithAggregatesInput[]
    NOT?: ShareScalarWhereWithAggregatesInput | ShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Share"> | string
    userId?: StringWithAggregatesFilter<"Share"> | string
    contentId?: StringWithAggregatesFilter<"Share"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Share"> | Date | string
  }

  export type RelationshipWhereInput = {
    AND?: RelationshipWhereInput | RelationshipWhereInput[]
    OR?: RelationshipWhereInput[]
    NOT?: RelationshipWhereInput | RelationshipWhereInput[]
    id?: StringFilter<"Relationship"> | string
    senderId?: StringFilter<"Relationship"> | string
    receiverId?: StringFilter<"Relationship"> | string
    status?: EnumFollowStatusFilter<"Relationship"> | $Enums.FollowStatus
    createdAt?: DateTimeFilter<"Relationship"> | Date | string
    updatedAt?: DateTimeFilter<"Relationship"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RelationshipOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type RelationshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    senderId_receiverId?: RelationshipSenderIdReceiverIdCompoundUniqueInput
    AND?: RelationshipWhereInput | RelationshipWhereInput[]
    OR?: RelationshipWhereInput[]
    NOT?: RelationshipWhereInput | RelationshipWhereInput[]
    senderId?: StringFilter<"Relationship"> | string
    receiverId?: StringFilter<"Relationship"> | string
    status?: EnumFollowStatusFilter<"Relationship"> | $Enums.FollowStatus
    createdAt?: DateTimeFilter<"Relationship"> | Date | string
    updatedAt?: DateTimeFilter<"Relationship"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "senderId_receiverId">

  export type RelationshipOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RelationshipCountOrderByAggregateInput
    _max?: RelationshipMaxOrderByAggregateInput
    _min?: RelationshipMinOrderByAggregateInput
  }

  export type RelationshipScalarWhereWithAggregatesInput = {
    AND?: RelationshipScalarWhereWithAggregatesInput | RelationshipScalarWhereWithAggregatesInput[]
    OR?: RelationshipScalarWhereWithAggregatesInput[]
    NOT?: RelationshipScalarWhereWithAggregatesInput | RelationshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Relationship"> | string
    senderId?: StringWithAggregatesFilter<"Relationship"> | string
    receiverId?: StringWithAggregatesFilter<"Relationship"> | string
    status?: EnumFollowStatusWithAggregatesFilter<"Relationship"> | $Enums.FollowStatus
    createdAt?: DateTimeWithAggregatesFilter<"Relationship"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Relationship"> | Date | string
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    contentId?: StringFilter<"Challenge"> | string
    createdById?: StringFilter<"Challenge"> | string
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    userChallenges?: UserChallengeListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    content?: ContentOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    userChallenges?: UserChallengeOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contentId?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    createdById?: StringFilter<"Challenge"> | string
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    userChallenges?: UserChallengeListRelationFilter
  }, "id" | "contentId">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    title?: StringWithAggregatesFilter<"Challenge"> | string
    description?: StringWithAggregatesFilter<"Challenge"> | string
    contentId?: StringWithAggregatesFilter<"Challenge"> | string
    createdById?: StringWithAggregatesFilter<"Challenge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type UserChallengeWhereInput = {
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    id?: StringFilter<"UserChallenge"> | string
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    status?: EnumChallengeStatusFilter<"UserChallenge"> | $Enums.ChallengeStatus
    offeredAt?: DateTimeFilter<"UserChallenge"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"UserChallenge"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserChallenge"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    resultPost?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type UserChallengeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    offeredAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
    resultPost?: PostOrderByWithRelationInput
  }

  export type UserChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_challengeId?: UserChallengeUserIdChallengeIdCompoundUniqueInput
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    status?: EnumChallengeStatusFilter<"UserChallenge"> | $Enums.ChallengeStatus
    offeredAt?: DateTimeFilter<"UserChallenge"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"UserChallenge"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserChallenge"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    resultPost?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id" | "userId_challengeId">

  export type UserChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    offeredAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: UserChallengeCountOrderByAggregateInput
    _max?: UserChallengeMaxOrderByAggregateInput
    _min?: UserChallengeMinOrderByAggregateInput
  }

  export type UserChallengeScalarWhereWithAggregatesInput = {
    AND?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    OR?: UserChallengeScalarWhereWithAggregatesInput[]
    NOT?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserChallenge"> | string
    userId?: StringWithAggregatesFilter<"UserChallenge"> | string
    challengeId?: StringWithAggregatesFilter<"UserChallenge"> | string
    status?: EnumChallengeStatusWithAggregatesFilter<"UserChallenge"> | $Enums.ChallengeStatus
    offeredAt?: DateTimeWithAggregatesFilter<"UserChallenge"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"UserChallenge"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserChallenge"> | Date | string | null
  }

  export type ProductivityCountWhereInput = {
    AND?: ProductivityCountWhereInput | ProductivityCountWhereInput[]
    OR?: ProductivityCountWhereInput[]
    NOT?: ProductivityCountWhereInput | ProductivityCountWhereInput[]
    id?: StringFilter<"ProductivityCount"> | string
    userId?: StringFilter<"ProductivityCount"> | string
    date?: DateTimeFilter<"ProductivityCount"> | Date | string
    count?: IntFilter<"ProductivityCount"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProductivityCountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    count?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProductivityCountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: ProductivityCountUserIdDateCompoundUniqueInput
    AND?: ProductivityCountWhereInput | ProductivityCountWhereInput[]
    OR?: ProductivityCountWhereInput[]
    NOT?: ProductivityCountWhereInput | ProductivityCountWhereInput[]
    userId?: StringFilter<"ProductivityCount"> | string
    date?: DateTimeFilter<"ProductivityCount"> | Date | string
    count?: IntFilter<"ProductivityCount"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type ProductivityCountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    count?: SortOrder
    _count?: ProductivityCountCountOrderByAggregateInput
    _avg?: ProductivityCountAvgOrderByAggregateInput
    _max?: ProductivityCountMaxOrderByAggregateInput
    _min?: ProductivityCountMinOrderByAggregateInput
    _sum?: ProductivityCountSumOrderByAggregateInput
  }

  export type ProductivityCountScalarWhereWithAggregatesInput = {
    AND?: ProductivityCountScalarWhereWithAggregatesInput | ProductivityCountScalarWhereWithAggregatesInput[]
    OR?: ProductivityCountScalarWhereWithAggregatesInput[]
    NOT?: ProductivityCountScalarWhereWithAggregatesInput | ProductivityCountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductivityCount"> | string
    userId?: StringWithAggregatesFilter<"ProductivityCount"> | string
    date?: DateTimeWithAggregatesFilter<"ProductivityCount"> | Date | string
    count?: IntWithAggregatesFilter<"ProductivityCount"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    users?: UserGenreCreateNestedManyWithoutGenreInput
    contents?: ContentCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    users?: UserGenreUncheckedCreateNestedManyWithoutGenreInput
    contents?: ContentUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserGenreUpdateManyWithoutGenreNestedInput
    contents?: ContentUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserGenreUncheckedUpdateManyWithoutGenreNestedInput
    contents?: ContentUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGenreCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSelectedGenresInput
    genre: GenreCreateNestedOneWithoutUsersInput
  }

  export type UserGenreUncheckedCreateInput = {
    id?: string
    userId: string
    genreId: string
    createdAt?: Date | string
  }

  export type UserGenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSelectedGenresNestedInput
    genre?: GenreUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserGenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGenreCreateManyInput = {
    id?: string
    userId: string
    genreId: string
    createdAt?: Date | string
  }

  export type UserGenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genre: GenreCreateNestedOneWithoutContentsInput
    creator: UserCreateNestedOneWithoutContentsInput
    likes?: LikeCreateNestedManyWithoutContentInput
    shares?: ShareCreateNestedManyWithoutContentInput
    challenge?: ChallengeCreateNestedOneWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    genreId: string
    creatorId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutContentInput
    shares?: ShareUncheckedCreateNestedManyWithoutContentInput
    challenge?: ChallengeUncheckedCreateNestedOneWithoutContentInput
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateOneRequiredWithoutContentsNestedInput
    creator?: UserUpdateOneRequiredWithoutContentsNestedInput
    likes?: LikeUpdateManyWithoutContentNestedInput
    shares?: ShareUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUpdateOneWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutContentNestedInput
    shares?: ShareUncheckedUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUncheckedUpdateOneWithoutContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    genreId: string
    creatorId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    challenge?: UserChallengeCreateNestedOneWithoutResultPostInput
    taggedCreator?: UserCreateNestedOneWithoutTaggedInPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    authorId: string
    challengeId?: string | null
    taggedCreatorId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    challenge?: UserChallengeUpdateOneWithoutResultPostNestedInput
    taggedCreator?: UserUpdateOneWithoutTaggedInPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    taggedCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    authorId: string
    challengeId?: string | null
    taggedCreatorId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    taggedCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    content: ContentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    userId: string
    contentId: string
    createdAt?: Date | string
  }

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    content?: ContentUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: string
    userId: string
    contentId: string
    createdAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSharesInput
    content: ContentCreateNestedOneWithoutSharesInput
  }

  export type ShareUncheckedCreateInput = {
    id?: string
    userId: string
    contentId: string
    createdAt?: Date | string
  }

  export type ShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSharesNestedInput
    content?: ContentUpdateOneRequiredWithoutSharesNestedInput
  }

  export type ShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareCreateManyInput = {
    id?: string
    userId: string
    contentId: string
    createdAt?: Date | string
  }

  export type ShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipCreateInput = {
    id?: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentRelationshipsInput
    receiver: UserCreateNestedOneWithoutReceivedRelationshipsInput
  }

  export type RelationshipUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRelationshipsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedRelationshipsNestedInput
  }

  export type RelationshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutChallengeInput
    createdBy: UserCreateNestedOneWithoutCreatedChallengesInput
    userChallenges?: UserChallengeCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    contentId: string
    createdById: string
    createdAt?: Date | string
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutChallengeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedChallengesNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: string
    title: string
    description: string
    contentId: string
    createdById: string
    createdAt?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeCreateInput = {
    id?: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserChallengesInput
    challenge: ChallengeCreateNestedOneWithoutUserChallengesInput
    resultPost?: PostCreateNestedOneWithoutChallengeInput
  }

  export type UserChallengeUncheckedCreateInput = {
    id?: string
    userId: string
    challengeId: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
    resultPost?: PostUncheckedCreateNestedOneWithoutChallengeInput
  }

  export type UserChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserChallengesNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput
    resultPost?: PostUpdateOneWithoutChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resultPost?: PostUncheckedUpdateOneWithoutChallengeNestedInput
  }

  export type UserChallengeCreateManyInput = {
    id?: string
    userId: string
    challengeId: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type UserChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductivityCountCreateInput = {
    id?: string
    date: Date | string
    count?: number
    user: UserCreateNestedOneWithoutProductivityCountsInput
  }

  export type ProductivityCountUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    count?: number
  }

  export type ProductivityCountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProductivityCountsNestedInput
  }

  export type ProductivityCountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductivityCountCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    count?: number
  }

  export type ProductivityCountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductivityCountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
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

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
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

  export type UserGenreListRelationFilter = {
    every?: UserGenreWhereInput
    some?: UserGenreWhereInput
    none?: UserGenreWhereInput
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type ShareListRelationFilter = {
    every?: ShareWhereInput
    some?: ShareWhereInput
    none?: ShareWhereInput
  }

  export type RelationshipListRelationFilter = {
    every?: RelationshipWhereInput
    some?: RelationshipWhereInput
    none?: RelationshipWhereInput
  }

  export type ChallengeListRelationFilter = {
    every?: ChallengeWhereInput
    some?: ChallengeWhereInput
    none?: ChallengeWhereInput
  }

  export type UserChallengeListRelationFilter = {
    every?: UserChallengeWhereInput
    some?: UserChallengeWhereInput
    none?: UserChallengeWhereInput
  }

  export type ProductivityCountListRelationFilter = {
    every?: ProductivityCountWhereInput
    some?: ProductivityCountWhereInput
    none?: ProductivityCountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductivityCountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    accountType?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    streak?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    streak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    accountType?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    streak?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    accountType?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    streak?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    streak?: SortOrder
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

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
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

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type UserGenreUserIdGenreIdCompoundUniqueInput = {
    userId: string
    genreId: string
  }

  export type UserGenreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGenreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGenreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type ChallengeNullableScalarRelationFilter = {
    is?: ChallengeWhereInput | null
    isNot?: ChallengeWhereInput | null
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    body?: SortOrder
    type?: SortOrder
    externalUrl?: SortOrder
    mediaUrl?: SortOrder
    genreId?: SortOrder
    creatorId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    body?: SortOrder
    type?: SortOrder
    externalUrl?: SortOrder
    mediaUrl?: SortOrder
    genreId?: SortOrder
    creatorId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    body?: SortOrder
    type?: SortOrder
    externalUrl?: SortOrder
    mediaUrl?: SortOrder
    genreId?: SortOrder
    creatorId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type UserChallengeNullableScalarRelationFilter = {
    is?: UserChallengeWhereInput | null
    isNot?: UserChallengeWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    authorId?: SortOrder
    challengeId?: SortOrder
    taggedCreatorId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    authorId?: SortOrder
    challengeId?: SortOrder
    taggedCreatorId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    authorId?: SortOrder
    challengeId?: SortOrder
    taggedCreatorId?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type LikeUserIdContentIdCompoundUniqueInput = {
    userId: string
    contentId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShareMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contentId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFollowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowStatus | EnumFollowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowStatus[] | ListEnumFollowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowStatus[] | ListEnumFollowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowStatusFilter<$PrismaModel> | $Enums.FollowStatus
  }

  export type RelationshipSenderIdReceiverIdCompoundUniqueInput = {
    senderId: string
    receiverId: string
  }

  export type RelationshipCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelationshipMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFollowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowStatus | EnumFollowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowStatus[] | ListEnumFollowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowStatus[] | ListEnumFollowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowStatusWithAggregatesFilter<$PrismaModel> | $Enums.FollowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFollowStatusFilter<$PrismaModel>
    _max?: NestedEnumFollowStatusFilter<$PrismaModel>
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    contentId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumChallengeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusFilter<$PrismaModel> | $Enums.ChallengeStatus
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type UserChallengeUserIdChallengeIdCompoundUniqueInput = {
    userId: string
    challengeId: string
  }

  export type UserChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    offeredAt?: SortOrder
    acceptedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    offeredAt?: SortOrder
    acceptedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type UserChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    offeredAt?: SortOrder
    acceptedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EnumChallengeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChallengeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallengeStatusFilter<$PrismaModel>
    _max?: NestedEnumChallengeStatusFilter<$PrismaModel>
  }

  export type ProductivityCountUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type ProductivityCountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type ProductivityCountAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ProductivityCountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type ProductivityCountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    count?: SortOrder
  }

  export type ProductivityCountSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type UserGenreCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGenreCreateWithoutUserInput, UserGenreUncheckedCreateWithoutUserInput> | UserGenreCreateWithoutUserInput[] | UserGenreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGenreCreateOrConnectWithoutUserInput | UserGenreCreateOrConnectWithoutUserInput[]
    createMany?: UserGenreCreateManyUserInputEnvelope
    connect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
  }

  export type ContentCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput> | ContentCreateWithoutCreatorInput[] | ContentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorInput | ContentCreateOrConnectWithoutCreatorInput[]
    createMany?: ContentCreateManyCreatorInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutTaggedCreatorInput = {
    create?: XOR<PostCreateWithoutTaggedCreatorInput, PostUncheckedCreateWithoutTaggedCreatorInput> | PostCreateWithoutTaggedCreatorInput[] | PostUncheckedCreateWithoutTaggedCreatorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTaggedCreatorInput | PostCreateOrConnectWithoutTaggedCreatorInput[]
    createMany?: PostCreateManyTaggedCreatorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type ShareCreateNestedManyWithoutUserInput = {
    create?: XOR<ShareCreateWithoutUserInput, ShareUncheckedCreateWithoutUserInput> | ShareCreateWithoutUserInput[] | ShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutUserInput | ShareCreateOrConnectWithoutUserInput[]
    createMany?: ShareCreateManyUserInputEnvelope
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutSenderInput = {
    create?: XOR<RelationshipCreateWithoutSenderInput, RelationshipUncheckedCreateWithoutSenderInput> | RelationshipCreateWithoutSenderInput[] | RelationshipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSenderInput | RelationshipCreateOrConnectWithoutSenderInput[]
    createMany?: RelationshipCreateManySenderInputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutReceiverInput = {
    create?: XOR<RelationshipCreateWithoutReceiverInput, RelationshipUncheckedCreateWithoutReceiverInput> | RelationshipCreateWithoutReceiverInput[] | RelationshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutReceiverInput | RelationshipCreateOrConnectWithoutReceiverInput[]
    createMany?: RelationshipCreateManyReceiverInputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type ChallengeCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChallengeCreateWithoutCreatedByInput, ChallengeUncheckedCreateWithoutCreatedByInput> | ChallengeCreateWithoutCreatedByInput[] | ChallengeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatedByInput | ChallengeCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChallengeCreateManyCreatedByInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type UserChallengeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type ProductivityCountCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductivityCountCreateWithoutUserInput, ProductivityCountUncheckedCreateWithoutUserInput> | ProductivityCountCreateWithoutUserInput[] | ProductivityCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductivityCountCreateOrConnectWithoutUserInput | ProductivityCountCreateOrConnectWithoutUserInput[]
    createMany?: ProductivityCountCreateManyUserInputEnvelope
    connect?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
  }

  export type UserGenreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGenreCreateWithoutUserInput, UserGenreUncheckedCreateWithoutUserInput> | UserGenreCreateWithoutUserInput[] | UserGenreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGenreCreateOrConnectWithoutUserInput | UserGenreCreateOrConnectWithoutUserInput[]
    createMany?: UserGenreCreateManyUserInputEnvelope
    connect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput> | ContentCreateWithoutCreatorInput[] | ContentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorInput | ContentCreateOrConnectWithoutCreatorInput[]
    createMany?: ContentCreateManyCreatorInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutTaggedCreatorInput = {
    create?: XOR<PostCreateWithoutTaggedCreatorInput, PostUncheckedCreateWithoutTaggedCreatorInput> | PostCreateWithoutTaggedCreatorInput[] | PostUncheckedCreateWithoutTaggedCreatorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTaggedCreatorInput | PostCreateOrConnectWithoutTaggedCreatorInput[]
    createMany?: PostCreateManyTaggedCreatorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type ShareUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShareCreateWithoutUserInput, ShareUncheckedCreateWithoutUserInput> | ShareCreateWithoutUserInput[] | ShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutUserInput | ShareCreateOrConnectWithoutUserInput[]
    createMany?: ShareCreateManyUserInputEnvelope
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<RelationshipCreateWithoutSenderInput, RelationshipUncheckedCreateWithoutSenderInput> | RelationshipCreateWithoutSenderInput[] | RelationshipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSenderInput | RelationshipCreateOrConnectWithoutSenderInput[]
    createMany?: RelationshipCreateManySenderInputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<RelationshipCreateWithoutReceiverInput, RelationshipUncheckedCreateWithoutReceiverInput> | RelationshipCreateWithoutReceiverInput[] | RelationshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutReceiverInput | RelationshipCreateOrConnectWithoutReceiverInput[]
    createMany?: RelationshipCreateManyReceiverInputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChallengeCreateWithoutCreatedByInput, ChallengeUncheckedCreateWithoutCreatedByInput> | ChallengeCreateWithoutCreatedByInput[] | ChallengeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatedByInput | ChallengeCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChallengeCreateManyCreatedByInputEnvelope
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
  }

  export type UserChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type ProductivityCountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductivityCountCreateWithoutUserInput, ProductivityCountUncheckedCreateWithoutUserInput> | ProductivityCountCreateWithoutUserInput[] | ProductivityCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductivityCountCreateOrConnectWithoutUserInput | ProductivityCountCreateOrConnectWithoutUserInput[]
    createMany?: ProductivityCountCreateManyUserInputEnvelope
    connect?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserGenreUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGenreCreateWithoutUserInput, UserGenreUncheckedCreateWithoutUserInput> | UserGenreCreateWithoutUserInput[] | UserGenreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGenreCreateOrConnectWithoutUserInput | UserGenreCreateOrConnectWithoutUserInput[]
    upsert?: UserGenreUpsertWithWhereUniqueWithoutUserInput | UserGenreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGenreCreateManyUserInputEnvelope
    set?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    disconnect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    delete?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    connect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    update?: UserGenreUpdateWithWhereUniqueWithoutUserInput | UserGenreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGenreUpdateManyWithWhereWithoutUserInput | UserGenreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGenreScalarWhereInput | UserGenreScalarWhereInput[]
  }

  export type ContentUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput> | ContentCreateWithoutCreatorInput[] | ContentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorInput | ContentCreateOrConnectWithoutCreatorInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCreatorInput | ContentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContentCreateManyCreatorInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCreatorInput | ContentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCreatorInput | ContentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUpdateManyWithoutTaggedCreatorNestedInput = {
    create?: XOR<PostCreateWithoutTaggedCreatorInput, PostUncheckedCreateWithoutTaggedCreatorInput> | PostCreateWithoutTaggedCreatorInput[] | PostUncheckedCreateWithoutTaggedCreatorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTaggedCreatorInput | PostCreateOrConnectWithoutTaggedCreatorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutTaggedCreatorInput | PostUpsertWithWhereUniqueWithoutTaggedCreatorInput[]
    createMany?: PostCreateManyTaggedCreatorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutTaggedCreatorInput | PostUpdateWithWhereUniqueWithoutTaggedCreatorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutTaggedCreatorInput | PostUpdateManyWithWhereWithoutTaggedCreatorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type ShareUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShareCreateWithoutUserInput, ShareUncheckedCreateWithoutUserInput> | ShareCreateWithoutUserInput[] | ShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutUserInput | ShareCreateOrConnectWithoutUserInput[]
    upsert?: ShareUpsertWithWhereUniqueWithoutUserInput | ShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShareCreateManyUserInputEnvelope
    set?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    disconnect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    delete?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    update?: ShareUpdateWithWhereUniqueWithoutUserInput | ShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShareUpdateManyWithWhereWithoutUserInput | ShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShareScalarWhereInput | ShareScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RelationshipCreateWithoutSenderInput, RelationshipUncheckedCreateWithoutSenderInput> | RelationshipCreateWithoutSenderInput[] | RelationshipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSenderInput | RelationshipCreateOrConnectWithoutSenderInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSenderInput | RelationshipUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RelationshipCreateManySenderInputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSenderInput | RelationshipUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSenderInput | RelationshipUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<RelationshipCreateWithoutReceiverInput, RelationshipUncheckedCreateWithoutReceiverInput> | RelationshipCreateWithoutReceiverInput[] | RelationshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutReceiverInput | RelationshipCreateOrConnectWithoutReceiverInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutReceiverInput | RelationshipUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: RelationshipCreateManyReceiverInputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutReceiverInput | RelationshipUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutReceiverInput | RelationshipUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type ChallengeUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChallengeCreateWithoutCreatedByInput, ChallengeUncheckedCreateWithoutCreatedByInput> | ChallengeCreateWithoutCreatedByInput[] | ChallengeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatedByInput | ChallengeCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutCreatedByInput | ChallengeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChallengeCreateManyCreatedByInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutCreatedByInput | ChallengeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutCreatedByInput | ChallengeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type UserChallengeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutUserInput | UserChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutUserInput | UserChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutUserInput | UserChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type ProductivityCountUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductivityCountCreateWithoutUserInput, ProductivityCountUncheckedCreateWithoutUserInput> | ProductivityCountCreateWithoutUserInput[] | ProductivityCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductivityCountCreateOrConnectWithoutUserInput | ProductivityCountCreateOrConnectWithoutUserInput[]
    upsert?: ProductivityCountUpsertWithWhereUniqueWithoutUserInput | ProductivityCountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductivityCountCreateManyUserInputEnvelope
    set?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
    disconnect?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
    delete?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
    connect?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
    update?: ProductivityCountUpdateWithWhereUniqueWithoutUserInput | ProductivityCountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductivityCountUpdateManyWithWhereWithoutUserInput | ProductivityCountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductivityCountScalarWhereInput | ProductivityCountScalarWhereInput[]
  }

  export type UserGenreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGenreCreateWithoutUserInput, UserGenreUncheckedCreateWithoutUserInput> | UserGenreCreateWithoutUserInput[] | UserGenreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGenreCreateOrConnectWithoutUserInput | UserGenreCreateOrConnectWithoutUserInput[]
    upsert?: UserGenreUpsertWithWhereUniqueWithoutUserInput | UserGenreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGenreCreateManyUserInputEnvelope
    set?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    disconnect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    delete?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    connect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    update?: UserGenreUpdateWithWhereUniqueWithoutUserInput | UserGenreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGenreUpdateManyWithWhereWithoutUserInput | UserGenreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGenreScalarWhereInput | UserGenreScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput> | ContentCreateWithoutCreatorInput[] | ContentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutCreatorInput | ContentCreateOrConnectWithoutCreatorInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutCreatorInput | ContentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContentCreateManyCreatorInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutCreatorInput | ContentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutCreatorInput | ContentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput = {
    create?: XOR<PostCreateWithoutTaggedCreatorInput, PostUncheckedCreateWithoutTaggedCreatorInput> | PostCreateWithoutTaggedCreatorInput[] | PostUncheckedCreateWithoutTaggedCreatorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutTaggedCreatorInput | PostCreateOrConnectWithoutTaggedCreatorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutTaggedCreatorInput | PostUpsertWithWhereUniqueWithoutTaggedCreatorInput[]
    createMany?: PostCreateManyTaggedCreatorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutTaggedCreatorInput | PostUpdateWithWhereUniqueWithoutTaggedCreatorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutTaggedCreatorInput | PostUpdateManyWithWhereWithoutTaggedCreatorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type ShareUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShareCreateWithoutUserInput, ShareUncheckedCreateWithoutUserInput> | ShareCreateWithoutUserInput[] | ShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutUserInput | ShareCreateOrConnectWithoutUserInput[]
    upsert?: ShareUpsertWithWhereUniqueWithoutUserInput | ShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShareCreateManyUserInputEnvelope
    set?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    disconnect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    delete?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    update?: ShareUpdateWithWhereUniqueWithoutUserInput | ShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShareUpdateManyWithWhereWithoutUserInput | ShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShareScalarWhereInput | ShareScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RelationshipCreateWithoutSenderInput, RelationshipUncheckedCreateWithoutSenderInput> | RelationshipCreateWithoutSenderInput[] | RelationshipUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSenderInput | RelationshipCreateOrConnectWithoutSenderInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSenderInput | RelationshipUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RelationshipCreateManySenderInputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSenderInput | RelationshipUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSenderInput | RelationshipUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<RelationshipCreateWithoutReceiverInput, RelationshipUncheckedCreateWithoutReceiverInput> | RelationshipCreateWithoutReceiverInput[] | RelationshipUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutReceiverInput | RelationshipCreateOrConnectWithoutReceiverInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutReceiverInput | RelationshipUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: RelationshipCreateManyReceiverInputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutReceiverInput | RelationshipUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutReceiverInput | RelationshipUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChallengeCreateWithoutCreatedByInput, ChallengeUncheckedCreateWithoutCreatedByInput> | ChallengeCreateWithoutCreatedByInput[] | ChallengeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallengeCreateOrConnectWithoutCreatedByInput | ChallengeCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChallengeUpsertWithWhereUniqueWithoutCreatedByInput | ChallengeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChallengeCreateManyCreatedByInputEnvelope
    set?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    disconnect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    delete?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    connect?: ChallengeWhereUniqueInput | ChallengeWhereUniqueInput[]
    update?: ChallengeUpdateWithWhereUniqueWithoutCreatedByInput | ChallengeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChallengeUpdateManyWithWhereWithoutCreatedByInput | ChallengeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
  }

  export type UserChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutUserInput | UserChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutUserInput | UserChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutUserInput | UserChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type ProductivityCountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductivityCountCreateWithoutUserInput, ProductivityCountUncheckedCreateWithoutUserInput> | ProductivityCountCreateWithoutUserInput[] | ProductivityCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductivityCountCreateOrConnectWithoutUserInput | ProductivityCountCreateOrConnectWithoutUserInput[]
    upsert?: ProductivityCountUpsertWithWhereUniqueWithoutUserInput | ProductivityCountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductivityCountCreateManyUserInputEnvelope
    set?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
    disconnect?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
    delete?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
    connect?: ProductivityCountWhereUniqueInput | ProductivityCountWhereUniqueInput[]
    update?: ProductivityCountUpdateWithWhereUniqueWithoutUserInput | ProductivityCountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductivityCountUpdateManyWithWhereWithoutUserInput | ProductivityCountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductivityCountScalarWhereInput | ProductivityCountScalarWhereInput[]
  }

  export type UserGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<UserGenreCreateWithoutGenreInput, UserGenreUncheckedCreateWithoutGenreInput> | UserGenreCreateWithoutGenreInput[] | UserGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: UserGenreCreateOrConnectWithoutGenreInput | UserGenreCreateOrConnectWithoutGenreInput[]
    createMany?: UserGenreCreateManyGenreInputEnvelope
    connect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
  }

  export type ContentCreateNestedManyWithoutGenreInput = {
    create?: XOR<ContentCreateWithoutGenreInput, ContentUncheckedCreateWithoutGenreInput> | ContentCreateWithoutGenreInput[] | ContentUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutGenreInput | ContentCreateOrConnectWithoutGenreInput[]
    createMany?: ContentCreateManyGenreInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type UserGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<UserGenreCreateWithoutGenreInput, UserGenreUncheckedCreateWithoutGenreInput> | UserGenreCreateWithoutGenreInput[] | UserGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: UserGenreCreateOrConnectWithoutGenreInput | UserGenreCreateOrConnectWithoutGenreInput[]
    createMany?: UserGenreCreateManyGenreInputEnvelope
    connect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<ContentCreateWithoutGenreInput, ContentUncheckedCreateWithoutGenreInput> | ContentCreateWithoutGenreInput[] | ContentUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutGenreInput | ContentCreateOrConnectWithoutGenreInput[]
    createMany?: ContentCreateManyGenreInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type UserGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<UserGenreCreateWithoutGenreInput, UserGenreUncheckedCreateWithoutGenreInput> | UserGenreCreateWithoutGenreInput[] | UserGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: UserGenreCreateOrConnectWithoutGenreInput | UserGenreCreateOrConnectWithoutGenreInput[]
    upsert?: UserGenreUpsertWithWhereUniqueWithoutGenreInput | UserGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: UserGenreCreateManyGenreInputEnvelope
    set?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    disconnect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    delete?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    connect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    update?: UserGenreUpdateWithWhereUniqueWithoutGenreInput | UserGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: UserGenreUpdateManyWithWhereWithoutGenreInput | UserGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: UserGenreScalarWhereInput | UserGenreScalarWhereInput[]
  }

  export type ContentUpdateManyWithoutGenreNestedInput = {
    create?: XOR<ContentCreateWithoutGenreInput, ContentUncheckedCreateWithoutGenreInput> | ContentCreateWithoutGenreInput[] | ContentUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutGenreInput | ContentCreateOrConnectWithoutGenreInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutGenreInput | ContentUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: ContentCreateManyGenreInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutGenreInput | ContentUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutGenreInput | ContentUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type UserGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<UserGenreCreateWithoutGenreInput, UserGenreUncheckedCreateWithoutGenreInput> | UserGenreCreateWithoutGenreInput[] | UserGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: UserGenreCreateOrConnectWithoutGenreInput | UserGenreCreateOrConnectWithoutGenreInput[]
    upsert?: UserGenreUpsertWithWhereUniqueWithoutGenreInput | UserGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: UserGenreCreateManyGenreInputEnvelope
    set?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    disconnect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    delete?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    connect?: UserGenreWhereUniqueInput | UserGenreWhereUniqueInput[]
    update?: UserGenreUpdateWithWhereUniqueWithoutGenreInput | UserGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: UserGenreUpdateManyWithWhereWithoutGenreInput | UserGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: UserGenreScalarWhereInput | UserGenreScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<ContentCreateWithoutGenreInput, ContentUncheckedCreateWithoutGenreInput> | ContentCreateWithoutGenreInput[] | ContentUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutGenreInput | ContentCreateOrConnectWithoutGenreInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutGenreInput | ContentUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: ContentCreateManyGenreInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutGenreInput | ContentUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutGenreInput | ContentUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSelectedGenresInput = {
    create?: XOR<UserCreateWithoutSelectedGenresInput, UserUncheckedCreateWithoutSelectedGenresInput>
    connectOrCreate?: UserCreateOrConnectWithoutSelectedGenresInput
    connect?: UserWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutUsersInput = {
    create?: XOR<GenreCreateWithoutUsersInput, GenreUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GenreCreateOrConnectWithoutUsersInput
    connect?: GenreWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSelectedGenresNestedInput = {
    create?: XOR<UserCreateWithoutSelectedGenresInput, UserUncheckedCreateWithoutSelectedGenresInput>
    connectOrCreate?: UserCreateOrConnectWithoutSelectedGenresInput
    upsert?: UserUpsertWithoutSelectedGenresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSelectedGenresInput, UserUpdateWithoutSelectedGenresInput>, UserUncheckedUpdateWithoutSelectedGenresInput>
  }

  export type GenreUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GenreCreateWithoutUsersInput, GenreUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GenreCreateOrConnectWithoutUsersInput
    upsert?: GenreUpsertWithoutUsersInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutUsersInput, GenreUpdateWithoutUsersInput>, GenreUncheckedUpdateWithoutUsersInput>
  }

  export type GenreCreateNestedOneWithoutContentsInput = {
    create?: XOR<GenreCreateWithoutContentsInput, GenreUncheckedCreateWithoutContentsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutContentsInput
    connect?: GenreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContentsInput = {
    create?: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentsInput
    connect?: UserWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutContentInput = {
    create?: XOR<LikeCreateWithoutContentInput, LikeUncheckedCreateWithoutContentInput> | LikeCreateWithoutContentInput[] | LikeUncheckedCreateWithoutContentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutContentInput | LikeCreateOrConnectWithoutContentInput[]
    createMany?: LikeCreateManyContentInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type ShareCreateNestedManyWithoutContentInput = {
    create?: XOR<ShareCreateWithoutContentInput, ShareUncheckedCreateWithoutContentInput> | ShareCreateWithoutContentInput[] | ShareUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutContentInput | ShareCreateOrConnectWithoutContentInput[]
    createMany?: ShareCreateManyContentInputEnvelope
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
  }

  export type ChallengeCreateNestedOneWithoutContentInput = {
    create?: XOR<ChallengeCreateWithoutContentInput, ChallengeUncheckedCreateWithoutContentInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutContentInput
    connect?: ChallengeWhereUniqueInput
  }

  export type LikeUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<LikeCreateWithoutContentInput, LikeUncheckedCreateWithoutContentInput> | LikeCreateWithoutContentInput[] | LikeUncheckedCreateWithoutContentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutContentInput | LikeCreateOrConnectWithoutContentInput[]
    createMany?: LikeCreateManyContentInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type ShareUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<ShareCreateWithoutContentInput, ShareUncheckedCreateWithoutContentInput> | ShareCreateWithoutContentInput[] | ShareUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutContentInput | ShareCreateOrConnectWithoutContentInput[]
    createMany?: ShareCreateManyContentInputEnvelope
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
  }

  export type ChallengeUncheckedCreateNestedOneWithoutContentInput = {
    create?: XOR<ChallengeCreateWithoutContentInput, ChallengeUncheckedCreateWithoutContentInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutContentInput
    connect?: ChallengeWhereUniqueInput
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type GenreUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<GenreCreateWithoutContentsInput, GenreUncheckedCreateWithoutContentsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutContentsInput
    upsert?: GenreUpsertWithoutContentsInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutContentsInput, GenreUpdateWithoutContentsInput>, GenreUncheckedUpdateWithoutContentsInput>
  }

  export type UserUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentsInput
    upsert?: UserUpsertWithoutContentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentsInput, UserUpdateWithoutContentsInput>, UserUncheckedUpdateWithoutContentsInput>
  }

  export type LikeUpdateManyWithoutContentNestedInput = {
    create?: XOR<LikeCreateWithoutContentInput, LikeUncheckedCreateWithoutContentInput> | LikeCreateWithoutContentInput[] | LikeUncheckedCreateWithoutContentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutContentInput | LikeCreateOrConnectWithoutContentInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutContentInput | LikeUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: LikeCreateManyContentInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutContentInput | LikeUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutContentInput | LikeUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type ShareUpdateManyWithoutContentNestedInput = {
    create?: XOR<ShareCreateWithoutContentInput, ShareUncheckedCreateWithoutContentInput> | ShareCreateWithoutContentInput[] | ShareUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutContentInput | ShareCreateOrConnectWithoutContentInput[]
    upsert?: ShareUpsertWithWhereUniqueWithoutContentInput | ShareUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ShareCreateManyContentInputEnvelope
    set?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    disconnect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    delete?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    update?: ShareUpdateWithWhereUniqueWithoutContentInput | ShareUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ShareUpdateManyWithWhereWithoutContentInput | ShareUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ShareScalarWhereInput | ShareScalarWhereInput[]
  }

  export type ChallengeUpdateOneWithoutContentNestedInput = {
    create?: XOR<ChallengeCreateWithoutContentInput, ChallengeUncheckedCreateWithoutContentInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutContentInput
    upsert?: ChallengeUpsertWithoutContentInput
    disconnect?: ChallengeWhereInput | boolean
    delete?: ChallengeWhereInput | boolean
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutContentInput, ChallengeUpdateWithoutContentInput>, ChallengeUncheckedUpdateWithoutContentInput>
  }

  export type LikeUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<LikeCreateWithoutContentInput, LikeUncheckedCreateWithoutContentInput> | LikeCreateWithoutContentInput[] | LikeUncheckedCreateWithoutContentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutContentInput | LikeCreateOrConnectWithoutContentInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutContentInput | LikeUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: LikeCreateManyContentInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutContentInput | LikeUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutContentInput | LikeUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type ShareUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<ShareCreateWithoutContentInput, ShareUncheckedCreateWithoutContentInput> | ShareCreateWithoutContentInput[] | ShareUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ShareCreateOrConnectWithoutContentInput | ShareCreateOrConnectWithoutContentInput[]
    upsert?: ShareUpsertWithWhereUniqueWithoutContentInput | ShareUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ShareCreateManyContentInputEnvelope
    set?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    disconnect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    delete?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    connect?: ShareWhereUniqueInput | ShareWhereUniqueInput[]
    update?: ShareUpdateWithWhereUniqueWithoutContentInput | ShareUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ShareUpdateManyWithWhereWithoutContentInput | ShareUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ShareScalarWhereInput | ShareScalarWhereInput[]
  }

  export type ChallengeUncheckedUpdateOneWithoutContentNestedInput = {
    create?: XOR<ChallengeCreateWithoutContentInput, ChallengeUncheckedCreateWithoutContentInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutContentInput
    upsert?: ChallengeUpsertWithoutContentInput
    disconnect?: ChallengeWhereInput | boolean
    delete?: ChallengeWhereInput | boolean
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutContentInput, ChallengeUpdateWithoutContentInput>, ChallengeUncheckedUpdateWithoutContentInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserChallengeCreateNestedOneWithoutResultPostInput = {
    create?: XOR<UserChallengeCreateWithoutResultPostInput, UserChallengeUncheckedCreateWithoutResultPostInput>
    connectOrCreate?: UserChallengeCreateOrConnectWithoutResultPostInput
    connect?: UserChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaggedInPostsInput = {
    create?: XOR<UserCreateWithoutTaggedInPostsInput, UserUncheckedCreateWithoutTaggedInPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaggedInPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserChallengeUpdateOneWithoutResultPostNestedInput = {
    create?: XOR<UserChallengeCreateWithoutResultPostInput, UserChallengeUncheckedCreateWithoutResultPostInput>
    connectOrCreate?: UserChallengeCreateOrConnectWithoutResultPostInput
    upsert?: UserChallengeUpsertWithoutResultPostInput
    disconnect?: UserChallengeWhereInput | boolean
    delete?: UserChallengeWhereInput | boolean
    connect?: UserChallengeWhereUniqueInput
    update?: XOR<XOR<UserChallengeUpdateToOneWithWhereWithoutResultPostInput, UserChallengeUpdateWithoutResultPostInput>, UserChallengeUncheckedUpdateWithoutResultPostInput>
  }

  export type UserUpdateOneWithoutTaggedInPostsNestedInput = {
    create?: XOR<UserCreateWithoutTaggedInPostsInput, UserUncheckedCreateWithoutTaggedInPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaggedInPostsInput
    upsert?: UserUpsertWithoutTaggedInPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaggedInPostsInput, UserUpdateWithoutTaggedInPostsInput>, UserUncheckedUpdateWithoutTaggedInPostsInput>
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutLikesInput = {
    create?: XOR<ContentCreateWithoutLikesInput, ContentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutLikesInput
    connect?: ContentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type ContentUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ContentCreateWithoutLikesInput, ContentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutLikesInput
    upsert?: ContentUpsertWithoutLikesInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutLikesInput, ContentUpdateWithoutLikesInput>, ContentUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutSharesInput = {
    create?: XOR<UserCreateWithoutSharesInput, UserUncheckedCreateWithoutSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharesInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedOneWithoutSharesInput = {
    create?: XOR<ContentCreateWithoutSharesInput, ContentUncheckedCreateWithoutSharesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutSharesInput
    connect?: ContentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<UserCreateWithoutSharesInput, UserUncheckedCreateWithoutSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharesInput
    upsert?: UserUpsertWithoutSharesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharesInput, UserUpdateWithoutSharesInput>, UserUncheckedUpdateWithoutSharesInput>
  }

  export type ContentUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<ContentCreateWithoutSharesInput, ContentUncheckedCreateWithoutSharesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutSharesInput
    upsert?: ContentUpsertWithoutSharesInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutSharesInput, ContentUpdateWithoutSharesInput>, ContentUncheckedUpdateWithoutSharesInput>
  }

  export type UserCreateNestedOneWithoutSentRelationshipsInput = {
    create?: XOR<UserCreateWithoutSentRelationshipsInput, UserUncheckedCreateWithoutSentRelationshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRelationshipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRelationshipsInput = {
    create?: XOR<UserCreateWithoutReceivedRelationshipsInput, UserUncheckedCreateWithoutReceivedRelationshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRelationshipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFollowStatusFieldUpdateOperationsInput = {
    set?: $Enums.FollowStatus
  }

  export type UserUpdateOneRequiredWithoutSentRelationshipsNestedInput = {
    create?: XOR<UserCreateWithoutSentRelationshipsInput, UserUncheckedCreateWithoutSentRelationshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRelationshipsInput
    upsert?: UserUpsertWithoutSentRelationshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRelationshipsInput, UserUpdateWithoutSentRelationshipsInput>, UserUncheckedUpdateWithoutSentRelationshipsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRelationshipsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRelationshipsInput, UserUncheckedCreateWithoutReceivedRelationshipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRelationshipsInput
    upsert?: UserUpsertWithoutReceivedRelationshipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRelationshipsInput, UserUpdateWithoutReceivedRelationshipsInput>, UserUncheckedUpdateWithoutReceivedRelationshipsInput>
  }

  export type ContentCreateNestedOneWithoutChallengeInput = {
    create?: XOR<ContentCreateWithoutChallengeInput, ContentUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: ContentCreateOrConnectWithoutChallengeInput
    connect?: ContentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedChallengesInput = {
    create?: XOR<UserCreateWithoutCreatedChallengesInput, UserUncheckedCreateWithoutCreatedChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type UserChallengeCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserChallengeUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type ContentUpdateOneRequiredWithoutChallengeNestedInput = {
    create?: XOR<ContentCreateWithoutChallengeInput, ContentUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: ContentCreateOrConnectWithoutChallengeInput
    upsert?: ContentUpsertWithoutChallengeInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutChallengeInput, ContentUpdateWithoutChallengeInput>, ContentUncheckedUpdateWithoutChallengeInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedChallengesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedChallengesInput, UserUncheckedCreateWithoutCreatedChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChallengesInput
    upsert?: UserUpsertWithoutCreatedChallengesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedChallengesInput, UserUpdateWithoutCreatedChallengesInput>, UserUncheckedUpdateWithoutCreatedChallengesInput>
  }

  export type UserChallengeUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutChallengeInput | UserChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutChallengeInput | UserChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutChallengeInput | UserChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutChallengeInput | UserChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutChallengeInput | UserChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutChallengeInput | UserChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserChallengesInput = {
    create?: XOR<UserCreateWithoutUserChallengesInput, UserUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutUserChallengesInput = {
    create?: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserChallengesInput
    connect?: ChallengeWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutChallengeInput = {
    create?: XOR<PostCreateWithoutChallengeInput, PostUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: PostCreateOrConnectWithoutChallengeInput
    connect?: PostWhereUniqueInput
  }

  export type PostUncheckedCreateNestedOneWithoutChallengeInput = {
    create?: XOR<PostCreateWithoutChallengeInput, PostUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: PostCreateOrConnectWithoutChallengeInput
    connect?: PostWhereUniqueInput
  }

  export type EnumChallengeStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChallengeStatus
  }

  export type UserUpdateOneRequiredWithoutUserChallengesNestedInput = {
    create?: XOR<UserCreateWithoutUserChallengesInput, UserUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserChallengesInput
    upsert?: UserUpsertWithoutUserChallengesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserChallengesInput, UserUpdateWithoutUserChallengesInput>, UserUncheckedUpdateWithoutUserChallengesInput>
  }

  export type ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput = {
    create?: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserChallengesInput
    upsert?: ChallengeUpsertWithoutUserChallengesInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutUserChallengesInput, ChallengeUpdateWithoutUserChallengesInput>, ChallengeUncheckedUpdateWithoutUserChallengesInput>
  }

  export type PostUpdateOneWithoutChallengeNestedInput = {
    create?: XOR<PostCreateWithoutChallengeInput, PostUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: PostCreateOrConnectWithoutChallengeInput
    upsert?: PostUpsertWithoutChallengeInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutChallengeInput, PostUpdateWithoutChallengeInput>, PostUncheckedUpdateWithoutChallengeInput>
  }

  export type PostUncheckedUpdateOneWithoutChallengeNestedInput = {
    create?: XOR<PostCreateWithoutChallengeInput, PostUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: PostCreateOrConnectWithoutChallengeInput
    upsert?: PostUpsertWithoutChallengeInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutChallengeInput, PostUpdateWithoutChallengeInput>, PostUncheckedUpdateWithoutChallengeInput>
  }

  export type UserCreateNestedOneWithoutProductivityCountsInput = {
    create?: XOR<UserCreateWithoutProductivityCountsInput, UserUncheckedCreateWithoutProductivityCountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductivityCountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProductivityCountsNestedInput = {
    create?: XOR<UserCreateWithoutProductivityCountsInput, UserUncheckedCreateWithoutProductivityCountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductivityCountsInput
    upsert?: UserUpsertWithoutProductivityCountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductivityCountsInput, UserUpdateWithoutProductivityCountsInput>, UserUncheckedUpdateWithoutProductivityCountsInput>
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

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
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

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
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

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type NestedEnumFollowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowStatus | EnumFollowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowStatus[] | ListEnumFollowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowStatus[] | ListEnumFollowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowStatusFilter<$PrismaModel> | $Enums.FollowStatus
  }

  export type NestedEnumFollowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowStatus | EnumFollowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowStatus[] | ListEnumFollowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FollowStatus[] | ListEnumFollowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFollowStatusWithAggregatesFilter<$PrismaModel> | $Enums.FollowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFollowStatusFilter<$PrismaModel>
    _max?: NestedEnumFollowStatusFilter<$PrismaModel>
  }

  export type NestedEnumChallengeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusFilter<$PrismaModel> | $Enums.ChallengeStatus
  }

  export type NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChallengeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallengeStatusFilter<$PrismaModel>
    _max?: NestedEnumChallengeStatusFilter<$PrismaModel>
  }

  export type UserGenreCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    genre: GenreCreateNestedOneWithoutUsersInput
  }

  export type UserGenreUncheckedCreateWithoutUserInput = {
    id?: string
    genreId: string
    createdAt?: Date | string
  }

  export type UserGenreCreateOrConnectWithoutUserInput = {
    where: UserGenreWhereUniqueInput
    create: XOR<UserGenreCreateWithoutUserInput, UserGenreUncheckedCreateWithoutUserInput>
  }

  export type UserGenreCreateManyUserInputEnvelope = {
    data: UserGenreCreateManyUserInput | UserGenreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genre: GenreCreateNestedOneWithoutContentsInput
    likes?: LikeCreateNestedManyWithoutContentInput
    shares?: ShareCreateNestedManyWithoutContentInput
    challenge?: ChallengeCreateNestedOneWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    genreId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutContentInput
    shares?: ShareUncheckedCreateNestedManyWithoutContentInput
    challenge?: ChallengeUncheckedCreateNestedOneWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutCreatorInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput>
  }

  export type ContentCreateManyCreatorInputEnvelope = {
    data: ContentCreateManyCreatorInput | ContentCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge?: UserChallengeCreateNestedOneWithoutResultPostInput
    taggedCreator?: UserCreateNestedOneWithoutTaggedInPostsInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    challengeId?: string | null
    taggedCreatorId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutTaggedCreatorInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    challenge?: UserChallengeCreateNestedOneWithoutResultPostInput
  }

  export type PostUncheckedCreateWithoutTaggedCreatorInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    authorId: string
    challengeId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutTaggedCreatorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTaggedCreatorInput, PostUncheckedCreateWithoutTaggedCreatorInput>
  }

  export type PostCreateManyTaggedCreatorInputEnvelope = {
    data: PostCreateManyTaggedCreatorInput | PostCreateManyTaggedCreatorInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShareCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutSharesInput
  }

  export type ShareUncheckedCreateWithoutUserInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type ShareCreateOrConnectWithoutUserInput = {
    where: ShareWhereUniqueInput
    create: XOR<ShareCreateWithoutUserInput, ShareUncheckedCreateWithoutUserInput>
  }

  export type ShareCreateManyUserInputEnvelope = {
    data: ShareCreateManyUserInput | ShareCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutSenderInput = {
    id?: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedRelationshipsInput
  }

  export type RelationshipUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationshipCreateOrConnectWithoutSenderInput = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutSenderInput, RelationshipUncheckedCreateWithoutSenderInput>
  }

  export type RelationshipCreateManySenderInputEnvelope = {
    data: RelationshipCreateManySenderInput | RelationshipCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutReceiverInput = {
    id?: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentRelationshipsInput
  }

  export type RelationshipUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationshipCreateOrConnectWithoutReceiverInput = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutReceiverInput, RelationshipUncheckedCreateWithoutReceiverInput>
  }

  export type RelationshipCreateManyReceiverInputEnvelope = {
    data: RelationshipCreateManyReceiverInput | RelationshipCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutChallengeInput
    userChallenges?: UserChallengeCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    contentId: string
    createdAt?: Date | string
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutCreatedByInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutCreatedByInput, ChallengeUncheckedCreateWithoutCreatedByInput>
  }

  export type ChallengeCreateManyCreatedByInputEnvelope = {
    data: ChallengeCreateManyCreatedByInput | ChallengeCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserChallengeCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
    challenge: ChallengeCreateNestedOneWithoutUserChallengesInput
    resultPost?: PostCreateNestedOneWithoutChallengeInput
  }

  export type UserChallengeUncheckedCreateWithoutUserInput = {
    id?: string
    challengeId: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
    resultPost?: PostUncheckedCreateNestedOneWithoutChallengeInput
  }

  export type UserChallengeCreateOrConnectWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput>
  }

  export type UserChallengeCreateManyUserInputEnvelope = {
    data: UserChallengeCreateManyUserInput | UserChallengeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductivityCountCreateWithoutUserInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type ProductivityCountUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type ProductivityCountCreateOrConnectWithoutUserInput = {
    where: ProductivityCountWhereUniqueInput
    create: XOR<ProductivityCountCreateWithoutUserInput, ProductivityCountUncheckedCreateWithoutUserInput>
  }

  export type ProductivityCountCreateManyUserInputEnvelope = {
    data: ProductivityCountCreateManyUserInput | ProductivityCountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGenreUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGenreWhereUniqueInput
    update: XOR<UserGenreUpdateWithoutUserInput, UserGenreUncheckedUpdateWithoutUserInput>
    create: XOR<UserGenreCreateWithoutUserInput, UserGenreUncheckedCreateWithoutUserInput>
  }

  export type UserGenreUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGenreWhereUniqueInput
    data: XOR<UserGenreUpdateWithoutUserInput, UserGenreUncheckedUpdateWithoutUserInput>
  }

  export type UserGenreUpdateManyWithWhereWithoutUserInput = {
    where: UserGenreScalarWhereInput
    data: XOR<UserGenreUpdateManyMutationInput, UserGenreUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGenreScalarWhereInput = {
    AND?: UserGenreScalarWhereInput | UserGenreScalarWhereInput[]
    OR?: UserGenreScalarWhereInput[]
    NOT?: UserGenreScalarWhereInput | UserGenreScalarWhereInput[]
    id?: StringFilter<"UserGenre"> | string
    userId?: StringFilter<"UserGenre"> | string
    genreId?: StringFilter<"UserGenre"> | string
    createdAt?: DateTimeFilter<"UserGenre"> | Date | string
  }

  export type ContentUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutCreatorInput, ContentUncheckedUpdateWithoutCreatorInput>
    create: XOR<ContentCreateWithoutCreatorInput, ContentUncheckedCreateWithoutCreatorInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutCreatorInput, ContentUncheckedUpdateWithoutCreatorInput>
  }

  export type ContentUpdateManyWithWhereWithoutCreatorInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    body?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    externalUrl?: StringNullableFilter<"Content"> | string | null
    mediaUrl?: StringNullableFilter<"Content"> | string | null
    genreId?: StringFilter<"Content"> | string
    creatorId?: StringFilter<"Content"> | string
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    mediaUrl?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    challengeId?: StringNullableFilter<"Post"> | string | null
    taggedCreatorId?: StringNullableFilter<"Post"> | string | null
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutTaggedCreatorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutTaggedCreatorInput, PostUncheckedUpdateWithoutTaggedCreatorInput>
    create: XOR<PostCreateWithoutTaggedCreatorInput, PostUncheckedCreateWithoutTaggedCreatorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutTaggedCreatorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutTaggedCreatorInput, PostUncheckedUpdateWithoutTaggedCreatorInput>
  }

  export type PostUpdateManyWithWhereWithoutTaggedCreatorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutTaggedCreatorInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    contentId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type ShareUpsertWithWhereUniqueWithoutUserInput = {
    where: ShareWhereUniqueInput
    update: XOR<ShareUpdateWithoutUserInput, ShareUncheckedUpdateWithoutUserInput>
    create: XOR<ShareCreateWithoutUserInput, ShareUncheckedCreateWithoutUserInput>
  }

  export type ShareUpdateWithWhereUniqueWithoutUserInput = {
    where: ShareWhereUniqueInput
    data: XOR<ShareUpdateWithoutUserInput, ShareUncheckedUpdateWithoutUserInput>
  }

  export type ShareUpdateManyWithWhereWithoutUserInput = {
    where: ShareScalarWhereInput
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyWithoutUserInput>
  }

  export type ShareScalarWhereInput = {
    AND?: ShareScalarWhereInput | ShareScalarWhereInput[]
    OR?: ShareScalarWhereInput[]
    NOT?: ShareScalarWhereInput | ShareScalarWhereInput[]
    id?: StringFilter<"Share"> | string
    userId?: StringFilter<"Share"> | string
    contentId?: StringFilter<"Share"> | string
    createdAt?: DateTimeFilter<"Share"> | Date | string
  }

  export type RelationshipUpsertWithWhereUniqueWithoutSenderInput = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutSenderInput, RelationshipUncheckedUpdateWithoutSenderInput>
    create: XOR<RelationshipCreateWithoutSenderInput, RelationshipUncheckedCreateWithoutSenderInput>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutSenderInput = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutSenderInput, RelationshipUncheckedUpdateWithoutSenderInput>
  }

  export type RelationshipUpdateManyWithWhereWithoutSenderInput = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutSenderInput>
  }

  export type RelationshipScalarWhereInput = {
    AND?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
    OR?: RelationshipScalarWhereInput[]
    NOT?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
    id?: StringFilter<"Relationship"> | string
    senderId?: StringFilter<"Relationship"> | string
    receiverId?: StringFilter<"Relationship"> | string
    status?: EnumFollowStatusFilter<"Relationship"> | $Enums.FollowStatus
    createdAt?: DateTimeFilter<"Relationship"> | Date | string
    updatedAt?: DateTimeFilter<"Relationship"> | Date | string
  }

  export type RelationshipUpsertWithWhereUniqueWithoutReceiverInput = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutReceiverInput, RelationshipUncheckedUpdateWithoutReceiverInput>
    create: XOR<RelationshipCreateWithoutReceiverInput, RelationshipUncheckedCreateWithoutReceiverInput>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutReceiverInput = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutReceiverInput, RelationshipUncheckedUpdateWithoutReceiverInput>
  }

  export type RelationshipUpdateManyWithWhereWithoutReceiverInput = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ChallengeUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ChallengeWhereUniqueInput
    update: XOR<ChallengeUpdateWithoutCreatedByInput, ChallengeUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ChallengeCreateWithoutCreatedByInput, ChallengeUncheckedCreateWithoutCreatedByInput>
  }

  export type ChallengeUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ChallengeWhereUniqueInput
    data: XOR<ChallengeUpdateWithoutCreatedByInput, ChallengeUncheckedUpdateWithoutCreatedByInput>
  }

  export type ChallengeUpdateManyWithWhereWithoutCreatedByInput = {
    where: ChallengeScalarWhereInput
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ChallengeScalarWhereInput = {
    AND?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    OR?: ChallengeScalarWhereInput[]
    NOT?: ChallengeScalarWhereInput | ChallengeScalarWhereInput[]
    id?: StringFilter<"Challenge"> | string
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    contentId?: StringFilter<"Challenge"> | string
    createdById?: StringFilter<"Challenge"> | string
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
  }

  export type UserChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    update: XOR<UserChallengeUpdateWithoutUserInput, UserChallengeUncheckedUpdateWithoutUserInput>
    create: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput>
  }

  export type UserChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    data: XOR<UserChallengeUpdateWithoutUserInput, UserChallengeUncheckedUpdateWithoutUserInput>
  }

  export type UserChallengeUpdateManyWithWhereWithoutUserInput = {
    where: UserChallengeScalarWhereInput
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserChallengeScalarWhereInput = {
    AND?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
    OR?: UserChallengeScalarWhereInput[]
    NOT?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
    id?: StringFilter<"UserChallenge"> | string
    userId?: StringFilter<"UserChallenge"> | string
    challengeId?: StringFilter<"UserChallenge"> | string
    status?: EnumChallengeStatusFilter<"UserChallenge"> | $Enums.ChallengeStatus
    offeredAt?: DateTimeFilter<"UserChallenge"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"UserChallenge"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserChallenge"> | Date | string | null
  }

  export type ProductivityCountUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductivityCountWhereUniqueInput
    update: XOR<ProductivityCountUpdateWithoutUserInput, ProductivityCountUncheckedUpdateWithoutUserInput>
    create: XOR<ProductivityCountCreateWithoutUserInput, ProductivityCountUncheckedCreateWithoutUserInput>
  }

  export type ProductivityCountUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductivityCountWhereUniqueInput
    data: XOR<ProductivityCountUpdateWithoutUserInput, ProductivityCountUncheckedUpdateWithoutUserInput>
  }

  export type ProductivityCountUpdateManyWithWhereWithoutUserInput = {
    where: ProductivityCountScalarWhereInput
    data: XOR<ProductivityCountUpdateManyMutationInput, ProductivityCountUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductivityCountScalarWhereInput = {
    AND?: ProductivityCountScalarWhereInput | ProductivityCountScalarWhereInput[]
    OR?: ProductivityCountScalarWhereInput[]
    NOT?: ProductivityCountScalarWhereInput | ProductivityCountScalarWhereInput[]
    id?: StringFilter<"ProductivityCount"> | string
    userId?: StringFilter<"ProductivityCount"> | string
    date?: DateTimeFilter<"ProductivityCount"> | Date | string
    count?: IntFilter<"ProductivityCount"> | number
  }

  export type UserGenreCreateWithoutGenreInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSelectedGenresInput
  }

  export type UserGenreUncheckedCreateWithoutGenreInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserGenreCreateOrConnectWithoutGenreInput = {
    where: UserGenreWhereUniqueInput
    create: XOR<UserGenreCreateWithoutGenreInput, UserGenreUncheckedCreateWithoutGenreInput>
  }

  export type UserGenreCreateManyGenreInputEnvelope = {
    data: UserGenreCreateManyGenreInput | UserGenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type ContentCreateWithoutGenreInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContentsInput
    likes?: LikeCreateNestedManyWithoutContentInput
    shares?: ShareCreateNestedManyWithoutContentInput
    challenge?: ChallengeCreateNestedOneWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutGenreInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    creatorId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutContentInput
    shares?: ShareUncheckedCreateNestedManyWithoutContentInput
    challenge?: ChallengeUncheckedCreateNestedOneWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutGenreInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutGenreInput, ContentUncheckedCreateWithoutGenreInput>
  }

  export type ContentCreateManyGenreInputEnvelope = {
    data: ContentCreateManyGenreInput | ContentCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type UserGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: UserGenreWhereUniqueInput
    update: XOR<UserGenreUpdateWithoutGenreInput, UserGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<UserGenreCreateWithoutGenreInput, UserGenreUncheckedCreateWithoutGenreInput>
  }

  export type UserGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: UserGenreWhereUniqueInput
    data: XOR<UserGenreUpdateWithoutGenreInput, UserGenreUncheckedUpdateWithoutGenreInput>
  }

  export type UserGenreUpdateManyWithWhereWithoutGenreInput = {
    where: UserGenreScalarWhereInput
    data: XOR<UserGenreUpdateManyMutationInput, UserGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type ContentUpsertWithWhereUniqueWithoutGenreInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutGenreInput, ContentUncheckedUpdateWithoutGenreInput>
    create: XOR<ContentCreateWithoutGenreInput, ContentUncheckedCreateWithoutGenreInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutGenreInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutGenreInput, ContentUncheckedUpdateWithoutGenreInput>
  }

  export type ContentUpdateManyWithWhereWithoutGenreInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutGenreInput>
  }

  export type UserCreateWithoutSelectedGenresInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSelectedGenresInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSelectedGenresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSelectedGenresInput, UserUncheckedCreateWithoutSelectedGenresInput>
  }

  export type GenreCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    contents?: ContentCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutUsersInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutUsersInput, GenreUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutSelectedGenresInput = {
    update: XOR<UserUpdateWithoutSelectedGenresInput, UserUncheckedUpdateWithoutSelectedGenresInput>
    create: XOR<UserCreateWithoutSelectedGenresInput, UserUncheckedCreateWithoutSelectedGenresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSelectedGenresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSelectedGenresInput, UserUncheckedUpdateWithoutSelectedGenresInput>
  }

  export type UserUpdateWithoutSelectedGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSelectedGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GenreUpsertWithoutUsersInput = {
    update: XOR<GenreUpdateWithoutUsersInput, GenreUncheckedUpdateWithoutUsersInput>
    create: XOR<GenreCreateWithoutUsersInput, GenreUncheckedCreateWithoutUsersInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutUsersInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutUsersInput, GenreUncheckedUpdateWithoutUsersInput>
  }

  export type GenreUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateWithoutContentsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    users?: UserGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutContentsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    users?: UserGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutContentsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutContentsInput, GenreUncheckedCreateWithoutContentsInput>
  }

  export type UserCreateWithoutContentsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContentsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
  }

  export type LikeCreateWithoutContentInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutContentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutContentInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutContentInput, LikeUncheckedCreateWithoutContentInput>
  }

  export type LikeCreateManyContentInputEnvelope = {
    data: LikeCreateManyContentInput | LikeCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type ShareCreateWithoutContentInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSharesInput
  }

  export type ShareUncheckedCreateWithoutContentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ShareCreateOrConnectWithoutContentInput = {
    where: ShareWhereUniqueInput
    create: XOR<ShareCreateWithoutContentInput, ShareUncheckedCreateWithoutContentInput>
  }

  export type ShareCreateManyContentInputEnvelope = {
    data: ShareCreateManyContentInput | ShareCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeCreateWithoutContentInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedChallengesInput
    userChallenges?: UserChallengeCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutContentInput = {
    id?: string
    title: string
    description: string
    createdById: string
    createdAt?: Date | string
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutContentInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutContentInput, ChallengeUncheckedCreateWithoutContentInput>
  }

  export type GenreUpsertWithoutContentsInput = {
    update: XOR<GenreUpdateWithoutContentsInput, GenreUncheckedUpdateWithoutContentsInput>
    create: XOR<GenreCreateWithoutContentsInput, GenreUncheckedCreateWithoutContentsInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutContentsInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutContentsInput, GenreUncheckedUpdateWithoutContentsInput>
  }

  export type GenreUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type UserUpsertWithoutContentsInput = {
    update: XOR<UserUpdateWithoutContentsInput, UserUncheckedUpdateWithoutContentsInput>
    create: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentsInput, UserUncheckedUpdateWithoutContentsInput>
  }

  export type UserUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LikeUpsertWithWhereUniqueWithoutContentInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutContentInput, LikeUncheckedUpdateWithoutContentInput>
    create: XOR<LikeCreateWithoutContentInput, LikeUncheckedCreateWithoutContentInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutContentInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutContentInput, LikeUncheckedUpdateWithoutContentInput>
  }

  export type LikeUpdateManyWithWhereWithoutContentInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutContentInput>
  }

  export type ShareUpsertWithWhereUniqueWithoutContentInput = {
    where: ShareWhereUniqueInput
    update: XOR<ShareUpdateWithoutContentInput, ShareUncheckedUpdateWithoutContentInput>
    create: XOR<ShareCreateWithoutContentInput, ShareUncheckedCreateWithoutContentInput>
  }

  export type ShareUpdateWithWhereUniqueWithoutContentInput = {
    where: ShareWhereUniqueInput
    data: XOR<ShareUpdateWithoutContentInput, ShareUncheckedUpdateWithoutContentInput>
  }

  export type ShareUpdateManyWithWhereWithoutContentInput = {
    where: ShareScalarWhereInput
    data: XOR<ShareUpdateManyMutationInput, ShareUncheckedUpdateManyWithoutContentInput>
  }

  export type ChallengeUpsertWithoutContentInput = {
    update: XOR<ChallengeUpdateWithoutContentInput, ChallengeUncheckedUpdateWithoutContentInput>
    create: XOR<ChallengeCreateWithoutContentInput, ChallengeUncheckedCreateWithoutContentInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutContentInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutContentInput, ChallengeUncheckedUpdateWithoutContentInput>
  }

  export type ChallengeUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedChallengesNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserChallengeCreateWithoutResultPostInput = {
    id?: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserChallengesInput
    challenge: ChallengeCreateNestedOneWithoutUserChallengesInput
  }

  export type UserChallengeUncheckedCreateWithoutResultPostInput = {
    id?: string
    userId: string
    challengeId: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type UserChallengeCreateOrConnectWithoutResultPostInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutResultPostInput, UserChallengeUncheckedCreateWithoutResultPostInput>
  }

  export type UserCreateWithoutTaggedInPostsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaggedInPostsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaggedInPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaggedInPostsInput, UserUncheckedCreateWithoutTaggedInPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserChallengeUpsertWithoutResultPostInput = {
    update: XOR<UserChallengeUpdateWithoutResultPostInput, UserChallengeUncheckedUpdateWithoutResultPostInput>
    create: XOR<UserChallengeCreateWithoutResultPostInput, UserChallengeUncheckedCreateWithoutResultPostInput>
    where?: UserChallengeWhereInput
  }

  export type UserChallengeUpdateToOneWithWhereWithoutResultPostInput = {
    where?: UserChallengeWhereInput
    data: XOR<UserChallengeUpdateWithoutResultPostInput, UserChallengeUncheckedUpdateWithoutResultPostInput>
  }

  export type UserChallengeUpdateWithoutResultPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserChallengesNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutResultPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutTaggedInPostsInput = {
    update: XOR<UserUpdateWithoutTaggedInPostsInput, UserUncheckedUpdateWithoutTaggedInPostsInput>
    create: XOR<UserCreateWithoutTaggedInPostsInput, UserUncheckedCreateWithoutTaggedInPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaggedInPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaggedInPostsInput, UserUncheckedUpdateWithoutTaggedInPostsInput>
  }

  export type UserUpdateWithoutTaggedInPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaggedInPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type ContentCreateWithoutLikesInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genre: GenreCreateNestedOneWithoutContentsInput
    creator: UserCreateNestedOneWithoutContentsInput
    shares?: ShareCreateNestedManyWithoutContentInput
    challenge?: ChallengeCreateNestedOneWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutLikesInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    genreId: string
    creatorId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shares?: ShareUncheckedCreateNestedManyWithoutContentInput
    challenge?: ChallengeUncheckedCreateNestedOneWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutLikesInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutLikesInput, ContentUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentUpsertWithoutLikesInput = {
    update: XOR<ContentUpdateWithoutLikesInput, ContentUncheckedUpdateWithoutLikesInput>
    create: XOR<ContentCreateWithoutLikesInput, ContentUncheckedCreateWithoutLikesInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutLikesInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutLikesInput, ContentUncheckedUpdateWithoutLikesInput>
  }

  export type ContentUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateOneRequiredWithoutContentsNestedInput
    creator?: UserUpdateOneRequiredWithoutContentsNestedInput
    shares?: ShareUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUpdateOneWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: ShareUncheckedUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUncheckedUpdateOneWithoutContentNestedInput
  }

  export type UserCreateWithoutSharesInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharesInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharesInput, UserUncheckedCreateWithoutSharesInput>
  }

  export type ContentCreateWithoutSharesInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genre: GenreCreateNestedOneWithoutContentsInput
    creator: UserCreateNestedOneWithoutContentsInput
    likes?: LikeCreateNestedManyWithoutContentInput
    challenge?: ChallengeCreateNestedOneWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutSharesInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    genreId: string
    creatorId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutContentInput
    challenge?: ChallengeUncheckedCreateNestedOneWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutSharesInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutSharesInput, ContentUncheckedCreateWithoutSharesInput>
  }

  export type UserUpsertWithoutSharesInput = {
    update: XOR<UserUpdateWithoutSharesInput, UserUncheckedUpdateWithoutSharesInput>
    create: XOR<UserCreateWithoutSharesInput, UserUncheckedCreateWithoutSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharesInput, UserUncheckedUpdateWithoutSharesInput>
  }

  export type UserUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentUpsertWithoutSharesInput = {
    update: XOR<ContentUpdateWithoutSharesInput, ContentUncheckedUpdateWithoutSharesInput>
    create: XOR<ContentCreateWithoutSharesInput, ContentUncheckedCreateWithoutSharesInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutSharesInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutSharesInput, ContentUncheckedUpdateWithoutSharesInput>
  }

  export type ContentUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateOneRequiredWithoutContentsNestedInput
    creator?: UserUpdateOneRequiredWithoutContentsNestedInput
    likes?: LikeUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUpdateOneWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUncheckedUpdateOneWithoutContentNestedInput
  }

  export type UserCreateWithoutSentRelationshipsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentRelationshipsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentRelationshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRelationshipsInput, UserUncheckedCreateWithoutSentRelationshipsInput>
  }

  export type UserCreateWithoutReceivedRelationshipsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedRelationshipsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedRelationshipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRelationshipsInput, UserUncheckedCreateWithoutReceivedRelationshipsInput>
  }

  export type UserUpsertWithoutSentRelationshipsInput = {
    update: XOR<UserUpdateWithoutSentRelationshipsInput, UserUncheckedUpdateWithoutSentRelationshipsInput>
    create: XOR<UserCreateWithoutSentRelationshipsInput, UserUncheckedCreateWithoutSentRelationshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRelationshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRelationshipsInput, UserUncheckedUpdateWithoutSentRelationshipsInput>
  }

  export type UserUpdateWithoutSentRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedRelationshipsInput = {
    update: XOR<UserUpdateWithoutReceivedRelationshipsInput, UserUncheckedUpdateWithoutReceivedRelationshipsInput>
    create: XOR<UserCreateWithoutReceivedRelationshipsInput, UserUncheckedCreateWithoutReceivedRelationshipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRelationshipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRelationshipsInput, UserUncheckedUpdateWithoutReceivedRelationshipsInput>
  }

  export type UserUpdateWithoutReceivedRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRelationshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentCreateWithoutChallengeInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    genre: GenreCreateNestedOneWithoutContentsInput
    creator: UserCreateNestedOneWithoutContentsInput
    likes?: LikeCreateNestedManyWithoutContentInput
    shares?: ShareCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutChallengeInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    genreId: string
    creatorId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutContentInput
    shares?: ShareUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutChallengeInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutChallengeInput, ContentUncheckedCreateWithoutChallengeInput>
  }

  export type UserCreateWithoutCreatedChallengesInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedChallengesInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedChallengesInput, UserUncheckedCreateWithoutCreatedChallengesInput>
  }

  export type UserChallengeCreateWithoutChallengeInput = {
    id?: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserChallengesInput
    resultPost?: PostCreateNestedOneWithoutChallengeInput
  }

  export type UserChallengeUncheckedCreateWithoutChallengeInput = {
    id?: string
    userId: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
    resultPost?: PostUncheckedCreateNestedOneWithoutChallengeInput
  }

  export type UserChallengeCreateOrConnectWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type UserChallengeCreateManyChallengeInputEnvelope = {
    data: UserChallengeCreateManyChallengeInput | UserChallengeCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type ContentUpsertWithoutChallengeInput = {
    update: XOR<ContentUpdateWithoutChallengeInput, ContentUncheckedUpdateWithoutChallengeInput>
    create: XOR<ContentCreateWithoutChallengeInput, ContentUncheckedCreateWithoutChallengeInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutChallengeInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutChallengeInput, ContentUncheckedUpdateWithoutChallengeInput>
  }

  export type ContentUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateOneRequiredWithoutContentsNestedInput
    creator?: UserUpdateOneRequiredWithoutContentsNestedInput
    likes?: LikeUpdateManyWithoutContentNestedInput
    shares?: ShareUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutContentNestedInput
    shares?: ShareUncheckedUpdateManyWithoutContentNestedInput
  }

  export type UserUpsertWithoutCreatedChallengesInput = {
    update: XOR<UserUpdateWithoutCreatedChallengesInput, UserUncheckedUpdateWithoutCreatedChallengesInput>
    create: XOR<UserCreateWithoutCreatedChallengesInput, UserUncheckedCreateWithoutCreatedChallengesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedChallengesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedChallengesInput, UserUncheckedUpdateWithoutCreatedChallengesInput>
  }

  export type UserUpdateWithoutCreatedChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserChallengeUpsertWithWhereUniqueWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    update: XOR<UserChallengeUpdateWithoutChallengeInput, UserChallengeUncheckedUpdateWithoutChallengeInput>
    create: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type UserChallengeUpdateWithWhereUniqueWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    data: XOR<UserChallengeUpdateWithoutChallengeInput, UserChallengeUncheckedUpdateWithoutChallengeInput>
  }

  export type UserChallengeUpdateManyWithWhereWithoutChallengeInput = {
    where: UserChallengeScalarWhereInput
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyWithoutChallengeInput>
  }

  export type UserCreateWithoutUserChallengesInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    productivityCounts?: ProductivityCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserChallengesInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    productivityCounts?: ProductivityCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserChallengesInput, UserUncheckedCreateWithoutUserChallengesInput>
  }

  export type ChallengeCreateWithoutUserChallengesInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutChallengeInput
    createdBy: UserCreateNestedOneWithoutCreatedChallengesInput
  }

  export type ChallengeUncheckedCreateWithoutUserChallengesInput = {
    id?: string
    title: string
    description: string
    contentId: string
    createdById: string
    createdAt?: Date | string
  }

  export type ChallengeCreateOrConnectWithoutUserChallengesInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
  }

  export type PostCreateWithoutChallengeInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    taggedCreator?: UserCreateNestedOneWithoutTaggedInPostsInput
  }

  export type PostUncheckedCreateWithoutChallengeInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    authorId: string
    taggedCreatorId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutChallengeInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutChallengeInput, PostUncheckedCreateWithoutChallengeInput>
  }

  export type UserUpsertWithoutUserChallengesInput = {
    update: XOR<UserUpdateWithoutUserChallengesInput, UserUncheckedUpdateWithoutUserChallengesInput>
    create: XOR<UserCreateWithoutUserChallengesInput, UserUncheckedCreateWithoutUserChallengesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserChallengesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserChallengesInput, UserUncheckedUpdateWithoutUserChallengesInput>
  }

  export type UserUpdateWithoutUserChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    productivityCounts?: ProductivityCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    productivityCounts?: ProductivityCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeUpsertWithoutUserChallengesInput = {
    update: XOR<ChallengeUpdateWithoutUserChallengesInput, ChallengeUncheckedUpdateWithoutUserChallengesInput>
    create: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutUserChallengesInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutUserChallengesInput, ChallengeUncheckedUpdateWithoutUserChallengesInput>
  }

  export type ChallengeUpdateWithoutUserChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutChallengeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedChallengesNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutUserChallengesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpsertWithoutChallengeInput = {
    update: XOR<PostUpdateWithoutChallengeInput, PostUncheckedUpdateWithoutChallengeInput>
    create: XOR<PostCreateWithoutChallengeInput, PostUncheckedCreateWithoutChallengeInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutChallengeInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutChallengeInput, PostUncheckedUpdateWithoutChallengeInput>
  }

  export type PostUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    taggedCreator?: UserUpdateOneWithoutTaggedInPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    taggedCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProductivityCountsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    shares?: ShareCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductivityCountsInput = {
    id?: string
    name: string
    username: string
    email: string
    passwordHash: string
    accountType?: $Enums.AccountType
    bio?: string | null
    profileImage?: string | null
    streak?: number
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    selectedGenres?: UserGenreUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    taggedInPosts?: PostUncheckedCreateNestedManyWithoutTaggedCreatorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    shares?: ShareUncheckedCreateNestedManyWithoutUserInput
    sentRelationships?: RelationshipUncheckedCreateNestedManyWithoutSenderInput
    receivedRelationships?: RelationshipUncheckedCreateNestedManyWithoutReceiverInput
    createdChallenges?: ChallengeUncheckedCreateNestedManyWithoutCreatedByInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductivityCountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductivityCountsInput, UserUncheckedCreateWithoutProductivityCountsInput>
  }

  export type UserUpsertWithoutProductivityCountsInput = {
    update: XOR<UserUpdateWithoutProductivityCountsInput, UserUncheckedUpdateWithoutProductivityCountsInput>
    create: XOR<UserCreateWithoutProductivityCountsInput, UserUncheckedCreateWithoutProductivityCountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductivityCountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductivityCountsInput, UserUncheckedUpdateWithoutProductivityCountsInput>
  }

  export type UserUpdateWithoutProductivityCountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    shares?: ShareUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductivityCountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedGenres?: UserGenreUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    taggedInPosts?: PostUncheckedUpdateManyWithoutTaggedCreatorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    shares?: ShareUncheckedUpdateManyWithoutUserNestedInput
    sentRelationships?: RelationshipUncheckedUpdateManyWithoutSenderNestedInput
    receivedRelationships?: RelationshipUncheckedUpdateManyWithoutReceiverNestedInput
    createdChallenges?: ChallengeUncheckedUpdateManyWithoutCreatedByNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserGenreCreateManyUserInput = {
    id?: string
    genreId: string
    createdAt?: Date | string
  }

  export type ContentCreateManyCreatorInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    genreId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    challengeId?: string | null
    taggedCreatorId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyTaggedCreatorInput = {
    id?: string
    content: string
    mediaUrl?: string | null
    authorId: string
    challengeId?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type ShareCreateManyUserInput = {
    id?: string
    contentId: string
    createdAt?: Date | string
  }

  export type RelationshipCreateManySenderInput = {
    id?: string
    receiverId: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationshipCreateManyReceiverInput = {
    id?: string
    senderId: string
    status?: $Enums.FollowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    contentId: string
    createdAt?: Date | string
  }

  export type UserChallengeCreateManyUserInput = {
    id?: string
    challengeId: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ProductivityCountCreateManyUserInput = {
    id?: string
    date: Date | string
    count?: number
  }

  export type UserGenreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserGenreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGenreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateOneRequiredWithoutContentsNestedInput
    likes?: LikeUpdateManyWithoutContentNestedInput
    shares?: ShareUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUpdateOneWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutContentNestedInput
    shares?: ShareUncheckedUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUncheckedUpdateOneWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: UserChallengeUpdateOneWithoutResultPostNestedInput
    taggedCreator?: UserUpdateOneWithoutTaggedInPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    taggedCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    taggedCreatorId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutTaggedCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    challenge?: UserChallengeUpdateOneWithoutResultPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTaggedCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutTaggedCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    challengeId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutSharesNestedInput
  }

  export type ShareUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedRelationshipsNestedInput
  }

  export type RelationshipUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentRelationshipsNestedInput
  }

  export type RelationshipUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutChallengeNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput
    resultPost?: PostUpdateOneWithoutChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resultPost?: PostUncheckedUpdateOneWithoutChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductivityCountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductivityCountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type ProductivityCountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type UserGenreCreateManyGenreInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ContentCreateManyGenreInput = {
    id?: string
    title: string
    description?: string | null
    body?: string | null
    type: $Enums.ContentType
    externalUrl?: string | null
    mediaUrl?: string | null
    creatorId: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGenreUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSelectedGenresNestedInput
  }

  export type UserGenreUncheckedUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGenreUncheckedUpdateManyWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContentsNestedInput
    likes?: LikeUpdateManyWithoutContentNestedInput
    shares?: ShareUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUpdateOneWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutContentNestedInput
    shares?: ShareUncheckedUpdateManyWithoutContentNestedInput
    challenge?: ChallengeUncheckedUpdateOneWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyContentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ShareCreateManyContentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSharesNestedInput
  }

  export type ShareUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeCreateManyChallengeInput = {
    id?: string
    userId: string
    status?: $Enums.ChallengeStatus
    offeredAt?: Date | string
    acceptedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type UserChallengeUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserChallengesNestedInput
    resultPost?: PostUpdateOneWithoutChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resultPost?: PostUncheckedUpdateOneWithoutChallengeNestedInput
  }

  export type UserChallengeUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    offeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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