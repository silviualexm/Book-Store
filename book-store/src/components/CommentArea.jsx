import CommentList  from './CommentList'
import AddComment from './AddComment'

const Comment = () => (
    <>
        <CommentList />
        <AddComment />
        {/* <Row>
            
                let resp = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + {this.props.asin},  {
                    headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjliZDg5YzI2ZjAwMTU3ZjljMmUiLCJpYXQiOjE2MTY2ODE0NzEsImV4cCI6MTYxNzg5MTA3MX0.U-glcK00yklURQxT3raafggJe6MUN3AjSZY9FRygJCI"
                    }})
                let comment = await resp.json() 
                console.log(comment)
            
            {comment}
        </Row> */}
        
    </>
)

export default Comment