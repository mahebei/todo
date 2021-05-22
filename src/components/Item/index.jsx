import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	state = { mouse: false } //mouse in / out

<<<<<<< HEAD
	//callback of mouse in / out
	handleMouse = flag => {
		return () => {
			this.setState({ mouse: flag })
=======
	state = {mouse:false} //mouse in / out

	//callback of mouse in / out
	handleMouse = (flag)=>{
		return ()=>{
			this.setState({mouse:flag})
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
		}
	}

	//callback of check / uncheck
<<<<<<< HEAD
	handleCheck = id => {
		return event => {
			this.props.updateTodo(id, event.target.checked)
=======
	handleCheck = (id)=>{
		return (event)=>{
			this.props.updateTodo(id,event.target.checked)
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
		}
	}

	//callback of del an item
<<<<<<< HEAD
	handleDelete = id => {
		if (window.confirm('Are you sure to delete it?')) {
=======
	handleDelete = (id)=>{
		if(window.confirm('Are you sure to delete it?')){
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
			this.props.deleteTodo(id)
		}
	}

	render() {
		const { id, name, done } = this.props
		const { mouse } = this.state
		return (
			<li
				style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
				onMouseEnter={this.handleMouse(true)}
				onMouseLeave={this.handleMouse(false)}>
				<label>
					<input
						type='checkbox'
						checked={done}
						onChange={this.handleCheck(id)}
					/>
					<span>{name}</span>
				</label>
<<<<<<< HEAD
				<button
					onClick={() => this.handleDelete(id)}
					className='btn btn-danger'
					style={{ display: mouse ? 'block' : 'none' }}>
					Delete
				</button>
=======
				<button onClick={()=> this.handleDelete(id) } className="btn btn-danger" style={{display:mouse?'block':'none'}}>Delete</button>
>>>>>>> 768d972161b43e65d4d7145aae72c7cb9ab9c682
			</li>
		)
	}
}
