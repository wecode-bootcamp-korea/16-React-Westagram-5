import React from 'react'; 
import Feed from '../Components/Feed';
import Input from '../Components/Input'
import "../main/main.scss";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";
import uuid from 'react-uuid'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            id: uuid(),
            comment: '',
            commentArr: [],
            delComment: false,
            commentData: []
        }
    }

    handleInput = (e) => {
        
        this.setState({
            comment : e.target.value
            
        })
    }

    handleSubmit = (e) => {
         
        e.preventDefault();
        const newComment = {
            mapId: this.state.id,
            content: this.state.comment
        }
        console.log("newComment 잘 되나?", newComment)
        const newCommentArr = [...this.state.commentArr, newComment]
        
        this.setState({
            id: uuid(),
            comment:'',
            commentArr: newCommentArr,
            delComment: false
        })
    }

    componentDidMount() {
        fetch('comment data 로컬 API 주소', {
            method: "GET"
        })
        .then (response => response.json())
        .then (response => {
            
            this.setState({
                commentData: response.commentdata
            })
        })
    }

    render() {
        return (
            <div className="main">
                <ul className="feed">
                    <h3>댓글창</h3>
                    {this.state.commentData.map( dataElement => {
                        return(
                            <li>
                                <span>{dataElement.username}</span><span>{dataElement.commenttxt}</span><span>❌</span><span>{dataElement.isLiked ? "💙" : "😢"}</span>
                            </li>
                        )
                    })}
                    {this.state.commentArr.map( element => {
                        return (
                            <li key={element.mapId}>
                            <span>유저이름</span><span>{element.content}</span><span>❌</span><span>💙</span>
                            </li> )
                    })}
                </ul>
                <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.comment}
                    onChange={this.handleInput} 
                    type="text" 
                    placeholder="댓글입력" 
                />
                <button type="submit">클릭</button>
                </form>
            </div>
            );
    }
}

export default Main;