<template>
	<div class="todo">
		<h1>{{title}}</h1>
		<label>Новая задача: <input type="text" v-model="newTask"></label> <button v-on:click="addTask()">Добавить</button>
		<ul class="task-list">
			<li v-for="(task, index) in tasks" v-bind:class="{ done: task.done }">
				{{task.title}} 
				<button v-if="!task.done" class="task-complete" v-on:click="completeTask(task)">✔</button>
				<button v-if="task.done" class="task-delete" v-on:click="removeTask(index)">✘</button>
			</li>
		</ul>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			title: "Список дел",
			tasks: [
				{
					title: "Замесить тесто",
					done: true
				},
				{
					title: "Испечь пирог",
					done: false
				}
			],
			newTask: ""
		}
	},
	methods: {
		completeTask: function(task) {
			task.done = true;
		},
		removeTask: function(i) {
			this.tasks.splice(i, 1);
		},
		addTask: function() {
			this.tasks.push({
				title: this.newTask,
				done: false
			});
			this.newTask = "";
		}
	}
}
</script>

<style lang="scss">
	$mainFont: 'Segoe UI', Arial, sans-serif;

	.todo {
		font-family: $mainFont;
	}

	h1 {
		font-size: 25px;
	}

	.task-list {
		li.done {
			color: #777;
			text-decoration: line-through;
		}

		button {
			border-radius: 5px;
			text-align: center;
			border: none;
			background: #454545;
			color: white;
		}

		.task-complete {
			background: green;
		}

		.task-delete {
			background: maroon;
		}
	}
</style>

