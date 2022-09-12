<script>
	import { page } from '$app/stores';
	import { classNames } from '../functions/classNames';
	import { generateRandomString } from '../functions/generateRandomString';

	const initialStringLength = parseInt($page.url.searchParams.get('stringLength')) || 32;
	let stringLength = initialStringLength;
	let string = generateRandomString(stringLength);
</script>

<svelte:head>
	<title>Random String Generator</title>
</svelte:head>

<div class="grid gap-y-8 prose dark:prose-invert max-w-xl dark:text-gray-100">
	<h1 class="dark:text-gray-100">Random String Generator</h1>
	<form action="/" class="flex gap-x-4 items-center" method="GET">
		<label for="stringLength">String Length</label>
		<input
			class="dark:bg-transparent dark:border-gray-600"
			type="number"
			id="stringLength"
			name="stringLength"
			bind:value={stringLength}
			on:keyup={() => (string = generateRandomString(stringLength))}
			min="1"
			max="1024"
		/>
	</form>
	<div>
		<button
			class={classNames(
				`font-mono my-4 py-4 px-8 border-2 border-dashed bg-gray-50 break-all text-left`,
				`dark:border-gray-600 dark:bg-gray-800`
			)}
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
		<p class="py-2 px-4 bg-red-200 border border-red-600 text-red-800">
			Max string length is 1024, you provided a length of {stringLength}
		</p>
	{/if}

	<div
		class={classNames(
			`bg-gray-50 py-4 px-8 border border-gray-200`,
			`dark:bg-gray-900 dark:border-gray-600`
		)}
	>
		<p>
			Heads up:<br />
			You can use
			<a href="/?stringLength={stringLength}">?stringLength=<strong>{stringLength}</strong></a> in the
			URL to set the string length.
		</p>
		<p>
			You can also link directly to a random string:
			<a rel="external" href="/{stringLength}"><strong>/{stringLength}</strong></a>.
		</p>
	</div>

	<div class="flex gap-8">
		<p>
			<a
				class="flex gap-x-2 items-center hover:text-indigo-700 transition-all"
				href="https://github.com/michaelbonner/random-string-generator"
			>
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 1024 1024"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
					/>
				</svg>
				<span>Source code</span>
			</a>
		</p>
		<p>
			<a
				class="flex gap-x-2 items-center hover:text-indigo-700 transition-all"
				href="https://michaelbonner.dev?utm_source=random-string-generator"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Michael Bonner</span>
			</a>
		</p>
	</div>
</div>
