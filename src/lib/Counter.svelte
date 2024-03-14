<script lang="ts">
  // Svelte basic configs with supports image import by default
  import beetIcon from "$assets/beet.png";

  // To receive props in a component export the variable
  export let subjectSingular: string;
  export let subjectPlural: string;
  // To ts identify the prop as optional it should have a default value
  export let showImages = false;

  // In svelte codes you don't need to worry with Immutability like in other frameworks
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div class="p-4">
  <div class="flex gap-4 items-center">
    <button
      on:click={increment}
      class={"border border-solid text-blue-500 border-blue-500 bg-transparent p-2 rounded-md min-w-1"}
    >
      Plant a beet
    </button>
    <p>
      There
      {#if count === 1}
        is
      {:else}
        are
      {/if}
      {count}
      {count === 1 ? subjectSingular : subjectPlural}
    </p>
  </div>

  {#if count > 0 && showImages}
    <div class="flex gap-2 flex-wrap mt-4">
      {#each Array(count) as _, index (index)}
        <img src={beetIcon} alt="" class="w-10" />
      {/each}
    </div>
  {/if}
</div>
