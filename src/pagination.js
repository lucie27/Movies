import React,{ Component } from "react";
import style from "./css/pagination.scss";

export default class Pagination extends Component{
    constructor(props){
        super(props)
        this.state = {
            pageCurr:1,
            pageCount:10,
        }
    }

    goPrev(){
        let {
            pageCurr,
        } = this.state;

        if(--pageCurr === 0){
            return;
        }

        this.go(pageCurr)
    }

    goNext(){
        let {
            pageCurr,
        } = this.state;

        this.go(pageCurr)

    }

    componentDidMount() {
        this.setState({
            pageCountEle:document.querySelector("#pageCount"),
        });

        setTimeout(()=>{
            document.addEventListener("click",(e)=>{
                if(e.target.id !== "pageCount"){
                    this.state.pageCountEle.parentNode.className = style.hide;
                }
            },false);
        },0)
    }

    choosePageCount(e){
        const parentUI = this.state.pageCountEle.parentNode;
        parentUI.className = (parentUI.className === style.hide)?"":style.hide;
    }

    confirmPageCount(pageCount){
        const {
            pageCountEle,
            pageCurr,
        } = this.state;

        // 设置每页显示条数
        this.setState({
            pageCount
        });
        pageCountEle.innerHTML = pageCount;
        pageCountEle.parentNode.className = style.hide;

        setTimeout(()=>{
            this.go(pageCurr, true);
        },0);
    }

    go(pageCurr,reset = false){
        // // const {
        // //     paging
        // // } = this.props.config
        //
        // this.setState({
        //     pageCurr
        // });
        //
        // // 选择每页条数后重新分页
        // if(reset === true){
        //     this.setState({
        //         pageCurr:1,
        //     });
        // }
        //
        // // setTimeout(()=>{
        // //     paging({
        // //         pageCurr:this.state.pageCurr,
        // //         pageCount:this.state.pageCount
        // //     })
        // // });
    }

    render(){
        return(
            <div className="main">
                <div className = "bar">
                    <span>Nombre de Page</span>
                    <div className ="select" >
                        <ul className="hide">
                            <li id="pageCount" onClick = { this.choosePageCount.bind(this) }>4</li>
                            <li onClick = { this.confirmPageCount.bind(this,4) }>4</li>
                            <li onClick = { this.confirmPageCount.bind(this,8) }>8</li>
                            <li onClick = { this.confirmPageCount.bind(this,12) }>12</li>
                        </ul>
                    </div>
                </div>
                <ul className="page">
                    <li onClick = { this.goPrev() }>Précédent</li>
                    <li onClick = { this.goNext() }>Suivant</li>
                </ul>
            </div>
        );
    }
}


