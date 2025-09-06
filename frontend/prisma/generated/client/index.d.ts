
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model HistorialEnvio
 * 
 */
export type HistorialEnvio = $Result.DefaultSelection<Prisma.$HistorialEnvioPayload>
/**
 * Model Contacto
 * 
 */
export type Contacto = $Result.DefaultSelection<Prisma.$ContactoPayload>
/**
 * Model configuracion_app
 * 
 */
export type configuracion_app = $Result.DefaultSelection<Prisma.$configuracion_appPayload>
/**
 * Model eventos_analytics
 * 
 */
export type eventos_analytics = $Result.DefaultSelection<Prisma.$eventos_analyticsPayload>
/**
 * Model sesiones_usuario
 * 
 */
export type sesiones_usuario = $Result.DefaultSelection<Prisma.$sesiones_usuarioPayload>
/**
 * Model tokens_notificacion
 * 
 */
export type tokens_notificacion = $Result.DefaultSelection<Prisma.$tokens_notificacionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historialEnvio`: Exposes CRUD operations for the **HistorialEnvio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistorialEnvios
    * const historialEnvios = await prisma.historialEnvio.findMany()
    * ```
    */
  get historialEnvio(): Prisma.HistorialEnvioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacto`: Exposes CRUD operations for the **Contacto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactos
    * const contactos = await prisma.contacto.findMany()
    * ```
    */
  get contacto(): Prisma.ContactoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracion_app`: Exposes CRUD operations for the **configuracion_app** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuracion_apps
    * const configuracion_apps = await prisma.configuracion_app.findMany()
    * ```
    */
  get configuracion_app(): Prisma.configuracion_appDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos_analytics`: Exposes CRUD operations for the **eventos_analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos_analytics
    * const eventos_analytics = await prisma.eventos_analytics.findMany()
    * ```
    */
  get eventos_analytics(): Prisma.eventos_analyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sesiones_usuario`: Exposes CRUD operations for the **sesiones_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sesiones_usuarios
    * const sesiones_usuarios = await prisma.sesiones_usuario.findMany()
    * ```
    */
  get sesiones_usuario(): Prisma.sesiones_usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens_notificacion`: Exposes CRUD operations for the **tokens_notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens_notificacions
    * const tokens_notificacions = await prisma.tokens_notificacion.findMany()
    * ```
    */
  get tokens_notificacion(): Prisma.tokens_notificacionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    HistorialEnvio: 'HistorialEnvio',
    Contacto: 'Contacto',
    configuracion_app: 'configuracion_app',
    eventos_analytics: 'eventos_analytics',
    sesiones_usuario: 'sesiones_usuario',
    tokens_notificacion: 'tokens_notificacion'
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
      modelProps: "account" | "session" | "user" | "verificationToken" | "historialEnvio" | "contacto" | "configuracion_app" | "eventos_analytics" | "sesiones_usuario" | "tokens_notificacion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      HistorialEnvio: {
        payload: Prisma.$HistorialEnvioPayload<ExtArgs>
        fields: Prisma.HistorialEnvioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistorialEnvioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistorialEnvioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>
          }
          findFirst: {
            args: Prisma.HistorialEnvioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistorialEnvioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>
          }
          findMany: {
            args: Prisma.HistorialEnvioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>[]
          }
          create: {
            args: Prisma.HistorialEnvioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>
          }
          createMany: {
            args: Prisma.HistorialEnvioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistorialEnvioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>[]
          }
          delete: {
            args: Prisma.HistorialEnvioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>
          }
          update: {
            args: Prisma.HistorialEnvioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>
          }
          deleteMany: {
            args: Prisma.HistorialEnvioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistorialEnvioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistorialEnvioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>[]
          }
          upsert: {
            args: Prisma.HistorialEnvioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialEnvioPayload>
          }
          aggregate: {
            args: Prisma.HistorialEnvioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorialEnvio>
          }
          groupBy: {
            args: Prisma.HistorialEnvioGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistorialEnvioGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistorialEnvioCountArgs<ExtArgs>
            result: $Utils.Optional<HistorialEnvioCountAggregateOutputType> | number
          }
        }
      }
      Contacto: {
        payload: Prisma.$ContactoPayload<ExtArgs>
        fields: Prisma.ContactoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          findFirst: {
            args: Prisma.ContactoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          findMany: {
            args: Prisma.ContactoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          create: {
            args: Prisma.ContactoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          createMany: {
            args: Prisma.ContactoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          delete: {
            args: Prisma.ContactoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          update: {
            args: Prisma.ContactoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          deleteMany: {
            args: Prisma.ContactoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          upsert: {
            args: Prisma.ContactoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          aggregate: {
            args: Prisma.ContactoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacto>
          }
          groupBy: {
            args: Prisma.ContactoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactoCountAggregateOutputType> | number
          }
        }
      }
      configuracion_app: {
        payload: Prisma.$configuracion_appPayload<ExtArgs>
        fields: Prisma.configuracion_appFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configuracion_appFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configuracion_appFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>
          }
          findFirst: {
            args: Prisma.configuracion_appFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configuracion_appFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>
          }
          findMany: {
            args: Prisma.configuracion_appFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>[]
          }
          create: {
            args: Prisma.configuracion_appCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>
          }
          createMany: {
            args: Prisma.configuracion_appCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.configuracion_appCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>[]
          }
          delete: {
            args: Prisma.configuracion_appDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>
          }
          update: {
            args: Prisma.configuracion_appUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>
          }
          deleteMany: {
            args: Prisma.configuracion_appDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configuracion_appUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.configuracion_appUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>[]
          }
          upsert: {
            args: Prisma.configuracion_appUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracion_appPayload>
          }
          aggregate: {
            args: Prisma.Configuracion_appAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracion_app>
          }
          groupBy: {
            args: Prisma.configuracion_appGroupByArgs<ExtArgs>
            result: $Utils.Optional<Configuracion_appGroupByOutputType>[]
          }
          count: {
            args: Prisma.configuracion_appCountArgs<ExtArgs>
            result: $Utils.Optional<Configuracion_appCountAggregateOutputType> | number
          }
        }
      }
      eventos_analytics: {
        payload: Prisma.$eventos_analyticsPayload<ExtArgs>
        fields: Prisma.eventos_analyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventos_analyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventos_analyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>
          }
          findFirst: {
            args: Prisma.eventos_analyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventos_analyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>
          }
          findMany: {
            args: Prisma.eventos_analyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>[]
          }
          create: {
            args: Prisma.eventos_analyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>
          }
          createMany: {
            args: Prisma.eventos_analyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventos_analyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>[]
          }
          delete: {
            args: Prisma.eventos_analyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>
          }
          update: {
            args: Prisma.eventos_analyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>
          }
          deleteMany: {
            args: Prisma.eventos_analyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventos_analyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventos_analyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>[]
          }
          upsert: {
            args: Prisma.eventos_analyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventos_analyticsPayload>
          }
          aggregate: {
            args: Prisma.Eventos_analyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos_analytics>
          }
          groupBy: {
            args: Prisma.eventos_analyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Eventos_analyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventos_analyticsCountArgs<ExtArgs>
            result: $Utils.Optional<Eventos_analyticsCountAggregateOutputType> | number
          }
        }
      }
      sesiones_usuario: {
        payload: Prisma.$sesiones_usuarioPayload<ExtArgs>
        fields: Prisma.sesiones_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sesiones_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sesiones_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>
          }
          findFirst: {
            args: Prisma.sesiones_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sesiones_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>
          }
          findMany: {
            args: Prisma.sesiones_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>[]
          }
          create: {
            args: Prisma.sesiones_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>
          }
          createMany: {
            args: Prisma.sesiones_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sesiones_usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>[]
          }
          delete: {
            args: Prisma.sesiones_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>
          }
          update: {
            args: Prisma.sesiones_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.sesiones_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sesiones_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sesiones_usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>[]
          }
          upsert: {
            args: Prisma.sesiones_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sesiones_usuarioPayload>
          }
          aggregate: {
            args: Prisma.Sesiones_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSesiones_usuario>
          }
          groupBy: {
            args: Prisma.sesiones_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sesiones_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.sesiones_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<Sesiones_usuarioCountAggregateOutputType> | number
          }
        }
      }
      tokens_notificacion: {
        payload: Prisma.$tokens_notificacionPayload<ExtArgs>
        fields: Prisma.tokens_notificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokens_notificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokens_notificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>
          }
          findFirst: {
            args: Prisma.tokens_notificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokens_notificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>
          }
          findMany: {
            args: Prisma.tokens_notificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>[]
          }
          create: {
            args: Prisma.tokens_notificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>
          }
          createMany: {
            args: Prisma.tokens_notificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tokens_notificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>[]
          }
          delete: {
            args: Prisma.tokens_notificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>
          }
          update: {
            args: Prisma.tokens_notificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>
          }
          deleteMany: {
            args: Prisma.tokens_notificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokens_notificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tokens_notificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>[]
          }
          upsert: {
            args: Prisma.tokens_notificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokens_notificacionPayload>
          }
          aggregate: {
            args: Prisma.Tokens_notificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens_notificacion>
          }
          groupBy: {
            args: Prisma.tokens_notificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tokens_notificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokens_notificacionCountArgs<ExtArgs>
            result: $Utils.Optional<Tokens_notificacionCountAggregateOutputType> | number
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
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    historialEnvio?: HistorialEnvioOmit
    contacto?: ContactoOmit
    configuracion_app?: configuracion_appOmit
    eventos_analytics?: eventos_analyticsOmit
    sesiones_usuario?: sesiones_usuarioOmit
    tokens_notificacion?: tokens_notificacionOmit
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
    accounts: number
    sessions: number
    envios: number
    sesiones_usuario: number
    tokens_notificacion: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    envios?: boolean | UserCountOutputTypeCountEnviosArgs
    sesiones_usuario?: boolean | UserCountOutputTypeCountSesiones_usuarioArgs
    tokens_notificacion?: boolean | UserCountOutputTypeCountTokens_notificacionArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialEnvioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSesiones_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sesiones_usuarioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokens_notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokens_notificacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


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
    emailVerified: Date | null
    image: string | null
    celular: string | null
    ciudad: string | null
    password: string | null
    token: string | null
    tokenFecha: Date | null
    esAdministrador: boolean | null
    esRecolector: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    celular: string | null
    ciudad: string | null
    password: string | null
    token: string | null
    tokenFecha: Date | null
    esAdministrador: boolean | null
    esRecolector: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    celular: number
    ciudad: number
    password: number
    token: number
    tokenFecha: number
    esAdministrador: number
    esRecolector: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    celular?: true
    ciudad?: true
    password?: true
    token?: true
    tokenFecha?: true
    esAdministrador?: true
    esRecolector?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    celular?: true
    ciudad?: true
    password?: true
    token?: true
    tokenFecha?: true
    esAdministrador?: true
    esRecolector?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    celular?: true
    ciudad?: true
    password?: true
    token?: true
    tokenFecha?: true
    esAdministrador?: true
    esRecolector?: true
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
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    celular: string | null
    ciudad: string | null
    password: string | null
    token: string | null
    tokenFecha: Date | null
    esAdministrador: boolean
    esRecolector: boolean
    createdAt: Date
    updatedAt: Date
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
    emailVerified?: boolean
    image?: boolean
    celular?: boolean
    ciudad?: boolean
    password?: boolean
    token?: boolean
    tokenFecha?: boolean
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    envios?: boolean | User$enviosArgs<ExtArgs>
    sesiones_usuario?: boolean | User$sesiones_usuarioArgs<ExtArgs>
    tokens_notificacion?: boolean | User$tokens_notificacionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    celular?: boolean
    ciudad?: boolean
    password?: boolean
    token?: boolean
    tokenFecha?: boolean
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    celular?: boolean
    ciudad?: boolean
    password?: boolean
    token?: boolean
    tokenFecha?: boolean
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    celular?: boolean
    ciudad?: boolean
    password?: boolean
    token?: boolean
    tokenFecha?: boolean
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "celular" | "ciudad" | "password" | "token" | "tokenFecha" | "esAdministrador" | "esRecolector" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    envios?: boolean | User$enviosArgs<ExtArgs>
    sesiones_usuario?: boolean | User$sesiones_usuarioArgs<ExtArgs>
    tokens_notificacion?: boolean | User$tokens_notificacionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      envios: Prisma.$HistorialEnvioPayload<ExtArgs>[]
      sesiones_usuario: Prisma.$sesiones_usuarioPayload<ExtArgs>[]
      tokens_notificacion: Prisma.$tokens_notificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      celular: string | null
      ciudad: string | null
      password: string | null
      token: string | null
      tokenFecha: Date | null
      esAdministrador: boolean
      esRecolector: boolean
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    envios<T extends User$enviosArgs<ExtArgs> = {}>(args?: Subset<T, User$enviosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sesiones_usuario<T extends User$sesiones_usuarioArgs<ExtArgs> = {}>(args?: Subset<T, User$sesiones_usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens_notificacion<T extends User$tokens_notificacionArgs<ExtArgs> = {}>(args?: Subset<T, User$tokens_notificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly celular: FieldRef<"User", 'String'>
    readonly ciudad: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly tokenFecha: FieldRef<"User", 'DateTime'>
    readonly esAdministrador: FieldRef<"User", 'Boolean'>
    readonly esRecolector: FieldRef<"User", 'Boolean'>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.envios
   */
  export type User$enviosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    where?: HistorialEnvioWhereInput
    orderBy?: HistorialEnvioOrderByWithRelationInput | HistorialEnvioOrderByWithRelationInput[]
    cursor?: HistorialEnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialEnvioScalarFieldEnum | HistorialEnvioScalarFieldEnum[]
  }

  /**
   * User.sesiones_usuario
   */
  export type User$sesiones_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    where?: sesiones_usuarioWhereInput
    orderBy?: sesiones_usuarioOrderByWithRelationInput | sesiones_usuarioOrderByWithRelationInput[]
    cursor?: sesiones_usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sesiones_usuarioScalarFieldEnum | Sesiones_usuarioScalarFieldEnum[]
  }

  /**
   * User.tokens_notificacion
   */
  export type User$tokens_notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    where?: tokens_notificacionWhereInput
    orderBy?: tokens_notificacionOrderByWithRelationInput | tokens_notificacionOrderByWithRelationInput[]
    cursor?: tokens_notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tokens_notificacionScalarFieldEnum | Tokens_notificacionScalarFieldEnum[]
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
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model HistorialEnvio
   */

  export type AggregateHistorialEnvio = {
    _count: HistorialEnvioCountAggregateOutputType | null
    _avg: HistorialEnvioAvgAggregateOutputType | null
    _sum: HistorialEnvioSumAggregateOutputType | null
    _min: HistorialEnvioMinAggregateOutputType | null
    _max: HistorialEnvioMaxAggregateOutputType | null
  }

  export type HistorialEnvioAvgAggregateOutputType = {
    id: number | null
    peso: number | null
    valor: number | null
  }

  export type HistorialEnvioSumAggregateOutputType = {
    id: number | null
    peso: number | null
    valor: number | null
  }

  export type HistorialEnvioMinAggregateOutputType = {
    id: number | null
    NumeroGuia: string | null
    PaymentId: string | null
    Origen: string | null
    Destino: string | null
    Destinatario: string | null
    Remitente: string | null
    Estado: string | null
    FechaSolicitud: Date | null
    usuarioId: string | null
    peso: number | null
    valor: number | null
    dimensiones: string | null
    notas: string | null
    fechaEntrega: Date | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type HistorialEnvioMaxAggregateOutputType = {
    id: number | null
    NumeroGuia: string | null
    PaymentId: string | null
    Origen: string | null
    Destino: string | null
    Destinatario: string | null
    Remitente: string | null
    Estado: string | null
    FechaSolicitud: Date | null
    usuarioId: string | null
    peso: number | null
    valor: number | null
    dimensiones: string | null
    notas: string | null
    fechaEntrega: Date | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type HistorialEnvioCountAggregateOutputType = {
    id: number
    NumeroGuia: number
    PaymentId: number
    Origen: number
    Destino: number
    Destinatario: number
    Remitente: number
    Estado: number
    FechaSolicitud: number
    usuarioId: number
    peso: number
    valor: number
    dimensiones: number
    notas: number
    fechaEntrega: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type HistorialEnvioAvgAggregateInputType = {
    id?: true
    peso?: true
    valor?: true
  }

  export type HistorialEnvioSumAggregateInputType = {
    id?: true
    peso?: true
    valor?: true
  }

  export type HistorialEnvioMinAggregateInputType = {
    id?: true
    NumeroGuia?: true
    PaymentId?: true
    Origen?: true
    Destino?: true
    Destinatario?: true
    Remitente?: true
    Estado?: true
    FechaSolicitud?: true
    usuarioId?: true
    peso?: true
    valor?: true
    dimensiones?: true
    notas?: true
    fechaEntrega?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type HistorialEnvioMaxAggregateInputType = {
    id?: true
    NumeroGuia?: true
    PaymentId?: true
    Origen?: true
    Destino?: true
    Destinatario?: true
    Remitente?: true
    Estado?: true
    FechaSolicitud?: true
    usuarioId?: true
    peso?: true
    valor?: true
    dimensiones?: true
    notas?: true
    fechaEntrega?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type HistorialEnvioCountAggregateInputType = {
    id?: true
    NumeroGuia?: true
    PaymentId?: true
    Origen?: true
    Destino?: true
    Destinatario?: true
    Remitente?: true
    Estado?: true
    FechaSolicitud?: true
    usuarioId?: true
    peso?: true
    valor?: true
    dimensiones?: true
    notas?: true
    fechaEntrega?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type HistorialEnvioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialEnvio to aggregate.
     */
    where?: HistorialEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialEnvios to fetch.
     */
    orderBy?: HistorialEnvioOrderByWithRelationInput | HistorialEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistorialEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistorialEnvios
    **/
    _count?: true | HistorialEnvioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistorialEnvioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorialEnvioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistorialEnvioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistorialEnvioMaxAggregateInputType
  }

  export type GetHistorialEnvioAggregateType<T extends HistorialEnvioAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorialEnvio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorialEnvio[P]>
      : GetScalarType<T[P], AggregateHistorialEnvio[P]>
  }




  export type HistorialEnvioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialEnvioWhereInput
    orderBy?: HistorialEnvioOrderByWithAggregationInput | HistorialEnvioOrderByWithAggregationInput[]
    by: HistorialEnvioScalarFieldEnum[] | HistorialEnvioScalarFieldEnum
    having?: HistorialEnvioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistorialEnvioCountAggregateInputType | true
    _avg?: HistorialEnvioAvgAggregateInputType
    _sum?: HistorialEnvioSumAggregateInputType
    _min?: HistorialEnvioMinAggregateInputType
    _max?: HistorialEnvioMaxAggregateInputType
  }

  export type HistorialEnvioGroupByOutputType = {
    id: number
    NumeroGuia: string
    PaymentId: string | null
    Origen: string
    Destino: string
    Destinatario: string
    Remitente: string
    Estado: string
    FechaSolicitud: Date
    usuarioId: string | null
    peso: number | null
    valor: number | null
    dimensiones: string | null
    notas: string | null
    fechaEntrega: Date | null
    creadoEn: Date
    actualizadoEn: Date
    _count: HistorialEnvioCountAggregateOutputType | null
    _avg: HistorialEnvioAvgAggregateOutputType | null
    _sum: HistorialEnvioSumAggregateOutputType | null
    _min: HistorialEnvioMinAggregateOutputType | null
    _max: HistorialEnvioMaxAggregateOutputType | null
  }

  type GetHistorialEnvioGroupByPayload<T extends HistorialEnvioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistorialEnvioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistorialEnvioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistorialEnvioGroupByOutputType[P]>
            : GetScalarType<T[P], HistorialEnvioGroupByOutputType[P]>
        }
      >
    >


  export type HistorialEnvioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    NumeroGuia?: boolean
    PaymentId?: boolean
    Origen?: boolean
    Destino?: boolean
    Destinatario?: boolean
    Remitente?: boolean
    Estado?: boolean
    FechaSolicitud?: boolean
    usuarioId?: boolean
    peso?: boolean
    valor?: boolean
    dimensiones?: boolean
    notas?: boolean
    fechaEntrega?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | HistorialEnvio$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["historialEnvio"]>

  export type HistorialEnvioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    NumeroGuia?: boolean
    PaymentId?: boolean
    Origen?: boolean
    Destino?: boolean
    Destinatario?: boolean
    Remitente?: boolean
    Estado?: boolean
    FechaSolicitud?: boolean
    usuarioId?: boolean
    peso?: boolean
    valor?: boolean
    dimensiones?: boolean
    notas?: boolean
    fechaEntrega?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | HistorialEnvio$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["historialEnvio"]>

  export type HistorialEnvioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    NumeroGuia?: boolean
    PaymentId?: boolean
    Origen?: boolean
    Destino?: boolean
    Destinatario?: boolean
    Remitente?: boolean
    Estado?: boolean
    FechaSolicitud?: boolean
    usuarioId?: boolean
    peso?: boolean
    valor?: boolean
    dimensiones?: boolean
    notas?: boolean
    fechaEntrega?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | HistorialEnvio$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["historialEnvio"]>

  export type HistorialEnvioSelectScalar = {
    id?: boolean
    NumeroGuia?: boolean
    PaymentId?: boolean
    Origen?: boolean
    Destino?: boolean
    Destinatario?: boolean
    Remitente?: boolean
    Estado?: boolean
    FechaSolicitud?: boolean
    usuarioId?: boolean
    peso?: boolean
    valor?: boolean
    dimensiones?: boolean
    notas?: boolean
    fechaEntrega?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type HistorialEnvioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "NumeroGuia" | "PaymentId" | "Origen" | "Destino" | "Destinatario" | "Remitente" | "Estado" | "FechaSolicitud" | "usuarioId" | "peso" | "valor" | "dimensiones" | "notas" | "fechaEntrega" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["historialEnvio"]>
  export type HistorialEnvioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | HistorialEnvio$usuarioArgs<ExtArgs>
  }
  export type HistorialEnvioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | HistorialEnvio$usuarioArgs<ExtArgs>
  }
  export type HistorialEnvioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | HistorialEnvio$usuarioArgs<ExtArgs>
  }

  export type $HistorialEnvioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistorialEnvio"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      NumeroGuia: string
      PaymentId: string | null
      Origen: string
      Destino: string
      Destinatario: string
      Remitente: string
      Estado: string
      FechaSolicitud: Date
      usuarioId: string | null
      peso: number | null
      valor: number | null
      dimensiones: string | null
      notas: string | null
      fechaEntrega: Date | null
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["historialEnvio"]>
    composites: {}
  }

  type HistorialEnvioGetPayload<S extends boolean | null | undefined | HistorialEnvioDefaultArgs> = $Result.GetResult<Prisma.$HistorialEnvioPayload, S>

  type HistorialEnvioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistorialEnvioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistorialEnvioCountAggregateInputType | true
    }

  export interface HistorialEnvioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistorialEnvio'], meta: { name: 'HistorialEnvio' } }
    /**
     * Find zero or one HistorialEnvio that matches the filter.
     * @param {HistorialEnvioFindUniqueArgs} args - Arguments to find a HistorialEnvio
     * @example
     * // Get one HistorialEnvio
     * const historialEnvio = await prisma.historialEnvio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialEnvioFindUniqueArgs>(args: SelectSubset<T, HistorialEnvioFindUniqueArgs<ExtArgs>>): Prisma__HistorialEnvioClient<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistorialEnvio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialEnvioFindUniqueOrThrowArgs} args - Arguments to find a HistorialEnvio
     * @example
     * // Get one HistorialEnvio
     * const historialEnvio = await prisma.historialEnvio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialEnvioFindUniqueOrThrowArgs>(args: SelectSubset<T, HistorialEnvioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistorialEnvioClient<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialEnvio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialEnvioFindFirstArgs} args - Arguments to find a HistorialEnvio
     * @example
     * // Get one HistorialEnvio
     * const historialEnvio = await prisma.historialEnvio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialEnvioFindFirstArgs>(args?: SelectSubset<T, HistorialEnvioFindFirstArgs<ExtArgs>>): Prisma__HistorialEnvioClient<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialEnvio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialEnvioFindFirstOrThrowArgs} args - Arguments to find a HistorialEnvio
     * @example
     * // Get one HistorialEnvio
     * const historialEnvio = await prisma.historialEnvio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialEnvioFindFirstOrThrowArgs>(args?: SelectSubset<T, HistorialEnvioFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistorialEnvioClient<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistorialEnvios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialEnvioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistorialEnvios
     * const historialEnvios = await prisma.historialEnvio.findMany()
     * 
     * // Get first 10 HistorialEnvios
     * const historialEnvios = await prisma.historialEnvio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historialEnvioWithIdOnly = await prisma.historialEnvio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistorialEnvioFindManyArgs>(args?: SelectSubset<T, HistorialEnvioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistorialEnvio.
     * @param {HistorialEnvioCreateArgs} args - Arguments to create a HistorialEnvio.
     * @example
     * // Create one HistorialEnvio
     * const HistorialEnvio = await prisma.historialEnvio.create({
     *   data: {
     *     // ... data to create a HistorialEnvio
     *   }
     * })
     * 
     */
    create<T extends HistorialEnvioCreateArgs>(args: SelectSubset<T, HistorialEnvioCreateArgs<ExtArgs>>): Prisma__HistorialEnvioClient<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistorialEnvios.
     * @param {HistorialEnvioCreateManyArgs} args - Arguments to create many HistorialEnvios.
     * @example
     * // Create many HistorialEnvios
     * const historialEnvio = await prisma.historialEnvio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistorialEnvioCreateManyArgs>(args?: SelectSubset<T, HistorialEnvioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistorialEnvios and returns the data saved in the database.
     * @param {HistorialEnvioCreateManyAndReturnArgs} args - Arguments to create many HistorialEnvios.
     * @example
     * // Create many HistorialEnvios
     * const historialEnvio = await prisma.historialEnvio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistorialEnvios and only return the `id`
     * const historialEnvioWithIdOnly = await prisma.historialEnvio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistorialEnvioCreateManyAndReturnArgs>(args?: SelectSubset<T, HistorialEnvioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistorialEnvio.
     * @param {HistorialEnvioDeleteArgs} args - Arguments to delete one HistorialEnvio.
     * @example
     * // Delete one HistorialEnvio
     * const HistorialEnvio = await prisma.historialEnvio.delete({
     *   where: {
     *     // ... filter to delete one HistorialEnvio
     *   }
     * })
     * 
     */
    delete<T extends HistorialEnvioDeleteArgs>(args: SelectSubset<T, HistorialEnvioDeleteArgs<ExtArgs>>): Prisma__HistorialEnvioClient<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistorialEnvio.
     * @param {HistorialEnvioUpdateArgs} args - Arguments to update one HistorialEnvio.
     * @example
     * // Update one HistorialEnvio
     * const historialEnvio = await prisma.historialEnvio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistorialEnvioUpdateArgs>(args: SelectSubset<T, HistorialEnvioUpdateArgs<ExtArgs>>): Prisma__HistorialEnvioClient<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistorialEnvios.
     * @param {HistorialEnvioDeleteManyArgs} args - Arguments to filter HistorialEnvios to delete.
     * @example
     * // Delete a few HistorialEnvios
     * const { count } = await prisma.historialEnvio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistorialEnvioDeleteManyArgs>(args?: SelectSubset<T, HistorialEnvioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialEnvioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistorialEnvios
     * const historialEnvio = await prisma.historialEnvio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistorialEnvioUpdateManyArgs>(args: SelectSubset<T, HistorialEnvioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialEnvios and returns the data updated in the database.
     * @param {HistorialEnvioUpdateManyAndReturnArgs} args - Arguments to update many HistorialEnvios.
     * @example
     * // Update many HistorialEnvios
     * const historialEnvio = await prisma.historialEnvio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistorialEnvios and only return the `id`
     * const historialEnvioWithIdOnly = await prisma.historialEnvio.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistorialEnvioUpdateManyAndReturnArgs>(args: SelectSubset<T, HistorialEnvioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistorialEnvio.
     * @param {HistorialEnvioUpsertArgs} args - Arguments to update or create a HistorialEnvio.
     * @example
     * // Update or create a HistorialEnvio
     * const historialEnvio = await prisma.historialEnvio.upsert({
     *   create: {
     *     // ... data to create a HistorialEnvio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistorialEnvio we want to update
     *   }
     * })
     */
    upsert<T extends HistorialEnvioUpsertArgs>(args: SelectSubset<T, HistorialEnvioUpsertArgs<ExtArgs>>): Prisma__HistorialEnvioClient<$Result.GetResult<Prisma.$HistorialEnvioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistorialEnvios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialEnvioCountArgs} args - Arguments to filter HistorialEnvios to count.
     * @example
     * // Count the number of HistorialEnvios
     * const count = await prisma.historialEnvio.count({
     *   where: {
     *     // ... the filter for the HistorialEnvios we want to count
     *   }
     * })
    **/
    count<T extends HistorialEnvioCountArgs>(
      args?: Subset<T, HistorialEnvioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistorialEnvioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistorialEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialEnvioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistorialEnvioAggregateArgs>(args: Subset<T, HistorialEnvioAggregateArgs>): Prisma.PrismaPromise<GetHistorialEnvioAggregateType<T>>

    /**
     * Group by HistorialEnvio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialEnvioGroupByArgs} args - Group by arguments.
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
      T extends HistorialEnvioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistorialEnvioGroupByArgs['orderBy'] }
        : { orderBy?: HistorialEnvioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistorialEnvioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialEnvioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistorialEnvio model
   */
  readonly fields: HistorialEnvioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistorialEnvio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistorialEnvioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends HistorialEnvio$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, HistorialEnvio$usuarioArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistorialEnvio model
   */
  interface HistorialEnvioFieldRefs {
    readonly id: FieldRef<"HistorialEnvio", 'Int'>
    readonly NumeroGuia: FieldRef<"HistorialEnvio", 'String'>
    readonly PaymentId: FieldRef<"HistorialEnvio", 'String'>
    readonly Origen: FieldRef<"HistorialEnvio", 'String'>
    readonly Destino: FieldRef<"HistorialEnvio", 'String'>
    readonly Destinatario: FieldRef<"HistorialEnvio", 'String'>
    readonly Remitente: FieldRef<"HistorialEnvio", 'String'>
    readonly Estado: FieldRef<"HistorialEnvio", 'String'>
    readonly FechaSolicitud: FieldRef<"HistorialEnvio", 'DateTime'>
    readonly usuarioId: FieldRef<"HistorialEnvio", 'String'>
    readonly peso: FieldRef<"HistorialEnvio", 'Float'>
    readonly valor: FieldRef<"HistorialEnvio", 'Float'>
    readonly dimensiones: FieldRef<"HistorialEnvio", 'String'>
    readonly notas: FieldRef<"HistorialEnvio", 'String'>
    readonly fechaEntrega: FieldRef<"HistorialEnvio", 'DateTime'>
    readonly creadoEn: FieldRef<"HistorialEnvio", 'DateTime'>
    readonly actualizadoEn: FieldRef<"HistorialEnvio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistorialEnvio findUnique
   */
  export type HistorialEnvioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialEnvio to fetch.
     */
    where: HistorialEnvioWhereUniqueInput
  }

  /**
   * HistorialEnvio findUniqueOrThrow
   */
  export type HistorialEnvioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialEnvio to fetch.
     */
    where: HistorialEnvioWhereUniqueInput
  }

  /**
   * HistorialEnvio findFirst
   */
  export type HistorialEnvioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialEnvio to fetch.
     */
    where?: HistorialEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialEnvios to fetch.
     */
    orderBy?: HistorialEnvioOrderByWithRelationInput | HistorialEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialEnvios.
     */
    cursor?: HistorialEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialEnvios.
     */
    distinct?: HistorialEnvioScalarFieldEnum | HistorialEnvioScalarFieldEnum[]
  }

  /**
   * HistorialEnvio findFirstOrThrow
   */
  export type HistorialEnvioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialEnvio to fetch.
     */
    where?: HistorialEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialEnvios to fetch.
     */
    orderBy?: HistorialEnvioOrderByWithRelationInput | HistorialEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialEnvios.
     */
    cursor?: HistorialEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialEnvios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialEnvios.
     */
    distinct?: HistorialEnvioScalarFieldEnum | HistorialEnvioScalarFieldEnum[]
  }

  /**
   * HistorialEnvio findMany
   */
  export type HistorialEnvioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * Filter, which HistorialEnvios to fetch.
     */
    where?: HistorialEnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialEnvios to fetch.
     */
    orderBy?: HistorialEnvioOrderByWithRelationInput | HistorialEnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistorialEnvios.
     */
    cursor?: HistorialEnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialEnvios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialEnvios.
     */
    skip?: number
    distinct?: HistorialEnvioScalarFieldEnum | HistorialEnvioScalarFieldEnum[]
  }

  /**
   * HistorialEnvio create
   */
  export type HistorialEnvioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * The data needed to create a HistorialEnvio.
     */
    data: XOR<HistorialEnvioCreateInput, HistorialEnvioUncheckedCreateInput>
  }

  /**
   * HistorialEnvio createMany
   */
  export type HistorialEnvioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistorialEnvios.
     */
    data: HistorialEnvioCreateManyInput | HistorialEnvioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistorialEnvio createManyAndReturn
   */
  export type HistorialEnvioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * The data used to create many HistorialEnvios.
     */
    data: HistorialEnvioCreateManyInput | HistorialEnvioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistorialEnvio update
   */
  export type HistorialEnvioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * The data needed to update a HistorialEnvio.
     */
    data: XOR<HistorialEnvioUpdateInput, HistorialEnvioUncheckedUpdateInput>
    /**
     * Choose, which HistorialEnvio to update.
     */
    where: HistorialEnvioWhereUniqueInput
  }

  /**
   * HistorialEnvio updateMany
   */
  export type HistorialEnvioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistorialEnvios.
     */
    data: XOR<HistorialEnvioUpdateManyMutationInput, HistorialEnvioUncheckedUpdateManyInput>
    /**
     * Filter which HistorialEnvios to update
     */
    where?: HistorialEnvioWhereInput
    /**
     * Limit how many HistorialEnvios to update.
     */
    limit?: number
  }

  /**
   * HistorialEnvio updateManyAndReturn
   */
  export type HistorialEnvioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * The data used to update HistorialEnvios.
     */
    data: XOR<HistorialEnvioUpdateManyMutationInput, HistorialEnvioUncheckedUpdateManyInput>
    /**
     * Filter which HistorialEnvios to update
     */
    where?: HistorialEnvioWhereInput
    /**
     * Limit how many HistorialEnvios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistorialEnvio upsert
   */
  export type HistorialEnvioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * The filter to search for the HistorialEnvio to update in case it exists.
     */
    where: HistorialEnvioWhereUniqueInput
    /**
     * In case the HistorialEnvio found by the `where` argument doesn't exist, create a new HistorialEnvio with this data.
     */
    create: XOR<HistorialEnvioCreateInput, HistorialEnvioUncheckedCreateInput>
    /**
     * In case the HistorialEnvio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistorialEnvioUpdateInput, HistorialEnvioUncheckedUpdateInput>
  }

  /**
   * HistorialEnvio delete
   */
  export type HistorialEnvioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
    /**
     * Filter which HistorialEnvio to delete.
     */
    where: HistorialEnvioWhereUniqueInput
  }

  /**
   * HistorialEnvio deleteMany
   */
  export type HistorialEnvioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialEnvios to delete
     */
    where?: HistorialEnvioWhereInput
    /**
     * Limit how many HistorialEnvios to delete.
     */
    limit?: number
  }

  /**
   * HistorialEnvio.usuario
   */
  export type HistorialEnvio$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HistorialEnvio without action
   */
  export type HistorialEnvioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialEnvio
     */
    select?: HistorialEnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialEnvio
     */
    omit?: HistorialEnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialEnvioInclude<ExtArgs> | null
  }


  /**
   * Model Contacto
   */

  export type AggregateContacto = {
    _count: ContactoCountAggregateOutputType | null
    _avg: ContactoAvgAggregateOutputType | null
    _sum: ContactoSumAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  export type ContactoAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactoSumAggregateOutputType = {
    id: number | null
  }

  export type ContactoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo_documento: string | null
    numero_documento: string | null
    celular: string | null
    ciudad: string | null
    email: string | null
    correo: string | null
    mensaje: string | null
    creadoEn: Date | null
    leido: boolean | null
    respondido: boolean | null
    archivado: boolean | null
    respuesta: string | null
    fechaRespuesta: Date | null
  }

  export type ContactoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo_documento: string | null
    numero_documento: string | null
    celular: string | null
    ciudad: string | null
    email: string | null
    correo: string | null
    mensaje: string | null
    creadoEn: Date | null
    leido: boolean | null
    respondido: boolean | null
    archivado: boolean | null
    respuesta: string | null
    fechaRespuesta: Date | null
  }

  export type ContactoCountAggregateOutputType = {
    id: number
    nombre: number
    tipo_documento: number
    numero_documento: number
    celular: number
    ciudad: number
    email: number
    correo: number
    mensaje: number
    creadoEn: number
    leido: number
    respondido: number
    archivado: number
    respuesta: number
    fechaRespuesta: number
    _all: number
  }


  export type ContactoAvgAggregateInputType = {
    id?: true
  }

  export type ContactoSumAggregateInputType = {
    id?: true
  }

  export type ContactoMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo_documento?: true
    numero_documento?: true
    celular?: true
    ciudad?: true
    email?: true
    correo?: true
    mensaje?: true
    creadoEn?: true
    leido?: true
    respondido?: true
    archivado?: true
    respuesta?: true
    fechaRespuesta?: true
  }

  export type ContactoMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo_documento?: true
    numero_documento?: true
    celular?: true
    ciudad?: true
    email?: true
    correo?: true
    mensaje?: true
    creadoEn?: true
    leido?: true
    respondido?: true
    archivado?: true
    respuesta?: true
    fechaRespuesta?: true
  }

  export type ContactoCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo_documento?: true
    numero_documento?: true
    celular?: true
    ciudad?: true
    email?: true
    correo?: true
    mensaje?: true
    creadoEn?: true
    leido?: true
    respondido?: true
    archivado?: true
    respuesta?: true
    fechaRespuesta?: true
    _all?: true
  }

  export type ContactoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacto to aggregate.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contactos
    **/
    _count?: true | ContactoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactoMaxAggregateInputType
  }

  export type GetContactoAggregateType<T extends ContactoAggregateArgs> = {
        [P in keyof T & keyof AggregateContacto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacto[P]>
      : GetScalarType<T[P], AggregateContacto[P]>
  }




  export type ContactoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoWhereInput
    orderBy?: ContactoOrderByWithAggregationInput | ContactoOrderByWithAggregationInput[]
    by: ContactoScalarFieldEnum[] | ContactoScalarFieldEnum
    having?: ContactoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactoCountAggregateInputType | true
    _avg?: ContactoAvgAggregateInputType
    _sum?: ContactoSumAggregateInputType
    _min?: ContactoMinAggregateInputType
    _max?: ContactoMaxAggregateInputType
  }

  export type ContactoGroupByOutputType = {
    id: number
    nombre: string
    tipo_documento: string | null
    numero_documento: string | null
    celular: string | null
    ciudad: string | null
    email: string | null
    correo: string
    mensaje: string
    creadoEn: Date
    leido: boolean
    respondido: boolean
    archivado: boolean
    respuesta: string | null
    fechaRespuesta: Date | null
    _count: ContactoCountAggregateOutputType | null
    _avg: ContactoAvgAggregateOutputType | null
    _sum: ContactoSumAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  type GetContactoGroupByPayload<T extends ContactoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactoGroupByOutputType[P]>
        }
      >
    >


  export type ContactoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    celular?: boolean
    ciudad?: boolean
    email?: boolean
    correo?: boolean
    mensaje?: boolean
    creadoEn?: boolean
    leido?: boolean
    respondido?: boolean
    archivado?: boolean
    respuesta?: boolean
    fechaRespuesta?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    celular?: boolean
    ciudad?: boolean
    email?: boolean
    correo?: boolean
    mensaje?: boolean
    creadoEn?: boolean
    leido?: boolean
    respondido?: boolean
    archivado?: boolean
    respuesta?: boolean
    fechaRespuesta?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    celular?: boolean
    ciudad?: boolean
    email?: boolean
    correo?: boolean
    mensaje?: boolean
    creadoEn?: boolean
    leido?: boolean
    respondido?: boolean
    archivado?: boolean
    respuesta?: boolean
    fechaRespuesta?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    celular?: boolean
    ciudad?: boolean
    email?: boolean
    correo?: boolean
    mensaje?: boolean
    creadoEn?: boolean
    leido?: boolean
    respondido?: boolean
    archivado?: boolean
    respuesta?: boolean
    fechaRespuesta?: boolean
  }

  export type ContactoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo_documento" | "numero_documento" | "celular" | "ciudad" | "email" | "correo" | "mensaje" | "creadoEn" | "leido" | "respondido" | "archivado" | "respuesta" | "fechaRespuesta", ExtArgs["result"]["contacto"]>

  export type $ContactoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      tipo_documento: string | null
      numero_documento: string | null
      celular: string | null
      ciudad: string | null
      email: string | null
      correo: string
      mensaje: string
      creadoEn: Date
      leido: boolean
      respondido: boolean
      archivado: boolean
      respuesta: string | null
      fechaRespuesta: Date | null
    }, ExtArgs["result"]["contacto"]>
    composites: {}
  }

  type ContactoGetPayload<S extends boolean | null | undefined | ContactoDefaultArgs> = $Result.GetResult<Prisma.$ContactoPayload, S>

  type ContactoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactoCountAggregateInputType | true
    }

  export interface ContactoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacto'], meta: { name: 'Contacto' } }
    /**
     * Find zero or one Contacto that matches the filter.
     * @param {ContactoFindUniqueArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactoFindUniqueArgs>(args: SelectSubset<T, ContactoFindUniqueArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactoFindUniqueOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindFirstArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactoFindFirstArgs>(args?: SelectSubset<T, ContactoFindFirstArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindFirstOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactos
     * const contactos = await prisma.contacto.findMany()
     * 
     * // Get first 10 Contactos
     * const contactos = await prisma.contacto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactoWithIdOnly = await prisma.contacto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactoFindManyArgs>(args?: SelectSubset<T, ContactoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacto.
     * @param {ContactoCreateArgs} args - Arguments to create a Contacto.
     * @example
     * // Create one Contacto
     * const Contacto = await prisma.contacto.create({
     *   data: {
     *     // ... data to create a Contacto
     *   }
     * })
     * 
     */
    create<T extends ContactoCreateArgs>(args: SelectSubset<T, ContactoCreateArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactos.
     * @param {ContactoCreateManyArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contacto = await prisma.contacto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactoCreateManyArgs>(args?: SelectSubset<T, ContactoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contactos and returns the data saved in the database.
     * @param {ContactoCreateManyAndReturnArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contacto = await prisma.contacto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contactos and only return the `id`
     * const contactoWithIdOnly = await prisma.contacto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacto.
     * @param {ContactoDeleteArgs} args - Arguments to delete one Contacto.
     * @example
     * // Delete one Contacto
     * const Contacto = await prisma.contacto.delete({
     *   where: {
     *     // ... filter to delete one Contacto
     *   }
     * })
     * 
     */
    delete<T extends ContactoDeleteArgs>(args: SelectSubset<T, ContactoDeleteArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacto.
     * @param {ContactoUpdateArgs} args - Arguments to update one Contacto.
     * @example
     * // Update one Contacto
     * const contacto = await prisma.contacto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactoUpdateArgs>(args: SelectSubset<T, ContactoUpdateArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactos.
     * @param {ContactoDeleteManyArgs} args - Arguments to filter Contactos to delete.
     * @example
     * // Delete a few Contactos
     * const { count } = await prisma.contacto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactoDeleteManyArgs>(args?: SelectSubset<T, ContactoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactoUpdateManyArgs>(args: SelectSubset<T, ContactoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos and returns the data updated in the database.
     * @param {ContactoUpdateManyAndReturnArgs} args - Arguments to update many Contactos.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contactos and only return the `id`
     * const contactoWithIdOnly = await prisma.contacto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacto.
     * @param {ContactoUpsertArgs} args - Arguments to update or create a Contacto.
     * @example
     * // Update or create a Contacto
     * const contacto = await prisma.contacto.upsert({
     *   create: {
     *     // ... data to create a Contacto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacto we want to update
     *   }
     * })
     */
    upsert<T extends ContactoUpsertArgs>(args: SelectSubset<T, ContactoUpsertArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoCountArgs} args - Arguments to filter Contactos to count.
     * @example
     * // Count the number of Contactos
     * const count = await prisma.contacto.count({
     *   where: {
     *     // ... the filter for the Contactos we want to count
     *   }
     * })
    **/
    count<T extends ContactoCountArgs>(
      args?: Subset<T, ContactoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactoAggregateArgs>(args: Subset<T, ContactoAggregateArgs>): Prisma.PrismaPromise<GetContactoAggregateType<T>>

    /**
     * Group by Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoGroupByArgs} args - Group by arguments.
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
      T extends ContactoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactoGroupByArgs['orderBy'] }
        : { orderBy?: ContactoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacto model
   */
  readonly fields: ContactoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contacto model
   */
  interface ContactoFieldRefs {
    readonly id: FieldRef<"Contacto", 'Int'>
    readonly nombre: FieldRef<"Contacto", 'String'>
    readonly tipo_documento: FieldRef<"Contacto", 'String'>
    readonly numero_documento: FieldRef<"Contacto", 'String'>
    readonly celular: FieldRef<"Contacto", 'String'>
    readonly ciudad: FieldRef<"Contacto", 'String'>
    readonly email: FieldRef<"Contacto", 'String'>
    readonly correo: FieldRef<"Contacto", 'String'>
    readonly mensaje: FieldRef<"Contacto", 'String'>
    readonly creadoEn: FieldRef<"Contacto", 'DateTime'>
    readonly leido: FieldRef<"Contacto", 'Boolean'>
    readonly respondido: FieldRef<"Contacto", 'Boolean'>
    readonly archivado: FieldRef<"Contacto", 'Boolean'>
    readonly respuesta: FieldRef<"Contacto", 'String'>
    readonly fechaRespuesta: FieldRef<"Contacto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacto findUnique
   */
  export type ContactoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto findUniqueOrThrow
   */
  export type ContactoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto findFirst
   */
  export type ContactoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto findFirstOrThrow
   */
  export type ContactoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto findMany
   */
  export type ContactoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contactos to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto create
   */
  export type ContactoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data needed to create a Contacto.
     */
    data: XOR<ContactoCreateInput, ContactoUncheckedCreateInput>
  }

  /**
   * Contacto createMany
   */
  export type ContactoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contactos.
     */
    data: ContactoCreateManyInput | ContactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacto createManyAndReturn
   */
  export type ContactoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data used to create many Contactos.
     */
    data: ContactoCreateManyInput | ContactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacto update
   */
  export type ContactoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data needed to update a Contacto.
     */
    data: XOR<ContactoUpdateInput, ContactoUncheckedUpdateInput>
    /**
     * Choose, which Contacto to update.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto updateMany
   */
  export type ContactoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contactos.
     */
    data: XOR<ContactoUpdateManyMutationInput, ContactoUncheckedUpdateManyInput>
    /**
     * Filter which Contactos to update
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to update.
     */
    limit?: number
  }

  /**
   * Contacto updateManyAndReturn
   */
  export type ContactoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data used to update Contactos.
     */
    data: XOR<ContactoUpdateManyMutationInput, ContactoUncheckedUpdateManyInput>
    /**
     * Filter which Contactos to update
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to update.
     */
    limit?: number
  }

  /**
   * Contacto upsert
   */
  export type ContactoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The filter to search for the Contacto to update in case it exists.
     */
    where: ContactoWhereUniqueInput
    /**
     * In case the Contacto found by the `where` argument doesn't exist, create a new Contacto with this data.
     */
    create: XOR<ContactoCreateInput, ContactoUncheckedCreateInput>
    /**
     * In case the Contacto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactoUpdateInput, ContactoUncheckedUpdateInput>
  }

  /**
   * Contacto delete
   */
  export type ContactoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter which Contacto to delete.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto deleteMany
   */
  export type ContactoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contactos to delete
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to delete.
     */
    limit?: number
  }

  /**
   * Contacto without action
   */
  export type ContactoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
  }


  /**
   * Model configuracion_app
   */

  export type AggregateConfiguracion_app = {
    _count: Configuracion_appCountAggregateOutputType | null
    _avg: Configuracion_appAvgAggregateOutputType | null
    _sum: Configuracion_appSumAggregateOutputType | null
    _min: Configuracion_appMinAggregateOutputType | null
    _max: Configuracion_appMaxAggregateOutputType | null
  }

  export type Configuracion_appAvgAggregateOutputType = {
    id: number | null
  }

  export type Configuracion_appSumAggregateOutputType = {
    id: number | null
  }

  export type Configuracion_appMinAggregateOutputType = {
    id: number | null
    clave: string | null
    valor: string | null
    descripcion: string | null
    activa: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type Configuracion_appMaxAggregateOutputType = {
    id: number | null
    clave: string | null
    valor: string | null
    descripcion: string | null
    activa: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type Configuracion_appCountAggregateOutputType = {
    id: number
    clave: number
    valor: number
    descripcion: number
    activa: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type Configuracion_appAvgAggregateInputType = {
    id?: true
  }

  export type Configuracion_appSumAggregateInputType = {
    id?: true
  }

  export type Configuracion_appMinAggregateInputType = {
    id?: true
    clave?: true
    valor?: true
    descripcion?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type Configuracion_appMaxAggregateInputType = {
    id?: true
    clave?: true
    valor?: true
    descripcion?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type Configuracion_appCountAggregateInputType = {
    id?: true
    clave?: true
    valor?: true
    descripcion?: true
    activa?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type Configuracion_appAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracion_app to aggregate.
     */
    where?: configuracion_appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracion_apps to fetch.
     */
    orderBy?: configuracion_appOrderByWithRelationInput | configuracion_appOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configuracion_appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracion_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracion_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configuracion_apps
    **/
    _count?: true | Configuracion_appCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Configuracion_appAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Configuracion_appSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Configuracion_appMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Configuracion_appMaxAggregateInputType
  }

  export type GetConfiguracion_appAggregateType<T extends Configuracion_appAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracion_app]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracion_app[P]>
      : GetScalarType<T[P], AggregateConfiguracion_app[P]>
  }




  export type configuracion_appGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracion_appWhereInput
    orderBy?: configuracion_appOrderByWithAggregationInput | configuracion_appOrderByWithAggregationInput[]
    by: Configuracion_appScalarFieldEnum[] | Configuracion_appScalarFieldEnum
    having?: configuracion_appScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Configuracion_appCountAggregateInputType | true
    _avg?: Configuracion_appAvgAggregateInputType
    _sum?: Configuracion_appSumAggregateInputType
    _min?: Configuracion_appMinAggregateInputType
    _max?: Configuracion_appMaxAggregateInputType
  }

  export type Configuracion_appGroupByOutputType = {
    id: number
    clave: string
    valor: string
    descripcion: string | null
    activa: boolean
    creadoEn: Date
    actualizadoEn: Date
    _count: Configuracion_appCountAggregateOutputType | null
    _avg: Configuracion_appAvgAggregateOutputType | null
    _sum: Configuracion_appSumAggregateOutputType | null
    _min: Configuracion_appMinAggregateOutputType | null
    _max: Configuracion_appMaxAggregateOutputType | null
  }

  type GetConfiguracion_appGroupByPayload<T extends configuracion_appGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Configuracion_appGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Configuracion_appGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Configuracion_appGroupByOutputType[P]>
            : GetScalarType<T[P], Configuracion_appGroupByOutputType[P]>
        }
      >
    >


  export type configuracion_appSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clave?: boolean
    valor?: boolean
    descripcion?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["configuracion_app"]>

  export type configuracion_appSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clave?: boolean
    valor?: boolean
    descripcion?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["configuracion_app"]>

  export type configuracion_appSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clave?: boolean
    valor?: boolean
    descripcion?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["configuracion_app"]>

  export type configuracion_appSelectScalar = {
    id?: boolean
    clave?: boolean
    valor?: boolean
    descripcion?: boolean
    activa?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type configuracion_appOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clave" | "valor" | "descripcion" | "activa" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["configuracion_app"]>

  export type $configuracion_appPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configuracion_app"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clave: string
      valor: string
      descripcion: string | null
      activa: boolean
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["configuracion_app"]>
    composites: {}
  }

  type configuracion_appGetPayload<S extends boolean | null | undefined | configuracion_appDefaultArgs> = $Result.GetResult<Prisma.$configuracion_appPayload, S>

  type configuracion_appCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configuracion_appFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Configuracion_appCountAggregateInputType | true
    }

  export interface configuracion_appDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configuracion_app'], meta: { name: 'configuracion_app' } }
    /**
     * Find zero or one Configuracion_app that matches the filter.
     * @param {configuracion_appFindUniqueArgs} args - Arguments to find a Configuracion_app
     * @example
     * // Get one Configuracion_app
     * const configuracion_app = await prisma.configuracion_app.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configuracion_appFindUniqueArgs>(args: SelectSubset<T, configuracion_appFindUniqueArgs<ExtArgs>>): Prisma__configuracion_appClient<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuracion_app that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configuracion_appFindUniqueOrThrowArgs} args - Arguments to find a Configuracion_app
     * @example
     * // Get one Configuracion_app
     * const configuracion_app = await prisma.configuracion_app.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configuracion_appFindUniqueOrThrowArgs>(args: SelectSubset<T, configuracion_appFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configuracion_appClient<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracion_app that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_appFindFirstArgs} args - Arguments to find a Configuracion_app
     * @example
     * // Get one Configuracion_app
     * const configuracion_app = await prisma.configuracion_app.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configuracion_appFindFirstArgs>(args?: SelectSubset<T, configuracion_appFindFirstArgs<ExtArgs>>): Prisma__configuracion_appClient<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuracion_app that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_appFindFirstOrThrowArgs} args - Arguments to find a Configuracion_app
     * @example
     * // Get one Configuracion_app
     * const configuracion_app = await prisma.configuracion_app.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configuracion_appFindFirstOrThrowArgs>(args?: SelectSubset<T, configuracion_appFindFirstOrThrowArgs<ExtArgs>>): Prisma__configuracion_appClient<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuracion_apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_appFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuracion_apps
     * const configuracion_apps = await prisma.configuracion_app.findMany()
     * 
     * // Get first 10 Configuracion_apps
     * const configuracion_apps = await prisma.configuracion_app.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configuracion_appWithIdOnly = await prisma.configuracion_app.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends configuracion_appFindManyArgs>(args?: SelectSubset<T, configuracion_appFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuracion_app.
     * @param {configuracion_appCreateArgs} args - Arguments to create a Configuracion_app.
     * @example
     * // Create one Configuracion_app
     * const Configuracion_app = await prisma.configuracion_app.create({
     *   data: {
     *     // ... data to create a Configuracion_app
     *   }
     * })
     * 
     */
    create<T extends configuracion_appCreateArgs>(args: SelectSubset<T, configuracion_appCreateArgs<ExtArgs>>): Prisma__configuracion_appClient<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuracion_apps.
     * @param {configuracion_appCreateManyArgs} args - Arguments to create many Configuracion_apps.
     * @example
     * // Create many Configuracion_apps
     * const configuracion_app = await prisma.configuracion_app.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configuracion_appCreateManyArgs>(args?: SelectSubset<T, configuracion_appCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configuracion_apps and returns the data saved in the database.
     * @param {configuracion_appCreateManyAndReturnArgs} args - Arguments to create many Configuracion_apps.
     * @example
     * // Create many Configuracion_apps
     * const configuracion_app = await prisma.configuracion_app.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configuracion_apps and only return the `id`
     * const configuracion_appWithIdOnly = await prisma.configuracion_app.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends configuracion_appCreateManyAndReturnArgs>(args?: SelectSubset<T, configuracion_appCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configuracion_app.
     * @param {configuracion_appDeleteArgs} args - Arguments to delete one Configuracion_app.
     * @example
     * // Delete one Configuracion_app
     * const Configuracion_app = await prisma.configuracion_app.delete({
     *   where: {
     *     // ... filter to delete one Configuracion_app
     *   }
     * })
     * 
     */
    delete<T extends configuracion_appDeleteArgs>(args: SelectSubset<T, configuracion_appDeleteArgs<ExtArgs>>): Prisma__configuracion_appClient<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuracion_app.
     * @param {configuracion_appUpdateArgs} args - Arguments to update one Configuracion_app.
     * @example
     * // Update one Configuracion_app
     * const configuracion_app = await prisma.configuracion_app.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configuracion_appUpdateArgs>(args: SelectSubset<T, configuracion_appUpdateArgs<ExtArgs>>): Prisma__configuracion_appClient<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuracion_apps.
     * @param {configuracion_appDeleteManyArgs} args - Arguments to filter Configuracion_apps to delete.
     * @example
     * // Delete a few Configuracion_apps
     * const { count } = await prisma.configuracion_app.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configuracion_appDeleteManyArgs>(args?: SelectSubset<T, configuracion_appDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracion_apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_appUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuracion_apps
     * const configuracion_app = await prisma.configuracion_app.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configuracion_appUpdateManyArgs>(args: SelectSubset<T, configuracion_appUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuracion_apps and returns the data updated in the database.
     * @param {configuracion_appUpdateManyAndReturnArgs} args - Arguments to update many Configuracion_apps.
     * @example
     * // Update many Configuracion_apps
     * const configuracion_app = await prisma.configuracion_app.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configuracion_apps and only return the `id`
     * const configuracion_appWithIdOnly = await prisma.configuracion_app.updateManyAndReturn({
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
    updateManyAndReturn<T extends configuracion_appUpdateManyAndReturnArgs>(args: SelectSubset<T, configuracion_appUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configuracion_app.
     * @param {configuracion_appUpsertArgs} args - Arguments to update or create a Configuracion_app.
     * @example
     * // Update or create a Configuracion_app
     * const configuracion_app = await prisma.configuracion_app.upsert({
     *   create: {
     *     // ... data to create a Configuracion_app
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuracion_app we want to update
     *   }
     * })
     */
    upsert<T extends configuracion_appUpsertArgs>(args: SelectSubset<T, configuracion_appUpsertArgs<ExtArgs>>): Prisma__configuracion_appClient<$Result.GetResult<Prisma.$configuracion_appPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuracion_apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_appCountArgs} args - Arguments to filter Configuracion_apps to count.
     * @example
     * // Count the number of Configuracion_apps
     * const count = await prisma.configuracion_app.count({
     *   where: {
     *     // ... the filter for the Configuracion_apps we want to count
     *   }
     * })
    **/
    count<T extends configuracion_appCountArgs>(
      args?: Subset<T, configuracion_appCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Configuracion_appCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuracion_app.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configuracion_appAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Configuracion_appAggregateArgs>(args: Subset<T, Configuracion_appAggregateArgs>): Prisma.PrismaPromise<GetConfiguracion_appAggregateType<T>>

    /**
     * Group by Configuracion_app.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracion_appGroupByArgs} args - Group by arguments.
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
      T extends configuracion_appGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configuracion_appGroupByArgs['orderBy'] }
        : { orderBy?: configuracion_appGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, configuracion_appGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracion_appGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configuracion_app model
   */
  readonly fields: configuracion_appFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configuracion_app.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configuracion_appClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the configuracion_app model
   */
  interface configuracion_appFieldRefs {
    readonly id: FieldRef<"configuracion_app", 'Int'>
    readonly clave: FieldRef<"configuracion_app", 'String'>
    readonly valor: FieldRef<"configuracion_app", 'String'>
    readonly descripcion: FieldRef<"configuracion_app", 'String'>
    readonly activa: FieldRef<"configuracion_app", 'Boolean'>
    readonly creadoEn: FieldRef<"configuracion_app", 'DateTime'>
    readonly actualizadoEn: FieldRef<"configuracion_app", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * configuracion_app findUnique
   */
  export type configuracion_appFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * Filter, which configuracion_app to fetch.
     */
    where: configuracion_appWhereUniqueInput
  }

  /**
   * configuracion_app findUniqueOrThrow
   */
  export type configuracion_appFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * Filter, which configuracion_app to fetch.
     */
    where: configuracion_appWhereUniqueInput
  }

  /**
   * configuracion_app findFirst
   */
  export type configuracion_appFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * Filter, which configuracion_app to fetch.
     */
    where?: configuracion_appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracion_apps to fetch.
     */
    orderBy?: configuracion_appOrderByWithRelationInput | configuracion_appOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracion_apps.
     */
    cursor?: configuracion_appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracion_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracion_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracion_apps.
     */
    distinct?: Configuracion_appScalarFieldEnum | Configuracion_appScalarFieldEnum[]
  }

  /**
   * configuracion_app findFirstOrThrow
   */
  export type configuracion_appFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * Filter, which configuracion_app to fetch.
     */
    where?: configuracion_appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracion_apps to fetch.
     */
    orderBy?: configuracion_appOrderByWithRelationInput | configuracion_appOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuracion_apps.
     */
    cursor?: configuracion_appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracion_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracion_apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuracion_apps.
     */
    distinct?: Configuracion_appScalarFieldEnum | Configuracion_appScalarFieldEnum[]
  }

  /**
   * configuracion_app findMany
   */
  export type configuracion_appFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * Filter, which configuracion_apps to fetch.
     */
    where?: configuracion_appWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuracion_apps to fetch.
     */
    orderBy?: configuracion_appOrderByWithRelationInput | configuracion_appOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configuracion_apps.
     */
    cursor?: configuracion_appWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuracion_apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuracion_apps.
     */
    skip?: number
    distinct?: Configuracion_appScalarFieldEnum | Configuracion_appScalarFieldEnum[]
  }

  /**
   * configuracion_app create
   */
  export type configuracion_appCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * The data needed to create a configuracion_app.
     */
    data: XOR<configuracion_appCreateInput, configuracion_appUncheckedCreateInput>
  }

  /**
   * configuracion_app createMany
   */
  export type configuracion_appCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configuracion_apps.
     */
    data: configuracion_appCreateManyInput | configuracion_appCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuracion_app createManyAndReturn
   */
  export type configuracion_appCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * The data used to create many configuracion_apps.
     */
    data: configuracion_appCreateManyInput | configuracion_appCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuracion_app update
   */
  export type configuracion_appUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * The data needed to update a configuracion_app.
     */
    data: XOR<configuracion_appUpdateInput, configuracion_appUncheckedUpdateInput>
    /**
     * Choose, which configuracion_app to update.
     */
    where: configuracion_appWhereUniqueInput
  }

  /**
   * configuracion_app updateMany
   */
  export type configuracion_appUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configuracion_apps.
     */
    data: XOR<configuracion_appUpdateManyMutationInput, configuracion_appUncheckedUpdateManyInput>
    /**
     * Filter which configuracion_apps to update
     */
    where?: configuracion_appWhereInput
    /**
     * Limit how many configuracion_apps to update.
     */
    limit?: number
  }

  /**
   * configuracion_app updateManyAndReturn
   */
  export type configuracion_appUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * The data used to update configuracion_apps.
     */
    data: XOR<configuracion_appUpdateManyMutationInput, configuracion_appUncheckedUpdateManyInput>
    /**
     * Filter which configuracion_apps to update
     */
    where?: configuracion_appWhereInput
    /**
     * Limit how many configuracion_apps to update.
     */
    limit?: number
  }

  /**
   * configuracion_app upsert
   */
  export type configuracion_appUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * The filter to search for the configuracion_app to update in case it exists.
     */
    where: configuracion_appWhereUniqueInput
    /**
     * In case the configuracion_app found by the `where` argument doesn't exist, create a new configuracion_app with this data.
     */
    create: XOR<configuracion_appCreateInput, configuracion_appUncheckedCreateInput>
    /**
     * In case the configuracion_app was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configuracion_appUpdateInput, configuracion_appUncheckedUpdateInput>
  }

  /**
   * configuracion_app delete
   */
  export type configuracion_appDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
    /**
     * Filter which configuracion_app to delete.
     */
    where: configuracion_appWhereUniqueInput
  }

  /**
   * configuracion_app deleteMany
   */
  export type configuracion_appDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuracion_apps to delete
     */
    where?: configuracion_appWhereInput
    /**
     * Limit how many configuracion_apps to delete.
     */
    limit?: number
  }

  /**
   * configuracion_app without action
   */
  export type configuracion_appDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuracion_app
     */
    select?: configuracion_appSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuracion_app
     */
    omit?: configuracion_appOmit<ExtArgs> | null
  }


  /**
   * Model eventos_analytics
   */

  export type AggregateEventos_analytics = {
    _count: Eventos_analyticsCountAggregateOutputType | null
    _min: Eventos_analyticsMinAggregateOutputType | null
    _max: Eventos_analyticsMaxAggregateOutputType | null
  }

  export type Eventos_analyticsMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    sesionId: string | null
    eventoTipo: string | null
    eventoNombre: string | null
    pantalla: string | null
    timestamp: Date | null
  }

  export type Eventos_analyticsMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    sesionId: string | null
    eventoTipo: string | null
    eventoNombre: string | null
    pantalla: string | null
    timestamp: Date | null
  }

  export type Eventos_analyticsCountAggregateOutputType = {
    id: number
    usuarioId: number
    sesionId: number
    eventoTipo: number
    eventoNombre: number
    pantalla: number
    datos: number
    timestamp: number
    _all: number
  }


  export type Eventos_analyticsMinAggregateInputType = {
    id?: true
    usuarioId?: true
    sesionId?: true
    eventoTipo?: true
    eventoNombre?: true
    pantalla?: true
    timestamp?: true
  }

  export type Eventos_analyticsMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    sesionId?: true
    eventoTipo?: true
    eventoNombre?: true
    pantalla?: true
    timestamp?: true
  }

  export type Eventos_analyticsCountAggregateInputType = {
    id?: true
    usuarioId?: true
    sesionId?: true
    eventoTipo?: true
    eventoNombre?: true
    pantalla?: true
    datos?: true
    timestamp?: true
    _all?: true
  }

  export type Eventos_analyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos_analytics to aggregate.
     */
    where?: eventos_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_analytics to fetch.
     */
    orderBy?: eventos_analyticsOrderByWithRelationInput | eventos_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventos_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos_analytics
    **/
    _count?: true | Eventos_analyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eventos_analyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eventos_analyticsMaxAggregateInputType
  }

  export type GetEventos_analyticsAggregateType<T extends Eventos_analyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos_analytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos_analytics[P]>
      : GetScalarType<T[P], AggregateEventos_analytics[P]>
  }




  export type eventos_analyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventos_analyticsWhereInput
    orderBy?: eventos_analyticsOrderByWithAggregationInput | eventos_analyticsOrderByWithAggregationInput[]
    by: Eventos_analyticsScalarFieldEnum[] | Eventos_analyticsScalarFieldEnum
    having?: eventos_analyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eventos_analyticsCountAggregateInputType | true
    _min?: Eventos_analyticsMinAggregateInputType
    _max?: Eventos_analyticsMaxAggregateInputType
  }

  export type Eventos_analyticsGroupByOutputType = {
    id: string
    usuarioId: string | null
    sesionId: string | null
    eventoTipo: string
    eventoNombre: string
    pantalla: string | null
    datos: JsonValue | null
    timestamp: Date
    _count: Eventos_analyticsCountAggregateOutputType | null
    _min: Eventos_analyticsMinAggregateOutputType | null
    _max: Eventos_analyticsMaxAggregateOutputType | null
  }

  type GetEventos_analyticsGroupByPayload<T extends eventos_analyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Eventos_analyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eventos_analyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eventos_analyticsGroupByOutputType[P]>
            : GetScalarType<T[P], Eventos_analyticsGroupByOutputType[P]>
        }
      >
    >


  export type eventos_analyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    sesionId?: boolean
    eventoTipo?: boolean
    eventoNombre?: boolean
    pantalla?: boolean
    datos?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["eventos_analytics"]>

  export type eventos_analyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    sesionId?: boolean
    eventoTipo?: boolean
    eventoNombre?: boolean
    pantalla?: boolean
    datos?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["eventos_analytics"]>

  export type eventos_analyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    sesionId?: boolean
    eventoTipo?: boolean
    eventoNombre?: boolean
    pantalla?: boolean
    datos?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["eventos_analytics"]>

  export type eventos_analyticsSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    sesionId?: boolean
    eventoTipo?: boolean
    eventoNombre?: boolean
    pantalla?: boolean
    datos?: boolean
    timestamp?: boolean
  }

  export type eventos_analyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "sesionId" | "eventoTipo" | "eventoNombre" | "pantalla" | "datos" | "timestamp", ExtArgs["result"]["eventos_analytics"]>

  export type $eventos_analyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos_analytics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string | null
      sesionId: string | null
      eventoTipo: string
      eventoNombre: string
      pantalla: string | null
      datos: Prisma.JsonValue | null
      timestamp: Date
    }, ExtArgs["result"]["eventos_analytics"]>
    composites: {}
  }

  type eventos_analyticsGetPayload<S extends boolean | null | undefined | eventos_analyticsDefaultArgs> = $Result.GetResult<Prisma.$eventos_analyticsPayload, S>

  type eventos_analyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventos_analyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Eventos_analyticsCountAggregateInputType | true
    }

  export interface eventos_analyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos_analytics'], meta: { name: 'eventos_analytics' } }
    /**
     * Find zero or one Eventos_analytics that matches the filter.
     * @param {eventos_analyticsFindUniqueArgs} args - Arguments to find a Eventos_analytics
     * @example
     * // Get one Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventos_analyticsFindUniqueArgs>(args: SelectSubset<T, eventos_analyticsFindUniqueArgs<ExtArgs>>): Prisma__eventos_analyticsClient<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos_analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventos_analyticsFindUniqueOrThrowArgs} args - Arguments to find a Eventos_analytics
     * @example
     * // Get one Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventos_analyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventos_analyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventos_analyticsClient<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_analyticsFindFirstArgs} args - Arguments to find a Eventos_analytics
     * @example
     * // Get one Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventos_analyticsFindFirstArgs>(args?: SelectSubset<T, eventos_analyticsFindFirstArgs<ExtArgs>>): Prisma__eventos_analyticsClient<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos_analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_analyticsFindFirstOrThrowArgs} args - Arguments to find a Eventos_analytics
     * @example
     * // Get one Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventos_analyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventos_analyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventos_analyticsClient<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos_analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_analyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.findMany()
     * 
     * // Get first 10 Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventos_analyticsWithIdOnly = await prisma.eventos_analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventos_analyticsFindManyArgs>(args?: SelectSubset<T, eventos_analyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos_analytics.
     * @param {eventos_analyticsCreateArgs} args - Arguments to create a Eventos_analytics.
     * @example
     * // Create one Eventos_analytics
     * const Eventos_analytics = await prisma.eventos_analytics.create({
     *   data: {
     *     // ... data to create a Eventos_analytics
     *   }
     * })
     * 
     */
    create<T extends eventos_analyticsCreateArgs>(args: SelectSubset<T, eventos_analyticsCreateArgs<ExtArgs>>): Prisma__eventos_analyticsClient<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos_analytics.
     * @param {eventos_analyticsCreateManyArgs} args - Arguments to create many Eventos_analytics.
     * @example
     * // Create many Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventos_analyticsCreateManyArgs>(args?: SelectSubset<T, eventos_analyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos_analytics and returns the data saved in the database.
     * @param {eventos_analyticsCreateManyAndReturnArgs} args - Arguments to create many Eventos_analytics.
     * @example
     * // Create many Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos_analytics and only return the `id`
     * const eventos_analyticsWithIdOnly = await prisma.eventos_analytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventos_analyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventos_analyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos_analytics.
     * @param {eventos_analyticsDeleteArgs} args - Arguments to delete one Eventos_analytics.
     * @example
     * // Delete one Eventos_analytics
     * const Eventos_analytics = await prisma.eventos_analytics.delete({
     *   where: {
     *     // ... filter to delete one Eventos_analytics
     *   }
     * })
     * 
     */
    delete<T extends eventos_analyticsDeleteArgs>(args: SelectSubset<T, eventos_analyticsDeleteArgs<ExtArgs>>): Prisma__eventos_analyticsClient<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos_analytics.
     * @param {eventos_analyticsUpdateArgs} args - Arguments to update one Eventos_analytics.
     * @example
     * // Update one Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventos_analyticsUpdateArgs>(args: SelectSubset<T, eventos_analyticsUpdateArgs<ExtArgs>>): Prisma__eventos_analyticsClient<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos_analytics.
     * @param {eventos_analyticsDeleteManyArgs} args - Arguments to filter Eventos_analytics to delete.
     * @example
     * // Delete a few Eventos_analytics
     * const { count } = await prisma.eventos_analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventos_analyticsDeleteManyArgs>(args?: SelectSubset<T, eventos_analyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_analyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventos_analyticsUpdateManyArgs>(args: SelectSubset<T, eventos_analyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos_analytics and returns the data updated in the database.
     * @param {eventos_analyticsUpdateManyAndReturnArgs} args - Arguments to update many Eventos_analytics.
     * @example
     * // Update many Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos_analytics and only return the `id`
     * const eventos_analyticsWithIdOnly = await prisma.eventos_analytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends eventos_analyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventos_analyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos_analytics.
     * @param {eventos_analyticsUpsertArgs} args - Arguments to update or create a Eventos_analytics.
     * @example
     * // Update or create a Eventos_analytics
     * const eventos_analytics = await prisma.eventos_analytics.upsert({
     *   create: {
     *     // ... data to create a Eventos_analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos_analytics we want to update
     *   }
     * })
     */
    upsert<T extends eventos_analyticsUpsertArgs>(args: SelectSubset<T, eventos_analyticsUpsertArgs<ExtArgs>>): Prisma__eventos_analyticsClient<$Result.GetResult<Prisma.$eventos_analyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_analyticsCountArgs} args - Arguments to filter Eventos_analytics to count.
     * @example
     * // Count the number of Eventos_analytics
     * const count = await prisma.eventos_analytics.count({
     *   where: {
     *     // ... the filter for the Eventos_analytics we want to count
     *   }
     * })
    **/
    count<T extends eventos_analyticsCountArgs>(
      args?: Subset<T, eventos_analyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eventos_analyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eventos_analyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Eventos_analyticsAggregateArgs>(args: Subset<T, Eventos_analyticsAggregateArgs>): Prisma.PrismaPromise<GetEventos_analyticsAggregateType<T>>

    /**
     * Group by Eventos_analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventos_analyticsGroupByArgs} args - Group by arguments.
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
      T extends eventos_analyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventos_analyticsGroupByArgs['orderBy'] }
        : { orderBy?: eventos_analyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventos_analyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventos_analyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos_analytics model
   */
  readonly fields: eventos_analyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos_analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventos_analyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the eventos_analytics model
   */
  interface eventos_analyticsFieldRefs {
    readonly id: FieldRef<"eventos_analytics", 'String'>
    readonly usuarioId: FieldRef<"eventos_analytics", 'String'>
    readonly sesionId: FieldRef<"eventos_analytics", 'String'>
    readonly eventoTipo: FieldRef<"eventos_analytics", 'String'>
    readonly eventoNombre: FieldRef<"eventos_analytics", 'String'>
    readonly pantalla: FieldRef<"eventos_analytics", 'String'>
    readonly datos: FieldRef<"eventos_analytics", 'Json'>
    readonly timestamp: FieldRef<"eventos_analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * eventos_analytics findUnique
   */
  export type eventos_analyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * Filter, which eventos_analytics to fetch.
     */
    where: eventos_analyticsWhereUniqueInput
  }

  /**
   * eventos_analytics findUniqueOrThrow
   */
  export type eventos_analyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * Filter, which eventos_analytics to fetch.
     */
    where: eventos_analyticsWhereUniqueInput
  }

  /**
   * eventos_analytics findFirst
   */
  export type eventos_analyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * Filter, which eventos_analytics to fetch.
     */
    where?: eventos_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_analytics to fetch.
     */
    orderBy?: eventos_analyticsOrderByWithRelationInput | eventos_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos_analytics.
     */
    cursor?: eventos_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos_analytics.
     */
    distinct?: Eventos_analyticsScalarFieldEnum | Eventos_analyticsScalarFieldEnum[]
  }

  /**
   * eventos_analytics findFirstOrThrow
   */
  export type eventos_analyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * Filter, which eventos_analytics to fetch.
     */
    where?: eventos_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_analytics to fetch.
     */
    orderBy?: eventos_analyticsOrderByWithRelationInput | eventos_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos_analytics.
     */
    cursor?: eventos_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos_analytics.
     */
    distinct?: Eventos_analyticsScalarFieldEnum | Eventos_analyticsScalarFieldEnum[]
  }

  /**
   * eventos_analytics findMany
   */
  export type eventos_analyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * Filter, which eventos_analytics to fetch.
     */
    where?: eventos_analyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos_analytics to fetch.
     */
    orderBy?: eventos_analyticsOrderByWithRelationInput | eventos_analyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos_analytics.
     */
    cursor?: eventos_analyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos_analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos_analytics.
     */
    skip?: number
    distinct?: Eventos_analyticsScalarFieldEnum | Eventos_analyticsScalarFieldEnum[]
  }

  /**
   * eventos_analytics create
   */
  export type eventos_analyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * The data needed to create a eventos_analytics.
     */
    data: XOR<eventos_analyticsCreateInput, eventos_analyticsUncheckedCreateInput>
  }

  /**
   * eventos_analytics createMany
   */
  export type eventos_analyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos_analytics.
     */
    data: eventos_analyticsCreateManyInput | eventos_analyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos_analytics createManyAndReturn
   */
  export type eventos_analyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * The data used to create many eventos_analytics.
     */
    data: eventos_analyticsCreateManyInput | eventos_analyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos_analytics update
   */
  export type eventos_analyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * The data needed to update a eventos_analytics.
     */
    data: XOR<eventos_analyticsUpdateInput, eventos_analyticsUncheckedUpdateInput>
    /**
     * Choose, which eventos_analytics to update.
     */
    where: eventos_analyticsWhereUniqueInput
  }

  /**
   * eventos_analytics updateMany
   */
  export type eventos_analyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos_analytics.
     */
    data: XOR<eventos_analyticsUpdateManyMutationInput, eventos_analyticsUncheckedUpdateManyInput>
    /**
     * Filter which eventos_analytics to update
     */
    where?: eventos_analyticsWhereInput
    /**
     * Limit how many eventos_analytics to update.
     */
    limit?: number
  }

  /**
   * eventos_analytics updateManyAndReturn
   */
  export type eventos_analyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * The data used to update eventos_analytics.
     */
    data: XOR<eventos_analyticsUpdateManyMutationInput, eventos_analyticsUncheckedUpdateManyInput>
    /**
     * Filter which eventos_analytics to update
     */
    where?: eventos_analyticsWhereInput
    /**
     * Limit how many eventos_analytics to update.
     */
    limit?: number
  }

  /**
   * eventos_analytics upsert
   */
  export type eventos_analyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * The filter to search for the eventos_analytics to update in case it exists.
     */
    where: eventos_analyticsWhereUniqueInput
    /**
     * In case the eventos_analytics found by the `where` argument doesn't exist, create a new eventos_analytics with this data.
     */
    create: XOR<eventos_analyticsCreateInput, eventos_analyticsUncheckedCreateInput>
    /**
     * In case the eventos_analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventos_analyticsUpdateInput, eventos_analyticsUncheckedUpdateInput>
  }

  /**
   * eventos_analytics delete
   */
  export type eventos_analyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
    /**
     * Filter which eventos_analytics to delete.
     */
    where: eventos_analyticsWhereUniqueInput
  }

  /**
   * eventos_analytics deleteMany
   */
  export type eventos_analyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos_analytics to delete
     */
    where?: eventos_analyticsWhereInput
    /**
     * Limit how many eventos_analytics to delete.
     */
    limit?: number
  }

  /**
   * eventos_analytics without action
   */
  export type eventos_analyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos_analytics
     */
    select?: eventos_analyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos_analytics
     */
    omit?: eventos_analyticsOmit<ExtArgs> | null
  }


  /**
   * Model sesiones_usuario
   */

  export type AggregateSesiones_usuario = {
    _count: Sesiones_usuarioCountAggregateOutputType | null
    _min: Sesiones_usuarioMinAggregateOutputType | null
    _max: Sesiones_usuarioMaxAggregateOutputType | null
  }

  export type Sesiones_usuarioMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    deviceId: string | null
    platform: string | null
    appVersion: string | null
    osVersion: string | null
    ipAddress: string | null
    userAgent: string | null
    inicioSesion: Date | null
    finSesion: Date | null
    activa: boolean | null
  }

  export type Sesiones_usuarioMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    deviceId: string | null
    platform: string | null
    appVersion: string | null
    osVersion: string | null
    ipAddress: string | null
    userAgent: string | null
    inicioSesion: Date | null
    finSesion: Date | null
    activa: boolean | null
  }

  export type Sesiones_usuarioCountAggregateOutputType = {
    id: number
    usuarioId: number
    deviceId: number
    platform: number
    appVersion: number
    osVersion: number
    ipAddress: number
    userAgent: number
    inicioSesion: number
    finSesion: number
    activa: number
    _all: number
  }


  export type Sesiones_usuarioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    deviceId?: true
    platform?: true
    appVersion?: true
    osVersion?: true
    ipAddress?: true
    userAgent?: true
    inicioSesion?: true
    finSesion?: true
    activa?: true
  }

  export type Sesiones_usuarioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    deviceId?: true
    platform?: true
    appVersion?: true
    osVersion?: true
    ipAddress?: true
    userAgent?: true
    inicioSesion?: true
    finSesion?: true
    activa?: true
  }

  export type Sesiones_usuarioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    deviceId?: true
    platform?: true
    appVersion?: true
    osVersion?: true
    ipAddress?: true
    userAgent?: true
    inicioSesion?: true
    finSesion?: true
    activa?: true
    _all?: true
  }

  export type Sesiones_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sesiones_usuario to aggregate.
     */
    where?: sesiones_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sesiones_usuarios to fetch.
     */
    orderBy?: sesiones_usuarioOrderByWithRelationInput | sesiones_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sesiones_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sesiones_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sesiones_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sesiones_usuarios
    **/
    _count?: true | Sesiones_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sesiones_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sesiones_usuarioMaxAggregateInputType
  }

  export type GetSesiones_usuarioAggregateType<T extends Sesiones_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateSesiones_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSesiones_usuario[P]>
      : GetScalarType<T[P], AggregateSesiones_usuario[P]>
  }




  export type sesiones_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sesiones_usuarioWhereInput
    orderBy?: sesiones_usuarioOrderByWithAggregationInput | sesiones_usuarioOrderByWithAggregationInput[]
    by: Sesiones_usuarioScalarFieldEnum[] | Sesiones_usuarioScalarFieldEnum
    having?: sesiones_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sesiones_usuarioCountAggregateInputType | true
    _min?: Sesiones_usuarioMinAggregateInputType
    _max?: Sesiones_usuarioMaxAggregateInputType
  }

  export type Sesiones_usuarioGroupByOutputType = {
    id: string
    usuarioId: string
    deviceId: string | null
    platform: string | null
    appVersion: string | null
    osVersion: string | null
    ipAddress: string | null
    userAgent: string | null
    inicioSesion: Date
    finSesion: Date | null
    activa: boolean
    _count: Sesiones_usuarioCountAggregateOutputType | null
    _min: Sesiones_usuarioMinAggregateOutputType | null
    _max: Sesiones_usuarioMaxAggregateOutputType | null
  }

  type GetSesiones_usuarioGroupByPayload<T extends sesiones_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sesiones_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sesiones_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sesiones_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], Sesiones_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type sesiones_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    deviceId?: boolean
    platform?: boolean
    appVersion?: boolean
    osVersion?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    inicioSesion?: boolean
    finSesion?: boolean
    activa?: boolean
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesiones_usuario"]>

  export type sesiones_usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    deviceId?: boolean
    platform?: boolean
    appVersion?: boolean
    osVersion?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    inicioSesion?: boolean
    finSesion?: boolean
    activa?: boolean
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesiones_usuario"]>

  export type sesiones_usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    deviceId?: boolean
    platform?: boolean
    appVersion?: boolean
    osVersion?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    inicioSesion?: boolean
    finSesion?: boolean
    activa?: boolean
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesiones_usuario"]>

  export type sesiones_usuarioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    deviceId?: boolean
    platform?: boolean
    appVersion?: boolean
    osVersion?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    inicioSesion?: boolean
    finSesion?: boolean
    activa?: boolean
  }

  export type sesiones_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "deviceId" | "platform" | "appVersion" | "osVersion" | "ipAddress" | "userAgent" | "inicioSesion" | "finSesion" | "activa", ExtArgs["result"]["sesiones_usuario"]>
  export type sesiones_usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type sesiones_usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type sesiones_usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $sesiones_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sesiones_usuario"
    objects: {
      usuarios: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      deviceId: string | null
      platform: string | null
      appVersion: string | null
      osVersion: string | null
      ipAddress: string | null
      userAgent: string | null
      inicioSesion: Date
      finSesion: Date | null
      activa: boolean
    }, ExtArgs["result"]["sesiones_usuario"]>
    composites: {}
  }

  type sesiones_usuarioGetPayload<S extends boolean | null | undefined | sesiones_usuarioDefaultArgs> = $Result.GetResult<Prisma.$sesiones_usuarioPayload, S>

  type sesiones_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sesiones_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sesiones_usuarioCountAggregateInputType | true
    }

  export interface sesiones_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sesiones_usuario'], meta: { name: 'sesiones_usuario' } }
    /**
     * Find zero or one Sesiones_usuario that matches the filter.
     * @param {sesiones_usuarioFindUniqueArgs} args - Arguments to find a Sesiones_usuario
     * @example
     * // Get one Sesiones_usuario
     * const sesiones_usuario = await prisma.sesiones_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sesiones_usuarioFindUniqueArgs>(args: SelectSubset<T, sesiones_usuarioFindUniqueArgs<ExtArgs>>): Prisma__sesiones_usuarioClient<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sesiones_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sesiones_usuarioFindUniqueOrThrowArgs} args - Arguments to find a Sesiones_usuario
     * @example
     * // Get one Sesiones_usuario
     * const sesiones_usuario = await prisma.sesiones_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sesiones_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, sesiones_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sesiones_usuarioClient<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sesiones_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_usuarioFindFirstArgs} args - Arguments to find a Sesiones_usuario
     * @example
     * // Get one Sesiones_usuario
     * const sesiones_usuario = await prisma.sesiones_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sesiones_usuarioFindFirstArgs>(args?: SelectSubset<T, sesiones_usuarioFindFirstArgs<ExtArgs>>): Prisma__sesiones_usuarioClient<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sesiones_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_usuarioFindFirstOrThrowArgs} args - Arguments to find a Sesiones_usuario
     * @example
     * // Get one Sesiones_usuario
     * const sesiones_usuario = await prisma.sesiones_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sesiones_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, sesiones_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__sesiones_usuarioClient<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sesiones_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sesiones_usuarios
     * const sesiones_usuarios = await prisma.sesiones_usuario.findMany()
     * 
     * // Get first 10 Sesiones_usuarios
     * const sesiones_usuarios = await prisma.sesiones_usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sesiones_usuarioWithIdOnly = await prisma.sesiones_usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sesiones_usuarioFindManyArgs>(args?: SelectSubset<T, sesiones_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sesiones_usuario.
     * @param {sesiones_usuarioCreateArgs} args - Arguments to create a Sesiones_usuario.
     * @example
     * // Create one Sesiones_usuario
     * const Sesiones_usuario = await prisma.sesiones_usuario.create({
     *   data: {
     *     // ... data to create a Sesiones_usuario
     *   }
     * })
     * 
     */
    create<T extends sesiones_usuarioCreateArgs>(args: SelectSubset<T, sesiones_usuarioCreateArgs<ExtArgs>>): Prisma__sesiones_usuarioClient<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sesiones_usuarios.
     * @param {sesiones_usuarioCreateManyArgs} args - Arguments to create many Sesiones_usuarios.
     * @example
     * // Create many Sesiones_usuarios
     * const sesiones_usuario = await prisma.sesiones_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sesiones_usuarioCreateManyArgs>(args?: SelectSubset<T, sesiones_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sesiones_usuarios and returns the data saved in the database.
     * @param {sesiones_usuarioCreateManyAndReturnArgs} args - Arguments to create many Sesiones_usuarios.
     * @example
     * // Create many Sesiones_usuarios
     * const sesiones_usuario = await prisma.sesiones_usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sesiones_usuarios and only return the `id`
     * const sesiones_usuarioWithIdOnly = await prisma.sesiones_usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sesiones_usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, sesiones_usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sesiones_usuario.
     * @param {sesiones_usuarioDeleteArgs} args - Arguments to delete one Sesiones_usuario.
     * @example
     * // Delete one Sesiones_usuario
     * const Sesiones_usuario = await prisma.sesiones_usuario.delete({
     *   where: {
     *     // ... filter to delete one Sesiones_usuario
     *   }
     * })
     * 
     */
    delete<T extends sesiones_usuarioDeleteArgs>(args: SelectSubset<T, sesiones_usuarioDeleteArgs<ExtArgs>>): Prisma__sesiones_usuarioClient<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sesiones_usuario.
     * @param {sesiones_usuarioUpdateArgs} args - Arguments to update one Sesiones_usuario.
     * @example
     * // Update one Sesiones_usuario
     * const sesiones_usuario = await prisma.sesiones_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sesiones_usuarioUpdateArgs>(args: SelectSubset<T, sesiones_usuarioUpdateArgs<ExtArgs>>): Prisma__sesiones_usuarioClient<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sesiones_usuarios.
     * @param {sesiones_usuarioDeleteManyArgs} args - Arguments to filter Sesiones_usuarios to delete.
     * @example
     * // Delete a few Sesiones_usuarios
     * const { count } = await prisma.sesiones_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sesiones_usuarioDeleteManyArgs>(args?: SelectSubset<T, sesiones_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sesiones_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sesiones_usuarios
     * const sesiones_usuario = await prisma.sesiones_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sesiones_usuarioUpdateManyArgs>(args: SelectSubset<T, sesiones_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sesiones_usuarios and returns the data updated in the database.
     * @param {sesiones_usuarioUpdateManyAndReturnArgs} args - Arguments to update many Sesiones_usuarios.
     * @example
     * // Update many Sesiones_usuarios
     * const sesiones_usuario = await prisma.sesiones_usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sesiones_usuarios and only return the `id`
     * const sesiones_usuarioWithIdOnly = await prisma.sesiones_usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends sesiones_usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, sesiones_usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sesiones_usuario.
     * @param {sesiones_usuarioUpsertArgs} args - Arguments to update or create a Sesiones_usuario.
     * @example
     * // Update or create a Sesiones_usuario
     * const sesiones_usuario = await prisma.sesiones_usuario.upsert({
     *   create: {
     *     // ... data to create a Sesiones_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sesiones_usuario we want to update
     *   }
     * })
     */
    upsert<T extends sesiones_usuarioUpsertArgs>(args: SelectSubset<T, sesiones_usuarioUpsertArgs<ExtArgs>>): Prisma__sesiones_usuarioClient<$Result.GetResult<Prisma.$sesiones_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sesiones_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_usuarioCountArgs} args - Arguments to filter Sesiones_usuarios to count.
     * @example
     * // Count the number of Sesiones_usuarios
     * const count = await prisma.sesiones_usuario.count({
     *   where: {
     *     // ... the filter for the Sesiones_usuarios we want to count
     *   }
     * })
    **/
    count<T extends sesiones_usuarioCountArgs>(
      args?: Subset<T, sesiones_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sesiones_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sesiones_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sesiones_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sesiones_usuarioAggregateArgs>(args: Subset<T, Sesiones_usuarioAggregateArgs>): Prisma.PrismaPromise<GetSesiones_usuarioAggregateType<T>>

    /**
     * Group by Sesiones_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sesiones_usuarioGroupByArgs} args - Group by arguments.
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
      T extends sesiones_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sesiones_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: sesiones_usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sesiones_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSesiones_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sesiones_usuario model
   */
  readonly fields: sesiones_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sesiones_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sesiones_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sesiones_usuario model
   */
  interface sesiones_usuarioFieldRefs {
    readonly id: FieldRef<"sesiones_usuario", 'String'>
    readonly usuarioId: FieldRef<"sesiones_usuario", 'String'>
    readonly deviceId: FieldRef<"sesiones_usuario", 'String'>
    readonly platform: FieldRef<"sesiones_usuario", 'String'>
    readonly appVersion: FieldRef<"sesiones_usuario", 'String'>
    readonly osVersion: FieldRef<"sesiones_usuario", 'String'>
    readonly ipAddress: FieldRef<"sesiones_usuario", 'String'>
    readonly userAgent: FieldRef<"sesiones_usuario", 'String'>
    readonly inicioSesion: FieldRef<"sesiones_usuario", 'DateTime'>
    readonly finSesion: FieldRef<"sesiones_usuario", 'DateTime'>
    readonly activa: FieldRef<"sesiones_usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sesiones_usuario findUnique
   */
  export type sesiones_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_usuario to fetch.
     */
    where: sesiones_usuarioWhereUniqueInput
  }

  /**
   * sesiones_usuario findUniqueOrThrow
   */
  export type sesiones_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_usuario to fetch.
     */
    where: sesiones_usuarioWhereUniqueInput
  }

  /**
   * sesiones_usuario findFirst
   */
  export type sesiones_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_usuario to fetch.
     */
    where?: sesiones_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sesiones_usuarios to fetch.
     */
    orderBy?: sesiones_usuarioOrderByWithRelationInput | sesiones_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sesiones_usuarios.
     */
    cursor?: sesiones_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sesiones_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sesiones_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sesiones_usuarios.
     */
    distinct?: Sesiones_usuarioScalarFieldEnum | Sesiones_usuarioScalarFieldEnum[]
  }

  /**
   * sesiones_usuario findFirstOrThrow
   */
  export type sesiones_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_usuario to fetch.
     */
    where?: sesiones_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sesiones_usuarios to fetch.
     */
    orderBy?: sesiones_usuarioOrderByWithRelationInput | sesiones_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sesiones_usuarios.
     */
    cursor?: sesiones_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sesiones_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sesiones_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sesiones_usuarios.
     */
    distinct?: Sesiones_usuarioScalarFieldEnum | Sesiones_usuarioScalarFieldEnum[]
  }

  /**
   * sesiones_usuario findMany
   */
  export type sesiones_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which sesiones_usuarios to fetch.
     */
    where?: sesiones_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sesiones_usuarios to fetch.
     */
    orderBy?: sesiones_usuarioOrderByWithRelationInput | sesiones_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sesiones_usuarios.
     */
    cursor?: sesiones_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sesiones_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sesiones_usuarios.
     */
    skip?: number
    distinct?: Sesiones_usuarioScalarFieldEnum | Sesiones_usuarioScalarFieldEnum[]
  }

  /**
   * sesiones_usuario create
   */
  export type sesiones_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a sesiones_usuario.
     */
    data: XOR<sesiones_usuarioCreateInput, sesiones_usuarioUncheckedCreateInput>
  }

  /**
   * sesiones_usuario createMany
   */
  export type sesiones_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sesiones_usuarios.
     */
    data: sesiones_usuarioCreateManyInput | sesiones_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sesiones_usuario createManyAndReturn
   */
  export type sesiones_usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many sesiones_usuarios.
     */
    data: sesiones_usuarioCreateManyInput | sesiones_usuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sesiones_usuario update
   */
  export type sesiones_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a sesiones_usuario.
     */
    data: XOR<sesiones_usuarioUpdateInput, sesiones_usuarioUncheckedUpdateInput>
    /**
     * Choose, which sesiones_usuario to update.
     */
    where: sesiones_usuarioWhereUniqueInput
  }

  /**
   * sesiones_usuario updateMany
   */
  export type sesiones_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sesiones_usuarios.
     */
    data: XOR<sesiones_usuarioUpdateManyMutationInput, sesiones_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which sesiones_usuarios to update
     */
    where?: sesiones_usuarioWhereInput
    /**
     * Limit how many sesiones_usuarios to update.
     */
    limit?: number
  }

  /**
   * sesiones_usuario updateManyAndReturn
   */
  export type sesiones_usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * The data used to update sesiones_usuarios.
     */
    data: XOR<sesiones_usuarioUpdateManyMutationInput, sesiones_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which sesiones_usuarios to update
     */
    where?: sesiones_usuarioWhereInput
    /**
     * Limit how many sesiones_usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sesiones_usuario upsert
   */
  export type sesiones_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the sesiones_usuario to update in case it exists.
     */
    where: sesiones_usuarioWhereUniqueInput
    /**
     * In case the sesiones_usuario found by the `where` argument doesn't exist, create a new sesiones_usuario with this data.
     */
    create: XOR<sesiones_usuarioCreateInput, sesiones_usuarioUncheckedCreateInput>
    /**
     * In case the sesiones_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sesiones_usuarioUpdateInput, sesiones_usuarioUncheckedUpdateInput>
  }

  /**
   * sesiones_usuario delete
   */
  export type sesiones_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
    /**
     * Filter which sesiones_usuario to delete.
     */
    where: sesiones_usuarioWhereUniqueInput
  }

  /**
   * sesiones_usuario deleteMany
   */
  export type sesiones_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sesiones_usuarios to delete
     */
    where?: sesiones_usuarioWhereInput
    /**
     * Limit how many sesiones_usuarios to delete.
     */
    limit?: number
  }

  /**
   * sesiones_usuario without action
   */
  export type sesiones_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesiones_usuario
     */
    select?: sesiones_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sesiones_usuario
     */
    omit?: sesiones_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sesiones_usuarioInclude<ExtArgs> | null
  }


  /**
   * Model tokens_notificacion
   */

  export type AggregateTokens_notificacion = {
    _count: Tokens_notificacionCountAggregateOutputType | null
    _avg: Tokens_notificacionAvgAggregateOutputType | null
    _sum: Tokens_notificacionSumAggregateOutputType | null
    _min: Tokens_notificacionMinAggregateOutputType | null
    _max: Tokens_notificacionMaxAggregateOutputType | null
  }

  export type Tokens_notificacionAvgAggregateOutputType = {
    id: number | null
  }

  export type Tokens_notificacionSumAggregateOutputType = {
    id: number | null
  }

  export type Tokens_notificacionMinAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    token: string | null
    platform: string | null
    activo: boolean | null
    creadoEn: Date | null
    ultimoUso: Date | null
  }

  export type Tokens_notificacionMaxAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    token: string | null
    platform: string | null
    activo: boolean | null
    creadoEn: Date | null
    ultimoUso: Date | null
  }

  export type Tokens_notificacionCountAggregateOutputType = {
    id: number
    usuarioId: number
    token: number
    platform: number
    activo: number
    creadoEn: number
    ultimoUso: number
    _all: number
  }


  export type Tokens_notificacionAvgAggregateInputType = {
    id?: true
  }

  export type Tokens_notificacionSumAggregateInputType = {
    id?: true
  }

  export type Tokens_notificacionMinAggregateInputType = {
    id?: true
    usuarioId?: true
    token?: true
    platform?: true
    activo?: true
    creadoEn?: true
    ultimoUso?: true
  }

  export type Tokens_notificacionMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    token?: true
    platform?: true
    activo?: true
    creadoEn?: true
    ultimoUso?: true
  }

  export type Tokens_notificacionCountAggregateInputType = {
    id?: true
    usuarioId?: true
    token?: true
    platform?: true
    activo?: true
    creadoEn?: true
    ultimoUso?: true
    _all?: true
  }

  export type Tokens_notificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens_notificacion to aggregate.
     */
    where?: tokens_notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens_notificacions to fetch.
     */
    orderBy?: tokens_notificacionOrderByWithRelationInput | tokens_notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokens_notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens_notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens_notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens_notificacions
    **/
    _count?: true | Tokens_notificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tokens_notificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tokens_notificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tokens_notificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tokens_notificacionMaxAggregateInputType
  }

  export type GetTokens_notificacionAggregateType<T extends Tokens_notificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens_notificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens_notificacion[P]>
      : GetScalarType<T[P], AggregateTokens_notificacion[P]>
  }




  export type tokens_notificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokens_notificacionWhereInput
    orderBy?: tokens_notificacionOrderByWithAggregationInput | tokens_notificacionOrderByWithAggregationInput[]
    by: Tokens_notificacionScalarFieldEnum[] | Tokens_notificacionScalarFieldEnum
    having?: tokens_notificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tokens_notificacionCountAggregateInputType | true
    _avg?: Tokens_notificacionAvgAggregateInputType
    _sum?: Tokens_notificacionSumAggregateInputType
    _min?: Tokens_notificacionMinAggregateInputType
    _max?: Tokens_notificacionMaxAggregateInputType
  }

  export type Tokens_notificacionGroupByOutputType = {
    id: number
    usuarioId: string
    token: string
    platform: string
    activo: boolean
    creadoEn: Date
    ultimoUso: Date
    _count: Tokens_notificacionCountAggregateOutputType | null
    _avg: Tokens_notificacionAvgAggregateOutputType | null
    _sum: Tokens_notificacionSumAggregateOutputType | null
    _min: Tokens_notificacionMinAggregateOutputType | null
    _max: Tokens_notificacionMaxAggregateOutputType | null
  }

  type GetTokens_notificacionGroupByPayload<T extends tokens_notificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tokens_notificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tokens_notificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tokens_notificacionGroupByOutputType[P]>
            : GetScalarType<T[P], Tokens_notificacionGroupByOutputType[P]>
        }
      >
    >


  export type tokens_notificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    token?: boolean
    platform?: boolean
    activo?: boolean
    creadoEn?: boolean
    ultimoUso?: boolean
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens_notificacion"]>

  export type tokens_notificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    token?: boolean
    platform?: boolean
    activo?: boolean
    creadoEn?: boolean
    ultimoUso?: boolean
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens_notificacion"]>

  export type tokens_notificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    token?: boolean
    platform?: boolean
    activo?: boolean
    creadoEn?: boolean
    ultimoUso?: boolean
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens_notificacion"]>

  export type tokens_notificacionSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    token?: boolean
    platform?: boolean
    activo?: boolean
    creadoEn?: boolean
    ultimoUso?: boolean
  }

  export type tokens_notificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "token" | "platform" | "activo" | "creadoEn" | "ultimoUso", ExtArgs["result"]["tokens_notificacion"]>
  export type tokens_notificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type tokens_notificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type tokens_notificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $tokens_notificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tokens_notificacion"
    objects: {
      usuarios: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: string
      token: string
      platform: string
      activo: boolean
      creadoEn: Date
      ultimoUso: Date
    }, ExtArgs["result"]["tokens_notificacion"]>
    composites: {}
  }

  type tokens_notificacionGetPayload<S extends boolean | null | undefined | tokens_notificacionDefaultArgs> = $Result.GetResult<Prisma.$tokens_notificacionPayload, S>

  type tokens_notificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokens_notificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tokens_notificacionCountAggregateInputType | true
    }

  export interface tokens_notificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tokens_notificacion'], meta: { name: 'tokens_notificacion' } }
    /**
     * Find zero or one Tokens_notificacion that matches the filter.
     * @param {tokens_notificacionFindUniqueArgs} args - Arguments to find a Tokens_notificacion
     * @example
     * // Get one Tokens_notificacion
     * const tokens_notificacion = await prisma.tokens_notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokens_notificacionFindUniqueArgs>(args: SelectSubset<T, tokens_notificacionFindUniqueArgs<ExtArgs>>): Prisma__tokens_notificacionClient<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens_notificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokens_notificacionFindUniqueOrThrowArgs} args - Arguments to find a Tokens_notificacion
     * @example
     * // Get one Tokens_notificacion
     * const tokens_notificacion = await prisma.tokens_notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokens_notificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, tokens_notificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokens_notificacionClient<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens_notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokens_notificacionFindFirstArgs} args - Arguments to find a Tokens_notificacion
     * @example
     * // Get one Tokens_notificacion
     * const tokens_notificacion = await prisma.tokens_notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokens_notificacionFindFirstArgs>(args?: SelectSubset<T, tokens_notificacionFindFirstArgs<ExtArgs>>): Prisma__tokens_notificacionClient<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens_notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokens_notificacionFindFirstOrThrowArgs} args - Arguments to find a Tokens_notificacion
     * @example
     * // Get one Tokens_notificacion
     * const tokens_notificacion = await prisma.tokens_notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokens_notificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, tokens_notificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokens_notificacionClient<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens_notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokens_notificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens_notificacions
     * const tokens_notificacions = await prisma.tokens_notificacion.findMany()
     * 
     * // Get first 10 Tokens_notificacions
     * const tokens_notificacions = await prisma.tokens_notificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokens_notificacionWithIdOnly = await prisma.tokens_notificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tokens_notificacionFindManyArgs>(args?: SelectSubset<T, tokens_notificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens_notificacion.
     * @param {tokens_notificacionCreateArgs} args - Arguments to create a Tokens_notificacion.
     * @example
     * // Create one Tokens_notificacion
     * const Tokens_notificacion = await prisma.tokens_notificacion.create({
     *   data: {
     *     // ... data to create a Tokens_notificacion
     *   }
     * })
     * 
     */
    create<T extends tokens_notificacionCreateArgs>(args: SelectSubset<T, tokens_notificacionCreateArgs<ExtArgs>>): Prisma__tokens_notificacionClient<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens_notificacions.
     * @param {tokens_notificacionCreateManyArgs} args - Arguments to create many Tokens_notificacions.
     * @example
     * // Create many Tokens_notificacions
     * const tokens_notificacion = await prisma.tokens_notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokens_notificacionCreateManyArgs>(args?: SelectSubset<T, tokens_notificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens_notificacions and returns the data saved in the database.
     * @param {tokens_notificacionCreateManyAndReturnArgs} args - Arguments to create many Tokens_notificacions.
     * @example
     * // Create many Tokens_notificacions
     * const tokens_notificacion = await prisma.tokens_notificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens_notificacions and only return the `id`
     * const tokens_notificacionWithIdOnly = await prisma.tokens_notificacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tokens_notificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, tokens_notificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tokens_notificacion.
     * @param {tokens_notificacionDeleteArgs} args - Arguments to delete one Tokens_notificacion.
     * @example
     * // Delete one Tokens_notificacion
     * const Tokens_notificacion = await prisma.tokens_notificacion.delete({
     *   where: {
     *     // ... filter to delete one Tokens_notificacion
     *   }
     * })
     * 
     */
    delete<T extends tokens_notificacionDeleteArgs>(args: SelectSubset<T, tokens_notificacionDeleteArgs<ExtArgs>>): Prisma__tokens_notificacionClient<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens_notificacion.
     * @param {tokens_notificacionUpdateArgs} args - Arguments to update one Tokens_notificacion.
     * @example
     * // Update one Tokens_notificacion
     * const tokens_notificacion = await prisma.tokens_notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokens_notificacionUpdateArgs>(args: SelectSubset<T, tokens_notificacionUpdateArgs<ExtArgs>>): Prisma__tokens_notificacionClient<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens_notificacions.
     * @param {tokens_notificacionDeleteManyArgs} args - Arguments to filter Tokens_notificacions to delete.
     * @example
     * // Delete a few Tokens_notificacions
     * const { count } = await prisma.tokens_notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokens_notificacionDeleteManyArgs>(args?: SelectSubset<T, tokens_notificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens_notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokens_notificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens_notificacions
     * const tokens_notificacion = await prisma.tokens_notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokens_notificacionUpdateManyArgs>(args: SelectSubset<T, tokens_notificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens_notificacions and returns the data updated in the database.
     * @param {tokens_notificacionUpdateManyAndReturnArgs} args - Arguments to update many Tokens_notificacions.
     * @example
     * // Update many Tokens_notificacions
     * const tokens_notificacion = await prisma.tokens_notificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens_notificacions and only return the `id`
     * const tokens_notificacionWithIdOnly = await prisma.tokens_notificacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends tokens_notificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, tokens_notificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tokens_notificacion.
     * @param {tokens_notificacionUpsertArgs} args - Arguments to update or create a Tokens_notificacion.
     * @example
     * // Update or create a Tokens_notificacion
     * const tokens_notificacion = await prisma.tokens_notificacion.upsert({
     *   create: {
     *     // ... data to create a Tokens_notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens_notificacion we want to update
     *   }
     * })
     */
    upsert<T extends tokens_notificacionUpsertArgs>(args: SelectSubset<T, tokens_notificacionUpsertArgs<ExtArgs>>): Prisma__tokens_notificacionClient<$Result.GetResult<Prisma.$tokens_notificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens_notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokens_notificacionCountArgs} args - Arguments to filter Tokens_notificacions to count.
     * @example
     * // Count the number of Tokens_notificacions
     * const count = await prisma.tokens_notificacion.count({
     *   where: {
     *     // ... the filter for the Tokens_notificacions we want to count
     *   }
     * })
    **/
    count<T extends tokens_notificacionCountArgs>(
      args?: Subset<T, tokens_notificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tokens_notificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens_notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tokens_notificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tokens_notificacionAggregateArgs>(args: Subset<T, Tokens_notificacionAggregateArgs>): Prisma.PrismaPromise<GetTokens_notificacionAggregateType<T>>

    /**
     * Group by Tokens_notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokens_notificacionGroupByArgs} args - Group by arguments.
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
      T extends tokens_notificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokens_notificacionGroupByArgs['orderBy'] }
        : { orderBy?: tokens_notificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tokens_notificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokens_notificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tokens_notificacion model
   */
  readonly fields: tokens_notificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tokens_notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokens_notificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tokens_notificacion model
   */
  interface tokens_notificacionFieldRefs {
    readonly id: FieldRef<"tokens_notificacion", 'Int'>
    readonly usuarioId: FieldRef<"tokens_notificacion", 'String'>
    readonly token: FieldRef<"tokens_notificacion", 'String'>
    readonly platform: FieldRef<"tokens_notificacion", 'String'>
    readonly activo: FieldRef<"tokens_notificacion", 'Boolean'>
    readonly creadoEn: FieldRef<"tokens_notificacion", 'DateTime'>
    readonly ultimoUso: FieldRef<"tokens_notificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tokens_notificacion findUnique
   */
  export type tokens_notificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tokens_notificacion to fetch.
     */
    where: tokens_notificacionWhereUniqueInput
  }

  /**
   * tokens_notificacion findUniqueOrThrow
   */
  export type tokens_notificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tokens_notificacion to fetch.
     */
    where: tokens_notificacionWhereUniqueInput
  }

  /**
   * tokens_notificacion findFirst
   */
  export type tokens_notificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tokens_notificacion to fetch.
     */
    where?: tokens_notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens_notificacions to fetch.
     */
    orderBy?: tokens_notificacionOrderByWithRelationInput | tokens_notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens_notificacions.
     */
    cursor?: tokens_notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens_notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens_notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens_notificacions.
     */
    distinct?: Tokens_notificacionScalarFieldEnum | Tokens_notificacionScalarFieldEnum[]
  }

  /**
   * tokens_notificacion findFirstOrThrow
   */
  export type tokens_notificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tokens_notificacion to fetch.
     */
    where?: tokens_notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens_notificacions to fetch.
     */
    orderBy?: tokens_notificacionOrderByWithRelationInput | tokens_notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens_notificacions.
     */
    cursor?: tokens_notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens_notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens_notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens_notificacions.
     */
    distinct?: Tokens_notificacionScalarFieldEnum | Tokens_notificacionScalarFieldEnum[]
  }

  /**
   * tokens_notificacion findMany
   */
  export type tokens_notificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tokens_notificacions to fetch.
     */
    where?: tokens_notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens_notificacions to fetch.
     */
    orderBy?: tokens_notificacionOrderByWithRelationInput | tokens_notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens_notificacions.
     */
    cursor?: tokens_notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens_notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens_notificacions.
     */
    skip?: number
    distinct?: Tokens_notificacionScalarFieldEnum | Tokens_notificacionScalarFieldEnum[]
  }

  /**
   * tokens_notificacion create
   */
  export type tokens_notificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a tokens_notificacion.
     */
    data: XOR<tokens_notificacionCreateInput, tokens_notificacionUncheckedCreateInput>
  }

  /**
   * tokens_notificacion createMany
   */
  export type tokens_notificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens_notificacions.
     */
    data: tokens_notificacionCreateManyInput | tokens_notificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tokens_notificacion createManyAndReturn
   */
  export type tokens_notificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * The data used to create many tokens_notificacions.
     */
    data: tokens_notificacionCreateManyInput | tokens_notificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tokens_notificacion update
   */
  export type tokens_notificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a tokens_notificacion.
     */
    data: XOR<tokens_notificacionUpdateInput, tokens_notificacionUncheckedUpdateInput>
    /**
     * Choose, which tokens_notificacion to update.
     */
    where: tokens_notificacionWhereUniqueInput
  }

  /**
   * tokens_notificacion updateMany
   */
  export type tokens_notificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens_notificacions.
     */
    data: XOR<tokens_notificacionUpdateManyMutationInput, tokens_notificacionUncheckedUpdateManyInput>
    /**
     * Filter which tokens_notificacions to update
     */
    where?: tokens_notificacionWhereInput
    /**
     * Limit how many tokens_notificacions to update.
     */
    limit?: number
  }

  /**
   * tokens_notificacion updateManyAndReturn
   */
  export type tokens_notificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * The data used to update tokens_notificacions.
     */
    data: XOR<tokens_notificacionUpdateManyMutationInput, tokens_notificacionUncheckedUpdateManyInput>
    /**
     * Filter which tokens_notificacions to update
     */
    where?: tokens_notificacionWhereInput
    /**
     * Limit how many tokens_notificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tokens_notificacion upsert
   */
  export type tokens_notificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the tokens_notificacion to update in case it exists.
     */
    where: tokens_notificacionWhereUniqueInput
    /**
     * In case the tokens_notificacion found by the `where` argument doesn't exist, create a new tokens_notificacion with this data.
     */
    create: XOR<tokens_notificacionCreateInput, tokens_notificacionUncheckedCreateInput>
    /**
     * In case the tokens_notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokens_notificacionUpdateInput, tokens_notificacionUncheckedUpdateInput>
  }

  /**
   * tokens_notificacion delete
   */
  export type tokens_notificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
    /**
     * Filter which tokens_notificacion to delete.
     */
    where: tokens_notificacionWhereUniqueInput
  }

  /**
   * tokens_notificacion deleteMany
   */
  export type tokens_notificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens_notificacions to delete
     */
    where?: tokens_notificacionWhereInput
    /**
     * Limit how many tokens_notificacions to delete.
     */
    limit?: number
  }

  /**
   * tokens_notificacion without action
   */
  export type tokens_notificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens_notificacion
     */
    select?: tokens_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens_notificacion
     */
    omit?: tokens_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokens_notificacionInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    celular: 'celular',
    ciudad: 'ciudad',
    password: 'password',
    token: 'token',
    tokenFecha: 'tokenFecha',
    esAdministrador: 'esAdministrador',
    esRecolector: 'esRecolector',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const HistorialEnvioScalarFieldEnum: {
    id: 'id',
    NumeroGuia: 'NumeroGuia',
    PaymentId: 'PaymentId',
    Origen: 'Origen',
    Destino: 'Destino',
    Destinatario: 'Destinatario',
    Remitente: 'Remitente',
    Estado: 'Estado',
    FechaSolicitud: 'FechaSolicitud',
    usuarioId: 'usuarioId',
    peso: 'peso',
    valor: 'valor',
    dimensiones: 'dimensiones',
    notas: 'notas',
    fechaEntrega: 'fechaEntrega',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type HistorialEnvioScalarFieldEnum = (typeof HistorialEnvioScalarFieldEnum)[keyof typeof HistorialEnvioScalarFieldEnum]


  export const ContactoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo_documento: 'tipo_documento',
    numero_documento: 'numero_documento',
    celular: 'celular',
    ciudad: 'ciudad',
    email: 'email',
    correo: 'correo',
    mensaje: 'mensaje',
    creadoEn: 'creadoEn',
    leido: 'leido',
    respondido: 'respondido',
    archivado: 'archivado',
    respuesta: 'respuesta',
    fechaRespuesta: 'fechaRespuesta'
  };

  export type ContactoScalarFieldEnum = (typeof ContactoScalarFieldEnum)[keyof typeof ContactoScalarFieldEnum]


  export const Configuracion_appScalarFieldEnum: {
    id: 'id',
    clave: 'clave',
    valor: 'valor',
    descripcion: 'descripcion',
    activa: 'activa',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type Configuracion_appScalarFieldEnum = (typeof Configuracion_appScalarFieldEnum)[keyof typeof Configuracion_appScalarFieldEnum]


  export const Eventos_analyticsScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    sesionId: 'sesionId',
    eventoTipo: 'eventoTipo',
    eventoNombre: 'eventoNombre',
    pantalla: 'pantalla',
    datos: 'datos',
    timestamp: 'timestamp'
  };

  export type Eventos_analyticsScalarFieldEnum = (typeof Eventos_analyticsScalarFieldEnum)[keyof typeof Eventos_analyticsScalarFieldEnum]


  export const Sesiones_usuarioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    deviceId: 'deviceId',
    platform: 'platform',
    appVersion: 'appVersion',
    osVersion: 'osVersion',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    inicioSesion: 'inicioSesion',
    finSesion: 'finSesion',
    activa: 'activa'
  };

  export type Sesiones_usuarioScalarFieldEnum = (typeof Sesiones_usuarioScalarFieldEnum)[keyof typeof Sesiones_usuarioScalarFieldEnum]


  export const Tokens_notificacionScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    token: 'token',
    platform: 'platform',
    activo: 'activo',
    creadoEn: 'creadoEn',
    ultimoUso: 'ultimoUso'
  };

  export type Tokens_notificacionScalarFieldEnum = (typeof Tokens_notificacionScalarFieldEnum)[keyof typeof Tokens_notificacionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    celular?: StringNullableFilter<"User"> | string | null
    ciudad?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    tokenFecha?: DateTimeNullableFilter<"User"> | Date | string | null
    esAdministrador?: BoolFilter<"User"> | boolean
    esRecolector?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    envios?: HistorialEnvioListRelationFilter
    sesiones_usuario?: Sesiones_usuarioListRelationFilter
    tokens_notificacion?: Tokens_notificacionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenFecha?: SortOrderInput | SortOrder
    esAdministrador?: SortOrder
    esRecolector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    envios?: HistorialEnvioOrderByRelationAggregateInput
    sesiones_usuario?: sesiones_usuarioOrderByRelationAggregateInput
    tokens_notificacion?: tokens_notificacionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    celular?: StringNullableFilter<"User"> | string | null
    ciudad?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    tokenFecha?: DateTimeNullableFilter<"User"> | Date | string | null
    esAdministrador?: BoolFilter<"User"> | boolean
    esRecolector?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    envios?: HistorialEnvioListRelationFilter
    sesiones_usuario?: Sesiones_usuarioListRelationFilter
    tokens_notificacion?: Tokens_notificacionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenFecha?: SortOrderInput | SortOrder
    esAdministrador?: SortOrder
    esRecolector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    celular?: StringNullableWithAggregatesFilter<"User"> | string | null
    ciudad?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    tokenFecha?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    esAdministrador?: BoolWithAggregatesFilter<"User"> | boolean
    esRecolector?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type HistorialEnvioWhereInput = {
    AND?: HistorialEnvioWhereInput | HistorialEnvioWhereInput[]
    OR?: HistorialEnvioWhereInput[]
    NOT?: HistorialEnvioWhereInput | HistorialEnvioWhereInput[]
    id?: IntFilter<"HistorialEnvio"> | number
    NumeroGuia?: StringFilter<"HistorialEnvio"> | string
    PaymentId?: StringNullableFilter<"HistorialEnvio"> | string | null
    Origen?: StringFilter<"HistorialEnvio"> | string
    Destino?: StringFilter<"HistorialEnvio"> | string
    Destinatario?: StringFilter<"HistorialEnvio"> | string
    Remitente?: StringFilter<"HistorialEnvio"> | string
    Estado?: StringFilter<"HistorialEnvio"> | string
    FechaSolicitud?: DateTimeFilter<"HistorialEnvio"> | Date | string
    usuarioId?: StringNullableFilter<"HistorialEnvio"> | string | null
    peso?: FloatNullableFilter<"HistorialEnvio"> | number | null
    valor?: FloatNullableFilter<"HistorialEnvio"> | number | null
    dimensiones?: StringNullableFilter<"HistorialEnvio"> | string | null
    notas?: StringNullableFilter<"HistorialEnvio"> | string | null
    fechaEntrega?: DateTimeNullableFilter<"HistorialEnvio"> | Date | string | null
    creadoEn?: DateTimeFilter<"HistorialEnvio"> | Date | string
    actualizadoEn?: DateTimeFilter<"HistorialEnvio"> | Date | string
    usuario?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type HistorialEnvioOrderByWithRelationInput = {
    id?: SortOrder
    NumeroGuia?: SortOrder
    PaymentId?: SortOrderInput | SortOrder
    Origen?: SortOrder
    Destino?: SortOrder
    Destinatario?: SortOrder
    Remitente?: SortOrder
    Estado?: SortOrder
    FechaSolicitud?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    dimensiones?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    fechaEntrega?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    usuario?: UserOrderByWithRelationInput
  }

  export type HistorialEnvioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    NumeroGuia?: string
    AND?: HistorialEnvioWhereInput | HistorialEnvioWhereInput[]
    OR?: HistorialEnvioWhereInput[]
    NOT?: HistorialEnvioWhereInput | HistorialEnvioWhereInput[]
    PaymentId?: StringNullableFilter<"HistorialEnvio"> | string | null
    Origen?: StringFilter<"HistorialEnvio"> | string
    Destino?: StringFilter<"HistorialEnvio"> | string
    Destinatario?: StringFilter<"HistorialEnvio"> | string
    Remitente?: StringFilter<"HistorialEnvio"> | string
    Estado?: StringFilter<"HistorialEnvio"> | string
    FechaSolicitud?: DateTimeFilter<"HistorialEnvio"> | Date | string
    usuarioId?: StringNullableFilter<"HistorialEnvio"> | string | null
    peso?: FloatNullableFilter<"HistorialEnvio"> | number | null
    valor?: FloatNullableFilter<"HistorialEnvio"> | number | null
    dimensiones?: StringNullableFilter<"HistorialEnvio"> | string | null
    notas?: StringNullableFilter<"HistorialEnvio"> | string | null
    fechaEntrega?: DateTimeNullableFilter<"HistorialEnvio"> | Date | string | null
    creadoEn?: DateTimeFilter<"HistorialEnvio"> | Date | string
    actualizadoEn?: DateTimeFilter<"HistorialEnvio"> | Date | string
    usuario?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "NumeroGuia">

  export type HistorialEnvioOrderByWithAggregationInput = {
    id?: SortOrder
    NumeroGuia?: SortOrder
    PaymentId?: SortOrderInput | SortOrder
    Origen?: SortOrder
    Destino?: SortOrder
    Destinatario?: SortOrder
    Remitente?: SortOrder
    Estado?: SortOrder
    FechaSolicitud?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    dimensiones?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    fechaEntrega?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: HistorialEnvioCountOrderByAggregateInput
    _avg?: HistorialEnvioAvgOrderByAggregateInput
    _max?: HistorialEnvioMaxOrderByAggregateInput
    _min?: HistorialEnvioMinOrderByAggregateInput
    _sum?: HistorialEnvioSumOrderByAggregateInput
  }

  export type HistorialEnvioScalarWhereWithAggregatesInput = {
    AND?: HistorialEnvioScalarWhereWithAggregatesInput | HistorialEnvioScalarWhereWithAggregatesInput[]
    OR?: HistorialEnvioScalarWhereWithAggregatesInput[]
    NOT?: HistorialEnvioScalarWhereWithAggregatesInput | HistorialEnvioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistorialEnvio"> | number
    NumeroGuia?: StringWithAggregatesFilter<"HistorialEnvio"> | string
    PaymentId?: StringNullableWithAggregatesFilter<"HistorialEnvio"> | string | null
    Origen?: StringWithAggregatesFilter<"HistorialEnvio"> | string
    Destino?: StringWithAggregatesFilter<"HistorialEnvio"> | string
    Destinatario?: StringWithAggregatesFilter<"HistorialEnvio"> | string
    Remitente?: StringWithAggregatesFilter<"HistorialEnvio"> | string
    Estado?: StringWithAggregatesFilter<"HistorialEnvio"> | string
    FechaSolicitud?: DateTimeWithAggregatesFilter<"HistorialEnvio"> | Date | string
    usuarioId?: StringNullableWithAggregatesFilter<"HistorialEnvio"> | string | null
    peso?: FloatNullableWithAggregatesFilter<"HistorialEnvio"> | number | null
    valor?: FloatNullableWithAggregatesFilter<"HistorialEnvio"> | number | null
    dimensiones?: StringNullableWithAggregatesFilter<"HistorialEnvio"> | string | null
    notas?: StringNullableWithAggregatesFilter<"HistorialEnvio"> | string | null
    fechaEntrega?: DateTimeNullableWithAggregatesFilter<"HistorialEnvio"> | Date | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"HistorialEnvio"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"HistorialEnvio"> | Date | string
  }

  export type ContactoWhereInput = {
    AND?: ContactoWhereInput | ContactoWhereInput[]
    OR?: ContactoWhereInput[]
    NOT?: ContactoWhereInput | ContactoWhereInput[]
    id?: IntFilter<"Contacto"> | number
    nombre?: StringFilter<"Contacto"> | string
    tipo_documento?: StringNullableFilter<"Contacto"> | string | null
    numero_documento?: StringNullableFilter<"Contacto"> | string | null
    celular?: StringNullableFilter<"Contacto"> | string | null
    ciudad?: StringNullableFilter<"Contacto"> | string | null
    email?: StringNullableFilter<"Contacto"> | string | null
    correo?: StringFilter<"Contacto"> | string
    mensaje?: StringFilter<"Contacto"> | string
    creadoEn?: DateTimeFilter<"Contacto"> | Date | string
    leido?: BoolFilter<"Contacto"> | boolean
    respondido?: BoolFilter<"Contacto"> | boolean
    archivado?: BoolFilter<"Contacto"> | boolean
    respuesta?: StringNullableFilter<"Contacto"> | string | null
    fechaRespuesta?: DateTimeNullableFilter<"Contacto"> | Date | string | null
  }

  export type ContactoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrderInput | SortOrder
    numero_documento?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    correo?: SortOrder
    mensaje?: SortOrder
    creadoEn?: SortOrder
    leido?: SortOrder
    respondido?: SortOrder
    archivado?: SortOrder
    respuesta?: SortOrderInput | SortOrder
    fechaRespuesta?: SortOrderInput | SortOrder
  }

  export type ContactoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactoWhereInput | ContactoWhereInput[]
    OR?: ContactoWhereInput[]
    NOT?: ContactoWhereInput | ContactoWhereInput[]
    nombre?: StringFilter<"Contacto"> | string
    tipo_documento?: StringNullableFilter<"Contacto"> | string | null
    numero_documento?: StringNullableFilter<"Contacto"> | string | null
    celular?: StringNullableFilter<"Contacto"> | string | null
    ciudad?: StringNullableFilter<"Contacto"> | string | null
    email?: StringNullableFilter<"Contacto"> | string | null
    correo?: StringFilter<"Contacto"> | string
    mensaje?: StringFilter<"Contacto"> | string
    creadoEn?: DateTimeFilter<"Contacto"> | Date | string
    leido?: BoolFilter<"Contacto"> | boolean
    respondido?: BoolFilter<"Contacto"> | boolean
    archivado?: BoolFilter<"Contacto"> | boolean
    respuesta?: StringNullableFilter<"Contacto"> | string | null
    fechaRespuesta?: DateTimeNullableFilter<"Contacto"> | Date | string | null
  }, "id">

  export type ContactoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrderInput | SortOrder
    numero_documento?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    ciudad?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    correo?: SortOrder
    mensaje?: SortOrder
    creadoEn?: SortOrder
    leido?: SortOrder
    respondido?: SortOrder
    archivado?: SortOrder
    respuesta?: SortOrderInput | SortOrder
    fechaRespuesta?: SortOrderInput | SortOrder
    _count?: ContactoCountOrderByAggregateInput
    _avg?: ContactoAvgOrderByAggregateInput
    _max?: ContactoMaxOrderByAggregateInput
    _min?: ContactoMinOrderByAggregateInput
    _sum?: ContactoSumOrderByAggregateInput
  }

  export type ContactoScalarWhereWithAggregatesInput = {
    AND?: ContactoScalarWhereWithAggregatesInput | ContactoScalarWhereWithAggregatesInput[]
    OR?: ContactoScalarWhereWithAggregatesInput[]
    NOT?: ContactoScalarWhereWithAggregatesInput | ContactoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contacto"> | number
    nombre?: StringWithAggregatesFilter<"Contacto"> | string
    tipo_documento?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    numero_documento?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    celular?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    ciudad?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    email?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    correo?: StringWithAggregatesFilter<"Contacto"> | string
    mensaje?: StringWithAggregatesFilter<"Contacto"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Contacto"> | Date | string
    leido?: BoolWithAggregatesFilter<"Contacto"> | boolean
    respondido?: BoolWithAggregatesFilter<"Contacto"> | boolean
    archivado?: BoolWithAggregatesFilter<"Contacto"> | boolean
    respuesta?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    fechaRespuesta?: DateTimeNullableWithAggregatesFilter<"Contacto"> | Date | string | null
  }

  export type configuracion_appWhereInput = {
    AND?: configuracion_appWhereInput | configuracion_appWhereInput[]
    OR?: configuracion_appWhereInput[]
    NOT?: configuracion_appWhereInput | configuracion_appWhereInput[]
    id?: IntFilter<"configuracion_app"> | number
    clave?: StringFilter<"configuracion_app"> | string
    valor?: StringFilter<"configuracion_app"> | string
    descripcion?: StringNullableFilter<"configuracion_app"> | string | null
    activa?: BoolFilter<"configuracion_app"> | boolean
    creadoEn?: DateTimeFilter<"configuracion_app"> | Date | string
    actualizadoEn?: DateTimeFilter<"configuracion_app"> | Date | string
  }

  export type configuracion_appOrderByWithRelationInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type configuracion_appWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clave?: string
    AND?: configuracion_appWhereInput | configuracion_appWhereInput[]
    OR?: configuracion_appWhereInput[]
    NOT?: configuracion_appWhereInput | configuracion_appWhereInput[]
    valor?: StringFilter<"configuracion_app"> | string
    descripcion?: StringNullableFilter<"configuracion_app"> | string | null
    activa?: BoolFilter<"configuracion_app"> | boolean
    creadoEn?: DateTimeFilter<"configuracion_app"> | Date | string
    actualizadoEn?: DateTimeFilter<"configuracion_app"> | Date | string
  }, "id" | "clave">

  export type configuracion_appOrderByWithAggregationInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: configuracion_appCountOrderByAggregateInput
    _avg?: configuracion_appAvgOrderByAggregateInput
    _max?: configuracion_appMaxOrderByAggregateInput
    _min?: configuracion_appMinOrderByAggregateInput
    _sum?: configuracion_appSumOrderByAggregateInput
  }

  export type configuracion_appScalarWhereWithAggregatesInput = {
    AND?: configuracion_appScalarWhereWithAggregatesInput | configuracion_appScalarWhereWithAggregatesInput[]
    OR?: configuracion_appScalarWhereWithAggregatesInput[]
    NOT?: configuracion_appScalarWhereWithAggregatesInput | configuracion_appScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"configuracion_app"> | number
    clave?: StringWithAggregatesFilter<"configuracion_app"> | string
    valor?: StringWithAggregatesFilter<"configuracion_app"> | string
    descripcion?: StringNullableWithAggregatesFilter<"configuracion_app"> | string | null
    activa?: BoolWithAggregatesFilter<"configuracion_app"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"configuracion_app"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"configuracion_app"> | Date | string
  }

  export type eventos_analyticsWhereInput = {
    AND?: eventos_analyticsWhereInput | eventos_analyticsWhereInput[]
    OR?: eventos_analyticsWhereInput[]
    NOT?: eventos_analyticsWhereInput | eventos_analyticsWhereInput[]
    id?: StringFilter<"eventos_analytics"> | string
    usuarioId?: StringNullableFilter<"eventos_analytics"> | string | null
    sesionId?: StringNullableFilter<"eventos_analytics"> | string | null
    eventoTipo?: StringFilter<"eventos_analytics"> | string
    eventoNombre?: StringFilter<"eventos_analytics"> | string
    pantalla?: StringNullableFilter<"eventos_analytics"> | string | null
    datos?: JsonNullableFilter<"eventos_analytics">
    timestamp?: DateTimeFilter<"eventos_analytics"> | Date | string
  }

  export type eventos_analyticsOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    sesionId?: SortOrderInput | SortOrder
    eventoTipo?: SortOrder
    eventoNombre?: SortOrder
    pantalla?: SortOrderInput | SortOrder
    datos?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type eventos_analyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: eventos_analyticsWhereInput | eventos_analyticsWhereInput[]
    OR?: eventos_analyticsWhereInput[]
    NOT?: eventos_analyticsWhereInput | eventos_analyticsWhereInput[]
    usuarioId?: StringNullableFilter<"eventos_analytics"> | string | null
    sesionId?: StringNullableFilter<"eventos_analytics"> | string | null
    eventoTipo?: StringFilter<"eventos_analytics"> | string
    eventoNombre?: StringFilter<"eventos_analytics"> | string
    pantalla?: StringNullableFilter<"eventos_analytics"> | string | null
    datos?: JsonNullableFilter<"eventos_analytics">
    timestamp?: DateTimeFilter<"eventos_analytics"> | Date | string
  }, "id">

  export type eventos_analyticsOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    sesionId?: SortOrderInput | SortOrder
    eventoTipo?: SortOrder
    eventoNombre?: SortOrder
    pantalla?: SortOrderInput | SortOrder
    datos?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: eventos_analyticsCountOrderByAggregateInput
    _max?: eventos_analyticsMaxOrderByAggregateInput
    _min?: eventos_analyticsMinOrderByAggregateInput
  }

  export type eventos_analyticsScalarWhereWithAggregatesInput = {
    AND?: eventos_analyticsScalarWhereWithAggregatesInput | eventos_analyticsScalarWhereWithAggregatesInput[]
    OR?: eventos_analyticsScalarWhereWithAggregatesInput[]
    NOT?: eventos_analyticsScalarWhereWithAggregatesInput | eventos_analyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"eventos_analytics"> | string
    usuarioId?: StringNullableWithAggregatesFilter<"eventos_analytics"> | string | null
    sesionId?: StringNullableWithAggregatesFilter<"eventos_analytics"> | string | null
    eventoTipo?: StringWithAggregatesFilter<"eventos_analytics"> | string
    eventoNombre?: StringWithAggregatesFilter<"eventos_analytics"> | string
    pantalla?: StringNullableWithAggregatesFilter<"eventos_analytics"> | string | null
    datos?: JsonNullableWithAggregatesFilter<"eventos_analytics">
    timestamp?: DateTimeWithAggregatesFilter<"eventos_analytics"> | Date | string
  }

  export type sesiones_usuarioWhereInput = {
    AND?: sesiones_usuarioWhereInput | sesiones_usuarioWhereInput[]
    OR?: sesiones_usuarioWhereInput[]
    NOT?: sesiones_usuarioWhereInput | sesiones_usuarioWhereInput[]
    id?: StringFilter<"sesiones_usuario"> | string
    usuarioId?: StringFilter<"sesiones_usuario"> | string
    deviceId?: StringNullableFilter<"sesiones_usuario"> | string | null
    platform?: StringNullableFilter<"sesiones_usuario"> | string | null
    appVersion?: StringNullableFilter<"sesiones_usuario"> | string | null
    osVersion?: StringNullableFilter<"sesiones_usuario"> | string | null
    ipAddress?: StringNullableFilter<"sesiones_usuario"> | string | null
    userAgent?: StringNullableFilter<"sesiones_usuario"> | string | null
    inicioSesion?: DateTimeFilter<"sesiones_usuario"> | Date | string
    finSesion?: DateTimeNullableFilter<"sesiones_usuario"> | Date | string | null
    activa?: BoolFilter<"sesiones_usuario"> | boolean
    usuarios?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type sesiones_usuarioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    appVersion?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    inicioSesion?: SortOrder
    finSesion?: SortOrderInput | SortOrder
    activa?: SortOrder
    usuarios?: UserOrderByWithRelationInput
  }

  export type sesiones_usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sesiones_usuarioWhereInput | sesiones_usuarioWhereInput[]
    OR?: sesiones_usuarioWhereInput[]
    NOT?: sesiones_usuarioWhereInput | sesiones_usuarioWhereInput[]
    usuarioId?: StringFilter<"sesiones_usuario"> | string
    deviceId?: StringNullableFilter<"sesiones_usuario"> | string | null
    platform?: StringNullableFilter<"sesiones_usuario"> | string | null
    appVersion?: StringNullableFilter<"sesiones_usuario"> | string | null
    osVersion?: StringNullableFilter<"sesiones_usuario"> | string | null
    ipAddress?: StringNullableFilter<"sesiones_usuario"> | string | null
    userAgent?: StringNullableFilter<"sesiones_usuario"> | string | null
    inicioSesion?: DateTimeFilter<"sesiones_usuario"> | Date | string
    finSesion?: DateTimeNullableFilter<"sesiones_usuario"> | Date | string | null
    activa?: BoolFilter<"sesiones_usuario"> | boolean
    usuarios?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type sesiones_usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    appVersion?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    inicioSesion?: SortOrder
    finSesion?: SortOrderInput | SortOrder
    activa?: SortOrder
    _count?: sesiones_usuarioCountOrderByAggregateInput
    _max?: sesiones_usuarioMaxOrderByAggregateInput
    _min?: sesiones_usuarioMinOrderByAggregateInput
  }

  export type sesiones_usuarioScalarWhereWithAggregatesInput = {
    AND?: sesiones_usuarioScalarWhereWithAggregatesInput | sesiones_usuarioScalarWhereWithAggregatesInput[]
    OR?: sesiones_usuarioScalarWhereWithAggregatesInput[]
    NOT?: sesiones_usuarioScalarWhereWithAggregatesInput | sesiones_usuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sesiones_usuario"> | string
    usuarioId?: StringWithAggregatesFilter<"sesiones_usuario"> | string
    deviceId?: StringNullableWithAggregatesFilter<"sesiones_usuario"> | string | null
    platform?: StringNullableWithAggregatesFilter<"sesiones_usuario"> | string | null
    appVersion?: StringNullableWithAggregatesFilter<"sesiones_usuario"> | string | null
    osVersion?: StringNullableWithAggregatesFilter<"sesiones_usuario"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"sesiones_usuario"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"sesiones_usuario"> | string | null
    inicioSesion?: DateTimeWithAggregatesFilter<"sesiones_usuario"> | Date | string
    finSesion?: DateTimeNullableWithAggregatesFilter<"sesiones_usuario"> | Date | string | null
    activa?: BoolWithAggregatesFilter<"sesiones_usuario"> | boolean
  }

  export type tokens_notificacionWhereInput = {
    AND?: tokens_notificacionWhereInput | tokens_notificacionWhereInput[]
    OR?: tokens_notificacionWhereInput[]
    NOT?: tokens_notificacionWhereInput | tokens_notificacionWhereInput[]
    id?: IntFilter<"tokens_notificacion"> | number
    usuarioId?: StringFilter<"tokens_notificacion"> | string
    token?: StringFilter<"tokens_notificacion"> | string
    platform?: StringFilter<"tokens_notificacion"> | string
    activo?: BoolFilter<"tokens_notificacion"> | boolean
    creadoEn?: DateTimeFilter<"tokens_notificacion"> | Date | string
    ultimoUso?: DateTimeFilter<"tokens_notificacion"> | Date | string
    usuarios?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type tokens_notificacionOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    ultimoUso?: SortOrder
    usuarios?: UserOrderByWithRelationInput
  }

  export type tokens_notificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: tokens_notificacionWhereInput | tokens_notificacionWhereInput[]
    OR?: tokens_notificacionWhereInput[]
    NOT?: tokens_notificacionWhereInput | tokens_notificacionWhereInput[]
    usuarioId?: StringFilter<"tokens_notificacion"> | string
    platform?: StringFilter<"tokens_notificacion"> | string
    activo?: BoolFilter<"tokens_notificacion"> | boolean
    creadoEn?: DateTimeFilter<"tokens_notificacion"> | Date | string
    ultimoUso?: DateTimeFilter<"tokens_notificacion"> | Date | string
    usuarios?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type tokens_notificacionOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    ultimoUso?: SortOrder
    _count?: tokens_notificacionCountOrderByAggregateInput
    _avg?: tokens_notificacionAvgOrderByAggregateInput
    _max?: tokens_notificacionMaxOrderByAggregateInput
    _min?: tokens_notificacionMinOrderByAggregateInput
    _sum?: tokens_notificacionSumOrderByAggregateInput
  }

  export type tokens_notificacionScalarWhereWithAggregatesInput = {
    AND?: tokens_notificacionScalarWhereWithAggregatesInput | tokens_notificacionScalarWhereWithAggregatesInput[]
    OR?: tokens_notificacionScalarWhereWithAggregatesInput[]
    NOT?: tokens_notificacionScalarWhereWithAggregatesInput | tokens_notificacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tokens_notificacion"> | number
    usuarioId?: StringWithAggregatesFilter<"tokens_notificacion"> | string
    token?: StringWithAggregatesFilter<"tokens_notificacion"> | string
    platform?: StringWithAggregatesFilter<"tokens_notificacion"> | string
    activo?: BoolWithAggregatesFilter<"tokens_notificacion"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"tokens_notificacion"> | Date | string
    ultimoUso?: DateTimeWithAggregatesFilter<"tokens_notificacion"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioCreateNestedManyWithoutUsuarioInput
    sesiones_usuario?: sesiones_usuarioCreateNestedManyWithoutUsuariosInput
    tokens_notificacion?: tokens_notificacionCreateNestedManyWithoutUsuariosInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones_usuario?: sesiones_usuarioUncheckedCreateNestedManyWithoutUsuariosInput
    tokens_notificacion?: tokens_notificacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUpdateManyWithoutUsuarioNestedInput
    sesiones_usuario?: sesiones_usuarioUpdateManyWithoutUsuariosNestedInput
    tokens_notificacion?: tokens_notificacionUpdateManyWithoutUsuariosNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones_usuario?: sesiones_usuarioUncheckedUpdateManyWithoutUsuariosNestedInput
    tokens_notificacion?: tokens_notificacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialEnvioCreateInput = {
    NumeroGuia: string
    PaymentId?: string | null
    Origen: string
    Destino: string
    Destinatario: string
    Remitente: string
    Estado: string
    FechaSolicitud?: Date | string
    peso?: number | null
    valor?: number | null
    dimensiones?: string | null
    notas?: string | null
    fechaEntrega?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario?: UserCreateNestedOneWithoutEnviosInput
  }

  export type HistorialEnvioUncheckedCreateInput = {
    id?: number
    NumeroGuia: string
    PaymentId?: string | null
    Origen: string
    Destino: string
    Destinatario: string
    Remitente: string
    Estado: string
    FechaSolicitud?: Date | string
    usuarioId?: string | null
    peso?: number | null
    valor?: number | null
    dimensiones?: string | null
    notas?: string | null
    fechaEntrega?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type HistorialEnvioUpdateInput = {
    NumeroGuia?: StringFieldUpdateOperationsInput | string
    PaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    Origen?: StringFieldUpdateOperationsInput | string
    Destino?: StringFieldUpdateOperationsInput | string
    Destinatario?: StringFieldUpdateOperationsInput | string
    Remitente?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    FechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneWithoutEnviosNestedInput
  }

  export type HistorialEnvioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    NumeroGuia?: StringFieldUpdateOperationsInput | string
    PaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    Origen?: StringFieldUpdateOperationsInput | string
    Destino?: StringFieldUpdateOperationsInput | string
    Destinatario?: StringFieldUpdateOperationsInput | string
    Remitente?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    FechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialEnvioCreateManyInput = {
    id?: number
    NumeroGuia: string
    PaymentId?: string | null
    Origen: string
    Destino: string
    Destinatario: string
    Remitente: string
    Estado: string
    FechaSolicitud?: Date | string
    usuarioId?: string | null
    peso?: number | null
    valor?: number | null
    dimensiones?: string | null
    notas?: string | null
    fechaEntrega?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type HistorialEnvioUpdateManyMutationInput = {
    NumeroGuia?: StringFieldUpdateOperationsInput | string
    PaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    Origen?: StringFieldUpdateOperationsInput | string
    Destino?: StringFieldUpdateOperationsInput | string
    Destinatario?: StringFieldUpdateOperationsInput | string
    Remitente?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    FechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialEnvioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    NumeroGuia?: StringFieldUpdateOperationsInput | string
    PaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    Origen?: StringFieldUpdateOperationsInput | string
    Destino?: StringFieldUpdateOperationsInput | string
    Destinatario?: StringFieldUpdateOperationsInput | string
    Remitente?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    FechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoCreateInput = {
    nombre: string
    tipo_documento?: string | null
    numero_documento?: string | null
    celular?: string | null
    ciudad?: string | null
    email?: string | null
    correo: string
    mensaje: string
    creadoEn?: Date | string
    leido?: boolean
    respondido?: boolean
    archivado?: boolean
    respuesta?: string | null
    fechaRespuesta?: Date | string | null
  }

  export type ContactoUncheckedCreateInput = {
    id?: number
    nombre: string
    tipo_documento?: string | null
    numero_documento?: string | null
    celular?: string | null
    ciudad?: string | null
    email?: string | null
    correo: string
    mensaje: string
    creadoEn?: Date | string
    leido?: boolean
    respondido?: boolean
    archivado?: boolean
    respuesta?: string | null
    fechaRespuesta?: Date | string | null
  }

  export type ContactoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    respondido?: BoolFieldUpdateOperationsInput | boolean
    archivado?: BoolFieldUpdateOperationsInput | boolean
    respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    respondido?: BoolFieldUpdateOperationsInput | boolean
    archivado?: BoolFieldUpdateOperationsInput | boolean
    respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoCreateManyInput = {
    id?: number
    nombre: string
    tipo_documento?: string | null
    numero_documento?: string | null
    celular?: string | null
    ciudad?: string | null
    email?: string | null
    correo: string
    mensaje: string
    creadoEn?: Date | string
    leido?: boolean
    respondido?: boolean
    archivado?: boolean
    respuesta?: string | null
    fechaRespuesta?: Date | string | null
  }

  export type ContactoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    respondido?: BoolFieldUpdateOperationsInput | boolean
    archivado?: BoolFieldUpdateOperationsInput | boolean
    respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: NullableStringFieldUpdateOperationsInput | string | null
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    respondido?: BoolFieldUpdateOperationsInput | boolean
    archivado?: BoolFieldUpdateOperationsInput | boolean
    respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRespuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type configuracion_appCreateInput = {
    clave: string
    valor: string
    descripcion?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type configuracion_appUncheckedCreateInput = {
    id?: number
    clave: string
    valor: string
    descripcion?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type configuracion_appUpdateInput = {
    clave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracion_appUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracion_appCreateManyInput = {
    id?: number
    clave: string
    valor: string
    descripcion?: string | null
    activa?: boolean
    creadoEn?: Date | string
    actualizadoEn: Date | string
  }

  export type configuracion_appUpdateManyMutationInput = {
    clave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type configuracion_appUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventos_analyticsCreateInput = {
    id: string
    usuarioId?: string | null
    sesionId?: string | null
    eventoTipo: string
    eventoNombre: string
    pantalla?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type eventos_analyticsUncheckedCreateInput = {
    id: string
    usuarioId?: string | null
    sesionId?: string | null
    eventoTipo: string
    eventoNombre: string
    pantalla?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type eventos_analyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    sesionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventoTipo?: StringFieldUpdateOperationsInput | string
    eventoNombre?: StringFieldUpdateOperationsInput | string
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventos_analyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    sesionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventoTipo?: StringFieldUpdateOperationsInput | string
    eventoNombre?: StringFieldUpdateOperationsInput | string
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventos_analyticsCreateManyInput = {
    id: string
    usuarioId?: string | null
    sesionId?: string | null
    eventoTipo: string
    eventoNombre: string
    pantalla?: string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type eventos_analyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    sesionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventoTipo?: StringFieldUpdateOperationsInput | string
    eventoNombre?: StringFieldUpdateOperationsInput | string
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventos_analyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    sesionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventoTipo?: StringFieldUpdateOperationsInput | string
    eventoNombre?: StringFieldUpdateOperationsInput | string
    pantalla?: NullableStringFieldUpdateOperationsInput | string | null
    datos?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sesiones_usuarioCreateInput = {
    id: string
    deviceId?: string | null
    platform?: string | null
    appVersion?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    inicioSesion?: Date | string
    finSesion?: Date | string | null
    activa?: boolean
    usuarios: UserCreateNestedOneWithoutSesiones_usuarioInput
  }

  export type sesiones_usuarioUncheckedCreateInput = {
    id: string
    usuarioId: string
    deviceId?: string | null
    platform?: string | null
    appVersion?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    inicioSesion?: Date | string
    finSesion?: Date | string | null
    activa?: boolean
  }

  export type sesiones_usuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    inicioSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    finSesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
    usuarios?: UserUpdateOneRequiredWithoutSesiones_usuarioNestedInput
  }

  export type sesiones_usuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    inicioSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    finSesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sesiones_usuarioCreateManyInput = {
    id: string
    usuarioId: string
    deviceId?: string | null
    platform?: string | null
    appVersion?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    inicioSesion?: Date | string
    finSesion?: Date | string | null
    activa?: boolean
  }

  export type sesiones_usuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    inicioSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    finSesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sesiones_usuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    inicioSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    finSesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tokens_notificacionCreateInput = {
    token: string
    platform: string
    activo?: boolean
    creadoEn?: Date | string
    ultimoUso?: Date | string
    usuarios: UserCreateNestedOneWithoutTokens_notificacionInput
  }

  export type tokens_notificacionUncheckedCreateInput = {
    id?: number
    usuarioId: string
    token: string
    platform: string
    activo?: boolean
    creadoEn?: Date | string
    ultimoUso?: Date | string
  }

  export type tokens_notificacionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoUso?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserUpdateOneRequiredWithoutTokens_notificacionNestedInput
  }

  export type tokens_notificacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoUso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokens_notificacionCreateManyInput = {
    id?: number
    usuarioId: string
    token: string
    platform: string
    activo?: boolean
    creadoEn?: Date | string
    ultimoUso?: Date | string
  }

  export type tokens_notificacionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoUso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokens_notificacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoUso?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type HistorialEnvioListRelationFilter = {
    every?: HistorialEnvioWhereInput
    some?: HistorialEnvioWhereInput
    none?: HistorialEnvioWhereInput
  }

  export type Sesiones_usuarioListRelationFilter = {
    every?: sesiones_usuarioWhereInput
    some?: sesiones_usuarioWhereInput
    none?: sesiones_usuarioWhereInput
  }

  export type Tokens_notificacionListRelationFilter = {
    every?: tokens_notificacionWhereInput
    some?: tokens_notificacionWhereInput
    none?: tokens_notificacionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistorialEnvioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sesiones_usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tokens_notificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    celular?: SortOrder
    ciudad?: SortOrder
    password?: SortOrder
    token?: SortOrder
    tokenFecha?: SortOrder
    esAdministrador?: SortOrder
    esRecolector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    celular?: SortOrder
    ciudad?: SortOrder
    password?: SortOrder
    token?: SortOrder
    tokenFecha?: SortOrder
    esAdministrador?: SortOrder
    esRecolector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    celular?: SortOrder
    ciudad?: SortOrder
    password?: SortOrder
    token?: SortOrder
    tokenFecha?: SortOrder
    esAdministrador?: SortOrder
    esRecolector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type HistorialEnvioCountOrderByAggregateInput = {
    id?: SortOrder
    NumeroGuia?: SortOrder
    PaymentId?: SortOrder
    Origen?: SortOrder
    Destino?: SortOrder
    Destinatario?: SortOrder
    Remitente?: SortOrder
    Estado?: SortOrder
    FechaSolicitud?: SortOrder
    usuarioId?: SortOrder
    peso?: SortOrder
    valor?: SortOrder
    dimensiones?: SortOrder
    notas?: SortOrder
    fechaEntrega?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type HistorialEnvioAvgOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    valor?: SortOrder
  }

  export type HistorialEnvioMaxOrderByAggregateInput = {
    id?: SortOrder
    NumeroGuia?: SortOrder
    PaymentId?: SortOrder
    Origen?: SortOrder
    Destino?: SortOrder
    Destinatario?: SortOrder
    Remitente?: SortOrder
    Estado?: SortOrder
    FechaSolicitud?: SortOrder
    usuarioId?: SortOrder
    peso?: SortOrder
    valor?: SortOrder
    dimensiones?: SortOrder
    notas?: SortOrder
    fechaEntrega?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type HistorialEnvioMinOrderByAggregateInput = {
    id?: SortOrder
    NumeroGuia?: SortOrder
    PaymentId?: SortOrder
    Origen?: SortOrder
    Destino?: SortOrder
    Destinatario?: SortOrder
    Remitente?: SortOrder
    Estado?: SortOrder
    FechaSolicitud?: SortOrder
    usuarioId?: SortOrder
    peso?: SortOrder
    valor?: SortOrder
    dimensiones?: SortOrder
    notas?: SortOrder
    fechaEntrega?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type HistorialEnvioSumOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    valor?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ContactoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    celular?: SortOrder
    ciudad?: SortOrder
    email?: SortOrder
    correo?: SortOrder
    mensaje?: SortOrder
    creadoEn?: SortOrder
    leido?: SortOrder
    respondido?: SortOrder
    archivado?: SortOrder
    respuesta?: SortOrder
    fechaRespuesta?: SortOrder
  }

  export type ContactoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    celular?: SortOrder
    ciudad?: SortOrder
    email?: SortOrder
    correo?: SortOrder
    mensaje?: SortOrder
    creadoEn?: SortOrder
    leido?: SortOrder
    respondido?: SortOrder
    archivado?: SortOrder
    respuesta?: SortOrder
    fechaRespuesta?: SortOrder
  }

  export type ContactoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    celular?: SortOrder
    ciudad?: SortOrder
    email?: SortOrder
    correo?: SortOrder
    mensaje?: SortOrder
    creadoEn?: SortOrder
    leido?: SortOrder
    respondido?: SortOrder
    archivado?: SortOrder
    respuesta?: SortOrder
    fechaRespuesta?: SortOrder
  }

  export type ContactoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type configuracion_appCountOrderByAggregateInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type configuracion_appAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type configuracion_appMaxOrderByAggregateInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type configuracion_appMinOrderByAggregateInput = {
    id?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    descripcion?: SortOrder
    activa?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type configuracion_appSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type eventos_analyticsCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    sesionId?: SortOrder
    eventoTipo?: SortOrder
    eventoNombre?: SortOrder
    pantalla?: SortOrder
    datos?: SortOrder
    timestamp?: SortOrder
  }

  export type eventos_analyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    sesionId?: SortOrder
    eventoTipo?: SortOrder
    eventoNombre?: SortOrder
    pantalla?: SortOrder
    timestamp?: SortOrder
  }

  export type eventos_analyticsMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    sesionId?: SortOrder
    eventoTipo?: SortOrder
    eventoNombre?: SortOrder
    pantalla?: SortOrder
    timestamp?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type sesiones_usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    deviceId?: SortOrder
    platform?: SortOrder
    appVersion?: SortOrder
    osVersion?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    inicioSesion?: SortOrder
    finSesion?: SortOrder
    activa?: SortOrder
  }

  export type sesiones_usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    deviceId?: SortOrder
    platform?: SortOrder
    appVersion?: SortOrder
    osVersion?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    inicioSesion?: SortOrder
    finSesion?: SortOrder
    activa?: SortOrder
  }

  export type sesiones_usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    deviceId?: SortOrder
    platform?: SortOrder
    appVersion?: SortOrder
    osVersion?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    inicioSesion?: SortOrder
    finSesion?: SortOrder
    activa?: SortOrder
  }

  export type tokens_notificacionCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    ultimoUso?: SortOrder
  }

  export type tokens_notificacionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tokens_notificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    ultimoUso?: SortOrder
  }

  export type tokens_notificacionMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    ultimoUso?: SortOrder
  }

  export type tokens_notificacionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type HistorialEnvioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistorialEnvioCreateWithoutUsuarioInput, HistorialEnvioUncheckedCreateWithoutUsuarioInput> | HistorialEnvioCreateWithoutUsuarioInput[] | HistorialEnvioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialEnvioCreateOrConnectWithoutUsuarioInput | HistorialEnvioCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistorialEnvioCreateManyUsuarioInputEnvelope
    connect?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
  }

  export type sesiones_usuarioCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<sesiones_usuarioCreateWithoutUsuariosInput, sesiones_usuarioUncheckedCreateWithoutUsuariosInput> | sesiones_usuarioCreateWithoutUsuariosInput[] | sesiones_usuarioUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: sesiones_usuarioCreateOrConnectWithoutUsuariosInput | sesiones_usuarioCreateOrConnectWithoutUsuariosInput[]
    createMany?: sesiones_usuarioCreateManyUsuariosInputEnvelope
    connect?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
  }

  export type tokens_notificacionCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<tokens_notificacionCreateWithoutUsuariosInput, tokens_notificacionUncheckedCreateWithoutUsuariosInput> | tokens_notificacionCreateWithoutUsuariosInput[] | tokens_notificacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: tokens_notificacionCreateOrConnectWithoutUsuariosInput | tokens_notificacionCreateOrConnectWithoutUsuariosInput[]
    createMany?: tokens_notificacionCreateManyUsuariosInputEnvelope
    connect?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type HistorialEnvioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistorialEnvioCreateWithoutUsuarioInput, HistorialEnvioUncheckedCreateWithoutUsuarioInput> | HistorialEnvioCreateWithoutUsuarioInput[] | HistorialEnvioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialEnvioCreateOrConnectWithoutUsuarioInput | HistorialEnvioCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistorialEnvioCreateManyUsuarioInputEnvelope
    connect?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
  }

  export type sesiones_usuarioUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<sesiones_usuarioCreateWithoutUsuariosInput, sesiones_usuarioUncheckedCreateWithoutUsuariosInput> | sesiones_usuarioCreateWithoutUsuariosInput[] | sesiones_usuarioUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: sesiones_usuarioCreateOrConnectWithoutUsuariosInput | sesiones_usuarioCreateOrConnectWithoutUsuariosInput[]
    createMany?: sesiones_usuarioCreateManyUsuariosInputEnvelope
    connect?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
  }

  export type tokens_notificacionUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<tokens_notificacionCreateWithoutUsuariosInput, tokens_notificacionUncheckedCreateWithoutUsuariosInput> | tokens_notificacionCreateWithoutUsuariosInput[] | tokens_notificacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: tokens_notificacionCreateOrConnectWithoutUsuariosInput | tokens_notificacionCreateOrConnectWithoutUsuariosInput[]
    createMany?: tokens_notificacionCreateManyUsuariosInputEnvelope
    connect?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type HistorialEnvioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistorialEnvioCreateWithoutUsuarioInput, HistorialEnvioUncheckedCreateWithoutUsuarioInput> | HistorialEnvioCreateWithoutUsuarioInput[] | HistorialEnvioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialEnvioCreateOrConnectWithoutUsuarioInput | HistorialEnvioCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistorialEnvioUpsertWithWhereUniqueWithoutUsuarioInput | HistorialEnvioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistorialEnvioCreateManyUsuarioInputEnvelope
    set?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
    disconnect?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
    delete?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
    connect?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
    update?: HistorialEnvioUpdateWithWhereUniqueWithoutUsuarioInput | HistorialEnvioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistorialEnvioUpdateManyWithWhereWithoutUsuarioInput | HistorialEnvioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistorialEnvioScalarWhereInput | HistorialEnvioScalarWhereInput[]
  }

  export type sesiones_usuarioUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<sesiones_usuarioCreateWithoutUsuariosInput, sesiones_usuarioUncheckedCreateWithoutUsuariosInput> | sesiones_usuarioCreateWithoutUsuariosInput[] | sesiones_usuarioUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: sesiones_usuarioCreateOrConnectWithoutUsuariosInput | sesiones_usuarioCreateOrConnectWithoutUsuariosInput[]
    upsert?: sesiones_usuarioUpsertWithWhereUniqueWithoutUsuariosInput | sesiones_usuarioUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: sesiones_usuarioCreateManyUsuariosInputEnvelope
    set?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
    disconnect?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
    delete?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
    connect?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
    update?: sesiones_usuarioUpdateWithWhereUniqueWithoutUsuariosInput | sesiones_usuarioUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: sesiones_usuarioUpdateManyWithWhereWithoutUsuariosInput | sesiones_usuarioUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: sesiones_usuarioScalarWhereInput | sesiones_usuarioScalarWhereInput[]
  }

  export type tokens_notificacionUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<tokens_notificacionCreateWithoutUsuariosInput, tokens_notificacionUncheckedCreateWithoutUsuariosInput> | tokens_notificacionCreateWithoutUsuariosInput[] | tokens_notificacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: tokens_notificacionCreateOrConnectWithoutUsuariosInput | tokens_notificacionCreateOrConnectWithoutUsuariosInput[]
    upsert?: tokens_notificacionUpsertWithWhereUniqueWithoutUsuariosInput | tokens_notificacionUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: tokens_notificacionCreateManyUsuariosInputEnvelope
    set?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
    disconnect?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
    delete?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
    connect?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
    update?: tokens_notificacionUpdateWithWhereUniqueWithoutUsuariosInput | tokens_notificacionUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: tokens_notificacionUpdateManyWithWhereWithoutUsuariosInput | tokens_notificacionUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: tokens_notificacionScalarWhereInput | tokens_notificacionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type HistorialEnvioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistorialEnvioCreateWithoutUsuarioInput, HistorialEnvioUncheckedCreateWithoutUsuarioInput> | HistorialEnvioCreateWithoutUsuarioInput[] | HistorialEnvioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialEnvioCreateOrConnectWithoutUsuarioInput | HistorialEnvioCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistorialEnvioUpsertWithWhereUniqueWithoutUsuarioInput | HistorialEnvioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistorialEnvioCreateManyUsuarioInputEnvelope
    set?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
    disconnect?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
    delete?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
    connect?: HistorialEnvioWhereUniqueInput | HistorialEnvioWhereUniqueInput[]
    update?: HistorialEnvioUpdateWithWhereUniqueWithoutUsuarioInput | HistorialEnvioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistorialEnvioUpdateManyWithWhereWithoutUsuarioInput | HistorialEnvioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistorialEnvioScalarWhereInput | HistorialEnvioScalarWhereInput[]
  }

  export type sesiones_usuarioUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<sesiones_usuarioCreateWithoutUsuariosInput, sesiones_usuarioUncheckedCreateWithoutUsuariosInput> | sesiones_usuarioCreateWithoutUsuariosInput[] | sesiones_usuarioUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: sesiones_usuarioCreateOrConnectWithoutUsuariosInput | sesiones_usuarioCreateOrConnectWithoutUsuariosInput[]
    upsert?: sesiones_usuarioUpsertWithWhereUniqueWithoutUsuariosInput | sesiones_usuarioUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: sesiones_usuarioCreateManyUsuariosInputEnvelope
    set?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
    disconnect?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
    delete?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
    connect?: sesiones_usuarioWhereUniqueInput | sesiones_usuarioWhereUniqueInput[]
    update?: sesiones_usuarioUpdateWithWhereUniqueWithoutUsuariosInput | sesiones_usuarioUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: sesiones_usuarioUpdateManyWithWhereWithoutUsuariosInput | sesiones_usuarioUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: sesiones_usuarioScalarWhereInput | sesiones_usuarioScalarWhereInput[]
  }

  export type tokens_notificacionUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<tokens_notificacionCreateWithoutUsuariosInput, tokens_notificacionUncheckedCreateWithoutUsuariosInput> | tokens_notificacionCreateWithoutUsuariosInput[] | tokens_notificacionUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: tokens_notificacionCreateOrConnectWithoutUsuariosInput | tokens_notificacionCreateOrConnectWithoutUsuariosInput[]
    upsert?: tokens_notificacionUpsertWithWhereUniqueWithoutUsuariosInput | tokens_notificacionUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: tokens_notificacionCreateManyUsuariosInputEnvelope
    set?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
    disconnect?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
    delete?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
    connect?: tokens_notificacionWhereUniqueInput | tokens_notificacionWhereUniqueInput[]
    update?: tokens_notificacionUpdateWithWhereUniqueWithoutUsuariosInput | tokens_notificacionUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: tokens_notificacionUpdateManyWithWhereWithoutUsuariosInput | tokens_notificacionUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: tokens_notificacionScalarWhereInput | tokens_notificacionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEnviosInput = {
    create?: XOR<UserCreateWithoutEnviosInput, UserUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnviosInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutEnviosNestedInput = {
    create?: XOR<UserCreateWithoutEnviosInput, UserUncheckedCreateWithoutEnviosInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnviosInput
    upsert?: UserUpsertWithoutEnviosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnviosInput, UserUpdateWithoutEnviosInput>, UserUncheckedUpdateWithoutEnviosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutSesiones_usuarioInput = {
    create?: XOR<UserCreateWithoutSesiones_usuarioInput, UserUncheckedCreateWithoutSesiones_usuarioInput>
    connectOrCreate?: UserCreateOrConnectWithoutSesiones_usuarioInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSesiones_usuarioNestedInput = {
    create?: XOR<UserCreateWithoutSesiones_usuarioInput, UserUncheckedCreateWithoutSesiones_usuarioInput>
    connectOrCreate?: UserCreateOrConnectWithoutSesiones_usuarioInput
    upsert?: UserUpsertWithoutSesiones_usuarioInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSesiones_usuarioInput, UserUpdateWithoutSesiones_usuarioInput>, UserUncheckedUpdateWithoutSesiones_usuarioInput>
  }

  export type UserCreateNestedOneWithoutTokens_notificacionInput = {
    create?: XOR<UserCreateWithoutTokens_notificacionInput, UserUncheckedCreateWithoutTokens_notificacionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokens_notificacionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokens_notificacionNestedInput = {
    create?: XOR<UserCreateWithoutTokens_notificacionInput, UserUncheckedCreateWithoutTokens_notificacionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokens_notificacionInput
    upsert?: UserUpsertWithoutTokens_notificacionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokens_notificacionInput, UserUpdateWithoutTokens_notificacionInput>, UserUncheckedUpdateWithoutTokens_notificacionInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioCreateNestedManyWithoutUsuarioInput
    sesiones_usuario?: sesiones_usuarioCreateNestedManyWithoutUsuariosInput
    tokens_notificacion?: tokens_notificacionCreateNestedManyWithoutUsuariosInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones_usuario?: sesiones_usuarioUncheckedCreateNestedManyWithoutUsuariosInput
    tokens_notificacion?: tokens_notificacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUpdateManyWithoutUsuarioNestedInput
    sesiones_usuario?: sesiones_usuarioUpdateManyWithoutUsuariosNestedInput
    tokens_notificacion?: tokens_notificacionUpdateManyWithoutUsuariosNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones_usuario?: sesiones_usuarioUncheckedUpdateManyWithoutUsuariosNestedInput
    tokens_notificacion?: tokens_notificacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioCreateNestedManyWithoutUsuarioInput
    sesiones_usuario?: sesiones_usuarioCreateNestedManyWithoutUsuariosInput
    tokens_notificacion?: tokens_notificacionCreateNestedManyWithoutUsuariosInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones_usuario?: sesiones_usuarioUncheckedCreateNestedManyWithoutUsuariosInput
    tokens_notificacion?: tokens_notificacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUpdateManyWithoutUsuarioNestedInput
    sesiones_usuario?: sesiones_usuarioUpdateManyWithoutUsuariosNestedInput
    tokens_notificacion?: tokens_notificacionUpdateManyWithoutUsuariosNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones_usuario?: sesiones_usuarioUncheckedUpdateManyWithoutUsuariosNestedInput
    tokens_notificacion?: tokens_notificacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistorialEnvioCreateWithoutUsuarioInput = {
    NumeroGuia: string
    PaymentId?: string | null
    Origen: string
    Destino: string
    Destinatario: string
    Remitente: string
    Estado: string
    FechaSolicitud?: Date | string
    peso?: number | null
    valor?: number | null
    dimensiones?: string | null
    notas?: string | null
    fechaEntrega?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type HistorialEnvioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    NumeroGuia: string
    PaymentId?: string | null
    Origen: string
    Destino: string
    Destinatario: string
    Remitente: string
    Estado: string
    FechaSolicitud?: Date | string
    peso?: number | null
    valor?: number | null
    dimensiones?: string | null
    notas?: string | null
    fechaEntrega?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type HistorialEnvioCreateOrConnectWithoutUsuarioInput = {
    where: HistorialEnvioWhereUniqueInput
    create: XOR<HistorialEnvioCreateWithoutUsuarioInput, HistorialEnvioUncheckedCreateWithoutUsuarioInput>
  }

  export type HistorialEnvioCreateManyUsuarioInputEnvelope = {
    data: HistorialEnvioCreateManyUsuarioInput | HistorialEnvioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type sesiones_usuarioCreateWithoutUsuariosInput = {
    id: string
    deviceId?: string | null
    platform?: string | null
    appVersion?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    inicioSesion?: Date | string
    finSesion?: Date | string | null
    activa?: boolean
  }

  export type sesiones_usuarioUncheckedCreateWithoutUsuariosInput = {
    id: string
    deviceId?: string | null
    platform?: string | null
    appVersion?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    inicioSesion?: Date | string
    finSesion?: Date | string | null
    activa?: boolean
  }

  export type sesiones_usuarioCreateOrConnectWithoutUsuariosInput = {
    where: sesiones_usuarioWhereUniqueInput
    create: XOR<sesiones_usuarioCreateWithoutUsuariosInput, sesiones_usuarioUncheckedCreateWithoutUsuariosInput>
  }

  export type sesiones_usuarioCreateManyUsuariosInputEnvelope = {
    data: sesiones_usuarioCreateManyUsuariosInput | sesiones_usuarioCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type tokens_notificacionCreateWithoutUsuariosInput = {
    token: string
    platform: string
    activo?: boolean
    creadoEn?: Date | string
    ultimoUso?: Date | string
  }

  export type tokens_notificacionUncheckedCreateWithoutUsuariosInput = {
    id?: number
    token: string
    platform: string
    activo?: boolean
    creadoEn?: Date | string
    ultimoUso?: Date | string
  }

  export type tokens_notificacionCreateOrConnectWithoutUsuariosInput = {
    where: tokens_notificacionWhereUniqueInput
    create: XOR<tokens_notificacionCreateWithoutUsuariosInput, tokens_notificacionUncheckedCreateWithoutUsuariosInput>
  }

  export type tokens_notificacionCreateManyUsuariosInputEnvelope = {
    data: tokens_notificacionCreateManyUsuariosInput | tokens_notificacionCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type HistorialEnvioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: HistorialEnvioWhereUniqueInput
    update: XOR<HistorialEnvioUpdateWithoutUsuarioInput, HistorialEnvioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<HistorialEnvioCreateWithoutUsuarioInput, HistorialEnvioUncheckedCreateWithoutUsuarioInput>
  }

  export type HistorialEnvioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: HistorialEnvioWhereUniqueInput
    data: XOR<HistorialEnvioUpdateWithoutUsuarioInput, HistorialEnvioUncheckedUpdateWithoutUsuarioInput>
  }

  export type HistorialEnvioUpdateManyWithWhereWithoutUsuarioInput = {
    where: HistorialEnvioScalarWhereInput
    data: XOR<HistorialEnvioUpdateManyMutationInput, HistorialEnvioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type HistorialEnvioScalarWhereInput = {
    AND?: HistorialEnvioScalarWhereInput | HistorialEnvioScalarWhereInput[]
    OR?: HistorialEnvioScalarWhereInput[]
    NOT?: HistorialEnvioScalarWhereInput | HistorialEnvioScalarWhereInput[]
    id?: IntFilter<"HistorialEnvio"> | number
    NumeroGuia?: StringFilter<"HistorialEnvio"> | string
    PaymentId?: StringNullableFilter<"HistorialEnvio"> | string | null
    Origen?: StringFilter<"HistorialEnvio"> | string
    Destino?: StringFilter<"HistorialEnvio"> | string
    Destinatario?: StringFilter<"HistorialEnvio"> | string
    Remitente?: StringFilter<"HistorialEnvio"> | string
    Estado?: StringFilter<"HistorialEnvio"> | string
    FechaSolicitud?: DateTimeFilter<"HistorialEnvio"> | Date | string
    usuarioId?: StringNullableFilter<"HistorialEnvio"> | string | null
    peso?: FloatNullableFilter<"HistorialEnvio"> | number | null
    valor?: FloatNullableFilter<"HistorialEnvio"> | number | null
    dimensiones?: StringNullableFilter<"HistorialEnvio"> | string | null
    notas?: StringNullableFilter<"HistorialEnvio"> | string | null
    fechaEntrega?: DateTimeNullableFilter<"HistorialEnvio"> | Date | string | null
    creadoEn?: DateTimeFilter<"HistorialEnvio"> | Date | string
    actualizadoEn?: DateTimeFilter<"HistorialEnvio"> | Date | string
  }

  export type sesiones_usuarioUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: sesiones_usuarioWhereUniqueInput
    update: XOR<sesiones_usuarioUpdateWithoutUsuariosInput, sesiones_usuarioUncheckedUpdateWithoutUsuariosInput>
    create: XOR<sesiones_usuarioCreateWithoutUsuariosInput, sesiones_usuarioUncheckedCreateWithoutUsuariosInput>
  }

  export type sesiones_usuarioUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: sesiones_usuarioWhereUniqueInput
    data: XOR<sesiones_usuarioUpdateWithoutUsuariosInput, sesiones_usuarioUncheckedUpdateWithoutUsuariosInput>
  }

  export type sesiones_usuarioUpdateManyWithWhereWithoutUsuariosInput = {
    where: sesiones_usuarioScalarWhereInput
    data: XOR<sesiones_usuarioUpdateManyMutationInput, sesiones_usuarioUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type sesiones_usuarioScalarWhereInput = {
    AND?: sesiones_usuarioScalarWhereInput | sesiones_usuarioScalarWhereInput[]
    OR?: sesiones_usuarioScalarWhereInput[]
    NOT?: sesiones_usuarioScalarWhereInput | sesiones_usuarioScalarWhereInput[]
    id?: StringFilter<"sesiones_usuario"> | string
    usuarioId?: StringFilter<"sesiones_usuario"> | string
    deviceId?: StringNullableFilter<"sesiones_usuario"> | string | null
    platform?: StringNullableFilter<"sesiones_usuario"> | string | null
    appVersion?: StringNullableFilter<"sesiones_usuario"> | string | null
    osVersion?: StringNullableFilter<"sesiones_usuario"> | string | null
    ipAddress?: StringNullableFilter<"sesiones_usuario"> | string | null
    userAgent?: StringNullableFilter<"sesiones_usuario"> | string | null
    inicioSesion?: DateTimeFilter<"sesiones_usuario"> | Date | string
    finSesion?: DateTimeNullableFilter<"sesiones_usuario"> | Date | string | null
    activa?: BoolFilter<"sesiones_usuario"> | boolean
  }

  export type tokens_notificacionUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: tokens_notificacionWhereUniqueInput
    update: XOR<tokens_notificacionUpdateWithoutUsuariosInput, tokens_notificacionUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tokens_notificacionCreateWithoutUsuariosInput, tokens_notificacionUncheckedCreateWithoutUsuariosInput>
  }

  export type tokens_notificacionUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: tokens_notificacionWhereUniqueInput
    data: XOR<tokens_notificacionUpdateWithoutUsuariosInput, tokens_notificacionUncheckedUpdateWithoutUsuariosInput>
  }

  export type tokens_notificacionUpdateManyWithWhereWithoutUsuariosInput = {
    where: tokens_notificacionScalarWhereInput
    data: XOR<tokens_notificacionUpdateManyMutationInput, tokens_notificacionUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type tokens_notificacionScalarWhereInput = {
    AND?: tokens_notificacionScalarWhereInput | tokens_notificacionScalarWhereInput[]
    OR?: tokens_notificacionScalarWhereInput[]
    NOT?: tokens_notificacionScalarWhereInput | tokens_notificacionScalarWhereInput[]
    id?: IntFilter<"tokens_notificacion"> | number
    usuarioId?: StringFilter<"tokens_notificacion"> | string
    token?: StringFilter<"tokens_notificacion"> | string
    platform?: StringFilter<"tokens_notificacion"> | string
    activo?: BoolFilter<"tokens_notificacion"> | boolean
    creadoEn?: DateTimeFilter<"tokens_notificacion"> | Date | string
    ultimoUso?: DateTimeFilter<"tokens_notificacion"> | Date | string
  }

  export type UserCreateWithoutEnviosInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    sesiones_usuario?: sesiones_usuarioCreateNestedManyWithoutUsuariosInput
    tokens_notificacion?: tokens_notificacionCreateNestedManyWithoutUsuariosInput
  }

  export type UserUncheckedCreateWithoutEnviosInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    sesiones_usuario?: sesiones_usuarioUncheckedCreateNestedManyWithoutUsuariosInput
    tokens_notificacion?: tokens_notificacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UserCreateOrConnectWithoutEnviosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnviosInput, UserUncheckedCreateWithoutEnviosInput>
  }

  export type UserUpsertWithoutEnviosInput = {
    update: XOR<UserUpdateWithoutEnviosInput, UserUncheckedUpdateWithoutEnviosInput>
    create: XOR<UserCreateWithoutEnviosInput, UserUncheckedCreateWithoutEnviosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnviosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnviosInput, UserUncheckedUpdateWithoutEnviosInput>
  }

  export type UserUpdateWithoutEnviosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    sesiones_usuario?: sesiones_usuarioUpdateManyWithoutUsuariosNestedInput
    tokens_notificacion?: tokens_notificacionUpdateManyWithoutUsuariosNestedInput
  }

  export type UserUncheckedUpdateWithoutEnviosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    sesiones_usuario?: sesiones_usuarioUncheckedUpdateManyWithoutUsuariosNestedInput
    tokens_notificacion?: tokens_notificacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UserCreateWithoutSesiones_usuarioInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioCreateNestedManyWithoutUsuarioInput
    tokens_notificacion?: tokens_notificacionCreateNestedManyWithoutUsuariosInput
  }

  export type UserUncheckedCreateWithoutSesiones_usuarioInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    tokens_notificacion?: tokens_notificacionUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UserCreateOrConnectWithoutSesiones_usuarioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSesiones_usuarioInput, UserUncheckedCreateWithoutSesiones_usuarioInput>
  }

  export type UserUpsertWithoutSesiones_usuarioInput = {
    update: XOR<UserUpdateWithoutSesiones_usuarioInput, UserUncheckedUpdateWithoutSesiones_usuarioInput>
    create: XOR<UserCreateWithoutSesiones_usuarioInput, UserUncheckedCreateWithoutSesiones_usuarioInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSesiones_usuarioInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSesiones_usuarioInput, UserUncheckedUpdateWithoutSesiones_usuarioInput>
  }

  export type UserUpdateWithoutSesiones_usuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUpdateManyWithoutUsuarioNestedInput
    tokens_notificacion?: tokens_notificacionUpdateManyWithoutUsuariosNestedInput
  }

  export type UserUncheckedUpdateWithoutSesiones_usuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    tokens_notificacion?: tokens_notificacionUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UserCreateWithoutTokens_notificacionInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioCreateNestedManyWithoutUsuarioInput
    sesiones_usuario?: sesiones_usuarioCreateNestedManyWithoutUsuariosInput
  }

  export type UserUncheckedCreateWithoutTokens_notificacionInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    celular?: string | null
    ciudad?: string | null
    password?: string | null
    token?: string | null
    tokenFecha?: Date | string | null
    esAdministrador?: boolean
    esRecolector?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    envios?: HistorialEnvioUncheckedCreateNestedManyWithoutUsuarioInput
    sesiones_usuario?: sesiones_usuarioUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UserCreateOrConnectWithoutTokens_notificacionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokens_notificacionInput, UserUncheckedCreateWithoutTokens_notificacionInput>
  }

  export type UserUpsertWithoutTokens_notificacionInput = {
    update: XOR<UserUpdateWithoutTokens_notificacionInput, UserUncheckedUpdateWithoutTokens_notificacionInput>
    create: XOR<UserCreateWithoutTokens_notificacionInput, UserUncheckedCreateWithoutTokens_notificacionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokens_notificacionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokens_notificacionInput, UserUncheckedUpdateWithoutTokens_notificacionInput>
  }

  export type UserUpdateWithoutTokens_notificacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUpdateManyWithoutUsuarioNestedInput
    sesiones_usuario?: sesiones_usuarioUpdateManyWithoutUsuariosNestedInput
  }

  export type UserUncheckedUpdateWithoutTokens_notificacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    esAdministrador?: BoolFieldUpdateOperationsInput | boolean
    esRecolector?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    envios?: HistorialEnvioUncheckedUpdateManyWithoutUsuarioNestedInput
    sesiones_usuario?: sesiones_usuarioUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type HistorialEnvioCreateManyUsuarioInput = {
    id?: number
    NumeroGuia: string
    PaymentId?: string | null
    Origen: string
    Destino: string
    Destinatario: string
    Remitente: string
    Estado: string
    FechaSolicitud?: Date | string
    peso?: number | null
    valor?: number | null
    dimensiones?: string | null
    notas?: string | null
    fechaEntrega?: Date | string | null
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type sesiones_usuarioCreateManyUsuariosInput = {
    id: string
    deviceId?: string | null
    platform?: string | null
    appVersion?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    inicioSesion?: Date | string
    finSesion?: Date | string | null
    activa?: boolean
  }

  export type tokens_notificacionCreateManyUsuariosInput = {
    id?: number
    token: string
    platform: string
    activo?: boolean
    creadoEn?: Date | string
    ultimoUso?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialEnvioUpdateWithoutUsuarioInput = {
    NumeroGuia?: StringFieldUpdateOperationsInput | string
    PaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    Origen?: StringFieldUpdateOperationsInput | string
    Destino?: StringFieldUpdateOperationsInput | string
    Destinatario?: StringFieldUpdateOperationsInput | string
    Remitente?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    FechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialEnvioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    NumeroGuia?: StringFieldUpdateOperationsInput | string
    PaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    Origen?: StringFieldUpdateOperationsInput | string
    Destino?: StringFieldUpdateOperationsInput | string
    Destinatario?: StringFieldUpdateOperationsInput | string
    Remitente?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    FechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialEnvioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    NumeroGuia?: StringFieldUpdateOperationsInput | string
    PaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    Origen?: StringFieldUpdateOperationsInput | string
    Destino?: StringFieldUpdateOperationsInput | string
    Destinatario?: StringFieldUpdateOperationsInput | string
    Remitente?: StringFieldUpdateOperationsInput | string
    Estado?: StringFieldUpdateOperationsInput | string
    FechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    dimensiones?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sesiones_usuarioUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    inicioSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    finSesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sesiones_usuarioUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    inicioSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    finSesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sesiones_usuarioUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    inicioSesion?: DateTimeFieldUpdateOperationsInput | Date | string
    finSesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tokens_notificacionUpdateWithoutUsuariosInput = {
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoUso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokens_notificacionUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoUso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokens_notificacionUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoUso?: DateTimeFieldUpdateOperationsInput | Date | string
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