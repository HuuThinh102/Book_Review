<template>
    <div>
        <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style="width: 23rem;">

            <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Đăng ký</h3>

            <div class="form-outline mb-4">
              <input type="email" id="form2Example18" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example18">Username</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form2Example28" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example28">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p>Bạn chưa có tài khoản? <router-link to = "/auth/register" class="link-info">Đăng ký tại đây</router-link></p>

          </form>

        </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block mx-5">
        <img src="../assets/img/login.png"
          alt="Login image" class="w-100 vh-80" style="object-fit: cover; object-position: left;">
      </div>
    </div>
  </div>
</section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>