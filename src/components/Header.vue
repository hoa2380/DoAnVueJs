<template>
  <body>
    <header class="header-section">
      <div class="header-top">
        <div class="container">
          <div class="ht-left">
            <div class="mail-service">
              <i class=" fa fa-envelope"></i>
              hoagamer2k@gmail.com
            </div>
            <div class="phone-service">
              <i class=" fa fa-phone"></i>
              +84 354267587
            </div>
          </div>
          <div class="ht-right">
            <a href="#" class="login-panel"
              ><i class="fa fa-user"></i>Đăng kí</a
            >
            <a href="#" class="login-panel"
              ><i class="fa fa-user"></i>Đăng Nhập</a
            >
            <div class="top-social">
              <a href="#"><i class="ti-facebook"></i></a>
              <a href="#"><i class="ti-twitter-alt"></i></a>
              <a href="#"><i class="ti-linkedin"></i></a>
              <a href="#"><i class="ti-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="inner-header">
          <div class="row">
            <div class="col-lg-2 col-md-2">
              <div class="logo">
                <a href="#">
                  <img src="../assets/images/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-7 col-md-7">
              <div class="advanced-search">
                <form action="#" class="input-group">
                  <input type="text" placeholder="Tìm kiếm" />
                </form>
              </div>
            </div>
            <div class="col-lg-3 text-right col-md-3">
              <ul class="nav-right">
                <li class="cart-icon">
                  <a href="">
                    <i class="icon_bag_alt"></i>
                    <span id="total-quanty-show"></span>
                    <span id="total-quanty-show">0</span>
                  </a>
                  <div class="cart-hover">
                    <div id="change-item-cart">
                      <div class="select-items">
                        <table>
                          <tbody>
                            <tr>
                              <td class="si-pic"><img src="" alt="" /></td>
                              <td class="si-text">
                                <div class="product-selected">
                                  <p></p>
                                  <h6></h6>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="select-total">
                        <span>total:</span>
                        <h5>đ</h5>
                      </div>
                    </div>

                    <div class="select-button">
                      <a href="#" class="primary-btn view-card">Xem giỏ hàng</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-item">
        <div class="container">
          <div class="nav-depart">
            <div class="depart-btn">
              <i class="ti-menu"></i>
              <span>Danh mục sản phẩm</span>
              <ul class="depart-hover">
                <li v-for="category in categories" :key="category.id">
                  <a href="#">
                    {{ category.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text">
              <a href="#"><i class="fa fa-home"></i> Trang chủ</a>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="product-shop spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 order-1 order-lg-2">
            <div class="product-list">
              <div class="row">
                <div
                  v-for="product in products"
                  :key="product.id"
                  class="col-lg-4 col-sm-6"
                >
                  <div class="product-item">
                    <div class="pi-pic">
                      <img :src="product.image" alt="" />
                      <div class="sale pp-sale">Sale</div>
                      <div class="icon">
                        <i class="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li class="quick-view"><a>+ Add Cart</a></li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <a href="#">
                        <h5>{{ product.name }}</h5>
                      </a>
                      <div class="product-price">{{ product.price }}₫</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "NavBar",
  data() {
    return {
      categories: [],
      products: [],
    };
  },
  methods: {},
  created() {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((response) => (this.categories = response.data.data))
      .catch();
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        this.products = response.data.data;
      })
      .catch();
  },
  mounted() {},
};
</script>

<style scoped></style>
