<template>
	<div class="task-input">
		<label>Новая задача: <input type="text" v-model="title" placeholder="придумать задачу"></label>
		<button class="add" v-on:click="saveTitle">➕</button>
		<div class="errors">
			{{errorMessage}}
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			title: "",
			errorMessage: ""
		}
	},
	methods: {
		saveTitle: function() {
			this.errorMessage = "";
			if(this.title.length == 0) {
				this.errorMessage = "Название слишком короткое!";
				return;
			}
			if(this.title.length > 300) {
				this.errorMessage = "Название слишком длинное!";
				return;
			}
			this.$emit('new-task', this.title);
			this.title = "";
		}
	}
}
</script>

<style lang="scss">
	.errors {
		color: maroon;
	}
</style>

