import { z } from "zod";

import { ctTokenInfoSchema } from "../validators";

export * from "../../../graphql/__generated__/graphql";

export type CtTokenInfo = z.infer<typeof ctTokenInfoSchema>;
