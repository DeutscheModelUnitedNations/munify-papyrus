<script lang="ts">
  import { client } from "$lib/api/rumbleClient/client";

  const res = await client.query.me({
    email: true,
    family_name: true,
    given_name: true,
    locale: true,
    phone: true,
    preferred_username: true,
    sub: true,
  });
  console.log(res);
</script>

{JSON.stringify(res, null, 2)}
