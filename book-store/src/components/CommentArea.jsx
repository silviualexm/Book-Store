import React from 'react'
//import AddComment from './AddComment'

class CommentArea extends React.Component {
    
    state = {
        comments: []
    }

    componentDidMount = async () => {
        try {
            let resp = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,  {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjliZDg5YzI2ZjAwMTU3ZjljMmUiLCJpYXQiOjE2MTY2ODE0NzEsImV4cCI6MTYxNzg5MTA3MX0.U-glcK00yklURQxT3raafggJe6MUN3AjSZY9FRygJCI"
                }})
                console.log(resp)
            let data = await resp.json()
            console.log(data)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    render() {
        return (
            <>
                <h3>Comments</h3>
                <div>

                </div>
            </>
        )
    }
   // {<AddComment />}
    
}

export default CommentArea