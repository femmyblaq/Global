<template>
  <div id="login">
    <div class="box">
      <div class="brand">
        <img src="../assets/Images/cashglobell.png" class="w-50" alt="" />
      </div>
      <form class="form">
        <h5 class="mb-3 mt-4">Register To New Account</h5>
        <div class="row m-0">
          <div class="col-lg-6 pe-2">
            <div class="form-div">
              <input
                type="text"
                name=""
                id="fname"
                class="form__input"
                autocomplete="off"
                placeholder=" "
              />
              <label for="email" class="form__label">First Name</label>
            </div>
          </div>
          <div class="col-lg-6 ps-2">
            <div class="form-div">
              <input
                type="text"
                name=""
                id="lname"
                class="form__input"
                autocomplete="off"
                placeholder=" "
              />
              <label for="email" class="form__label">Last Name</label>
            </div>
          </div>
        </div>
        <div class="form-div">
          <input
            type="email"
            name=""
            id="email"
            class="form__input"
            autocomplete="off"
            placeholder=" "
          />
          <label for="email" class="form__label">Email</label>
        </div>
        <div class="form-div">
          <input
            type="password"
            name=""
            id="password"
            class="form__input"
            autocomplete="off"
            placeholder=" "
          />
          <label for="password" class="form__label">Password</label>
        </div>
        <div class="check-box">
          <input type="checkbox" id="checkbox" class="form__checkbox" />
          <label for="checkbox" style="font-size: 0.9rem"> Remember me</label>
        </div>
        <div class="button mt-2">
          <button type="submit" class="btn btn-dark btn-lg btn-block w-100 p-2">
            Register
          </button>
        </div>
        <div class="other-links mt-5">
          <router-link
            to="/register"
            style="font-size: 1rem"
            class="text-decoration-none text-dark"
            >Don't have an account yet? Create Account.</router-link
          >

          <router-link
            to="/register"
            style="font-size: 1rem"
            class="text-decoration-none text-dark"
            >Forgot Password?</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// Css Variables
$background-color: #fff;
$primary-color: #ff8c00;
$primary-lgt-color: #ffd580;
$border-color: #8c8984;
$brd-radius: 0.5rem;

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#login {
  font-family: sans-serif;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  background: url("../assets/Images/login-background.png") no-repeat;
  object-fit: fill;
  overflow: hidden;
  .box {
    background: #fff;
    height: 80vh;
    width: 400px;
    text-align: center;
    // display: grid;
    // justify-content: center;
    // align-items: center;
    padding: 30px;
    border-radius: $brd-radius;
    .form {
      width: 100%;
      position: relative;
      .form-div {
        position: relative;
        margin-bottom: 2rem;
        height: 48px;
      }
      &__input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        // height: 100%;
        border: 2px solid $border-color;
        font-family: inherit;
        font-size: inherit;
        color: #000;
        outline: none;
        background: none;
        padding: 0.6rem 1.25rem;
        border-radius: $brd-radius;

        &:hover {
          border-color: $primary-color;
        }
        &:focus {
          border-color: $primary-lgt-color;
        }
        &:active {
          background: none;
        }
      }

      &__label {
        position: absolute;
        left: 1rem;
        top: 0.8rem;
        padding: 0 0.5rem;
        color: #000;
        cursor: text;
        transition: top 200ms ease-in, left 200ms ease-in,
          font-size 200ms ease-in;
        background: #fff;
      }
    }

    .form__input:focus ~ .form__label,
    .form__input:not(:placeholder-shown).form__input:not(:focus)
      ~ .form__label {
      top: -0.5rem;
      font-size: 0.8rem;
      left: 0.8rem;
    }
  }
}

@media (min-width: 200px) and (max-width: 285px) {
  #login {
    background: url("../assets/Images/login-background-tab.png") no-repeat;
    .box {
      height: 75vh !important;
      width: 260px !important;
      padding: 10px;

      .other-links {
        margin-top: 15px !important;
      }
    }
  }
}

@media (min-width: 286px) and (max-width: 375px) {
  #login {
    background: url("../assets/Images/login-background-tab.png") no-repeat;
    .box {
      height: 70vh !important;
      width: 330px !important;
      padding: 15px;

      .other-links {
        margin-top: 15px !important;
      }
    }
  }
}

@media (min-width: 376px) and (max-width: 480px) {
  #login {
    background: url("../assets/Images/login-background-tab.png") no-repeat;
    .box {
      height: 60vh !important;
      width: 350px !important;
      padding: 15px;

      // .other-links {
      //   margin-top: 15px !important;
      // }
    }
  }
}
@media (min-width: 480px) and (max-width: 539px) {
  #login {
    background: url("../assets/Images/login-background-tab.png") no-repeat;
    .box {
      height: 55vh !important;
      width: 550px !important;
      padding: 30px;

      // .other-links {
      //   margin-top: 15px !important;
      // }
    }
  }
}

@media (min-width: 540px) and (max-width: 720px) {
  #login {
    background: url("../assets/Images/login-background-tab.png") no-repeat;
    .box {
      height: 75vh !important;
      width: 450px !important;
      padding: 20px;

      // .other-links {
      //   margin-top: 15px !important;
      // }
    }
  }
}

@media (min-width: 820px) and (max-width: 980px) {
  #login {
    background: url("../assets/Images/login-background-tab.png") no-repeat;
    .box {
      height: 50vh !important;
      width: 550px !important;
      padding: 30px;

      // .other-links {
      //   margin-top: 15px !important;
      // }
    }
  }
}
</style>
