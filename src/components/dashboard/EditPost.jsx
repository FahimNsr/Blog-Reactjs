import React, { useState, useEffect, useRef } from "react";

import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

import { getEditPost, updatePostProcess } from "../../actions/dashboard";

const EditPost = ({ match, history }) => {
    const post = useSelector((state) => state.editPost);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEditPost(match.params.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [postId, setPostId] = useState();
    const [title, setTitle] = useState();
    const [status, setStatus] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [body, setBody] = useState();

    const [, forceUpdate] = useState();

    const validator = useRef(new SimpleReactValidator());

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
        try {
            if (validator.current.allValid()) {
                event.preventDefault();
                let data = new FormData();
                data.append("title", title);
                data.append("status", status);
                if (event.target.thumbnail.files[0])
                    data.append("thumbnail", event.target.thumbnail.files[0]);
                else data.append("thumbnail", thumbnail);
                data.append("body", body);

                dispatch(updatePostProcess(postId, data));
                history.push("/dashboard/posts");
                history.push("/dashboard/");
                history.push("/dashboard/posts");
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            toast.error("Something went wrong");
            console.log(ex);
        }
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
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                        validator.current.showMessageFor(
                                            "title"
                                        );
                                    }}
                                />
                                <p className="text-danger mb-4">
                                    {validator.current.message(
                                        "title",
                                        title,
                                        "required|between:8,64"
                                    )}
                                </p>
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
                                    onChange={(e) => {
                                        setStatus(e.target.value);
                                        validator.current.showMessageFor(
                                            "status"
                                        );
                                    }}
                                >
                                    <option value=""></option>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                                <p className="text-danger mb-4">
                                    {validator.current.message(
                                        "status",
                                        status,
                                        "required|in:public,private"
                                    )}
                                </p>
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
                                        onChange={(e) => {
                                            setBody(e.target.value);
                                            validator.current.showMessageFor(
                                                "body"
                                            );
                                        }}
                                    />
                                    <p className="text-danger mb-4">
                                        {validator.current.message(
                                            "body",
                                            body,
                                            "required"
                                        )}
                                    </p>
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
