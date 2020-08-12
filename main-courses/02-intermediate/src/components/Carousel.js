import React from 'react'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photos: [],
            active: 0
        }

        this.handleIndexClick = this.handleIndexClick.bind(this)
    }

    // This is a lifecycle function. This method is invoked right before the render method.
    static getDerivedStateFromProps({ media }) {
        let photos = ['http://placecorgi.com/600/600']

        if (media.length) {
            photos = media.map(({ large }) => large)
        }

        return { photos }
    }

    // This is how you handle events in React class components. 
    // If it was keyboard handler, you'd do an onChange or onKeyUp, etc. handler.
    handleIndexClick(event) {
        this.setState({
            // The data attribute comes back as a string. 
            // We want it to be a number, hence the +.
            active: +event.target.dataset.index
        })
    }

    render() {
        const { photos, active } = this.state

        return (
            <div className='carousel'>
                <img src={photos[active]} alt='animal' />
                <div className='carousel-smaller'>
                    {photos.map((photo, index) => (
                        // WARNING: This is not a good approach because it's bad for accessibility.
                        <img
                            key={photo}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo}
                            className={index === active ? 'active' : ''}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel