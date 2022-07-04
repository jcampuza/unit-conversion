<script lang="ts">
  const key = '$$s$$';
  const coefficient = 2.205;
  const values = JSON.parse(localStorage.getItem(key) ?? '{}');

  let kgs = values.kgs ?? 0;
  let lbs = values.lbs ?? 0;

  $: {
    localStorage.setItem(
      key,
      JSON.stringify({
        kgs: Number(kgs),
        lbs: Number(lbs),
      })
    );
  }

  function fix(value: number) {
    return value.toFixed(2);
  }

  function handleKgsChange(event: Event) {
    kgs = Number((event.currentTarget as HTMLInputElement).value);
    lbs = fix(kgs * coefficient);
  }

  function handleLbsChange(event: Event) {
    lbs = Number((event.currentTarget as HTMLInputElement).value);
    kgs = fix(lbs / coefficient);
  }

  function kgPlus() {
    kgs = kgs + 1;
    lbs = fix(kgs * coefficient);
  }

  function kgMinus() {
    kgs = kgs - 1;
    lbs = fix(kgs * coefficient);
  }

  function lbsPlus() {
    lbs = lbs + 1;
    kgs = fix(lbs / coefficient);
  }

  function lbsMinus() {
    lbs = lbs - 1;
    kgs = fix(lbs / coefficient);
  }
</script>

<main>
  <ul>
    <li>
      <label class="field">
        <span>Kilograms</span>
        <input name="kgs" value={kgs} type="number" pattern="[0-9]*" on:input={handleKgsChange} />
      </label>
      <button on:click={kgPlus}>+</button>
      <button on:click={kgMinus}>-</button>
    </li>

    <li>
      <label class="field">
        <span>Pounds</span>
        <input name="lbs" value={lbs} type="number" pattern="[0-9]*" on:input={handleLbsChange} />
      </label>
      <button on:click={lbsPlus}>+</button>
      <button on:click={lbsMinus}>-</button>
    </li>
  </ul>
</main>

<style>
  :global(body, html) {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  main {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 60px;
    padding: 1rem;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li + li {
    margin-top: 2rem;
  }

  input {
    font-size: 16px;
    border-radius: 4px;
    padding: 0.75rem 0.5rem;
    border: 1px solid #2c3e50;
    font-family: inherit;
  }

  button {
    font-size: 16px;
    background-color: transparent;
    border: 1px solid #2c3e50;
    border-radius: 4px;
    width: 4rem;
    height: 2.5rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
</style>
