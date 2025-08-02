
import React, { useState } from 'react';
function Form() {

   //varibale 
   const[BuildingNo , setBuildingNo] = useState('');
   const[StreetName , setStreetName] = useState('');



//var for validations
const [BuildingNoError , setBuildingNoError] = useState('');
const [StreetNameError , setStreetNameError] = useState('');

function handleBuildingNo(e){
    setBuildingNo(e.target.value);
    

    if(BuildingNo.length < 3) {
        setBuildingNoError('Min 3 char');
    }
    else {
        setBuildingNoError('');
    }
}


function StreetNameFunction(e){
     setStreetName(e.target.value);
      if(StreetName.length < 3) {
          setStreetNameError('Min 3 char');
      }
      else {
          setStreetNameError('');
      }
}

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                <div className="col-3 text-center">
                    <h1 className ='text-success'>Form Task-2</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Building Number:</label>
                            <input type="text" onChange={e => handleBuildingNo(e)} className="form-control" placeholder="Building No." />
                            <div className ='text-danger'>
                                {BuildingNoError}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Street Name:</label>
                            <input onChange={e => StreetNameFunction(e)} type="text" className="form-control" placeholder="Street Name" />
                            <div className ='text-danger'>
                                {StreetNameError}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">City:</label>
                            <input type="text" className="form-control" placeholder="City" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">State:</label>
                            <input type="text" className="form-control" placeholder="State" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Country:</label>
                            <input type="text" className="form-control" placeholder="Country" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Pincode:</label>
                            <input type="text" className="form-control" placeholder="Pincode" />
                        </div>

                        <div className="text-center">
                            <button onClick={e=> console.log(BuildingNoError , StreetNameError)} type="button" className="btn btn-primary">
                                Save Address
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}


export default Form;
