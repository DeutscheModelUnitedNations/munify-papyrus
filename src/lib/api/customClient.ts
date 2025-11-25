import { nativeDateExchange } from "@m1212e/rumble";
import { Client, fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import { configPublic } from "$lib/config/public";
import { schema } from "./rumbleClient/schema";

export const urqlClient = new Client({
  url: `${configPublic.PUBLIC_ORIGIN}/api/graphql`,
  fetchSubscriptions: true,
  exchanges: [cacheExchange({ schema }), nativeDateExchange, fetchExchange],
  fetchOptions: {
    credentials: "include",
  },
  requestPolicy: "cache-and-network",
});
