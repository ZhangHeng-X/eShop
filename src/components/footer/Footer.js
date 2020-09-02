import React from 'react';
import FootMenu from './footerMenu';
import FooterSocialInfo from './footerSocialInfo';
import FooterCopyright from './footerCopyright';
import './footer.css'

const Footer = () => (
<footer id='footer'>
    <FootMenu/>
    <FooterSocialInfo/>
    <FooterCopyright/>
</footer>
)

export default Footer;