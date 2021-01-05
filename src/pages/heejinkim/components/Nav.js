import React from 'react'; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart, faCompass, faHome, faLocationArrow, faSearch, faTimesCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faCompass as farCompass, faComment as farComment, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";


class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-column">
                        <h1 class="title">Westagram</h1>
                        <div class="nav-form">
                            <input type="text" placeholder="검색"/>
                            <FontAwesomeIcon className="fa-search" icon={faSearch} size="xs"/>
                            <FontAwesomeIcon className="fa-times-circle" icon={faTimesCircle} size="xs"/>
                        </div>
                        <div class="nav-icons">
                            <FontAwesomeIcon className="fa-home nav-icons_list" icon={faHome} size="lg" />
                            <FontAwesomeIcon className="fa-location-arrow nav-icons_list" icon={faLocationArrow} size="lg" />
                            <FontAwesomeIcon className="fa-compass nav-icons_list" icon={farCompass} size="lg" />
                            <FontAwesomeIcon className="fa-heart nav-icons_list" icon={farHeart} size="lg" />
                            <img class="nav-icons_user nav-icons_list" src="https://www.allkpop.com/upload/2020/01/content/181813/1579389188-aee70205-f9ac-4903-acb7-25d27940c050.jpeg"/>
                        </div>
                    </div>
                </nav>
            </div>
            );
    }
}

export default Nav;