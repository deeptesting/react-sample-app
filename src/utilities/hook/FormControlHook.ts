import { useEffect, useState } from 'react';

export interface FormInputControl{
    name: string;
    initialValue: string;
    isRequired?: boolean;
    requiredErroMsg?: string;
    regexExpression?: string;
    invalidErroMsg?: string;
}

export function useFormTextControl(formControl: FormInputControl) {
  const [value, setValue] = useState(formControl.initialValue);
  const [errorMsg, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(true);


  function CheckIsValid(inputText : string){
    if(formControl.isRequired){
        if(inputText==="" || inputText===null){
            return false;
        }
    }
    return true;
  }

  function CheckIsDataValid(inputText : string){
    if(formControl.regexExpression!=undefined 
        &&formControl.regexExpression!=null
        && formControl.regexExpression!=""){

        if(inputText!="" || inputText!=null){
           const regexp = new RegExp(formControl.regexExpression);
            const isValidData = regexp.test(inputText);
            return isValidData;
        }else{
            return false;
        }
    }
    return true;
  }


  function handleChange(e: any) {
    const textValue = (e.target as HTMLInputElement).value;
    setValue(textValue);
    const isValid = CheckIsValid(textValue);
    if(!isValid){
        setErrorMessage(formControl.requiredErroMsg ?? formControl.name+" field is required");
        setIsValid(isValid);
    }else{
        const isDataValid = CheckIsDataValid(textValue);
        setIsValid(isValid && isDataValid);
        if(!isDataValid){
            setErrorMessage(formControl.invalidErroMsg ?? formControl.name+" field is not valid data");
        }else{
            setErrorMessage("");
        }
    }
  }

  const returnObj = {
    isValid: isValid,
    errorMessage: errorMsg,
    inputProps : {
        value: value,
        name: formControl?.name,
        onChange: handleChange
      }
  }

  return returnObj;
}
