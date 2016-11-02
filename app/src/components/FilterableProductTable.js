import React from 'react';
import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'

export default class FilterableProductTable extends React.Component{
	constructor(){
		super()
		this.state = {
			filter: null
		}
	}

	filterList(ev){
		let lFilter = ev.target.value
		
		setTimeout( () => {
			this.setState({
			filter: lFilter
			})
			
		}, 1000 )
	}

	render(){
		return(
			<div>
				{/*
				 la funcion bind(this) lo que hace es que una funcion
				 se quede dentro del componente (en este caso FilterableProductTable )
				 si no le agrego bind(this) la funcion de filtro se buscaria sobre
				 SearchBar y no sobre FilterableProductTable
				*/}
				<SearchBar onChange={this.filterList.bind(this)}/>
				<ProductTable products={this.props.store} filter={this.state.filter}/>
			</div>
		)
	} 
}