<template>
    <div class="bg">
        <div class="d-flex justify-content-center">
            <b-card bg-variant="dark" text-variant="white" title="Register" class="b-card">
            <input type="text" class="form-control mt-3" placeholder="Username"
            required autofocus v-model="username">
            <input type="text" class="form-control" placeholder="Email"
            required autofocus v-model="email">
            <input type="password" class="form-control" placeholder="Password"
            required v-model="password">
            <input type="password" class="form-control mb-3" placeholder="Confirm Password"
            required v-model="confirmPassword">
            <p class="pl mb-5">Passwords must contain at least six characters,
             including uppercase, lowercase letters, numbers and a special character.</p>
            <!-- <button class="btn btn-lg btn-secondary btn-block mb-3" v-on:click="login"> -->
            <button class="btn btn-lg btn-secondary btn-block mb-3" v-on:click="isValid">
            Register</button>
            <p>Already a member? <br><a href="/login">Login!</a></p>
            </b-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    makeToast(text) {
      this.$toasted.show(text, {
        duration: 2000,
        position: 'top-center',
        type: 'error',
        theme: 'bubble',
      });
    },
    validateUsername(username) {
      if (username.length < 5) {
        this.makeToast('Username is to short!');
        return false;
      }
      return true;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(email).toLowerCase())) {
        this.makeToast('No valid emailaddress provided!');
        return false;
      }
      return true;
    },
    validatePassword(password, confirmPassword) {
      if (!(password === confirmPassword)) {
        this.makeToast('Passwords do not match!');
        return false;
      }
      if (!(password.length > 5)) {
        this.makeToast('Password is to short!');
        return false;
      }
      if (!(/[a-z]/.test(password))) {
        this.makeToast('No lowercase character in password!');
        return false;
      }
      if (!(/[A-Z]/.test(password))) {
        this.makeToast('No uppercase character in password!');
        return false;
      }
      if (!(/\d/.test(password))) {
        this.makeToast('No digit in password!');
        return false;
      }
      if (!(/[!-/:-@[-`{-~]/.test(password))) {
        this.makeToast('No special character in password!');
        return false;
      }
      return true;
    },
    isValid() {
      if (this.validateUsername(this.username)
      && this.validateEmail(this.email)
      && this.validatePassword(this.password, this.confirmPassword)) {
        this.registerNewUser();
      }
      return console.log('not lol');
    },
    registerNewUser() {
      const path = `${(process.env.VUE_APP_API_URL)}register`;
      axios.post(path, {
        name: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword,
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token); // to store the token
          localStorage.setItem('user_id', response.data.user.id); //  store user_id
          localStorage.setItem('validTill', response.data.valid_till); // store token valid till datetime
          //   localStorage.getItem('name'); // to getthe token value
          window.location.replace('/');
        })
        .catch((error) => {
          console.log(error);
          console.log('lol');
        });
    },
  },
};

</script>

<style scoped>
.pl
{
    text-align: left;
}
.b-card
{
    border-radius: 25px;
    width: 21.5em;
    /* margin:10 auto; */
    margin-top: 7em;
    justify-content: center;
    text-align: center;
    position: relative;
    opacity: .7;
}

.form-control
{
    margin-bottom: 1em;
}

.bg {
  /* The image used */
  background-image: url("https://i.pinimg.com/originals/f3/7f/b0/f37fb06b13899eeeb53e8821c97f1b68.jpg");

  /* Full height */
  min-height: 100%;
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
