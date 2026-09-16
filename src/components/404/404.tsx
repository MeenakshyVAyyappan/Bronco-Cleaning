import {Link} from 'react-router-dom'
import erimg from '../../images/404.png'


const Error: React.FC = () => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page Not Found</h3>
                                <p className="mb-4">The page you are looking for at Bronco Cleaning Services doesn't exist or has been moved.</p>
                                <Link onClick={ClickHandler} to="/" className="theme-btn">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;
