import React from 'react'; 
import Nav from '../Components/Nav';
import Story from '../Components/Story';
import Feed from '../Components/Feed';
import Aside from '../Components/Aside';
import "../main/main.scss";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <main>
                    <div class="div-main-feeds">
                        <div>
                            <Story />
                            <Feed />
                        </div>            
                    </div>
                    <Aside />
                </main>
            </div>
            );
    }
}

export default Main;