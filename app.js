var mobiles = {
  Samsung: {
    SamsungA10: {
      name: "Samsung A10",
      ram: "4gb",
      rom: "64gb",
      camera: "13 pixcels",
      price: "22,000 PKR",
      picture:
        "https://propakistani.pk/price/wp-content/uploads/2019/03/a10-price.jpg",
    },
    SamsungA20: {
      name: "Samsung A20",
      ram: "4gb",
      rom: "64gb",
      camera: "18 pixels",
      price: "28,000 PKR",
      picture: "https://dealpoint.pk/wp-content/uploads/2020/02/A20.jpg",
    },
    SamsungA30: {
      name: "Samsung A30",
      ram: "4gb",
      rom: "64gb",
      camera: "25 pixels",
      price: "29,000 PKR",
      picture: "https://atreboot.com/wp-content/uploads/2020/08/1348.png",
    },
  },
  IPhone: {
    IPhone11: {
      name: "IPhone11",
      ram: "4gb",
      rom: "64gb",
      camera: "12 pixels",
      price: "100,000 PKR",
      picture:
        "https://images.priceoye.pk/apple-iphone-11-pro-pakistan-priceoye-awhft-270x270.webp",
    },
    IPhone12: {
      name: "IPhone12",
      ram: "4gb",
      rom: "64gb",
      camera: "12 pixels",
      price: "150,000 PKR",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6zEfgYHillIZLGOGnEGrWMFjkpD5EAHUqHaVbjlhSN3CQ4F6_aK-1xr4Yl_Bh_Z7nM&usqp=CAU",
    },
    IPhone13: {
      name: "IPhone13",
      ram: "6gb",
      rom: "128gb",
      camera: "24 pixels",
      price: "200,000 PKR",
      picture:
        "https://images.priceoye.pk/apple-iphone-13-pakistan-priceoye-198ir-270x270.webp",
    },
  },
  Oppo: {
    OppoV20: {
      name: "OppoV20",
      ram: "8gb",
      rom: "128gb",
      camera: "64 pixels",
      price: "54,999 PKR",
      picture:
        "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1600777531847/13239c4e7dc8ccbc639ed14c170d5721.png",
    },
    OppoF19: {
      name: "OppoF19",
      ram: "6gb",
      rom: "128gb",
      camera: "48 pixels",
      price: "36,999 PKR",
      picture:
        "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/beta-f19/navigation/F19-navigation-blue-v2.png",
    },
    OppoF11: {
      name: "OppoF11",
      ram: "4gb",
      rom: "64gb",
      camera: "48 pixels",
      price: "35,999 PKR",
      picture:
        "https://cdn.techjuice.pk/wp-content/uploads/2019/04/Oppo-F11-1.jpg",
    },
  },
  Vivo: {
    VivoY20: {
      name: "VivoY20",
      ram: "4gb",
      rom: "64gb",
      camera: "13 pixels",
      price: "26,999 PKR",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxmYIuxw-CVhfeVVwsDnHx8UX_GHYfzHYfQpWlMGB5Q96z4TSx4m0R4mn7INt7T07fCA&usqp=CAU",
    },
    VivoY21: {
      name: "VivoY21",
      ram: "4gb",
      rom: "64gb",
      camera: "13 pixels",
      price: "43,999 PKR",
      picture:
        "https://kharedari.pk/cdn/shop/products/Vivo-Y21-Midnight-Blue_1200x1200.jpg?v=1648314157",
    },
    VivoY55: {
      name: "VivoY55",
      ram: "8gb",
      rom: "128gb",
      camera: "50 pixels",
      price: "64,999 PKR",
      picture:
        "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1653549516403/36d61c068db2f8c19da4ebd259a3fd8d.png",
    },
  },
};

var company = document.getElementById("company");
var model = document.getElementById("model");
var specs = document.getElementById("specs");

function searchBtn() {
  var abc = mobiles[company.value.trim()][model.value.trim()];
  console.log(abc);

  specs.innerHTML = "";

  specs.innerHTML += `
  <img src="${abc.picture}" width="250px"   >
  <p>Company Name: ${company.value}</p>
  <p>Model Name: ${abc.name}</p>
    <p>Ram: ${abc.ram}</p>
    <p>Rom: ${abc.rom}</p>
    <p>Camera: ${abc.camera}</p>
    <p>Price: ${abc.price}</p>`;

  company.value = "";
  model.value = "";
}
