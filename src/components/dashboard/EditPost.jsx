import React, { useState, useEffect } from "react";

import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import { updatePostProcess } from "../../actions/dashboard";

const EditPost = ({ post }) => {
    const dispatch = useDispatch();

    const [postId, setPostId] = useState();
    const [title, setTitle] = useState();
    const [status, setStatus] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [body, setBody] = useState();

    useEffect(() => {
        setPostId(post._id);
        setTitle(post.title);
        setStatus(post.status);
        setThumbnail(post.thumbnail);
        setBody(post.body);

        return () => {
            setPostId();
            setTitle();
            setStatus();
            setThumbnail();
            setBody();
        };
    }, [post]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("title", title);
        data.append("status", status);
        if (event.target.thumbnail.files[0])
            data.append("thumbnail", event.target.thumbnail.files[0]);
        else data.append("thumbnail", thumbnail);
        data.append("body", body);

        dispatch(updatePostProcess(postId, data));
    };

    return (
        <div className="container">
            <Helmet>
                <title>l</title>
            </Helmet>

            <div className="row justify-content-center ">
                <div className="col-11">
                    <div className=" d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                        <h2>Create Post</h2>
                    </div>
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                        <div className="form-group row ">
                            <div className="col-8">
                                <label
                                    for="title"
                                    className="control-label font-weight-bold"
                                >
                                    Title
                                </label>
                                <input
                                    className="form-control"
                                    autofocus
                                    type="text"
                                    name="title"
                                    aria-describedby="title"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="col-4">
                                <label
                                    for="status"
                                    className="control-label font-weight-bold"
                                >
                                    Status
                                </label>
                                <select
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value=""></option>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row ">
                            <div className="col">
                                <label
                                    for="body"
                                    className="control-label font-weight-bold"
                                >
                                    Body
                                </label>
                                <div className="card card-body">
                                    <textarea
                                        className="form-control"
                                        name="body"
                                        placeholder="description"
                                        value={body}
                                        onChange={(e) =>
                                            setBody(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row ">
                            <div className="col">
                                <label
                                    for="thumbnail"
                                    className="control-label font-weight-bold"
                                >
                                    Thumbnail
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    name="thumbnail"
                                    id="thumbnail"
                                    aria-describedby="thumbnail"
                                />
                            </div>
                        </div>
                        <div className="form-group row  ">
                            <div className="col">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPost;
