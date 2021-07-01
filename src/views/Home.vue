<template>
  <div class="home">
    <div class="">
      <header>
        <div class="flex justify-between container mx-auto py-10">
          <img class="w-64" alt="Vue logo" src="../assets/images/simple-medicare.png">
          <img class="w-64" alt="Vue logo" src="../assets/images/phone.png">
        </div>
      </header>

      <section id="lead">
        <div class="flex flex-col md:flex-row relative">
          <img class="hidden lg:block max-h-full" src="../assets/images/smile.png" alt="smiling"/>
          <Lead class=" h-full max-h-full w-full lg:flex lg:h-5/6 lg:w-5/12 lg:absolute lg:-bottom-32 lg:right-20"></Lead>
        </div>
      </section>

      <section id="quote">
        <div class="text-left p-20">
          <h2 class="text-blue text-4xl font-bold mb-3">Find & Compare Your Local <br>Plans and Providers Fast</h2>
          <p class="leading-relaxed">Let us help you find the right Medicare Supplement Coverage plan for you. In less than <br>1 minute you could be saving your deductibles, co-pays and Medicare bills.</p>
        </div>
      </section>

      <section id="learn-more">
        <div class="text-center text-white flex flex-col md:flex-row bg-light-blue">
          <div class="flex-1 p-10 learn-more-block mb-2 md:mb-0 md:mr-1">
            <h4 class="text-xl md:text-2xl font-bold">Medicare Part A</h4>
            <a href="#" class="underline hover:no-underline my-auto">Learn More</a>
          </div>
          <div class="flex-1 p-10 learn-more-block mb-2 md:mb-0 md:mr-1">
            <h4 class="text-xl md:text-2xl font-bold">Medicare Supplements</h4>
            <a href="#" class="underline hover:no-underline my-auto">Learn More</a>
          </div>
          <div class="flex-1 p-10 learn-more-block">
            <h4 class="text-xl md:text-2xl font-bold">Perscription Plans</h4>
            <a href="#" class="underline hover:no-underline my-auto">Learn More</a>
          </div>
        </div>
      </section>
<!-- side-by-side sections -->
      <section>
        <div class="flex flex-col lg:flex-row bg-light-blue">
          <div class="image-side mb-3 border-b-2 border-white lg:border-b-0 lg:mb-0 ">
            <img class="w-full p-0 p-32 lg:h-full" src="../assets/images/doctor.png" alt="Doctor">
          </div>
          <div class="text-side ">
            <div class="max-w-md lg:max-w-full h-full m-auto flex flex-col justify-center lg:pr-60 py-20 items-start">
              <h2 class="text-blue text-4xl font-bold mb-3">Medicare Part A</h2>
              <p class="leading-relaxed mb-10">It is administered by the federal government. The plan has two parts: A and B. Part A is referred to as hospital insurance and covers care at hospitals (inpatient) and skilled nursing facilities as well as hospice care and some home health care. Part B is medical insurance and covers doctors’ services (at their offices and at hospitals), preventive care, and medical supplies.</p>
              <a class="btn text-center text-white font-bold text-center text-xl rounded-md" href="#">FIND PLANS</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="flex flex-col lg:flex-row bg-white-circles">
          <div class="text-side mb-3 border-b-2 border-gray lg:border-b-0 lg:mb-0">
            <div class="max-w-md lg:max-w-full h-full m-auto flex flex-col justify-center lg:pl-60 py-20 items-start">
              <h2 class="text-blue text-4xl font-bold mb-3">Medicare Supplements</h2>
              <p class="leading-relaxed mb-10">Recipients of Traditional Medicare can purchase Medicare supplements (also known as Medigap) from private companies. It is Used for health care costs not covered by Traditional Medicare (copayments, deductibles, etc.) Supplements correspond with different levels of coverage and work with with your original Part A and B benefits. You will pay an additional monthly premium for Medigap. (at their offices and at hospitals), preventive care, and medical supplies.</p>
              <a class="btn text-center text-white font-bold text-center text-xl rounded-md" href="#">FIND PLANS</a>
            </div>
          </div>
          <div class="image-side">
            <img class="w-full p-0 p-32 lg:h-full" src="../assets/images/nurse.png" alt="Doctor">
          </div>
        </div>
      </section>

      <section>
        <div class="flex flex-col lg:flex-row bg-light-blue">
          <div class="image-side mb-3 border-b-2 border-white lg:border-b-0 lg:mb-0">
            <img class="w-full p-0 p-32 lg:h-full" src="../assets/images/prescription.png" alt="Doctor">
          </div>
          <div class="text-side ">
            <div class="max-w-md lg:max-w-full h-full m-auto flex flex-col justify-center lg:pr-60 py-20 items-start">
              <h2 class="text-blue text-4xl font-bold mb-3">Prescription Plans</h2>
              <p class="leading-relaxed mb-10">It is administered by the federal government. The plan has two parts: A and B. Part A is referred to as hospital insurance and covers care at hospitals (inpatient) and skilled nursing facilities as well as hospice care and some home health care. Part B is medical insurance and covers doctors’ services (at their offices and at hospitals), preventive care, and medical supplies.</p>
              <a class="btn text-center text-white font-bold text-center text-xl rounded-md" href="#">FIND PLANS</a>
            </div>
          </div>
        </div>
      </section>
<!-- side-by-side sections end  -->

      <section>
        <div class="flex flex-col lg:flex-row">
          <div class="text-side-60 py-20 bg-blue flex flex-col justify-center items-center">
            <div class="max-w-md text-white flex flex-col items-start">
              <h2 class="text-4xl font-bold mb-3">Talk directly with a licensed agent in your area!</h2>
              <p class=" leading-relaxed mb-5">It is administered by the federal government. The plan has two parts: A and B. Part A is referred to as hospital insurance and covers care at hospitals (inpatient) and skilled nursing facilities as well as hospice care and some home health care. Part B is medical insurance and covers doctors’ services (at their offices and at hospitals), preventive care, and medical supplies.</p>
            </div>
          </div>
          <div class="image-side-40">
            <img class="w-full h-full" src="../assets/images/couple.png" alt="Doctor">
          </div>
        </div>
      </section>

      <footer>
        <div class="flex justify-around bg-dark-blue p-5 text-white">
          <p>Copyright © 2021 SimpleMedicareCoverage. All rights reserved</p>
          <div class="footer-links">
            <a href="#">Disclaimer</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>


    </div>
<!-- end container  -->
  </div>
<!-- end home  -->
</template>

<script>
// @ is an alias to /src
import Lead from '@/components/Lead.vue'

export default {
  name: 'Home',
  components: {
    Lead
  }
}
</script>

<style lang="scss">
// Colors 
// text
  .text-blue {
    color: #216bb5;
  }
//backgrounds
  .bg-light-blue {
    background-color: #ebf3fc;
    background-image: url(../assets/images/circles.png);
    background-repeat: no-repeat;
    background-position-x: 5%;
  }

  .bg-white-circles {
    background-color: #ffffff;
    background-image: url(../assets/images/circles-2.png);
    background-repeat: no-repeat;
    background-position: 95%;
  }

  .bg-light-blue-alt {
    background-color: #5686c1;
  }

  .bg-blue {
    background-color: #1159a2;
  }
  .bg-dark-blue {
    background-color: #506479;
  }

  .bg-dark-blue-alt {
    background-color: #125daa;
  }

  
// Sections
  #quote {
    background-image: url(../assets/images/background-image-doctor.png);
    background-size: cover;
    background-position: center;
  }

  .learn-more-block {
    @extend .bg-light-blue-alt;
  }

  .footer-links {
    a {
      &:not(:last-of-type) {
        &:after {
          content: '|';
          margin-right: 10px;
          margin-left: 10px;
        }
      }
    }
  }

// General 
  .btn {
    background-color: #d35c15;
    padding: 15px 40px;
    transition: ease 0.3s;
    &:hover {
      background-color: #1159a2;
    }
  }
  .text-side {
    flex: 0 0 100%;
    @media(min-width: 1024px) {flex: 0 0 50%;}
    &-60 {
      flex: 0 0 100%;
      @media(min-width: 1024px) {flex: 0 0 60%;}
    }
  }
  .image-side {
    flex: 1 1 100%;
    @media(min-width: 1024px) {flex: 1 1 50%;}
    &-40 {
      flex: 1 1 100%;
      @media(min-width: 1024px) {flex: 1 1 40%;}
    }
  }




</style>


