<script>
  export let data ;
</script>

<h1>Server Side Rendering Example</h1>
<ul>
  {#each data.posts as post}
    <li>{post.title}</li>
  {/each}
</ul>
