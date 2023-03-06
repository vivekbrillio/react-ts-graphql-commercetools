import type {
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
} from "./graphql/__generated__/graphql";
import { GET_PRODUCTS } from "./graphql/queries";
import { useQuery } from "@apollo/client";
import "./App.css";
import { COUNTRY, CURRENCY_CODE, LOCALE } from "./utils/constants";

function App() {
  const { data, error, loading } = useQuery<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  >(GET_PRODUCTS, {
    variables: {
      sorts: null,
      filters: [
        {
          model: {
            range: {
              path: "variants.scopedPrice.value.centAmount",
              ranges: [
                {
                  from: "0",
                  to: "10000",
                },
              ],
            },
          },
        },
      ],
      text: "",
      locale: LOCALE,
      limit: 20,
      offset: 0,
      priceSelector: {
        currency: CURRENCY_CODE,
        country: COUNTRY,
        channel: null,
        customerGroup: null,
      },
    },
  });
  if (loading) return <> Loading</>;
  if (error) return <>{JSON.stringify(error)}</>;
  return <>{JSON.stringify(data)}</>;
}

export default App;
