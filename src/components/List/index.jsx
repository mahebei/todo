import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
<<<<<<< HEAD
=======

>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
	//set limit for props
	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
	}

	render() {
		const { todos, updateTodo, deleteTodo } = this.props
		return (
			<ul className='todo-main'>
				{todos.map(todo => {
					return (
						<Item
							key={todo.id}
							{...todo}
							updateTodo={updateTodo}
							deleteTodo={deleteTodo}
						/>
					)
				})}
			</ul>
		)
	}
}
