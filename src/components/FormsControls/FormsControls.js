import React from 'react';
import ss from './FormsControls.module.sass'


// такая запись означает, что в пропсах передается все, кроме инпута и меты
export const TextArea = ({input, meta, ...props}) =>{

    const showError = meta.touched && meta.error
    return (
        <div  className={ss.formControl + " " + (showError? ss.error : ' ')}>
            <div><textarea {...input}{...props}/> </div>
            { showError ? <span> {meta.error} </span> : null}
        </div>
    )
}

export const Input = ({input, meta, ...props}) =>{

    const showError = meta.touched && meta.error
    return (
        <div  className={ss.formControl + " " + (showError? ss.error : ' ')}>
            <div><input {...input}{...props}/> </div>
            { showError ? <span> {meta.error} </span> : null}
        </div>
    )
}