const SHOP_DATA = [
  {
    title: "Shirts",
    items: [
      {
        id: 10,
        name: "The Standard Fit Japanese Oxford Shirt",
        price: 86,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/18ace74f_e8de.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/568ecd0b_d80d.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/434b7d56_5ce8.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/8fe9ef7c_5e19.jpg",
        sizes: [29, 30, 31, 33, 34, 35],
        category: "Shirts",
      },
      {
        id: 11,
        name: "The Heavyweight Overshirt",
        price: 113,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/51cef65b_45a4.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/cbbe045c_d3b5.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/29e7e719_29e4.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/e87e1b5f_a5bf.jpg",
        sizes: [29, 30, 31, 33, 34, 35],
        category: "Shirts",
      },
      {
        id: 12,
        name: "The Brushed Flannel Shirt",
        price: 104,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/fcaa8482_1206.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/2328ac3c_d8c4.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/e44c77d5_f499.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/6039dc50_2fc3.jpg",
        sizes: [29, 30, 31, 33],
        category: "Shirts",
      },
      {
        id: 13,
        name: "The Brushed Flannel Grind Shirt",
        price: 104,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/835937fe_360b.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/14b3cc93_8dde.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/e2e9f5bb_5d21.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/5125ab7a_f515.jpg",
        sizes: [29, 30, 31, 33],
        category: "Shirts",
      },
      {
        id: 14,
        name: "The Standard Fit Japanese Oxford Shirt, Ligth",
        price: 86,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/5b37d62e_bae4.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/9cbc9be3_60d3.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/2cae37d2_d447.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/d79e9fa4_6d89.jpg",
        sizes: [29, 30, 31, 33, 34, 35],
        category: "Shirts",
      },
      {
        id: 15,
        name: "The Standard Grind Japanese Oxford Shirt, Light",
        price: 86,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/edbee575_c692.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/61f5c8bc_e1d8.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/cffa5bb8_e10f.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/202446b1_9fa9.jpg",
        sizes: [33, 34, 35],
        category: "Shirts",
      },
      {
        id: 16,
        name: "The Slim Fit Dark Japanese Oxford",
        price: 86,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/b305c759_d0f6.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/c1897dd7_6379.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/d9c5f633_6540.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/57d96a8d_b580.jpg",
        sizes: [29, 28, 31],
        category: "Shirts",
      },
      {
        id: 17,
        name: "The Premium-Weight Rugby Shirt",
        price: 75,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/c1817659_6208.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/15822b2a_93d1.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/c9135684_1500.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/1d9c7add_e7ce.jpg",
        sizes: [29, 28, 31, 32, 33],
        category: "Shirts",
      },
    ],
  },
  {
    title: "Sweaters",
    items: [
      {
        id: 18,
        name: "The Felted Merino Cable",
        price: 195,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/f2a6179d_246e.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/cad17fe3_449b.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/669b164e_efbd.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/901b6a0d_9615.jpg",
        sizes: [29, 28, 31, 32, 33],
        category: "Sweaters",
      },
      {
        id: 19,
        name: "The Felted Merino Half-Zip Sweater",
        price: 178,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/8b795190_ba9f.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/199456dd_2fa0.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/0557577e_114c.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/4890afc2_5085.jpg",
        sizes: [29, 28, 31, 32, 33],
        category: "Sweaters",
      },
      {
        id: 20,
        name: "The No-Sweat Sweatshirt",
        price: 90,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/abc4029f_226c.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/7f68d7a8_01ca.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/f3702c6c_91f9.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/57183565_c86c.jpg",
        sizes: [29, 28],
        category: "Sweaters",
      },
      {
        id: 21,
        name: "The Grade-A Cashmere Crew",
        price: 195,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/211bc220_2795.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/85ba0c64_6f0f.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/0e55daea_5534.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/40f20a00_4148.jpg",
        sizes: [29, 28],
        category: "Sweaters",
      },
      {
        id: 22,
        name: "The Grade-B Cashmere Crew",
        price: 195,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/dc154fbb_0ccd.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/db1229e6_4451.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/717e4a6f_9dcf.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/18515b21_d287.jpg",
        sizes: [29, 28],
        category: "Sweaters",
      },
      {
        id: 23,
        name: "The Grade-B Cashmere Crew",
        price: 195,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/11c7a2e6_1289.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/6b7aac00_241b.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/01540b33_5ec9.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/ebb7908c_0787.jpg",
        sizes: [29, 28],
        category: "Sweaters",
      },
      {
        id: 24,
        name: "The No-Sweat Sweatshirt, Pink",
        price: 102,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/514f0a2c_a43c.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/d160f521_22ad.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/8d3db810_5e30.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/8e3a5a67_eea3.jpg",
        sizes: [29, 28],
        category: "Sweaters",
      },
      {
        id: 25,
        name: "The No-Sweat Sweatshirt, Pink",
        price: 195,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/22d664f8_bae9.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/d4351b8b_3e43.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/38c719a1_f395.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/7417750b_92ef.jpg",
        sizes: [29, 28],
        category: "Sweaters",
      },
    ],
  },
  {
    title: "Jeans",
    items: [
      {
        id: 1,
        name: "The Organic Slim Fit Carpenter Jean",
        price: 102,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/8b82fda8_67b9.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/8bb45922_ffe4.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/61ae5f11_7015.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/83089034_ba35.jpg",
        sizes: [28, 29, 30, 31, 32, 33, 34, 36, 38],
        category: "jeans",
      },
      {
        id: 2,
        name: "The Selvedge Slim Fit Jean",
        price: 147,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/cae319c0_fdcd.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/72d816fc_3455.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/0c814dd5_f044.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/f9c358e6_af08.jpg",
        sizes: [28, 29, 30, 31, 32, 33, 34, 36, 38],
        category: "jeans",
      },
      {
        id: 3,
        name: "The Organic Cotton Slim Fit Jean",
        price: 102,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/f4f23d73_2aa3.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/a879870d_13ba.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/ba295c40_69f7.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/e6ce2401_26f7.jpg",
        sizes: [28, 29, 30, 31, 32],
        category: "jeans",
      },
      {
        id: 4,
        name: "The Organic Dark Indigo Slim Fit Carpenter Jean",
        price: 102,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/ddc57108_61a4.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/f7f8b136_8c9f.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/7df6e966_f703.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/31026022_8d7f.jpg",
        sizes: [29, 30, 31, 32, 33, 34],
        category: "jeans",
      },
      {
        id: 5,
        name: "The Slim Fit Jean",
        price: 90,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/23f3f3af_b8ea.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/7cc6c2b8_e345.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/da236118_ab99.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/0daa938a_db9f.jpg",
        sizes: [29, 30, 31, 32, 33, 34],
        category: "jeans",
      },
      {
        id: 6,
        name: "The Black Slim Fit Jean",
        price: 90,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/7c970845_9908.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/8b6b8670_c62a.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/9018f6e6_0aa8.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/1f40946d_e158.jpg",
        sizes: [30, 32, 33, 34],
        category: "jeans",
      },
      {
        id: 7,
        name: "The Organic Cotton Slim Fit Jean",
        price: 102,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/ad337ee3_971b.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/deebd455_ddc1.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/56be5164_d6ea.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/deebd455_ddc1.jpg",
        sizes: [33, 34],
        category: "jeans",
      },
      {
        id: 8,
        name: "The Workers Straight Fit Jean",
        price: 79,
        imageUrlMain:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/925c773b_4eec.jpg",
        imageUrlShowOff:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/b7eace5c_9ccd.jpg",
        additionalImage1:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/da8cec7a_e80f.jpg",
        additionalImage2:
          "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face,q_auto,w_auto:100:1200/v1/i/9110bd3f_9fdb.jpg",
        sizes: [29, 30, 31, 33, 34, 35],
        category: "jeans",
      },
    ],
  },
];

export default SHOP_DATA;
