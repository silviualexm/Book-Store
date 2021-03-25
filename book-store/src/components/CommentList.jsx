import React from 'react'


class CommentList extends React.Component {
    state = {
        comments: []
    }

    componentDidMount = async () => {
        try {
            let resp = await fetch('https://striveschool-api.herokuapp.com/api/comments/{_id}',  {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjliZDg5YzI2ZjAwMTU3ZjljMmUiLCJpYXQiOjE2MTY2ODE0NzEsImV4cCI6MTYxNzg5MTA3MX0.U-glcK00yklURQxT3raafggJe6MUN3AjSZY9FRygJCI"
                }})
                console.log(resp)
            let data = await resp.json()
            console.log(data)
            
        } catch (error) {
            
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

}

export default CommentList