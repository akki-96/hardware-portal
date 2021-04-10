
import React from "react";
import "./contact.css"
import swt from './swt.jpg';
import logo from "./logo.png"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import BusinessIcon from '@material-ui/icons/Business';

const Contact =() =>{
    return (
        <>
         <div className="container">
             <h1>Contact With Us</h1>
             <p>We would love to respond to your queries and help you to succeed.<br />Feel free to get in touch with us  : -)</p>
             <div className="contact-box">
             <div className="contact-left">
                 <h3>Sent your request</h3>
                 <form>
                     <div className="input-row">
                     <div className="input-group">
                     <label>Name</label>
                     <input type="text" placeholder="Enter name" />
                     </div>
                     <div className="input-group">
                     <label>Phone Number</label>
                     <input type="text" placeholder="Enter phone number" />
                     </div>
                     </div>
                     <div className="input-row">
                     <div className="input-group">
                     <label>Email</label>
                     <input type="email" placeholder="Enter email" />
                     </div>
                     <div className="input-group">
                     <label>Subject</label>
                     <input type="text" placeholder="Product name" />
                     </div>
                     </div>  
                     <label>Message</label> 
                     <textarea rows="5" placeholder="Your message" />   

                     <button type="submit">SEND</button>               
                 </form>
             </div>
             <div className="contact-right">
                 <h3>Reach Us</h3>
                 <table>
                     <tr>
                         <td><EmailIcon className="emailIcon" /></td>
                         <td>akhileshsin97@gmail.com</td>
                     </tr>
                     <tr>
                         <td> <PhoneIphoneIcon className="phoneIcon" /></td>
                         <td>7905415708, 9198212972</td>
                     </tr>
                     <tr>
                     
                         <td><BusinessIcon className="addressIcon"/></td>
                         <td>House no - 189, 2nd Floor, MunsiRam Nagar Colony <br/> New Delhi India  </td>
                     </tr>
                    
                 </table>
                 <img className="contact-logo" src={logo} alt="Logo" />
             </div>
             </div>
         </div>
         <div className="footer">
         <div className="div1">

                 <div className="div12">
                 <img className="pos" src={logo} alt="Logo" />
                 <p>© 2020 Hardware Selling Portal Pvt Ltd <br/>All rights reserved. (Terms)</p>
                 </div>
                 
         </div>
         <div className="div2">
                 <p>For any queries, you can reach us at <br /><a href="support@hardwareportal.com">support@hardwareportal.com</a></p>
         </div>
         <div className="div3">
                 <p>Follow us on</p>
                 <FacebookIcon className="fbIcon" />
                 <InstagramIcon className="instaIcon"/>
                 <TwitterIcon className="twiterIcon"/>
                 <YouTubeIcon className="youIcon" />
         </div>
         </div>
        </>
    )
}
export default Contact;
