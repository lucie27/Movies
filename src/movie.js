import  React, {Component} from 'react'

import cssobj from './css/movie.css'

//在class中如果想要使用外界传递过来的props参数，直接通过this.props.***访问即可


class Movie extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { movie } = this.props
        return (
                    <div class="carte">
                        <div class="movieTitle">
                            {movie.title}
                        </div>
                        <div className="movieCategory">
                            category: {movie.category}
                        </div>
                        <div className="movieRatio">
                            likes: {movie.likes}
                            <br/>
                            dislikes: {movie.dislikes}
                        </div>

                        <br/>
                    </div>


        )
    }
}

export default Movie;