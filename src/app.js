import  React, {Component} from 'react'
import Movie from './movie';
import cssobj from './css/app.css'
import {movies$} from './movies'
import Delete from "./component/delete/delete";
import Like from "./component/like/like";
import Dislike from "./component/dislike/dislike";

class App extends Component{

    constructor (props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentWillMount() {
        const _this = this
        movies$.then((data)=>{
            _this.setState({
                movies: data
            })
        })
    }

    handleDelete(position) {
        return () => {
            let { movies } = this.state;
            movies.splice(position, 1);
            this.setState({movies: movies});
        }
    }

    handleAdd(position){
        return () => {
            let { movies } = this.state;
            this.state.movies[position].likes = this.state.movies[position].likes + 1
            this.setState({movies: movies});
            console.log(movies[position])
        }
    }

    handleSub(position){
        return () => {
            let { movies } = this.state;
            this.state.movies[position].dislikes = this.state.movies[position].dislikes + 1
            this.setState({movies: movies});
            console.log(movies[position])
        }
    }

    handleFiltre(position){

        return () => {
            let {movies} = this.state;
            var category = movies[position].category
            var j = movies.length
            var i = 0
            for(i=0;i<j;i++){
                if(movies[i].category!==category){
                    movies.splice(i, 1);
                }
            }
            this.setState({movies: movies});
        }
    }


    render(){
        const {movies} = this.state
        const list = this.state.movies.map ((movie, idx) => {
            return <div className='carte'>
                <span>
                <Movie movie={movie}/>
            </span>
                <button onClick={this.handleDelete(idx)}>
                    <Delete />
                </button>
                <button onClick={this.handleAdd(idx)}>
                    <Like/>
                </button>
                <button onClick={this.handleSub(idx)}>
                    <Dislike/>
                </button>
            </div>
        });
        const filter = this.state.movies.map ((movie, idx) => {
            return <div>
                {movie.category}: <input type="checkbox" onChange={this.handleFiltre(idx)}/>
                </div>
        });
        if(movies){
            return(
                <div className="container">
                    <div className="wrapper">
                        <div className="heading">
                            <div className="heading_nav">
                                <div className="heading_title">
                                    MOVIES
                                </div>
                                <p>
                                    {filter}
                                </p>
                                <div className="heading_soptlight">
                                    <form>
                                        <input type="text"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            {list}
                        </div>

                    </div>
                    <div className="footing">
                        @jiawen.lyu@etu.utc.fr
                    </div>
                </div>
            )
        }
        }
}


export default App