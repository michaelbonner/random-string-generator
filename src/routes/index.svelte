<script>
	import { page } from '$app/stores';

	function generateString(stringlength) {
		return Array.from(Array(Math.min(stringlength, 1024)), () =>
			Math.floor(Math.random() * 36).toString(36)
		).join('');
	}

	const initialStringLength = parseInt($page.url.searchParams.get('stringlength')) || 32;
	let stringlength = initialStringLength;
	let string = generateString(stringlength);
</script>

<h1 class="text-3xl font-bold underline">Random String Generator</h1>
<form class="mt-8">
	<label for="stringlength">String Length</label>
	<input
		type="number"
		id="stringlength"
		name="stringlength"
		bind:value={stringlength}
		on:keyup={() => (string = generateString(stringlength))}
		min="1"
		max="1024"
	/>
</form>
<button
	class="my-4 py-4 px-8 border-2 border-dashed bg-gray-50 max-w-lg break-all text-left"
	on:click={(e) => {
		if (window.getSelection) {
			const range = document.createRange();
			range.selectNode(e.currentTarget);
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(range);
		}
	}}
	type="button"
>
	{string}
</button>

<div>
	<button
		on:click={() => (string = generateString(stringlength))}
		type="button"
		class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	>
		Regenerate
	</button>
</div>

{#if stringlength > 1024}
	<p class="py-2 px-4 bg-red-200 border border-red-600 text-red-800 max-w-lg">
		Max string length is 1024, you provided a length of {stringlength}
	</p>
{/if}

<div class="prose bg-gray-50 mt-12 py-4 px-8 max-w-lg border border-gray-200">
	<p>
		Heads up:<br />
		You can use
		<a href="/?stringlength={stringlength}">?stringlength=<strong>{stringlength}</strong></a> in the
		URL to set the string length.
	</p>
</div>
