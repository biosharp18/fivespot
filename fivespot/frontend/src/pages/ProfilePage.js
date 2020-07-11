import React, { Component } from 'react'
import Header from "../components/header/Header"

 export class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="hero pt-3">
                    <article className="media pt-6">
                        <figure className="media-left">
                            <p className="image is-128x128">

                            {/* use class "is rounded" on the image*/}

                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong className="title is-3"> NAME</strong>
                                
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    </p>
                                </p>

                            </div>

                        </div>
                    </article>
                </div>

                <div className="tabs is-centered is-fullwidth">
                    <ul>
                        <li>
                            <a> Personal Tours</a>
                        </li>

                        <li>
                            <a> Favorite Tours</a>
                        </li>
                    </ul>
                </div>

                <div class="columns">


                </div>

            </div>
        );
    }
}

export default ProfilePage
