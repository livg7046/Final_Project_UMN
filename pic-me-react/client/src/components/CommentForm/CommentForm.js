import React from "react";
import "./CommentForm.css"

const CommentForm = () => (
    // <div className="row">
    //     <div className="col-md-10 offset-md-1">
    //         <div className="card card-info">
    //             <div className="card-block">
    //                 <textarea placeholder="Write your comment here!" className="comment-textarea"></textarea>
    //                 <form className="form-inline">
    //                     <div className="emoji-btn">
    //                         <button className="btn  emoji" type="button"><i className="far fa-smile fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="far fa-meh fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="far fa-frown fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="far fa-laugh-beam fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="far fa-sad-cry fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="far fa-angry fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="far fa-grin-hearts fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="far fa-thumbs-up fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="far fa-thumbs-down fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="fas fa-image fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="fas fa-video fa-2x"></i></button>
    //                         <button className="btn  emoji" type="button"><i className="fas fa-music fa-2x"></i></button>
    //                         {/*<button className="btn  emoji" type="button"><i className="fas fa-microphone fa-lg"></i></button>*/}
    //                     </div>
    //                 </form>
    //                 <div className="form-group">
    //                   {/*<label for="commentSelect">What do you think?</label>*/}
    //                   <select className="form-control form-control-lg" id="commentSelect">
    //                     <option selcted>What do you think?</option>
    //                     <option>Cute</option>
    //                     <option>Dumb</option>
    //                     <option>Weird</option>
    //                     <option>Awesome</option>
    //                     <option>Pretty</option>
    //                   </select>
    //                 </div>
    //                 <div className="share-btn">
    //                     <button className="btn  btn-lg" type="button" id="Share">Share</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div classNameName="detailBox">
                            {/* <div class="emoji-btn">
                            <button class="btn emoji" type="button"><i class="far fa-smile fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="far fa-meh fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="far fa-frown fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="far fa-laugh-beam fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="far fa-sad-cry fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="far fa-angry fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="far fa-grin-hearts fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="far fa-thumbs-up fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="far fa-thumbs-down fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="fas fa-image fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="fas fa-video fa-2x"></i></button>
                            <button class="btn emoji" type="button"><i class="fas fa-music fa-2x"></i></button>
                            
                        </div> */}
        <div className="actionBox">
        <form className="form-inline" role="form">
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Your comments" />
                </div>
                <div className="form-group">
                    <button className="btn btn-default">Add</button>
                </div>
            </form>
            <ul className="commentList">
                <li>
                    <div className="commenterImage">
                        <img src="http://placekitten.com/50/50" />
                    </div>
                    <div className="commentText">
                        <p className="">Hello this is a test comment.</p> <span className="date sub-text">on March 5th, 2014</span>
                    </div>
                </li>
                <li>
                    <div className="commenterImage">
                        <img src="http://placekitten.com/45/45" />
                    </div>
                    <div className="commentText">
                        <p className="">Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</p> <span className="date sub-text">on March 5th, 2014</span>
                    </div>
                </li>
                <li>
                    <div className="commenterImage">
                        <img src="http://placekitten.com/40/40" />
                    </div>
                    <div className="commentText">
                        <p className="">Hello this is a test comment.</p> <span className="date sub-text">on March 5th, 2014</span>
                    </div>
                </li>
            </ul>

        </div>
    </div>
);




export default CommentForm;