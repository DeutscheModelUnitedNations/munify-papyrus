import { clientCreator } from "$api/rumble";
import { building, dev } from "$app/environment";

import "./user";
import "./auth";

if (dev || building) {
  clientCreator({
    outputPath: "src/lib/api/rumbleClient",
    apiUrl: "/api/graphql",
    useExternalUrqlClient: "../customClient",
    removeExisting: false,
  });
}
