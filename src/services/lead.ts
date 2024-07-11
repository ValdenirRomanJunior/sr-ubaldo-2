import api from "../utils/requests";

export const newLead = (name:string, email: string, phone:string, message:string, propertyId:number, tenantId:number) => {
    return api.post('/leads/saveSite',{name, email,phone,message,propertyId,tenantId})
                                                 .then(response =>{
                                                  return response
                                                    
                                                 }).catch((error) =>{
                                                    return error
                                                   
                                                });
}

export const newLeadHome = (name:string, email: string, phone:string, message:string, url:string) => {
    return api.post('/leads/saveLeadHome',{name, email,phone,message,url})
                                                 .then(response =>{
                                                  return response
                                                    
                                                 }).catch((error) =>{
                                                    return error
                                                   
                                                });
}