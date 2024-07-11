import { PseudoSearchContainer } from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import {TfiLocationArrow} from 'react-icons/tfi';
import Modal from 'react-modal';
import { MouseEventHandler, useEffect, useState } from "react";
import {IoIosArrowBack} from 'react-icons/io'
import './styles.css'

import { createSearchParams, Link, useNavigate, useSearchParams } from "react-router-dom";
import { getTAllAddressRequest} from "../../services/property";
import Loading from "../Loading";

type Address={
  
        id: number,
        street: string,
        number: string,
        district: string,
        cep: string,
        city:{
            id: number,
            name: string,
            state:{
                id: number,
                name: string,
            }
        },
       
    
}

type City={
     id: number,
     name: string,
     state:{
     id: number,
     name: string,
}
}

const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname:any, params:any) =>
      navigate(`${pathname}/?${createSearchParams(params)}`);
  };
  
const PseudoSearch = () =>{

    const navigateSearch = useNavigateSearch();



    const[goal,setGoal]=useState('');
    const[type,setType]= useState('');
    const[name,setSearch]= useState('');

    const [address,setAddress]= useState<Address[]>([]);   
    const [cities,setCities]= useState<City[]>([]);

    const[loading, setLoading]=useState(false);
    


    const [modalIsOpen, setIsOpen] = useState(false);

    const  openModal=()=> {
      setIsOpen(true);
    }

  
   const  handleCloseModal=()=> {
    setSearch('');
    setSelectedSale(true)
    setSelectedRent(false)
  
      setIsOpen(false);
    }
    
    const [selectedRent,setSelectedRent]=useState(false);
    const [selectedSale,setSelectedSale]=useState(true);

   function selectedAfterGoalRent(e:any){
   setSelectedRent(true)
   setSelectedSale(false)
      
    }

    
   function selectedAfterGoalSale(e:any){
    setSelectedSale(true)
    setSelectedRent(false)
       
     }

    let toogleClassCheckRent = selectedRent ? ' activeRent': '';
    let toogleClassCheckSale = selectedSale ? ' activeSale':  '';

    const [url,setUrl]= useState(window.location.hostname);
    const getAllAddress = async () => {
        let params = new URLSearchParams(document.location.search);
        const data = await getTAllAddressRequest(url);
        setAddress(data.data);
    }

     useEffect(()=> {
        getAllAddress()
     },[])


     const getOnlyCities = () => {
        let newlist:City[]= [];
        address && address.map(x => {
            newlist.push({
                id: x.city.id,
                name: x.city.name,
                state:{
                    id: x.city.state.id,
                    name: x.city.state.name
                }
            });
            setCities(newlist);

        })
     }

     useEffect(()=> {
        getOnlyCities()
     },[address])

    
   
     
   
   
     //pega cidade da lista de sujestão 
     const [showCompomentSelectCity,setshowComponentSelectCity]= useState(false);
     const getCityFromList = (e:any) => {
       const value=e.currentTarget.value;
    
        setSearch(value)
        setshowComponentSelectCity(showCompomentSelectCity => !showCompomentSelectCity); 
        setshowComponentSelectDistrict(showCompomentSelectDistrict=> !showCompomentSelectDistrict);  
     }

    const onKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
        setshowComponentSelectCity(true)
        setshowComponentSelectDistrict(true)

    }

     //pega bairro da lista de sujestão 
    const [showCompomentSelectDistrict,setshowComponentSelectDistrict]= useState(false);
    const getDistrictFromList = (e:any) => {
        const value=e.currentTarget.value;
        const newValue  = value.substr(0, value.indexOf(','));
       
         setSearch(newValue)
         setshowComponentSelectDistrict(showCompomentSelectDistrict=> !showCompomentSelectDistrict); 
         setshowComponentSelectCity(showCompomentSelectCity => !showCompomentSelectCity);   
      }


     
     const getTypingSearch = () => {
        const lowerCased = name.toLowerCase();
    let newResult: City[]= [];
      newResult= cities.filter(city => (city.name.toLowerCase().match(lowerCased )));
    
      const uniqueCities= new Map();

      newResult.forEach((ct) => {
        if(!uniqueCities.has(ct.name)){
            uniqueCities.set(ct.name,ct);

        }
        if(name === '' || name === ct.name){
            uniqueCities.clear()
              
      }


      });
   
      if(uniqueCities.size>0){
      const a=[uniqueCities.keys()].map(x => {
        return(
           <>

           <input id="cityCheck" type="text" className="city-search"
            onClick={getCityFromList} value={x.next().value}/>
           </>
         
        )}) 
     return a;

        }else{
            return <li className="district-search">Não encontramos cidades com este nome</li>
        }
     }



     //bairro
     const getTypingDistrict = () => {
        const lowerCased = name.toLowerCase();
        let newResult: Address[]= [];
          newResult= address?.filter(adr => (adr.district.toLowerCase().match(lowerCased)));
        
          const uniqueDistricts= new Map();
    
          newResult?.forEach((ct) => {
            if(!uniqueDistricts.has(ct.district)){
                uniqueDistricts.set(ct.district,ct);
                uniqueDistricts.set(ct.city.name,ct);
                uniqueDistricts.set(ct.city.state.name,ct);
    
            }
       
            if(name === '' || name === ct.district){
                uniqueDistricts.clear()
                
          }
          });
       
          if(uniqueDistricts.size>0){

         
          const a=[uniqueDistricts.keys()].map(x  => {
            if(uniqueDistricts.size<0){
                         
            } 
                
            return( 
                <>
                <div className="district-wrapper">
                <input id="cityCheck" type="text" className="district-search"
                onClick={getDistrictFromList} value={`${x.next().value},${x.next().value},${x.next().value}`}/> 
             
                </div>
                </>
                     
            )})
        
         return a;
        }else{
            return <li className="district-search">Não encontramos bairros com este nome</li>
         
        }
       
         }


     useEffect(()=> {
        getTypingDistrict()
     },[name])

     
 
     const startLoading = () => {    
        navigateSearch('/properties',{'goal': `${goal}`, type: `${type}`, name:`${name}`});
   
    
        setLoading(true)
        setTimeout(()=> {
          
           // navigate(`/properties/${name}/${goal}/${type}`)
           // <Link  to={`/properties/${name}/${goal}/${type}`}></Link>
           setLoading(false);
         
        },1000)
     }


    return(
        <PseudoSearchContainer className="container"> 
            <TfiLocationArrow className="arrow-location-pseudoSearch"/>        
            <button onClick={openModal}>Estado, Cidade, Tipo, Finalidade...</button>
          
            <div className="input-rent-sale-wrapper-desktop">
            <label  onClick={selectedAfterGoalSale} className={`selectedClass${toogleClassCheckSale} label-class`} >
                    <input type="radio" name="goal" value="1" onChange={(e)=>setGoal(e.target.value)}/>                
                    <span className="sale-span">comprar</span>
                </label>

                <label  onClick={selectedAfterGoalRent} className={`selectedClass${toogleClassCheckRent} label-class`} >
                <input type="radio" name="goal" value="2"  onChange={(e)=>setGoal(e.target.value)}/>
                    <span className="rent-span">alugar</span>
                 
                </label>
                <label   >
                <select placeholder='tipo' name='type'  id='type' className="select-half"  onChange={(e)=>setType(e.target.value)}> 
                    <option value='' >Tipo</option>                
                    <option key='1' value='1'>Casa</option>
                    <option key='2' value='2'>Apartamento</option>
                    <option key='3' value='3'>Terreno</option>
                    <option key='4' value='4'>Comercial</option>           
                </select>
                </label>
                </div>
            <input placeholder="Estado, Cidade, Tipo, Finalidade..." type="text" className="input-search-desktop"  onKeyUp={onKeyUp} value={name.toLowerCase()} onChange={(e)=>setSearch(e.target.value)}/>
               <BiSearchAlt2 className="search-icon-pseudo-search" onClick={startLoading} />
                 

         
            <Modal
            isOpen={modalIsOpen}                  
            onRequestClose={handleCloseModal}                     
            className="Modal container"
            >

            <div className="header-modal-search">
                 <IoIosArrowBack  className="button-close-search-modal"  onClick={handleCloseModal}/>
                 <p>pesquisar</p>
            </div>
            <div className="input-rent-sale-wrapper">
                <label onClick={selectedAfterGoalSale} className={`selectedClass${toogleClassCheckSale}`}>
                    <input type="radio" name="goal" value="1" onChange={(e)=>setGoal(e.target.value)}/>
                    
                    <span className="sale-span">comprar</span>
                </label>

                <label  onClick={selectedAfterGoalRent} className={`selectedClass${toogleClassCheckRent}`} >
                <input type="radio" name="goal" value="2"  onChange={(e)=>setGoal(e.target.value)}/>
                    <span className="rent-span">alugar</span>
                </label>

                <label  onClick={selectedAfterGoalRent} className={`selectedClass${toogleClassCheckRent}`} >
                <select placeholder='tipo' name='type'  id='type' className="select-half"  onChange={(e)=>setType(e.target.value)}> 
                <option value='' >Tipo</option>                
                    <option key='1' value='1'>Casa</option>
                    <option key='2' value='2'>Apartamento</option>
                    <option key='3' value='3'>Terreno</option>
                    <option key='4' value='4'>Comercial</option>           
                </select>
                </label>
            </div>
            <div className="search-wrapper">
                <input type="text" placeholder="Digite um bairro ou cidade"  onKeyUp={onKeyUp} value={name} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className="result-list-wrapper">

            { (name !== '' && showCompomentSelectCity) ?  
                <ul>           
                    <h2 className="subtitle-search-list">Cidades</h2>
             
                {getTypingSearch()}  
                                        
                </ul>
                : ''}
   
                { (name !== '' && showCompomentSelectDistrict) ?          
                <ul>                     
                    <h2 className="subtitle-search-list">Bairros</h2>
                {getTypingDistrict()}         
                </ul>            
           :'' }

            </div>
               <div className="button-send-search-wrapper">
                {!loading?
                    <button onClick={startLoading} >pesquisar</button>
   
                :
                <button className="button-loading"><Loading/></button>
                }
           
               </div>
            </Modal>


                     <div className="result-list-wrapper-desktop">

                    { (name !== '' && showCompomentSelectCity) ?  
                    <ul>           
                        <h2 className="subtitle-search-list">Cidades</h2>
                
                    {getTypingSearch()}  
                                            
                    </ul>
                    : ''}

                    { (name !== '' && showCompomentSelectDistrict) ?          
                    <ul>                     
                        <h2 className="subtitle-search-list">Bairros</h2>
                    {getTypingDistrict()}         
                    </ul>            
                :'' }

                </div>
            
            </PseudoSearchContainer>
            
    )
}
export default  PseudoSearch;