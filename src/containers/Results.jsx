import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Results = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Typography component="div" style={{ border: '1px solid black', backgroundColor: '#ffffff', height: '100vh' }} />
      </Container>
    </React.Fragment>

    // <section className='results-container'>
    //   <div className='start'>
    //     <div className='start__label'>
    //       <p className='start__label-text'>sd</p>
    //       <img src='' alt='' className='start_logo-img' />
    //       <p href='' className='start_logo-text'>ds</p>
    //     </div>
    //     <div className='route'>
    //       <div className='route__line-one'>
    //         <div className='route__line-one-departure'>
    //           <p href='' className='route__departure-name'>sd</p>
    //           <p href='' className='route_departure-time'>sd</p>   
    //         </div>
    //         <div className='route__line-one-destination'>
    //           <p href='' className='route__departure-name'>sd</p>
    //           <p href='' className='route_departure-time'>sd</p>   
    //         </div>
    //       </div>
    //       <div className='route__line-two'>
    //         <p href='' className='route__line-two-scale'>sd</p>
    //       </div>
    //     </div>
    //     <div className='detail'>
    //       <p href='' className='detail__text'>sd</p>
    //       <img src='' alt='' className='detail__icon' />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Results;
