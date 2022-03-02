<script>
	import { page } from '$app/stores';
	import { generateRandomString } from '../functions/generateRandomString';

	const initialStringLength = parseInt($page.url.searchParams.get('stringLength')) || 32;
	let stringLength = initialStringLength;
	let string = generateRandomString(stringLength);
</script>

<svelte:head>
	<title>Random String Generator</title>
</svelte:head>

<div class="grid gap-y-8">
	<h1 class="text-3xl font-bold underline">Random String Generator</h1>
	<form>
		<label for="stringlength">String Length</label>
		<input
			type="number"
			id="stringlength"
			name="stringlength"
			bind:value={stringLength}
			on:keyup={() => (string = generateRandomString(stringLength))}
			min="1"
			max="1024"
		/>
	</form>
	<div>
		<button
			class="font-mono my-4 py-4 px-8 border-2 border-dashed bg-gray-50 max-w-lg break-all text-left"
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
				on:click={() => (string = generateRandomString(stringLength))}
				type="button"
				class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Regenerate
			</button>
		</div>
	</div>

	{#if stringLength > 1024}
		<p class="py-2 px-4 bg-red-200 border border-red-600 text-red-800 max-w-lg">
			Max string length is 1024, you provided a length of {stringLength}
		</p>
	{/if}

	<div class="prose bg-gray-50 py-4 px-8 max-w-lg border border-gray-200">
		<p>
			Heads up:<br />
			You can use
			<a href="/?stringLength={stringLength}">?stringLength=<strong>{stringLength}</strong></a> in the
			URL to set the string length.
		</p>
		<p>
			You can also link directly to a random string:
			<a href="/{stringLength}"><strong>/{stringLength}</strong></a>.
		</p>
	</div>
</div>
