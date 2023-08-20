<script>
	import { page } from '$app/stores';
</script>

<main>
	<div class="error-container">
		<h1>Oops, algo se rompió 😥</h1>
		<p>{$page.error.message}</p>
		<a href="/">Volver a la página de inicio</a>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.error-container {
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

	a {
		color: #007bff;
		text-decoration: none;
		font-weight: bold;
		transition: color 0.2s;
	}

	a:hover {
		color: #0056b3;
	}
</style>
