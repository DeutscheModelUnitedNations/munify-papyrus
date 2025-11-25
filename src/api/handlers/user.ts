import {
  abilityBuilder,
  countQuery,
  object,
  pubsub,
  query,
  schemaBuilder,
} from "$api/rumble";

abilityBuilder.user.allow("read")
// TODO
//   .when(({ oidc }) => {
//   if (oidc?.user) {
//     return {
//       where: { id: oidc.user.sub },
//     };
//   }
// });

// abilityBuilder.user.allow("read").when(({ mustBeLoggedIn }) => {
//   const user = mustBeLoggedIn();
//   // TODO
//   if (user?.email) {
//     return "allow";
//   }
// });

const _ref = object({ table: "user" });
query({ table: "user" });
countQuery({
  table: "user",
});
const userPubsub = pubsub({ table: "user" });

schemaBuilder.mutationFields((t) => {
  return {
    dummy: t.field({
      type: "String",
      resolve: async (_root, args, ctx) => {
        userPubsub.created()
        return "dummy";
      },
    }),
  };
});
