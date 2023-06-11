import Food from "./Food";

function Menus() {

    return(
        <>
        <main className="container-fluid text-center">
            <div className="row">
                <div className="col menu-btns">
                    <button type="button" class="btn btn-secondary" >Food Menu</button>
                    <button type="button" class="btn btn-secondary" >Drink Menu</button>
                    <button type="button" class="btn btn-secondary" >Late Night Menu</button>
                </div>
            </div>
            <div className="row">
                <div className="boxmain-menu object-fit-fill rounded">
                    <Food/>
                </div>  
            </div>
        </main>
        </>
    )
}

export default Menus; 