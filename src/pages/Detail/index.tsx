import Header from '../../components/Header';
import {DetailContainer, DetailTextContainer,PriceWrapper,TitleWrapper,LocalizationWrapper,DetailsWrapper,DescriptionWrapper,
MoreDetailsWrapper,ContactDetailrapper, ContactModalDetailWrapper, DetailContent, SessionFooter} from './styles';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import './styles.css'
import {ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import ImageSlider from '../../components/ImageSlider';
import {BsShare} from 'react-icons/bs'
import {IoCloseOutline} from 'react-icons/io5'
import WhatsappButton from '../../components/WhatsappButton';
import Footer from '../../components/Footer';
import {SlArrowRight} from 'react-icons/sl';
import {AiFillStar} from 'react-icons/ai';
import { findProperty } from '../../services/property';
import { Property } from '../../types/property';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemSlide, Slides } from '../../types/image';
import PageNotFound from '../../components/PageNotFound';
import { ErrorBoundary } from 'react-error-boundary';
import { newLead } from '../../services/lead';
import { phone } from './masks';
import Loading from '../../components/Loading';


type Error = {
    fieldName:string;
    message:string;
}

const Detail  = () => {

 
    const params = useParams();
    
    const [openModalContact,setOpenModalContact]=useState(true);
    const [property, setProperty]= useState<Property>();
    const [errors,setErrors]=useState();
    const [errorsLead, setErrorsLead] = useState<Error[]>([]);
    const [otherError, setOtherError] = useState(false);
 
    const [emptyValue,setEmptyValue]= useState(false);
    const [successMessage, setSuccessMessage] = useState(false); 
    const [loadingAddLead, setLoadingAddLead]=useState(false);


    //pega propriedade com id
    const getProperty = async() => {             
        const dataProperty = await findProperty(`${params.propertyId}`);
        if(dataProperty.status === 200){  
            console.log(dataProperty.status) 
            setProperty(dataProperty.data as Property)           
          } 
          if(dataProperty.response.status === 404){ 
            console.log(dataProperty.response.data.error)
            setErrors(dataProperty.response.data.error);           
          }
          if(dataProperty.response.status === 400){    
            setErrors(dataProperty.response.data.error);
             
          }            
    }

    useEffect(() => {
        getProperty();
        
    }, [`${params.propertyId}`]);
   
 

  let imgs :Array<ItemSlide>= [];
  property?.images?.map((image)=> (
    imgs.push(
        {
            id: image.id,
            url: image.url,
            idTenant: image.idTenant
          } ,
        
      ) 
  ))


  //lead service
  const [form,setForm]=useState<any>({
    name:'',
    email:'',
    phone:'',
    message:''
    
});

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
        phone(e)
      
    }
   
}
  
 //submete fortmulario do lead
  const handleSubmitLead = async (e:any) =>{   
    e.preventDefault()
    
    let emptyValues=Object.values(form).some(obj => obj === '');
    setEmptyValue(emptyValues);
  
    
    if(!emptyValues){
    setLoadingAddLead(true);
       
     const data = await newLead(form['name'],form['email'],form['phone'],form['message'],property?.id as number,property?.tenant.id as number) 
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

 

    const handleOpenModalContact = ()=> {
      setOpenModalContact(openModalContact => !openModalContact);
      if(!openModalContact){
        setEmptyValue(false)
        setErrorsLead([]);
        setSuccessMessage(false)
      }
    }


    const [copyUrl,setCopyUrl]= useState(false); 
    const handleCopyUrl = () =>{
        var url_atual = window.location.href;   
        navigator.clipboard.writeText(url_atual);
        setCopyUrl(true);
        setTimeout(()=> {
            setCopyUrl(false);
        },2000)
    }



    const ErrorHandler = () => {
        return <PageNotFound/>;
      }
  


    function handleChange(e: any): void {
        const field= e.target.getAttribute('name');
        const value= e.target.value
        setForm({ ...form,
            [field]:value,
        });
  
    }
 
    const getParamHeader = (goal:string) => {
        return goal;
      }
    let emptyValues=Object.values(form).some(obj => obj === '');

    return(
        <>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
        { !errors ? 
        <DetailContainer>
               <Header onChange={getParamHeader}/>
            
               <div className='links-desktop-container'>
                <div className='links-desktop-wrapper'>
                    <ul className='list-links-desktop-wrapper'>
                            <li className='item-links-desktop-detail'>Home</li><SlArrowRight className='arrow-link-detail'/>
                            <li className='item-links-desktop-detail'>Detalhes</li><SlArrowRight className='arrow-link-detail'/>
                            <li className='item-links-desktop-detail ellipse-item'>{property?.address.city.name || 'cidade'}</li><SlArrowRight className='arrow-link-detail '/>
                            <li className='item-links-desktop-detail last-item-links-desktop-detail  ellipse-item'>{property?.address.district || 'bairro'}</li>
                    </ul>
                
                </div>           
                </div>
            
                   <DetailContent>
                    <div className='right-left-container-flex'>
                        <div className='main-content-detail-container'>
                        <ImageSlider items={imgs} goal={property?.goal as string}/>
                        <DetailTextContainer>
                            <PriceWrapper>
                                <div className='price-star-wrapper'>
                                    <span>R$ {property?.price}</span>
                                        <div className='star-detail-wrapper'>
                                            <AiFillStar className='star-detail'/>
                                            <AiFillStar className='star-detail'/>
                                            <AiFillStar className='star-detail'/>
                                            <AiFillStar className='star-detail'/>
                                        </div>
                                        </div>
                                    <BsShare className='share-icon-detail' onClick={handleCopyUrl}/>
                            </PriceWrapper>
                            {copyUrl &&
                            <div className='copy-url-wrapper'>
                                <span className='copy-url-text'>Link copiado!</span>
                            </div>
                            }
         

                    <LocalizationWrapper>
                        <div className='localization-street-district'>
                        <span>{property?.address.street}, {property?.address.number}</span>      
                        </div>

                        <div className='localization-city-state-cep'>
                        <span>{property?.address.district}, </span> 
                        <span>{property?.address.city.name}, </span>
                        <span>{property?.address.city.state.name} </span>                       
                        </div>
                        <span>{property?.address.cep}</span>
                    </LocalizationWrapper>

                    <DetailsWrapper>
                        <div className='detail-wrapper'>
                        <span className='detail-value'>{property?.bathRooms}</span>
                        <span className='detail-title'>Banheiros</span>
                        </div>
                                <div className='diviser'></div>
                                <div className='detail-wrapper'>
                                <span className='detail-value'>{property?.numberRooms}</span>
                                <span className='detail-title'>Quartos</span>
                                </div>
                                <div className='diviser'></div>
                                <div className='detail-wrapper'>
                                <span className='detail-value'>{property?.area}m2</span>
                                <span className='detail-title'>Const</span>
                                </div>
                        <div className='diviser'></div>
                        <div className='detail-wrapper'>
                        <span className='detail-value'>{property?.areaTotal}m2</span>
                        <span className='detail-title'>Total</span>
                        </div>                       
                    </DetailsWrapper>
                    <TitleWrapper>
                        <h2>{property?.name}</h2>
                </TitleWrapper>
                    <DescriptionWrapper>
                        <h2>Descrição</h2>
                        <p>{property?.description}</p>
                    </DescriptionWrapper>
                <MoreDetailsWrapper>
                    <h2>Mais Detalhes</h2>
                        <ul>
                             <li><div className='more-detail-dot-label-wrapper'><div className='dot-iptu'></div><span className='more-detail-label'>Iptu</span></div><span className='more-detail-value'>R${property?.iptu}</span></li>
                             <li><div className='more-detail-dot-label-wrapper'><div className='dot-vacancies'></div><span className='more-detail-label'>vagas</span></div><span className='more-detail-value'>R${property?.vacancies}</span></li>
                             <li><div className='more-detail-dot-label-wrapper'><div className='dot-condominium'></div><span className='more-detail-label'>Condomínio</span></div><span className='more-detail-value'>R${property?.condominium}</span></li>                               
                        </ul>
                </MoreDetailsWrapper>
           </DetailTextContainer> 
           <ContactDetailrapper>
            <button onClick={handleOpenModalContact}>Fale Conosco</button>
           
          </ContactDetailrapper> 
        
            <WhatsappButton/>   
            </div>

            <div className='modal-desktop-container'>
            <ContactModalDetailWrapper openModal={openModalContact}>
            <div className='header-modal-contact-wrapper'>
            <h1>Titulo da propriedade</h1>
            <IoCloseOutline onClick={handleOpenModalContact} className='close-button-modal-contact'/>
            </div>
                <h2>Mais informações sobre este imóvel</h2>
                <span className='cod-property'>Cod. 1</span>

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
                <div className='other-errorModal'>Erro Inesperado</div>
                 }
            {successMessage   ? <div className="messageModal">
                    <span className='success'>Enviado com sucesso!</span>
                    </div>: ''}
                           
            </ContactModalDetailWrapper>  

            </div>
            </div>
            </DetailContent> 
            { otherError &&   
                <div className='other-error'>Erro Inesperado</div>
                 }
            {successMessage   ? <div className="message">
                    <span className='success'>Lead salvo com sucesso!</span>
                    </div>: ''}
            <SessionFooter>
            <Footer/> 
            </SessionFooter>                         
        </DetailContainer>
                        :<PageNotFound/>}
                        </ErrorBoundary>
                        </>
    )
}

export default Detail;