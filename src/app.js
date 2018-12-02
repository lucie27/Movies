import  React, {Component} from 'react'
import Movie from './movie';
import cssobj from './css/app.css'
import {movies$} from './movies'
import Delete from "./component/delete/delete";
import Like from "./component/like/like";
import Dislike from "./component/dislike/dislike";
import Pagination from "./pagination";



class App extends Component{

    constructor (props) {
        super(props)
        this.state = {
            movies: [],
            filter_category: [],
            isLike: false,
            hasLiked: false,
            //renderPage:false
        }
    }
    // async componentDidMount() {
    //     await setTimeout(()=>{
    //         new Promise((res)=>{
    //             this.setState({
    //                 renderPage:true
    //             })
    //         })
    //     },500)
    // }

    componentWillMount() {
        var category = []
        const _this = this
        movies$.then((data)=>{
            for(var i=0;i<data.length;i++){
                if(category.indexOf(data[i].category)===-1){
                    category.push(data[i].category)
                }
            }
            _this.setState({
                movies: data,
                filter_category: category
            })
        })
    }

    handleDelete(position) {
        return () => {
            let { movies } = this.state;
            var filter_category = []
            movies.splice(position, 1);
            for(var i=0;i<movies.length;i++){
                if(filter_category.indexOf(movies[i].category)===-1){
                    filter_category.push(movies[i].category)
                }
            }
            this.setState({
                movies: movies,
                filter_category: filter_category
            });
        }
    }

    handleAdd(position){
        return () => {
            let { movies } = this.state;
            let { isLike } = this.state;
            let { hasLiked } = this.state;
            if(!hasLiked){
                movies[position].likes = movies[position].likes + 1
                this.setState({
                    movies: movies,
                    isLike: true,
                    hasLiked: true,
                });
            }else {
                if(!isLike){
                    movies[position].likes = movies[position].likes + 1
                    movies[position].dislikes = movies[position].dislikes - 1
                    this.setState({
                        movies: movies,
                        isLike: true,
                    });
                }
            }
        }
    }

    handleSub(position){
        return () => {
            let { movies } = this.state;
            let { isLike } = this.state;
            let { hasLiked } = this.state;
            if(!hasLiked){
                movies[position].dislikes = movies[position].dislikes + 1
                this.setState({
                    movies: movies,
                    isLike: false,
                    hasLiked: true,
                });
            }else {
                if(isLike){
                    movies[position].likes = movies[position].likes - 1
                    movies[position].dislikes = movies[position].dislikes + 1
                    this.setState({
                        movies: movies,
                        isLike: false,
                    });
                }
            }
        }
    }

    handleFiltre(){
        return () => {
            var filter_category = []
            console.log('categroy:',filter_category)
            var status = document.getElementsByName('category')
            for(var i=0;i<status.length;i++){
                if(status[i].checked){
                    filter_category.push(status[i].value)
                }
            }
            this.setState({
                filter_category: filter_category
            })
            console.log('filter_category:',this.state.filter_category)
        }

    }

    render(){
        const {filter_category} = this.state
        const list = this.state.movies.map ((movie, idx) => {
            console.log('filter_category',filter_category)
            if(filter_category.includes(movie.category)) {
                return <div className='carte'>
                <Movie movie={movie}/>
                    <button onClick={this.handleDelete(idx)}>
                        <Delete/>
                    </button>
                    <button onClick={this.handleAdd(idx)}>
                        <Like/>
                    </button>
                    <button onClick={this.handleSub(idx)}>
                        <Dislike/>
                    </button>
                </div>
            }
        });
        const filter = this.state.filter_category.map((category) => {
            return <div className="choise">
                {category}: <input type="checkbox" name="category" value={category}/>
                </div>
        })
        if(filter_category){
            return(
                <div className="container">
                    <div className="wrapper">
                        <div className="heading">
                            <div className="heading_nav">
                                <div className="heading_title">
                                    MOVIES
                                </div>
                                <div className="flex-row">
                                    <div className="box flex-col">
                                    {filter}
                                    <input type="button" value="Submit" onClick={this.handleFiltre()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            {list}
                        </div>
                       <Pagination />
                    </div>
                </div>
            )
        }
        }
}

export default App