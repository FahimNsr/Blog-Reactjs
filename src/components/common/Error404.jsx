import React , {Fragment} from 'react'
import { Link } from 'react-router-dom'
const Error404 = () => {
    return (
        <Fragment>
    <div className="error-404-content-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="left-content-area">
                    <div className="img-wrapper">
                        <img src="/img/404.jpg" alt="404 error page"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="right-content-area">
                    <h3 className="title">404</h3>
                    <span className="details">....Opps! Something Is Missing</span>
                    <div className="btn-wrapper">
                        <Link to="/" className="boxed-btn">go back home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </Fragment>
);
}
 
export default Error404;