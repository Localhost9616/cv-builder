import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from '../src/components/resume'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
// import { ComponentToPrint } from './ComponentToPrint';

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Resume ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Print;