import { useState } from 'react'
import Medications from './Medications'
import EditMedication from './EditMedication'

function RenderChild({ child, index, addMedicationToChild, updateMedicationOnChild, administerDose }) {
  const [ addingMedication, setAddingMedication ] = useState(false);

  function handleAddMedication(e) {
    e.preventDefault()
    setAddingMedication(true);
  }

  function chooseMedication(medication) {
    addMedicationToChild(medication, index);
    setAddingMedication(false);
  }

  function editMedication(medication, medicationIndex) {
    updateMedicationOnChild(medication, medicationIndex, index)
  }

  function administerDoseButtons(medication, medicationIndex, time) {
    administerDose(medication, medicationIndex, index, time)
  }

  return (
    <li key={child.name}>
          <p><strong>Name:</strong> {child.name}</p>
          <p><strong>DOB:</strong> {child.DOB}</p>
          <ul className="medication-list">
      {child.medications && child.medications.map((medication, index) => (
        <ChildsMedication
        medication={medication}
        index={index}
        updateMedication={editMedication}
        administerDoseButton={administerDoseButtons}

        />
        
        
    ))}
    </ul>

          <button type='button' onClick={handleAddMedication}>Add Medication</button>

          {addingMedication && (
            <Medications addMedication={chooseMedication} />
          )}
        </li>
  )
}


export default RenderChild


function ChildsMedication({ medication, index, updateMedication, administerDoseButton }) {
  const [ editingMedication, setEditingMedication ] = useState(false);

  function handleEditMedication(e) {
    e.preventDefault()
    setEditingMedication(true)
  }

  function editMedication(medication) {
    setEditingMedication(false);
    updateMedication(medication, index);
  }

  const handleadministerDose = (e) => {
    e.preventDefault()
    const time = new Date().getHours() + ':' + new Date().getMinutes()

    administerDoseButton(medication, index, time)
  }


  return (
    <div className='individual-meds'>
      <p><strong>Medication:</strong> {medication.name}</p>
      <img src={ medication._thumburl} alt="" />
      <p><strong>Instructions:</strong> {medication.instructions}</p>
      <p><strong>Dosage:</strong> {medication.dosageQty} {medication.dosageInterval} {medication.dosageIntervalPeriod}</p>
      <p><strong>Last Dose:</strong> {medication.lastDose.toString()}</p>

      <button onClick={handleadministerDose}>Administer Dose</button>
      <button onClick={handleEditMedication}>Edit Medication</button>
      {editingMedication && (
        <EditMedication
        medication={medication}
        editMedication={editMedication}

        />
      )}
    </div>
  )
  }