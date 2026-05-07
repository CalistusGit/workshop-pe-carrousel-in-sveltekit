<script>
    const { data } = $props();
    console.log(data)
    const characters = data.swCharacterData.results
    console.log(data.swCharacterData.results)
</script>

<main>
<h1>  star wars </h1>
<ul>
    {#each characters as character}
        <li>{character.name}</li>
    {/each}
</ul>

</main>

<style>
    ul{
        list-style: none;
        padding: 10px;
    }
    main{
        background-color: azure;
        border-color: darkblue;
        border: darkblue;
    }
    li{
        margin-bottom: 10px;
        color: black;
        background-color: orange;
    }
</style>