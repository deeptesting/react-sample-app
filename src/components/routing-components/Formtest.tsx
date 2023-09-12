import { AnyNaptrRecord } from "dns";
import React, { useEffect, useState } from "react";
import { FormInputControl, useFormTextControl } from "../../utilities/hook/FormControlHook";
 
import "../../css/Form.css";

export interface IFormTestProps{
    
}
export const FormTest: React.FC<IFormTestProps> = (props): React.ReactElement => {
    
    // const [value, setValue] = useState("Deep");
    // const onTextChange = (e:any)=>{
    //     const textValue = (e.target as HTMLInputElement).value;
    //     setValue(textValue);
    // }
    const fNameFormControl: FormInputControl = {
        name: "firstname",
        initialValue: "Deep",
        isRequired: true,
        requiredErroMsg: "first name is necessary",
        regexExpression: /^[a-zA-Z ]+$/ as any,
        //invalidErroMsg: "Please enter correct first name"
    }
    const lNameFormControl: FormInputControl = {
        name: "Lastname",
        initialValue: "Roy",
        isRequired: true,
        // requiredErroMsg: "first name is necessary",
        // regexExpression: /^[a-zA-Z ]+$/ as any,
        // invalidErroMsg: "Please enter correct first name"
    }
 
    const frmfName = useFormTextControl(fNameFormControl);

    const frmlName = useFormTextControl(lNameFormControl);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Form</h2>
                     
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>First Name   {frmfName.isValid.toString()}</label>
                    <input type="text"  
                         {...frmfName.inputProps}
                        // value={frmfName.inputProps.value} 
                        // onChange={frmfName.inputProps.onChange} 
                     />
                     <br/>
                     {frmfName.errorMessage!=="" && 
                     <span className="error">{frmfName.errorMessage}</span> 
                     }
                </div>

                <div className="col">
                    <label>Last Name {frmlName.isValid.toString()}</label>
                    <input type="text"  
                     {...frmlName.inputProps}
                    //   value={frmlName.inputProps.value} 
                    //   onChange={frmlName.inputProps.onChange} 
                     />
                     <br/>
                     {frmlName.errorMessage!=="" && 
                     <span className="error">{frmlName.errorMessage}</span> 
                     }
                </div>
            </div>
        </div>
    )
};


 