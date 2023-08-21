import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './CSS_Chat_GPT.css';
// import './CreateVinoForm.css';
import { NavLink } from 'react-router-dom';
import { createNewVino } from "../../redux/actions";



export default function CreateVinoForm() {

    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.allActivities)
    const allCountries = useSelector((state) => state.allCountries);
    const [errors, setErrors] = useState({});
    const [buttonEnabled, setButtonEnabled] = useState(false);
    
    const [input, setInput] = useState({
        name:"",
        bodega:"",
        imagen:"",
        descripcion:"",
        categoria:"", 
        varietal:"", 
        composicion_varietal:"", 
        añejamiento:"", 
        temperatura_de_servicio:"", 
        linea_del_vino:""
    });

    // console.log(allCountries)

    function validate (input) {
        let errors = {};
        
        if(!input.name) {
            errors.name = "*Wine name required*";
        }

        if(input.name.length < 3 || input.name.length > 15) {
            errors.name = "*Invalid wine name*";
        }

        if(!input.bodega) {
            errors.bodega = "*Bodega required*";
        }

        if(!input.imagen) {
            errors.imagen = "*Please select a imagen*";
        }

        if(!input.descripcion) {
            errors.descripcion = "**";
        }
        if(!input.categoria) {
            errors.categoria = "**";
        }
        if(!input.varietal) {
            errors.varietal = "**";
        }
        if(!input.composicion_varietal) {
            errors.composicion_varietal = "**";
        }
        if(!input.añejamiento) {
            errors.añejamiento = "**";
        }
        if(!input.temperatura_de_servicio) {
            errors.temperatura_de_servicio = "**";
        }
        if(!input.linea_del_vino) {
            errors.linea_del_vino = "**";
        }

        if (Object.entries(errors).length === 0) {
            setButtonEnabled(true)
        } else {
            console.log('errors:', errors)
            setButtonEnabled(false)
        }

        return errors
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        // let validateName = allActivities?.find(a => a.name === (input.name))
        // if(validateName !== undefined) {
        //     alert("Activity by that name already exists!")
        // } 
            dispatch(createNewVino(input))
            alert("Vino creado !!!!!!")
            setInput({
                name:"",
                bodega:"",
                imagen:"",
                descripcion:"",
                categoria:"", 
                varietal:"", 
                composicion_varietal:"", 
                añejamiento:"", 
                temperatura_de_servicio:"", 
                linea_del_vino:""
            })
            console.log(input)
            console.log(setInput)        
    }

    return (
        <div className = {"createActivityGrid"}>
            <div className = {"contentCreate"}>            
                <h1>Create a new wine!</h1>
                <br></br>
                <form onSubmit = {e => handleSubmit(e)}>
                    <div className="sectionContainer">
                        <label>Vino: </label>
                        <input
                        type = "text"
                        value = {input.name}
                        name = "name"
                        onChange = {handleChange}
                        className={"inputText"}
                        />
                        {errors.name && (
                            <p className = "p">{errors.name}</p>
                        )}
                    </div>
                    <br></br>
                    <div className="sectionContainer">
                        <label>Bodega: </label>
                        <select defaultValue = {'default'} name = "bodega" onChange = {e => handleSelect(e)}>
                            <option value ='default' disabled>Bodega</option>
                            <option value ="TRIVENTO">TRIVENTO</option>
                            <option value ="RUTINI">RUTINI</option>
                            <option value ="CATENA ZAPATA">CATENA ZAPATA</option>
                            <option value ="ESCORIHUELA">ESCORIHUELA</option>
                            <option value ="LAS PERDICES">LAS PERDICES</option>
                            <option value ="SALENTEIN">SALENTEIN</option>
                        </select>
                    </div>
                    <div>
                    {errors.bodega && (
                        <p className = "p">{errors.bodega}</p>
                    )}
                    </div>
                    <br></br>
                    <div>
                        <label>Imagen: </label>
                        <input
                        type = "text"
                        value = {input.imagen}
                        name = "imagen"
                        onChange = {handleChange}
                        className={"inputText"}
                        />
                        {errors.imagen && (
                            <p className = "p">{errors.imagen}</p>
                        )}
                    </div>
                    <br></br>
                    <div>
                        <label>Descripcion: </label>
                        <input
                        type = "text"
                        value = {input.descripcion}
                        name = "descripcion"
                        onChange = {handleChange}
                        className={"inputText"}
                        />
                        {errors.descripcion && (
                            <p className = "p">{errors.descripcion}</p>
                        )}
                    </div>
                    <br></br>
                    <div>
                        <label>Categoria: </label>
                        <select defaultValue = {'default'} name = "categoria" onChange = {e => handleSelect(e)}>
                            <option value ='default' disabled>Categoria</option>
                            <option value ="TINTO">TINTO</option>
                            <option value ="BLANCO">BLANCO</option>
                        </select>
                    </div>
                    <div>
                    {errors.categoria && (
                        <p className = "p">{errors.categoria}</p>
                    )}
                    </div>
                    <br></br>
                    <div>
                        <label>Varietal: </label>
                        <input
                        type = "text"
                        value = {input.varietal}
                        name = "varietal"
                        onChange = {handleChange}
                        className={"inputText"}
                        />
                        {errors.varietal && (
                            <p className = "p">{errors.varietal}</p>
                        )}
                    </div>
                    <br></br>
                    <div>
                        <label>Composicion Varietal: </label>
                        <input
                        type = "text"
                        value = {input.composicion_varietal}
                        name = "composicion_varietal"
                        onChange = {handleChange}
                        className={"inputText"}
                        />
                        {errors.composicion_varietal && (
                            <p className = "p">{errors.composicion_varietal}</p>
                        )}
                    </div>
                    <br></br>
                    <div>
                        <label>añejamiento: </label>
                        <input
                        type = "text"
                        value = {input.añejamiento}
                        name = "añejamiento"
                        onChange = {handleChange}
                        className={"inputText"}
                        />
                        {errors.añejamiento && (
                            <p className = "p">{errors.añejamiento}</p>
                        )}
                    </div>
                    <br></br>
                    <div>
                        <label>Temperatura del Servicio: </label>
                        <input
                        type = "text"
                        value = {input.temperatura_de_servicio}
                        name = "temperatura_de_servicio"
                        onChange = {handleChange}
                        className={"inputText"}
                        />
                        {errors.temperatura_de_servicio && (
                            <p className = "p">{errors.temperatura_de_servicio}</p>
                        )}
                    </div>
                    <br></br>
                    <div>
                        <label>Linea del Vino: </label>
                        <input
                        type = "text"
                        value = {input.linea_del_vino}
                        name = "linea_del_vino"
                        onChange = {handleChange}
                        className={"inputText"}
                        />
                        {errors.linea_del_vino && (
                            <p className = "p">{errors.linea_del_vino}</p>
                        )}
                    </div>
                    <br></br>

                    <br></br>
                    {/* <button className = {"botonCreate"} type ='submit' disabled={false}>Create</button> */}
                    <button className = {"botonCreate"} type ='submit' disabled = {!buttonEnabled}>Create</button>
                </form>
                <br></br>
            </div>
            <br></br>
                <NavLink to = '/' className={"botonback"}>
                    <button>Back to Home</button>
                </NavLink>            
        </div>
    )
}
