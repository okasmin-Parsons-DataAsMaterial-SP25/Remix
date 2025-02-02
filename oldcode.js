const adjectives = ["jolly", "stately"];
const nouns = [
	"snow",
	"flakes",
	"slippers",
	"town",
	"pencil",
	"rebels",
	"prig",
	"toes",
	"jig",
];
const punctuation = [
	".", // period
	",", // comma
	"–", // en dash
	"!", // exclamation mark
];

const appendVariation17 = () => {
	const verbs = [
		"counted",
		"danced",
		"leaped",
		"took",
		"note",
		"grew",
		"did",
		"resign",
		"are",
		"marshalled",
	];
	const verbSpans = lines
		.map((line) => {
			const words = line.split(" ");
			return words
				.map((word) => {
					if (verbs.includes(word.toLowerCase())) {
						return `<span class="verb">${word}</span>`;
					} else return word;
				})
				.join(" ");
		})
		.join("\n");
	const variation17Div = document.createElement("div");
	variation17Div.classList.add("variation17");
	variation17Div.innerHTML = `<pre>${verbSpans}</pre>`;

	poemDiv.append(variation17Div);
};

// .variation17 {
// 	line-height: 36px;
// 	& .verb {
// 		/* text-decoration: underline; */
// 		font-size: 30px;
// 		/* text-emphasis-style: dot; */
// 		/* text-emphasis-position: under right; */
// 	}
// }
