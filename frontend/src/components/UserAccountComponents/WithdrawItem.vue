<template>
  <div class="withdraw-item table-style">
    <div class="title"><strong>vật phẩm hiện có</strong></div>
    <table class="table-option">
      <tr>
        <td><p>kim cương</p></td>
        <td><p>0</p></td>
        <td>
          <p class="red-background"><span>rút ngay</span></p>
        </td>
      </tr>
      <tr>
        <td><p>quân huy</p></td>
        <td>0</td>
        <td>
          <p class="red-background"><span>rút ngay</span></p>
        </td>
      </tr>
      <tr>
        <td><p>rp (liên minh)</p></td>
        <td><p>0</p></td>
        <td>
          <p class="red-background"><span>rút ngay</span></p>
        </td>
      </tr>
    </table>
    <div class="notice-big">
      <p>
        <span
          ><b>Thông báo:</b> "Những trường hợp <b>spam</b> đăng ký tài khoản,
          chúng tôi sẽ kiểm tra và không hỗ trợ rút vật phẩm. Xin cám
          ơn!".</span
        >
      </p>
    </div>
    <div class="title"><strong>lịch sử rút</strong></div>
    <table>
      <tr>
        <th>loại thẻ/trạng thái</th>
        <th>m.giá/t.nhận</th>
        <th>mã thẻ</th>
        <th>serial</th>
        <th>thời gian</th>
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
    <p class="description">
      <strong
        >Dùng điện thoại <i class="fa fa-mobile" aria-hidden="true"></i>, hãy
        vuốt bảng từ phải qua trái (
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> ) để xem đầy
        đủ thông tin!</strong
      >
    </p>
    <ul class="notice-smail">
      <li class="red-text">
        <strong>Giao dịch bị từ chối - sẽ tự động hoàn lại vật phẩm.</strong>
      </li>
      <li>
        <strong
          >G.dịch từ chối khi: Bảo trì, Hệ thống bận, Mật khẩu sai hoặc Không có
          tài khoản này.</strong
        >
      </li>
      <li>
        <strong
          >Đối với game [khác] Free Fire, hãy nhập đúng tên đăng nhập và mật
          khẩu ở Garena muốn rút, kiểm tra mật khẩu
          <span class="red-text">(cẩn thận chữ cái đầu tự động in hoa)</span>
          dẫn đến mật khẩu sai => Từ chối rút.</strong
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.withdraw-item {
  .notice-big {
    margin-bottom: 50px;
    color: var(--red-text);

    span {
      padding: 5px;
      background-color: #f7e39ccf;
      border-radius: 3px;
    }
  }

  .notice-smail {
    font-size: 0.9rem;
    list-style: auto !important;
    margin-left: 20px;

    li {
      font-style: italic;
      display: list-item;
      list-style: circle !important;
      margin: 7px 0;
    }
  }

  .table-option {
    td {
      padding: 0px !important;
      border: none !important;
      text-transform: uppercase;
      font-weight: 700;

      .red-background span {
        font-weight: 700;
        padding: 3px 10px;
        border-radius: 3px;
        background-color: var(--red-btn);
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
}
</style>
