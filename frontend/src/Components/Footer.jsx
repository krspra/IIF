import React from 'react';

function Footer({ footerRef }) {  // Changed to lowercase 'footerRef'
  return (
    <div ref={footerRef} className=''>Footer</div>
  );
}

export default Footer;
