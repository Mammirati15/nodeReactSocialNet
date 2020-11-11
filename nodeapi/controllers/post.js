exports.getPosts = (req, res) => {
  res.json({
    posts: [
      {title: 'Post First'},
      {title: 'Post Second'}
    ]
  })
}