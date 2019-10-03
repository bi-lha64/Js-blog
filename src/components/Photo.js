import React from 'react'


class Photo extends React.Component{
    render(){
        return( 
        <div>
            <a href={this.props.photo.url} className="landscape">
            <img src={this.props.photo.url}alt="" /></a>
											
        </div>
        )
    }
        
    
}
export default Photo