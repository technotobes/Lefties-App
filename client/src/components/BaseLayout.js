import Menu from "./Menu";


function BaseLayout(props) {
    return (
        <div>
            <Menu />
            {props.children}
            <h6>Footer</h6>
        </div>
    )

}

export default BaseLayout