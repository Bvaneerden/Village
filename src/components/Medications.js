import { useState } from "react"

function Medications({addMedication}) {
  const [medications, setMedications] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchForMedications = async (e) => {
    e.preventDefault()
  
    const results = await fetch(`http://localhost:3001/findmedications?name=${searchTerm}`).then(res => res.json())
    setMedications(results)
  }

  const handleFieldChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <section className="medications">
      <h1>Medications</h1>
      <form onSubmit={searchForMedications}>
        <label htmlFor="search">Find Medication</label>
        <input name="search" type="text" value={searchTerm} onChange={handleFieldChange} placeholder="e.g. Dymadon"/>
        <button type="submit">Search</button>
      </form>
      <ul>
    {medications && medications.map((medication, index) => (
      <ShowMedication medication={medication} chooseMedication={addMedication} />
    ))}
        </ul>
  </section>
  )
}

function ShowMedication({ medication, chooseMedication}) {
  const handleSelectMedication = (e) => {
    e.preventDefault()
    chooseMedication(medication)
  }

  return (
    <li key={medication.name} onClick={handleSelectMedication}>
      <span>{medication.name}</span>
      <img src={medication._thumburl} alt={`Image of ${medication.name}`} />
    </li>
  )
}

export default Medications