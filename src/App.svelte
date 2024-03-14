<script lang="ts">
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <Counter subjectPlural="beets" subjectSingular="beet" />
</main>

<style>
  /** Here the CSS is like a css module, it is applied just in this component, even the child components are ignored by this styles */

  /* 
    The svelte's vsCode extension shows when styles are not used, uncomment the code bellow to see
  */

  /*
  button {
    background-color: red;
  } 
  */
</style>
