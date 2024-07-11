/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react'
import {CardWrapper,CardContent,CardContainer,MessageNoProperties,StatusProperty, InputRangeProperty,DetailsCardWrapper} from './styles';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs';
import {BiMap} from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import {HiHome} from 'react-icons/hi';
import Slider from "react-slick";

import { getPropertiesHome, searchProperties } from '../../services/property';
import { Property, PropertyPage } from '../../types/property';
import Pagination from '../Pagination';
import './carousel-styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import defaultImage from '../../assets/images/dillon-kydd-XGvwt544g8k-unsplash.jpg';



type Props={
    name:string
    goal:string;
    type:string;
 
}


const CardListItem = ({id,name,images,price,address,numberRooms,bathRooms, area, goal,statusProperty,onChange,close,error,booleanModal}: Property) =>{


    return(
        <CardContainer>
        <CardWrapper>               
              <CardContent>
                   <div className='image-card-property-home-wrapper'>                   
                    {images?.[0]?.url ?  <Link to={`/detail/${id}`} className='link-card-property-home'><LazyLoadImage effect='opacity' dir="vertical"  src={images?.[0].url } className='image-card-property-home'/> </Link>
                    :
                    <Link to={`/detail/${id}`} className='link-card-property-home'><LazyLoadImage effect='opacity' dir="vertical"  src={defaultImage} className='default-image-card-property-home'/> </Link>}
                    </div> 

                     <div className='price-wrapper'>{price}</div>  
                     <div className='type-wrapper'><HiHome/></div>    

                                <div className='text-wrapper-card'>
                                <Link to={`/detail/${id}`} className='title-wrapper-card-property'> <p className='title-card-property'>{name}</p><p className='title-card-property-cod'>Cod.{id}</p></Link>  
                                
                                <div className='localization-wrapper'>
                                <BiMap className='localization-icon'/> <p className='localization'>
                                {address.city.name}</p>

                                <p className='localization district-localization'>
                                {address.district}</p>
                                </div>
                                </div>
                  <DetailsCardWrapper>
                    <div className='details-bottom-card '><span className='value-detail-bottom'>{bathRooms}</span><span className='title-detail-bottom'>Banheiros</span></div>
                    <div className='details-bottom-card left-border'><span className='value-detail-bottom'>{numberRooms}</span><span className='title-detail-bottom'>Quartos</span></div>
                    <div className='details-bottom-card left-border'><span className='value-detail-bottom'>{area}</span><span className='title-detail-bottom'>m2</span></div>
                    <div className='details-bottom-card left-border'><span className='value-detail-bottom'>{goal}</span><span className='title-detail-bottom'>Finalidade</span></div>

                  </DetailsCardWrapper>
              </CardContent>       
      </CardWrapper>
      </CardContainer>
      

    )
}

const CardPropertyHome = (props: { url: string})=>{
   


    const [error,setError]= useState('');


    const [page, setPage] = useState<Property[]>();


    const getProperties = async () => {    
        const data= await getPropertiesHome(props.url);  
     
        if(data){     
            setPage(data.data as Property[]);
                               
        }
        if(data.response.status === 400){              
         }
    }

    useEffect (() =>{ 
 
        getProperties(); 
    },[])

   



    function SampleNextArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block'}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block'}}
            onClick={onClick}
          />
        );
      }

   

   const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
 
    
        responsive: [
               
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,             
                dots: false ,  
                arrows:false     
                           
              }
            },
        

            {
              breakpoint: 920,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,              
                dots: false,
                infinite: false,
                arrows:false

              }
            },
            {
              breakpoint: 580,
              settings: {                   
                slidesToShow: 1,
                slidesToScroll: 1,               
                dots: true,          
                infinite: true,
                                               
              }
            }
          ]
        };

    return(
        
        <Slider {...settings} 
               
       >
           {page && page?.map((property) => 
               <CardListItem   key={property.id} {...property as Property}/>
           )}
       
            
           </Slider>
           
    )

}

export default CardPropertyHome;