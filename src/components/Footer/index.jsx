import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
<<<<<<< HEAD
	//callback of check all checkbox
	handleCheckAll = event => {
=======

	//callback of check all checkbox
	handleCheckAll = (event)=>{
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
		this.props.checkAllTodo(event.target.checked)
	}

	//callback of clear done item
<<<<<<< HEAD
	handleClearAllDone = () => {
=======
	handleClearAllDone = ()=>{
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
		this.props.clearAllDone()
	}

	render() {
<<<<<<< HEAD
		const { todos } = this.props
		const doneCount = todos.reduce(
			(pre, todo) => pre + (todo.done ? 1 : 0),
			0
		)
=======
		const {todos} = this.props
		const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
		const total = todos.length
		return (
			<div className='todo-footer'>
				<label>
					<input
						type='checkbox'
						onChange={this.handleCheckAll}
						checked={
							doneCount === total && total !== 0 ? true : false
						}
					/>
				</label>
				<span>
					<span>Done{doneCount}</span> / All{total}
				</span>
<<<<<<< HEAD
				<button
					onClick={this.handleClearAllDone}
					className='btn btn-danger'>
					Clear Done Items
				</button>
=======
				<button onClick={this.handleClearAllDone} className="btn btn-danger">Clear Done Items</button>
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
			</div>
		)
	}
}
