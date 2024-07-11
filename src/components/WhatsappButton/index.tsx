import { WhatsappWrapper } from "./styles";
import WhatsAppIcon from '../../assets/images/whatsapp.png';

const WhatsappButton = () => {


    return(
        <WhatsappWrapper href="https://wa.me/558599996895?text=lindomarcorretordeimoveis">
                <img src={WhatsAppIcon} alt="" className="whatsapp-icon"/>
                <span className="whatsapp-text">Whatsapp</span>
                <span className="whatsapp-number">(88) 99317-0211</span>
            </WhatsappWrapper>
    )

}

export default WhatsappButton;


