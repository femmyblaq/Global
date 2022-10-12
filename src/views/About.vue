<template>
  <div id="about">
    <div class="content">
      <img
        src="../assets/Images/forthImg.jpg"
        class="w-100 h-5 position-absolute"
        style="height: 400px"
        alt=""
      />
      <div
        style="height: 400px"
        class="overlay d-flex flex-column justify-content-center align-items-center position-absolute w-100"
      >
        <h1 class="fw-bold text-white">About us</h1>
        <div class="links text-white d-inline-flex">
          <router-link to="/" class="text-decoration-none text-white"
            >Home
          </router-link>

          <p class="ms-1">- Capital Loans</p>
        </div>
      </div>
    </div>
    <div class="second-content">
      <div class="row m-0 my-5">
        <div class="col-lg-6">
          <p>
            <span style="height: 4px; width: 15px" class="bg-warning"></span>
            About Us
          </p>
          <h1 class="mb-4">
            We’re a global stakeholder relations and consultancy.
          </h1>

          <p>
            But indeed we both accuse them, and by sending a just hatred worthy
            of the goiku, we lead the very ones who preside over flattery. Those
            who wanted to be softened and corrupted.
          </p>
          <p>
            We bring more than 8 years’ senior experience forging of
            collaborations across government.
          </p>
          <p>
            PayGlobel is a key project of GlobelMoney Group - and GlobelMoney
            Group is founded in 2014 with the first project name (GlobelMoney -
            Gain The Money Solutions) after 4 years of success in market the
            group decide to launch the 2nd project by the name (PayGlobel) to
            provide all the remaining services which we promise to provide in
            first project and we couldn't, GlobelMoney Group also find a
            GlobelBank - and aim to provide 4G Modern Banking the GlobelBank
            project is on final stage and group expect to launch worldwide in
            the middle of 2018. GlobelMoney Group Mission is Provide the all
            solutions for money, we strive to continue to be an outstanding
            worldwide money transfer, exchanging company, banking and we are
            leading the market in providing an excellent service or rates.
          </p>
        </div>
        <div class="col-lg-6 text-center">
          <img src="../assets/Images/manSitting.png" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <p>
            <span style="height: 4px; width: 15px" class="bg-warning"></span>
            Pricing
          </p>
          <h1>We’re ready to share our advice and experience.</h1>
        </div>
        <div class="col-lg-6">
          <P
            >The main difference between Statistic and Statistics is that the
            Statistic is a single measure of some attribute of a sample and
            Statistics is a study of the collection.</P
          >
        </div>
      </div>
    </div>
    <div class="third-content">
      <div class="container bg-light">
        <div class="row m-0 text-center">
          <div class="col-lg-4">
            <img src="../assets/Images/icons8-goal-50.png" alt="" />
            <h4>Tax Consultancy</h4>
            <p>
              This is one of many areas of professional service where our firm
              is well ahead of competition.
            </p>
          </div>
          <div class="col-lg-4">
            <img src="../assets/Images/icons8-goal-50.png" alt="" />
            <h4>Audit & assurance</h4>
            <p>
              People are only good as the tools they possess. So, to
              consistently deliver high-quality auditing services.
            </p>
          </div>
          <div class="col-lg-4">
            <img src="../assets/Images/icons8-goal-50.png" alt="" />
            <h4>Value Added Tax</h4>
            <p>
              We are providing and dealing with all sort of legal and
              professional services and matters to operate.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about {
  .content {
    height: 400px;
    .overlay {
      background: #000;
      opacity: 85%;
      // z-index: 1;
    }
  }
  .second-content {
    margin-top: 30px;
    h1 {
      font-weight: bolder;
    }
    .row {
      width: 80%;
      margin: 50px auto !important;
    }
  }
}
.third-content {
  .container {
    .row {
      .col-lg-4 {
        height: 300px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        &:hover {
          box-shadow: 0 0 10px 0 20px #ccc;
        }
      }
    }
  }
}
</style>
