
<template>
  <div id="login" class="h-100">
    <b-container class="h-100">
      <b-row class="h-100 justify-content-center align-items-center">
        <b-col md="5">
          <b-form @keydown.enter="login">
            <h1>Login</h1>

            <b-alert variant="danger" :show="alert !== ''">{{ alert }}</b-alert>
            <b-form-input
              type="email"
              class="form-control"
              placeholder="E-mail"
              autocomplete="email"
              v-model="email"
            />
            <b-form-input
              type="password"
              class="form-control"
              placeholder="Password"
              autocomplete="current-password"
              v-model="password"
            />
            <b-button block class="button" variant="primary" @click="login"
              >Login</b-button
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
};
</script>


<style scoped>
#login {
  background-color: rgba(0, 0, 0, 0.19)
    center no-repeat;
  background-size: 100% 100%;
}
form {
  border-radius: 15px;
  background-color: white;
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h1 {
  text-align: center;
}
input {
  margin-top: 15px;
}
.button {
  margin-top: 15px;
}
</style>