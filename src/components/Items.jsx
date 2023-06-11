
function Item(props){
    return (
        <div className='card' style={{width: 15 + 'rem'}}>
            <img src={props.image} class="card-img-top" width='80px' height='150px' />
            <div className="card-body">
                <div className='float-end'><h5>{props.price}</h5></div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Item;