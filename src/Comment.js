//your code here

import React, { Component } from 'React';

export default class Comment extends Component {
    render() {
        return (
            <div className='comment'>
                {this.props.commentText}
            </div>
        );
    }
}
