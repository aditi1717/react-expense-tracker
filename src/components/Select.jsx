

export default function Select({id,name,value,label,onChange,error,defaultOption,options}) {
  return (
    <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} value={value} onChange={onChange}>
                  {
                    defaultOption && (<option value="" hidden>{defaultOption}</option>)
                  }
                  {options.map((option,i)=>{
                    return <option key={i} value={option}>{option}</option>
                  })}
                </select>
                <p  className='error'>{error}</p>
          </div>
  )
}