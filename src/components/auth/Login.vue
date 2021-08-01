<template>
    <div class="bg" v-on:keyup.enter="login">
        <div class="d-flex justify-content-center">
            <b-card bg-variant="dark" text-variant="white" title="Login" class="b-card">
            <input type="text" class="form-control mt-3" placeholder="Email"
            required autofocus v-model="email">
            <input type="password" class="form-control" placeholder="Password"
            required v-model="password">
            <label class="checkbox pull-left">
                <input type="checkbox" class="mb-5" value="remember-me">
                Remember me
            </label>
            <button class="btn btn-lg btn-secondary btn-block mb-3" v-on:click="loginProcedure">
            Login</button>
            <p>New here? <br><a href="/register">Register</a></p>
            </b-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
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
    assureInputs(email, password) {
      if (email.length < 1) {
        this.makeToast('Provide username!');
        return false;
      }
      if (password.length < 1) {
        this.makeToast('Provide password!');
        return false;
      }
      return true;
    },
    login() {
      const path = `${(process.env.VUE_APP_API_URL)}login`;
      console.log(path);
      axios.post(path, {
        email: this.email,
        password: this.password,
      })
        .then((response) => {
          console.log(`lol ${response.status}`);
          localStorage.setItem('token', response.data.token); // to store the token
          localStorage.setItem('validTill', response.data.valid_till); // store token valid till datetime
          localStorage.setItem('user_id', response.data.user.id);
          if (localStorage.getItem('token')) {
            // axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            localStorage.setItem('authorizationHeader', `Bearer ${response.data.token}`);
            console.log(`Bearer ${response.data.token}`);
          }
          //   localStorage.getItem('name'); // to getthe token value
          window.location.replace('/');
        })
        .catch((error) => {
          if (error.response) {
            // Request made and server responded
            this.makeToast('Wrong credentials!');
            console.log(error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            this.makeToast('Server connection problem :-|');
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        });
    },
    loginProcedure() {
      this.assureInputs(this.email, this.password);
      this.login();
    },
  },
};

</script>

<style scoped>
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
