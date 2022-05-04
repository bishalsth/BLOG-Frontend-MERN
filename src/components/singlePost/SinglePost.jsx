import "./singlePost.css"
export default function SinglePost() {
  return (
    <div className="singlePost">
        
        <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />

<h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>Safak</b>
        </span>

        <span className="singlePostDate"> 1 hour ago</span>
        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, alias quas tempore illum illo eveniet voluptatem ea esse repudiandae fuga dignissimos quis excepturi deleniti libero consectetur hic vero dolorem dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur dolorem molestias? Atque tenetur ex eius ipsam labore voluptate iste quisquam impedit, nobis nostrum dolor nisi, commodi a quia! Cumque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa qui et fugiat molestiae sit vel eligendi, porro similique mollitia reiciendis debitis magnam laboriosam nesciunt facere voluptas molestias quaerat! Rem.</p>


        </div>
    </div>
  )
}
