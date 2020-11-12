const PlanModal = () => {
    return ( 
        <div>
            <button className='btn-cobertura'><a href="#miModal">¿Qué cubre?</a></button>
            <div id="miModal" class="modal">
            <div class="modal-contenido">
                <a href="#">X</a>
                <h2>Mi primer Modal</h2>
                <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
            </div>  
            </div>
        </div>
     );
}
 
export default PlanModal;