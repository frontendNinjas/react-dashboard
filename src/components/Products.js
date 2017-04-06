import React from 'react'
import {Link} from 'react-router'


class Products extends React.Component{
	render(){
		return(
			<div>
				<ul>
					<li>
						<Link to="/products/mobile">Mobile</Link>						
					</li>
					<li>
						<Link to="/products/camera">camera</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Products;