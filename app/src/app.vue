<template>
	<h1>{{title}}</h1>
</template>

<script>
module.exports = {
	data: function() {
		return {
			title: "Список дел",
			tasks: []
		}
	}
}
</script>

<style lang="scss">
	$mainFont: 'Segoe UI', Arial, sans-serif;

	body {
		font-family: $mainFont;
	}

	h1 {
		font-size: 25px;
	}
</style>

