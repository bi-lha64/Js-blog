import React from 'react'
import Photo from './Photo'

class Gallery extends React.Component{
    constructor(props){
        super(props)
    this.state={
        photos:[]
    }
    }


componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
        .then(response =>{
            this.setState({
                photos:response.slice(0,5)
            })
        })
}
    render(){
        return (
            <section>
									<header>
										<h3>Nisl consequat</h3>
										<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam sed facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna finibus nisi nec lacinia ipsum maximus.</p>
									</header>
									<div class="content">
										<div class="gallery">
											{
                                                this.state.photos.map(photo => {
                                                    return <Photo key={photo.id} photo={photo}/>
                                                })
                                            }
										</div>
									</div>
								</section>
        )

    }
        
    
}
export default Gallery