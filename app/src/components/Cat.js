import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {  fetchFail, fetchCat } from '../actions/catAction'
import styled from 'styled-components'


const Cat = (props) => {
  const { cat, isFetching, error, dispatch } = props
  useEffect(() => {
    props.fetchCat()

  }, []);

  const handleClick = () => {
    props.fetchCat();
  }

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching cat for ya!</h2>;
  }
  console.log('CAT',cat)
  return (
    <>
      <div>
         <h2> Cat id incase you want to go look for that one amazing cat again </h2> 
         <p>{cat.id}</p>
         <button onClick={handleClick}>Get a new cat</button>
         <div>
             <Pict src={cat.url}/>
         </div>
        
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    error: state.error
  };
};

const Pict = styled.img`
    padding-top:5px;
    height: 25%;
    width: 25%;

`

export default connect(mapStateToProps, { fetchCat })(Cat);