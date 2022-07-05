import RenderChild from './RenderChild'

function RenderChildren({ children, addMedicationToChild, updateMedicationOnChild, updateAdministerDose }) {
  

  return (
    <section className="renderChildren">
      <ul>
      {children && children.map((child, index) => (
        <RenderChild
          child={child}
          index={index}
          addMedicationToChild={addMedicationToChild}
          updateMedicationOnChild={updateMedicationOnChild}
          administerDose={updateAdministerDose}
        />
    ))}
    </ul>
  </section>
  )

}



export default RenderChildren