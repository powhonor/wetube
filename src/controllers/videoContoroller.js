let videos = [
    {
        title: "First video",
        rating: 5,
        comments: 2,
        createdAt: "2mins ago",
        views: 59,
        id: 1,
    },
    {
       title: "Second video",
       rating: 3,
       comments: 2,
       createdAt: " 2mins ago",
       views: 1,
       id: 2,
    },
    {
       title: "Third video",
       rating: 5,
       comments: 2,
       createdAt: "2mins ago",
       views: 59,
       id: 3,
    },
];   

export const trending = (req, res) => {
  return res.render("home", {pageTitle: "Home", videos});
}
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
}
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
  return res.render("edit", {pageTitle:`Editing: ${video.title}` , video})
}
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[0].title = title;
    return res.redirect(`/videos/${id}`);
} 



export const search = (req, res) => res.send("search")
export const upload = (req, res) => res.send("upload")

export const deleteVideo = (req, res) => {
    console.log(req.params)
    return res.send("Delete Video")
}

