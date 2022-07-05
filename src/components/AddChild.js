// import AddMedication from './AddMedication'
// import ListMedications from './ListMedications'
import { useState } from 'react'

function AddChild({ addChild }) {

  const [name, setName] = useState('')
  const [DOB, setDob] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleDOBChange = (e) => {
    setDob(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addChild({name, DOB})
    setName('')
    setDob('')
  }

  return (
    <section className='child'>
      {/* <EditChild></EditChild>
      <EmergencyDetails></EmergencyDetails> */}
      {/* <AddMedication></AddMedication>
      <ListMedications></ListMedications> */}
      {/* <Allergies></Allergies>
      <ListAllergies></ListAllergies> */}
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" value={name}  onChange={handleNameChange} />
      <input type="text" placeholder="DOB"  value={DOB}  onChange={handleDOBChange} />
      <button type="submit" >Add Child</button>
      </form>

    </section>
  )

}

export default AddChild