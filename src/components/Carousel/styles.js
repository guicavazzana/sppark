import styled from 'styled-components'

export const Container = styled.div`
.alice-carousel__stage{
    width: 100vw;
}

.sliderimg{
    width: 100vw;
    height: 20rem;  
    display: block;
    object-fit: cover;
}

.alice-carousel__dots-item.__active{
    background-color: var(--red);
    height: 0.5rem;
    width: 0.5rem;
}
.alice-carousel__dots{
    margin-top: 1rem !important;
}
.alice-carousel__dots-item{
    background: var(--white);
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 10px !important;
    &:hover{
        background: var(--red);
    }
}
`