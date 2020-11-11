const PersonalDataForm = () => {
    return ( 
        <div>
            <form className='flex-column'>
                <label htmlFor='personal-id'>Numero de indentificación personal</label>
                <input type='text' name='personal-id' />
                <label htmlFor='name'>Nombres</label>
                <input type='text' name='name' />
                <label htmlFor='ap-paterno'>Apellido paterno</label>
                <input type='text' name='ap-paterno' />
                <label htmlFor='ap-materno'>Apellido materno</label>
                <input type='text' name='ap-materno' />
                <label htmlFor='address'>Dirección</label>
                <input type='text' name='address' />
                <label htmlFor='email'>Correo electrónico</label>
                <input type='text' name='email' />
                <label htmlFor='phone'>Número telefónico</label>
                <input type='text' name='phone' />
            </form>
        </div>
     );
}
 
export default PersonalDataForm;