import React from 'react';

export default class SearchBar extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<input onChange={this.props.onChange} type="text"/>
				<br/>
				<input type="checkbox"/>
			</div>
		)
	}
}