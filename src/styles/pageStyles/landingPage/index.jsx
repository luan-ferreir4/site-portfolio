import styled from 'styled-components';

export const Landing = styled.main`
  height: 100vh;
  padding-bottom: 10px;

  
  .landingGreeting{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: 15%;
    margin-bottom: 30%;
    height: 12%;
  }
  .landingGreeting__item {
    font-weight: var(--font-w-xlight);
    font-size: var(--font-size-xlarge);
  }
  .landingGreeting__item--img{
    margin-bottom: 5px;
  }
  .landingIntro__item::before{
    content: '>> ';
  }

  .sectionTitle{
    font-weight: var(--font-w-xlight);
    font-size: var(--font-size-large);
     margin-left: 6vw;
  }
  .sectionTitle::before {
    content: '>> ';
  }

/*--------------Section One----------------------*/
  .landingIntro {
    height: 45%;
    margin-left: 5vw;
  }

  .landingIntro__item {
    margin-bottom: 28px;
    font-size: 23px;
    font-weight: var(--font-w-xlight);
    font-size: var(--font-size-medium);
  }
  


  @keyframes spin {
    from{
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

 
  .sectionOne_bkg{
    position: absolute;
    z-index: -1;
  
    left: 0;
    width: 150%;
    height: auto;

    top: 380px;
    left: 22vw;

    animation: spin 200s linear infinite;
  }

  
/*--------------Section Two----------------------*/
  .sectionTwo{
   height: 1050px;
  }
  .landingResume__text{
    margin: 8% 6vw;
    font-size: var(--font-size-small);
  }
  .sectionTwo_bkg{
    position: absolute;
    z-index: -1;
  
    left: 0;
    width: 86%;
    height: auto;

    top: 136px;
    left: -2vw;
  }


/*--------------Section Three----------------------*/
  .sectionThree{
   height: 300px;
  }
  .projectContainer{
    height: 100%;
    width: 90vw;
    margin: 5% auto 0;
  }

  .projectContainer__title{
    font-size: var(--font-size-large);
    font-weight: var(--font-w-xlight);
    border-bottom: 1px solid var(--palette-one-white);
    margin: 0 40% 0 2vw;
    height: 12%;
  }
  .title__right{
    text-align: right;
    margin: 0 2vw 0 40%;
  }

  .projectContainer__list{
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    list-style: none;
    padding-inline: 0;
    margin-left: 2%;
  }
  .projectContainer__listItem{
    width: fit-content;
    padding-bottom: 6px;
    border-bottom: 1px solid transparent;
    &:hover {
    border-bottom: 1px solid var(--palette-one-white);
    transition: 0.2s;
    }
  transition: 0.2s;
  }
  .projectContainer__listItem:hover{
    color: var(--palette-one-gray-l);
    border-bottom: 1px solid var(--palette-one-white);
    transition-delay: 100ms;
  }

/*--------------Section Four----------------------*/
  .sectionFour{
    height: 600px;
    padding-top: 15%;
  }

  .contactList{
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    list-style: none;
    padding-inline: 0;

    margin: 15% auto;
    margin-left: 8%;
  }

  .contactList__item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .contactList__item img{
    width: 48px;
    margin-right: 5%;
  }

  .sectionFooter {
    height: 20%;
    width: 40%;
    margin: auto;
    margin-top: 8%;
  }


@media (min-width: 680px) {
/*--------------Section One 680px----------------------*/
    .sectionOne{
      height: 1010px
    }
    .landingGreeting{
      margin: 8% auto;
    }

    .landingIntro__item {
      margin-bottom: 28px;
      font-size: var(--font-size-xlarge);
      letter-spacing: 3px;
    }

    .sectionOne_bkg{
      width: 64%;
      top: 30%;
      left: 65%;
  }

/*--------------Section Two 680px----------------------*/

  .landingResume__text{
    width: 60%;
    margin: 2% 2% 8% 35%;
    font-size: var(--font-size-medium);
  }
  .sectionTwo_bkg{
    position: absolute;
    z-index: -1;
  
    width: 30%;
    height: auto;

    top: 8%;
    left: 0%;
  }

/*--------------Section Three 680px----------------------*/
  .sectionThree{
   height: 400px;
  }
  .projectContainer__title {
    height: 35px;
  }
  .projectContainer__list{
    height: 365px;
    flex-direction: row;
    align-items: center;
  }

/*--------------Section Four 680px----------------------*/
  .contactList{
    margin: 20px auto;
    margin-left: 8%;
  }
  .contactList__item{
    margin-bottom: 30px;
  }
  .contactList__item img{
    width: 42px;
  }

  .sectionFooter {
    height: 10%;
    width: 20%;
  }
}

 
@media (min-width: 1024px) {
    .landingIntro {
      margin-top: 80px;
      padding: 0 0 0 55px;
    }
}
`;
