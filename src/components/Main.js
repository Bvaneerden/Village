import { useState, useEffect } from 'react'
import AddChild from './AddChild'
import RenderChildren from './RenderChildren'


function Main() {
  const [children, setChildren] = useState([])
  const current = new Date();
  const date = `${current}`

  function getChildren() {
    fetch('/children')
    .then(res => res.json())
    .then(res => setChildren(res.children))
  }

  function updateChildren() {
    if (children !== null) {
    fetch('/children', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ children })
    })
  }}

  useEffect(getChildren, [])
  useEffect(updateChildren, [children])

  const addChild = child => {

    setChildren([...children, {
      ...child,
      medications: []
    }])
  }

  const addMedication = (medication, childId) => {
    const selectedChild = children[childId]
    const otherChildren = children.filter(child => child !== selectedChild)
    medication.instructions = `please click edit to enter instructions` 
    medication.dosageQty = 1 + ' tablet'
    medication.dosageInterval = 4
    medication.dosageIntervalPeriod = 'hourly'
    medication.lastDose = new Date().getHours() + ':' + new Date().getMinutes()
    medication.doseHistory = [] 

    setChildren([...otherChildren, {
      ...selectedChild,
      medications: [
        ...selectedChild.medications,
        medication
      ]
    }])
  }

  const editMedication = (medication, medicationId, childId) => {
    const selectedChild = children[childId]
    const otherChildren = children.filter(child => child !== selectedChild)
    
    const otherMedications = selectedChild.medications.filter((_, index) => index !== medicationId)

    setChildren([
      ...otherChildren,
      {
        ...selectedChild,
        medications: [
          ...otherMedications,
          medication
        ]
      }
    ])
  }

  const administerDose = (medication, medicationId, childId, time) =>  {
    const selectedChild = children[childId]
    const otherChildren = children.filter(child => child !== selectedChild)
    
    const otherMedications = selectedChild.medications.filter((_, index) => index !== medicationId)

    medication.doseHistory.push(medication.lastDose)
    medication.lastDose = time

    setChildren([
      ...otherChildren,
      {
        ...selectedChild,
        medications: [
          ...otherMedications,
          medication
        ]
      }
    ])

    console.log(medication.lastDose)


  }

  return (
    <div>
        <h1>Main Page</h1>


      < AddChild
      addChild={addChild}
       />

      < RenderChildren
      children={children}
      addMedicationToChild={addMedication}
      updateMedicationOnChild={editMedication}
      updateAdministerDose={administerDose}
      
      />

    </div>
  )
}

export default Main
