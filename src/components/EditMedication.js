import { useState } from 'react'

function EditMedication({ medication, editMedication }) {
  const [name, setName] = useState(medication.name)
  const [instructions, setInstructions] = useState(medication.instructions)
  const [dosageQty, setDosageQty] = useState(medication.dosageQty)
  const [dosageInterval, setDosageInterval] = useState(medication.dosageInterval)
  const [dosageIntervalPeriod, setDosageIntervalPeriod] = useState(medication.dosageIntervalPeriod)
  const [lastDose, setLastDose] = useState(medication.lastDose)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value)
  }

  const handleDosageQtyChange = (e) => {
    setDosageQty(e.target.value)
  }

  const handleDosageIntervalChange = (e) => {
    setDosageInterval(e.target.value)
  }

  const handleDosageIntervalPeriodChange  = (e) => {
    setDosageIntervalPeriod(e.target.value)
  }

  const handleLastDoseChange = (e) => {
    let  doseTime = e.target.value.toString()
    
    setLastDose(doseTime)
  }

  const handleSubmitMedication = (e) => {
    e.preventDefault()

    editMedication({
      ...medication,
      name,
      instructions,
      dosageQty,
      dosageInterval,
      dosageIntervalPeriod,
      lastDose,
    })
  }

  return (
    <section className='AddMedication'>
      <form onSubmit={handleSubmitMedication}>
        <fieldset>
          <label htmlFor="">Medication name: </label>
          <input type="text" placeholder="Medication name" value={name}  onChange={handleNameChange}/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Medication instructions: </label>
          <input type="text" placeholder="Medication instructions" value={instructions} onChange={handleInstructionsChange}/>
        </fieldset>

        <fieldset>
          <label htmlFor="">Dosage Amount: </label>
          <input type="text" placeholder="Dosage amount" value={dosageQty} onChange={handleDosageQtyChange} />
        </fieldset>

        <fieldset>
          <label htmlFor="">Dosage Interval: </label>
          <input className='small' type="number" min="0" placeholder="Dosage Interval" value={dosageInterval} onChange={handleDosageIntervalChange} />
        <select className='med' name="time" value={dosageIntervalPeriod} onChange={handleDosageIntervalPeriodChange}>
          <option >--Please choose an option--</option>
          <option value="times per day">times per day</option>
          <option value="times per week">times per week</option>
          <option value="hourly">hourly</option>
        </select>
        </fieldset>

        <fieldset>
        <label htmlFor="last dose taken">Last dose administered: </label>
        <input type="time" placeholder="Last dose taken" value={lastDose}  onChange={handleLastDoseChange} />
        </fieldset>
        
        <button type="submit">Edit Medication</button>
        <p>Medication History: {medication.doseHistory.join(', ')}</p>

      </form>

    </section>
  )

}

export default EditMedication



