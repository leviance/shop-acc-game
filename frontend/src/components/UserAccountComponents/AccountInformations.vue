<template>
  <div class="account-informations">
    <!-- khi cập nhật rồi hoặc không đăng nhập qua facebook thì hiện thông tin -->
    <div class="title"><strong>thông tin tài khoản</strong></div>
    <table>
      <tr>
        <td><p>id tài khoản</p></td>
        <td>
          <p class="red-background"><span>745508</span></p>
        </td>
      </tr>
      <tr>
        <td><p>tên hiển thị</p></td>
        <td>Dũng Dương</td>
      </tr>
      <tr>
        <td><p>tên tài khoản</p></td>
        <td>abc123123</td>
      </tr>
      <tr>
        <td><p>số điện thoại</p></td>
        <td>0968268030</td>
      </tr>
      <tr>
        <td><p>số dư</p></td>
        <td>
          <p class="red-background"><span>300.000 VNĐ</span></p>
        </td>
      </tr>
      <tr>
        <td><p>ngày tham gia</p></td>
        <td>03/06/2021</td>
      </tr>
    </table>
    <!-- khi đăng nhập bằng facebook thì làm form cập nhật tài khoản mật khẩu -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.account-informations {
  table {
    border-collapse: collapse;
    width: 100%;

    td {
      border-bottom: 1px solid #dddddd;
      text-align: left;
      font-size: 0.9rem;

      .red-background span {
        font-weight: 700;
        padding: 3px 10px;
        border-radius: 3px;
        background-color: var(--red-btn);
        color: #ffffff;
      }
    }

    td:nth-child(1) {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>
