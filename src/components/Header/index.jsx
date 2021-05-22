import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

	//set limit of props
	static propTypes = {
		addTodo:PropTypes.func.isRequired
	}

	//callback of keyboard event
	handleKeyUp = (event)=>{
		const {keyCode,target} = event
		//check if it is ENTER
		if(keyCode !== 13) return
		if(target.value.trim() === ''){
			alert('Item cannot be empty')
			return
		}
		const todoObj = {id:nanoid(),name:target.value,done:false}
		this.props.addTodo(todoObj)
		target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="Please input content, then press ENTER to add"/>
			</div>
		)
	}
}
