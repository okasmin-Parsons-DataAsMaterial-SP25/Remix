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

const spanAllWords = lines
	.map((line) => {
		const words = line.split(" ");
		return words
			.map((word) => {
				return `<span class="word">${word}</span>`;
			})
			.join(" ");
	})
	.join("\n");

/*
 * Rule 1 - Diagonal - sense of movement and playful
 */

/*
 * Diagonal 3 - first and last words
 */
const diagonal3 = () => {
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

	const diagonal3Div = document.createElement("div");
	diagonal3Div.classList.add("diagonal3");
	diagonal3Div.innerHTML = `<pre>${firstLastWordsSpan}</pre>`;

	poemDiv.append(diagonal3Div);
};

//  last words diagonal
const diagonal4 = () => {
	const firstWordsSpan = lines
		.map((line) => {
			const words = line.split(" ");
			if (words.length > 0) {
				words[words.length - 1] = `<span>${words[words.length - 1]}</span>`;
			}
			return words.join(" ");
		})
		.join("\n");

	const diagonal4Div = document.createElement("div");
	diagonal4Div.classList.add("diagonal4");
	diagonal4Div.innerHTML = `<pre>${firstWordsSpan}</pre>`;

	poemDiv.append(diagonal4Div);
};

// every other line diagonal alternating
const diagonal1 = () => {
	const everyOtherLine = lines
		.map((line, idx) => {
			if (idx % 2 === 0) {
				return `<span class="even">${line}</span>`;
			} else {
				return `<span class="odd">${line}</span>`;
			}
		})
		.join("\n");

	const diagonal1Div = document.createElement("div");
	diagonal1Div.classList.add("diagonal1");
	diagonal1Div.innerHTML = `<pre>${everyOtherLine}</pre>`;

	poemDiv.append(diagonal1Div);
};

/*
 * diagonal 2 - every other word
 */
const diagonal2 = () => {
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

	const diagonal2Div = document.createElement("div");
	diagonal2Div.classList.add("diagonal2");
	diagonal2Div.innerHTML = `<pre>${evenWordsSpan}</pre>`;

	poemDiv.append(diagonal2Div);
};

/**
 * Rule 2 - increase as descend
 */

/**
 * Variation 5 - increase lineHeight as descend
 */
const appendVariation5 = () => {
	const lineHeights = lines
		.map((line, idx) => {
			const lineHeight = idx * 1.1 + 2;
			return `<span style="font-size:16px; line-height:${lineHeight}em;">${line}</span>`;
		})
		.join("\n");

	const variation5Div = document.createElement("div");
	variation5Div.innerHTML = `<pre>${lineHeights}</pre>`;

	poemDiv.append(variation5Div);
};

const appendVariation6 = () => {
	const fontSizes = lines
		.map((line, idx) => {
			const fontSize = idx * 2.5 + 20;
			return `<span style="font-size:${fontSize}px; ">${line}</span>`;
		})
		.join("\n");

	const variation6Div = document.createElement("div");
	variation6Div.innerHTML = `<pre>${fontSizes}</pre>`;

	poemDiv.append(variation6Div);
};

const appendVariation7 = () => {
	const letterSpaces = lines
		.map((line, idx) => {
			const letterSpacing = idx * 1.15 + 0.1;
			console.log({ letterSpacing });
			return `<span style="letter-spacing:${letterSpacing}px;">${line}</span>`;
		})
		.join("\n");

	const variation7Div = document.createElement("div");
	variation7Div.classList.add("variation7");
	variation7Div.innerHTML = `<pre>${letterSpaces}</pre>`;

	poemDiv.append(variation7Div);
};

/**
 * Vertical
 */

// words vertical
const vertical1 = () => {
	const vertical1Div = document.createElement("div");
	vertical1Div.classList.add("vertical1");
	vertical1Div.innerHTML = `<pre>${spanAllWords}</pre>`;

	poemDiv.append(vertical1Div);
};

// entire poem rotated 90 degrees - line ends aligned
const vertical2 = () => {
	const vertical2Div = document.createElement("div");
	vertical2Div.classList.add("vertical2");
	vertical2Div.innerHTML = `<pre>${poem}</pre>`;

	poemDiv.append(vertical2Div);
};

// entire poem rotated 90 degrees - line starts aligned
const vertical3 = () => {
	const vertical3Div = document.createElement("div");
	vertical3Div.classList.add("vertical3");
	vertical3Div.innerHTML = `<pre>${poem}</pre>`;

	poemDiv.append(vertical3Div);
};

// each line becomes a column
const vertical4 = () => {
	const vertical4Div = document.createElement("div");

	lines.forEach((line) => {
		const lineDiv = document.createElement("div");
		lineDiv.classList.add("vertical4Line");
		const letters = line.split("");
		letters.forEach((letter) => {
			const letterSpan = document.createElement("span");
			letterSpan.innerText = letter;
			lineDiv.append(letterSpan);
		});
		vertical4Div.append(lineDiv);
	});

	vertical4Div.classList.add("vertical4");
	poemDiv.append(vertical4Div);
};

/**
 * other rule ideas
 * line spacing (increasing and go down, and opposite)
 * hover?
 * increase as go down - line spacing, dots on increasingly more words, text size, etc
 */

/**
 * Set the correct variation based on the navigation
 */
const changeVariation = (variationNum) => {
	// variationTitle.innerText = `Variation ${variationNum}`;
	poemDiv.replaceChildren();
	switch (variationNum) {
		case diagonal3:
			diagonal3();
			break;
		case diagonal4:
			diagonal4();
			break;
		case diagonal1:
			diagonal1();
			break;
		case diagonal2:
			diagonal2();
			break;
		case 5:
			appendVariation5();
			break;
		case 6:
			appendVariation6();
			break;
		case 7:
			appendVariation7();
			break;
		case vertical1:
			vertical1();
			break;
		case vertical2:
			vertical2();
			break;
		case vertical3:
			vertical3();
			break;
		case vertical4:
			vertical4();
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
