
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
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatUser
 * 
 */
export type ChatUser = $Result.DefaultSelection<Prisma.$ChatUserPayload>
/**
 * Model ChatFriendship
 * 
 */
export type ChatFriendship = $Result.DefaultSelection<Prisma.$ChatFriendshipPayload>
/**
 * Model ChatConvo
 * 
 */
export type ChatConvo = $Result.DefaultSelection<Prisma.$ChatConvoPayload>
/**
 * Model ChatConvoParticipant
 * 
 */
export type ChatConvoParticipant = $Result.DefaultSelection<Prisma.$ChatConvoParticipantPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChatRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type ChatRole = (typeof ChatRole)[keyof typeof ChatRole]

}

export type ChatRole = $Enums.ChatRole

export const ChatRole: typeof $Enums.ChatRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChatSessions
 * const chatSessions = await prisma.chatSession.findMany()
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
   * // Fetch zero or more ChatSessions
   * const chatSessions = await prisma.chatSession.findMany()
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
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatUser`: Exposes CRUD operations for the **ChatUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatUsers
    * const chatUsers = await prisma.chatUser.findMany()
    * ```
    */
  get chatUser(): Prisma.ChatUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatFriendship`: Exposes CRUD operations for the **ChatFriendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatFriendships
    * const chatFriendships = await prisma.chatFriendship.findMany()
    * ```
    */
  get chatFriendship(): Prisma.ChatFriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatConvo`: Exposes CRUD operations for the **ChatConvo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatConvos
    * const chatConvos = await prisma.chatConvo.findMany()
    * ```
    */
  get chatConvo(): Prisma.ChatConvoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatConvoParticipant`: Exposes CRUD operations for the **ChatConvoParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatConvoParticipants
    * const chatConvoParticipants = await prisma.chatConvoParticipant.findMany()
    * ```
    */
  get chatConvoParticipant(): Prisma.ChatConvoParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
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
    ChatSession: 'ChatSession',
    ChatUser: 'ChatUser',
    ChatFriendship: 'ChatFriendship',
    ChatConvo: 'ChatConvo',
    ChatConvoParticipant: 'ChatConvoParticipant',
    ChatMessage: 'ChatMessage'
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
      modelProps: "chatSession" | "chatUser" | "chatFriendship" | "chatConvo" | "chatConvoParticipant" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatUser: {
        payload: Prisma.$ChatUserPayload<ExtArgs>
        fields: Prisma.ChatUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          findFirst: {
            args: Prisma.ChatUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          findMany: {
            args: Prisma.ChatUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          create: {
            args: Prisma.ChatUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          createMany: {
            args: Prisma.ChatUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          delete: {
            args: Prisma.ChatUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          update: {
            args: Prisma.ChatUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          deleteMany: {
            args: Prisma.ChatUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          upsert: {
            args: Prisma.ChatUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          aggregate: {
            args: Prisma.ChatUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatUser>
          }
          groupBy: {
            args: Prisma.ChatUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatUserCountArgs<ExtArgs>
            result: $Utils.Optional<ChatUserCountAggregateOutputType> | number
          }
        }
      }
      ChatFriendship: {
        payload: Prisma.$ChatFriendshipPayload<ExtArgs>
        fields: Prisma.ChatFriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>
          }
          findFirst: {
            args: Prisma.ChatFriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>
          }
          findMany: {
            args: Prisma.ChatFriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>[]
          }
          create: {
            args: Prisma.ChatFriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>
          }
          createMany: {
            args: Prisma.ChatFriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatFriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>[]
          }
          delete: {
            args: Prisma.ChatFriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>
          }
          update: {
            args: Prisma.ChatFriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>
          }
          deleteMany: {
            args: Prisma.ChatFriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatFriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatFriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>[]
          }
          upsert: {
            args: Prisma.ChatFriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatFriendshipPayload>
          }
          aggregate: {
            args: Prisma.ChatFriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatFriendship>
          }
          groupBy: {
            args: Prisma.ChatFriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatFriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatFriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<ChatFriendshipCountAggregateOutputType> | number
          }
        }
      }
      ChatConvo: {
        payload: Prisma.$ChatConvoPayload<ExtArgs>
        fields: Prisma.ChatConvoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatConvoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatConvoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>
          }
          findFirst: {
            args: Prisma.ChatConvoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatConvoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>
          }
          findMany: {
            args: Prisma.ChatConvoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>[]
          }
          create: {
            args: Prisma.ChatConvoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>
          }
          createMany: {
            args: Prisma.ChatConvoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatConvoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>[]
          }
          delete: {
            args: Prisma.ChatConvoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>
          }
          update: {
            args: Prisma.ChatConvoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>
          }
          deleteMany: {
            args: Prisma.ChatConvoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatConvoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatConvoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>[]
          }
          upsert: {
            args: Prisma.ChatConvoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoPayload>
          }
          aggregate: {
            args: Prisma.ChatConvoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatConvo>
          }
          groupBy: {
            args: Prisma.ChatConvoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatConvoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatConvoCountArgs<ExtArgs>
            result: $Utils.Optional<ChatConvoCountAggregateOutputType> | number
          }
        }
      }
      ChatConvoParticipant: {
        payload: Prisma.$ChatConvoParticipantPayload<ExtArgs>
        fields: Prisma.ChatConvoParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatConvoParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatConvoParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>
          }
          findFirst: {
            args: Prisma.ChatConvoParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatConvoParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>
          }
          findMany: {
            args: Prisma.ChatConvoParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>[]
          }
          create: {
            args: Prisma.ChatConvoParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>
          }
          createMany: {
            args: Prisma.ChatConvoParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatConvoParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>[]
          }
          delete: {
            args: Prisma.ChatConvoParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>
          }
          update: {
            args: Prisma.ChatConvoParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ChatConvoParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatConvoParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatConvoParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ChatConvoParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatConvoParticipantPayload>
          }
          aggregate: {
            args: Prisma.ChatConvoParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatConvoParticipant>
          }
          groupBy: {
            args: Prisma.ChatConvoParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatConvoParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatConvoParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ChatConvoParticipantCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
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
    chatSession?: ChatSessionOmit
    chatUser?: ChatUserOmit
    chatFriendship?: ChatFriendshipOmit
    chatConvo?: ChatConvoOmit
    chatConvoParticipant?: ChatConvoParticipantOmit
    chatMessage?: ChatMessageOmit
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
   * Count Type ChatUserCountOutputType
   */

  export type ChatUserCountOutputType = {
    messages: number
    conversations: number
    friends: number
    friendOf: number
  }

  export type ChatUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatUserCountOutputTypeCountMessagesArgs
    conversations?: boolean | ChatUserCountOutputTypeCountConversationsArgs
    friends?: boolean | ChatUserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | ChatUserCountOutputTypeCountFriendOfArgs
  }

  // Custom InputTypes
  /**
   * ChatUserCountOutputType without action
   */
  export type ChatUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUserCountOutputType
     */
    select?: ChatUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatUserCountOutputType without action
   */
  export type ChatUserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * ChatUserCountOutputType without action
   */
  export type ChatUserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatConvoParticipantWhereInput
  }

  /**
   * ChatUserCountOutputType without action
   */
  export type ChatUserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatFriendshipWhereInput
  }

  /**
   * ChatUserCountOutputType without action
   */
  export type ChatUserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatFriendshipWhereInput
  }


  /**
   * Count Type ChatConvoCountOutputType
   */

  export type ChatConvoCountOutputType = {
    messages: number
    participants: number
  }

  export type ChatConvoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatConvoCountOutputTypeCountMessagesArgs
    participants?: boolean | ChatConvoCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * ChatConvoCountOutputType without action
   */
  export type ChatConvoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoCountOutputType
     */
    select?: ChatConvoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatConvoCountOutputType without action
   */
  export type ChatConvoCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * ChatConvoCountOutputType without action
   */
  export type ChatConvoCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatConvoParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["chatSession"]>

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
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
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly sid: FieldRef<"ChatSession", 'String'>
    readonly data: FieldRef<"ChatSession", 'String'>
    readonly expiresAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
  }


  /**
   * Model ChatUser
   */

  export type AggregateChatUser = {
    _count: ChatUserCountAggregateOutputType | null
    _avg: ChatUserAvgAggregateOutputType | null
    _sum: ChatUserSumAggregateOutputType | null
    _min: ChatUserMinAggregateOutputType | null
    _max: ChatUserMaxAggregateOutputType | null
  }

  export type ChatUserAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatUserSumAggregateOutputType = {
    id: number | null
  }

  export type ChatUserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    bio: string | null
    image: string | null
    token: string | null
    role: $Enums.ChatRole | null
  }

  export type ChatUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    bio: string | null
    image: string | null
    token: string | null
    role: $Enums.ChatRole | null
  }

  export type ChatUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    bio: number
    image: number
    token: number
    role: number
    _all: number
  }


  export type ChatUserAvgAggregateInputType = {
    id?: true
  }

  export type ChatUserSumAggregateInputType = {
    id?: true
  }

  export type ChatUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bio?: true
    image?: true
    token?: true
    role?: true
  }

  export type ChatUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bio?: true
    image?: true
    token?: true
    role?: true
  }

  export type ChatUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bio?: true
    image?: true
    token?: true
    role?: true
    _all?: true
  }

  export type ChatUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUser to aggregate.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatUsers
    **/
    _count?: true | ChatUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatUserMaxAggregateInputType
  }

  export type GetChatUserAggregateType<T extends ChatUserAggregateArgs> = {
        [P in keyof T & keyof AggregateChatUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatUser[P]>
      : GetScalarType<T[P], AggregateChatUser[P]>
  }




  export type ChatUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithAggregationInput | ChatUserOrderByWithAggregationInput[]
    by: ChatUserScalarFieldEnum[] | ChatUserScalarFieldEnum
    having?: ChatUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatUserCountAggregateInputType | true
    _avg?: ChatUserAvgAggregateInputType
    _sum?: ChatUserSumAggregateInputType
    _min?: ChatUserMinAggregateInputType
    _max?: ChatUserMaxAggregateInputType
  }

  export type ChatUserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    bio: string | null
    image: string | null
    token: string | null
    role: $Enums.ChatRole
    _count: ChatUserCountAggregateOutputType | null
    _avg: ChatUserAvgAggregateOutputType | null
    _sum: ChatUserSumAggregateOutputType | null
    _min: ChatUserMinAggregateOutputType | null
    _max: ChatUserMaxAggregateOutputType | null
  }

  type GetChatUserGroupByPayload<T extends ChatUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatUserGroupByOutputType[P]>
            : GetScalarType<T[P], ChatUserGroupByOutputType[P]>
        }
      >
    >


  export type ChatUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    image?: boolean
    token?: boolean
    role?: boolean
    messages?: boolean | ChatUser$messagesArgs<ExtArgs>
    conversations?: boolean | ChatUser$conversationsArgs<ExtArgs>
    friends?: boolean | ChatUser$friendsArgs<ExtArgs>
    friendOf?: boolean | ChatUser$friendOfArgs<ExtArgs>
    _count?: boolean | ChatUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    image?: boolean
    token?: boolean
    role?: boolean
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    image?: boolean
    token?: boolean
    role?: boolean
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    image?: boolean
    token?: boolean
    role?: boolean
  }

  export type ChatUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "bio" | "image" | "token" | "role", ExtArgs["result"]["chatUser"]>
  export type ChatUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatUser$messagesArgs<ExtArgs>
    conversations?: boolean | ChatUser$conversationsArgs<ExtArgs>
    friends?: boolean | ChatUser$friendsArgs<ExtArgs>
    friendOf?: boolean | ChatUser$friendOfArgs<ExtArgs>
    _count?: boolean | ChatUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatUser"
    objects: {
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      conversations: Prisma.$ChatConvoParticipantPayload<ExtArgs>[]
      friends: Prisma.$ChatFriendshipPayload<ExtArgs>[]
      friendOf: Prisma.$ChatFriendshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      bio: string | null
      image: string | null
      token: string | null
      role: $Enums.ChatRole
    }, ExtArgs["result"]["chatUser"]>
    composites: {}
  }

  type ChatUserGetPayload<S extends boolean | null | undefined | ChatUserDefaultArgs> = $Result.GetResult<Prisma.$ChatUserPayload, S>

  type ChatUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatUserCountAggregateInputType | true
    }

  export interface ChatUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatUser'], meta: { name: 'ChatUser' } }
    /**
     * Find zero or one ChatUser that matches the filter.
     * @param {ChatUserFindUniqueArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatUserFindUniqueArgs>(args: SelectSubset<T, ChatUserFindUniqueArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatUserFindUniqueOrThrowArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindFirstArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatUserFindFirstArgs>(args?: SelectSubset<T, ChatUserFindFirstArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindFirstOrThrowArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatUsers
     * const chatUsers = await prisma.chatUser.findMany()
     * 
     * // Get first 10 ChatUsers
     * const chatUsers = await prisma.chatUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatUserFindManyArgs>(args?: SelectSubset<T, ChatUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatUser.
     * @param {ChatUserCreateArgs} args - Arguments to create a ChatUser.
     * @example
     * // Create one ChatUser
     * const ChatUser = await prisma.chatUser.create({
     *   data: {
     *     // ... data to create a ChatUser
     *   }
     * })
     * 
     */
    create<T extends ChatUserCreateArgs>(args: SelectSubset<T, ChatUserCreateArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatUsers.
     * @param {ChatUserCreateManyArgs} args - Arguments to create many ChatUsers.
     * @example
     * // Create many ChatUsers
     * const chatUser = await prisma.chatUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatUserCreateManyArgs>(args?: SelectSubset<T, ChatUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatUsers and returns the data saved in the database.
     * @param {ChatUserCreateManyAndReturnArgs} args - Arguments to create many ChatUsers.
     * @example
     * // Create many ChatUsers
     * const chatUser = await prisma.chatUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatUsers and only return the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatUser.
     * @param {ChatUserDeleteArgs} args - Arguments to delete one ChatUser.
     * @example
     * // Delete one ChatUser
     * const ChatUser = await prisma.chatUser.delete({
     *   where: {
     *     // ... filter to delete one ChatUser
     *   }
     * })
     * 
     */
    delete<T extends ChatUserDeleteArgs>(args: SelectSubset<T, ChatUserDeleteArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatUser.
     * @param {ChatUserUpdateArgs} args - Arguments to update one ChatUser.
     * @example
     * // Update one ChatUser
     * const chatUser = await prisma.chatUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUserUpdateArgs>(args: SelectSubset<T, ChatUserUpdateArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatUsers.
     * @param {ChatUserDeleteManyArgs} args - Arguments to filter ChatUsers to delete.
     * @example
     * // Delete a few ChatUsers
     * const { count } = await prisma.chatUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatUserDeleteManyArgs>(args?: SelectSubset<T, ChatUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatUsers
     * const chatUser = await prisma.chatUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUserUpdateManyArgs>(args: SelectSubset<T, ChatUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatUsers and returns the data updated in the database.
     * @param {ChatUserUpdateManyAndReturnArgs} args - Arguments to update many ChatUsers.
     * @example
     * // Update many ChatUsers
     * const chatUser = await prisma.chatUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatUsers and only return the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatUser.
     * @param {ChatUserUpsertArgs} args - Arguments to update or create a ChatUser.
     * @example
     * // Update or create a ChatUser
     * const chatUser = await prisma.chatUser.upsert({
     *   create: {
     *     // ... data to create a ChatUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatUser we want to update
     *   }
     * })
     */
    upsert<T extends ChatUserUpsertArgs>(args: SelectSubset<T, ChatUserUpsertArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserCountArgs} args - Arguments to filter ChatUsers to count.
     * @example
     * // Count the number of ChatUsers
     * const count = await prisma.chatUser.count({
     *   where: {
     *     // ... the filter for the ChatUsers we want to count
     *   }
     * })
    **/
    count<T extends ChatUserCountArgs>(
      args?: Subset<T, ChatUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatUserAggregateArgs>(args: Subset<T, ChatUserAggregateArgs>): Prisma.PrismaPromise<GetChatUserAggregateType<T>>

    /**
     * Group by ChatUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserGroupByArgs} args - Group by arguments.
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
      T extends ChatUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatUserGroupByArgs['orderBy'] }
        : { orderBy?: ChatUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatUser model
   */
  readonly fields: ChatUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends ChatUser$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatUser$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends ChatUser$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, ChatUser$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends ChatUser$friendsArgs<ExtArgs> = {}>(args?: Subset<T, ChatUser$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends ChatUser$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, ChatUser$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatUser model
   */
  interface ChatUserFieldRefs {
    readonly id: FieldRef<"ChatUser", 'Int'>
    readonly name: FieldRef<"ChatUser", 'String'>
    readonly email: FieldRef<"ChatUser", 'String'>
    readonly password: FieldRef<"ChatUser", 'String'>
    readonly bio: FieldRef<"ChatUser", 'String'>
    readonly image: FieldRef<"ChatUser", 'String'>
    readonly token: FieldRef<"ChatUser", 'String'>
    readonly role: FieldRef<"ChatUser", 'ChatRole'>
  }
    

  // Custom InputTypes
  /**
   * ChatUser findUnique
   */
  export type ChatUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser findUniqueOrThrow
   */
  export type ChatUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser findFirst
   */
  export type ChatUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUsers.
     */
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser findFirstOrThrow
   */
  export type ChatUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUsers.
     */
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser findMany
   */
  export type ChatUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUsers to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser create
   */
  export type ChatUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatUser.
     */
    data: XOR<ChatUserCreateInput, ChatUserUncheckedCreateInput>
  }

  /**
   * ChatUser createMany
   */
  export type ChatUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatUsers.
     */
    data: ChatUserCreateManyInput | ChatUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatUser createManyAndReturn
   */
  export type ChatUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * The data used to create many ChatUsers.
     */
    data: ChatUserCreateManyInput | ChatUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatUser update
   */
  export type ChatUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatUser.
     */
    data: XOR<ChatUserUpdateInput, ChatUserUncheckedUpdateInput>
    /**
     * Choose, which ChatUser to update.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser updateMany
   */
  export type ChatUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatUsers.
     */
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyInput>
    /**
     * Filter which ChatUsers to update
     */
    where?: ChatUserWhereInput
    /**
     * Limit how many ChatUsers to update.
     */
    limit?: number
  }

  /**
   * ChatUser updateManyAndReturn
   */
  export type ChatUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * The data used to update ChatUsers.
     */
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyInput>
    /**
     * Filter which ChatUsers to update
     */
    where?: ChatUserWhereInput
    /**
     * Limit how many ChatUsers to update.
     */
    limit?: number
  }

  /**
   * ChatUser upsert
   */
  export type ChatUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatUser to update in case it exists.
     */
    where: ChatUserWhereUniqueInput
    /**
     * In case the ChatUser found by the `where` argument doesn't exist, create a new ChatUser with this data.
     */
    create: XOR<ChatUserCreateInput, ChatUserUncheckedCreateInput>
    /**
     * In case the ChatUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUserUpdateInput, ChatUserUncheckedUpdateInput>
  }

  /**
   * ChatUser delete
   */
  export type ChatUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter which ChatUser to delete.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser deleteMany
   */
  export type ChatUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUsers to delete
     */
    where?: ChatUserWhereInput
    /**
     * Limit how many ChatUsers to delete.
     */
    limit?: number
  }

  /**
   * ChatUser.messages
   */
  export type ChatUser$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatUser.conversations
   */
  export type ChatUser$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    where?: ChatConvoParticipantWhereInput
    orderBy?: ChatConvoParticipantOrderByWithRelationInput | ChatConvoParticipantOrderByWithRelationInput[]
    cursor?: ChatConvoParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatConvoParticipantScalarFieldEnum | ChatConvoParticipantScalarFieldEnum[]
  }

  /**
   * ChatUser.friends
   */
  export type ChatUser$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    where?: ChatFriendshipWhereInput
    orderBy?: ChatFriendshipOrderByWithRelationInput | ChatFriendshipOrderByWithRelationInput[]
    cursor?: ChatFriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatFriendshipScalarFieldEnum | ChatFriendshipScalarFieldEnum[]
  }

  /**
   * ChatUser.friendOf
   */
  export type ChatUser$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    where?: ChatFriendshipWhereInput
    orderBy?: ChatFriendshipOrderByWithRelationInput | ChatFriendshipOrderByWithRelationInput[]
    cursor?: ChatFriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatFriendshipScalarFieldEnum | ChatFriendshipScalarFieldEnum[]
  }

  /**
   * ChatUser without action
   */
  export type ChatUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
  }


  /**
   * Model ChatFriendship
   */

  export type AggregateChatFriendship = {
    _count: ChatFriendshipCountAggregateOutputType | null
    _avg: ChatFriendshipAvgAggregateOutputType | null
    _sum: ChatFriendshipSumAggregateOutputType | null
    _min: ChatFriendshipMinAggregateOutputType | null
    _max: ChatFriendshipMaxAggregateOutputType | null
  }

  export type ChatFriendshipAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type ChatFriendshipSumAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type ChatFriendshipMinAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
  }

  export type ChatFriendshipMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
  }

  export type ChatFriendshipCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: number
    _all: number
  }


  export type ChatFriendshipAvgAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type ChatFriendshipSumAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type ChatFriendshipMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type ChatFriendshipMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type ChatFriendshipCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    _all?: true
  }

  export type ChatFriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatFriendship to aggregate.
     */
    where?: ChatFriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatFriendships to fetch.
     */
    orderBy?: ChatFriendshipOrderByWithRelationInput | ChatFriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatFriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatFriendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatFriendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatFriendships
    **/
    _count?: true | ChatFriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatFriendshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatFriendshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatFriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatFriendshipMaxAggregateInputType
  }

  export type GetChatFriendshipAggregateType<T extends ChatFriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateChatFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatFriendship[P]>
      : GetScalarType<T[P], AggregateChatFriendship[P]>
  }




  export type ChatFriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatFriendshipWhereInput
    orderBy?: ChatFriendshipOrderByWithAggregationInput | ChatFriendshipOrderByWithAggregationInput[]
    by: ChatFriendshipScalarFieldEnum[] | ChatFriendshipScalarFieldEnum
    having?: ChatFriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatFriendshipCountAggregateInputType | true
    _avg?: ChatFriendshipAvgAggregateInputType
    _sum?: ChatFriendshipSumAggregateInputType
    _min?: ChatFriendshipMinAggregateInputType
    _max?: ChatFriendshipMaxAggregateInputType
  }

  export type ChatFriendshipGroupByOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: Date
    _count: ChatFriendshipCountAggregateOutputType | null
    _avg: ChatFriendshipAvgAggregateOutputType | null
    _sum: ChatFriendshipSumAggregateOutputType | null
    _min: ChatFriendshipMinAggregateOutputType | null
    _max: ChatFriendshipMaxAggregateOutputType | null
  }

  type GetChatFriendshipGroupByPayload<T extends ChatFriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatFriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatFriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatFriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], ChatFriendshipGroupByOutputType[P]>
        }
      >
    >


  export type ChatFriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    friend?: boolean | ChatUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatFriendship"]>

  export type ChatFriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    friend?: boolean | ChatUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatFriendship"]>

  export type ChatFriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    friend?: boolean | ChatUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatFriendship"]>

  export type ChatFriendshipSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
  }

  export type ChatFriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "createdAt", ExtArgs["result"]["chatFriendship"]>
  export type ChatFriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    friend?: boolean | ChatUserDefaultArgs<ExtArgs>
  }
  export type ChatFriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    friend?: boolean | ChatUserDefaultArgs<ExtArgs>
  }
  export type ChatFriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    friend?: boolean | ChatUserDefaultArgs<ExtArgs>
  }

  export type $ChatFriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatFriendship"
    objects: {
      user: Prisma.$ChatUserPayload<ExtArgs>
      friend: Prisma.$ChatUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      friendId: number
      createdAt: Date
    }, ExtArgs["result"]["chatFriendship"]>
    composites: {}
  }

  type ChatFriendshipGetPayload<S extends boolean | null | undefined | ChatFriendshipDefaultArgs> = $Result.GetResult<Prisma.$ChatFriendshipPayload, S>

  type ChatFriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatFriendshipCountAggregateInputType | true
    }

  export interface ChatFriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatFriendship'], meta: { name: 'ChatFriendship' } }
    /**
     * Find zero or one ChatFriendship that matches the filter.
     * @param {ChatFriendshipFindUniqueArgs} args - Arguments to find a ChatFriendship
     * @example
     * // Get one ChatFriendship
     * const chatFriendship = await prisma.chatFriendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFriendshipFindUniqueArgs>(args: SelectSubset<T, ChatFriendshipFindUniqueArgs<ExtArgs>>): Prisma__ChatFriendshipClient<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatFriendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFriendshipFindUniqueOrThrowArgs} args - Arguments to find a ChatFriendship
     * @example
     * // Get one ChatFriendship
     * const chatFriendship = await prisma.chatFriendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatFriendshipClient<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatFriendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFriendshipFindFirstArgs} args - Arguments to find a ChatFriendship
     * @example
     * // Get one ChatFriendship
     * const chatFriendship = await prisma.chatFriendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFriendshipFindFirstArgs>(args?: SelectSubset<T, ChatFriendshipFindFirstArgs<ExtArgs>>): Prisma__ChatFriendshipClient<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatFriendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFriendshipFindFirstOrThrowArgs} args - Arguments to find a ChatFriendship
     * @example
     * // Get one ChatFriendship
     * const chatFriendship = await prisma.chatFriendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatFriendshipClient<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatFriendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatFriendships
     * const chatFriendships = await prisma.chatFriendship.findMany()
     * 
     * // Get first 10 ChatFriendships
     * const chatFriendships = await prisma.chatFriendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatFriendshipWithIdOnly = await prisma.chatFriendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFriendshipFindManyArgs>(args?: SelectSubset<T, ChatFriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatFriendship.
     * @param {ChatFriendshipCreateArgs} args - Arguments to create a ChatFriendship.
     * @example
     * // Create one ChatFriendship
     * const ChatFriendship = await prisma.chatFriendship.create({
     *   data: {
     *     // ... data to create a ChatFriendship
     *   }
     * })
     * 
     */
    create<T extends ChatFriendshipCreateArgs>(args: SelectSubset<T, ChatFriendshipCreateArgs<ExtArgs>>): Prisma__ChatFriendshipClient<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatFriendships.
     * @param {ChatFriendshipCreateManyArgs} args - Arguments to create many ChatFriendships.
     * @example
     * // Create many ChatFriendships
     * const chatFriendship = await prisma.chatFriendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatFriendshipCreateManyArgs>(args?: SelectSubset<T, ChatFriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatFriendships and returns the data saved in the database.
     * @param {ChatFriendshipCreateManyAndReturnArgs} args - Arguments to create many ChatFriendships.
     * @example
     * // Create many ChatFriendships
     * const chatFriendship = await prisma.chatFriendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatFriendships and only return the `id`
     * const chatFriendshipWithIdOnly = await prisma.chatFriendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatFriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatFriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatFriendship.
     * @param {ChatFriendshipDeleteArgs} args - Arguments to delete one ChatFriendship.
     * @example
     * // Delete one ChatFriendship
     * const ChatFriendship = await prisma.chatFriendship.delete({
     *   where: {
     *     // ... filter to delete one ChatFriendship
     *   }
     * })
     * 
     */
    delete<T extends ChatFriendshipDeleteArgs>(args: SelectSubset<T, ChatFriendshipDeleteArgs<ExtArgs>>): Prisma__ChatFriendshipClient<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatFriendship.
     * @param {ChatFriendshipUpdateArgs} args - Arguments to update one ChatFriendship.
     * @example
     * // Update one ChatFriendship
     * const chatFriendship = await prisma.chatFriendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatFriendshipUpdateArgs>(args: SelectSubset<T, ChatFriendshipUpdateArgs<ExtArgs>>): Prisma__ChatFriendshipClient<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatFriendships.
     * @param {ChatFriendshipDeleteManyArgs} args - Arguments to filter ChatFriendships to delete.
     * @example
     * // Delete a few ChatFriendships
     * const { count } = await prisma.chatFriendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatFriendshipDeleteManyArgs>(args?: SelectSubset<T, ChatFriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatFriendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatFriendships
     * const chatFriendship = await prisma.chatFriendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatFriendshipUpdateManyArgs>(args: SelectSubset<T, ChatFriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatFriendships and returns the data updated in the database.
     * @param {ChatFriendshipUpdateManyAndReturnArgs} args - Arguments to update many ChatFriendships.
     * @example
     * // Update many ChatFriendships
     * const chatFriendship = await prisma.chatFriendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatFriendships and only return the `id`
     * const chatFriendshipWithIdOnly = await prisma.chatFriendship.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatFriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatFriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatFriendship.
     * @param {ChatFriendshipUpsertArgs} args - Arguments to update or create a ChatFriendship.
     * @example
     * // Update or create a ChatFriendship
     * const chatFriendship = await prisma.chatFriendship.upsert({
     *   create: {
     *     // ... data to create a ChatFriendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatFriendship we want to update
     *   }
     * })
     */
    upsert<T extends ChatFriendshipUpsertArgs>(args: SelectSubset<T, ChatFriendshipUpsertArgs<ExtArgs>>): Prisma__ChatFriendshipClient<$Result.GetResult<Prisma.$ChatFriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatFriendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFriendshipCountArgs} args - Arguments to filter ChatFriendships to count.
     * @example
     * // Count the number of ChatFriendships
     * const count = await prisma.chatFriendship.count({
     *   where: {
     *     // ... the filter for the ChatFriendships we want to count
     *   }
     * })
    **/
    count<T extends ChatFriendshipCountArgs>(
      args?: Subset<T, ChatFriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatFriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatFriendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatFriendshipAggregateArgs>(args: Subset<T, ChatFriendshipAggregateArgs>): Prisma.PrismaPromise<GetChatFriendshipAggregateType<T>>

    /**
     * Group by ChatFriendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFriendshipGroupByArgs} args - Group by arguments.
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
      T extends ChatFriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatFriendshipGroupByArgs['orderBy'] }
        : { orderBy?: ChatFriendshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatFriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatFriendship model
   */
  readonly fields: ChatFriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatFriendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatFriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ChatUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserDefaultArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends ChatUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserDefaultArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatFriendship model
   */
  interface ChatFriendshipFieldRefs {
    readonly id: FieldRef<"ChatFriendship", 'Int'>
    readonly userId: FieldRef<"ChatFriendship", 'Int'>
    readonly friendId: FieldRef<"ChatFriendship", 'Int'>
    readonly createdAt: FieldRef<"ChatFriendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatFriendship findUnique
   */
  export type ChatFriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which ChatFriendship to fetch.
     */
    where: ChatFriendshipWhereUniqueInput
  }

  /**
   * ChatFriendship findUniqueOrThrow
   */
  export type ChatFriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which ChatFriendship to fetch.
     */
    where: ChatFriendshipWhereUniqueInput
  }

  /**
   * ChatFriendship findFirst
   */
  export type ChatFriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which ChatFriendship to fetch.
     */
    where?: ChatFriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatFriendships to fetch.
     */
    orderBy?: ChatFriendshipOrderByWithRelationInput | ChatFriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatFriendships.
     */
    cursor?: ChatFriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatFriendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatFriendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatFriendships.
     */
    distinct?: ChatFriendshipScalarFieldEnum | ChatFriendshipScalarFieldEnum[]
  }

  /**
   * ChatFriendship findFirstOrThrow
   */
  export type ChatFriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which ChatFriendship to fetch.
     */
    where?: ChatFriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatFriendships to fetch.
     */
    orderBy?: ChatFriendshipOrderByWithRelationInput | ChatFriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatFriendships.
     */
    cursor?: ChatFriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatFriendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatFriendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatFriendships.
     */
    distinct?: ChatFriendshipScalarFieldEnum | ChatFriendshipScalarFieldEnum[]
  }

  /**
   * ChatFriendship findMany
   */
  export type ChatFriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which ChatFriendships to fetch.
     */
    where?: ChatFriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatFriendships to fetch.
     */
    orderBy?: ChatFriendshipOrderByWithRelationInput | ChatFriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatFriendships.
     */
    cursor?: ChatFriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatFriendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatFriendships.
     */
    skip?: number
    distinct?: ChatFriendshipScalarFieldEnum | ChatFriendshipScalarFieldEnum[]
  }

  /**
   * ChatFriendship create
   */
  export type ChatFriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatFriendship.
     */
    data: XOR<ChatFriendshipCreateInput, ChatFriendshipUncheckedCreateInput>
  }

  /**
   * ChatFriendship createMany
   */
  export type ChatFriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatFriendships.
     */
    data: ChatFriendshipCreateManyInput | ChatFriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatFriendship createManyAndReturn
   */
  export type ChatFriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many ChatFriendships.
     */
    data: ChatFriendshipCreateManyInput | ChatFriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatFriendship update
   */
  export type ChatFriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatFriendship.
     */
    data: XOR<ChatFriendshipUpdateInput, ChatFriendshipUncheckedUpdateInput>
    /**
     * Choose, which ChatFriendship to update.
     */
    where: ChatFriendshipWhereUniqueInput
  }

  /**
   * ChatFriendship updateMany
   */
  export type ChatFriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatFriendships.
     */
    data: XOR<ChatFriendshipUpdateManyMutationInput, ChatFriendshipUncheckedUpdateManyInput>
    /**
     * Filter which ChatFriendships to update
     */
    where?: ChatFriendshipWhereInput
    /**
     * Limit how many ChatFriendships to update.
     */
    limit?: number
  }

  /**
   * ChatFriendship updateManyAndReturn
   */
  export type ChatFriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * The data used to update ChatFriendships.
     */
    data: XOR<ChatFriendshipUpdateManyMutationInput, ChatFriendshipUncheckedUpdateManyInput>
    /**
     * Filter which ChatFriendships to update
     */
    where?: ChatFriendshipWhereInput
    /**
     * Limit how many ChatFriendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatFriendship upsert
   */
  export type ChatFriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatFriendship to update in case it exists.
     */
    where: ChatFriendshipWhereUniqueInput
    /**
     * In case the ChatFriendship found by the `where` argument doesn't exist, create a new ChatFriendship with this data.
     */
    create: XOR<ChatFriendshipCreateInput, ChatFriendshipUncheckedCreateInput>
    /**
     * In case the ChatFriendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatFriendshipUpdateInput, ChatFriendshipUncheckedUpdateInput>
  }

  /**
   * ChatFriendship delete
   */
  export type ChatFriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
    /**
     * Filter which ChatFriendship to delete.
     */
    where: ChatFriendshipWhereUniqueInput
  }

  /**
   * ChatFriendship deleteMany
   */
  export type ChatFriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatFriendships to delete
     */
    where?: ChatFriendshipWhereInput
    /**
     * Limit how many ChatFriendships to delete.
     */
    limit?: number
  }

  /**
   * ChatFriendship without action
   */
  export type ChatFriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatFriendship
     */
    select?: ChatFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatFriendship
     */
    omit?: ChatFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatFriendshipInclude<ExtArgs> | null
  }


  /**
   * Model ChatConvo
   */

  export type AggregateChatConvo = {
    _count: ChatConvoCountAggregateOutputType | null
    _avg: ChatConvoAvgAggregateOutputType | null
    _sum: ChatConvoSumAggregateOutputType | null
    _min: ChatConvoMinAggregateOutputType | null
    _max: ChatConvoMaxAggregateOutputType | null
  }

  export type ChatConvoAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatConvoSumAggregateOutputType = {
    id: number | null
  }

  export type ChatConvoMinAggregateOutputType = {
    id: number | null
    convoName: string | null
    isGroup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatConvoMaxAggregateOutputType = {
    id: number | null
    convoName: string | null
    isGroup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatConvoCountAggregateOutputType = {
    id: number
    convoName: number
    isGroup: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatConvoAvgAggregateInputType = {
    id?: true
  }

  export type ChatConvoSumAggregateInputType = {
    id?: true
  }

  export type ChatConvoMinAggregateInputType = {
    id?: true
    convoName?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatConvoMaxAggregateInputType = {
    id?: true
    convoName?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatConvoCountAggregateInputType = {
    id?: true
    convoName?: true
    isGroup?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatConvoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatConvo to aggregate.
     */
    where?: ChatConvoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConvos to fetch.
     */
    orderBy?: ChatConvoOrderByWithRelationInput | ChatConvoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatConvoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConvos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConvos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatConvos
    **/
    _count?: true | ChatConvoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatConvoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatConvoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatConvoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatConvoMaxAggregateInputType
  }

  export type GetChatConvoAggregateType<T extends ChatConvoAggregateArgs> = {
        [P in keyof T & keyof AggregateChatConvo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatConvo[P]>
      : GetScalarType<T[P], AggregateChatConvo[P]>
  }




  export type ChatConvoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatConvoWhereInput
    orderBy?: ChatConvoOrderByWithAggregationInput | ChatConvoOrderByWithAggregationInput[]
    by: ChatConvoScalarFieldEnum[] | ChatConvoScalarFieldEnum
    having?: ChatConvoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatConvoCountAggregateInputType | true
    _avg?: ChatConvoAvgAggregateInputType
    _sum?: ChatConvoSumAggregateInputType
    _min?: ChatConvoMinAggregateInputType
    _max?: ChatConvoMaxAggregateInputType
  }

  export type ChatConvoGroupByOutputType = {
    id: number
    convoName: string | null
    isGroup: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatConvoCountAggregateOutputType | null
    _avg: ChatConvoAvgAggregateOutputType | null
    _sum: ChatConvoSumAggregateOutputType | null
    _min: ChatConvoMinAggregateOutputType | null
    _max: ChatConvoMaxAggregateOutputType | null
  }

  type GetChatConvoGroupByPayload<T extends ChatConvoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatConvoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatConvoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatConvoGroupByOutputType[P]>
            : GetScalarType<T[P], ChatConvoGroupByOutputType[P]>
        }
      >
    >


  export type ChatConvoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    convoName?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | ChatConvo$messagesArgs<ExtArgs>
    participants?: boolean | ChatConvo$participantsArgs<ExtArgs>
    _count?: boolean | ChatConvoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatConvo"]>

  export type ChatConvoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    convoName?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatConvo"]>

  export type ChatConvoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    convoName?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatConvo"]>

  export type ChatConvoSelectScalar = {
    id?: boolean
    convoName?: boolean
    isGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatConvoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "convoName" | "isGroup" | "createdAt" | "updatedAt", ExtArgs["result"]["chatConvo"]>
  export type ChatConvoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatConvo$messagesArgs<ExtArgs>
    participants?: boolean | ChatConvo$participantsArgs<ExtArgs>
    _count?: boolean | ChatConvoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatConvoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatConvoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatConvoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatConvo"
    objects: {
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      participants: Prisma.$ChatConvoParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      convoName: string | null
      isGroup: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatConvo"]>
    composites: {}
  }

  type ChatConvoGetPayload<S extends boolean | null | undefined | ChatConvoDefaultArgs> = $Result.GetResult<Prisma.$ChatConvoPayload, S>

  type ChatConvoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatConvoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatConvoCountAggregateInputType | true
    }

  export interface ChatConvoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatConvo'], meta: { name: 'ChatConvo' } }
    /**
     * Find zero or one ChatConvo that matches the filter.
     * @param {ChatConvoFindUniqueArgs} args - Arguments to find a ChatConvo
     * @example
     * // Get one ChatConvo
     * const chatConvo = await prisma.chatConvo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatConvoFindUniqueArgs>(args: SelectSubset<T, ChatConvoFindUniqueArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatConvo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatConvoFindUniqueOrThrowArgs} args - Arguments to find a ChatConvo
     * @example
     * // Get one ChatConvo
     * const chatConvo = await prisma.chatConvo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatConvoFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatConvoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatConvo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoFindFirstArgs} args - Arguments to find a ChatConvo
     * @example
     * // Get one ChatConvo
     * const chatConvo = await prisma.chatConvo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatConvoFindFirstArgs>(args?: SelectSubset<T, ChatConvoFindFirstArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatConvo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoFindFirstOrThrowArgs} args - Arguments to find a ChatConvo
     * @example
     * // Get one ChatConvo
     * const chatConvo = await prisma.chatConvo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatConvoFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatConvoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatConvos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatConvos
     * const chatConvos = await prisma.chatConvo.findMany()
     * 
     * // Get first 10 ChatConvos
     * const chatConvos = await prisma.chatConvo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatConvoWithIdOnly = await prisma.chatConvo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatConvoFindManyArgs>(args?: SelectSubset<T, ChatConvoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatConvo.
     * @param {ChatConvoCreateArgs} args - Arguments to create a ChatConvo.
     * @example
     * // Create one ChatConvo
     * const ChatConvo = await prisma.chatConvo.create({
     *   data: {
     *     // ... data to create a ChatConvo
     *   }
     * })
     * 
     */
    create<T extends ChatConvoCreateArgs>(args: SelectSubset<T, ChatConvoCreateArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatConvos.
     * @param {ChatConvoCreateManyArgs} args - Arguments to create many ChatConvos.
     * @example
     * // Create many ChatConvos
     * const chatConvo = await prisma.chatConvo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatConvoCreateManyArgs>(args?: SelectSubset<T, ChatConvoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatConvos and returns the data saved in the database.
     * @param {ChatConvoCreateManyAndReturnArgs} args - Arguments to create many ChatConvos.
     * @example
     * // Create many ChatConvos
     * const chatConvo = await prisma.chatConvo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatConvos and only return the `id`
     * const chatConvoWithIdOnly = await prisma.chatConvo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatConvoCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatConvoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatConvo.
     * @param {ChatConvoDeleteArgs} args - Arguments to delete one ChatConvo.
     * @example
     * // Delete one ChatConvo
     * const ChatConvo = await prisma.chatConvo.delete({
     *   where: {
     *     // ... filter to delete one ChatConvo
     *   }
     * })
     * 
     */
    delete<T extends ChatConvoDeleteArgs>(args: SelectSubset<T, ChatConvoDeleteArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatConvo.
     * @param {ChatConvoUpdateArgs} args - Arguments to update one ChatConvo.
     * @example
     * // Update one ChatConvo
     * const chatConvo = await prisma.chatConvo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatConvoUpdateArgs>(args: SelectSubset<T, ChatConvoUpdateArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatConvos.
     * @param {ChatConvoDeleteManyArgs} args - Arguments to filter ChatConvos to delete.
     * @example
     * // Delete a few ChatConvos
     * const { count } = await prisma.chatConvo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatConvoDeleteManyArgs>(args?: SelectSubset<T, ChatConvoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatConvos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatConvos
     * const chatConvo = await prisma.chatConvo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatConvoUpdateManyArgs>(args: SelectSubset<T, ChatConvoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatConvos and returns the data updated in the database.
     * @param {ChatConvoUpdateManyAndReturnArgs} args - Arguments to update many ChatConvos.
     * @example
     * // Update many ChatConvos
     * const chatConvo = await prisma.chatConvo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatConvos and only return the `id`
     * const chatConvoWithIdOnly = await prisma.chatConvo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatConvoUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatConvoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatConvo.
     * @param {ChatConvoUpsertArgs} args - Arguments to update or create a ChatConvo.
     * @example
     * // Update or create a ChatConvo
     * const chatConvo = await prisma.chatConvo.upsert({
     *   create: {
     *     // ... data to create a ChatConvo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatConvo we want to update
     *   }
     * })
     */
    upsert<T extends ChatConvoUpsertArgs>(args: SelectSubset<T, ChatConvoUpsertArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatConvos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoCountArgs} args - Arguments to filter ChatConvos to count.
     * @example
     * // Count the number of ChatConvos
     * const count = await prisma.chatConvo.count({
     *   where: {
     *     // ... the filter for the ChatConvos we want to count
     *   }
     * })
    **/
    count<T extends ChatConvoCountArgs>(
      args?: Subset<T, ChatConvoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatConvoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatConvo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatConvoAggregateArgs>(args: Subset<T, ChatConvoAggregateArgs>): Prisma.PrismaPromise<GetChatConvoAggregateType<T>>

    /**
     * Group by ChatConvo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoGroupByArgs} args - Group by arguments.
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
      T extends ChatConvoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatConvoGroupByArgs['orderBy'] }
        : { orderBy?: ChatConvoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatConvoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatConvoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatConvo model
   */
  readonly fields: ChatConvoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatConvo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatConvoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends ChatConvo$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatConvo$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends ChatConvo$participantsArgs<ExtArgs> = {}>(args?: Subset<T, ChatConvo$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatConvo model
   */
  interface ChatConvoFieldRefs {
    readonly id: FieldRef<"ChatConvo", 'Int'>
    readonly convoName: FieldRef<"ChatConvo", 'String'>
    readonly isGroup: FieldRef<"ChatConvo", 'Boolean'>
    readonly createdAt: FieldRef<"ChatConvo", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatConvo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatConvo findUnique
   */
  export type ChatConvoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvo to fetch.
     */
    where: ChatConvoWhereUniqueInput
  }

  /**
   * ChatConvo findUniqueOrThrow
   */
  export type ChatConvoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvo to fetch.
     */
    where: ChatConvoWhereUniqueInput
  }

  /**
   * ChatConvo findFirst
   */
  export type ChatConvoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvo to fetch.
     */
    where?: ChatConvoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConvos to fetch.
     */
    orderBy?: ChatConvoOrderByWithRelationInput | ChatConvoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatConvos.
     */
    cursor?: ChatConvoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConvos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConvos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatConvos.
     */
    distinct?: ChatConvoScalarFieldEnum | ChatConvoScalarFieldEnum[]
  }

  /**
   * ChatConvo findFirstOrThrow
   */
  export type ChatConvoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvo to fetch.
     */
    where?: ChatConvoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConvos to fetch.
     */
    orderBy?: ChatConvoOrderByWithRelationInput | ChatConvoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatConvos.
     */
    cursor?: ChatConvoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConvos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConvos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatConvos.
     */
    distinct?: ChatConvoScalarFieldEnum | ChatConvoScalarFieldEnum[]
  }

  /**
   * ChatConvo findMany
   */
  export type ChatConvoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvos to fetch.
     */
    where?: ChatConvoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConvos to fetch.
     */
    orderBy?: ChatConvoOrderByWithRelationInput | ChatConvoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatConvos.
     */
    cursor?: ChatConvoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConvos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConvos.
     */
    skip?: number
    distinct?: ChatConvoScalarFieldEnum | ChatConvoScalarFieldEnum[]
  }

  /**
   * ChatConvo create
   */
  export type ChatConvoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatConvo.
     */
    data: XOR<ChatConvoCreateInput, ChatConvoUncheckedCreateInput>
  }

  /**
   * ChatConvo createMany
   */
  export type ChatConvoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatConvos.
     */
    data: ChatConvoCreateManyInput | ChatConvoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatConvo createManyAndReturn
   */
  export type ChatConvoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * The data used to create many ChatConvos.
     */
    data: ChatConvoCreateManyInput | ChatConvoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatConvo update
   */
  export type ChatConvoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatConvo.
     */
    data: XOR<ChatConvoUpdateInput, ChatConvoUncheckedUpdateInput>
    /**
     * Choose, which ChatConvo to update.
     */
    where: ChatConvoWhereUniqueInput
  }

  /**
   * ChatConvo updateMany
   */
  export type ChatConvoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatConvos.
     */
    data: XOR<ChatConvoUpdateManyMutationInput, ChatConvoUncheckedUpdateManyInput>
    /**
     * Filter which ChatConvos to update
     */
    where?: ChatConvoWhereInput
    /**
     * Limit how many ChatConvos to update.
     */
    limit?: number
  }

  /**
   * ChatConvo updateManyAndReturn
   */
  export type ChatConvoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * The data used to update ChatConvos.
     */
    data: XOR<ChatConvoUpdateManyMutationInput, ChatConvoUncheckedUpdateManyInput>
    /**
     * Filter which ChatConvos to update
     */
    where?: ChatConvoWhereInput
    /**
     * Limit how many ChatConvos to update.
     */
    limit?: number
  }

  /**
   * ChatConvo upsert
   */
  export type ChatConvoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatConvo to update in case it exists.
     */
    where: ChatConvoWhereUniqueInput
    /**
     * In case the ChatConvo found by the `where` argument doesn't exist, create a new ChatConvo with this data.
     */
    create: XOR<ChatConvoCreateInput, ChatConvoUncheckedCreateInput>
    /**
     * In case the ChatConvo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatConvoUpdateInput, ChatConvoUncheckedUpdateInput>
  }

  /**
   * ChatConvo delete
   */
  export type ChatConvoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
    /**
     * Filter which ChatConvo to delete.
     */
    where: ChatConvoWhereUniqueInput
  }

  /**
   * ChatConvo deleteMany
   */
  export type ChatConvoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatConvos to delete
     */
    where?: ChatConvoWhereInput
    /**
     * Limit how many ChatConvos to delete.
     */
    limit?: number
  }

  /**
   * ChatConvo.messages
   */
  export type ChatConvo$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatConvo.participants
   */
  export type ChatConvo$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    where?: ChatConvoParticipantWhereInput
    orderBy?: ChatConvoParticipantOrderByWithRelationInput | ChatConvoParticipantOrderByWithRelationInput[]
    cursor?: ChatConvoParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatConvoParticipantScalarFieldEnum | ChatConvoParticipantScalarFieldEnum[]
  }

  /**
   * ChatConvo without action
   */
  export type ChatConvoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvo
     */
    select?: ChatConvoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvo
     */
    omit?: ChatConvoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoInclude<ExtArgs> | null
  }


  /**
   * Model ChatConvoParticipant
   */

  export type AggregateChatConvoParticipant = {
    _count: ChatConvoParticipantCountAggregateOutputType | null
    _avg: ChatConvoParticipantAvgAggregateOutputType | null
    _sum: ChatConvoParticipantSumAggregateOutputType | null
    _min: ChatConvoParticipantMinAggregateOutputType | null
    _max: ChatConvoParticipantMaxAggregateOutputType | null
  }

  export type ChatConvoParticipantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    conversationId: number | null
  }

  export type ChatConvoParticipantSumAggregateOutputType = {
    id: number | null
    userId: number | null
    conversationId: number | null
  }

  export type ChatConvoParticipantMinAggregateOutputType = {
    id: number | null
    userId: number | null
    conversationId: number | null
  }

  export type ChatConvoParticipantMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    conversationId: number | null
  }

  export type ChatConvoParticipantCountAggregateOutputType = {
    id: number
    userId: number
    conversationId: number
    _all: number
  }


  export type ChatConvoParticipantAvgAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
  }

  export type ChatConvoParticipantSumAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
  }

  export type ChatConvoParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
  }

  export type ChatConvoParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
  }

  export type ChatConvoParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
    _all?: true
  }

  export type ChatConvoParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatConvoParticipant to aggregate.
     */
    where?: ChatConvoParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConvoParticipants to fetch.
     */
    orderBy?: ChatConvoParticipantOrderByWithRelationInput | ChatConvoParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatConvoParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConvoParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConvoParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatConvoParticipants
    **/
    _count?: true | ChatConvoParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatConvoParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatConvoParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatConvoParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatConvoParticipantMaxAggregateInputType
  }

  export type GetChatConvoParticipantAggregateType<T extends ChatConvoParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateChatConvoParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatConvoParticipant[P]>
      : GetScalarType<T[P], AggregateChatConvoParticipant[P]>
  }




  export type ChatConvoParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatConvoParticipantWhereInput
    orderBy?: ChatConvoParticipantOrderByWithAggregationInput | ChatConvoParticipantOrderByWithAggregationInput[]
    by: ChatConvoParticipantScalarFieldEnum[] | ChatConvoParticipantScalarFieldEnum
    having?: ChatConvoParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatConvoParticipantCountAggregateInputType | true
    _avg?: ChatConvoParticipantAvgAggregateInputType
    _sum?: ChatConvoParticipantSumAggregateInputType
    _min?: ChatConvoParticipantMinAggregateInputType
    _max?: ChatConvoParticipantMaxAggregateInputType
  }

  export type ChatConvoParticipantGroupByOutputType = {
    id: number
    userId: number
    conversationId: number
    _count: ChatConvoParticipantCountAggregateOutputType | null
    _avg: ChatConvoParticipantAvgAggregateOutputType | null
    _sum: ChatConvoParticipantSumAggregateOutputType | null
    _min: ChatConvoParticipantMinAggregateOutputType | null
    _max: ChatConvoParticipantMaxAggregateOutputType | null
  }

  type GetChatConvoParticipantGroupByPayload<T extends ChatConvoParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatConvoParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatConvoParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatConvoParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ChatConvoParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ChatConvoParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatConvoParticipant"]>

  export type ChatConvoParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatConvoParticipant"]>

  export type ChatConvoParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatConvoParticipant"]>

  export type ChatConvoParticipantSelectScalar = {
    id?: boolean
    userId?: boolean
    conversationId?: boolean
  }

  export type ChatConvoParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "conversationId", ExtArgs["result"]["chatConvoParticipant"]>
  export type ChatConvoParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
  }
  export type ChatConvoParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
  }
  export type ChatConvoParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChatUserDefaultArgs<ExtArgs>
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
  }

  export type $ChatConvoParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatConvoParticipant"
    objects: {
      user: Prisma.$ChatUserPayload<ExtArgs>
      conversation: Prisma.$ChatConvoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      conversationId: number
    }, ExtArgs["result"]["chatConvoParticipant"]>
    composites: {}
  }

  type ChatConvoParticipantGetPayload<S extends boolean | null | undefined | ChatConvoParticipantDefaultArgs> = $Result.GetResult<Prisma.$ChatConvoParticipantPayload, S>

  type ChatConvoParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatConvoParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatConvoParticipantCountAggregateInputType | true
    }

  export interface ChatConvoParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatConvoParticipant'], meta: { name: 'ChatConvoParticipant' } }
    /**
     * Find zero or one ChatConvoParticipant that matches the filter.
     * @param {ChatConvoParticipantFindUniqueArgs} args - Arguments to find a ChatConvoParticipant
     * @example
     * // Get one ChatConvoParticipant
     * const chatConvoParticipant = await prisma.chatConvoParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatConvoParticipantFindUniqueArgs>(args: SelectSubset<T, ChatConvoParticipantFindUniqueArgs<ExtArgs>>): Prisma__ChatConvoParticipantClient<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatConvoParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatConvoParticipantFindUniqueOrThrowArgs} args - Arguments to find a ChatConvoParticipant
     * @example
     * // Get one ChatConvoParticipant
     * const chatConvoParticipant = await prisma.chatConvoParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatConvoParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatConvoParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatConvoParticipantClient<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatConvoParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoParticipantFindFirstArgs} args - Arguments to find a ChatConvoParticipant
     * @example
     * // Get one ChatConvoParticipant
     * const chatConvoParticipant = await prisma.chatConvoParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatConvoParticipantFindFirstArgs>(args?: SelectSubset<T, ChatConvoParticipantFindFirstArgs<ExtArgs>>): Prisma__ChatConvoParticipantClient<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatConvoParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoParticipantFindFirstOrThrowArgs} args - Arguments to find a ChatConvoParticipant
     * @example
     * // Get one ChatConvoParticipant
     * const chatConvoParticipant = await prisma.chatConvoParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatConvoParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatConvoParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatConvoParticipantClient<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatConvoParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatConvoParticipants
     * const chatConvoParticipants = await prisma.chatConvoParticipant.findMany()
     * 
     * // Get first 10 ChatConvoParticipants
     * const chatConvoParticipants = await prisma.chatConvoParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatConvoParticipantWithIdOnly = await prisma.chatConvoParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatConvoParticipantFindManyArgs>(args?: SelectSubset<T, ChatConvoParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatConvoParticipant.
     * @param {ChatConvoParticipantCreateArgs} args - Arguments to create a ChatConvoParticipant.
     * @example
     * // Create one ChatConvoParticipant
     * const ChatConvoParticipant = await prisma.chatConvoParticipant.create({
     *   data: {
     *     // ... data to create a ChatConvoParticipant
     *   }
     * })
     * 
     */
    create<T extends ChatConvoParticipantCreateArgs>(args: SelectSubset<T, ChatConvoParticipantCreateArgs<ExtArgs>>): Prisma__ChatConvoParticipantClient<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatConvoParticipants.
     * @param {ChatConvoParticipantCreateManyArgs} args - Arguments to create many ChatConvoParticipants.
     * @example
     * // Create many ChatConvoParticipants
     * const chatConvoParticipant = await prisma.chatConvoParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatConvoParticipantCreateManyArgs>(args?: SelectSubset<T, ChatConvoParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatConvoParticipants and returns the data saved in the database.
     * @param {ChatConvoParticipantCreateManyAndReturnArgs} args - Arguments to create many ChatConvoParticipants.
     * @example
     * // Create many ChatConvoParticipants
     * const chatConvoParticipant = await prisma.chatConvoParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatConvoParticipants and only return the `id`
     * const chatConvoParticipantWithIdOnly = await prisma.chatConvoParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatConvoParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatConvoParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatConvoParticipant.
     * @param {ChatConvoParticipantDeleteArgs} args - Arguments to delete one ChatConvoParticipant.
     * @example
     * // Delete one ChatConvoParticipant
     * const ChatConvoParticipant = await prisma.chatConvoParticipant.delete({
     *   where: {
     *     // ... filter to delete one ChatConvoParticipant
     *   }
     * })
     * 
     */
    delete<T extends ChatConvoParticipantDeleteArgs>(args: SelectSubset<T, ChatConvoParticipantDeleteArgs<ExtArgs>>): Prisma__ChatConvoParticipantClient<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatConvoParticipant.
     * @param {ChatConvoParticipantUpdateArgs} args - Arguments to update one ChatConvoParticipant.
     * @example
     * // Update one ChatConvoParticipant
     * const chatConvoParticipant = await prisma.chatConvoParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatConvoParticipantUpdateArgs>(args: SelectSubset<T, ChatConvoParticipantUpdateArgs<ExtArgs>>): Prisma__ChatConvoParticipantClient<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatConvoParticipants.
     * @param {ChatConvoParticipantDeleteManyArgs} args - Arguments to filter ChatConvoParticipants to delete.
     * @example
     * // Delete a few ChatConvoParticipants
     * const { count } = await prisma.chatConvoParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatConvoParticipantDeleteManyArgs>(args?: SelectSubset<T, ChatConvoParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatConvoParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatConvoParticipants
     * const chatConvoParticipant = await prisma.chatConvoParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatConvoParticipantUpdateManyArgs>(args: SelectSubset<T, ChatConvoParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatConvoParticipants and returns the data updated in the database.
     * @param {ChatConvoParticipantUpdateManyAndReturnArgs} args - Arguments to update many ChatConvoParticipants.
     * @example
     * // Update many ChatConvoParticipants
     * const chatConvoParticipant = await prisma.chatConvoParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatConvoParticipants and only return the `id`
     * const chatConvoParticipantWithIdOnly = await prisma.chatConvoParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatConvoParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatConvoParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatConvoParticipant.
     * @param {ChatConvoParticipantUpsertArgs} args - Arguments to update or create a ChatConvoParticipant.
     * @example
     * // Update or create a ChatConvoParticipant
     * const chatConvoParticipant = await prisma.chatConvoParticipant.upsert({
     *   create: {
     *     // ... data to create a ChatConvoParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatConvoParticipant we want to update
     *   }
     * })
     */
    upsert<T extends ChatConvoParticipantUpsertArgs>(args: SelectSubset<T, ChatConvoParticipantUpsertArgs<ExtArgs>>): Prisma__ChatConvoParticipantClient<$Result.GetResult<Prisma.$ChatConvoParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatConvoParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoParticipantCountArgs} args - Arguments to filter ChatConvoParticipants to count.
     * @example
     * // Count the number of ChatConvoParticipants
     * const count = await prisma.chatConvoParticipant.count({
     *   where: {
     *     // ... the filter for the ChatConvoParticipants we want to count
     *   }
     * })
    **/
    count<T extends ChatConvoParticipantCountArgs>(
      args?: Subset<T, ChatConvoParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatConvoParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatConvoParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatConvoParticipantAggregateArgs>(args: Subset<T, ChatConvoParticipantAggregateArgs>): Prisma.PrismaPromise<GetChatConvoParticipantAggregateType<T>>

    /**
     * Group by ChatConvoParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatConvoParticipantGroupByArgs} args - Group by arguments.
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
      T extends ChatConvoParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatConvoParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ChatConvoParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatConvoParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatConvoParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatConvoParticipant model
   */
  readonly fields: ChatConvoParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatConvoParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatConvoParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ChatUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserDefaultArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends ChatConvoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatConvoDefaultArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatConvoParticipant model
   */
  interface ChatConvoParticipantFieldRefs {
    readonly id: FieldRef<"ChatConvoParticipant", 'Int'>
    readonly userId: FieldRef<"ChatConvoParticipant", 'Int'>
    readonly conversationId: FieldRef<"ChatConvoParticipant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatConvoParticipant findUnique
   */
  export type ChatConvoParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvoParticipant to fetch.
     */
    where: ChatConvoParticipantWhereUniqueInput
  }

  /**
   * ChatConvoParticipant findUniqueOrThrow
   */
  export type ChatConvoParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvoParticipant to fetch.
     */
    where: ChatConvoParticipantWhereUniqueInput
  }

  /**
   * ChatConvoParticipant findFirst
   */
  export type ChatConvoParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvoParticipant to fetch.
     */
    where?: ChatConvoParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConvoParticipants to fetch.
     */
    orderBy?: ChatConvoParticipantOrderByWithRelationInput | ChatConvoParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatConvoParticipants.
     */
    cursor?: ChatConvoParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConvoParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConvoParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatConvoParticipants.
     */
    distinct?: ChatConvoParticipantScalarFieldEnum | ChatConvoParticipantScalarFieldEnum[]
  }

  /**
   * ChatConvoParticipant findFirstOrThrow
   */
  export type ChatConvoParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvoParticipant to fetch.
     */
    where?: ChatConvoParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConvoParticipants to fetch.
     */
    orderBy?: ChatConvoParticipantOrderByWithRelationInput | ChatConvoParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatConvoParticipants.
     */
    cursor?: ChatConvoParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConvoParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConvoParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatConvoParticipants.
     */
    distinct?: ChatConvoParticipantScalarFieldEnum | ChatConvoParticipantScalarFieldEnum[]
  }

  /**
   * ChatConvoParticipant findMany
   */
  export type ChatConvoParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ChatConvoParticipants to fetch.
     */
    where?: ChatConvoParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatConvoParticipants to fetch.
     */
    orderBy?: ChatConvoParticipantOrderByWithRelationInput | ChatConvoParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatConvoParticipants.
     */
    cursor?: ChatConvoParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatConvoParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatConvoParticipants.
     */
    skip?: number
    distinct?: ChatConvoParticipantScalarFieldEnum | ChatConvoParticipantScalarFieldEnum[]
  }

  /**
   * ChatConvoParticipant create
   */
  export type ChatConvoParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatConvoParticipant.
     */
    data: XOR<ChatConvoParticipantCreateInput, ChatConvoParticipantUncheckedCreateInput>
  }

  /**
   * ChatConvoParticipant createMany
   */
  export type ChatConvoParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatConvoParticipants.
     */
    data: ChatConvoParticipantCreateManyInput | ChatConvoParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatConvoParticipant createManyAndReturn
   */
  export type ChatConvoParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many ChatConvoParticipants.
     */
    data: ChatConvoParticipantCreateManyInput | ChatConvoParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatConvoParticipant update
   */
  export type ChatConvoParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatConvoParticipant.
     */
    data: XOR<ChatConvoParticipantUpdateInput, ChatConvoParticipantUncheckedUpdateInput>
    /**
     * Choose, which ChatConvoParticipant to update.
     */
    where: ChatConvoParticipantWhereUniqueInput
  }

  /**
   * ChatConvoParticipant updateMany
   */
  export type ChatConvoParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatConvoParticipants.
     */
    data: XOR<ChatConvoParticipantUpdateManyMutationInput, ChatConvoParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ChatConvoParticipants to update
     */
    where?: ChatConvoParticipantWhereInput
    /**
     * Limit how many ChatConvoParticipants to update.
     */
    limit?: number
  }

  /**
   * ChatConvoParticipant updateManyAndReturn
   */
  export type ChatConvoParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * The data used to update ChatConvoParticipants.
     */
    data: XOR<ChatConvoParticipantUpdateManyMutationInput, ChatConvoParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ChatConvoParticipants to update
     */
    where?: ChatConvoParticipantWhereInput
    /**
     * Limit how many ChatConvoParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatConvoParticipant upsert
   */
  export type ChatConvoParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatConvoParticipant to update in case it exists.
     */
    where: ChatConvoParticipantWhereUniqueInput
    /**
     * In case the ChatConvoParticipant found by the `where` argument doesn't exist, create a new ChatConvoParticipant with this data.
     */
    create: XOR<ChatConvoParticipantCreateInput, ChatConvoParticipantUncheckedCreateInput>
    /**
     * In case the ChatConvoParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatConvoParticipantUpdateInput, ChatConvoParticipantUncheckedUpdateInput>
  }

  /**
   * ChatConvoParticipant delete
   */
  export type ChatConvoParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
    /**
     * Filter which ChatConvoParticipant to delete.
     */
    where: ChatConvoParticipantWhereUniqueInput
  }

  /**
   * ChatConvoParticipant deleteMany
   */
  export type ChatConvoParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatConvoParticipants to delete
     */
    where?: ChatConvoParticipantWhereInput
    /**
     * Limit how many ChatConvoParticipants to delete.
     */
    limit?: number
  }

  /**
   * ChatConvoParticipant without action
   */
  export type ChatConvoParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatConvoParticipant
     */
    select?: ChatConvoParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatConvoParticipant
     */
    omit?: ChatConvoParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatConvoParticipantInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
    conversationId: number | null
    authorId: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
    conversationId: number | null
    authorId: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    body: string | null
    conversationId: number | null
    authorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    body: string | null
    conversationId: number | null
    authorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    body: number
    conversationId: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
    conversationId?: true
    authorId?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
    conversationId?: true
    authorId?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    body?: true
    conversationId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    body?: true
    conversationId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    body?: true
    conversationId?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    body: string
    conversationId: number
    authorId: number
    createdAt: Date
    updatedAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    conversationId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
    author?: boolean | ChatUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    conversationId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
    author?: boolean | ChatUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    conversationId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
    author?: boolean | ChatUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    body?: boolean
    conversationId?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "conversationId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
    author?: boolean | ChatUserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
    author?: boolean | ChatUserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ChatConvoDefaultArgs<ExtArgs>
    author?: boolean | ChatUserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      conversation: Prisma.$ChatConvoPayload<ExtArgs>
      author: Prisma.$ChatUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      body: string
      conversationId: number
      authorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ChatConvoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatConvoDefaultArgs<ExtArgs>>): Prisma__ChatConvoClient<$Result.GetResult<Prisma.$ChatConvoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends ChatUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatUserDefaultArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'Int'>
    readonly body: FieldRef<"ChatMessage", 'String'>
    readonly conversationId: FieldRef<"ChatMessage", 'Int'>
    readonly authorId: FieldRef<"ChatMessage", 'Int'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
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


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    bio: 'bio',
    image: 'image',
    token: 'token',
    role: 'role'
  };

  export type ChatUserScalarFieldEnum = (typeof ChatUserScalarFieldEnum)[keyof typeof ChatUserScalarFieldEnum]


  export const ChatFriendshipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt'
  };

  export type ChatFriendshipScalarFieldEnum = (typeof ChatFriendshipScalarFieldEnum)[keyof typeof ChatFriendshipScalarFieldEnum]


  export const ChatConvoScalarFieldEnum: {
    id: 'id',
    convoName: 'convoName',
    isGroup: 'isGroup',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatConvoScalarFieldEnum = (typeof ChatConvoScalarFieldEnum)[keyof typeof ChatConvoScalarFieldEnum]


  export const ChatConvoParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    conversationId: 'conversationId'
  };

  export type ChatConvoParticipantScalarFieldEnum = (typeof ChatConvoParticipantScalarFieldEnum)[keyof typeof ChatConvoParticipantScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    body: 'body',
    conversationId: 'conversationId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ChatRole'
   */
  export type EnumChatRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatRole'>
    


  /**
   * Reference to a field of type 'ChatRole[]'
   */
  export type ListEnumChatRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    sid?: StringFilter<"ChatSession"> | string
    data?: StringFilter<"ChatSession"> | string
    expiresAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    data?: StringFilter<"ChatSession"> | string
    expiresAt?: DateTimeFilter<"ChatSession"> | Date | string
  }, "id" | "sid">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    sid?: StringWithAggregatesFilter<"ChatSession"> | string
    data?: StringWithAggregatesFilter<"ChatSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatUserWhereInput = {
    AND?: ChatUserWhereInput | ChatUserWhereInput[]
    OR?: ChatUserWhereInput[]
    NOT?: ChatUserWhereInput | ChatUserWhereInput[]
    id?: IntFilter<"ChatUser"> | number
    name?: StringFilter<"ChatUser"> | string
    email?: StringFilter<"ChatUser"> | string
    password?: StringFilter<"ChatUser"> | string
    bio?: StringNullableFilter<"ChatUser"> | string | null
    image?: StringNullableFilter<"ChatUser"> | string | null
    token?: StringNullableFilter<"ChatUser"> | string | null
    role?: EnumChatRoleFilter<"ChatUser"> | $Enums.ChatRole
    messages?: ChatMessageListRelationFilter
    conversations?: ChatConvoParticipantListRelationFilter
    friends?: ChatFriendshipListRelationFilter
    friendOf?: ChatFriendshipListRelationFilter
  }

  export type ChatUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    role?: SortOrder
    messages?: ChatMessageOrderByRelationAggregateInput
    conversations?: ChatConvoParticipantOrderByRelationAggregateInput
    friends?: ChatFriendshipOrderByRelationAggregateInput
    friendOf?: ChatFriendshipOrderByRelationAggregateInput
  }

  export type ChatUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ChatUserWhereInput | ChatUserWhereInput[]
    OR?: ChatUserWhereInput[]
    NOT?: ChatUserWhereInput | ChatUserWhereInput[]
    name?: StringFilter<"ChatUser"> | string
    password?: StringFilter<"ChatUser"> | string
    bio?: StringNullableFilter<"ChatUser"> | string | null
    image?: StringNullableFilter<"ChatUser"> | string | null
    token?: StringNullableFilter<"ChatUser"> | string | null
    role?: EnumChatRoleFilter<"ChatUser"> | $Enums.ChatRole
    messages?: ChatMessageListRelationFilter
    conversations?: ChatConvoParticipantListRelationFilter
    friends?: ChatFriendshipListRelationFilter
    friendOf?: ChatFriendshipListRelationFilter
  }, "id" | "email">

  export type ChatUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: ChatUserCountOrderByAggregateInput
    _avg?: ChatUserAvgOrderByAggregateInput
    _max?: ChatUserMaxOrderByAggregateInput
    _min?: ChatUserMinOrderByAggregateInput
    _sum?: ChatUserSumOrderByAggregateInput
  }

  export type ChatUserScalarWhereWithAggregatesInput = {
    AND?: ChatUserScalarWhereWithAggregatesInput | ChatUserScalarWhereWithAggregatesInput[]
    OR?: ChatUserScalarWhereWithAggregatesInput[]
    NOT?: ChatUserScalarWhereWithAggregatesInput | ChatUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatUser"> | number
    name?: StringWithAggregatesFilter<"ChatUser"> | string
    email?: StringWithAggregatesFilter<"ChatUser"> | string
    password?: StringWithAggregatesFilter<"ChatUser"> | string
    bio?: StringNullableWithAggregatesFilter<"ChatUser"> | string | null
    image?: StringNullableWithAggregatesFilter<"ChatUser"> | string | null
    token?: StringNullableWithAggregatesFilter<"ChatUser"> | string | null
    role?: EnumChatRoleWithAggregatesFilter<"ChatUser"> | $Enums.ChatRole
  }

  export type ChatFriendshipWhereInput = {
    AND?: ChatFriendshipWhereInput | ChatFriendshipWhereInput[]
    OR?: ChatFriendshipWhereInput[]
    NOT?: ChatFriendshipWhereInput | ChatFriendshipWhereInput[]
    id?: IntFilter<"ChatFriendship"> | number
    userId?: IntFilter<"ChatFriendship"> | number
    friendId?: IntFilter<"ChatFriendship"> | number
    createdAt?: DateTimeFilter<"ChatFriendship"> | Date | string
    user?: XOR<ChatUserScalarRelationFilter, ChatUserWhereInput>
    friend?: XOR<ChatUserScalarRelationFilter, ChatUserWhereInput>
  }

  export type ChatFriendshipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    user?: ChatUserOrderByWithRelationInput
    friend?: ChatUserOrderByWithRelationInput
  }

  export type ChatFriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_friendId?: ChatFriendshipUserIdFriendIdCompoundUniqueInput
    AND?: ChatFriendshipWhereInput | ChatFriendshipWhereInput[]
    OR?: ChatFriendshipWhereInput[]
    NOT?: ChatFriendshipWhereInput | ChatFriendshipWhereInput[]
    userId?: IntFilter<"ChatFriendship"> | number
    friendId?: IntFilter<"ChatFriendship"> | number
    createdAt?: DateTimeFilter<"ChatFriendship"> | Date | string
    user?: XOR<ChatUserScalarRelationFilter, ChatUserWhereInput>
    friend?: XOR<ChatUserScalarRelationFilter, ChatUserWhereInput>
  }, "id" | "userId_friendId">

  export type ChatFriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    _count?: ChatFriendshipCountOrderByAggregateInput
    _avg?: ChatFriendshipAvgOrderByAggregateInput
    _max?: ChatFriendshipMaxOrderByAggregateInput
    _min?: ChatFriendshipMinOrderByAggregateInput
    _sum?: ChatFriendshipSumOrderByAggregateInput
  }

  export type ChatFriendshipScalarWhereWithAggregatesInput = {
    AND?: ChatFriendshipScalarWhereWithAggregatesInput | ChatFriendshipScalarWhereWithAggregatesInput[]
    OR?: ChatFriendshipScalarWhereWithAggregatesInput[]
    NOT?: ChatFriendshipScalarWhereWithAggregatesInput | ChatFriendshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatFriendship"> | number
    userId?: IntWithAggregatesFilter<"ChatFriendship"> | number
    friendId?: IntWithAggregatesFilter<"ChatFriendship"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ChatFriendship"> | Date | string
  }

  export type ChatConvoWhereInput = {
    AND?: ChatConvoWhereInput | ChatConvoWhereInput[]
    OR?: ChatConvoWhereInput[]
    NOT?: ChatConvoWhereInput | ChatConvoWhereInput[]
    id?: IntFilter<"ChatConvo"> | number
    convoName?: StringNullableFilter<"ChatConvo"> | string | null
    isGroup?: BoolFilter<"ChatConvo"> | boolean
    createdAt?: DateTimeFilter<"ChatConvo"> | Date | string
    updatedAt?: DateTimeFilter<"ChatConvo"> | Date | string
    messages?: ChatMessageListRelationFilter
    participants?: ChatConvoParticipantListRelationFilter
  }

  export type ChatConvoOrderByWithRelationInput = {
    id?: SortOrder
    convoName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: ChatMessageOrderByRelationAggregateInput
    participants?: ChatConvoParticipantOrderByRelationAggregateInput
  }

  export type ChatConvoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatConvoWhereInput | ChatConvoWhereInput[]
    OR?: ChatConvoWhereInput[]
    NOT?: ChatConvoWhereInput | ChatConvoWhereInput[]
    convoName?: StringNullableFilter<"ChatConvo"> | string | null
    isGroup?: BoolFilter<"ChatConvo"> | boolean
    createdAt?: DateTimeFilter<"ChatConvo"> | Date | string
    updatedAt?: DateTimeFilter<"ChatConvo"> | Date | string
    messages?: ChatMessageListRelationFilter
    participants?: ChatConvoParticipantListRelationFilter
  }, "id">

  export type ChatConvoOrderByWithAggregationInput = {
    id?: SortOrder
    convoName?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatConvoCountOrderByAggregateInput
    _avg?: ChatConvoAvgOrderByAggregateInput
    _max?: ChatConvoMaxOrderByAggregateInput
    _min?: ChatConvoMinOrderByAggregateInput
    _sum?: ChatConvoSumOrderByAggregateInput
  }

  export type ChatConvoScalarWhereWithAggregatesInput = {
    AND?: ChatConvoScalarWhereWithAggregatesInput | ChatConvoScalarWhereWithAggregatesInput[]
    OR?: ChatConvoScalarWhereWithAggregatesInput[]
    NOT?: ChatConvoScalarWhereWithAggregatesInput | ChatConvoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatConvo"> | number
    convoName?: StringNullableWithAggregatesFilter<"ChatConvo"> | string | null
    isGroup?: BoolWithAggregatesFilter<"ChatConvo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatConvo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatConvo"> | Date | string
  }

  export type ChatConvoParticipantWhereInput = {
    AND?: ChatConvoParticipantWhereInput | ChatConvoParticipantWhereInput[]
    OR?: ChatConvoParticipantWhereInput[]
    NOT?: ChatConvoParticipantWhereInput | ChatConvoParticipantWhereInput[]
    id?: IntFilter<"ChatConvoParticipant"> | number
    userId?: IntFilter<"ChatConvoParticipant"> | number
    conversationId?: IntFilter<"ChatConvoParticipant"> | number
    user?: XOR<ChatUserScalarRelationFilter, ChatUserWhereInput>
    conversation?: XOR<ChatConvoScalarRelationFilter, ChatConvoWhereInput>
  }

  export type ChatConvoParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    user?: ChatUserOrderByWithRelationInput
    conversation?: ChatConvoOrderByWithRelationInput
  }

  export type ChatConvoParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_conversationId?: ChatConvoParticipantUserIdConversationIdCompoundUniqueInput
    AND?: ChatConvoParticipantWhereInput | ChatConvoParticipantWhereInput[]
    OR?: ChatConvoParticipantWhereInput[]
    NOT?: ChatConvoParticipantWhereInput | ChatConvoParticipantWhereInput[]
    userId?: IntFilter<"ChatConvoParticipant"> | number
    conversationId?: IntFilter<"ChatConvoParticipant"> | number
    user?: XOR<ChatUserScalarRelationFilter, ChatUserWhereInput>
    conversation?: XOR<ChatConvoScalarRelationFilter, ChatConvoWhereInput>
  }, "id" | "userId_conversationId">

  export type ChatConvoParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    _count?: ChatConvoParticipantCountOrderByAggregateInput
    _avg?: ChatConvoParticipantAvgOrderByAggregateInput
    _max?: ChatConvoParticipantMaxOrderByAggregateInput
    _min?: ChatConvoParticipantMinOrderByAggregateInput
    _sum?: ChatConvoParticipantSumOrderByAggregateInput
  }

  export type ChatConvoParticipantScalarWhereWithAggregatesInput = {
    AND?: ChatConvoParticipantScalarWhereWithAggregatesInput | ChatConvoParticipantScalarWhereWithAggregatesInput[]
    OR?: ChatConvoParticipantScalarWhereWithAggregatesInput[]
    NOT?: ChatConvoParticipantScalarWhereWithAggregatesInput | ChatConvoParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatConvoParticipant"> | number
    userId?: IntWithAggregatesFilter<"ChatConvoParticipant"> | number
    conversationId?: IntWithAggregatesFilter<"ChatConvoParticipant"> | number
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    body?: StringFilter<"ChatMessage"> | string
    conversationId?: IntFilter<"ChatMessage"> | number
    authorId?: IntFilter<"ChatMessage"> | number
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    conversation?: XOR<ChatConvoScalarRelationFilter, ChatConvoWhereInput>
    author?: XOR<ChatUserScalarRelationFilter, ChatUserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    conversationId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversation?: ChatConvoOrderByWithRelationInput
    author?: ChatUserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    body?: StringFilter<"ChatMessage"> | string
    conversationId?: IntFilter<"ChatMessage"> | number
    authorId?: IntFilter<"ChatMessage"> | number
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    conversation?: XOR<ChatConvoScalarRelationFilter, ChatConvoWhereInput>
    author?: XOR<ChatUserScalarRelationFilter, ChatUserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    conversationId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessage"> | number
    body?: StringWithAggregatesFilter<"ChatMessage"> | string
    conversationId?: IntWithAggregatesFilter<"ChatMessage"> | number
    authorId?: IntWithAggregatesFilter<"ChatMessage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ChatSessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type ChatSessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserCreateInput = {
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    messages?: ChatMessageCreateNestedManyWithoutAuthorInput
    conversations?: ChatConvoParticipantCreateNestedManyWithoutUserInput
    friends?: ChatFriendshipCreateNestedManyWithoutUserInput
    friendOf?: ChatFriendshipCreateNestedManyWithoutFriendInput
  }

  export type ChatUserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    messages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    conversations?: ChatConvoParticipantUncheckedCreateNestedManyWithoutUserInput
    friends?: ChatFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: ChatFriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ChatUserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    messages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    conversations?: ChatConvoParticipantUpdateManyWithoutUserNestedInput
    friends?: ChatFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: ChatFriendshipUpdateManyWithoutFriendNestedInput
  }

  export type ChatUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    messages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    conversations?: ChatConvoParticipantUncheckedUpdateManyWithoutUserNestedInput
    friends?: ChatFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: ChatFriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ChatUserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
  }

  export type ChatUserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
  }

  export type ChatUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
  }

  export type ChatFriendshipCreateInput = {
    createdAt?: Date | string
    user: ChatUserCreateNestedOneWithoutFriendsInput
    friend: ChatUserCreateNestedOneWithoutFriendOfInput
  }

  export type ChatFriendshipUncheckedCreateInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
  }

  export type ChatFriendshipUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ChatUserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: ChatUserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type ChatFriendshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatFriendshipCreateManyInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
  }

  export type ChatFriendshipUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatFriendshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatConvoCreateInput = {
    convoName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutConversationInput
    participants?: ChatConvoParticipantCreateNestedManyWithoutConversationInput
  }

  export type ChatConvoUncheckedCreateInput = {
    id?: number
    convoName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutConversationInput
    participants?: ChatConvoParticipantUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ChatConvoUpdateInput = {
    convoName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutConversationNestedInput
    participants?: ChatConvoParticipantUpdateManyWithoutConversationNestedInput
  }

  export type ChatConvoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    convoName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutConversationNestedInput
    participants?: ChatConvoParticipantUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ChatConvoCreateManyInput = {
    id?: number
    convoName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatConvoUpdateManyMutationInput = {
    convoName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatConvoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    convoName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatConvoParticipantCreateInput = {
    user: ChatUserCreateNestedOneWithoutConversationsInput
    conversation: ChatConvoCreateNestedOneWithoutParticipantsInput
  }

  export type ChatConvoParticipantUncheckedCreateInput = {
    id?: number
    userId: number
    conversationId: number
  }

  export type ChatConvoParticipantUpdateInput = {
    user?: ChatUserUpdateOneRequiredWithoutConversationsNestedInput
    conversation?: ChatConvoUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ChatConvoParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatConvoParticipantCreateManyInput = {
    id?: number
    userId: number
    conversationId: number
  }

  export type ChatConvoParticipantUpdateManyMutationInput = {

  }

  export type ChatConvoParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatMessageCreateInput = {
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ChatConvoCreateNestedOneWithoutMessagesInput
    author: ChatUserCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: number
    body: string
    conversationId: number
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ChatConvoUpdateOneRequiredWithoutMessagesNestedInput
    author?: ChatUserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    conversationId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: number
    body: string
    conversationId: number
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    conversationId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
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

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
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

  export type EnumChatRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleFilter<$PrismaModel> | $Enums.ChatRole
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatConvoParticipantListRelationFilter = {
    every?: ChatConvoParticipantWhereInput
    some?: ChatConvoParticipantWhereInput
    none?: ChatConvoParticipantWhereInput
  }

  export type ChatFriendshipListRelationFilter = {
    every?: ChatFriendshipWhereInput
    some?: ChatFriendshipWhereInput
    none?: ChatFriendshipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatConvoParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatFriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    token?: SortOrder
    role?: SortOrder
  }

  export type ChatUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    token?: SortOrder
    role?: SortOrder
  }

  export type ChatUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    token?: SortOrder
    role?: SortOrder
  }

  export type ChatUserSumOrderByAggregateInput = {
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

  export type EnumChatRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChatRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatRoleFilter<$PrismaModel>
    _max?: NestedEnumChatRoleFilter<$PrismaModel>
  }

  export type ChatUserScalarRelationFilter = {
    is?: ChatUserWhereInput
    isNot?: ChatUserWhereInput
  }

  export type ChatFriendshipUserIdFriendIdCompoundUniqueInput = {
    userId: number
    friendId: number
  }

  export type ChatFriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatFriendshipAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type ChatFriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatFriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatFriendshipSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatConvoCountOrderByAggregateInput = {
    id?: SortOrder
    convoName?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatConvoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatConvoMaxOrderByAggregateInput = {
    id?: SortOrder
    convoName?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatConvoMinOrderByAggregateInput = {
    id?: SortOrder
    convoName?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatConvoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChatConvoScalarRelationFilter = {
    is?: ChatConvoWhereInput
    isNot?: ChatConvoWhereInput
  }

  export type ChatConvoParticipantUserIdConversationIdCompoundUniqueInput = {
    userId: number
    conversationId: number
  }

  export type ChatConvoParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ChatConvoParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ChatConvoParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ChatConvoParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ChatConvoParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    conversationId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    authorId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    conversationId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    conversationId?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    authorId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatMessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatConvoParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatConvoParticipantCreateWithoutUserInput, ChatConvoParticipantUncheckedCreateWithoutUserInput> | ChatConvoParticipantCreateWithoutUserInput[] | ChatConvoParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatConvoParticipantCreateOrConnectWithoutUserInput | ChatConvoParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ChatConvoParticipantCreateManyUserInputEnvelope
    connect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
  }

  export type ChatFriendshipCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatFriendshipCreateWithoutUserInput, ChatFriendshipUncheckedCreateWithoutUserInput> | ChatFriendshipCreateWithoutUserInput[] | ChatFriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatFriendshipCreateOrConnectWithoutUserInput | ChatFriendshipCreateOrConnectWithoutUserInput[]
    createMany?: ChatFriendshipCreateManyUserInputEnvelope
    connect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
  }

  export type ChatFriendshipCreateNestedManyWithoutFriendInput = {
    create?: XOR<ChatFriendshipCreateWithoutFriendInput, ChatFriendshipUncheckedCreateWithoutFriendInput> | ChatFriendshipCreateWithoutFriendInput[] | ChatFriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: ChatFriendshipCreateOrConnectWithoutFriendInput | ChatFriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: ChatFriendshipCreateManyFriendInputEnvelope
    connect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatConvoParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatConvoParticipantCreateWithoutUserInput, ChatConvoParticipantUncheckedCreateWithoutUserInput> | ChatConvoParticipantCreateWithoutUserInput[] | ChatConvoParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatConvoParticipantCreateOrConnectWithoutUserInput | ChatConvoParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ChatConvoParticipantCreateManyUserInputEnvelope
    connect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
  }

  export type ChatFriendshipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatFriendshipCreateWithoutUserInput, ChatFriendshipUncheckedCreateWithoutUserInput> | ChatFriendshipCreateWithoutUserInput[] | ChatFriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatFriendshipCreateOrConnectWithoutUserInput | ChatFriendshipCreateOrConnectWithoutUserInput[]
    createMany?: ChatFriendshipCreateManyUserInputEnvelope
    connect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
  }

  export type ChatFriendshipUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<ChatFriendshipCreateWithoutFriendInput, ChatFriendshipUncheckedCreateWithoutFriendInput> | ChatFriendshipCreateWithoutFriendInput[] | ChatFriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: ChatFriendshipCreateOrConnectWithoutFriendInput | ChatFriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: ChatFriendshipCreateManyFriendInputEnvelope
    connect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumChatRoleFieldUpdateOperationsInput = {
    set?: $Enums.ChatRole
  }

  export type ChatMessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutAuthorInput | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutAuthorInput | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutAuthorInput | ChatMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatConvoParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatConvoParticipantCreateWithoutUserInput, ChatConvoParticipantUncheckedCreateWithoutUserInput> | ChatConvoParticipantCreateWithoutUserInput[] | ChatConvoParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatConvoParticipantCreateOrConnectWithoutUserInput | ChatConvoParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ChatConvoParticipantUpsertWithWhereUniqueWithoutUserInput | ChatConvoParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatConvoParticipantCreateManyUserInputEnvelope
    set?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    disconnect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    delete?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    connect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    update?: ChatConvoParticipantUpdateWithWhereUniqueWithoutUserInput | ChatConvoParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatConvoParticipantUpdateManyWithWhereWithoutUserInput | ChatConvoParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatConvoParticipantScalarWhereInput | ChatConvoParticipantScalarWhereInput[]
  }

  export type ChatFriendshipUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatFriendshipCreateWithoutUserInput, ChatFriendshipUncheckedCreateWithoutUserInput> | ChatFriendshipCreateWithoutUserInput[] | ChatFriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatFriendshipCreateOrConnectWithoutUserInput | ChatFriendshipCreateOrConnectWithoutUserInput[]
    upsert?: ChatFriendshipUpsertWithWhereUniqueWithoutUserInput | ChatFriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatFriendshipCreateManyUserInputEnvelope
    set?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    disconnect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    delete?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    connect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    update?: ChatFriendshipUpdateWithWhereUniqueWithoutUserInput | ChatFriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatFriendshipUpdateManyWithWhereWithoutUserInput | ChatFriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatFriendshipScalarWhereInput | ChatFriendshipScalarWhereInput[]
  }

  export type ChatFriendshipUpdateManyWithoutFriendNestedInput = {
    create?: XOR<ChatFriendshipCreateWithoutFriendInput, ChatFriendshipUncheckedCreateWithoutFriendInput> | ChatFriendshipCreateWithoutFriendInput[] | ChatFriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: ChatFriendshipCreateOrConnectWithoutFriendInput | ChatFriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: ChatFriendshipUpsertWithWhereUniqueWithoutFriendInput | ChatFriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: ChatFriendshipCreateManyFriendInputEnvelope
    set?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    disconnect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    delete?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    connect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    update?: ChatFriendshipUpdateWithWhereUniqueWithoutFriendInput | ChatFriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: ChatFriendshipUpdateManyWithWhereWithoutFriendInput | ChatFriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: ChatFriendshipScalarWhereInput | ChatFriendshipScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput> | ChatMessageCreateWithoutAuthorInput[] | ChatMessageUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAuthorInput | ChatMessageCreateOrConnectWithoutAuthorInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutAuthorInput | ChatMessageUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ChatMessageCreateManyAuthorInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutAuthorInput | ChatMessageUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutAuthorInput | ChatMessageUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatConvoParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatConvoParticipantCreateWithoutUserInput, ChatConvoParticipantUncheckedCreateWithoutUserInput> | ChatConvoParticipantCreateWithoutUserInput[] | ChatConvoParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatConvoParticipantCreateOrConnectWithoutUserInput | ChatConvoParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ChatConvoParticipantUpsertWithWhereUniqueWithoutUserInput | ChatConvoParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatConvoParticipantCreateManyUserInputEnvelope
    set?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    disconnect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    delete?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    connect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    update?: ChatConvoParticipantUpdateWithWhereUniqueWithoutUserInput | ChatConvoParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatConvoParticipantUpdateManyWithWhereWithoutUserInput | ChatConvoParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatConvoParticipantScalarWhereInput | ChatConvoParticipantScalarWhereInput[]
  }

  export type ChatFriendshipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatFriendshipCreateWithoutUserInput, ChatFriendshipUncheckedCreateWithoutUserInput> | ChatFriendshipCreateWithoutUserInput[] | ChatFriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatFriendshipCreateOrConnectWithoutUserInput | ChatFriendshipCreateOrConnectWithoutUserInput[]
    upsert?: ChatFriendshipUpsertWithWhereUniqueWithoutUserInput | ChatFriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatFriendshipCreateManyUserInputEnvelope
    set?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    disconnect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    delete?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    connect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    update?: ChatFriendshipUpdateWithWhereUniqueWithoutUserInput | ChatFriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatFriendshipUpdateManyWithWhereWithoutUserInput | ChatFriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatFriendshipScalarWhereInput | ChatFriendshipScalarWhereInput[]
  }

  export type ChatFriendshipUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<ChatFriendshipCreateWithoutFriendInput, ChatFriendshipUncheckedCreateWithoutFriendInput> | ChatFriendshipCreateWithoutFriendInput[] | ChatFriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: ChatFriendshipCreateOrConnectWithoutFriendInput | ChatFriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: ChatFriendshipUpsertWithWhereUniqueWithoutFriendInput | ChatFriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: ChatFriendshipCreateManyFriendInputEnvelope
    set?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    disconnect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    delete?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    connect?: ChatFriendshipWhereUniqueInput | ChatFriendshipWhereUniqueInput[]
    update?: ChatFriendshipUpdateWithWhereUniqueWithoutFriendInput | ChatFriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: ChatFriendshipUpdateManyWithWhereWithoutFriendInput | ChatFriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: ChatFriendshipScalarWhereInput | ChatFriendshipScalarWhereInput[]
  }

  export type ChatUserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<ChatUserCreateWithoutFriendsInput, ChatUserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutFriendsInput
    connect?: ChatUserWhereUniqueInput
  }

  export type ChatUserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<ChatUserCreateWithoutFriendOfInput, ChatUserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutFriendOfInput
    connect?: ChatUserWhereUniqueInput
  }

  export type ChatUserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<ChatUserCreateWithoutFriendsInput, ChatUserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutFriendsInput
    upsert?: ChatUserUpsertWithoutFriendsInput
    connect?: ChatUserWhereUniqueInput
    update?: XOR<XOR<ChatUserUpdateToOneWithWhereWithoutFriendsInput, ChatUserUpdateWithoutFriendsInput>, ChatUserUncheckedUpdateWithoutFriendsInput>
  }

  export type ChatUserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<ChatUserCreateWithoutFriendOfInput, ChatUserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutFriendOfInput
    upsert?: ChatUserUpsertWithoutFriendOfInput
    connect?: ChatUserWhereUniqueInput
    update?: XOR<XOR<ChatUserUpdateToOneWithWhereWithoutFriendOfInput, ChatUserUpdateWithoutFriendOfInput>, ChatUserUncheckedUpdateWithoutFriendOfInput>
  }

  export type ChatMessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput> | ChatMessageCreateWithoutConversationInput[] | ChatMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutConversationInput | ChatMessageCreateOrConnectWithoutConversationInput[]
    createMany?: ChatMessageCreateManyConversationInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatConvoParticipantCreateNestedManyWithoutConversationInput = {
    create?: XOR<ChatConvoParticipantCreateWithoutConversationInput, ChatConvoParticipantUncheckedCreateWithoutConversationInput> | ChatConvoParticipantCreateWithoutConversationInput[] | ChatConvoParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatConvoParticipantCreateOrConnectWithoutConversationInput | ChatConvoParticipantCreateOrConnectWithoutConversationInput[]
    createMany?: ChatConvoParticipantCreateManyConversationInputEnvelope
    connect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput> | ChatMessageCreateWithoutConversationInput[] | ChatMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutConversationInput | ChatMessageCreateOrConnectWithoutConversationInput[]
    createMany?: ChatMessageCreateManyConversationInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatConvoParticipantUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<ChatConvoParticipantCreateWithoutConversationInput, ChatConvoParticipantUncheckedCreateWithoutConversationInput> | ChatConvoParticipantCreateWithoutConversationInput[] | ChatConvoParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatConvoParticipantCreateOrConnectWithoutConversationInput | ChatConvoParticipantCreateOrConnectWithoutConversationInput[]
    createMany?: ChatConvoParticipantCreateManyConversationInputEnvelope
    connect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChatMessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput> | ChatMessageCreateWithoutConversationInput[] | ChatMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutConversationInput | ChatMessageCreateOrConnectWithoutConversationInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutConversationInput | ChatMessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ChatMessageCreateManyConversationInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutConversationInput | ChatMessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutConversationInput | ChatMessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatConvoParticipantUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ChatConvoParticipantCreateWithoutConversationInput, ChatConvoParticipantUncheckedCreateWithoutConversationInput> | ChatConvoParticipantCreateWithoutConversationInput[] | ChatConvoParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatConvoParticipantCreateOrConnectWithoutConversationInput | ChatConvoParticipantCreateOrConnectWithoutConversationInput[]
    upsert?: ChatConvoParticipantUpsertWithWhereUniqueWithoutConversationInput | ChatConvoParticipantUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ChatConvoParticipantCreateManyConversationInputEnvelope
    set?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    disconnect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    delete?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    connect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    update?: ChatConvoParticipantUpdateWithWhereUniqueWithoutConversationInput | ChatConvoParticipantUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ChatConvoParticipantUpdateManyWithWhereWithoutConversationInput | ChatConvoParticipantUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ChatConvoParticipantScalarWhereInput | ChatConvoParticipantScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput> | ChatMessageCreateWithoutConversationInput[] | ChatMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutConversationInput | ChatMessageCreateOrConnectWithoutConversationInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutConversationInput | ChatMessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ChatMessageCreateManyConversationInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutConversationInput | ChatMessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutConversationInput | ChatMessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatConvoParticipantUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<ChatConvoParticipantCreateWithoutConversationInput, ChatConvoParticipantUncheckedCreateWithoutConversationInput> | ChatConvoParticipantCreateWithoutConversationInput[] | ChatConvoParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: ChatConvoParticipantCreateOrConnectWithoutConversationInput | ChatConvoParticipantCreateOrConnectWithoutConversationInput[]
    upsert?: ChatConvoParticipantUpsertWithWhereUniqueWithoutConversationInput | ChatConvoParticipantUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: ChatConvoParticipantCreateManyConversationInputEnvelope
    set?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    disconnect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    delete?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    connect?: ChatConvoParticipantWhereUniqueInput | ChatConvoParticipantWhereUniqueInput[]
    update?: ChatConvoParticipantUpdateWithWhereUniqueWithoutConversationInput | ChatConvoParticipantUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: ChatConvoParticipantUpdateManyWithWhereWithoutConversationInput | ChatConvoParticipantUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: ChatConvoParticipantScalarWhereInput | ChatConvoParticipantScalarWhereInput[]
  }

  export type ChatUserCreateNestedOneWithoutConversationsInput = {
    create?: XOR<ChatUserCreateWithoutConversationsInput, ChatUserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutConversationsInput
    connect?: ChatUserWhereUniqueInput
  }

  export type ChatConvoCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ChatConvoCreateWithoutParticipantsInput, ChatConvoUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ChatConvoCreateOrConnectWithoutParticipantsInput
    connect?: ChatConvoWhereUniqueInput
  }

  export type ChatUserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<ChatUserCreateWithoutConversationsInput, ChatUserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutConversationsInput
    upsert?: ChatUserUpsertWithoutConversationsInput
    connect?: ChatUserWhereUniqueInput
    update?: XOR<XOR<ChatUserUpdateToOneWithWhereWithoutConversationsInput, ChatUserUpdateWithoutConversationsInput>, ChatUserUncheckedUpdateWithoutConversationsInput>
  }

  export type ChatConvoUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ChatConvoCreateWithoutParticipantsInput, ChatConvoUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ChatConvoCreateOrConnectWithoutParticipantsInput
    upsert?: ChatConvoUpsertWithoutParticipantsInput
    connect?: ChatConvoWhereUniqueInput
    update?: XOR<XOR<ChatConvoUpdateToOneWithWhereWithoutParticipantsInput, ChatConvoUpdateWithoutParticipantsInput>, ChatConvoUncheckedUpdateWithoutParticipantsInput>
  }

  export type ChatConvoCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatConvoCreateWithoutMessagesInput, ChatConvoUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatConvoCreateOrConnectWithoutMessagesInput
    connect?: ChatConvoWhereUniqueInput
  }

  export type ChatUserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatUserCreateWithoutMessagesInput, ChatUserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutMessagesInput
    connect?: ChatUserWhereUniqueInput
  }

  export type ChatConvoUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatConvoCreateWithoutMessagesInput, ChatConvoUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatConvoCreateOrConnectWithoutMessagesInput
    upsert?: ChatConvoUpsertWithoutMessagesInput
    connect?: ChatConvoWhereUniqueInput
    update?: XOR<XOR<ChatConvoUpdateToOneWithWhereWithoutMessagesInput, ChatConvoUpdateWithoutMessagesInput>, ChatConvoUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatUserCreateWithoutMessagesInput, ChatUserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatUserCreateOrConnectWithoutMessagesInput
    upsert?: ChatUserUpsertWithoutMessagesInput
    connect?: ChatUserWhereUniqueInput
    update?: XOR<XOR<ChatUserUpdateToOneWithWhereWithoutMessagesInput, ChatUserUpdateWithoutMessagesInput>, ChatUserUncheckedUpdateWithoutMessagesInput>
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

  export type NestedEnumChatRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleFilter<$PrismaModel> | $Enums.ChatRole
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

  export type NestedEnumChatRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatRole | EnumChatRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatRole[] | ListEnumChatRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumChatRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChatRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatRoleFilter<$PrismaModel>
    _max?: NestedEnumChatRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChatMessageCreateWithoutAuthorInput = {
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: ChatConvoCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutAuthorInput = {
    id?: number
    body: string
    conversationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput>
  }

  export type ChatMessageCreateManyAuthorInputEnvelope = {
    data: ChatMessageCreateManyAuthorInput | ChatMessageCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ChatConvoParticipantCreateWithoutUserInput = {
    conversation: ChatConvoCreateNestedOneWithoutParticipantsInput
  }

  export type ChatConvoParticipantUncheckedCreateWithoutUserInput = {
    id?: number
    conversationId: number
  }

  export type ChatConvoParticipantCreateOrConnectWithoutUserInput = {
    where: ChatConvoParticipantWhereUniqueInput
    create: XOR<ChatConvoParticipantCreateWithoutUserInput, ChatConvoParticipantUncheckedCreateWithoutUserInput>
  }

  export type ChatConvoParticipantCreateManyUserInputEnvelope = {
    data: ChatConvoParticipantCreateManyUserInput | ChatConvoParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatFriendshipCreateWithoutUserInput = {
    createdAt?: Date | string
    friend: ChatUserCreateNestedOneWithoutFriendOfInput
  }

  export type ChatFriendshipUncheckedCreateWithoutUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
  }

  export type ChatFriendshipCreateOrConnectWithoutUserInput = {
    where: ChatFriendshipWhereUniqueInput
    create: XOR<ChatFriendshipCreateWithoutUserInput, ChatFriendshipUncheckedCreateWithoutUserInput>
  }

  export type ChatFriendshipCreateManyUserInputEnvelope = {
    data: ChatFriendshipCreateManyUserInput | ChatFriendshipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatFriendshipCreateWithoutFriendInput = {
    createdAt?: Date | string
    user: ChatUserCreateNestedOneWithoutFriendsInput
  }

  export type ChatFriendshipUncheckedCreateWithoutFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type ChatFriendshipCreateOrConnectWithoutFriendInput = {
    where: ChatFriendshipWhereUniqueInput
    create: XOR<ChatFriendshipCreateWithoutFriendInput, ChatFriendshipUncheckedCreateWithoutFriendInput>
  }

  export type ChatFriendshipCreateManyFriendInputEnvelope = {
    data: ChatFriendshipCreateManyFriendInput | ChatFriendshipCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutAuthorInput, ChatMessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<ChatMessageCreateWithoutAuthorInput, ChatMessageUncheckedCreateWithoutAuthorInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutAuthorInput, ChatMessageUncheckedUpdateWithoutAuthorInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutAuthorInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    body?: StringFilter<"ChatMessage"> | string
    conversationId?: IntFilter<"ChatMessage"> | number
    authorId?: IntFilter<"ChatMessage"> | number
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatConvoParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatConvoParticipantWhereUniqueInput
    update: XOR<ChatConvoParticipantUpdateWithoutUserInput, ChatConvoParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ChatConvoParticipantCreateWithoutUserInput, ChatConvoParticipantUncheckedCreateWithoutUserInput>
  }

  export type ChatConvoParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatConvoParticipantWhereUniqueInput
    data: XOR<ChatConvoParticipantUpdateWithoutUserInput, ChatConvoParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ChatConvoParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ChatConvoParticipantScalarWhereInput
    data: XOR<ChatConvoParticipantUpdateManyMutationInput, ChatConvoParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatConvoParticipantScalarWhereInput = {
    AND?: ChatConvoParticipantScalarWhereInput | ChatConvoParticipantScalarWhereInput[]
    OR?: ChatConvoParticipantScalarWhereInput[]
    NOT?: ChatConvoParticipantScalarWhereInput | ChatConvoParticipantScalarWhereInput[]
    id?: IntFilter<"ChatConvoParticipant"> | number
    userId?: IntFilter<"ChatConvoParticipant"> | number
    conversationId?: IntFilter<"ChatConvoParticipant"> | number
  }

  export type ChatFriendshipUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatFriendshipWhereUniqueInput
    update: XOR<ChatFriendshipUpdateWithoutUserInput, ChatFriendshipUncheckedUpdateWithoutUserInput>
    create: XOR<ChatFriendshipCreateWithoutUserInput, ChatFriendshipUncheckedCreateWithoutUserInput>
  }

  export type ChatFriendshipUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatFriendshipWhereUniqueInput
    data: XOR<ChatFriendshipUpdateWithoutUserInput, ChatFriendshipUncheckedUpdateWithoutUserInput>
  }

  export type ChatFriendshipUpdateManyWithWhereWithoutUserInput = {
    where: ChatFriendshipScalarWhereInput
    data: XOR<ChatFriendshipUpdateManyMutationInput, ChatFriendshipUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatFriendshipScalarWhereInput = {
    AND?: ChatFriendshipScalarWhereInput | ChatFriendshipScalarWhereInput[]
    OR?: ChatFriendshipScalarWhereInput[]
    NOT?: ChatFriendshipScalarWhereInput | ChatFriendshipScalarWhereInput[]
    id?: IntFilter<"ChatFriendship"> | number
    userId?: IntFilter<"ChatFriendship"> | number
    friendId?: IntFilter<"ChatFriendship"> | number
    createdAt?: DateTimeFilter<"ChatFriendship"> | Date | string
  }

  export type ChatFriendshipUpsertWithWhereUniqueWithoutFriendInput = {
    where: ChatFriendshipWhereUniqueInput
    update: XOR<ChatFriendshipUpdateWithoutFriendInput, ChatFriendshipUncheckedUpdateWithoutFriendInput>
    create: XOR<ChatFriendshipCreateWithoutFriendInput, ChatFriendshipUncheckedCreateWithoutFriendInput>
  }

  export type ChatFriendshipUpdateWithWhereUniqueWithoutFriendInput = {
    where: ChatFriendshipWhereUniqueInput
    data: XOR<ChatFriendshipUpdateWithoutFriendInput, ChatFriendshipUncheckedUpdateWithoutFriendInput>
  }

  export type ChatFriendshipUpdateManyWithWhereWithoutFriendInput = {
    where: ChatFriendshipScalarWhereInput
    data: XOR<ChatFriendshipUpdateManyMutationInput, ChatFriendshipUncheckedUpdateManyWithoutFriendInput>
  }

  export type ChatUserCreateWithoutFriendsInput = {
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    messages?: ChatMessageCreateNestedManyWithoutAuthorInput
    conversations?: ChatConvoParticipantCreateNestedManyWithoutUserInput
    friendOf?: ChatFriendshipCreateNestedManyWithoutFriendInput
  }

  export type ChatUserUncheckedCreateWithoutFriendsInput = {
    id?: number
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    messages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    conversations?: ChatConvoParticipantUncheckedCreateNestedManyWithoutUserInput
    friendOf?: ChatFriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ChatUserCreateOrConnectWithoutFriendsInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutFriendsInput, ChatUserUncheckedCreateWithoutFriendsInput>
  }

  export type ChatUserCreateWithoutFriendOfInput = {
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    messages?: ChatMessageCreateNestedManyWithoutAuthorInput
    conversations?: ChatConvoParticipantCreateNestedManyWithoutUserInput
    friends?: ChatFriendshipCreateNestedManyWithoutUserInput
  }

  export type ChatUserUncheckedCreateWithoutFriendOfInput = {
    id?: number
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    messages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    conversations?: ChatConvoParticipantUncheckedCreateNestedManyWithoutUserInput
    friends?: ChatFriendshipUncheckedCreateNestedManyWithoutUserInput
  }

  export type ChatUserCreateOrConnectWithoutFriendOfInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutFriendOfInput, ChatUserUncheckedCreateWithoutFriendOfInput>
  }

  export type ChatUserUpsertWithoutFriendsInput = {
    update: XOR<ChatUserUpdateWithoutFriendsInput, ChatUserUncheckedUpdateWithoutFriendsInput>
    create: XOR<ChatUserCreateWithoutFriendsInput, ChatUserUncheckedCreateWithoutFriendsInput>
    where?: ChatUserWhereInput
  }

  export type ChatUserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: ChatUserWhereInput
    data: XOR<ChatUserUpdateWithoutFriendsInput, ChatUserUncheckedUpdateWithoutFriendsInput>
  }

  export type ChatUserUpdateWithoutFriendsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    messages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    conversations?: ChatConvoParticipantUpdateManyWithoutUserNestedInput
    friendOf?: ChatFriendshipUpdateManyWithoutFriendNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    messages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    conversations?: ChatConvoParticipantUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: ChatFriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ChatUserUpsertWithoutFriendOfInput = {
    update: XOR<ChatUserUpdateWithoutFriendOfInput, ChatUserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<ChatUserCreateWithoutFriendOfInput, ChatUserUncheckedCreateWithoutFriendOfInput>
    where?: ChatUserWhereInput
  }

  export type ChatUserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: ChatUserWhereInput
    data: XOR<ChatUserUpdateWithoutFriendOfInput, ChatUserUncheckedUpdateWithoutFriendOfInput>
  }

  export type ChatUserUpdateWithoutFriendOfInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    messages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    conversations?: ChatConvoParticipantUpdateManyWithoutUserNestedInput
    friends?: ChatFriendshipUpdateManyWithoutUserNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    messages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    conversations?: ChatConvoParticipantUncheckedUpdateManyWithoutUserNestedInput
    friends?: ChatFriendshipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatMessageCreateWithoutConversationInput = {
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: ChatUserCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutConversationInput = {
    id?: number
    body: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutConversationInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput>
  }

  export type ChatMessageCreateManyConversationInputEnvelope = {
    data: ChatMessageCreateManyConversationInput | ChatMessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type ChatConvoParticipantCreateWithoutConversationInput = {
    user: ChatUserCreateNestedOneWithoutConversationsInput
  }

  export type ChatConvoParticipantUncheckedCreateWithoutConversationInput = {
    id?: number
    userId: number
  }

  export type ChatConvoParticipantCreateOrConnectWithoutConversationInput = {
    where: ChatConvoParticipantWhereUniqueInput
    create: XOR<ChatConvoParticipantCreateWithoutConversationInput, ChatConvoParticipantUncheckedCreateWithoutConversationInput>
  }

  export type ChatConvoParticipantCreateManyConversationInputEnvelope = {
    data: ChatConvoParticipantCreateManyConversationInput | ChatConvoParticipantCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutConversationInput, ChatMessageUncheckedUpdateWithoutConversationInput>
    create: XOR<ChatMessageCreateWithoutConversationInput, ChatMessageUncheckedCreateWithoutConversationInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutConversationInput, ChatMessageUncheckedUpdateWithoutConversationInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutConversationInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type ChatConvoParticipantUpsertWithWhereUniqueWithoutConversationInput = {
    where: ChatConvoParticipantWhereUniqueInput
    update: XOR<ChatConvoParticipantUpdateWithoutConversationInput, ChatConvoParticipantUncheckedUpdateWithoutConversationInput>
    create: XOR<ChatConvoParticipantCreateWithoutConversationInput, ChatConvoParticipantUncheckedCreateWithoutConversationInput>
  }

  export type ChatConvoParticipantUpdateWithWhereUniqueWithoutConversationInput = {
    where: ChatConvoParticipantWhereUniqueInput
    data: XOR<ChatConvoParticipantUpdateWithoutConversationInput, ChatConvoParticipantUncheckedUpdateWithoutConversationInput>
  }

  export type ChatConvoParticipantUpdateManyWithWhereWithoutConversationInput = {
    where: ChatConvoParticipantScalarWhereInput
    data: XOR<ChatConvoParticipantUpdateManyMutationInput, ChatConvoParticipantUncheckedUpdateManyWithoutConversationInput>
  }

  export type ChatUserCreateWithoutConversationsInput = {
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    messages?: ChatMessageCreateNestedManyWithoutAuthorInput
    friends?: ChatFriendshipCreateNestedManyWithoutUserInput
    friendOf?: ChatFriendshipCreateNestedManyWithoutFriendInput
  }

  export type ChatUserUncheckedCreateWithoutConversationsInput = {
    id?: number
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    messages?: ChatMessageUncheckedCreateNestedManyWithoutAuthorInput
    friends?: ChatFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: ChatFriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ChatUserCreateOrConnectWithoutConversationsInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutConversationsInput, ChatUserUncheckedCreateWithoutConversationsInput>
  }

  export type ChatConvoCreateWithoutParticipantsInput = {
    convoName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutConversationInput
  }

  export type ChatConvoUncheckedCreateWithoutParticipantsInput = {
    id?: number
    convoName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ChatConvoCreateOrConnectWithoutParticipantsInput = {
    where: ChatConvoWhereUniqueInput
    create: XOR<ChatConvoCreateWithoutParticipantsInput, ChatConvoUncheckedCreateWithoutParticipantsInput>
  }

  export type ChatUserUpsertWithoutConversationsInput = {
    update: XOR<ChatUserUpdateWithoutConversationsInput, ChatUserUncheckedUpdateWithoutConversationsInput>
    create: XOR<ChatUserCreateWithoutConversationsInput, ChatUserUncheckedCreateWithoutConversationsInput>
    where?: ChatUserWhereInput
  }

  export type ChatUserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: ChatUserWhereInput
    data: XOR<ChatUserUpdateWithoutConversationsInput, ChatUserUncheckedUpdateWithoutConversationsInput>
  }

  export type ChatUserUpdateWithoutConversationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    messages?: ChatMessageUpdateManyWithoutAuthorNestedInput
    friends?: ChatFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: ChatFriendshipUpdateManyWithoutFriendNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    messages?: ChatMessageUncheckedUpdateManyWithoutAuthorNestedInput
    friends?: ChatFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: ChatFriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ChatConvoUpsertWithoutParticipantsInput = {
    update: XOR<ChatConvoUpdateWithoutParticipantsInput, ChatConvoUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ChatConvoCreateWithoutParticipantsInput, ChatConvoUncheckedCreateWithoutParticipantsInput>
    where?: ChatConvoWhereInput
  }

  export type ChatConvoUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ChatConvoWhereInput
    data: XOR<ChatConvoUpdateWithoutParticipantsInput, ChatConvoUncheckedUpdateWithoutParticipantsInput>
  }

  export type ChatConvoUpdateWithoutParticipantsInput = {
    convoName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutConversationNestedInput
  }

  export type ChatConvoUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    convoName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ChatConvoCreateWithoutMessagesInput = {
    convoName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ChatConvoParticipantCreateNestedManyWithoutConversationInput
  }

  export type ChatConvoUncheckedCreateWithoutMessagesInput = {
    id?: number
    convoName?: string | null
    isGroup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ChatConvoParticipantUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ChatConvoCreateOrConnectWithoutMessagesInput = {
    where: ChatConvoWhereUniqueInput
    create: XOR<ChatConvoCreateWithoutMessagesInput, ChatConvoUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUserCreateWithoutMessagesInput = {
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    conversations?: ChatConvoParticipantCreateNestedManyWithoutUserInput
    friends?: ChatFriendshipCreateNestedManyWithoutUserInput
    friendOf?: ChatFriendshipCreateNestedManyWithoutFriendInput
  }

  export type ChatUserUncheckedCreateWithoutMessagesInput = {
    id?: number
    name: string
    email: string
    password: string
    bio?: string | null
    image?: string | null
    token?: string | null
    role?: $Enums.ChatRole
    conversations?: ChatConvoParticipantUncheckedCreateNestedManyWithoutUserInput
    friends?: ChatFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: ChatFriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type ChatUserCreateOrConnectWithoutMessagesInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutMessagesInput, ChatUserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatConvoUpsertWithoutMessagesInput = {
    update: XOR<ChatConvoUpdateWithoutMessagesInput, ChatConvoUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatConvoCreateWithoutMessagesInput, ChatConvoUncheckedCreateWithoutMessagesInput>
    where?: ChatConvoWhereInput
  }

  export type ChatConvoUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatConvoWhereInput
    data: XOR<ChatConvoUpdateWithoutMessagesInput, ChatConvoUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatConvoUpdateWithoutMessagesInput = {
    convoName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ChatConvoParticipantUpdateManyWithoutConversationNestedInput
  }

  export type ChatConvoUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    convoName?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ChatConvoParticipantUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ChatUserUpsertWithoutMessagesInput = {
    update: XOR<ChatUserUpdateWithoutMessagesInput, ChatUserUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatUserCreateWithoutMessagesInput, ChatUserUncheckedCreateWithoutMessagesInput>
    where?: ChatUserWhereInput
  }

  export type ChatUserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatUserWhereInput
    data: XOR<ChatUserUpdateWithoutMessagesInput, ChatUserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUserUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    conversations?: ChatConvoParticipantUpdateManyWithoutUserNestedInput
    friends?: ChatFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: ChatFriendshipUpdateManyWithoutFriendNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumChatRoleFieldUpdateOperationsInput | $Enums.ChatRole
    conversations?: ChatConvoParticipantUncheckedUpdateManyWithoutUserNestedInput
    friends?: ChatFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: ChatFriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ChatMessageCreateManyAuthorInput = {
    id?: number
    body: string
    conversationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatConvoParticipantCreateManyUserInput = {
    id?: number
    conversationId: number
  }

  export type ChatFriendshipCreateManyUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
  }

  export type ChatFriendshipCreateManyFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutAuthorInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ChatConvoUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    conversationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    conversationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatConvoParticipantUpdateWithoutUserInput = {
    conversation?: ChatConvoUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ChatConvoParticipantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatConvoParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatFriendshipUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: ChatUserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type ChatFriendshipUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatFriendshipUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatFriendshipUpdateWithoutFriendInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ChatUserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type ChatFriendshipUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatFriendshipUncheckedUpdateManyWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyConversationInput = {
    id?: number
    body: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatConvoParticipantCreateManyConversationInput = {
    id?: number
    userId: number
  }

  export type ChatMessageUpdateWithoutConversationInput = {
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: ChatUserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatConvoParticipantUpdateWithoutConversationInput = {
    user?: ChatUserUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ChatConvoParticipantUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatConvoParticipantUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
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