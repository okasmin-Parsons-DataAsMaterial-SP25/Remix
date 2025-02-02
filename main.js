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
 * Rule 2 - condense as descend
 */

/**
 * Variation 5 - increase lineHeight as descend
 */
const appendVariation5 = () => {
	const lineHeights = lines
		.map((line, idx) => {
			const lineHeight = (lines.length - idx) * 1.1 + 0.5;
			return `<span style="font-size:16px; line-height:${lineHeight}em;">${line}</span>`;
		})
		.join("\n");

	const variation5Div = document.createElement("div");
	variation5Div.innerHTML = `<pre>${lineHeights}</pre>`;

	poemDiv.append(variation5Div);
};

// font size
const appendVariation6 = () => {
	const fontSizes = lines
		.map((line, idx) => {
			const fontSize = (lines.length - idx) * 2.5 + 20;
			return `<div style="font-size:${fontSize}px; ">${line}</div>`;
		})
		.join("\n");

	const variation6Div = document.createElement("div");
	variation6Div.innerHTML = `<pre>${fontSizes}</pre>`;

	poemDiv.append(variation6Div);
};

// letter spacing
const appendVariation7 = () => {
	const letterSpaces = lines
		.map((line, idx) => {
			const letterSpacing = (lines.length - idx) * 2.5;
			return `<span style="letter-spacing:${letterSpacing}px;">${line}</span>`;
		})
		.join("\n");

	const variation7Div = document.createElement("div");
	variation7Div.classList.add("variation7");
	variation7Div.innerHTML = `<pre>${letterSpaces}</pre>`;

	poemDiv.append(variation7Div);
};

const variation8 = () => {
	const variation8Div = document.createElement("div");
	lines.forEach((line, idx) => {
		const lineDiv = document.createElement("div");
		lineDiv.innerText = line;
		lineDiv.style.fontWeight = 100 * idx + 100;
		variation8Div.append(lineDiv);
	});
	poemDiv.append(variation8Div);
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

/** Snow */

// large snowflake
const snow1 = () => {
	const snow1Div = document.createElement("div");
	const angleIncrement = 360 / lines.length;

	lines.forEach((line, idx) => {
		const angle = idx * angleIncrement;
		const lineDiv = document.createElement("div");
		lineDiv.classList.add("snow1Line");
		lineDiv.innerText = line;

		const distanceFromCenter = 60; // Adjust to spread lines further out
		lineDiv.style.transformOrigin = "left center";

		lineDiv.style.transform = `rotate(${angle}deg) translateX(${distanceFromCenter}px)`;
		snow1Div.append(lineDiv);
	});

	poemDiv.append(snow1Div);
};

// line snowflakes
const snow2 = () => {
	const snow2Div = document.createElement("div");
	snow2Div.classList.add("snow2");

	lines.forEach((line) => {
		const lineDiv = document.createElement("div");

		const words = line.split(" ");
		const angleIncrement = 360 / words.length;

		words.forEach((word, idx) => {
			const angle = idx * angleIncrement;
			const wordDiv = document.createElement("div");
			wordDiv.classList.add("snow2Word");
			wordDiv.innerText = word;
			const distanceFromCenter = 40;
			wordDiv.style.transformOrigin = "left center";
			wordDiv.style.transform = `rotate(${angle}deg) translateX(${distanceFromCenter}px)`;
			lineDiv.append(wordDiv);
		});

		snow2Div.append(lineDiv);
	});
	poemDiv.append(snow2Div);
};

// large snowflake with decoration
const snow3 = () => {
	const snow3Div = document.createElement("div");
	const angleIncrement = 360 / lines.length;

	lines.forEach((line, idx) => {
		const angle = idx * angleIncrement;
		const lineDiv = document.createElement("div");
		lineDiv.classList.add("snow1Line");
		lineDiv.classList.add("snow3Line");
		lineDiv.innerText = line;

		const distanceFromCenter = 60; // Adjust to spread lines further out
		lineDiv.style.transformOrigin = "left center";

		lineDiv.style.transform = `rotate(${angle}deg) translateX(${distanceFromCenter}px)`;
		snow3Div.append(lineDiv);
	});

	poemDiv.append(snow3Div);
};

// line snowflakes with decoration
const snow4 = () => {
	const emphasis = [
		"sesame",
		"dot open",
		"triangle",
		"circle",
		"double-circle",
		"sesame open",
		"dot",
		"triangle open",
		"double-circle open",
	];

	const snow4Div = document.createElement("div");
	snow4Div.classList.add("snow2");

	lines.forEach((line, idx) => {
		const lineDiv = document.createElement("div");
		lineDiv.classList.add("snow4Line");
		lineDiv.style.textEmphasisStyle = `${emphasis[idx]}`;

		const words = line.split(" ");
		const angleIncrement = 360 / words.length;

		words.forEach((word, idx) => {
			const angle = idx * angleIncrement;
			const wordDiv = document.createElement("div");
			wordDiv.classList.add("snow2Word");
			wordDiv.innerText = word;
			const distanceFromCenter = 40;
			wordDiv.style.transformOrigin = "left center";
			wordDiv.style.transform = `rotate(${angle}deg) translateX(${distanceFromCenter}px)`;
			lineDiv.append(wordDiv);
		});

		snow4Div.append(lineDiv);
	});
	poemDiv.append(snow4Div);
};

// normal align left
const decreaseLineHeight1 = () => {
	const lineHeights = lines
		.map((line, idx) => {
			const lineHeight = (lines.length - idx) * 1.1 + 0.5;
			return `<span style="font-size:16px; line-height:${lineHeight}em;">${line}</span>`;
		})
		.join("\n");

	const decreaseLineHeight1 = document.createElement("div");
	decreaseLineHeight1.innerHTML = `<pre>${lineHeights}</pre>`;

	poemDiv.append(decreaseLineHeight1);
};

// align center
const decreaseLineHeight2 = () => {
	const lineHeights = lines
		.map((line, idx) => {
			const lineHeight = (lines.length - idx) * 1.1 + 0.5;
			return `<span style="font-size:16px; line-height:${lineHeight}em;">${line}</span>`;
		})
		.join("\n");

	const decreaseLineHeight1 = document.createElement("div");
	decreaseLineHeight1.innerHTML = `<pre style="text-align: center;">${lineHeights}</pre>`;

	poemDiv.append(decreaseLineHeight1);
};

// stagger from left
const decreaseLineHeight3 = () => {
	const lineHeights = lines
		.map((line, idx) => {
			const lineHeight = (lines.length - idx) * 1.1 + 0.5;
			return `<span style="font-size:16px; line-height:${lineHeight}em; margin-left:${
				idx * 40
			}px">${line}</span>`;
		})
		.join("\n");

	const decreaseLineHeight1 = document.createElement("div");
	decreaseLineHeight1.innerHTML = `<pre>${lineHeights}</pre>`;

	poemDiv.append(decreaseLineHeight1);
};

// stagger from right
const decreaseLineHeight4 = () => {
	const lineHeights = lines
		.map((line, idx) => {
			const lineHeight = (lines.length - idx) * 1.1 + 0.5;
			return `<span style="font-size:16px; line-height:${lineHeight}em; margin-left:${
				320 - idx * 40
			}px">${line}</span>`;
		})
		.join("\n");

	const decreaseLineHeight1 = document.createElement("div");
	decreaseLineHeight1.innerHTML = `<pre>${lineHeights}</pre>`;

	poemDiv.append(decreaseLineHeight1);
};

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
		case 8:
			variation8();
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
		case snow1:
			snow1();
			break;
		case snow2:
			snow2();
			break;
		case snow3:
			snow3();
			break;
		case snow4:
			snow4();
			break;
		case decreaseLineHeight1:
			decreaseLineHeight1();
			break;
		case decreaseLineHeight2:
			decreaseLineHeight2();
			break;
		case decreaseLineHeight3:
			decreaseLineHeight3();
			break;
		case decreaseLineHeight4:
			decreaseLineHeight4();
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
