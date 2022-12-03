import styled from 'styled-components'

export const Container = styled.div`
  .button-fale{
    font-size: 18px;
    font-weight: bold;
    color: var(--white);
    form{
      display: flex;
      flex-direction: column;
    }
  }  
  `
  export const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    background: '#4d4d4d',
    color: '#FAF1F1',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '2rem',
    display: 'flex',
    'flex-direction': 'column',
    height: 'auto',

  };