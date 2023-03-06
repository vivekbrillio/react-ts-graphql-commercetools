/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getAllProducts(\n    $locale: Locale!\n    $limit: Int!\n    $offset: Int!\n    $priceSelector: PriceSelectorInput!\n    $sorts: [String!] = []\n    $filters: [SearchFilterInput!] = []\n    $text: String = \"\"\n  ) {\n    productProjectionSearch(\n      locale: $locale\n      text: $text\n      limit: $limit\n      offset: $offset\n      sorts: $sorts\n      priceSelector: $priceSelector\n      filters: $filters\n    ) {\n      total\n      results {\n        id\n        name(locale: $locale)\n        slug(locale: $locale)\n        description(locale: $locale)\n        masterVariant {\n          variantId: id\n          sku\n          images {\n            url\n            label\n          }\n          attributesRaw {\n            name\n            value\n          }\n          scopedPrice {\n            value {\n              currencyCode\n              centAmount\n              fractionDigits\n            }\n            discounted {\n              discount {\n                name(locale: $locale)\n              }\n              value {\n                currencyCode\n                centAmount\n                fractionDigits\n              }\n            }\n            country\n          }\n        }\n      }\n    }\n  }\n": types.GetAllProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllProducts(\n    $locale: Locale!\n    $limit: Int!\n    $offset: Int!\n    $priceSelector: PriceSelectorInput!\n    $sorts: [String!] = []\n    $filters: [SearchFilterInput!] = []\n    $text: String = \"\"\n  ) {\n    productProjectionSearch(\n      locale: $locale\n      text: $text\n      limit: $limit\n      offset: $offset\n      sorts: $sorts\n      priceSelector: $priceSelector\n      filters: $filters\n    ) {\n      total\n      results {\n        id\n        name(locale: $locale)\n        slug(locale: $locale)\n        description(locale: $locale)\n        masterVariant {\n          variantId: id\n          sku\n          images {\n            url\n            label\n          }\n          attributesRaw {\n            name\n            value\n          }\n          scopedPrice {\n            value {\n              currencyCode\n              centAmount\n              fractionDigits\n            }\n            discounted {\n              discount {\n                name(locale: $locale)\n              }\n              value {\n                currencyCode\n                centAmount\n                fractionDigits\n              }\n            }\n            country\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllProducts(\n    $locale: Locale!\n    $limit: Int!\n    $offset: Int!\n    $priceSelector: PriceSelectorInput!\n    $sorts: [String!] = []\n    $filters: [SearchFilterInput!] = []\n    $text: String = \"\"\n  ) {\n    productProjectionSearch(\n      locale: $locale\n      text: $text\n      limit: $limit\n      offset: $offset\n      sorts: $sorts\n      priceSelector: $priceSelector\n      filters: $filters\n    ) {\n      total\n      results {\n        id\n        name(locale: $locale)\n        slug(locale: $locale)\n        description(locale: $locale)\n        masterVariant {\n          variantId: id\n          sku\n          images {\n            url\n            label\n          }\n          attributesRaw {\n            name\n            value\n          }\n          scopedPrice {\n            value {\n              currencyCode\n              centAmount\n              fractionDigits\n            }\n            discounted {\n              discount {\n                name(locale: $locale)\n              }\n              value {\n                currencyCode\n                centAmount\n                fractionDigits\n              }\n            }\n            country\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;