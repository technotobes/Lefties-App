import Menu from "./Menu";
import '../css/Menu.css'


function BaseLayout(props) {
    return (
        <div>
            <div id="main">
                <Menu />
                {props.children}
                <h6>Footer</h6>
            </div>
        </div>
    )

}

export default BaseLayout