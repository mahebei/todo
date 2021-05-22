import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	//callback of check all checkbox
	handleCheckAll = (event)=>{
		this.props.checkAllTodo(event.target.checked)
	}

	//callback of clear done item
	handleClearAllDone = ()=>{
		this.props.clearAllDone()
	}

	render() {
		const {todos} = this.props
		const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
				</label>
				<span>
					<span>Done{doneCount}</span> / All{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">Clear Done Items</button>
			</div>
		)
	}
}
