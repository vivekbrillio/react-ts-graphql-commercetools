import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getAllProducts(
    $locale: Locale!
    $limit: Int!
    $offset: Int!
    $priceSelector: PriceSelectorInput!
    $sorts: [String!] = []
    $filters: [SearchFilterInput!] = []
    $text: String = ""
  ) {
    productProjectionSearch(
      locale: $locale
      text: $text
      limit: $limit
      offset: $offset
      sorts: $sorts
      priceSelector: $priceSelector
      filters: $filters
    ) {
      total
      results {
        id
        name(locale: $locale)
        slug(locale: $locale)
        description(locale: $locale)
        masterVariant {
          variantId: id
          sku
          images {
            url
            label
          }
          attributesRaw {
            name
            value
          }
          scopedPrice {
            value {
              currencyCode
              centAmount
              fractionDigits
            }
            discounted {
              discount {
                name(locale: $locale)
              }
              value {
                currencyCode
                centAmount
                fractionDigits
              }
            }
            country
          }
        }
      }
    }
  }
`;
