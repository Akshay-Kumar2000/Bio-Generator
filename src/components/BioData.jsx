import React, { useReducer, useState } from 'react';
import '../App.css'
import { formReducer } from "../Redux/reducer";
// import { Transulator } from './Transulator';
export const BioData = ()=>{
    const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [files, setFiles] = useState();
  const imageChange = (e) => {  
    e.preventDefault();
    setSubmitting(true);
    console.log(e.target.files);
    setFiles(URL.createObjectURL(e.target.files[0]));         
  };
    const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);    
  }
  const handleChange = event => {   
    event.preventDefault();
    setSubmitting(true);
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })    
  }
    const styles = {    
    preview: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 130 },    
  };
  return(
    <div>
       <h1>Bio Generator</h1>   
    <div className="App">   
    
<div>
<h2>Options</h2>      
       <fieldset className='fieldset' >          
          <label >   
          <div className='cbox'>         
            <p>Myfile</p>                                                                                   
            <input className='text1' type="file"  onChange={imageChange} />            
            </div> 
          </label>                  
        </fieldset>     
        <fieldset className='fieldset' >
          <div>
          <label>
          <div className='cbox'>  
            <p>Name</p>
            <input onChange={handleChange} className='text' name="name" value={formData.name || ''}/></div>
          </label>
          </div>
          <div>
          <label>   
          <div className='cbox'>        
            <div className='sec'>
            <p>Gender</p>
            <select className='select' name="gender" onChange={handleChange} value={formData.gender || ''}>  
                <option value="">-select-</option>              
                <option value="male">male</option>
                <option value="female">female</option>                
            </select>
            </div>
            <button className='button' type="button" >Random Name</button>  
            </div>
          </label>                
          </div>          
        </fieldset>
        <fieldset className='fieldset' >          
          <label>   
          <div className='cbox'>  
          <input onChange={handleSubmit} type="checkbox"/>                                                  
            <p>Location</p>                     
            <input className='text' type="text" name="location" onChange={handleChange}  step="1" value={formData.location || ''}/>
            <button className='button' type="button" >Random Location</button>    </div> 
          </label>                  
        </fieldset>
        <fieldset className='fieldset1'  >
          <div>
          <label>   
             <div className='cbox'>     
             <input onChange={handleSubmit} type="checkbox"/>  
            <p>School</p>            
            <input className='text' type="text" name="school" onChange={handleChange} step="1" value={formData.school || ''}/>
            <button className='button' type="button" >Random School</button>   </div> 
          </label>                                
          </div>
          <div>
          <label> 
          <div className='cbox'>      
            <p>Major</p>            
            <input className='text' type="text" name="major" onChange={handleChange} step="1" value={formData.major || ''}/>
            <button className='button' type="button" >Random Major</button> </div>     
          </label>                                
          </div>          
        </fieldset>
        <fieldset className='fieldset' >          
          <label>       
          <div className='cbox'>
            <input onChange={handleSubmit} type="checkbox"/>  
             <p>Occupation</p>                                       
            <input className='text' type="text" name="occupation" onChange={handleChange} step="1" value={formData.occupation || ''}/>
            <button className='button' type="button" >Random Occupation</button>  </div>    
          </label>                 
        </fieldset>
        <fieldset className='fieldset' >          
          <label>                               
            <div className='cbox'>
            <input onChange={handleSubmit} type="checkbox"/>      
          <p>Religious Background</p></div>
            <textarea className='textarea' type="textarea" name="religion" onChange={handleChange} step="1" value={formData.religion || ''}/> <br />
            <button  type="button" >Random Religion</button>     
          </label>                 
        </fieldset>
        <fieldset className='fieldset' >                 
          <label>
          <div className='cbox'>
          <input onChange={handleSubmit} type="checkbox"/>        
          <p>Reason for meeting with missionaries</p></div>            
          <textarea className='textarea' type="textarea" name="message" onChange={handleChange} step="1" value={formData.message || ''}/>
          </label>                       
        </fieldset>             
        <fieldset className='fieldset' >         
        <button className='button1' type="button" >Restoration</button>
        <button className='button2' type="button" >Plan of Salvation</button>
        <button className='button3' type="button" >Gospel of Christ</button>
        <button className='button4' type="button" >Law of Chastity</button>
        <button className='button5' type="button" >Word of Wisdom</button>
        <button className='button6' type="button" >Any Lesson</button>           
        </fieldset>       
</div>
<div>   
<h2 style={{minWidth:'200px'}}>Result</h2>    
      {submitting &&
        <div>                 
          <div className='result'>
          <div>
          <img src={files} style={styles.image}
              alt="picture" />
            </div>                    
            {Object.entries(formData).map(([name, value]) => (
              <p key={name}><strong>{name}</strong>: {value.toString()}</p>
            ))}            
          </div>         
          {/* <Transulator/> */}
        </div>
      }
      </div>
    </div>
    </div>   
  )
}
