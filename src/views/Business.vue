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
        <h1 class="fw-bold text-white">Capitals Loans</h1>
        <div class="links text-white d-inline-flex">
          <router-link to="/" class="text-decoration-none text-white"
            >Home
          </router-link>

          <p class="ms-1">- Capital Loans</p>
        </div>
      </div>
    </div>

    <div class="row m-0 my-5 w-75 p-0 mx-auto">
      <div class="col-lg-6 col-md-6 col-sm-12">
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
      <div class="col-lg-6">
        <p class="mb-5">
          <span class="fw-bold">CashGlobell</span> Capital offers you quick
          access to flexible loans to grow your business. No collateral
          required.
        </p>
        <img src="../assets/Images/CapitalBusiness.png" alt="" />
      </div>
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
}
</style>
