import React from "react";

const types = { 
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: 'Digite um email válido',
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: 'A senha deve ter no mínimo 8 caracteres. Deve conter ao menos 1 letra maiúscula, 1 letra minúscula e 1 dígito.'
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números'
    }

}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false)
    
    const onChange = React.useCallback((event) => {
        setValue(event.target.value)
        if (error) {
            validate(event.target.value)
        }
    }, [value])

    const validate = (value) => {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Preencha um valor')
            return false
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }
    
    return {
        value,
        error,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value)
    }
}

export default useForm;