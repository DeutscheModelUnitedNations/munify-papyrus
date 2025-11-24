<script lang="ts">
import { authenticatedUserPromise } from "$lib/api/auth.svelte";
import {
  type ConferenceusertypeEnum,
  client,
} from "$lib/api/rumbleClient/client";
import Footer from "$lib/components/Footer.svelte";
import { m } from "$lib/paraglide/messages";

const authenticatedUser = await authenticatedUserPromise();
</script>

<svelte:head>
  <title>{m.launcher()} - MUNify PAPYRUS</title>
</svelte:head>

<div class="navbar bg-base-100 relative shadow-sm">
  <div class="flex-none">
    <a class="btn btn-ghost" href="/logout">
      <i class="fa-duotone fa-arrow-left mr-2"></i>
      {m.logout()}
    </a>
  </div>
  <div class="flex-1"></div>
</div>

<div class="bg-base-200 h-full w-full">
  <div class="flex h-full flex-col items-center gap-10 p-10">
    <div class="flex flex-col items-center">
      <i class="fa-duotone fa-podium mb-4 text-7xl"></i>
      <h3 class="text-center text-2xl">MUNify</h3>
      <h3 class="text-center text-5xl font-bold">PAPYRUS</h3>
      <p class="mt-4 text-center text-lg">
        {m.launcherWelcome({ name: authenticatedUser!.given_name! })}
      </p>
    </div>
  </div>

  <Footer />
</div>
