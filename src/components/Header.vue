<template>
  <div id="header" class="px-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#"
          ><img src="../assets/Images/cashglobell.png" alt=""
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li class="nav-item mx-2">
              <router-link
                to="/"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Home</router-link
              >
            </li>
            <li class="nav-item mx-2">
              <router-link to="/business" class="nav-link" href="#"
                >Business</router-link
              >
            </li>
            <li class="nav-item mx-2 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Payments
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link to="register" class="dropdown-item" href="#"
                    >Receive Money</router-link
                  >
                </li>
                <li>
                  <router-link to="login" class="dropdown-item" href="#"
                    >Send Money</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item mx-2 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About us
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link to="/about" class="dropdown-item" href="#"
                    >who we are</router-link
                  >
                </li>
                <li>
                  <router-link to="/login" class="dropdown-item" href="#"
                    >Mission / vision</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item mx-2 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accounts
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link to="register" class="dropdown-item" href="#"
                    >Register</router-link
                  >
                </li>
                <li>
                  <router-link to="login" class="dropdown-item" href="#"
                    >Login</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // hover: false,
    };
  },
  methods: {
    // mouseEnter() {
    //   this.hover = !this.hover;
    // },
  },
};
</script>
<style lang="scss" scoped>
* {
  transition: 200ms ease;
}
// @import "../../assets/variable.scss";
// .navbar {
//   background-color: $background-color;
//   font-family: $font-family;
// }
#header .navbar-nav .account {
  transition: 200ms ease;
  .minus {
    visibility: hidden;
    font-size: 1.3rem;
  }
  ul {
    z-index: 111;
    display: none;
    transition: 200ms ease;
  }
  &:hover ul {
    display: block;
  }
  &:hover .minus {
    visibility: visible;
  }
  &:hover .plus {
    display: none;
  }
}
.navbar .collapse ul li {
  cursor: pointer;
}
@media (min-width: 315px) and (max-width: 768px) {
  .navbar {
    padding: 8px !important;
    .navbar-brand {
      width: 80px;
    }
  }
  #header .container-fluid .navbar-brand {
    font-size: 1rem !important;
  }
  #header .container-fluid .navbar-brand span {
    font-size: 1rem !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .navbar {
    padding: 12px !important;
  }
  #header .container-fluid .navbar-brand {
    font-size: 1.3rem !important;
  }
  #header .container-fluid .navbar-brand span {
    font-size: 1.3rem !important;
  }
}
@media (min-width: 280px) and (max-width: 653px) {
  #header {
    padding: 10px 0 !important;
  }
  .navbar {
    padding: 8px !important;
  }
  #header .container-fluid .navbar-brand {
    font-size: 0.8rem !important;
  }
  #header .container-fluid .navbar-brand span {
    font-size: 0.8rem !important;
  }
}
</style>
