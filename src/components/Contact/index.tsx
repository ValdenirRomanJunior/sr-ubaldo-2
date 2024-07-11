import { IoCloseOutline } from "react-icons/io5";
import { ContactButtonOpenWrapper, ContactContainer, ContactModalContainer } from "./styles";
import { useState } from "react";
import { newLead, newLeadHome } from "../../services/lead";
import Loading from "../Loading";
import { phone } from "./masks";

type Error = {
    fieldName:string;
    message:string;
}

const Contact = (props:{url:string}) => {
    console.log(props.url)

    const [errorsLead, setErrorsLead] = useState<Error[]>([]);
    const [otherError, setOtherError] = useState(false);
 
    const [emptyValue,setEmptyValue]= useState(false);
    const [successMessage, setSuccessMessage] = useState(false); 
    const [loadingAddLead, setLoadingAddLead]=useState(false);

    const [openModalContact,setOpenModalContact]=useState(true);

    const handleOpenModalContact = ()=> {     
        setOpenModalContact(openModalContact => !openModalContact);
        if(!openModalContact){
            setEmptyValue(false)
            setErrorsLead([]);
            setSuccessMessage(false)
          }
  
      }

        //lead service
  const [form,setForm]=useState<any>({
    name:'',
    email:'',
    phone:'',
    message:''
    
});

function handleChange(e: any): void {
    const field= e.target.getAttribute('name');
    const value= e.target.value
    setForm({ ...form,
        [field]:value,
    });

}

      const cleanForm = () =>{
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          ); 
          Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
          ); 
        setForm({ ...form,
            name:'',
            email:'',
            phone:'',
            message:''
            
        });
        }
        
        const handleKeyUp = (e: React.FormEvent<HTMLInputElement | any>) =>{      
            if(e.currentTarget.name === 'phone'){  
               phone(e);
              
            }
           
        
        }
     
       //submete fortmulario do lead
  const handleSubmitLead = async (e:any) =>{   
    e.preventDefault()
    
    let emptyValues=Object.values(form).some(obj => obj === '');
    setEmptyValue(emptyValues);
  
    
    if(!emptyValues){
    setLoadingAddLead(true);
       
     const data = await newLeadHome(form['name'],form['email'],form['phone'],form['message'],props.url);
      if(data.status === 201){
        cleanForm()         
        setSuccessMessage(true)
        setTimeout(()=> {
            setSuccessMessage(false)
        },3000)
        setLoadingAddLead(false)
 
      }
        if(data.response.data.errors){              
            setErrorsLead(data.response.data.errors);
            setSuccessMessage(false)
            setLoadingAddLead(false)
                                                                           
        } 
        else if(data.response.status === 404 || data.response.status === 403){
               
            setOtherError(true)
            setSuccessMessage(false)
            setLoadingAddLead(false)
           
            setTimeout(()=>{
                setOtherError(false)
            },2000)
        }

    }      
                                         
}
    return(
        <ContactContainer>
        <ContactButtonOpenWrapper>
        <button className="button-open-modal-home-contact" onClick={handleOpenModalContact}>Fale conosco</button>  
        </ContactButtonOpenWrapper>
        <ContactModalContainer openModal={openModalContact}>
                <div className='header-modal-contact-wrapper-component'>
            <h1>Mensagem</h1>
            <IoCloseOutline onClick={handleOpenModalContact} className='close-button-modal-contact-component'/>
            </div>
                <h2>Mande-nos uma Mensagem</h2>
             
                <form onSubmit={(e)=> {handleSubmitLead(e)}}> 
                    <div className='input-modal-wrapper'>    
                    <input type='text' placeholder="Rogerio" className="input-class" id="name" name="name" onChange={(e) => handleChange(e)} maxLength={41} onKeyUp={handleKeyUp}/>   
                    {errorsLead.map(x => { if(x.fieldName === 'name') return  <p className=' formField__error error-name'>{x.message}</p>})}
                    { emptyValue && form['name'] === '' ? <span className='formField__error error-name'>Este campo é requerido</span>: ''}
                    </div>   

                    <div className='input-modal-wrapper'>  
                    <input type='text'  placeholder="(85) 982251423" className="input-class" id="phone" name="phone" onChange={(e) => handleChange(e)} onKeyUp={handleKeyUp}/>
                    {errorsLead.map(x => { if(x.fieldName === 'phone') return  <p className=' formField__error error-phone'>{x.message}</p>})}
                    { emptyValue && form['phone'] === '' ? <span className='formField__error error-phone'>Este campo é requerido</span>: ''}
                    { form['phone'].length >1 && form['phone'].length <14 &&  <span className='formField__error error-phone'>Formato de telefone errado</span>}
                    </div>
                    <div className='input-modal-wrapper'>  
                    <input type='text' placeholder="ex: joao@gmail.com" className="input-class" id="email" name="email" onChange={(e) => handleChange(e)}  maxLength={40} onKeyUp={handleKeyUp}/>
                    {errorsLead.map(x => { if(x.fieldName === 'email') return  <p className=' formField__error'>{x.message}</p>})}
                    { emptyValue && form['email'] === '' ? <span className='formField__error'>Este campo é requerido</span>: ''}
                            </div>
                    <div className='input-modal-wrapper '>  
                    <textarea placeholder='Digite sua mensagem'  id="message" name="message" onChange={(e) => handleChange(e)} onKeyUp={handleKeyUp} ></textarea>
                    {errorsLead.map(x => { if(x.fieldName === 'message') return  <p className=' formField__error textarea-class' textarea-class>{x.message}</p>})}
                    { emptyValue && form['message'] === '' ? <span className='formField__error textarea-class'>Este campo é requerido</span>: ''}
                   </div>
                   {
                        loadingAddLead && <button className="button-send-lead" type='submit'><Loading/></button>
                    }
                    {
                        !loadingAddLead &&
                    <button  type='submit'>enviar</button>
                    }
                </form>
                { otherError &&   
                <div className='other-error'>Erro Inesperado</div>
                 }
            {successMessage   ? <div className="message">
                    <span className='success'>Enviado com sucesso!</span>
                    </div>: ''}
        </ContactModalContainer>
        </ContactContainer>
    )

}

export default Contact;