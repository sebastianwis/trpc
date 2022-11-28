// import { QueryOptions } from '@tanstack/react-query';
// import { TRPCClient } from '@trpc/client';
// import {
//   AnyProcedure,
//   AnyQueryProcedure,
//   AnyRouter,
//   Filter,
//   inferProcedureInput,
// } from '@trpc/server';
// import {
//   createRecursiveProxy,
//   inferTransformedProcedureOutput,
// } from '@trpc/server/shared';
// import { getQueryKey } from '../../internals/getQueryKey';

// /**
//  * @internal
//  */
// export type UseQueriesProcedureRecord<TRouter extends AnyRouter> = {
//   [TKey in keyof Filter<
//     TRouter['_def']['record'],
//     AnyRouter | AnyQueryProcedure
//   >]: TRouter['_def']['record'][TKey] extends AnyRouter
//     ? UseQueriesProcedureRecord<TRouter['_def']['record'][TKey]>
//     : GetQueryOptions<TRouter['_def']['record'][TKey]>;
// };

// /**
//  * Create proxy for `useQueries` options
//  * @internal
//  */
// export function createUseQueriesProxy<TRouter extends AnyRouter>(
//   client: TRPCClient<TRouter>,
// ) {
//   return createRecursiveProxy((opts) => {
//     const path = opts.path.join('.');
//     const [input, ...rest] = opts.args;

//     const queryKey = getQueryKey(path, input);

//     const options: QueryOptions = {
//       queryKey,
//       queryFn: () => {
//         return client.query(path, input);
//       },
//       ...(rest[1] as any),
//     };

//     return options;
//   }) as UseQueriesProcedureRecord<TRouter>;
// }
