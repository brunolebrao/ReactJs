import React, {Component} from 'react'

export class NewComment extends Component {
    render() {
        return (
            <div className='row'>
                <textarea placeholder='Comente!' className='form-control'></textarea>
            </div>
        )
    }
}

export default NewComment
