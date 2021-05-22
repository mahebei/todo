import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	//init state
<<<<<<< HEAD
	state = {
		todos: [
			{ id: '001', name: 'eat', done: true },
			{ id: '002', name: 'sleep', done: true },
			{ id: '003', name: 'coding', done: false },
			{ id: '004', name: 'shopping', done: false },
		],
	}

	//add a todo item，param is a todo obj
	addTodo = todoObj => {
		//get old todos
		const { todos } = this.state
		//append todo
		const newTodos = [todoObj, ...todos]
		//update state
		this.setState({ todos: newTodos })
	}

	//update a todo obj
	updateTodo = (id, done) => {
		const { todos } = this.state
		const newTodos = todos.map(todoObj => {
			if (todoObj.id === id) return { ...todoObj, done }
=======
	state = {todos:[
		{id:'001',name:'eat',done:true},
		{id:'002',name:'sleep',done:true},
		{id:'003',name:'coding',done:false},
		{id:'004',name:'shopping',done:false}
	]}

	//add a todo item，param is a todo obj
	addTodo = (todoObj)=>{
		//get old todos
		const {todos} = this.state
		//append todo
		const newTodos = [todoObj,...todos]
		//update state
		this.setState({todos:newTodos})
	}

	//update a todo obj
	updateTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) return {...todoObj,done}
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
			else return todoObj
		})
		this.setState({ todos: newTodos })
	}

	//delete a todo obj
<<<<<<< HEAD
	deleteTodo = id => {
		const { todos } = this.state
		const newTodos = todos.filter(todoObj => {
			return todoObj.id !== id
		})
		this.setState({ todos: newTodos })
	}

	//check all todo items
	checkAllTodo = done => {
		const { todos } = this.state
		const newTodos = todos.map(todoObj => {
			return { ...todoObj, done }
		})
		this.setState({ todos: newTodos })
	}

	//clear all done items
	clearAllDone = () => {
		const { todos } = this.state
		const newTodos = todos.filter(todoObj => {
			return !todoObj.done
		})
		this.setState({ todos: newTodos })
=======
	deleteTodo = (id)=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		this.setState({todos:newTodos})
	}

	//check all todo items
	checkAllTodo = (done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}
		})
		this.setState({todos:newTodos})
	}

	//clear all done items
	clearAllDone = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		this.setState({todos:newTodos})
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
	}

	render() {
		const { todos } = this.state
		return (
			<div className='todo-container'>
				<div className='todo-wrap'>
					<Header addTodo={this.addTodo} />
					<List
						todos={todos}
						updateTodo={this.updateTodo}
						deleteTodo={this.deleteTodo}
					/>
					<Footer
						todos={todos}
						checkAllTodo={this.checkAllTodo}
						clearAllDone={this.clearAllDone}
					/>
				</div>
			</div>
		)
	}
}
