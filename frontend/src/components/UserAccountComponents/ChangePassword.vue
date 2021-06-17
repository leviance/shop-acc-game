<template>
  <div class="change-password">
    <div class="title"><strong>đổi mật khẩu</strong></div>
    <div class="form">
      <input type="text" placeholder="Mật khẩu cũ" />
      <input type="text" placeholder="Mật khẩu mới" />
      <button><strong>Đổi mật khẩu</strong></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.change-password {
  .form {
    width: 100%;

    input {
      outline: none;
      border: 1px solid var(--grey-text);
      padding: 5px 10px;
      border-radius: 3px;
      font-weight: 700;
      font-size: 0.9rem;
      color: var(--grey-text);
    }

    button {
      background-color: var(--red-btn);
      border: none;
      outline: none;
      padding: 6px 10px;
      color: #ffffff;
      font-size: 0.9rem;
      border-radius: 2px;
      cursor: pointer;
    }

    input,
    button {
      margin: 10px 15px 10px 0px;
    }
  }
}
</style>
