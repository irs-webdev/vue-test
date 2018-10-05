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

<style>
	body {
		font-family: 'Segoe UI', Arial, sans-serif;
	}
	
	h1 {
		font-size: 25px;
	}
</style>

