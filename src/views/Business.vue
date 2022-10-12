<template>
  <div id="business">
    <div class="content">
      <img
        src="../assets/Images/manThinking.png"
        class="w-100 h-5 position-absolute"
        style="height: 400px"
        alt=""
      />
      <div
        style="height: 400px"
        class="overlay d-flex flex-column justify-content-center align-items-center position-absolute w-100"
      >
        <h1 class="fw-bold text-white" data-aos="fade-up">Capitals Loans</h1>
        <div class="links text-white d-inline-flex">
          <router-link to="/" class="text-decoration-none text-white"
            >Home
          </router-link>

          <p class="ms-1">- Capital Loans</p>
        </div>
      </div>
    </div>

    <div class="row m-0 my-5 w-75 p-0 mx-auto">
      <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-left">
        <h1 class="fw-bolder mb-4">Capital to grow your business</h1>
        <div>
          <h3 class="fw-bolder">1. Confirm your eligibility</h3>
          <p>
            Confirm your eligibility for a loan by logging into your dashboard
            to see available offers.
          </p>
        </div>
        <div>
          <h3 class="fw-bolder">2. Choose an offer</h3>
          <p>Choose an offer that best matches your business needs.</p>
        </div>
        <div>
          <h3 class="fw-bolder">3. Receive the money</h3>
          <p>
            We review your choice and pay the money to your account in 1-2
            business days..
          </p>
        </div>
        <div class="btn btn-primary px-4 fw-bold">Get Loans</div>
      </div>
      <div class="col-lg-6" data-aos="fade-right">
        <p class="mb-5">
          <span class="fw-bold">CashGlobell</span> Capital offers you quick
          access to flexible loans to grow your business. No collateral
          required.
        </p>
        <img src="../assets/Images/CapitalBusiness.png" alt="" />
      </div>
    </div>
    <div>
      <figure>
        <div class="fixed-wrap">
          <div id="fixed">
            <div class="w-100 overlay p-4" style="height: 500px">
              <div class="row m-0">
                <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-left">
                  <h1 class="text-white fw-bold">Get Loans!</h1>
                  <p class="text-white">
                    Get loan as much as $5, 000 and pay gradually as low as $10
                    every month with just 3% interest. And you can still be
                    elegible for more loans anytime and anywhere.
                  </p>
                  <router-link to="login">
                    <button class="btn btn-success">Get Loan</button>
                  </router-link>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 m-auto">
                  <div class="contact-box m-auto" data-aos="zoom-in-up">
                    <div class="box">
                      <h5 style="margin-left: -150px">Call us</h5>
                      <h1 class="fw-bold">+1 223 (345) 3</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
#business {
  .content {
    height: 400px;
    .overlay {
      background: #000;
      opacity: 70%;
      // z-index: 1;
    }
  }
  .row {
    padding: 50px 0 !important;
    h3,
    h1 {
      font-weight: 900 !important;
    }
  }
  #fixed {
    background-image: url("../assets/Images/fifthImg.jpg");
    min-height: 500px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .overlay {
      background-color: #000;
      opacity: 80%;
      .contact-box {
        width: 300px;
        padding: 20px;
        height: 300px;
        background-color: rgb(252, 203, 6);
        transform: rotateZ(45deg);
        .box {
          width: 100%;
          height: 100%;
          border: 3px dashed #fff;
          h5,
          h1 {
            text-align: center;
            transform: rotateZ(-45deg);
            margin: 50px 0 0 -20px;
            color: #fff;
          }
        }
      }
    }
  }
}
@media (min-width: 200px) and (max-width: 450px) {
  #business {
    .row {
      padding: 20px !important;
      width: 100% !important;
      .col-lg-6 {
        margin: 40px 0;
        img {
          width: 300px;
          margin: auto;
        }
      }
      h3,
      h1 {
        font-weight: 600 !important;
      }
    }
    #fixed {
      min-height: 700px;
      .overlay {
        padding: 0 !important;
        height: 700px !important;
        .contact-box {
          width: 300px;
          padding: 20px;
          height: 300px;
          background-color: rgb(252, 203, 6);
          transform: rotateZ(45deg);
          .box {
            width: 100%;
            height: 100%;
            border: 3px dashed #fff;
            h5,
            h1 {
              text-align: center;
              transform: rotateZ(-45deg);
              margin: 50px 0 0 -20px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
