// https://www.poetryfoundation.org/poems/49358/snow-flakes-45
const poem = `Snow flakes.
I counted till they danced so
Their slippers leaped the town –
And then I took a pencil
To note the rebels down –
And then they grew so jolly
I did resign the prig –
And ten of my once stately toes
Are marshalled for a jig!`;

const noStyling = `<pre>${poem}</pre>`;

const poemDiv = document.getElementById("poem");

// initialize with no styling
poemDiv.innerHTML = noStyling;

const variationTitle = document.getElementById("variation-title");

const lines = poem.split("\n");

/*
 * Rule 1 - Rotation
 */

/*
 * Variation 1 - first and last words
 */
const appendVariation1 = () => {
	const firstLastWordsSpan = lines
		.map((line, idx) => {
			const words = line.split(" ");
			if (idx === 0 && words.length > 0) {
				words[0] = `<span class="first">${words[0]}</span>`;
			} else if (idx === lines.length - 1) {
				words[words.length - 1] = `<span class="last">${
					words[words.length - 1]
				}</span>`;
			}
			return words.join(" ");
		})
		.join("\n");

	const variation1Div = document.createElement("div");
	variation1Div.classList.add("variation1");
	variation1Div.innerHTML = `<pre>${firstLastWordsSpan}</pre>`;

	poemDiv.append(variation1Div);
};

/*
 * Variation 2 - last words
 */
const appendVariation2 = () => {
	const firstWordsSpan = lines
		.map((line) => {
			const words = line.split(" ");
			if (words.length > 0) {
				words[words.length - 1] = `<span>${words[words.length - 1]}</span>`;
			}
			return words.join(" ");
		})
		.join("\n");

	const variation2Div = document.createElement("div");
	variation2Div.classList.add("variation2");
	variation2Div.innerHTML = `<pre>${firstWordsSpan}</pre>`;

	poemDiv.append(variation2Div);
};

/*
 * Variation 3 - every other line
 */
const appendVariation3 = () => {
	const everyOtherLine = lines
		.map((line, idx) => {
			if (idx % 2 === 0) {
				return `<span class="even">${line}</span>`;
			} else {
				return `<span class="odd">${line}</span>`;
			}
		})
		.join("\n");

	const variation3Div = document.createElement("div");
	variation3Div.classList.add("variation3");
	variation3Div.innerHTML = `<pre>${everyOtherLine}</pre>`;

	poemDiv.append(variation3Div);
};

/*
 * Variation 4 - every other word
 */
const appendVariation4 = () => {
	const lines = poem.split("\n");
	const evenWordsSpan = lines
		.map((line) => {
			const words = line.split(" ");
			return words
				.map((word, index) => {
					if (index % 2 === 1) {
						return `<span class="even">${word}</span>`;
					}
					return `<span class="odd">${word}</span>`;
				})
				.join(" ");
		})
		.join("\n");

	const variation4Div = document.createElement("div");
	variation4Div.classList.add("variation4");
	variation4Div.innerHTML = `<pre>${evenWordsSpan}</pre>`;

	poemDiv.append(variation4Div);
};

/*
 * Rule 2 - grammar
 */

/**
 * Set the correct variation based on the navigation
 */
const changeVariation = (variationNum) => {
	variationTitle.innerText = `Variation ${variationNum}`;
	poemDiv.replaceChildren();
	switch (variationNum) {
		case 1:
			appendVariation1();
			break;
		case 2:
			appendVariation2();
			break;
		case 3:
			appendVariation3();
			break;
		case 4:
			appendVariation4();
			break;
		case 0:
			poemDiv.innerHTML = noStyling;
			variationTitle.innerText = ``;
			break;
		default:
			poemDiv.innerHTML = noStyling;
			variationTitle.innerText = ``;
			break;
	}
};
