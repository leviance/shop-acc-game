<template>
  <div class="auto-recharge-card table-style">
    <div class="title"><strong>khu nạp thẻ</strong></div>
    <div class="charge-form">
      <select name="card-seri" id="card-seri">
        <option value="">Chọn nhà mạng</option>
        <option value="viettel">VIETTEL</option>
        <option value="vinaphone">VINAPHONE</option>
        <option value="mobilephone">MOBILEPHONE</option>
      </select>
      <select name="card-value" id="card-value">
        <option value="">Chọn mệnh giá</option>
        <option value="10000">10.000 VNĐ - (nhận 100%)</option>
        <option value="20000">20.000 VNĐ - (nhận 100%)</option>
        <option value="30000">30.000 VNĐ - (nhận 100%)</option>
        <option value="50000">50.000 VNĐ - (nhận 100%)</option>
        <option value="100000">100.000 VNĐ - (nhận 100%)</option>
        <option value="200000">200.000 VNĐ - (nhận 100%)</option>
        <option value="300000">300.000 VNĐ - (nhận 100%)</option>
        <option value="500000">500.000 VNĐ - (nhận 100%)</option>
        <option value="1000000">1.000.000 VNĐ - (nhận 100%)</option>
      </select>
      <input type="text" />
      <input type="text" />

      <button><strong>NẠP THẺ</strong></button>
      <strong class="charge-notice"
        >Hãy chọn đúng mệnh giá. Sai sẽ mất thẻ</strong
      >
    </div>
    <div class="title"><strong>thẻ nạp gần nhất</strong></div>
    <div class="wrap-history">
      <table>
        <tr>
          <th>loại thẻ/trạng thái</th>
          <th>M.GIÁ/T.NHẬN</th>
          <th>MÃ THẺ</th>
          <th>SERIAL THẺ</th>
          <th>NẠP LÚC</th>
        </tr>
        <tr>
          <td>845512</td>
          <td>06/16/2021</td>
          <td>Liên mình huyển thoại</td>
          <td>Random</td>
          <td>Nick cấp 30</td>
        </tr>
        <tr>
          <td>845512</td>
          <td>06/16/2021</td>
          <td>Liên mình huyển thoại</td>
          <td>Random</td>
          <td>Nick cấp 30</td>
        </tr>
      </table>
    </div>
    <p class="description">
      <strong
        >Dùng điện thoại <i class="fa fa-mobile" aria-hidden="true"></i>, hãy
        vuốt bảng từ phải qua trái (
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> ) để xem đầy
        đủ thông tin!</strong
      >
    </p>
    <p class="description">
      <strong>M.GIÁ = MỆNH GIÁ, T.NHẬN = THỰC NHẬN</strong>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.auto-recharge-card {
  .charge-form {
    padding: 0px 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    input,
    select {
      padding: 8px;
      font-size: 0.9rem;
      border-radius: 5px;
      margin-bottom: 12px;
      outline: none;
      border: 1px solid var(--black-one) !important;

      option {
        font-size: 1rem;
        padding: 8px;
      }
    }

    button {
      width: 100px;
      padding: 10px;
      color: #ffffff;
      background-color: var(--red-btn);
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 4px;
    }

    .charge-notice {
      padding-bottom: 20px;
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
