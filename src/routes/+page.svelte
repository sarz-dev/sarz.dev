<script>
	let constructionEmoji = '🏗️';
	let availableEmojis = ['🏗️', '👷🏻‍♂️', '😶‍🌫️', '🤖', '🦺', '🔨', '🔧', '🧱', '⏳', '🚩'];

	setInterval(() => {
		let randomIndex = Math.floor(Math.random() * availableEmojis.length);
		constructionEmoji = availableEmojis[randomIndex];
	}, 1000);
</script>

<main>
	<div class="construction-container">
		<h1>🚧 SITIO EN CONSTRUCCIÓN 🚧</h1>
		<p>Estamos trabajando en mejorar nuestro sitio. ¡Vuelve pronto!</p>
		<span>{constructionEmoji}</span>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.construction-container {
		text-align: center;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 1.5rem;
	}

	span {
		font-size: 7rem;
	}
</style>
