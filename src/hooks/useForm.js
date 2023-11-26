import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation ] = useState({});

    useEffect(()=>{

        CreateValidators();

    }, [formState])

    const isFormValid = useMemo(()=> {
      
        for (const formValue of Object.keys( formValidation)) {
           if(formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    const CreateValidators = ()=> {
        const formCheckedValues = {};
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

       setformValidation(formCheckedValues)
         
    }
    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formValidation,
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        isFormValid
    }
}