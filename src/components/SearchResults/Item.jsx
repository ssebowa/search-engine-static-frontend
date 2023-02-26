import "./Item.css";

const Item = (props) => {
    return (
        <>
            <div className="items-styles">{props.children}</div>
        </>
    );
};

export default Item;
