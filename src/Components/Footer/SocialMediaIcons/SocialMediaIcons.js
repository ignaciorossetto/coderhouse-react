import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import './SocialMediaIcons.css'

function SocialMediaIcons() {
  return (
    <div className="d-flex flex-row justify-content-center">
      <a href='#'>
        <WhatsAppIcon className="m-2 wappIcon" style={styles.socialMediaStyle}/>
      </a>
      <a href='#'>
        <FacebookOutlinedIcon className="m-2 facebookIcon" style={styles.socialMediaStyle}/>
      </a>
      <a href='#'>
        <InstagramIcon className="m-2 instagramIcon" style={styles.socialMediaStyle}/>
      </a>
    </div>
  );
}


const styles = {
    socialMediaStyle: {
        height: '50px',
        width: '50px'

    }
    
}

export default SocialMediaIcons;
