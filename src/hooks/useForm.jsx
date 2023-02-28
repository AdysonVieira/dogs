import React from "react";

const types = { 
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: 'Digite um email válido',
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false)
    
    const onChange = React.useCallback((event) => {
        setValue(event.target.value)
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